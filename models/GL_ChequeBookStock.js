const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_ChequeBookStock', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DocNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DocDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SubCompanies',
        key: 'Id'
      }
    },
    COABankAccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    ChqNumbFrom: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ChqNumbTo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TotalLeafs: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ChqNumbPref: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    MaxChar: {
      type: DataTypes.INTEGER,
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
    IsVoid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    VoidOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VoidReason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    VoidBy: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    VoidLog: {
      type: DataTypes.STRING(100),
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
    IsCheckOut: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CheckOutOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CheckOutReason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CheckOutBy: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    CheckOutLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_ChequeBookStock',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ChequeBookStock_Master",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
