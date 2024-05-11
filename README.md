<h1 align="center">
    jwt-cli
</h1>
<p align="center">lightweight & fast</p>

## Description
jwt-cli is tool terminal-based tool made for manage encode, decode and verify jwt tokens


## Features
- you can encode the jwt (import payload from clipboard)
- you can encode the jwt (import secret from clipboard)
- you can save the generated jwt token after encode
- you can decode the jwt (import jwt token from clipboard)
- you can verify the jwt token (import token from clipboard)
- you can verify thw jwt token (import secret from clipboard)

## Installation
you need clone the repository and install packages by
```bat
npm install
```

## Usage
First, you need to build the tool into JavaScript by running:
```bat
npx tsc
```

Then you can use the tool. To get help, you can use this command:
```bat
node ./dist/index.js -h
```
```bat
node ./dist/index.js [command] -h
```


### encode

To encode a token, you can use this command:
```bat
node ./dist/index.js encode --jwt-payload "{ ""admin"": true }" --jwt-secret "random_secret"
```
You can encode JWT token and payload in your clipboard:
```bat
node ./dist/index.js encode --read-jwt-payload-clipboard --jwt-secret "random_secret"
```
You can encode JWT token and secret in your clipboard:
```bat
node ./dist/index.js encode --jwt-payload "{ ""admin"": true }" --read-jwt-secret-clipboard
```
To save the generated JWT token into your clipboard, use this command:
```bat
node ./dist/index.js encode --read-jwt-payload-clipboard --jwt-secret "random_secret" --save-jwt-token-clipboard
```

### decode
To decode a token, you can use this command:
```bat
node ./dist/index.js decode --jwt-token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSww...
```
To read the JWT which is saved into your clipboard:
```
node ./dist/index.js decode --read-jwt-token-clipboard
```

### verify
To verify a JWT token by secret, use this command:
```bat
node ./dist/index.js verify --jwt-token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSww... --jwt-secret "random_secret"
```

To verify a JWT token by secret and token which is saved into clipboard, use this command:
```bat
node ./dist/index.js verify --read-jwt-token-clipboard --jwt-secret "random_secret"
```

To verify a JWT token by secret which is saved into clipboard, use this command:
```bat
node ./dist/index.js verify --jwt-token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSww... --read-jwt-secret-clipboard
```


## Contributing

Contributions are welcome! If you would like to contribute to this project, please fork the repository and submit a pull request

## License
This application is licensed under the MIT License. See the LICENSE file for more information.