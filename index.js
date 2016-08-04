'use strict';

/**
 * Boolean Input Plugin
 *
 *
 * A simple boolean input type
 */
const clone = require('lodash/clonedeep');
const inpugCheckbox = require('input-plugin-checkbox');

const utils = require('./lib/utils');

// clone plugins for each input
const boolean = clone(inpugCheckbox);

// make replacements in html
boolean.html = boolean.html.replace(/checkbox\./g, 'boolean.');

// replace options
boolean.inputs.checkbox.options = [
  {
    label: 'true',
    value: '1',
  },
];

// grab javascripts
const plugins = [boolean];
const validation = utils.validation(plugins);
const scripts = utils.scripts(plugins);
/**
 * Single Boolean Input Plugin
 * @module booleanInputPlugin
 */
module.exports = {
  name: 'Boolean',
  description: 'A simple boolean input type',
  validation,
  scripts,
  inputs: {
    boolean: boolean.inputs.checkbox,
  },
  html: boolean.html,
};
