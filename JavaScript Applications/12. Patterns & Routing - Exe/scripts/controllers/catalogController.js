myControllers.displayCatalog = function(context){
    context.loggedIn = sessionStorage.getItem("authtoken") !== null;
    context.username = sessionStorage.getItem("username");

    teamsService.loadTeams()
        .then(function(teams) {
            // BUG
            context.hasNoTeam = sessionStorage.getItem("teamId") === null || sessionStorage.getItem("teamId") === "undefined";
            context.teams = teams;
            context.loadPartials({
                header: "templates/common/header.hbs",
                footer: "templates/common/footer.hbs",
                team: "templates/catalog/team.hbs"
            }).then(function(){
                this.partial("templates/catalog/teamCatalog.hbs")
            });
        });
};

myControllers.getCatalog = function(context) {
    context.loggedIn = sessionStorage.getItem("authtoken") !== null;
    context.username = sessionStorage.getItem("username");

    let teamId = context.params.id.substr(1);

    teamsService.loadTeamDetails(teamId).then((team) => {

        context.name = team.name;
        context.comment = team.comment;
        context.teamId = teamId;
        context.isAuthor = team._acl.creator === sessionStorage.getItem("userId");
        context.isOnTeam = team._id === sessionStorage.getItem("teamId");
    }).then(() => {
        context.loadPartials({
            header: "templates/common/header.hbs",
            footer: "templates/common/footer.hbs",
            //teamMember: "templates/catalog/teamMember.hbs",
            teamControls: "templates/catalog/teamControls.hbs"
        }).then(function () {
            this.partial("templates/catalog/details.hbs")
        })
    }).catch(auth.handleError)
}