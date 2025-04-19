const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CTrk_ContainerCycle', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ContainerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'CTrk_Container',
        key: 'Id'
      }
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsSOC: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PrincipalId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    CurrentStageId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CTrk_Stage',
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
    ImpStartActivityTranId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ImpStartActivityTranDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ImpEndActivityTranId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ImpEndActivityTranDate: {
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
    ExpStartActivityTranId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ExpStartActivityTranDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ExpEndActivityTranId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ExpEndActivityTranDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    STRMNRStartActivityTranId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    STRMNRStartActivityTranDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    STRMNREndActivityTranId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    STRMNREndActivityTranDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ImpVesselId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Vessel',
        key: 'Id'
      }
    },
    ImpVoyageNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ImpArrivalDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ExpVesselId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Vessel',
        key: 'Id'
      }
    },
    ExpVoyageNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ExpSailingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ImpCarrierBookingNo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ImpJobNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ExpCarrierBookingNo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ExpJobNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ImpPortOfLoadingCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    ImpPortOfTranshipmentCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    ImpPortOfDischargeCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    ImpPortOfFinalDestCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    ImpDeliveryTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_DeliveryType',
        key: 'Id'
      }
    },
    ExpPortOfLoadingCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    ExpPortOfTranshipmentCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    ExpPortOfDischargeCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    ExpPortOfFinalDestCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    ExpDeliveryTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_DeliveryType',
        key: 'Id'
      }
    },
    ImpHBLNumber: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ImpMBLNumber: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ExpHBLNumber: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ExpMBLNumber: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ImpFreeDaysDetention: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ImpFreeDaysPlugIn: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ImpFreeDaysDemurrage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ExpFreeDaysDetention: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ExpFreeDaysPlugIn: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ExpFreeDaysDemurrage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsInActive: {
      type: DataTypes.BOOLEAN,
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
    ImpShipper: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ImpConsignee: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ImpCarrier: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ImpClearingAgent: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ImpTransporter: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ExpShipper: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ExpConsignee: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ExpCarrier: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ExpClearingAgent: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ExpTransporter: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ImpCargoTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ExpCargoTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LastActivityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'CTrk_Activity',
        key: 'Id'
      }
    },
    LastContainerActivityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'CTrk_ContainerActivity',
        key: 'Id'
      }
    },
    ImpCommodity: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ExpCommodity: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DOIssueDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ManifestHeaderId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ManifestHeader',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'CTrk_ContainerCycle',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CTrk_ContainerCycle",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
