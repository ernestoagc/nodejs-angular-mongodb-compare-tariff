# COMPARE TARIFF APP - NODEJS AND ANGULAR

#### **1.  Deploy solution in local environment**
Download the source code, and into the folder execute the docker compose file.: 
$ docker-compose up -d

Then visit the url: http://localhost:8082/

this docker compose going to deploy 3 containers:
- database (mongodb)
- frontend app (angular)
- backend app (nodejs)


#### **2. Application Demo**
Also, in the next link https://tariffcompare.web.app/  you can visit a demo of the application. 

![](https://i.imgur.com/5yZJIiS.png)

The application also, permit you save information about what product is most popular between the user.

![](https://i.imgur.com/glhrf5F.png)

#### **3. Unit test**
In both applications, I have implemented unit test. for executing you must enter in each folder and execute: 
$ npm run test 