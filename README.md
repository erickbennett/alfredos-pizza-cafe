# Alfredo's Pizza Cafe

## Intro

Lightweight NextJS and React application to demonstrate the implementation and setup of the following:

* styled-components with NextJS including the use of custom themes, globals, and override of document to enable SSR with styled-components
* NextJS getInitialProps to demonstrate how to setup and use
* React Spring based animations
* Jest and React Test Library unit testing
* Docker-ized version of a NextJS application
* Importing .env file values when using NextJS
* Hosting via Zeit


## Install

* Project install: `$npm install`
* Run app in dev mode: `$npm run dev`
* Run app in dev mode on a specific port: `$PORT=3000 npm run dev`
* Start the Jest test runner: `$npm test`


## Docker

There are npm scripts to simplify Docker commands:

* to build a Docker image: `$REPO=repo/image-name npm run docker-build`
* to push a Docker image: `$REPO=repo/image-name npm run docker-push`
* to run a Docker image: `$REPO=repo/image-name npm run docker-run`


## Project TODO:

* [x] feature: add home page
* [x] feature: setup styled components
* [x] feature: add favicon
* [x] feature: add about, reviews, and menu pages
* [x] feature: add placeholder pizza component and animations for menu page
* [ ] feature: add media queries
  * [ ] Desktop sm 1024x768
  * [ ] Desktop large 1920 x 1080
  * [ ] iPad 768x1024
  * [ ] iPhone 375x667
* [ ] Replace stock images
