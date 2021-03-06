/**
 * Waitlisted API
 * Waitlisted API
 *
 * OpenAPI spec version: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['waitlisted-js/ApiClient', 'waitlisted-js/waitlisted-js-models/ReservationRequest', 'waitlisted-js/waitlisted-js-models/ReservationsResponse', 'waitlisted-js/waitlisted-js-models/ErrorResponse', 'waitlisted-js/waitlisted-js-models/Reservation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../waitlisted-js-models/ReservationRequest'), require('../waitlisted-js-models/ReservationsResponse'), require('../waitlisted-js-models/ErrorResponse'), require('../waitlisted-js-models/Reservation'));
  } else {
    // Browser globals (root is window)
    if (!root.Waitlisted) {
      root.Waitlisted = {};
    }
    root.Waitlisted.ReservationApi = factory(root.Waitlisted.ApiClient, root.Waitlisted.ReservationRequest, root.Waitlisted.ReservationsResponse, root.Waitlisted.ErrorResponse, root.Waitlisted.Reservation);
  }
}(this, function(ApiClient, ReservationRequest, ReservationsResponse, ErrorResponse, Reservation) {
  'use strict';

  /**
   * Reservation service.
   * @module waitlisted-js/waitlisted-js-api/ReservationApi
   * @version 2.0.0
   */

  /**
   * Constructs a new ReservationApi. 
   * @alias module:waitlisted-js/waitlisted-js-api/ReservationApi
   * @class
   * @param {module:waitlisted-js/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:waitlisted-js/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Activate a reservation.
     * @param {module:waitlisted-js/waitlisted-js-models/ReservationRequest} body Reservation Data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:waitlisted-js/waitlisted-js-models/ReservationsResponse}
     */
    this.activateReservation = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling activateReservation";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ReservationsResponse;

      return this.apiClient.callApi(
        '/reservations/activate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Creates a new reservation.
     * @param {module:waitlisted-js/waitlisted-js-models/Reservation} body Reservation Data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:waitlisted-js/waitlisted-js-models/ReservationsResponse}
     */
    this.createReservation = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling createReservation";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ReservationsResponse;

      return this.apiClient.callApi(
        '/reservations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a reservation.
     * @param {module:waitlisted-js/waitlisted-js-models/ReservationRequest} body Reservation Data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteReservation = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling deleteReservation";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/reservations', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a reservation.
     * @param {String} email Email address
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:waitlisted-js/waitlisted-js-models/ReservationsResponse}
     */
    this.getReservation = function(email) {
      var postBody = null;

      // verify the required parameter 'email' is set
      if (email == undefined || email == null) {
        throw "Missing the required parameter 'email' when calling getReservation";
      }


      var pathParams = {
      };
      var queryParams = {
        'email': email
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ReservationsResponse;

      return this.apiClient.callApi(
        '/reservations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
