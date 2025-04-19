const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_COA', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AccountCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AccountName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ParentAccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    Alias: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    MaxChildAccount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Levels: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Relation: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    RelationByCode: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    IsVoucherEntryAllowed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COACategory',
        key: 'Id'
      }
    },
    SubCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COASubCategory',
        key: 'Id'
      }
    },
    PNLCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COAPNLCategory',
        key: 'Id'
      }
    },
    UserDefined1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UserDefined2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UserDefined3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UserDefined4: {
      type: DataTypes.STRING(50),
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
    ReportTemplateId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ReportTemplate',
        key: 'Id'
      }
    },
    PaymentTemplateId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ReportTemplate',
        key: 'Id'
      }
    },
    ReportTemplateDetId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    InActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_COA',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_COA",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
