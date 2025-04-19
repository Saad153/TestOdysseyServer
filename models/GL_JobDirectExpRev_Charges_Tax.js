const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_JobDirectExpRev_Charges_Tax', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    JobDirectChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobDirectExpRev_Charges',
        key: 'Id'
      }
    },
    TaxAuthorityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_TaxAuthority',
        key: 'Id'
      }
    },
    RevExpSharePerc: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    RevExpShareAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TaxPercentage: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TaxAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_JobDirectExpRev_Charges_Tax',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_JobDirectExpRev_Charges_Tax",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
