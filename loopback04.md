## Lets explore with loopback to learn how to link models.

#### Lets create one more model

`Product` Model
- name
- brand
- price
- discount

Once created this is how the model file look like.
`product.json`
```json
{
  "name": "Product",
  "base": "PersistedModel",
  "idInjection": true,
  "options": {
    "validateUpsert": true
  },
  "properties": {
    "name": {
      "type": "string",
      "required": true
    },
    "brand": {
      "type": "string",
      "required": true
    },
    "price": {
      "type": "number",
      "required": true
    },
    "discount": {
      "type": "number"
    }
  },
  "validations": [],
  "relations": {},
  "acls": [],
  "methods": {}
}

```

`product.json`

```js
'use strict';

module.exports = function(Product) {

};

```


### Lets add relationship to both models
So we have two models. (tables)

Now we need to link them. Here is how the relationship look like.

```
Category 1...* Product
```
1..* means (one to many)

- One Category has many Products
- Product belongs a category
