# Code Challenge

### Prerequisites

 - NodeJS (min. version 8)
 - ParcelJS (npm i -g parcel)
 
### Commands

 - npm start - build and start the server
 - npm run dev - run the dev version with HMR (it's required to also start a separate instance of the node server ```node index.js``` )
 - npm run test - run the unit test suite
 
### API

#### Comics

1) Get all the available comic books
```$xslt
GET /api/comics
```

2) Get a specific comic book, by ID
```$xslt
GET /api/comics/:id
```

3) Get a list of comic books based on 2 characters
```$xslt
GET /api/comics/character1/character2
```

#### Characters

1) Get all the available characters

```$xslt
GET /api/characters
```