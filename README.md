This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Meli Product Search

* App: https://meli-product-search.now.sh/

## Install & Run

1. Clone the project: `git clone git@github.com:rjpizarro/meli-search-product.git`
2. Install dependencies: `npm install`
3. Run: `npm start`

You will need the API running in order run correctly this App. You could find the API on: https://github.com/rjpizarro/meli-search-API

## Project Structure

```
meli-product-search
├── package.json
├── tsconfig.json
├── public
├── node_modules
└── src
    ├── App.tsx
    ├── globals.scss
    ├── index.scss
    ├── index.tsx
    ├── components
    │   └── ...
    ├── containers
    │   └── items
    │       └── ...
    ├── libs
    │   └── make-request
    ├── config
    └── providers
        └── error-provider

```

At the project root level you will find all the config files for typescript along with the package.json file. 
  
Folders like `public` and `node_modules` are generated after build or when installing a dependency, respectively

Inside `src` folder you will find:

### `index.tsx`

Main entry file. Contains the root of the React tree and some providers config (ex: Router).   

### `App.tsx`

App Component. Defines the routes and assigns a container to each one.  

### `globals.scss`

Define globals SASS variables colors to use in the rest of the styles files.

### `folders`

* **components**: Presentational components. Basic components used to build views.  
* **containers**: Controllers components. Organized per feature. Connected to routes to create the views. Contains the business logic and performs the fetch data actions.   
* **libs**: Generic project libraries and tools.
* **providers**: Custom context store to handle specific app tasks (ex: Error Handling)      

## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
