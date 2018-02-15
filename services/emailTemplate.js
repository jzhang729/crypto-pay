const handlebars = require('handlebars');
const stringify = require('stringify');

handlebars.registerHelper('if', function(conditional, options) {
  if (conditional) {
    return options.fn(this);
  }
});

stringify.registerWithRequire({
  appliesTo: { includeExtensions: ['.html'] },
  minify: true,
  minifyAppliesTo: {
    includeExtensions: ['.html']
  },
  minifyOptions: {}
});

var html = require('./emails');
const template = handlebars.compile(html);
module.exports = template;
