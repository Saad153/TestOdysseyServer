const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Clients', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    person1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mobile1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    person2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mobile2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    telephone1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    telephone2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    accountsMail: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    infoMail: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    strn: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ntn: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    registerDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    operations: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    types: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bankAuthorizeDate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bank: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    branchName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    branchCode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    accountNo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    iban: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    swiftCode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    routingNo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ifscCode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    micrCode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    currency: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    createdBy: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nongl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    accountRepresentatorId: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'Employees',
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
    docRepresentatorId: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'Employees',
        key: 'id'
      }
    },
    authorizedById: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'Employees',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Clients',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Clients__3213E83F663ADBEB",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
