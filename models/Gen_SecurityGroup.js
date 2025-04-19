const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_SecurityGroup', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SecurityGroupName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    GenRoleId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_Roles',
        key: 'Id'
      }
    },
    GenSecurityLevelId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_SecurityLevel',
        key: 'Id'
      }
    },
    IsCustomized: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    IsSysGen: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
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
    }
  }, {
    sequelize,
    tableName: 'Gen_SecurityGroup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_SecurityGroup",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
