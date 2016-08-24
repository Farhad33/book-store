const InsertQuery = require('../models/InsertQuery');

fdescribe("toInsert", () =>  {
  it("returns a INSERT INTO * VALUES table statement",  () =>{
    var query = new InsertQuery( "table" )
    expect(query.toInsert() ).toEqual( 'INSERT INTO * VALUES table' )
  })

  it("returns a SQL INSERT INTO statement with a table & a field of omg",  () =>{
    var query = new InsertQuery( "table", { fields: ['omg'] } )
    expect(query.toInsert() ).toEqual( 'INSERT INTO omg VALUES table' )
  })

  it("returns a SQL INSERT INTO with a table and id=3",  () =>{
    var query = new InsertQuery( "table", { where: [{id: 3}] } )
    expect(query.toInsert() ).toEqual( 'INSERT INTO * VALUES table WHERE id=3' )
  })

  it("returns a SQL INSERT INTO with a  * field when not specified",  () =>{
    var query = new InsertQuery( "table",  {fields: []} )
    expect(query.toInsert() ).toEqual( 'INSERT INTO * VALUES table' )
  })

  it("returns a SQL INSERT INTO with an empty where when not specified",  () =>{
    var query = new InsertQuery( "table",  {where: []} )
    expect(query.toInsert() ).toEqual( 'INSERT INTO * VALUES table' )
  })
})
