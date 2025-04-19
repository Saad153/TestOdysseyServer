const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CVHM_GuaranteeFilling', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TranDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    GuaranteeTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CVHM_GuaranteeType',
        key: 'Id'
      }
    },
    FileNo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FileDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OurRefNo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ShippingLineID: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    VesselID: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Vessel',
        key: 'Id'
      }
    },
    VoyageNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CustomCancellationDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AddBy: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    AddOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AddLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EditBy: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    EditOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EditLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TranNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SubCompanyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FillingStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    GuaranteeFillingId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'CVHM_GuaranteeFilling',
        key: 'Id'
      }
    },
    TerminalId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties_Locations',
        key: 'Id'
      }
    },
    ShippingLicenseId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_ShippingAgencyLicense',
        key: 'Id'
      }
    }
  }, {
    sequelize,
    tableName: 'CVHM_GuaranteeFilling',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CVHM_GuaranteeFilling",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
