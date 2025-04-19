const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_ActivityAlerts', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ActivityName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SysCode: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_ActivityAlerts',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_ActivityAlerts",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
