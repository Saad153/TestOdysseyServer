const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AExp_AirwayBillStock_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    AEAWBStockId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AExp_AirwayBillStock',
        key: 'Id'
      }
    },
    SerialNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    AWBNumber: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    AEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AExp_AirExportJob',
        key: 'Id'
      }
    },
    AEBLId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'AExp_BL',
        key: 'Id'
      }
    },
    ReserveId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ReserveDate: {
      type: DataTypes.DATE,
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
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ReturnNo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ReturnDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsVoid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    VoidBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VoidOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VoidLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AExp_AirwayBillStock_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AExp_AirwayBillStock_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
