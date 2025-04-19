const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAP_Employee', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    EmployeeCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PrEmployeeCode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MachineCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EmployeeName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Middle: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LastName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FatherName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BasicSalary: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    GrossSalary: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    AppointmentDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DateofInActive: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DateOfBirth: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MarriageDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OldNIC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NIC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IssueDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ExpiryDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PhoneNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Mobile1No: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Mobile2No: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Address1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Address2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    AcccountNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LastWorkingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EmployeeImage: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    TitleId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TAP_Title',
        key: 'Id'
      }
    },
    NationalityId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TAP_Nationality',
        key: 'Id'
      }
    },
    EmploymentStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TAP_EmployeeStatus',
        key: 'Id'
      }
    },
    GenderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TAP_Gender',
        key: 'Id'
      }
    },
    ReligionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TAP_Religion',
        key: 'Id'
      }
    },
    MaritalStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TAP_MaritalStatus',
        key: 'Id'
      }
    },
    EmployeeBankName: {
      type: DataTypes.STRING(100),
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
    IsSalesMan: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsDocsRep: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAccountRep: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAccountManager: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsImportManager: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsExportManager: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ManagerId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    IsLocked: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    LockedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LockedBy: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    LockedLog: {
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
    LocationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_PropertiesLOV',
        key: 'Id'
      }
    },
    LineManagerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_Employee',
        key: 'Id'
      }
    },
    IsInactive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    EmpDesignationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TAP_EmployeeDesignation',
        key: 'Id'
      }
    },
    CompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SubCompanies',
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
    }
  }, {
    sequelize,
    tableName: 'TAP_Employee',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TAP_Employee",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
