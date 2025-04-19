const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_RunningDetention_Charges_Cont_DaysBreakup', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    RunningDetentionChargesContId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_RunningDetention_Charges_Cont',
        key: 'Id'
      }
    },
    RunningDetentionChargesId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_RunningDetention_Charges',
        key: 'Id'
      }
    },
    RunningDetentionId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'GL_RunningDetention',
        key: 'Id'
      }
    },
    FromDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TillDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Days: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Rate: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Amount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DetentionTariffDetentionId: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_RunningDetention_Charges_Cont_DaysBreakup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_RunningDetention_Charges_Cont_DaysBreakup",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
