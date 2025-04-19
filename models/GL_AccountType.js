const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GL_AccountType', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AccountType: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GL_AccountType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__GL_Accou__3214EC072FCF1A8A",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
