class InsertQuery {
  constructor(table, options = {}) {
    if( table === undefined  ) {
       throw 'Table is not specified'
    }

    this.table = table
    this.columns = options['columns'] || []
    this.values = options['values'] || []

  }

  toInsert() {
    return `INSERT INTO ${this.getColumns()} VALUES ${this.getValues()}`
  }

  getColumns() {
    return `${this.table}(${this.columns.join(', ')})`
  }

  getValues() {
    return `${this.values.join(', ')}`
  }

}

module.exports = InsertQuery
