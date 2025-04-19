const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Delivery_Orders', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    doNo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    validDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    clearingAgent: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    printBy: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    localCustom: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deliveryReqTo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cnicNo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    returnAt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mobileNo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    expDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    acknoledgeEmails: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    endoresementInstruction: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    operation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    companyId: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    indexNo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SEJobId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'SE_Jobs',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Delivery_Orders',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Delivery__3213E83F3A8F2C20",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
