# Github contributors file

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
* Use the following function `getContributors(owner, repositoryName, filePath).then(callbackFunction)`
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

## To do
- [x] Getting started
- [x] Write the library
- [x] Write a test
- [x] Write the documentation
- [ ] Check for Github token
- [ ] Publish