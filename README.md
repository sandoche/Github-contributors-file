# Github contributors file ![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)

A javascript library to get individual file contributors from Github.

## Feature

* Get the list of contributors for a specific file of a Github Repository
* The list contain the name, the id, the url of each contributors

## How to use

### Installation
```
npm install github-contributors-file
```

### Using it

* Import getContributors
* Use the following function `getContributors(owner, repositoryName, filePath, token).then(callbackFunction)`
* The github token is optional (but it will increase the api limitations)
* See examples below

```js
import getContributors from 'github-contributors-file';

getContributors('sandoche', 'Jekyll-webpack-boilerplate', '_i18n/en.yml').then((contributors) => {
  console.log(contributors);
  /*
  This will return
  [
    {
      avatar_url: "https://avatars2.githubusercontent.com/u/3635348?v=4"
      login: "sandoche"
      url: "https://github.com/sandoche"
    }
  ]
  */
});


getContributors('naming-convention', 'naming-convention-design', 'README.md').then((contributors) => {
  console.log(contributors);
  /*
  This will return
  [
    {
      avatar_url: "https://avatars3.githubusercontent.com/u/6988069?v=4"
      login: "patriciamayo"
      url: "https://github.com/patriciamayo"
    },
    {
      avatar_url: "https://avatars2.githubusercontent.com/u/3635348?v=4"
      login: "sandoche"
      url: "https://github.com/sandoche"
    }
  ]
  */
})
```

## Scripts

* `yarn build` or `npm run build` - produces production version of your library under the `lib` folder
* `yarn dev` or `npm run dev` - produces development version of your library and runs a watcher
* `yarn test` or `npm run test` - it runs the tests :)
* `yarn test:watch` or `npm run test:watch` - same as above but in a watch mode

## Buy me a beer 🍺
If you like this project, feel free to donate:
* Paypal: https://www.paypal.me/kanbanote
* Bitcoin: 19JiNZ1LkMaz57tewqJaTg2hQWH4RgW4Yp
* Ethereum: 0xded81fa4624e05339924355fe3504ba9587d5419
* Monero: 43jqzMquW2q989UKSrB2YbeffhmJhbYb2Yxu289bv7pLRh4xVgMKj5yTd52iL6x1dvCYs9ERg5biHYxMjGkpSTs6S2jMyJn
* Motive: MOTIV-25T5-SD65-V7LJ-BBWRD (Get Motive Now: https://motive.network)