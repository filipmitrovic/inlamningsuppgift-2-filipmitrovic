# Inlämningsuppgift 2

Du ska bygga en webbsida som från ett API hämtar FN:s globala mål och visar dessa på sidan. Det ska sedan gå att klicka på varje mål och få information om dess sub-mål (s.k. targets)

## Hur det ska fungera
* När en användare går in på sidan ska alla FN:s hållbarhetsmål hämtas från API:et och visas på sidan.
* Jag ska kunna klicka på ett mål och få mer information om dess sub-mål (s.k. targets).
* Visa upp i ett så snyggt gränssnitt som du önskar.

## Endpoints
* https://unstats.un.org/SDGAPI/swagger/#!/Goal/V1SdgGoalListGet
* Namn: GET /v1/sdg/Goal/List

Om man vill
* https://unstats.un.org/SDGAPI/swagger/#!/Goal/V1SdgGoalByGoalCodeTargetListGet
* GET /v1/sdg/Goal/{goalCode}/Target/List

## Krav för godkänt

* Sidan ska fungera enligt ovan specifikation.
* Du ska **enbart** använda dig av funktionella komponenter med React hooks.
* Du ska använda dig av **fetch** för att hämta data från API.
* Du hämtar data från detta API https://unstats.un.org/SDGAPI/swagger/#/.

## Classrom-länk
Länk: https://classroom.github.com/a/zRqht2Jm

## Inlämning

Inlämning är på Github i det repo som skapades via Github Classroom. Ta länken till ditt repo och
lägg till som en kommentar på Ping Pong och lämna in uppgiften där senast **25 jan 2021 23:59**.





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
