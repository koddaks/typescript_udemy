"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(function (responce) {
    var todo = responce.data;
    var ID = todo.ID;
    var title = todo.title;
    var finished = todo.finished;
    console.log("The Todo with ID: ".concat(ID, "\n  Has a title of: ").concat(title, "\n  is it finished: ").concat(finished, "\n  "));
});
