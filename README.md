# shop-app

## Description

* In this app, we can list products and category, list products based on category, add items to cart, order items.
* Logger to log each steps.
* Health check to check health of running instance.
* Test cases.
* Swaggar to test API.

## Technology

- [x] Node
- [x] NestJS
- [x] mongoDB
- [x] Best Practice Structure
- [x] Async Await
- [x] Typescript (classes, arrow functions)

## Requirements

* To run this project, nodejs, mongodb and git (version control) should be installed.
* Node ^8

### node

* [Node](http://nodejs.org/) is really easy to install & now include NPM. You should be able to run the following command after the installation procedure below.

  $ node --version
  
  $ npm --version

### mongodb

* [MongoDB](https://docs.mongodb.com/manual/installation/) is really easy to install, click here [MongoDB](https://docs.mongodb.com/manual/installation/) and follow the step to install mongoDB.

* [NestJS](https://nestjs.com/) documentation.


## Quick Start
* go indide app
* npm install
* cp .env.example .env
* npm run start:dev

## Run Script
* run script file to load categories and products
* node src/scripts/loadCategories.ts
* node src/scripts/loadProducts.ts

## Run Test
* npm run test:e2e

## Swaggar Documentation
* Start the server and hit below URL
* http://localhost:3500/api