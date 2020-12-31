module.exports = async function (req, res) {
  // This is a wrapper for every lambda function that logs the error in cloudwatch
  try {
    await this(req, res);
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: e.message || 'internal server error',
    });
  }
};
