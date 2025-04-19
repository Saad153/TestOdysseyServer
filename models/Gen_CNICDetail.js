const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_CNICDetail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    NICNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MobileNo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Name: {
      type: DataTypes.STRING(100),
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
    NICExpiryDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_CNICDetail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_CNICDetail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
