### Lets learn how to add custom API methods (based on business logics)
### Also, about Before & After hooks


#### 1. Before and After Saved Hooks:

Lets say we have the `Product` model
- i want to create a computed property and save it in DB.
- instead of asking the users to compute, u can do this calculation just before u save it into DB.
- Another example :You can also use this to update any datetime fields like `update_at` property of any model, if any. 

This is a simple use-case to demonstate before & after hooks.
#### NOTE: For this to work, you should have added `price_dollar` property of the `product` model.

```js
'use strict';

module.exports = function(product) {

    product.observe('after save', function(ctx, next) {
        console.log(">>> HOOK >>> :")
        if (ctx.instance) {
            console.log('Saved %s#%s', ctx.Model.modelName, ctx.instance.id);
        } else {
            console.log('Updated %s matching %j',
            ctx.Model.pluralModelName,
            ctx.where);
        }
        next();
      });

      product.observe('before save', function(ctx, next) {
        console.log(">>> HOOK before save >>> :")
        if (ctx.instance) {
            // Lets say i wanted to create a computed property and store it in DB. (For fun.)
            // This may not be good use-case to demonstrate this feature. (before & after hooks.)
            ctx.instance.price_dollar = "$ " + ctx.instance.price;
          } else {
            ctx.data.price_dollar = "$ " + ctx.instance.price;
          }
        next();
      });
      
};
```

#### 2. Custom API's.

This assumes we are building a shopping cart and `product` model is having `no_items_in_inventory` property.
In such case, if you want to create a custom API method called `check`
- POST: `http://localhost:3000/api/Products/check`
- body: 
        ```json
        {
            id: 1
        }
        ```
Then in such a case, this is how the remote method will look like.
}

HINT: For this to run, u need to make sure u have `no_items_in_inventory` field in `product` model.

File: `product.js`

```js
'use strict';

module.exports = function(Product) {

    //   You can learn a lot by inspecting this variable.
    //   console.log(Product)
      
      Product.check = function(data, cb) {
        
        var status_ok = {
          availabe : true,
        }
        var status_not_ok = {
          availabe : false,
        }

          Product.findOne({
              where: {
                id: data.id, // This is from body parameter.
              }
          })
          .then(function (result) {
              
              if (result.no_items_in_inventory > 0 ){
                  console.log("Still have some items left in inventory.")
                  cb(null, status_ok);
              } else {
                  console.log("No items left in inventory.")
                  cb(null, status_not_ok);
                  
              }
              
          })
          .catch(function (err) {
              console.log(err); console.log("Something went wrong")
              cb(null, err); // Double check this place. if u want custom error. u can customize.
          });

        }
      
      Product.remoteMethod(
          'check', 
          {
            accepts: [
              { arg: 'data', type: 'object', http: { source: 'body' } }
            ],
            returns: {arg: 'status', type: 'object'},
            http: { verb: 'POST' }
          }
      );

};
```

### NOW ITS TIME FOR ANGULAR 5.
Now we have API's for two models. `category` and `product`. Lets use this api in our Angular APP.
[click here for next stage](angular5.md)