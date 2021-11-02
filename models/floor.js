'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Floor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Floor.init({
    floor_number: DataTypes.INTEGER,
    max_x_coordinate: DataTypes.INTEGER,
    max_y_coordinate: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Floor',
  });
  return Floor;
};