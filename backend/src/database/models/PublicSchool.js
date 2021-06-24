const { Model, DataTypes } = require('sequelize');

class PublicSchool extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, { sequelize, timestamps: false, tableName: 'public_schools' });
  }

  static associate(models) {
    this.belongsTo(models.Director, { foreignKey: 'id', as: 'director_id' });
  }
}

module.exports = PublicSchool;
