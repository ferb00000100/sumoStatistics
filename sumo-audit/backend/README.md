#Backend
## Setup Prisma  GrapgQL Server with Graphql-Yoga

mkdir -p backend/src

touch backend/src/Nav.js

touch backend/src/schema.graphql

cd backend

npm init -y


#Prisma
We provide a data Model and it will give us our CRUD opertions to interact with the database.

*We can't access these operations directly with javascript b/c there is no security, authentication layer or a layer to add on custom logic This is where we need graphQL yoga*

Prisma Files
 
 * prisma.yml
 * datamodel.prisma
 * src/generated/prisma.graphql ( generated on deploy after adding hook in prisma.yml )

###Install
npm i -g prisma

prisma login

prisma init 
* SELECT OPTIONS

**Create new database ( Docker )

** Connect to existing

** Choose a name for your service

**Prisma Client... READ UP ON THIS, I did not generate 

this creates the prisma.yml and the datamodel.graphql files

** prisma deploy  ( If using environment varialbes prisma deploy -e variables.env )

After deployed the schema is returned into src/generated/prisma.grphql directory

* You must redeploy after you update your model (datamodel.prisma)

 "deploy": "prisma deploy --env-file variables.env" 
 
 has been added to the package.json so you can run
 `npm run deploy` to re deploy
 
 ### Example Quries
 ####sample Query
 
    query collectors{
    collectors {
        name
        }
    }

returns

    {
    "data": {
        "collectors": [
        {
            "name": "test-collector-jmart"
        },
        {
         "name": "collector-TESTER"
        }
        ]
    }
    }
    
 
####sample mutation

     mutation {
  	    createOwner(data: {
          name: "Jason Martin"
        }) {
   	      name
          id
        }
      }
      
    mutation deleteOwner {
        deleteOwner(where: {
        id: "ck8ud0pr604iv0919qnthlnka"
        }) {
            id
        }
    }
    
     mutation addCollector {
       createCollector(data: {
         name: "collector-TESTER"
         instanceID: "i-98iKJH7jknj"
         account: 745634564
         owner: "Eleni Martin"
      }) {
       	name
       	instanceID
    		account
        owner
      }
    }
    
 returns
 
    {
    "data": {
      "createCollector": {
        "name": "collector-TESTER",
        "instanceID": "i-98iKJH7jknj",
        "account": 745634564,
        "owner": "Eleni Martin"
      }
    }
    }
 
 #GraphQL Yoga
 
##### The layer of logic that needs to happen before data is put into or pulled from the databases
 
* Implement Query and Mutation resolvers
* Server Side Logic
* Charge Credit Cards
* Send emails
* JWT Authentication
* Permissions
 
 ####Files
 
 - src/db.js  - connects directly to the Prisma DB on the Server using *prisma-binding* so you can query the DB with JavaScript
 - src/createServer.js - this is the Yoga server (built on top of Express and Apollo Server, all the express middleware can be used) 
 - reslovers 
    - *query* resolvers
        - src/Query.js   
    - *mutation* resolvers
        - src/Mutation.js
  - src/schema.graphql - Conatains all the quries and resolves 
    - *anything you want visable via your API will go in your schema*
  - src/Nav.js - This starts up our node server
  
  #Frontend
  