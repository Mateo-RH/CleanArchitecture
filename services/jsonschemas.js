let { Validator } = require('jsonschema');

module.exports = function (instance, schema) {
  const validator = new Validator();
  const res = validator.validate(instance, schema);
  if (!res.valid)
    throw new Error('JSON Validation error: ' + res.errors[0].stack);
};
