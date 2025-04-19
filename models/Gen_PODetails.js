const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_PODetails', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Vendor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PONo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Brand: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    PODestination: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ItemQSK: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SysQty: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    BookQty: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Variance: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    CNTS: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Volume: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    FOBDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ActualDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PackingUnit: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    BookingNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_PODetails',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_PODetails",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
