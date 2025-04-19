const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_SysPolElements', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ElementName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ElementTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SysPolElementType',
        key: 'Id'
      }
    },
    EditorType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SourceId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SysPolElementSource',
        key: 'Id'
      }
    },
    SerialNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsSecured: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_SysPolElements',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_Elements",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
