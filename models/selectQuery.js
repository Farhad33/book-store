class SelectQuery {
  constructor(table, options = {}) {
    if( table === undefined  ) {
       return 'Table is not available'
    }

    this.table = table
    this.fields = options['fields'] || []
    this.where = options['where'] || []

  }

  toString() {
    return `SELECT ${this.getFields()} FROM ${this.table}${this.getWhere()}`
  }

  getFields() {
    if( this.fields.length === 0 ) {
      return '*'
    } else {
      return this.fields.join( ', ' )
    }
  }

  getWhere() {
    if( this.where.length === 0 ) {
      return ''
    } else if( typeof(this.where) === 'string' ) {
      return ''
    }else {
       const clause = this.where.map( object => {
         return Object.keys( object ).map( key => `${key}=${object[key]}`)
       }).reduce( (a, b) => a.concat( b ), [] )
       return ` WHERE ${clause.join( ' AND ' )}`
    }
  }

}

module.exports = SelectQuery
