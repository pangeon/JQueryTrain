// Literal notation
const agnesGreenHouse = {};
agnesGreenHouse.owner = 'Agnieszka Lasota';
agnesGreenHouse.totalArea = 1000;
agnesGreenHouse.unusedArea = 100;
agnesGreenHouse.cultivation = ['tomato', 'cucumber', 'pepper', 'salad'];
agnesGreenHouse.cropArea = function () {
    return this.totalArea - this.unusedArea;
}
// Create object with properties and methods
const fatherGreenHouse = {
    owner: null,
    totalArea: 300,
    unusedArea: 300,
    cultivation: [],
    cropArea: function () {
        return this.totalArea - this.unusedArea;
    }
};
// Constructor object notation
const motherGreenHouse = new Object();

motherGreenHouse.owner = 'Barabara Lasota';
motherGreenHouse.totalArea = 500;
motherGreenHouse.unusedArea = 350;
motherGreenHouse.cultivation = ['pea', 'tomato'];
motherGreenHouse.cropArea = function () {
    return this.totalArea - this.unusedArea;
}
// Create object with properties and methods
function GreenHouse(owner, totalArea, unusedArea, cultivation) {
    this.owner = owner;
    this.totalArea = totalArea;
    this.unusedArea = unusedArea;
    this.cultivation = cultivation;
    this.cropArea = function () {
        return this.totalArea - this.unusedArea;
    }
}
const agnesEstate = new GreenHouse(
    'Agnieszka Lasota',
    1000,
    100,
    ['tomato', 'cucumber', 'pepper', 'salad']
);
const barabaraEstate = new GreenHouse(
    'Barbara Lasota',
    500,
    300,
    ['pea', 'tomato']
);
function buildContent(...args) {
    let content = $('#content');
    let content_right = $('#content-right');
    content.append(printGreenHouse(args[0], 1));
    content.append(printGreenHouse(args[1], 2));
    content.append(printGreenHouse(args[2], 3));
    let img = '<img src="img/greenhouse.jpg" ' +
        'alt="GreenHouse View" ' +
        'style="width: 600px"/>';
    content_right.append(img);
}
function printGreenHouse(obj, num) {
    let string = '<strong>'+ 'Green House - num: ' + num + ' </strong><br />';
    string += 'owner: ' + obj['owner'] + '<br />';
    string += 'totalArea: ' + obj['totalArea'] + '<br />';
    string += 'unusedArea: ' + obj['unusedArea'] + '<br />';
    string += 'cultivation: ' + obj['cultivation'] + '<br />';
    string += 'cropArea: ' + obj.cropArea() + '<br />';
    string += '<hr />';
    return string;
}
$(document).ready(
    function () {
        buildContent(fatherGreenHouse, agnesEstate, barabaraEstate);
    }
);




