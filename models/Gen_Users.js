const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gen_Users', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    UserName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    UserLogin: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "IX_Gen_Users"
    },
    UserPassword: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    CreationDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    InActiveDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Picture: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CellPhone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsRestricted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    RestrictedBy: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    MachineName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AddBy: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    AddOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AddLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EditBy: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    EditOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EditLog: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DBId: {
      type: DataTypes.UUID,
      allowNull: true
    },
    SysData: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    SysGen: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    GenRolesId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Gen_Roles',
        key: 'Id'
      }
    },
    SecretQuestion: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    SecretAnswer: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    LastLoginDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LastPasswordChangeDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsAgent: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    AgentCodeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    GenSecurityGroupId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_SecurityGroup',
        key: 'Id'
      }
    },
    IsBlocked: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    BlockedDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Depot: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    PrincipleId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    UserPortCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    CustomerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    PasswordExpiry: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ShowOnlyCSRate: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    WebRegisteredId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    CommonCode: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    LogoPath: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    IsNotificationSend: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Gen_Users',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_Gen_Users",
        unique: true,
        fields: [
          { name: "UserLogin" },
        ]
      },
      {
        name: "PK_Gen_Users",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
