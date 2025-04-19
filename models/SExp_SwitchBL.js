const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_SwitchBL', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SEBLId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'SExp_BL',
        key: 'Id'
      }
    },
    SEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_SeaExportJob',
        key: 'Id'
      }
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HBLNo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MBLNo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    HBLDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MBLDate: {
      type: DataTypes.DATE,
      allowNull: true
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
    SailingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ShipperId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    ConsigneeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    NotifyParty1Id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    TotalContainer: {
      type: DataTypes.STRING(100),
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
    IsMBL: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SWBLPostFix: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SWBLNumber: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ManualSWBLNumber: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SExp_SwitchBL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SExp_SwitchBL",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
