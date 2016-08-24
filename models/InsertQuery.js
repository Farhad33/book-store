class InsertQuery {
  constructor(table, options = {}) {
    if( table === undefined  ) {
       return 'Table is not available'
    }

    this.table = table
    this.fields = options['fields'] || []
    this.where = options['where'] || []

  }

  toInsert() {
    return `INSERT INTO ${this.table} VALUES ${this.getFields()}${this.getValues()}`
  }

  getColumns() {
  }

  getValues() {
  }

}

module.exports = InsertQuery
