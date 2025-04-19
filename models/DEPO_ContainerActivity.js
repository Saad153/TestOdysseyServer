const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DEPO_ContainerActivity', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TranNumb: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TransTypeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_ContainerActivityType',
        key: 'Id'
      }
    },
    DocRefNo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    TranDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TranTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ActivityTypeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_ActivityType',
        key: 'Id'
      }
    },
    BillModeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_BillingMode',
        key: 'Id'
      }
    },
    ActivityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_Activity',
        key: 'ID'
      }
    },
    IsSelfParty: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PartyId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    CashClientId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    CNeeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    ShipperId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    ForwarderId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    ClearingAgentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    TransporterId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    VesselId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Vessel',
        key: 'Id'
      }
    },
    VoyageId: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ArrivalDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PreviousLocation: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PortDestCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    PortPOLCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    ShiftId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_ShiftSetup',
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
    SIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_SeaImportJob',
        key: 'Id'
      }
    },
    BookingNo: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    IsBilled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    BillNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CntCount20: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CntCount40: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TotalCharges: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    SubLineId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_SubLine',
        key: 'Id'
      }
    },
    MovementTypeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DEPO_ActivityStatus',
        key: 'ID'
      }
    },
    IsVoid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PortDischgCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    IsApplyStorage: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CCenterId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
    },
    CMClientID: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    CA_ProcessTranNumb: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    PTIId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    AddBy: {
      type: DataTypes.BIGINT,
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
      type: DataTypes.BIGINT,
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
    },
    SCACCode: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    CRODONo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CROId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_CRO',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'DEPO_ContainerActivity',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DEPO_ContainerActivity",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
