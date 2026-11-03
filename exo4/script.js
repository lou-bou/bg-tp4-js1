"use strict";

// 1

const produit = {
    nom: 'produit1',
    prix: 10,
    quantite: 5
};

console.log(`Valeur du stock de produit1: ${produit.prix * produit.quantite}`);

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

const somme = catalogue.reduce((acc, produit) => acc + produit.prix, 0);

const moyenne = somme / catalogue.length;

const depasse_moy = catalogue.filter(produit => produit.prix > moyenne);

console.log("Les produits qui depassent le prix moyen:");
depasse_moy.forEach(p => console.log(p.nom, p.prix));

// 5

function appliquer(catalogue, traitement) {
    for (const produit of catalogue) {
        traitement(produit);
    }
}

function print_nom(produit) {
    console.log(produit.nom);
}

function print_prix(produit) {
    console.log(produit.prix);
}

appliquer(catalogue, print_nom);
appliquer(catalogue, print_prix);