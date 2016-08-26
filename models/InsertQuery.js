class InsertQuery {
  constructor(table, options = {}) {
    if( table === undefined  ) {
       throw 'Table is not specified'
    }

    this.table = table
    this.columns = Object.keys( options )
    this.values = this.columns.map( key => `'${options[ key ]}'` )

  }

  toInsert() {
    const sql = `INSERT INTO ${this.getColumns()} VALUES ${this.getValues()} RETURNING id`
    console.log( sql )
    return sql
  }

  getColumns() {
    return `${this.table}(${this.columns.join(', ')})`
  }

  getValues() {
    return `${this.values.join(', ')}`
  }

}

module.exports = InsertQuery
