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
  name: 'boolean',
  description: 'A boolean input type',
  validation: {
    booleanValidation: validation,
  },
  inputs: {
    boolean: {
      validation: {
        function: 'booleanValidation',
        on: 'change',
      },
      type: 'checkbox',
      label: 'Select from the following',
      options: [
        {
          label: 'true',
          value: '1',
        },
      ],
      settings: {
        empty: false,
      },
    },
  },
  html: '{% for option in boolean.options %}<input type="{{boolean.type}}" name="{{boolean.name}}" id="{{boolean.id}}--{{loop.index}}" value="{{option.value}}" {% if boolean.value %} {% if option.value in boolean.value %}checked{% endif %}{% endif %}><label for="{{boolean.id}}--{{loop.index}}">{{option.label}}</label>{% endfor %}',
};
