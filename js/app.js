'use strict'

function Users(name, date, task) {
    this.name = name;
    this.date = date;
    this.task = task;
    Users.allUsers.push(this);
    // this.render();
}

Users.allUsers = [];




let myForm = document.getElementById("form");

let container = document.getElementById("table");

let userName = '';
let date = '';
let select = '';

let headCont = ['name', 'date', 'task'];

myForm.addEventListener('submit', function(event) {
    event.preventDefault();

    userName = event.target.name.value;
    date = event.target.date.value;
    select = event.target.select.value;
    new Users(userName, date, select);

    let length = Users.allUsers.length - 1;

    for (let i = length; i < Users.allUsers.length; i++) {
        Users.allUsers[i].render();
    }


})

function tableRender() {
    let table = document.createElement('table');
    container.appendChild(table);

    let headingRow = document.createElement('tr');
    table.appendChild(headingRow);

    let th = null;
    for (let index = 0; index < headCont.length; index++) {
        th = document.createElement('th');
        headingRow.appendChild(th);
        th.textContent = headCont[index];

    }



}
tableRender();



Users.prototype.render = function() {
    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);

    let td = null;
    // let td2 = null;
    // let td3 = null;


    td = document.createElement('td');
    dataRow.appendChild(td);

    td.textContent = this.name;

    td = document.createElement('td');
    dataRow.appendChild(td);

    td.textContent = this.date;

    td = document.createElement('td');
    dataRow.appendChild(td);
    td.textContent = this.task;


}