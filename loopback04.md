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

#### Lets see how to do this.

- One Category has many Products
```
root@3da899db6882:/usr/src/app/backend# lb relation 
? Select the model to create the relationship from: Category
? Relation type: has many
? Choose a model to create a relationship with: Product
? Enter the property name for the relation: products
? Optionally enter a custom foreign key: 
? Require a through model? No
? Allow the relation to be nested in REST APIs: No
? Disable the relation from being included: No

```

- Product belongs a category

```
root@3da899db6882:/usr/src/app/backend# lb relation
? Select the model to create the relationship from: Product
? Relation type: belongs to
? Choose a model to create a relationship with: Category
? Enter the property name for the relation: category
? Optionally enter a custom foreign key: 
? Allow the relation to be nested in REST APIs: No
? Disable the relation from being included: No

```

### How to verify the your model's relationship

Look at the respective model*.json files

1. `category.json`
```json
{
  "name": "Category",
  "base": "PersistedModel",
  "idInjection": true,
  "options": {
    "validateUpsert": true
  },
  "properties": {
    "name": {
      "type": "string",
      "required": true
    }
  },
  "validations": [],
  "relations": {
    "products": {
      "type": "hasMany",
      "model": "Product",
      "foreignKey": ""
    }
  },
  "acls": [],
  "methods": {}
}

```

2. `product.json`
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
  "relations": {
    "category": {
      "type": "belongsTo",
      "model": "Category",
      "foreignKey": ""
    }
  },
  "acls": [],
  "methods": {}
}

```

FYI - You can see that the `relation` is updates with appropriate values.

### NOW its time to test it again.

Let's run the api server again.
```
root@3da899db6882:/usr/src/app/backend# node .
Web server listening at: http://localhost:3000
Browse your REST API at http://localhost:3000/explorer

```
Hint: By now , you should know in which folder that you can run this command.

Open the browser, you should be able see some extra API's for both models with `foreign-key`. Thats prety cool right?.

### Exercise 1:
Test the relationship, by creating few `products` with a `category` id.

Exercise:

```json
{
  "name": "Addidas men's alpha original",
  "brand": "Addidas",
  "price": 300,
  "discount": 10,
  "categoryId": 1
}
```

###  Exercise 2:
Oops. We forget to add an important property to our model.
- `imageurl` of the product.

Now , Try to add it.

TIPS: use `lb property`

### Exercise 3:
Prepare your data for the Angular APP

- Create two categories
- Create 3 products under each category.

Hint: You can go to Lazada, amazon. to get some actucal products and image urls. 

Explore again and learn from it: [API Explorer](http://localhost:3000/explorer)


[click here for next stage](loopback05.md)