#User API Spec

## Register User API

Endpoint: POST /api/users
Request Body:

```json
{
  "username": "imam",
  "password": "rahasia",
  "name": "sobirin"
}
```

Response Body Success:

```json
{
  "data": {
    "username": "imam",
    "name": "sobirin"
  }
}
```

Response Body Error:

```json
{
  "error": "Username already exist"
}
```

## Login User API

Endpoint : POST api/users/login
Request Body:

```json
{
  "name": "imam",
  "password": "rahasia"
}
```

Response Body Success:

```json
"data":{
    "token":"unique-id"
}
```

Response Body Eror

```json
{
  "errors": "Username wrong"
}
```

## Update User API

Endpoint : PATCH /api/users/current
Headers:

- Authorization: token

Request Body:

```json
{
  "name": "Imam Sobirin New", //optional
  "password": "new password" //optional
}
```

Response Body Success:

```json
{
  "data": {
    "username": "newusername",
    "name": "new name"
  }
}
```

Response Body Error

```json
{
  "error": "failed to change password"
}
```

## Get User API

Endpoint : GET /api/users/current
Headers :

- Authorization: token

Response Body Success:

```json
{
  "data": {
    "username": "imam",
    "name": "name"
  }
}
```

Response Body Error:

```json
{
  "error": "Unauthorize"
}
```

## Logout User API

Endpoint : DELETE /api/users/logout
Headers :

- Authorization: token

Response Body Success:

```json
{
  "data": "OK"
}
```

Response Body Error:

```json
{
  "errors": "unauthorize"
}
```
