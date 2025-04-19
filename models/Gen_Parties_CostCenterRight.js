const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Parties_CostCenterRight', {
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
    CostCenterId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DistributionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_TaxRevDistribution',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Gen_Parties_CostCenterRight',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Parties_CostCenterRight",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
