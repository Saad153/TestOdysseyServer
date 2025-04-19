const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_BLMandatoryFieldsSetup', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ColumnCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ColumnName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IsSEJobMandatory: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsSIJobMandatory: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAEJobMandatory: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAIJobMandatory: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsLGJobMandatory: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsSEBLMandatory: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsSIBLMandatory: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAEAWBMandatory: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsAIAWBMandatory: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_BLMandatoryFieldsSetup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Gen_BLMa__3214EC076DE5544F",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
