const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_SecurityGroup_Authority', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    GenSecurityGroupId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_SecurityGroup',
        key: 'Id'
      }
    },
    GenFormFunctionId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Forms_Functions',
        key: 'Id'
      }
    },
    Access: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_SecurityGroup_Authority',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_SecurityGroup_Authority",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
