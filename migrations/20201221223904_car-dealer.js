const { table } = require("../../node-db2-guided/data/connect");

exports.up = function (knex) {
    return knex.schema.createTable("car-dealer", tbl => {
        tbl.increments()
        tbl.text("VIN").unique().notNullable()
        tbl.text("make").notNullable()
        tbl.text("model").notNullable()
        tbl.integer("mileage").notNullable()
        tbl.text("transmission")
        tbl.text("titleStatus")
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("car-dealer")
};
