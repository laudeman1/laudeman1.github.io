clean(document);
var url = "https://swapi.co/api/";

function getInfo(type, number) {
    var newUrl = url;
    if (type === "person") {
        newUrl += "people/" + number + "/";
        ajax(newUrl, function (resp) {
            resp = parseResponse(resp);
            modalTitle.innerText = resp.name;
            modalBody.innerText = "";
            for (var x in resp) {
                modalBody.innerText += x + ": " + resp[x] + "\n";
            }
            $('#modal').modal('show');
        });
    }
    if (type === "planet") {
        newUrl += "planets/" + number + "/";
        ajax(newUrl, function (resp) {
            resp = parseResponse(resp);
            modalTitle.innerText = resp.name;
            modalBody.innerText = "";
            for (var x in resp) {
                modalBody.innerText += x + ": " + resp[x] + "\n";
            }
            $('#modal').modal('show');
        });
    }
    if (type === "film") {
        newUrl += "films/" + number + "/";
        ajax(newUrl, function (resp) {
            resp = parseResponse(resp);
            modalTitle.innerText = resp.title;
            modalBody.innerText = "";
            for (var x in resp) {
                modalBody.innerText += x + ": " + resp[x] + "\n";
            }
            $('#modal').modal('show');
        });
    }
    if (type === "species") {
        newUrl += "species/" + number + "/";
        ajax(newUrl, function (resp) {
            resp = parseResponse(resp);
            modalTitle.innerText = resp.name;
            modalBody.innerText = "";
            for (var x in resp) {
                modalBody.innerText += x + ": " + resp[x] + "\n";
            }
            $('#modal').modal('show');
        });
    }
    if (type === "vehicle") {
        newUrl += "vehicles/" + number + "/";
        ajax(newUrl, function (resp) {
            resp = parseResponse(resp);
            modalTitle.innerText = resp.name;
            modalBody.innerText = "";
            for (var x in resp) {
                modalBody.innerText += x + ": " + resp[x] + "\n";
            }
            $('#modal').modal('show');
        });
    }
    if (type === "starship") {
        newUrl += "starships/" + number + "/";
        ajax(newUrl, function (resp) {
            resp = parseResponse(resp);
            modalTitle.innerText = resp.name;
            modalBody.innerText = "";
            for (var x in resp) {
                modalBody.innerText += x + ": " + resp[x] + "\n";
            }
            $('#modal').modal('show');
        });
    }
}

function getSearch(type, id) {
    var newUrl = url;
    newUrl += type + "/?search=" + id;
    modalBody.innerText = "";
    for (var x in resp) {
        modalBody.innerText += x + ": " + resp[x] + "\n";
    }
    $('#modal').modal('show');
}

function getRandomInfo(max, type) {
    var randomNumber = Math.floor((Math.random() * max) + 1);
    getInfo(type, randomNumber);
}

function clean(node) {
    for (var n = 0; n < node.childNodes.length; n++) {
        var child = node.childNodes[n];
        if (
            child.nodeType === 8 ||
            (child.nodeType === 3 && !/\S/.test(child.nodeValue))
        ) {
            node.removeChild(child);
            n--;
        } else if (child.nodeType === 1) {
            clean(child);
        }
    }
}