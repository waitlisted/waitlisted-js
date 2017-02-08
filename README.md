# waitlisted

Waitlisted - JavaScript client for waitlisted
Waitlisted API
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 2.0.0
- Package version: 2.0.0
- Build date: 2017-02-08T12:07:37.596-06:00
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install waitlisted --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/waitlisted/waitlisted-js
then install it via:

```shell
    npm install waitlisted/waitlisted-js --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Waitlisted = require('waitlisted');

var api = new Waitlisted.ReservationApi()

var body = new Waitlisted.Reservation(); // {Reservation} Reservation Data

api.createReservation(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://www.waitlisted.co/api/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Waitlisted.ReservationApi* | [**createReservation**](docs/ReservationApi.md#createReservation) | **POST** /reservations | 
*Waitlisted.ReservationApi* | [**deleteReservation**](docs/ReservationApi.md#deleteReservation) | **DELETE** /reservations | 
*Waitlisted.ReservationApi* | [**getReservation**](docs/ReservationApi.md#getReservation) | **GET** /reservations | 
*Waitlisted.SiteApi* | [**getSite**](docs/SiteApi.md#getSite) | **GET** /site | 


## Documentation for Models

 - [Waitlisted.ErrorResponse](docs/ErrorResponse.md)
 - [Waitlisted.FormResponse](docs/FormResponse.md)
 - [Waitlisted.Reservation](docs/Reservation.md)
 - [Waitlisted.ReservationRequest](docs/ReservationRequest.md)
 - [Waitlisted.ReservationsResponse](docs/ReservationsResponse.md)
 - [Waitlisted.SiteResponse](docs/SiteResponse.md)


## Documentation for Authorization


### api_key

- **Type**: API key
- **API key parameter name**: X-API-Key
- **Location**: HTTP header

