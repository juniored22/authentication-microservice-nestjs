# Authentication-microservice

 [![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
 [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)

## Description

Authentication-microservice 

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test
```


## Test post
#### obter token

```http
POST /auth/login HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Content-Length: 57

{
    "username": "example",
    "password": "password"
}
```

#### test validação token

```http
GET /auth/protected HTTP/1.1
Host: localhost:3000
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImV4YW1wbGUiLCJzdWIiOjEsImlhdCI6MTY4NzQ2NTg2MiwiZXhwIjoxNjg3NDY5NDYyfQ.6ocnUcnAipKMIPzER9CNlDfLtuHdTj__clMvGvcqnrw
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Edgard junior]()


## License

authentication-microservice [MIT licensed](LICENSE).
