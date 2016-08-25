const InsertQuery = require('../models/InsertQuery');

describe("toInsert", () =>  {
  it("returns an error when table is not specified.",  () =>{
    expect( () => new InsertQuery() ).toThrow( 'Table is not specified' )
  })
  
  it("returns a SQL INSERT INTO with a table and name",  () =>{
    var query = new InsertQuery( 'table', {columns: ['title'], values: ['frank is not', 'cool'] })
    expect(query.toInsert() ).toEqual( 'INSERT INTO table(title) VALUES frank is not, cool' )
  })

})
