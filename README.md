# hello-consul
Service Discovery using [consul.io] (https://www.consul.io) & [node.js] (https://nodejs.org)



## consul configuration
The folder [consul.config] (./consul.config) contains some json files to describe available services.

## consul service
This service acts as service discovery

To run this service use the command
```
npm run start:consul
```
The consul web console is available at [localhost:8500/ui] (http://localhost:8500/ui)
![alt ur](https://github.com/scott4dev/hello-consul/blob/master/public/ui.png "Consul web console")

## geo service
This service acts as dummy data service

To run this service use the command
```
npm run start:geo
```
This service is known by consul because is described in this [file] (./consul.config/geo.json)

## customer service
This service acts as dummy data service

To run this service use the command
```
npm run start:geo
```
This service is known by consul because is described in this [file] (./consul.config/customers.json)

## auto service
This service is a dummy HTTP service that auto register himself to the service discovery

To run this service use the command
```
npm start:auto
```
While the service is running you can see that consul calls the endpoint /ping to do application-level health checks

To stop this service use the command
```
curl http://localhost:8083/exit
```
If you use CTRL+C stop this service you are not deregistering it from the service discovery

## consumer service
This service queries the consul service and the data services

To run this service use the command
```
npm start
```
