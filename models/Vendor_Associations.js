const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Vendor_Associations', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    VendorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Vendors',
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
    tableName: 'Vendor_Associations',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Vendor_A__3213E83FF0A7D7E5",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
