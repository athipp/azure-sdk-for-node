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

var util = require('util');

/**
 * @class
 * Initializes a new instance of the PoolListPoolUsageMetricsResult class.
 * @constructor
 * @summary Response to an AccountOperation.ListPoolUsageMetrics request.
 *
 * @member {string} [odatanextLink]
 * 
 */
function PoolListPoolUsageMetricsResult() {
}

util.inherits(PoolListPoolUsageMetricsResult, Array);

/**
 * Defines the metadata of PoolListPoolUsageMetricsResult
 *
 * @returns {object} metadata of PoolListPoolUsageMetricsResult
 *
 */
PoolListPoolUsageMetricsResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PoolListPoolUsageMetricsResult',
    type: {
      name: 'Composite',
      className: 'PoolListPoolUsageMetricsResult',
      modelProperties: {
        value: {
          required: false,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'PoolUsageMetricsElementType',
                type: {
                  name: 'Composite',
                  className: 'PoolUsageMetrics'
                }
            }
          }
        },
        odatanextLink: {
          required: false,
          serializedName: 'odata\\.nextLink',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PoolListPoolUsageMetricsResult;
