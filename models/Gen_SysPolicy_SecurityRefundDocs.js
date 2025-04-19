const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_SysPolicy_SecurityRefundDocs', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SysPolId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SysPolicyMaster',
        key: 'Id'
      }
    },
    DocumentName: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Mandatory: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CategoryId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_FileCategory',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Gen_SysPolicy_SecurityRefundDocs',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Gen_SysP__3214EC077AE97E5B",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
