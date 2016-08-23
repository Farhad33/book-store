const SelectQuery = require('../models/SelectQuery');

fdescribe("toString", () =>  {
  it("returns a SELECT * from table statement",  () =>{
    var query = new SelectQuery( "table" )
    expect(query.toString() ).toEqual( 'SELECT * FROM table' )
  })

  it("returns a SQL SELECT statement with a table & a field of omg",  () =>{
    var query = new SelectQuery( "table", { fields: ['omg'] } )
    expect(query.toString() ).toEqual( 'SELECT omg FROM table' )
  })

  it("returns a SQL SELECT with a table and where of id 3",  () =>{
    var query = new SelectQuery( "table", { where: [{id: 3}] } )
    expect(query.toString() ).toEqual( 'SELECT * FROM table WHERE id=3' )
  })

  it("returns a SQL SELECT with a  * field when not specified",  () =>{
    var query = new SelectQuery( "table",  {fields: []} )
    expect(query.toString() ).toEqual( 'SELECT * FROM table' )
  })

  it("returns a SQL SELECT with an empty where when not specified",  () =>{
    var query = new SelectQuery( "table",  {where: []} )
    expect(query.toString() ).toEqual( 'SELECT * FROM table' )
  })
})
