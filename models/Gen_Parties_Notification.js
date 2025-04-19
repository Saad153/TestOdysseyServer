const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Parties_Notification', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    PartyId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    NotificationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_Notification',
        key: 'Id'
      }
    },
    IsDisabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    EmailAddress: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OperationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_OperationType',
        key: 'Id'
      }
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Parties_Notification',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Parties_Notification",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
