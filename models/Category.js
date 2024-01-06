const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primarKey: true,
      autoIncrement: true
    },

    category_name:{

      type: DataTypes.STRING,
      allowNull: false

    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
// Location.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     location_name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     }
//   },