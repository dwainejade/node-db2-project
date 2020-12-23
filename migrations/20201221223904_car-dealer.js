const { table } = require("../../node-db2-guided/data/connect");

exports.up = async function (knex) {
    await knex.schema.createTable("car-dealer", tbl => {
        tbl.increments()
        tbl.text("vin", 17).unique().notNullable()
        tbl.text("make").notNullable()
        tbl.text("model").notNullable()
        tbl.integer("year", 4)
        tbl.integer("mileage").notNullable()
        tbl.text("transmission")
        tbl.text("titleStatus")
    })
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("car-dealer")
};
