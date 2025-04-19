const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_CARF_Reason', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CARFId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_CARF',
        key: 'Id'
      }
    },
    CARFReasonId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_ReasonForCredit',
        key: 'Id'
      }
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_CARF_Reason',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_CARF_Reason",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
