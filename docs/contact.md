# Contact API Spec

## Create Contact API

Endpoint : POST /api/contacts
Headers :

- Authorization : token

Request Body :

```json
{
  "firstName": "Imam",
  "lastName": "Sobirin",
  "email": "gmail.com",
  "phone": "08222"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "firstName": "Imam",
    "lastName": "Sobirin",
    "email": "gmail.com",
    "phone": "082222"
  }
}
```

Response Body Error :

```json
{
  "errors": "email is not valid"
}
```

## Update Contact API

Endpoint : PUT /api/contacts/:id
Headers :

- Authorization : token

Request Body :

```json
{
  "firstName": "Imam",
  "lastName": "Sobirin",
  "email": "gmail.com",
  "phone": "08222"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "firstName": "Imam",
    "lastName": "Sobirin",
    "email": "gmail.com",
    "phone": "082222"
  }
}
```

Response Body Error :

```json
{
  "errors": "email is not valid"
}
```

## Get Contaact API

Endpoint : GET /api/contacts/:id
Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "firstName": "Imam",
    "lastName": "Sobirin",
    "email": "gmail.com",
    "phone": "082222"
  }
}
```

Response Body Error :

```json
{
  "errors": "contact is not found"
}
```

## Search Contact API

Endpoint : GET /api/contacts
Headers :

- Authorization : token

Query param :

- name : Search by firstName or lastName, using like, optional
- email : Search by email using like, optional
- phone : Search by phone using like, optional
- page : number of page. default 1
- size : size per page, default 10

Response Body Success :

```json
{
  "data": [
    {
      "id": 1,
      "firstName": "Imam",
      "lastName": "Sobirin",
      "email": "gmail.com",
      "phone": "082222"
    },
    {
      "id": 2,
      "firstName": "Imam",
      "lastName": "Sobirin",
      "email": "gmail.com",
      "phone": "082222"
    }
  ],
  "paging": {
    "page": 1,
    "totalPage": 3,
    "totalItem": 30
  }
}
```

Response Body Error :

```json
{
  "errors": "data not found"
}
```

## Remove Contact API

Endpoint : DELETE /api/contacts/:id
Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": "OK"
}
```

Response Body Error :

```json
{
  "errors": "Contact is not found"
}
```
