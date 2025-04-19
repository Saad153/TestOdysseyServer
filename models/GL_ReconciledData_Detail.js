const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_ReconciledData_Detail', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'GL_ReconciledData',
        key: 'Id'
      }
    },
    ReconciledId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    VoucherNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ChequeDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ChequeNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Amount: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    IsPost: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UnPost: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    VoucherDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Narration: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    PartyName: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_ReconciledData_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_ReconciledData_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
