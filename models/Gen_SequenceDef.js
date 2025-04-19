const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_SequenceDef', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SeqId: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FormName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsSubCompWise: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsLocationWise: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IsActivityWise: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DocPrefix: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    AllowDuplicatePrefix: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_SequenceDef',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_SequenceDef",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
