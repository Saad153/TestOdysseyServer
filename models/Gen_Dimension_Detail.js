const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Dimension_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    DimentionId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Dimension',
        key: 'Id'
      }
    },
    dLength: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    dWidth: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    dHeight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    NoOfPcs: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Volume: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    VolumetricWeight: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Dimension_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Dimension_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
