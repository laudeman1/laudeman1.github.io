clean(document);
var url = "https://swapi.co/api/";

function getInfo(type, number) {
    var newUrl = url;
    newUrl += type + "/" + number + "/";
    ajax(newUrl, function (resp) {
        resp = parseResponse(resp);
        modalBody.innerText = "";
        for (var x in resp) {
            modalBody.innerText += x + ": " + resp[x] + "\n";
        }
        $('#modal').modal('show');
    });
}

function getSearch(type, id) {
    var newUrl = url;
    newUrl += type + "/?search=" + id;
    ajax(newUrl, function (resp) {
        resp = parseResponse(resp);
        modalBody.innerText = "";
        for (var x in resp.results[0]) {
            modalBody.innerText += x + ": " + resp.results[0][x] + "\n";
        }
        $('#modal').modal('show');
    });
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