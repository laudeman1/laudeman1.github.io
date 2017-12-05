clean(document);
var url = "https://swapi.co/api/";

function getInfo(type) {
    var newUrl = url;
    if (type === "person" && peopleSearch.value <= 87 && peopleSearch.value >= 1) {
        newUrl += "people/" + peopleSearch.value + "/";
        ajax(newUrl, function (resp) {
            resp = parseResponse(resp);
            modalTitle.innerText = resp.name;
            modalBody.innerText = "Height: " + resp.height + "\n" + "Mass: " + resp.mass + "\n" + "Gender: " + resp.gender;
            $('#modal').modal('show');
        });
    }
    if (type === "planet" && planetSearch.value <= 61 && planetSearch.value >= 1) {
        newUrl += "planets/" + planetSearch.value + "/";
        ajax(newUrl, function (resp) {
            resp = parseResponse(resp);
            modalTitle.innerText = resp.name;
            modalBody.innerText = "Rotation Period: " + resp.rotation_period + "\n" + "Climate: " + resp.climate + "\n" + "Diameter: " + resp.diameter + "\n" + "Population: " + resp.population + "\n" + "Terrain: " + resp.terrain;
            $('#modal').modal('show');
        });
    }
    if (type === "film" && filmSearch.value <= 7 && filmSearch.value >= 1) {
        newUrl += "films/" + filmSearch.value + "/";
        ajax(newUrl, function (resp) {
            resp = parseResponse(resp);
            modalTitle.innerText = resp.title;
            modalBody.innerText = "Director: " + resp.director + "\n" + "Producer: " + resp.producer + "\n" + "Episode ID: " + resp.episode_id + "\n" + "Release Date: " + resp.release_date;
            $('#modal').modal('show');
        });
    }
    if (type === "species" && speciesSearch.value <= 37 && speciesSearch.value >= 1) {
        newUrl += "species/" + speciesSearch.value + "/";
        ajax(newUrl, function (resp) {
            resp = parseResponse(resp);
            modalTitle.innerText = resp.name;
            modalBody.innerText = "Classification: " + resp.classification + "\n" + "Designation: " + resp.designation + "\n" + "Average Height: " + resp.average_height + "\n" + "Eye Colors: " + resp.eye_colors + "\n" + "Hair Colors: " + resp.hair_colors + "\n" + "Skin Colors: " + resp.skin_colors + "\n" + "Language: " + resp.language;
            $('#modal').modal('show');
        });
    }
    if (type === "vehicle" && vehicleSearch.value <= 39 && vehicleSearch.value >= 1) {
        newUrl += "vehicles/" + vehicleSearch.value + "/";
        ajax(newUrl, function (resp) {
            resp = parseResponse(resp);
            modalTitle.innerText = resp.name;
            modalBody.innerText = "Class: " + resp.vehicle_class + "\n" + "Model: " + resp.model + "\n" + "Max Atmosphering Speed: " + resp.max_atmosphering_speed + "\n" + "Length: " + resp.length + "\n" + "Passengers: " + resp.passengers + "\n" + "Crew: " + resp.crew + "\n" + "Manufacturer: " + resp.manufacturer;
            $('#modal').modal('show');
        });
    }
    if (type === "starship" && starshipSearch.value <= 37 && starshipSearch.value >= 1) {
        newUrl += "starships/" + starshipSearch.value + "/";
        ajax(newUrl, function (resp) {
            resp = parseResponse(resp);
            modalTitle.innerText = resp.name;
            modalBody.innerText = "Class: " + resp.starship_class + "\n" + "Model: " + resp.model + "\n" + "Max Atmosphering Speed: " + resp.max_atmosphering_speed + "\n" + "Length: " + resp.length + "\n" + "Passengers: " + resp.passengers + "\n" + "Crew: " + resp.crew + "\n" + "Manufacturer: " + resp.manufacturer;
            $('#modal').modal('show');
        });
    }
}

function getRandomNumber(max) {
    var randomNumber = Math.floor((Math.random() * max) + 1);
    return randomNumber;
 }

 function randomPerson() {
    peopleSearch.value = getRandomNumber(87);
    getInfo("person")
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