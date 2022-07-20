const { SQLDataSource } = require("datasource-sql");

const MINUTE = 60;

class MyDatabase extends SQLDataSource {
  getFruits() {
    return this.knex
      .select("*")
      .from("fruit")
      .where({ id: 1 })
      .cache(MINUTE);
  }
}

module.exports = MyDatabase;