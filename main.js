clean(document);
var url = "https://swapi.co/api/";

function getInfo(type, number) {
    var newUrl = url;
    if (type === "person" && number <= 87 && number >= 1) {
        newUrl += "people/" + number + "/";
        ajax(newUrl, function (resp) {
            resp = parseResponse(resp);
            modalTitle.innerText = resp.name;
            modalBody.innerText = "";
            for (var x in resp){
              modalBody.innerText += x + ": " + resp[x] + "\n";
            }
            $('#modal').modal('show');           
        });
    }
    if (type === "planet" && number <= 61 && number >= 1) {
        newUrl += "planets/" + number + "/";
        ajax(newUrl, function (resp) {
            resp = parseResponse(resp);
            modalTitle.innerText = resp.name;
            modalBody.innerText = "";
            for (var x in resp){
              modalBody.innerText += x + ": " + resp[x] + "\n";
            }
            $('#modal').modal('show');   
        });
    }
    if (type === "film" && number <= 7 && number >= 1) {
        newUrl += "films/" + number + "/";
        ajax(newUrl, function (resp) {
            resp = parseResponse(resp);
            modalTitle.innerText = resp.title;
            modalBody.innerText = "";
            for (var x in resp){
              modalBody.innerText += x + ": " + resp[x] + "\n";
            }
            $('#modal').modal('show');   
        });
    }
    if (type === "species" && number <= 37 && number >= 1) {
        newUrl += "species/" + number + "/";
        ajax(newUrl, function (resp) {
            resp = parseResponse(resp);
            modalTitle.innerText = resp.name;
            modalBody.innerText = "";
            for (var x in resp){
              modalBody.innerText += x + ": " + resp[x] + "\n";
            }
            $('#modal').modal('show');   
        });
    }
    if (type === "vehicle" && number <= 39 && number >= 1) {
        newUrl += "vehicles/" + number + "/";
        ajax(newUrl, function (resp) {
            resp = parseResponse(resp);
            modalTitle.innerText = resp.name;
            modalBody.innerText = "";
            for (var x in resp){
              modalBody.innerText += x + ": " + resp[x] + "\n";
            }
            $('#modal').modal('show');   
        });
    }
    if (type === "starship" && number <= 37 && number >= 1) {
        newUrl += "starships/" + number + "/";
        ajax(newUrl, function (resp) {
            resp = parseResponse(resp);
            modalTitle.innerText = resp.name;
            modalBody.innerText = "";
            for (var x in resp){
              modalBody.innerText += x + ": " + resp[x] + "\n";
            }
            $('#modal').modal('show');   
        });
    }
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
