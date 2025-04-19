const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CTrk_Activity_Detail', {
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
    ActivityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'CTrk_Activity',
        key: 'Id'
      }
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NextActivityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'CTrk_Activity',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'CTrk_Activity_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CTrk_Activity_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
