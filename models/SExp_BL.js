const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_BL', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SEJobId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'SExp_SeaExportJob',
        key: 'Id'
      },
      unique: "IX_SExp_BL_SEJobId"
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
    FinancialApprovalId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FinancialApprovalBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FinancialApprovalOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FinancialApprovalLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    BLTemplateId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_BLTemplate',
        key: 'Id'
      }
    },
    IsHBLIssue: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsLocked: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    LockedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LockedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LockedLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FormENumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FormEDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    StatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SESInsId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_ShippingInstruction',
        key: 'Id'
      }
    },
    FixSalesTaxNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TitleAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NotifyParty2Id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'SExp_BL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_SExp_BL_SEJobId",
        unique: true,
        fields: [
          { name: "SEJobId" },
        ]
      },
      {
        name: "PK_SExp_BL",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
