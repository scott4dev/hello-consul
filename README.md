# hello-consul
Service Discovery using [consul.io] (https://www.consul.io) & [node.js] (https://nodejs.org)



## consul configuration
The folder [consul.config] (./consul.config) contains some json files to describe available services.

## consul service
This service acts as service discovery

To run the consul service run the command
```
npm run start:consul
```

## geo service
This service acts as dummy data service

To run the geo service run the command
```
npm run start:geo
```
This service is known by consul because is described in this [file] (./consul.config/geo.json)

## customer service
This service acts as dummy data service

To run the customer service run the command
```
npm run start:geo
```
This service is known by consul because is described in this [file] (./consul.config/customers.json)

## consumer service
This service queries the consul to get the list of the available data services and the queries them

To run the service that uses the geo and customer run the command
```
npm run start
```
