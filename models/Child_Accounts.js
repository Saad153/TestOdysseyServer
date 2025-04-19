const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Child_Accounts', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    editable: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subCategory: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ParentAccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Parent_Accounts',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Child_Accounts',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Child_Ac__3213E83FAB33D3F2",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
