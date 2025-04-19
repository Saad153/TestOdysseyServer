const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Office_Vouchers', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    requestedBy: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    onAcOf: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    amount: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    descriptive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    preparedBy: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    approved: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CompanyId: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    reverseAmount: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    paid: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "(N0"
    },
    EmployeeId: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'Employees',
        key: 'id'
      }
    },
    VoucherId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Vouchers',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Office_Vouchers',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Office_V__3213E83F2D870A77",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
