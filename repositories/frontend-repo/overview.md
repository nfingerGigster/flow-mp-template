# Overview

### Tech Stack

Here's a curated list of packages that you should be at least familiar with before starting your awesome project. However, the best way to see a complete list of the dependencies is to check **`package.json`**.

### Core

* [React](https://facebook.github.io/react/)
* [React Router](https://github.com/ReactTraining/react-router)
* [Redux](http://redux.js.org/)
* [Redux Toolkit](https://redux-toolkit.js.org/)
* [Reselect](https://github.com/reactjs/reselect)
* [Redux-Saga](https://redux-saga.github.io/redux-saga/)
* [Styled Components](https://github.com/styled-components/styled-components)
* [Typescript](https://github.com/microsoft/TypeScript)
* [React-i18next](https://github.com/i18next/react-i18next)

### Unit Testing

* [Jest](http://facebook.github.io/jest/)
* [react-testing-library](https://github.com/testing-library/react-testing-library)

### Linting

* [ESLint](http://eslint.org/)
* [Prettier](https://prettier.io/)
* [Stylelint](https://stylelint.io/)

## Code/Folder Structure

Let's start with understanding why we have chosen our particular structure. It has been an [evolving discussion](https://github.com/react-boilerplate/react-boilerplate/issues/27), and if you have an afternoon or two we recommend you read the full thread.

In any case, here's the TL;DR:

* You will write your app in the **`src/app`** folder. This is the folder you will spend most, if not all, of your time in.
* Configuration, generators, and templates are in the **`internals`** folder.

### `src/app`

**FOLDER STRUCTURE HERE IS COMPLETELY DETERMINED BY YOU!**

There have been many discussions on how the components and everything else should be structured. Yet, one size never fits all. Therefore, it is entirely personal. This boilerplate dictates **NO** folder structures. Example application provides a simple structure for a simple web application.

### `src/`

Here is the rest of the code that supports your app behind-the-scenes, with features like creating a Redux store, translations, styles & themes, and your Redux state types \(or any custom typings\)...

### `internals/`

This section you won't be bothering with much. We ship some extra functionalities to help with your web app and here it lies. It contains the code for:

* `internals/extractMessages`: Utils to extract messages into JSON syntax.
* `internals/generators`: Create new components and redux-toolkit slices using CLI.
* `internals/testing`: Testing the internal features like `generators`. You can customize your generators and still test them if they are working

## VS Code

We provide a `.vscode` folder out-of-the-box which includes the **recommended extensions**, **debugger configuration**, and **settings**

They are highly suggested for the best Developer Experience. Extensions are responsible for:

* Eslint
* Prettier
* Chrome debugger
* Jest
* Styled Components

