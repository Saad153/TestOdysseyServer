const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_CRO', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TransDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_SeaExportJob',
        key: 'Id'
      }
    },
    CRONumber: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ReferenceNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ClientId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    OverseasAgentId: {
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
    PickUpId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    DischargePortCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    FinalDestPortCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    LoadingPortCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
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
    VoyageNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    SailingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CommodityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Commodity',
        key: 'Id'
      }
    },
    CargoTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CROValidFor: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Deliver: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CCPerson: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FromPerson: {
      type: DataTypes.STRING(30),
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
    GPBookNo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    GatePassNo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    GPDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    GPExpiryDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    GPLetterNo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    GPShippingAgent: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GPLicenseNo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    GPJobNo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    isContainerCount: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ContainerCount: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EmptyDepotId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    HaulageInstructions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ClearingAgentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
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
    CROTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MoveToId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    SoldToPartyId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    EquipQty: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    SizeType: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'Gen_EquipmentSizeType',
        key: 'EquipCode'
      }
    },
    PrincipalId: {
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
    }
  }, {
    sequelize,
    tableName: 'SExp_CRO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SExp_CRO",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
