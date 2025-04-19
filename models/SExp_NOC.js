const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SExp_NOC', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TranNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TranDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    To: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Attention: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RefNo: {
      type: DataTypes.STRING(50),
      allowNull: true
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
    ShippingLineId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
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
    JobTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SExp_NOC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SExp_NOC__3214EC077A6039CD",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
