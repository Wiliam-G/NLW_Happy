const Database = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');

module.exports = {
  index(req, res) {
    const name = "will";
    return res.render("index", { name: name });
  },


  async orphanage(req,res) {
    const id = req.query.id;

    try {
      const db = await Database;
      const orphanage = await db.all("select * from orphanages where id = 2");
      return res.render("orphanage");
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados!")
    }
  },


  // orphanage(req, res) {
  //   try {
  //     const db = await Database;
  //     const orphanages = await db.all('select * from orphanages');
  //     return  res.render('orphanage', { orphanage});
  //   } catch (err) {
  //     console.log(err);
  //     return res.send("Erro no bando de dados!");
  //   }
      
  // }

  async orphanages(req, res) {
    try {
      const db = await Database;
      const orphanages = await db.all('select * from orphanages');
      return  res.render('orphanages', { orphanages});
    } catch (err) {
      console.log(err);
      return res.send("Erro no bando de dados!");
    }
  },

  createOrphanage(req, res) {
      return res.render('create-orphanage');
  }
};
