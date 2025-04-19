const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Non_Gl_Parties', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.INTEGER,
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
    createdBy: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Non_Gl_Parties',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Non_Gl_P__3213E83FB185CE8A",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
