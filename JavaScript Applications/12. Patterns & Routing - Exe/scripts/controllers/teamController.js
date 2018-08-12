myControllers.createGet = function(context){
    context.loggedIn = sessionStorage.getItem("authtoken") !== null;
    context.username = sessionStorage.getItem("username");
    context.loadPartials({
        header: "templates/common/header.hbs",
        footer: "templates/common/footer.hbs",
        createForm: "templates/create/createForm.hbs"
    }).then(function(){
        this.partial("templates/create/createPage.hbs")
    })
};

myControllers.createPost = function(context){
    let teamName = context.params.name;
    let comment = context.params.comment;

    if(teamName.length === 0){
        auth.showError("The name cannot be empty!");
        return;
    }

    teamsService
        .createTeam(teamName, comment)
        .then(function(team){
            teamsService
                .joinTeam(team._id)
                .then(function(userInfo){
                    auth.saveSession(userInfo);
                    auth.showInfo(`Team ${teamName} was created!`);
                    myControllers.displayCatalog(context);
                })
                .catch(auth.handleError)
        })
        .catch(auth.handleError)
}

myControllers.joinTeam = function(context){
    let teamId = context.params.id.substr(1);

    teamsService
        .joinTeam(teamId)
        .then(function(userInfo) {
            userInfo.teamId = teamId;
            auth.showInfo("Joined to a team!");
            auth.saveSession(userInfo);
            myControllers.displayCatalog(context);
        });
};

myControllers.leaveTeam = function(context){
    teamsService
        .leaveTeam()
        .then((userInfo) => {
            auth.showInfo("Leaved the team successfully!");
            auth.saveSession(userInfo);
            myControllers.displayCatalog(context);
        })
        .catch(auth.handleError);
};

myControllers.editGet = function(context){
    let teamId = context.params.id.substr(1);

    teamsService.loadTeamDetails(teamId).then(teamInfo => {
        context.name = teamInfo.name;
        context.comment = teamInfo.comment;
        context.teamId = teamId;

        context.loadPartials({
            header: "templates/common/header.hbs",
            footer: "templates/common/footer.hbs",
            editForm: "templates/edit/editForm.hbs",
        }).then(function(){
            this.partial("templates/edit/editPage.hbs")
        })

    }).catch(auth.handleError)
};

myControllers.editPost = function(context){
    let teamId = context.params.id.substr(1);
    let name = context.params.name;
    let comment = context.params.comment;

    if(name.length === 0){
        auth.showError("The name cannot be empty!");
        return;
    }

    teamsService
        .edit(teamId, name, comment)
        .then(() => {
            auth.showInfo("Updated Successfully!");
            myControllers.displayCatalog(context);
        })
        .catch(auth.handleError);
};

myControllers.deleteTeam = function(context){
    let teamId = context.params.id.substr(1);
    let currentTeamId = sessionStorage.getItem("teamId");

    teamsService
        .deleteTeam(teamId)
        .then((data) => {
            auth.showInfo("Team deleted successfully!");

            //If the deleted team was the current team of the user,
            //we should leave the team of the player blank
            if(currentTeamId === teamId){
                teamsService.leaveTeam().then(function(userInfo){
                    auth.saveSession(userInfo);
                })
            }
            myControllers.displayCatalog(context);
        }).catch(auth.handleError);
};