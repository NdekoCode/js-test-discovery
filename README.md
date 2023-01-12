# Apprendre le Test en JavaScript avec Mocha et Jest

On va commencer par faire du test unitaire en JavaScript
Et pour cela on va voir les différentes techniques pour tester du code JavaScript du côté backend ou frontend.
Au niveau où en est le JavaScript on doit être capable de s'assurer que notre code fonctionne au fur et à mesure de l'avancement de notre projet.

## Mocha

Mocha c'est un framework qui va vous permettre de faire tourner du test sur node.js et sur les navigateurs, il est un peu particulier car lui il ne gère que la partie test, donc vous n'avez pas de gestion des assertions pour tester si une valeur est celle qui est attendus ni de gestion de `stub`, de `mock` ou autre, en faite `mocha` on va brancher par-dessus différentes librairie comme `Chai`,`Sinon` et autres... donc l'avantage, c'est que l'on va pouvoir se composer un outil qui correspond à nos besoins.
Mocha ne vous impose pas la façon de faire comme les autres framework comme Jasmin ou Jest.

### Installation

Pour installer mocha, on peut le faire de deux manières :

- Soit, en le faisant de manière globale avec : `npm install -g mocha` dans ce cas pour l'utiliser il faudra juste taper en ligne de commande `mocha` puis il va runner les tests.
- Soit comme dépendance de développement dans votre application, dans ce cas il faudra le charger depuis le dossier `.bin` de `node_modules`.
Sacher que dans le deux cas pour utiliser mocha il faut avoir un dossier `test` à la racine de l'arborescence de votre projet, car c'est dans ce dossier qu'il va chercher les fichiers javascript à tester et ce fichier doivent avec une extension .spec.js ou .test.js pour etre reconnus facilement par Mocha.
