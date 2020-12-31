const { Validator } = require('jsonschema');

module.exports = function (req, res, next) {
  const { body } = req;
  const schema = req.method == 'POST' ? this.CreateSchema : this.UpdateSchema;
  if (schema) {
    const validator = new Validator();
    const validation = validator.validate(body, schema);
    if (!validation.valid)
      return res
        .status(400)
        .send('JSON Validation error: ' + validation.errors[0].stack);
  }
  next();
};
