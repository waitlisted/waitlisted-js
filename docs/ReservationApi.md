# Waitlisted.ReservationApi

All URIs are relative to *https://www.waitlisted.co/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateReservation**](ReservationApi.md#activateReservation) | **POST** /reservations/activate | 
[**createReservation**](ReservationApi.md#createReservation) | **POST** /reservations | 
[**deleteReservation**](ReservationApi.md#deleteReservation) | **DELETE** /reservations | 
[**getReservation**](ReservationApi.md#getReservation) | **GET** /reservations | 


<a name="activateReservation"></a>
# **activateReservation**
> ReservationsResponse activateReservation(body)



Activate a reservation.

### Example
```javascript
var Waitlisted = require('waitlisted');
var defaultClient = Waitlisted.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Waitlisted.ReservationApi();

var body = new Waitlisted.ReservationRequest(); // ReservationRequest | Reservation Data

apiInstance.activateReservation(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReservationRequest**](ReservationRequest.md)| Reservation Data | 

### Return type

[**ReservationsResponse**](ReservationsResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createReservation"></a>
# **createReservation**
> ReservationsResponse createReservation(body)



Creates a new reservation.

### Example
```javascript
var Waitlisted = require('waitlisted');

var apiInstance = new Waitlisted.ReservationApi();

var body = new Waitlisted.Reservation(); // Reservation | Reservation Data

apiInstance.createReservation(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Reservation**](Reservation.md)| Reservation Data | 

### Return type

[**ReservationsResponse**](ReservationsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteReservation"></a>
# **deleteReservation**
> deleteReservation(body)



Delete a reservation.

### Example
```javascript
var Waitlisted = require('waitlisted');
var defaultClient = Waitlisted.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new Waitlisted.ReservationApi();

var body = new Waitlisted.ReservationRequest(); // ReservationRequest | Reservation Data

apiInstance.deleteReservation(body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReservationRequest**](ReservationRequest.md)| Reservation Data | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getReservation"></a>
# **getReservation**
> ReservationsResponse getReservation(email)



Get a reservation.

### Example
```javascript
var Waitlisted = require('waitlisted');

var apiInstance = new Waitlisted.ReservationApi();

var email = "email_example"; // String | Email address

apiInstance.getReservation(email).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email address | 

### Return type

[**ReservationsResponse**](ReservationsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

