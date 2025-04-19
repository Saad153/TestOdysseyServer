const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Bls', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    operation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    hbl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    no: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hblDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    hblIssue: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mbl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mblDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    blReleaseStatus: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    blhandoverType: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    releaseInstruction: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    remarks: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sailingDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shipDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shipperContent: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    consigneeContent: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    notifyOneContent: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    notifyTwoContent: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    deliveryContent: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    marksContent: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    marksContentTwo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    noOfPckgs: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    descOfGoodsContent: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    descOfGoodsContentTwo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    grossWeightContent: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    measurementContent: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AgentStamp: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    hs: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    onBoardDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    issuePlace: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    issueDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    poDeliveryTwo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    podTwo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    polTwo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    agentM3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    coloadM3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    noBls: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    formE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    formEDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    declareCarriage: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    declareCustoms: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    insurance: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    handlingInfo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    toOne: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    toTwo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    toThree: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    byOne: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    byTwo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    byFirstCarrier: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    currency: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    charges: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    wtValPPC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    wtValCOLL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    othersPPC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    othersCOLL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ppWeightCharges: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ccWeightCharges: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ppvaluationCharges: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ccvaluationCharges: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ppTax: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ccTax: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ppOtherDueChargeAgent: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ccOtherDueChargeAgent: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ppOtherDueChargeCarrier: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ccOtherDueChargeCarrier: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ppTotal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ccTotal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    applyToCWT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SEJobId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'SE_Jobs',
        key: 'id'
      }
    },
    notifyPartyOneId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Clients',
        key: 'id'
      }
    },
    notifyPartyTwoId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Clients',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Bls',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Bls__3213E83FF405A870",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
