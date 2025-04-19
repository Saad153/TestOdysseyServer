const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CRM_Opportunity', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    OpportunityNo: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    ActivityId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'CRM_Activity',
        key: 'Id'
      }
    },
    OpportunityDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EstmClosDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OpportunityTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ShipmentTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SeaAirProductTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LineAgentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    IncoTermId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LoadingCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    DestinationCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    LoadingTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CommodityId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    TotalContainer: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EquipSizeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FreightTermId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NoOfPackages: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    PackagesCode: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    M3_Weight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DeliveryTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RateQuoted: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    EstimatedProfit: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    GrossProfit: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Probability: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    StageId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ClosingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Ramarks: {
      type: DataTypes.STRING(500),
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
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CRM_Opportunity',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CRM_Opportunity",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
