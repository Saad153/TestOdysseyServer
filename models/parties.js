module.exports = (sequelize, DataTypes) => {
    const Parties = sequelize.define("Parties", {
      code: { type:DataTypes.STRING },
      name: { type:DataTypes.STRING },
      city: { type:DataTypes.STRING },
      zip: { type:DataTypes.STRING },
      person1: { type:DataTypes.STRING },
      mobile1: { type:DataTypes.STRING },
      person2: { type:DataTypes.STRING },
      mobile2: { type:DataTypes.STRING },
      telephone1: { type:DataTypes.STRING },
      telephone2: { type:DataTypes.STRING },
      address2: { type:DataTypes.STRING },
      address1: { type:DataTypes.STRING },
      website: { type:DataTypes.STRING },
      accountsMail: { type:DataTypes.STRING },
      infoMail: { type:DataTypes.STRING },
      strn: { type:DataTypes.STRING },
      ntn: { type:DataTypes.STRING },
      registerDate: { type:DataTypes.STRING },
      operations: { type:DataTypes.STRING },
      types: { type:DataTypes.STRING },
      bankAuthorizeDate: { type:DataTypes.STRING },
      bank: { type:DataTypes.STRING },
      branchName: { type:DataTypes.STRING },
      branchCode: { type:DataTypes.STRING },
      accountNo: { type:DataTypes.STRING },
      iban: { type:DataTypes.STRING },
      partyType: { type:DataTypes.STRING },
      swiftCode: { type:DataTypes.STRING },
      routingNo: { type:DataTypes.STRING },
      ifscCode: { type:DataTypes.STRING },
      micrCode: { type:DataTypes.STRING },
      currency: { type:DataTypes.STRING },
      createdBy:{ type:DataTypes.STRING },
      climaxId:{ type:DataTypes.INTEGER },
      active:{
        type:DataTypes.BOOLEAN,
        // defaultValue:0.0
      },
      companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Companies", // pluralized table name
          key: "id",
        },
      },
      COAId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "COAs", // Must match the table/model name
          key: "id",
        },
      },
      AccRepId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "Employees", // Must match the table/model name
          key: "id",
        },
      },
      SalesRepId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "Employees", // Must match the table/model name
          key: "id",
        },
      },
      DocRepId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "Employees", // Must match the table/model name
          key: "id",
        },
      },
    })

    Parties.associate = (models) => {
      // COA association
      Parties.belongsTo(models.COA, {
        foreignKey: "COAId",
        as: "coa",
      });
    
      // Company association
      Parties.belongsTo(models.Company, {
        foreignKey: "companyId",
        as: "company",
      });
    
      // Employee associations
      Parties.belongsTo(models.Employees, {
        foreignKey: "AccRepId",
        as: "accountRep",
      });
    
      Parties.belongsTo(models.Employees, {
        foreignKey: "SalesRepId",
        as: "salesRep",
      });
    
      Parties.belongsTo(models.Employees, {
        foreignKey: "DocRepId",
        as: "docRep",
      });
    
      // Optional: reverse associations (if needed)
      // models.Company.hasMany(Parties, { foreignKey: "companyId", as: "parties" });
      // models.COA.hasMany(Parties, { foreignKey: "COAId", as: "linkedParties" });
    };
    

    return Parties;
  }