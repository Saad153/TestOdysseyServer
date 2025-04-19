const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_JobOnlineReceiptBillingAddress', {
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
    FirstName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    LastName: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    State: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Zip: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Country: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CreditCardNumber: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    ExpiryDate: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    CvvNumber: {
      type: DataTypes.STRING(400),
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
    }
  }, {
    sequelize,
    tableName: 'GL_JobOnlineReceiptBillingAddress',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__GL_JobOn__3214EC07029FAEBC",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
