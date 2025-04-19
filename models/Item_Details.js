const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Item_Details', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    noOfPcs: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "(N0"
    },
    unit: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    grossWt: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "(N0"
    },
    kh_lb: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    r_class: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    itemNo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chargableWt: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "(N0"
    },
    rate_charge: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "(N0"
    },
    total: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "(N0"
    },
    lineWeight: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "(N0"
    },
    BlId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Bls',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Item_Details',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Item_Det__3213E83F09A2B081",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
