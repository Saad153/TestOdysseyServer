const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SImp_BL', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SIJobId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'SImp_SeaImportJob',
        key: 'Id'
      },
      unique: "IX_SImp_BL_SIJobId"
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
    ArrivalDate: {
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
    IndexNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IndexTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_IndexType',
        key: 'Id'
      }
    },
    DestuffingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DeliveryDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IndexAndRange: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SImp_BL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_SImp_BL_SIJobId",
        unique: true,
        fields: [
          { name: "SIJobId" },
        ]
      },
      {
        name: "PK_SImp_BL",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
