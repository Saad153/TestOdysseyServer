const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_SecurityFile', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    LGJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_Job',
        key: 'Id'
      }
    },
    TransporterId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    SecurityAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    SecurityPONo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    SecurityPODate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EIRDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ReturnAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    ReturnPONo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ReturnPODate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ReturnToClient: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DetentionAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(7000),
      allowNull: true
    },
    FileStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VoucherId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_Voucher',
        key: 'Id'
      }
    },
    RefundDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OtherAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    RefundAmount: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    RefundTranModeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RefundAccountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
        key: 'Id'
      }
    },
    SecReceivableAccId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GL_COA',
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
    }
  }, {
    sequelize,
    tableName: 'Gen_SecurityFile',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_SecurityFile",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
