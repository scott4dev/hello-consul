# hello-consul
Service Discovery using [consul.io] (https://www.consul.io) & [node.js] (https://nodejs.org)



## consul configuration
The folder [consul.config] (./consul.config) contains some json files to describe available services.

## consul service
This service acts as service discovery

To run the consul service use the command
```
npm run start:consul
```

## geo service
This service acts as dummy data service

To run the geo service use the command
```
npm run start:geo
```
This service is known by consul because is described in this [file] (./consul.config/geo.json)

## customer service
This service acts as dummy data service

To run the customer service use the command
```
npm run start:geo
```
This service is known by consul because is described in this [file] (./consul.config/customers.json)

## consumer service
This service queries the consul service and the data services

To run the service that uses the geo and customer use the command
```
npm start
```
