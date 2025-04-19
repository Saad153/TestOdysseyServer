const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_EDO_Process_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    EDOProcessId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_EDO_Process',
        key: 'Id'
      }
    },
    DOId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_DeliveryOrder',
        key: 'Id'
      }
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_EDO_Process_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Gen_EDO___3214EC077C3373A6",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
