let service = (function(){
    function validatePost(url, title){
        if (url.match(/\bhttp/) === null) {
            auth.showError("The link url is incorrect!");
            return false;
        }

        if (url.length === 0) {
            auth.showError("The link url cannot be empty!");
            return false;
        }

        if (title.length === 0) {
            auth.showError("The title cannot be empty!");
            return false;
        }

        return true;
    }

    function getFormData(context){
        let url = context.params.url;
        let title = context.params.title;
        let imageUrl = context.params.image;
        let description = context.params.description;
        let author = sessionStorage.getItem("user");

        return {
            url, title, imageUrl, description, author
        }
    }

    function calcTime(dateIsoFormat) {
        let diff = new Date - (new Date(dateIsoFormat));
        diff = Math.floor(diff / 60000);
        if (diff < 1) return 'less than a minute';
        if (diff < 60) return diff + ' minute' + pluralize(diff);
        diff = Math.floor(diff / 60);
        if (diff < 24) return diff + ' hour' + pluralize(diff);
        diff = Math.floor(diff / 24);
        if (diff < 30) return diff + ' day' + pluralize(diff);
        diff = Math.floor(diff / 30);
        if (diff < 12) return diff + ' month' + pluralize(diff);
        diff = Math.floor(diff / 12);
        return diff + ' year' + pluralize(diff);

        function pluralize(value) {
            if (value !== 1) return 's';
            else return '';
        }
    }

    function generateInfo(entry) {
        let creationDate = entry._kmd.ect;
        let author = entry.author;
        return `submitted ${service.calcTime(creationDate)} ago by ${author}`;
    }

    return {
        validatePost,
        getFormData,
        calcTime,
        generateInfo
    }
})();