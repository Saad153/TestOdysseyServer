const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_JobDirectExpRev_History_Charges', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    JobDirectId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    RevisionId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    JobDirectHistoryId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobDirectExpRev_History',
        key: 'Id'
      }
    },
    JobDirectChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    dSEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    dSIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    SerialNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    CurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EquipCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PerUnitFixedId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RateGroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Quantity: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Rate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Amount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    DiscountAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NetAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ExchangeRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    LocalAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ChargeSysCode: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    dLGJobId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    dAEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    dAIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_JobDirectExpRev_History_Charges',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_JobDirectExpRev_History_Charges",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
