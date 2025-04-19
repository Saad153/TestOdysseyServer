const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CEAS_User_SubCompanyRight', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CEASUserId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'CEAS_User',
        key: 'Id'
      }
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SubCompanies',
        key: 'Id'
      }
    },
    IsDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CEAS_User_SubCompanyRight',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CEAS_User_SubCompanyRight",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
