# How to contribute


## Making Changes
* Please searching the issue first, make sure nobody has filed it.
* Fork the repository on GitHub
* Checkout a new branch
* Modify the code in `src` and `d.ts`
* Add unit test in `test`
* Verify your changes with the code in `example` dir

```shell
# start dev server
npm run start
```

## Release
* Version should following the [Semver](http://semver.org/)
* Build all
```shell
npm run build
```
* Add a release on GitHub
* [Publishing npm packages](https://docs.npmjs.com/getting-started/publishing-npm-packages)
