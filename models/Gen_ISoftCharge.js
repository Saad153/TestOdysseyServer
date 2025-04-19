const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ISoftCharge', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CSULChargeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Charges',
        key: 'Id'
      }
    },
    ChargesCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ChargesName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ShortName: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    IsSeaExport: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsSeaImport: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAirExport: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAirImport: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ISLandImport: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsWareHouse: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Basis: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SEFrequency: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SIFrequency: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    AIFrequency: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    AEFrequency: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TPFrequency: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    WHFrequency: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IsSystemGenerated: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SystemCode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ExpFrequency: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IsExpress: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TMSId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    TMSLastUpdateOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SourceCode: {
      type: DataTypes.STRING(50),
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
    }
  }, {
    sequelize,
    tableName: 'Gen_ISoftCharge',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ISoftCharge",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
