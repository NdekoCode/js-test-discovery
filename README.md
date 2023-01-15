# Apprendre le Test en JavaScript avec Mocha et Jest

On va commencer par faire du test unitaire en JavaScript
Et pour cela on va voir les différentes techniques pour tester du code JavaScript du côté backend ou frontend.
Au niveau où en est le JavaScript on doit être capable de s’assurer que notre code fonctionne au fur et à mesure de l’avancement de notre projet.

## Mocha

Mocha c’est un framework qui va vous permettre de faire tourner du test sur node.js et sur les navigateurs, il est un peu particulier, car lui il ne gère que la partie test, donc vous n’avez pas de gestion des assertions pour tester si une valeur est celle qui est attendus ni de gestion de `stub`, de `mock` ou autre, en faite `mocha` on va brancher par-dessus différentes librairie comme `Chai`,`Sinon` et autres… donc l’avantage, c’est que l’on va pouvoir se composer un outil qui correspond à nos besoins.
Mocha ne vous impose pas la façon de faire comme les autres framework comme Jasmin ou Jest.

### Installation

Pour installer mocha, on peut le faire de deux manières :

- Soit, en le faisant de manière globale avec : `npm install -g mocha` dans ce cas pour l’utiliser il faudra juste taper en ligne de commande `mocha` puis il va runner les tests.
- Soit comme dépendance de développement dans votre application, dans ce cas, il faudra le charger depuis le dossier `.bin` de `node_modules`.
Sachez que dans le deux cas pour utiliser mocha il faut avoir un dossier `test` à la racine de l’arborescence de votre projet, car c’est dans ce dossier qu’il va chercher les fichiers JavaScript à tester et ce fichier doivent avec une extension `.spec.js` ou `.test.js` pour être reconnus facilement par Mocha.
Mocha nous offre différentes manière d’écrire notre code, donc vous pouvez tester en suivant le
- `BDD`(**Behavior Driven Development**) : c-à-d où on va décrire des étapes et ensuite ce que ces étapes sont censés faire
- `TDD`(**Test Driven Development**) : Où on va plutôt écrite des suites des tests
- …

### Écrivons nos premiers Test avec Mocha

### DBB

Dans nos tests on va avoir des étapes, chaque étape va consister à tester une fonctionnalité de notre application ou de notre librairie.
Lorsque l'on fait des tests unitaires, l'intérêt, c'est vraiment de commencer à écrire les tests puis commencer à écrire l'application qui fonctionne autour.
Pour écrire un test, il faut d’abord lui donner un nom, et pour ça on utilise la fonction `describe()` et cette méthode prend en paramètre le nom du test et en second paramètre un `callback` qui faira ensuite différent TEST.
Dans nos tests on va ensuite avoir des étapes et chaque étape va consister à tester des fonctionnalités de notre application.
Lorsque l’on écrit un Test on écrit avec la méthode `it()` cette méthode `it` permet d’écrire le scenario d’un Test et il prend en premier paramètre la description du test en second paramètre un callback qui va contenir le test que l’on souhaite effectuer.
Quand on fait du `BDD` souvent le mot clé `"Should"` et quand on le lit grâce à la méthode it, ça fait `"It should do something..."`

```{JS}
describe("Test something", () => {
  it("Should do something", () => {
    // Notre Test ici
  });
});
```

Comme on l’a dit ci-haut, mocha vient avec absolument rien, et on n'a pas des frameworks pour gérer par exemple les assertions, du coup pour gérer les assertions(Une assertion, c’est ce qui permet de tester qu’une valeur correspond bien à ce que l’on attend) on va utiliser la librairie interne de node.js `assert` en l’important d’abord avec un `import assert from 'node:assert'`.

```{TS}
import assert from "node:assert";
describe("Test something", () => {
  it("Should do something", () => {
    const a = 2;
    assert.equal(a * 2, 6);
  });
});

```

### Les commandes mocha

- Pour commencer on a les **reporters** :

Par default mocha nous affiche nos test sous format `spec`, il correspond à ce que l'on fait, il a l'avantage de presenter les informations de manière relativement correcte et simplifier mais on a d'autres possibilités telle que la version `dot` qui nous affiche des petit points qui sont blanche si jamais ça fonctionne bien et rouge si jamais vous avez fait des erreurs.
Si vous voulez changer de `reporter` il faut utiliser la commande `mocha` avec l'argument `--reporter` ou `-R` suivis du nom du reporter que vous voulez supporter donc `mocha --reporter dot` ou `mocha -R nameOfOption`
Parmis les options les plus recommander sont:

- `mocha -R dot` : va afficher juste des point
- `mocha -R nyan` : va afficher un chat
- `mocha -R landing` : va afficher un avion
- `mocha -R list` : va afficher une liste (A recommader si on veut une visibilité sous forme de liste)
-

On a aussi d'autres options dans la commande qui sont plutot utiles, parmis eux on a:

- `--bail ou -b` qui permet de vous dire `"Vous vous arreter si jamais vous rencontrez une erreur"`, si il y en a une foire alor il s'arrete et ne fait pas les autres tests.
- `--grep LeNomDuDescript`: permet de specifier le test que l'on veut lancer et ignorer les autres, par exemple `mocha --grep Percentage` il va lancer uniquement les test qui contiennent la clé `"Pourcentage"` comme `'describe'` mais vous pouvez aussi faire cet option coté code avec it.only("Le nom du test a executer", leCallback)

### Test du code Asynchrone avec Mocha & before/after

Lorsque vous souhaiter attendre dans vos tests, surtout quand il y a un timer ou une fonction callback ou encore du code asynchrone, vous devez passer à la fonction de `it` un parametre `done` et l'appeler à la fin du test.

```{JS}
 it("Should wait 300 ms", (done) => {
        Percentage.wait(300, (test) => {
            equal(test, 18, "Must be 18");
            done(); // La fin du test pour dire "Ici la fin du test asynchrone"
        });
    })
```

 `before` et `after` son utiliser pour la description de nos taches,

- Le `before` : permet d'indiquer une fonction à exécuter avant de lancement de tous ces tests qui suit sa declaration, cela est pratique si vous voulez mettre en place un environnement avant que votre test soit exécuter
- Le `after` : permet d'indiquer une fonction à exécuter après tous les test qui le suivent
- Le `beforeEach` : permet d'indiquer une fonction qui sera exécuter entre chaque Test
- Le `afterEach` : permet d'indiquer une fonction qui sera exécuter après chaque Test

**NB** : Tout ce que vous faites dans un `beforeEach` pensait à le defaire dans un `afterEach` pour que le Test suivant puisse partir sur des nouvelles bases saines et que vous n'ayez pas des Tests qui s'entrechoquent.

- On a aussi la possibilité de créer du test que vous allez exécuter plus tard, on dit que ces test sont en statut `pending` càd que ces tests sont en status d'écriture et pour le faire on fait juste un en `it` sans lui passer de callback càd `it("La description du test à mettre en attente")`.
- Si jamais vous avez un test qui se met à echouer et que vous n'arrivez pas à corriger le probleme ou que vous le corrigerai plus tard mais que vous ne voulez pas faire appaitre le test comme etant echouant vous pouvez utiliser la methode `skip` sur l'objet `it` et cela va permettre de mettre le test en `pending` càd mettre le test en attente et donc `it.skipt("Le test qui a echouer et que l'on veut mettre en pending",SonCallback)`, si vous mettez la methode `skip` sur une fonction `describe` alors tous les test se trouvant à l'interieur seront mis en pending.

### Les assertions avec Chai

Chai c'est une librairie pour gerer les assertions, le but d'une assertion c'est de tester si une valeur est bien egale à une autre ou correspond à une situation donner.
Le assert de node.js est plutot pratique mais il est relativement limiter lorsqu'il s'agit de tester des choses complexes.
Chai permet de faire de test BDD et TDD et comme Mocha elle propose differente Approche.
Pour l'installer c'est simple avec un `pnpm install -D chai`.
Au niveau de l'inclusion cela va etre different suivant le type d'assertion que l'on veut faire.

- Le premier type d'assert clest le `assert` qui ressemble beaucoup à l'`assert` de node.js tout simplement parce que la partie `assert` de chai est basé sur celui de node.js en ajoutant differente chose supplementaire comme
  - `assert.isTrue()` : qui permet de tester si l'assertion est un booleen `true`
  - `asset.isFunction()` : Permet de tester si la valeur passer est vraiment une fonction
- `should` : le should est un peu particuler car nous devons l'importer puis l'executer.
