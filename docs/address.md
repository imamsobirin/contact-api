# Address API Spec

## Create Address API

Endpoint : POST /api/contacts/:contactId/addresses
Headers :

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

Endpoint : PUT /api/contacts/:contactId/addresses/:addressId

Headers :

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

## Get Address API

Endpoint : GET /api/contacts/:contactId/addresses/:addressId
Headers :

- Authorization : token

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
  "errors": "contact is not found"
}
```

## List Address API

Endpoint : GET /api/contacts/:contactId/address
Headers :

- Authorization : token

Response body success :

```json
{
  "data": [
    {
      "id": 1,
      "street": "jalan",
      "city": "kota",
      "province": "provinsi",
      "country": "negara",
      "postalCode": "kode post"
    },
    {
      "id": 2,
      "street": "jalan",
      "city": "kota",
      "province": "provinsi",
      "country": "negara",
      "postalCode": "kode post"
    }
  ]
}
```

Response body error :

```json
{
  "errors": "contact is not found"
}
```

## Remove Address API

Endpoint : DELETE /api/contacts/:contactId/addresses/:addressId
Header :

- Authorization : token

Response body success :

```json
{
  "data": "OK"
}
```

Response body error :

```json
{
  "errors": "address is not found"
}
```
