const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_PartiesCommitment_Detail', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    PartyCommitmentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_PartiesCommitment',
        key: 'Id'
      }
    },
    PortCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    TransitTime: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SE_FCL_TEUS: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    SE_LCL_CBM: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    SE_Value: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    SI_FCL_TEUS: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    SI_LCL_CBM: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    SI_Value: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    AE_KGS: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    AE_Value: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    AI_KGS: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    AI_Value: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_PartiesCommitment_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_PartiesCommitment_Detail",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
