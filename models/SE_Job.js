module.exports = (sequelize, DataTypes) => {
    const SE_Job = sequelize.define("SE_Job", {
        jobNo: { type:DataTypes.STRING },
        jobId: { type:DataTypes.INTEGER },
        title:{ type:DataTypes.STRING },
        customerRef:{ type:DataTypes.STRING },
        fileNo:{ type:DataTypes.STRING },
        shipStatus:{ type:DataTypes.STRING },
        //vessel: { type:DataTypes.STRING },
        teu: { type:DataTypes.STRING },
        bkg: { type:DataTypes.STRING },
        pcs: { type:DataTypes.STRING },
        vol: { type:DataTypes.STRING },
        volWeight: { type:DataTypes.STRING },
        pol: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
            model: "Ports", // pluralized table name
            key: "id",
            },
        },
        pod: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
            model: "Ports", // pluralized table name
            key: "id",
            },
        },
        fd: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
            model: "Ports", // pluralized table name
            key: "id",
            },
        },
        dg: { type:DataTypes.STRING },
        subType: { type:DataTypes.STRING },
        billVol: { type:DataTypes.STRING },
        shpVol: { type:DataTypes.STRING },
        weight: { type:DataTypes.STRING },
        weightUnit: { type:DataTypes.STRING },
        costCenter: { type:DataTypes.STRING },
        jobType: { type:DataTypes.STRING },
        jobKind: { type:DataTypes.STRING },
        container: { type:DataTypes.STRING },
        carrier: { type:DataTypes.STRING },
        freightType: { type:DataTypes.STRING },
        nomination: { type:DataTypes.STRING },
        transportCheck: { type:DataTypes.STRING },
        customCheck: { type:DataTypes.STRING },
        etd: { type:DataTypes.STRING },
        eta: { type:DataTypes.STRING },
        cbkg: { type:DataTypes.STRING },
        aesDate: { type:DataTypes.STRING },
        aesTime: { type:DataTypes.STRING },
        eRcDate: { type:DataTypes.STRING },
        eRcTime: { type:DataTypes.STRING },
        eRlDate: { type:DataTypes.STRING },
        eRlTime: { type:DataTypes.STRING },
        jobDate: { type:DataTypes.STRING },
        shipDate: { type:DataTypes.STRING },
        doorMove: { type:DataTypes.STRING },
        cutOffDate: { type:DataTypes.STRING },
        cutOffTime: { type:DataTypes.STRING },
        siCutOffDate: { type:DataTypes.STRING },
        siCutOffTime: { type:DataTypes.STRING },
        vgmCutOffDate: { type:DataTypes.STRING },
        vgmCutOffTime: { type:DataTypes.STRING },
        freightPaybleAt: { type:DataTypes.STRING },
        terminal: { type:DataTypes.STRING },
        delivery: { type:DataTypes.STRING },
        companyId: { type:DataTypes.STRING },
        pkgUnit: { type:DataTypes.STRING },
        incoTerms: { type:DataTypes.STRING },
        exRate: { 
            type:DataTypes.STRING,
            defaultValue: "1"
        },
        approved: { 
            type:DataTypes.STRING,
            defaultValue: "0"
        },
        flightNo:{ type:DataTypes.STRING },
        cwtLine:{ type:DataTypes.STRING },
        cwtClient:{ type:DataTypes.STRING },
        operation:{ type:DataTypes.STRING },

        arrivalDate  :{ type:DataTypes.STRING },
        arrivalTime  :{ type:DataTypes.STRING },
        departureDate:{ type:DataTypes.STRING },
        departureTime:{ type:DataTypes.STRING },
    })

    SE_Job.associate = (models) => {
        SE_Job.belongsTo(models.Ports, {
            foreignKey: "pod",
            as: "podPort", // renamed to avoid collision
        });

        SE_Job.belongsTo(models.Ports, {
            foreignKey: "pol",
            as: "polPort",
        });

        SE_Job.belongsTo(models.Ports, {
            foreignKey: "fd",
            as: "fdPort",
        });
    };
    return SE_Job;
}