'use strict';

const scripts = (plugins) => {
  const s = {};

  if (Array.isArray(plugins)) {
    plugins.forEach(plugin => {
      if (typeof plugin.scripts === 'object') {
        Object.keys(plugin.scripts).forEach(script => {
          if (!s.hasOwnProperty(script)) {
            s[script] = plugin.scripts[script];
          }
        });
      }
    });
  }

  return s;
}

const validation = (plugins) => {
  const v = {};

  if (Array.isArray(plugins)) {
    plugins.forEach(plugin => {
      if (typeof plugin.validation === 'object') {
        Object.keys(plugin.validation).forEach(val => {
          if (!v.hasOwnProperty(val)) {
            v[val] = plugin.validation[val];
          }
        });
      }
    });
  }

  return v;
}

module.exports = {
  scripts,
  validation,
};
