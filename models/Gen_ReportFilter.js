const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ReportFilter', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DateForm: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DateTill: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SubCompanies',
        key: 'Id'
      }
    },
    AccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    CurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Currencies',
        key: 'Id'
      }
    },
    CostCenterId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
    },
    DepartmentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
    },
    LocationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
    },
    Projectid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
    },
    ReportType: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    FrmName: {
      type: DataTypes.STRING(200),
      allowNull: true,
      unique: "IX_Gen_ReportFilter_FormName_UserId"
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "IX_Gen_ReportFilter_FormName_UserId"
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
    ExcludeZeroBal: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ExcludeInActiveAccount: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ShowFilter: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PrintOn: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OrderBy: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_ReportFilter',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_Gen_ReportFilter_FormName_UserId",
        unique: true,
        fields: [
          { name: "FrmName" },
          { name: "UserId" },
        ]
      },
      {
        name: "PK_Gen_ReportFilter",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
