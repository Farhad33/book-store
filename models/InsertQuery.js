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
    return `INSERT INTO ${this.getFields()} VALUES ${this.table}${this.getValues()}`
  }

  getFields() {
    if( this.fields.length === 0 ) {
      return '*'
    } else {
      return this.fields.join( ', ' )
    }
  }

  getValues() {
    if( this.values.length === 0 ) {
      return ''
    } else if( typeof(this.values) === 'string' ) {
      return ''
    }else {
       const clause = this.values.map( object => {
         return Object.keys( object ).map( key => `${key}=${object[key]}`)
       }).reduce( (a, b) => a.concat( b ), [] )
       return ` VALUES ${clause.join( ' AND ' )}`
    }
  }

}

module.exports = InsertQuery
