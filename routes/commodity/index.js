const { Op } = require("sequelize");
const routes = require('express').Router();
const { Commodity } = require("../../models");

routes.post("/create", async(req, res) => {
    let tempData = {...req.body.data};
    delete tempData.isHazmat;
    tempData.isHazmat = req.body.data.isHazmat.length>0?1:0;
    try {
      console.log(tempData)
      const result = await Commodity.create(tempData);
      res.json({status:'success', result:result});
    }
    catch (error) {
      console.log(error)
      res.json({status:'error', result:error});
    }
});

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: "postgres://postgres:''@localhost:5432/cargolinkers"
  });
async function batchInsertPostgres(data, batchSize = 1000) {
  try {
    for (let i = 0; i < data.length; i += batchSize) {
      const batch = data.slice(i, i + batchSize);

      const table = "Commodities";
      const values = [];
      const placeholders = batch
        .map((_, index) => `($${index * 6 + 1}, $${index * 6 + 2}, $${index * 6 + 3}, $${index * 6 + 4}, $${index *6 + 5}, $${index * 6 + 6})`)
        .join(',');

      batch.forEach(record => {
        values.push(record.name, record.hs, record.isHazmat, record.finYear, new Date(), new Date());
      });
console.log("values>>>",values)
      const query = `
        INSERT INTO "Commodities" (name, hs, "isHazmat", "finYear", "createdAt","updatedAt") 
        VALUES ${placeholders}
      `;
      console.log("query>>>",query);

      const result = await pool.query(query, values);
      console.log("result>>>",result);
    }
    console.log('Batch insert successful');
  } catch (error) {
    console.error('Batch insert error:', error);
  }
}

routes.post('/createBulk', async (req, res) => {
  try {
    await batchInsertPostgres(req.body);
    res.json({ status: 'success', message: 'Data inserted successfully' });
  } catch (error) {
    res.status(500).json({ status: 'error', result: error.message });
  }
});
// routes.post("/createBulk", async(req, res) => {
//   // console.log("body",req.body);
//   console.dir(req.body,{depth: null});
//     try {
//       const result = await Commodity.bulkCreate(req.body,{
//         validate: false,
//         batchSize: 15000
//       });
//     console.log('result',result) 
//       res.json({status:'success', result:result});
//     }
//     catch (error) {
//       res.json({status:'error', result:error});
//     }
// });

routes.get("/get", async(req, res) => {
    try {
      const result = await Commodity.findAll({
        order: [['createdAt', 'DESC']]
      });
      res.json({status:'success', result:result});
    }
    catch (error) {
      res.json({status:'error', result:error});
    }
});

routes.post("/edit", async(req, res) => {
    let tempData = {...req.body.data};
    delete tempData.isHazmat;
    tempData.isHazmat = req.body.data.isHazmat.length>0?1:0;
    try {
      await Commodity.update(tempData,{
        where:{id:tempData.id}
      });
      const result = await Commodity.findOne({where:{id:tempData.id}})
      res.json({status:'success', result:result});
    }
    catch (error) {
      res.json({status:'error', result:error});
    }
});

module.exports = routes;