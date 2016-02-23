#Projet 1: Interface web pour le courriel

On se donne une représentation de l'état du système par une structure
de données suivante:

etat = {
  "inbox": [
    {
      "from": "AF22111212232211122",
      "date": "2015 12 28 20:15:42"
      "msg": "Un court message ...." },
    {
      "from": "AF22111212232211122",
      "date": "2016 01 03 10:15:31"
      "msg": "Un autre message ...." } ],
  "outbox": [
    {
      "to": "AF22111212232211122",
      "date": "2016 01 12 20:15:42"
      "msg": "Bla bla bla ...." } ],
  "yp": {
    "AF22111212232211122": {"name": "Jean Fanchon"},
    "90221F212A4200001AA": {"name": "Bob"} }
}

L'interface _web_ devrait pouvoir:

    Visualiser l'état: lecture des messages dans `etat.inbox` et `etat.outbox`, et des adresses dans `etat.yp`.
    Composer un nouveau message en l'ajoutant dans la liste `etat.outbox`.
    Modifier la liste d'adresse `etat.yp`

Chaque groupe (de 4 à 6 personnes) devrait produire un document

`courriel.html` accompagné par des documents `*.css` et `*.js`. L'état
initial (la valeur de la variable `etat`) devrait se trouver dans votre
code javascript.

La page `github` du projet se trouve ici https://github.com/inf4533-2016/courriel
