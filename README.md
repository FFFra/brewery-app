This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Brewery App

This app render the beer cellar of a certain brewery. In this particular case I've picked the Guinness beers.

This app does not have an API, so it makes usage of fake data. In order to achieve that, I took advantage of the [BreweryDB][https://brewerydb.com] sandbox. The main reason for that is the great amount of data provided by the API, so we don't have to generate our own.

You can another pick another brewery to be rendered by changing the ID in the API request at:

```
src/services/api.js
```

at the line:

```
const breweryID = INSERT_BREWERY_ID;
```

## Available Scripts

Clone or download this repo. Then navigate to the folder:

### `cd brewery-app`

Install dependencies by running:

### `npm install` or `yarn`

To run the application:

### `npm start or yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

---

#Considerations

#React tools (context and hooks)

#
