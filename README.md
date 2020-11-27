![GitHub](https://img.shields.io/github/license/cice-classroom/cice-playground)
![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

# CICE - Playground

This repository holds the contents of the [Master in Fullstack Web](https://www.cice.es/master-desarrollo-web-full-stack/). This repository uses [Lerna](https://github.com/lerna/lerna) to organize the lessons and each module is it's own package.

## Setup

1. Fork this project.
2. Clone the project that has been created under your Github's account <YOUR_USER>/cice-playground.
3. Open terminal.
4. `cd` into the project.
5. Create a branch from `main` where you'll work, `dev` for example.
6. Track remote upstream branch: `git remote add upstream https://github.com/cice-classroom/cice-playground.git`.
7. To update changes from upstream: `git pull upstream main`.
8. To propose changes you have to go to `main` branch, make a new branch from it, commit changes and then, on Github, make a Pull request from `<YOUR_BRANCH>` to `main`. If you want to bring a single commit from your dev branch you can use [cherry-pick](https://git-scm.com/docs/git-cherry-pick).

## Installation

Once you cloned the project do the following:

1. Install [NodeJS](https://nodejs.org/).
2. Open terminal.
3. `cd` into the project's directory.
4. Install dependencies with: `npm i`.
5. Run bootstrap with: `npm run bootstrap`.
6. If you want to run a script of any given package remember to `cd` into it first!

## Development

You can format the code: with `npm run format` and lint with `npm run lint`.

Whenever you have to solve an exercise you should create a folder `my-solutions` in order to keep your solutions, and the solutions reached in class.

## Updating dependencies

To update all dependencies to the latest version in all packages run: `npm run lerna exec --parallel -- "npx npm-check -E -y"`
