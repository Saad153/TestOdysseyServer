module.exports = (sequelize, DataTypes) => {
    const Ports = sequelize.define("Ports", {
        portId: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        portName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        portCountry: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        type: {
            type: DataTypes.ENUM("pol", "pod", "fd"),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        operation: {
            type: DataTypes.ENUM("SE", "SI", "AE", "AI"),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    })
    return Ports
}