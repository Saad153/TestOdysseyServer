const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_EDO_AcknowledgeDetail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    EDOId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_EDO',
        key: 'Id'
      }
    },
    AcknowledgeBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AcknowledgeOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AcknowledgeLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Emails: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    AcknowledgeStatus: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_EDO_AcknowledgeDetail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Gen_EDO___3214EC074DAD8EE7",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
