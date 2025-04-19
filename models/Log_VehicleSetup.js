const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Log_VehicleSetup', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    VehicleNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    RegistrationNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TrackerInstalled: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ChasisNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    EngineNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    InstalledDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    BrandId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_BrandSetup',
        key: 'Id'
      }
    },
    MakeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_MakeSetup',
        key: 'Id'
      }
    },
    TrackerNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Model: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    VehicleWeight: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TransporterId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    RegistrationDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RegExpDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    StatusId: {
      type: DataTypes.INTEGER,
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
    tableName: 'Log_VehicleSetup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Log_VehicleSetup",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
