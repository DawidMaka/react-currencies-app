# Currencies App - Recruitment Task

Technologies and tools I've used with this project:

- React
- React Hooks
- Redux
- Bootstrap

Live: https://web-devvv.github.io/react-currencies-app/

Src: https://github.com/web-deVVV/react-currencies-app/tree/master/src

## Description

We will ask you to prepare an application and use control version tool, preferably github
repository, to track the progress of steps you have took to finish this assignment.
Create a simple web user interface which connects with NBP web API (http://api.nbp.pl/) Your
application should contain:

- List of favourite currencies, which user wants to follow
- Possibility to add currency to the list
- Possibility to remove one or all currencies from the list
- Possibility to cancel currency remove - confirmation popup

Deliverable solution should be build with:

- React components (using redux will be a plus)
- Use ES2015
- Code linter and formatter
- Tests in framework of your choice (will be a plus)
- Setup instructions in README file

## Example

User wants to follow euro and dollar exchange rates. User adds these 2 currencies to the
‘favourites’ list. Currencies appear on the list. User should be able to remove currencies from
the list (one or all). After click on currency remove button delete confirmation popup appears.

## Note

We assume, that fetched currency rate is up-to-date, for this assignment we do not
require any constant refreshing.

## Instalation 
```sh
git clone https://github.com/web-deVVV/react-currencies-app [folder-name]
cd [folder-name]
yarn install
```

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.