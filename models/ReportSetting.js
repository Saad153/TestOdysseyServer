const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReportSetting', {
    PkId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ReportCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SettingTitle: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GridLayout: {
      type: "XML",
      allowNull: true
    },
    ReportLayout: {
      type: "XML",
      allowNull: true
    },
    LoginId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ReportDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    UserDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Version: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    CrossTabLayout: {
      type: "XML",
      allowNull: true
    },
    ForAllUser: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    AddBy: {
      type: DataTypes.BIGINT,
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
      type: DataTypes.BIGINT,
      allowNull: true
    },
    EditOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EditLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ReportSetting',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ReportSetting",
        unique: true,
        fields: [
          { name: "PkId" },
        ]
      },
    ]
  });
};
