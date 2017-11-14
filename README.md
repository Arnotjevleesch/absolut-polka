# absolut-polka

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# deploy to heroku
npm deploy

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## heroku deploy mode
Set proxies
``` bash
heroku login
heroku create absolut-polka
```
https://codeburst.io/quick-n-clean-way-to-deploy-vue-webpack-apps-on-heroku-b522d3904bc8

## docker build
``` bash
docker build --build-arg http_proxy=$HTTP_PROXY --build-arg https_proxy=$HTTPS_PROXY -t absolut-polka .
docker images
docker run -p 49160:8080 -d --name absolut-polka absolut-polka:latest
http://localhost:49160
```

## test prod installation
``` bash
rm -rf node_modules; rm -f package-lock.json; npm install --production
```

## used links
https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

https://devcenter.heroku.com/articles/container-registry-and-runtime
