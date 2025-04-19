const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Manifest_Jobs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    awb: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mbl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    no_of_pc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nature_of_good: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    goross_wt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    destination: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    office_use: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gd: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    job_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shipper_content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    consignee_content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    carriar_agent_content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    agent_IATA_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shipper_account_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    consignee_account_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    account_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    airport_of_departure: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    airport_of_destination: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    to: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    by_first_carrier: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    routing_and_destination: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    requested_flight: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    requested_flight_date: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    non_negotiable: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    issued_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    at: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    on: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    currency: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chgs: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ppd: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    coll: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ppd2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    coll2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    declared_value_carriage: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    declared_value_customs: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    to1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    by1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    to2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    by2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    at2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    commodity_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shipper_certifies: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    kg: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    accounting_information: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    refrence_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    optional_shipping_information: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount_of_insurance: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    handing_information: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sci: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rate_class: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chargeable_weight: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    total: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    prepaid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    weight_charge: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    collect: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    valuation_charge: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tax: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    total_other_charges_due_agnet: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    total_other_charges_due_carrier: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    total_prepaid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    total_collect: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    currency_conversion_rate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cc_charges_dest_currency: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    charges_at_destination: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    other_charges: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    excluded_on_date: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    total_collect_charges: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    issuing_agent: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ManifestId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Manifests',
        key: 'id'
      }
    },
    SEJobId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'SE_Jobs',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Manifest_Jobs',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Manifest__3213E83F38683327",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
