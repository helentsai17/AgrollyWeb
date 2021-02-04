const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'crops',
  {
    cid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name:{
        type:Sequelize.STRING
    },
    f_name:{
        type:Sequelize.STRING
    },
    season:{
        type:Sequelize.Integer
    },
  },
  {
    timestamps: false
  }
)
