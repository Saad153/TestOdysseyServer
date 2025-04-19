const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ChargesTariffGeneralWeightage', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OperationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CargoTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ParameterId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ParameterName: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Weightage: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_ChargesTariffGeneralWeightage',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ChargesTariffGeneralWeightage",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
