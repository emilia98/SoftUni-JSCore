function attachEvents(){
    const loadBtn = $('.load');
    const addBtn = $('.add');
    let deleteBtns = null;
    let updateBtns = null;
    const baseUrl = "https://baas.kinvey.com/appdata/kid_SkVj3sysG/biggestCatches";
    const username = "guest";
    const password = "guest";
    const catches = $('#catches');
    let errorMsg = $('<h2 id="errorMsg"></h2>');

    loadBtn.click(loadEntries);
    addBtn.click(addEntry);

    function request(method, customUrl, data){
        let req = {
            url: `${baseUrl}${customUrl}`,
            method: method,
            headers: {
                "Authorization": "Basic " + btoa(`${username}:${password}`)
            },
            contentType: "application/json",
        };
        if(method === "POST" || method === "PUT"){
            req.data = JSON.stringify(data)
        }
        return $.ajax(req);
    }

    function loadEntries(){
        catches.children().not(":first").remove();

        request("GET", "")
            .then(showEntries)
            .catch(handleError);

        function showEntries(data){
            for(let entry of data){
                let div_catch = $('<div class="catch"></div>');
                div_catch.attr("data-id", entry._id);

                div_catch
                    .append($('<label>Angler</label>'))
                    .append($(`<input type="text" class="angler" value="${entry.angler}"/>`))
                    .append($('<label>Weight</label>'))
                    .append($(`<input type="number" class="weight" value="${entry.weight}"/>`))
                    .append($('<label>Species</label>'))
                    .append($(`<input type="text" class="species" value="${entry.species}"/>`))
                    .append($('<label>Location</label>'))
                    .append($(`<input type="text" class="location" value="${entry.location}"/>`))
                    .append($('<label>Bait</label>'))
                    .append($(`<input type="text" class="bait" value="${entry.bait}"/>`))
                    .append($('<label>Capture Time</label>'))
                    .append($(`<input type="number" class="captureTime" value="${entry.captureTime}"/>`))
                    .append($('<button class="update">Update</button>'))
                    .append($('<button class="delete">Delete</button>'));

                catches.append(div_catch);
            }
            deleteBtns = $('.delete');
            deleteBtns.click(deleteEntry);

            updateBtns = $('.update');
            updateBtns.click(updateEntry);
        }
    }

    function addEntry(){
        let entry = returnEntry($("#addForm"));

        request("POST", "", entry)
            .then(addedSuccessfully)
            .catch(handleError);

        function addedSuccessfully(data){
            errorMsg.detach();
            $('#addForm input').val("");
        }
    }

    function deleteEntry(){
        let elementToDelete = $(this).parent();
        let id = elementToDelete.attr("data-id");

        request("DELETE", `/${id}`)
            .then(() => deletedSuccessfully(elementToDelete))
            .catch(handleError);

        function deletedSuccessfully(element){
            errorMsg.detach();
            $(element).remove();
        }
    }

    function updateEntry(){
        let elementToUpdate = $(this).parent();
        let id = elementToUpdate.attr("data-id");
        let entry = returnEntry(elementToUpdate);

        request("PUT", `/${id}`, entry)
            .then((updatedSuccessfully))
            .catch(handleError);

        function updatedSuccessfully(element){
            errorMsg.detach();
            // console.log("Vsichko e tochno");
        }
    }

    function handleError(reason){
        errorMsg.text(reason.responseJSON.error);
        errorMsg.css("text-align", "center");
        errorMsg.css("color", "#f80221");
        errorMsg.appendTo($("body"));
    }

    function returnEntry(parentElement){
        return {
            angler: parentElement.find('.angler').val(),
            weight: Number(parentElement.find('.weight').val()),
            species: parentElement.find('.species').val(),
            location: parentElement.find('.location').val(),
            bait: parentElement.find('.bait').val(),
            captureTime: parseInt(parentElement.find('.captureTime').val()),
        };
    }
}