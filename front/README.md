# Mediahub test 

> Quelques remarques concernant mes choix et d'éventuelles axes d'amélioration si plus de temps/dispo

1. j'ai priorisé la gestion d'un component stateful (search) en utilisant une RouteReuseStrategy pour garder le contexte du component de recherche en cas de clique sur retour depuis la page detail

2. Je n'ai pas écrit de tests unitaires par manque de temps (priorité au fonctionnel), mais je pourrai partager un projet perso qui en contient si besoin

3. les requêtes HTTP sont dans les services. Elles devraient être dans des repositories pour simplifier notemment l'écriture de tests unitaire via des mocks. Pas utile dans mon cas car pas de TU.

4. Le bouton logout devrait être dans un component distinct, mais a ce stade du projet il n'est pas encore partagé

5. la UI est assé basique, encore une fois par manque de temps/dispo

Bonne lecture de code et merci!



## Lancer l'API

Vous aurez besoin de node.js sur votre poste, dans une version 14 ou supérieure.

```shell
# Ouvrir le répertoire
cd api/

# Installer les dépendances
yarn

# Lancer le serveur
yarn start
```

## Lancer l'application (Front)

dans un autre terminal

```shell
# Ouvrir le répertoire
cd front/

# Installer les dépendances
yarn

# Lancer le serveur local
ng serve
```




