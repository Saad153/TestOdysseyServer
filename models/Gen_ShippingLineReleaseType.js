const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ShippingLineReleaseType', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SCACCode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TypeName: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Inactive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    AddBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AddOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AddLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EditBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EditOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EditLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    U_Id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_ShippingLineReleaseType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ShippingLineReleaseType",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
