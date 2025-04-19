const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Client_Associations', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ClientId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Clients',
        key: 'id'
      }
    },
    CompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Companies',
        key: 'id'
      }
    },
    ParentAccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Parent_Accounts',
        key: 'id'
      }
    },
    ChildAccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Child_Accounts',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Client_Associations',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Client_A__3213E83F4746B56A",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
