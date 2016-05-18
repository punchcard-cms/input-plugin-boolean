'use strict';

/**
 * Boolean Input Plugin
 *
 *
 * A simple boolean input type
 */
const validation = require('./lib/validation.js');

/**
 * Single Boolean Input Plugin
 * @module booleanInputPlugin
 */
module.exports = {
  name: 'Boolean',
  description: 'A simple boolean input type',
  validation: {
    booleanValidation: validation,
  },
  inputs: {
    boolean: {
      validation: {
        function: 'booleanValidation',
        on: 'blur',
      },
      label: 'A true or false statement goes here',
      placeholder: 'Boolean',
      type: 'checkbox',
      settings: {
        empty: true,
      },
    },
  },
  html: '<label for="{{boolean.id}}">{{boolean.label}}</label><input type="{{boolean.type}}" id="{{boolean.id}}" name="{{boolean.name}}" value="{{boolean.value}}" />',
};
