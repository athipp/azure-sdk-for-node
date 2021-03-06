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
 * Initializes a new instance of the VirtualMachineSizeListResult class.
 * @constructor
 * The List Virtual Machine operation response.
 * @member {array} [value] the list of virtual machine sizes.
 * 
 */
function VirtualMachineSizeListResult() {
}

util.inherits(VirtualMachineSizeListResult, Array);

/**
 * Defines the metadata of VirtualMachineSizeListResult
 *
 * @returns {object} metadata of VirtualMachineSizeListResult
 *
 */
VirtualMachineSizeListResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'VirtualMachineSizeListResult',
    type: {
      name: 'Composite',
      className: 'VirtualMachineSizeListResult',
      modelProperties: {
        value: {
          required: false,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'VirtualMachineSizeElementType',
                type: {
                  name: 'Composite',
                  className: 'VirtualMachineSize'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = VirtualMachineSizeListResult;
