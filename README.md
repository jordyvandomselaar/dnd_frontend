# DnD app

> Because keeping your shit in a PDF file or on a piece of paper is shit UX.

## Table Of Contents

- [Running this bad boy.](#running-this-bad-boy)
- [Backend](#backend)
  - [Endpoints](#endpoints)
- [Contributing](#contributing)
- [Tech in here](#tech-in-here)

## Running this bad boy.

1. `git clone` this repo.
2. `cd` into it.
3. `npm start`, or `yarn start` .
4. …
5. Profit!

## Backend

As this is only the front-end this app requires an api to interface with. (duh)

### Endpoints

 **GET /characters**

response:

```json
[
  {
    "id": 1,
    "name": "Gentoo"
  },
  {
    "id": 2,
    "name": "Jimmy 2 feet"
  }
]
```



**POST /characters**

payload:

```json
{
  "name": "Gentoo"
}
```

## Contributing

Feel free to create issues with feature requests or if you find terrible code. You can also send in PR's, just make sure there's an issue explaining what you're doing.

## Tech in here

- React
  - React-router
  - Redux
  - Styled-components
  - Material-ui (v1)
    - Material-ui-components
  - Create-react-app — Because no one should be required to go through the horrors that are Webpack.
- Mock-backend
