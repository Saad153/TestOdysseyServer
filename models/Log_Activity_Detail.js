const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Log_Activity_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SerialNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LogActivityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_Activity',
        key: 'Id'
      }
    },
    NextActivityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_Activity',
        key: 'Id'
      }
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Log_Activity_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Log_Activity_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
