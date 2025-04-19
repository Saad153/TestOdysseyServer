const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Charges', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    currency: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    short: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    calculationType: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    defaultPaybleParty: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    defaultRecivableParty: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    taxApply: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    taxPerc: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fixAmount: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'Charges',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Charges__3213E83FD44B7F45",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
