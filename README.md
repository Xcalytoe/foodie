# About App

Foodie is a web based app that helps users eat healthy. It enables its users to compare the nutritional information of various food before making a decision on what to eat. The great part about foodie is, it understands natural language - which means the user can enter “1 plate of rice and one whole chicken” and it understands they want nutritional information for rice and chicken in the provided quantity. [Demo](https://myfoodiee.netlify.app/)

## Built With

- [React](https://github.com/facebook/react)
- [Typescript](https://github.com/microsoft/TypeScript)
- [Styled-components](https://github.com/styled-components/styled-components)
- [Nutritionix API](https://docs.google.com/document/d/1_q-K-ObMTZvO0qUEAxROrN3bwMujwAN25sLHwJzliK0/edit#)
- [Zustand](https://github.com/pmndrs/zustand)

### Requirements

- Create a `.env.local` file and add the following to it;

  - `REACT_APP_API_URL`
  - `REACT_APP_X_APP_ID`
  - `REACT_APP_X_REMOTE_USER_ID`
  - `REACT_APP_X_APP_KEY`

- Install eslint and prettier extensions on your code editor.
  EsLint highlights all the possible errors while prettier formats the code while saving.

### Please note

- You can only use 'YARN' for this project, 'NPM' has been disabled.
- Commit lints was used, you will not be able to commit changes if there are lint errors.
- All tests must pass before you can push.
