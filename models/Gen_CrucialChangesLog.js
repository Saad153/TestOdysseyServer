const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_CrucialChangesLog', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
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
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SubCompanies',
        key: 'Id'
      }
    },
    FieldTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OldRefrId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    NewRefrId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    UpdateBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UpdateOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UpdateLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    OldRefrCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    NewRefrCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    RefFormId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ManifestId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OldVoyageNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NewVoyageNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    AIJobId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AEJobId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OldContainerNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NewContainerNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OldGrossWeight: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    NewGrossWeight: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    OldSailingArrivalDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NewSailingArrivalDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ExchangeRate: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    AgentInvoiceId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    JobBillId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    OldCostCenterId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NewCostCenterId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    JobInvId: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_CrucialChangesLog',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_CrucialChangesLog",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
