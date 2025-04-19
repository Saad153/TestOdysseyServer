const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SE_Jobs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    jobNo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    jobId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    customerRef: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fileNo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shipStatus: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    teu: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bkg: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pcs: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vol: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    volWeight: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pol: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pod: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fd: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dg: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subType: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    billVol: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shpVol: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    weight: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    weightUnit: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    costCenter: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    jobType: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    jobKind: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    container: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    carrier: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    freightType: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nomination: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    transportCheck: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    customCheck: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    etd: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    eta: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cbkg: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    aesDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    aesTime: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    eRcDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    eRcTime: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    eRlDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    eRlTime: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    jobDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shipDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    doorMove: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cutOffDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cutOffTime: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    siCutOffDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    siCutOffTime: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vgmCutOffDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vgmCutOffTime: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    freightPaybleAt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    terminal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    delivery: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    companyId: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pkgUnit: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    incoTerms: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    exRate: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "(N1"
    },
    approved: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "(N0"
    },
    flightNo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cwtLine: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cwtClient: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    operation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    arrivalDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    arrivalTime: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    departureDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    departureTime: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ClientId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Clients',
        key: 'id'
      }
    },
    VoyageId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Voyages',
        key: 'id'
      }
    },
    salesRepresentatorId: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'Employees',
        key: 'id'
      }
    },
    overseasAgentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Vendors',
        key: 'id'
      }
    },
    shippingLineId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Vendors',
        key: 'id'
      }
    },
    localVendorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Vendors',
        key: 'id'
      }
    },
    customAgentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Vendors',
        key: 'id'
      }
    },
    transporterId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Vendors',
        key: 'id'
      }
    },
    createdById: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'Employees',
        key: 'id'
      }
    },
    commodityId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Commodities',
        key: 'id'
      }
    },
    consigneeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Clients',
        key: 'id'
      }
    },
    forwarderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Vendors',
        key: 'id'
      }
    },
    airLineId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Vendors',
        key: 'id'
      }
    },
    shipperId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Clients',
        key: 'id'
      }
    },
    vesselId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Vessels',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'SE_Jobs',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__SE_Jobs__3213E83F424417D9",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
