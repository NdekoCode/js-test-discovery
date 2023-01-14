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
