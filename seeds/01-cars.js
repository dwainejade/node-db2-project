
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car-dealer').del()
    .then(function () {
      // Inserts seed entries
      return knex('car-dealer').insert([
        {vin:"JM3ER29L070133282", make:"Mazda", model: "CX 7", year: 2007, mileage: 77000, },
        {vin:"1N4BA41E74C829102", make:"Nissan", model: "Maxima", year: 2004, mileage: 60000, },
        {vin:"3G1JC1245WS848211", make:"Chevrolet", model: "Cavalier", year: 1998, mileage: 220000, },
        {vin:"SCBLC37F85CX10207", make:"Bentley", model: "Arnage", year: 2005, mileage: 68000, },
        {vin:"1GYFK63878R248711", make:"Cadillac", model: "Escalade", year: 2008, mileage: 45000, },
        {vin:"WBACD432XWAV64423", make:"BMW", model: "3 Series", year: 1998, mileage: 250000, },
        {vin:"WAULFAFR3DA006959", make:"Audi", model: "A5", year: 2013, mileage: 23000, },
      ]);
    });
};
