const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ReportConfiguration_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ReportConfigurationId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_ReportConfiguration',
        key: 'Id'
      }
    },
    FieldName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsVisible: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsSum: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsGroup: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FieldCaption: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ColumnSize: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    GroupHeaderName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    GroupOrderNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ColumnOrderNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    NumberOfDecimal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsCommaSaparation: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsWordRep: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsHideGroupTotal: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_ReportConfiguration_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ReportConfiguration_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
