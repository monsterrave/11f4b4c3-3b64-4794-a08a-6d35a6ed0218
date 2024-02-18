# SUPER DUPER RECIPES!

Search for Recipes



## eslint

https://typescript-eslint.io/getting-started/

https://eslint.org/

[Configure ESlint](https://eslint.org/docs/latest/use/configure/configuration-files)


### eslint tutorial


Setting up linting rules with Airbnb Style Guide (widely accepted rules)

https://dev.to/digitaldino/set-up-eslint-with-angular-and-the-airbnb-style-guide-effortlessly-55a8

## lint-staged

Run linters against staged git files and don't let 💩 slip into your code base!
[README](https://github.com/lint-staged/lint-staged/blob/master/README.md)

### lint-staged config - package.json

```
  "lint-staged": {
    "*.ts": [
      "prettier --write --parser typescript --print-width 140 --single-quote",
      "eslint --fix"
    ],
    "*.html": ["prettier --write --parser html"],
    "*.json": ["prettier --write --parser json"],
    "*.scss": ["prettier --write --parser scss"],
    "*.css": ["prettier --write --parser css"]
  }
```

## husky

Husky enhances your commits and more 🐶 woof!

[Get started](https://typicode.github.io/husky/get-started.html)

## prettier

[Prettier](https://prettier.io/docs/en/integrating-with-linters) is an opinionated code formatter which can be integrated with linters.

## eslint-config-prettier

```
npm install --save-dev eslint-config-prettier
```

Add eslint-config-prettier to your ESLint configuration – eslintrc

```
{
  "extends": [
    "some-other-config-you-use",
    "prettier"
  ]
}
```

## eslint-plugin-prettier

```
npm install --save-dev eslint-plugin-prettier eslint-config-prettier
npm install --save-dev --save-exact prettier
```

[Configuration](https://github.com/prettier/eslint-plugin-prettier/blob/master/README.md#configuration-legacy-eslintrc) (legacy: .eslintrc*)

```
{
  "extends": ["plugin:prettier/recommended"]
}
```