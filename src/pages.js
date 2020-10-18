const orphanages = require('./database/fakedata');

module.exports = {
  index(req, res) {
    const name = "will";
    return res.render("index", { name: name });
  },

  orphanage(req, res) {
      return res.render("orphanage")
  },

  orphanages(req, res) {
      return  res.render('orphanages', { orphanages})
  },

  createOrphanage(req, res) {
      return res.render('create-orphanage');
  }
};
