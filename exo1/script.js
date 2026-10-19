"use strict";

// les informations
const nom = "John";
const prenom = "Doe";
const nomprenom = `${nom} ${prenom}`;
const age = 30;
const note = 15;
const pi = 3.14;

// les boutons, vu slide 3
const nomButton = document.getElementById("nom"); // getting the "nom" button by its id #nom
const prenomButton = document.getElementById("prenom");
const nomprenomButton = document.getElementById("nomprenom");
const ageButton = document.getElementById("age");
const noteButton = document.getElementById("note");
const piButton = document.getElementById("pi");

// les fonctions, vu slide 3
function f1() {
    console.log(nom); // prints the value of nom to the console
}

function f2() {
    console.log(prenom);
}

function f3() {
    console.log(nomprenom);
}

function f4() {
    console.log(age);
}

function f5() {
    console.log(note);
}

function f6() {
    console.log(pi);
}

// les evenements des cliques
nomButton.onclick = f1; // when the button for nom is clicked, run function f1
prenomButton.onclick = f2;
nomprenomButton.onclick = f3;
ageButton.onclick = f4;
noteButton.onclick = f5;
piButton.onclick = f6;