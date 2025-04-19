const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_CloudInfo', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CloudServiceId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "IX_Gen_CloudInfo"
    },
    CloudServiceName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AccessEmailAddress: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "IX_Gen_CloudInfo"
    },
    AccessToken: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    AccesTokenValidTill: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RefreshToken: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_CloudInfo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_Gen_CloudInfo",
        unique: true,
        fields: [
          { name: "CloudServiceId" },
          { name: "AccessEmailAddress" },
        ]
      },
      {
        name: "PK_Gen_CloudInfo",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
