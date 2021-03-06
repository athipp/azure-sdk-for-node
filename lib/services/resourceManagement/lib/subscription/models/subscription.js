/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the Subscription class.
 * @constructor
 * Subscription information.
 *
 * @member {string} [id] The fully qualified Id. For example,
 * /subscriptions/00000000-0000-0000-0000-000000000000.
 * 
 * @member {string} [subscriptionId] The subscription Id.
 * 
 * @member {string} [tenantId] The tenant Id.
 * 
 * @member {string} [displayName] The subscription display name.
 * 
 * @member {string} [state] The subscription state. Possible values include:
 * 'Enabled', 'Warned', 'PastDue', 'Disabled', 'Deleted'
 * 
 * @member {object} [subscriptionPolicies] The subscription policies.
 * 
 * @member {string} [subscriptionPolicies.locationPlacementId] The
 * subscription location placement Id. The Id indicates which regions are
 * visible for a subscription. For example, a subscription with a location
 * placement Id of Public_2014-09-01 has access to Azure public regions.
 * 
 * @member {string} [subscriptionPolicies.quotaId] The subscription quota Id.
 * 
 * @member {string} [subscriptionPolicies.spendingLimit] The subscription
 * spending limit. Possible values include: 'On', 'Off', 'CurrentPeriodOff'
 * 
 * @member {string} [authorizationSource] The authorization source of the
 * request. Valid values are one or more combinations of Legacy, RoleBased,
 * Bypassed, Direct and Management. For example, 'Legacy, RoleBased'.
 * 
 */
function Subscription() {
}

/**
 * Defines the metadata of Subscription
 *
 * @returns {object} metadata of Subscription
 *
 */
Subscription.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Subscription',
    type: {
      name: 'Composite',
      className: 'Subscription',
      modelProperties: {
        id: {
          required: false,
          readOnly: true,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        subscriptionId: {
          required: false,
          readOnly: true,
          serializedName: 'subscriptionId',
          type: {
            name: 'String'
          }
        },
        tenantId: {
          required: false,
          readOnly: true,
          serializedName: 'tenantId',
          type: {
            name: 'String'
          }
        },
        displayName: {
          required: false,
          readOnly: true,
          serializedName: 'displayName',
          type: {
            name: 'String'
          }
        },
        state: {
          required: false,
          readOnly: true,
          serializedName: 'state',
          type: {
            name: 'Enum',
            allowedValues: [ 'Enabled', 'Warned', 'PastDue', 'Disabled', 'Deleted' ]
          }
        },
        subscriptionPolicies: {
          required: false,
          serializedName: 'subscriptionPolicies',
          type: {
            name: 'Composite',
            className: 'SubscriptionPolicies'
          }
        },
        authorizationSource: {
          required: false,
          serializedName: 'authorizationSource',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = Subscription;
