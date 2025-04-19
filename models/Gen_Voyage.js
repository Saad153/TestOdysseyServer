const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Voyage', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    VesselId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Vessel',
        key: 'Id'
      }
    },
    VoyageNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ArrivalDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SailingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CutOfDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CutOfTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SellingExchageRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    BuyingExchageRate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    TypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PortOfDischarge: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    TerminalCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
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
    OriginSailingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DestinationETA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OriginSailingDatePlanned: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DestinationETAPlanned: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ArrivalDatePlanned: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SailingDatePlanned: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SeqNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    NoOfInstall: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    RotationNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PortOfLoadingCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    }
  }, {
    sequelize,
    tableName: 'Gen_Voyage',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Voyage",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
