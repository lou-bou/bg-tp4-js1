"use strict";

// information

const tableauEtudiants = ['Etudiant1', 'Etudiant2', 'Etudiant3']; // a list of strings
const objetEtudiant = { // an object
    nom: 'John',
    prenom: 'Doe',
    age: 30
};
const tableauObjetsEtudiants = [ // a list of objects
    {
        nom: 'nom1',
        prenom: 'prenom1',
        age: 21
    },
    {
        nom: 'nom2',
        prenom: 'prenom2',
        age: 22
    },
    {
        nom: 'nom3',
        prenom: 'prenom3',
        age: 23
    }
];

// getting buttons from DOM
const tableauButton = document.getElementById("tableau");
const objetButton = document.getElementById("objet");
const tableauObjetsButton = document.getElementById("tableau-objets");

// functions

function f1() {
    for (let i = 0; i < tableauEtudiants.length; i++) { // loop through every element in the list
        console.log(tableauEtudiants[i]); // print every element (i is the index of the element in the list)
    }
}

function f2() {
    console.log(objetEtudiant); // print the object
}

function f3() {
    for (let i = 0; i < tableauObjetsEtudiants.length; i++) { // loop through every object in the list
        // print each attribute of the object, separated by dashes
        console.log(`${tableauObjetsEtudiants[i].nom}-${tableauObjetsEtudiants[i].prenom}-${tableauObjetsEtudiants[i].age}`);
    }
}

// click events

tableauButton.onclick = f1; // when the button "tableau" is clicked, execute f1
objetButton.onclick = f2;
tableauObjetsButton.onclick = f3;