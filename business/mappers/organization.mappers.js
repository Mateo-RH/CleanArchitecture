module.exports = {
  New: function ({ name, phone, address }) {
    return { name, phone, address };
  },
  Update: function ({ phone, address }) {
    return { phone, address };
  },
};
