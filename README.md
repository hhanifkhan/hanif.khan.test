# Product Listing Page

- Live Demo: [Product Listing Page](https://hanif-ui-task.herokuapp.com/)

## Prerequisite

```

    Node Js (>= v14.1.0)
    yarn (>=1.22.11) [Optional]

```

## Features

This App is using multiple dev tools like husky, prettier, ESlint, style-lint to insure code quality before user commit the code It is a Single page React App which has multiple products and a size filter in product listing page with funcationality of filtering products as per size.

```

{

    "start": "webpack serve --config webpack/webpack.dev.js",
    "build": "rm -rf ./dist && webpack --config webpack/webpack.prod.js",
    "test": "jest",
    "lint": "eslint 'src/**/*.{ts,tsx}'"

}

```

## Project Setup Locally

```
git clone https://github.com/hhanifkhan/hanif.khan.test.git
cd source
yarn install
yarn start

```

## Technology Stack

- [ES6](http://es6-features.org/)
- [ReactJs](https://reactjs.org/)
- [React-testing-library](https://testing-library.com/docs/react-testing-library/intro/)
- [YARN for package Dependencies](https://yarnpkg.com/)
- [Tailwind css (for Component Style and Reusability)](https://tailwindcss.com/)
- [Webpack 5](https://webpack.js.org/)

## App Structure

In this App we are following Atomic Design Pattern, ES6, Tailwind css, and ReactJS with hooks.

App File/Folder Structure Below

```


- [**docs**](docs)
- [**public**](public)
    - [**assets**](public/assets)
        - [**products**](public/assets/products)
    - [**mockData**](public/mockData)
- [**src**](src)
    - [**components**](src/components)
        - [**atoms**](src/components/atoms)
            - [**DealTag**](src/components/atoms/DealTag)
            - [**DropDownFilter**](src/components/atoms/DropDownFilter)
            - [**Heading**](src/components/atoms/Heading)
            - [**Image**](src/components/atoms/Image)
            - [**ProductPrice**](src/components/atoms/ProductPrice)
            - [**ProductTitle**](src/components/atoms/ProductTitle)
        - [**molecules**](src/components/molecules)
            - [**Header**](src/components/molecules/Header)
            - [**ProductCard**](src/components/molecules/ProductCard)
        - [**organisms**](src/components/organisms)
            - [**ProductList**](src/components/organisms/ProductList)
        - [**pages**](src/components/pages)
            - [**ProductsPage**](src/components/pages/ProductsPage)
    - [**constants**](src/constants)
    - [**interfaces**](src/interfaces)
    - [**services**](src/services)
    - [**utils**](src/utils)
- [**webpack**](webpack)



```

## React.js

A Popular javascript library for declarative and component based development.

## Tailwind css

Tailwind is a utility based css framework in which we use pre-defined classes. We can add our theming as well based on the requirement. On production it automatically remove unsed css code, for more info please visit detailed [https://tailwindcss.com/]

## App Screenshot on different devices(Desktop/Tab/Mobile)

## Desktop View ![Product Listing Page Desktop](https://github.com/hhanifkhan/hanif.khan.test/blob/main/docs/desktop-view.png)

## Tab View ![Product Listing Page Desktop](https://github.com/hhanifkhan/hanif.khan.test/blob/main/docs/ipad-view.png)

## Mobile View ![Product Listing Page Desktop](https://github.com/hhanifkhan/hanif.khan.test/blob/main/docs/mobile-view.png)
