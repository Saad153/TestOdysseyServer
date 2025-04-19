const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WMS_Activity', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ActivityTypeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'WMS_ActivityType',
        key: 'Id'
      }
    },
    ActivityName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IsSysGen: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'WMS_Activity',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__WMS_Acti__3214EC0752B16FCF",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
