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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Waitlisted);
  }
}(this, function(expect, Waitlisted) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Waitlisted.SiteResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SiteResponse', function() {
    it('should create an instance of SiteResponse', function() {
      // uncomment below and update the code to test SiteResponse
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be.a(Waitlisted.SiteResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

    it('should have the property brandColor (base name: "brand_color")', function() {
      // uncomment below and update the code to test the property brandColor
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

    it('should have the property buttonTextColor (base name: "button_text_color")', function() {
      // uncomment below and update the code to test the property buttonTextColor
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

    it('should have the property customStyles (base name: "custom_styles")', function() {
      // uncomment below and update the code to test the property customStyles
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

    it('should have the property askName (base name: "ask_name")', function() {
      // uncomment below and update the code to test the property askName
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

    it('should have the property signupTitle (base name: "signup_title")', function() {
      // uncomment below and update the code to test the property signupTitle
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

    it('should have the property signupCopy (base name: "signup_copy")', function() {
      // uncomment below and update the code to test the property signupCopy
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

    it('should have the property positionTitle (base name: "position_title")', function() {
      // uncomment below and update the code to test the property positionTitle
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

    it('should have the property socialCopy (base name: "social_copy")', function() {
      // uncomment below and update the code to test the property socialCopy
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

    it('should have the property socialMessage (base name: "social_message")', function() {
      // uncomment below and update the code to test the property socialMessage
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

    it('should have the property domain (base name: "domain")', function() {
      // uncomment below and update the code to test the property domain
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

    it('should have the property shareSocialCopy (base name: "share_social_copy")', function() {
      // uncomment below and update the code to test the property shareSocialCopy
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

    it('should have the property referralCopy (base name: "referral_copy")', function() {
      // uncomment below and update the code to test the property referralCopy
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

    it('should have the property checkPositionCopy (base name: "check_position_copy")', function() {
      // uncomment below and update the code to test the property checkPositionCopy
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

    it('should have the property joinButtonCopy (base name: "join_button_copy")', function() {
      // uncomment below and update the code to test the property joinButtonCopy
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

    it('should have the property checkReservationCopy (base name: "check_reservation_copy")', function() {
      // uncomment below and update the code to test the property checkReservationCopy
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

    it('should have the property emailFieldLabel (base name: "email_field_label")', function() {
      // uncomment below and update the code to test the property emailFieldLabel
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

    it('should have the property nameFieldLabel (base name: "name_field_label")', function() {
      // uncomment below and update the code to test the property nameFieldLabel
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

    it('should have the property thankYouShareTemplate (base name: "thank_you_share_template")', function() {
      // uncomment below and update the code to test the property thankYouShareTemplate
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

    it('should have the property waitlistThreshold (base name: "waitlist_threshold")', function() {
      // uncomment below and update the code to test the property waitlistThreshold
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

    it('should have the property useCustomThankYou (base name: "use_custom_thank_you")', function() {
      // uncomment below and update the code to test the property useCustomThankYou
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

    it('should have the property hideWaitlist (base name: "hide_waitlist")', function() {
      // uncomment below and update the code to test the property hideWaitlist
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

    it('should have the property unmetSharedTemplate (base name: "unmet_shared_template")', function() {
      // uncomment below and update the code to test the property unmetSharedTemplate
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

    it('should have the property thresholdMet (base name: "threshold_met")', function() {
      // uncomment below and update the code to test the property thresholdMet
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

    it('should have the property websiteUrl (base name: "website_url")', function() {
      // uncomment below and update the code to test the property websiteUrl
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

    it('should have the property trackingCode (base name: "tracking_code")', function() {
      // uncomment below and update the code to test the property trackingCode
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

    it('should have the property customCss (base name: "custom_css")', function() {
      // uncomment below and update the code to test the property customCss
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

    it('should have the property hideBranding (base name: "hide_branding")', function() {
      // uncomment below and update the code to test the property hideBranding
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalCount (base name: "total_count")', function() {
      // uncomment below and update the code to test the property totalCount
      //var instane = new Waitlisted.SiteResponse();
      //expect(instance).to.be();
    });

  });

}));
