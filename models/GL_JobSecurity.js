const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_JobSecurity', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    SEJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SExp_SeaExportJob',
        key: 'Id'
      }
    },
    SIJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SImp_SeaImportJob',
        key: 'Id'
      }
    },
    Receivable: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    Received: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    RecdInHand: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    RecdInBank: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    Adjust: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    Return: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    RefundableBalance: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    SecurityStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_JobSecurity',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GL_JobSecurity",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
