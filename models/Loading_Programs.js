const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Loading_Programs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    localCustom: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    wharf: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    loadingTerminal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dischargeTerminal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    loadingDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    loadingTime: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    arrivalDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    croIssueDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    expiryDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    egm: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    etd: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    book: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gatePass: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gatePassDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    letter: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cro: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    validityDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    berth: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    viaPort: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    containerInfo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    portOfReciept: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    instruction: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    loadingFlag: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    allocAvailable: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    contAvailable: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sobDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    containerSplit: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    blRequired: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    containerWt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    containerPickup: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    containerTemp: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vent: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    loadingTerms: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SEJobId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'SE_Jobs',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Loading_Programs',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Loading___3213E83FD5508816",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
