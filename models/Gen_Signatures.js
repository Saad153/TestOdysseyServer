const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Signatures', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    JobInvoiceId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_JobInvoice',
        key: 'Id'
      }
    },
    SignatureBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SignatureOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SignatureTitle: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsSignaturewithStamp: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    SignatureLocation: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Signatures',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Signatures",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
