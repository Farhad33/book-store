class DeleteQuery {
  constructor( table, id ){
    if( table === undefined  ) {
      throw 'Table parameter is required'
    } else if( typeof( table ) !== 'string' ) {
      throw( 'Table parameter must be string' )
    } else if( id === undefined ) {
      throw( 'ID field is required' )
    }

    this.table = table
    this.id = id
  }

  toString(){
    return `DELETE FROM ${this.table} WHERE id=${this.id}`
  }
}

module.exports = DeleteQuery
