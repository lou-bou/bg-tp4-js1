"use strict";

// 1

const produit = {
    nom: 'produit1',
    prix: 10,
    quantite: 5
};

const totale_btn = document.getElementById("btn1");

function afficher_totale(produit) {
    let totale = produit.prix * produit.quantite;
    console.log(totale);
}

totale_btn.onclick = () => afficher_totale(produit);

// 2

const catalogue = [
    {
        nom: 'produit1',
        prix: 10,
        quantite: 5
    },
    {
        nom: 'produit2',
        prix: 15,
        quantite: 1
    },
    {
        nom: 'produit3',
        prix: 20,
        quantite: 7
    },
    {
        nom: 'produit4',
        prix: 5,
        quantite: 3
    },
    {
        nom: 'produit5',
        prix: 17,
        quantite: 2
    },
];

function afficher_depasse_moy(catalogue) {
    let sum = 0;
    for (let i = 0; i < catalogue.length; i++) {
        sum += catalogue[i].prix;
    }

    let moy = sum / catalogue.length;

    for (let i = 0; i < catalogue.length; i++) {
        if (catalogue[i].prix > moy) {
            console.log(catalogue[i].nom);
        }
    }
}

const moy_btn = document.getElementById("btn2");

moy_btn.onclick = () => afficher_depasse_moy(catalogue);