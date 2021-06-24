const { Model, DataTypes } = require('sequelize');

class PublicSchool extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      directorId: DataTypes.STRING,
    }, { sequelize, timestamps: false });
  }

  static associate(models) {
    this.belongsTo(models.Director, { foreignKey: 'id', as: 'director_id' });
  }
}

module.exports = PublicSchool;
