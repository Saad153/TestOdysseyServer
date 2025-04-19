const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_EmailRecipient', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EmailRecipient: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_EmailRecipient',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Gen_EmailRecipient",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
