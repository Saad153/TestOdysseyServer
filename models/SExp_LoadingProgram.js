const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_LoadingProgram', {
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
      }
    },
    LocalCustomId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_LocalCustom',
        key: 'Id'
      }
    },
    PortOfDischargeCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    OriginTerminalCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    DestinationTerminalCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    LoadingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LoadingTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ArrivalDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CROIssueDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ExpiryDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EGMNo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ValidityDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Berth: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SpecialInstruction: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    ContainerInformation: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    PortOfReceiptCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    PortOfLoadingCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    BookNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    GatePassNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    GatePassDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LetterNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CargoStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LoadingFlagId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    StatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CostCenterId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
    },
    AllocAvailableId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ContAvalableId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SOBDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ContainerSplit: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BLRequired: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ContainerWTId: {
      type: DataTypes.INTEGER,
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
    OriginTerminalId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    LoadingAtId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    WharfId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Wharf',
        key: 'Id'
      }
    },
    CRONumber: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
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
    ContainerPickUpLocationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    IsText1: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsSpecialInstrucion: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsLoadingTerms: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ContainerTemprature: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Vent: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PortOfDischargeAliase: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ETD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CutOffDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ViaPortCode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ViaPortNameAlias: {
      type: DataTypes.STRING(70),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SExp_LoadingProgram',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SExp_LoadingProgram",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
