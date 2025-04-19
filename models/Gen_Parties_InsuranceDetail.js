const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Parties_InsuranceDetail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    PartyId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    InsuranceCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_InsuranceCompany',
        key: 'Id'
      }
    },
    InsuranceTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_InsuranceType',
        key: 'Id'
      }
    },
    PolicyNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PolicyValue: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ExpiryDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Parties_InsuranceDetail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Parties_InsuranceDetail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
