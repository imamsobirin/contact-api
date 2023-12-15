# Address API Spec

## Create Address API

Endpoint : POST /api/contacts/:contactId/addresses
Header :

- Authorization : token

Request body :

```json
{
  "street": "jalan",
  "city": "kota",
  "province": "provinsi",
  "country": "negara",
  "postalCode": "kode post"
}
```

Response body success :

```json
{
  "data": {
    "id": 1,
    "street": "jalan",
    "city": "kota",
    "province": "provinsi",
    "country": "negara",
    "postalCode": "kode post"
  }
}
```

Response body error :

```json
{
  "errors": "country is required"
}
```

## Update Address API

Endpoint : POST /api/contacts/:contactId/addresses/:addressId

Header :

- Authorization : token
  Request body :

```json

```

Response body success :

```json
{
  "data": {}
}
```

Response body error :

```json
{
  "errors": ""
}
```

## Get Address API

Endpoint : POST /api/address
Header :

- Authorization : token
  Request body :

```json

```

Response body success :

```json
{
  "data": {}
}
```

Response body error :

```json
{
  "errors": ""
}
```

## List Address API

Endpoint : POST /api/address
Header :

- Authorization : token
  Request body :

```json

```

Response body success :

```json
{
  "data": {}
}
```

Response body error :

```json
{
  "errors": ""
}
```

## Remove Address API

Endpoint : POST /api/address
Header :

- Authorization : token
  Request body :

```json

```

Response body success :

```json
{
  "data": {}
}
```

Response body error :

```json
{
  "errors": ""
}
```
