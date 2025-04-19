const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Log_JobActivities', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    DOID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    TransNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LogJobId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_Job',
        key: 'Id'
      }
    },
    LogJobContainerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_Job_Container',
        key: 'Id'
      }
    },
    ActivityId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Log_Activity',
        key: 'Id'
      }
    },
    VehicleNo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ActivityDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ActivityTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DriverName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DriverCellNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DriverCNIC: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    TransporterId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Parties',
        key: 'Id'
      }
    },
    Temprature: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    GenSetNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BiltyNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BorderId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Gen_Border',
        key: 'Id'
      }
    },
    RemarksInt: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    remarks2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    remarks3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LocCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    NextLocCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      references: {
        model: 'Gen_UNLocation',
        key: 'UNLocCode'
      }
    },
    ManifestID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    AddBy: {
      type: DataTypes.INTEGER,
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
      type: DataTypes.INTEGER,
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
    }
  }, {
    sequelize,
    tableName: 'Log_JobActivities',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Log_JobA__3214EC076AF30DB4",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
