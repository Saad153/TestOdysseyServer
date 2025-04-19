const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_JobOnlineReceiptACHAddress', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CustomerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    AccounType: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    RoutingNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    AccountNo: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    NameofAccount: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ECheckType: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    BankName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ChequeNo: {
      type: DataTypes.STRING(15),
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
    OnlineReceiptID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    IsSaveMyACHInfo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    createlog: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    createtim: {
      type: DataTypes.DATE,
      allowNull: true
    },
    editrlog: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    editrtim: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_JobOnlineReceiptACHAddress',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__GL_JobOn__3214EC07076463D9",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
