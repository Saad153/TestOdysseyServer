const { Clients } = require("../../functions/Associations/clientAssociation");
const routes = require('express').Router();
const Sequelize = require('sequelize');

routes.post("/createNonGlParty", async(req, res) => {
    try {
        let value = req.body;
        value.operations = value.operations.join(', ');
        value.types = value.types.join(', ');
        value.accountRepresentatorId = null
        value.salesRepresentatorId = null
        value.docRepresentatorId = null
        value.authorizedById = null
        delete value.id
        // const { fn, col, literal } = require("sequelize");
        // const check = await Clients.max("code");
        // console.log(check)
        // const result = await Clients.create({
        //     ...value,
        //     code : check == null ? 1 : parseInt(check) + 1,
        //     nongl:'1'
        // }).catch((x)=>console.log(x))
        const check = await Clients.max("code");

        console.log("Max Code:", check);

        // Default code if no records exist
        let newCode = "1"; 

        if (check) {
            // Extract non-numeric prefix and numeric part
            const match = check.match(/^([^\d]*)(\d+)$/);
            if (match) {
                const prefix = match[1];   // e.g., "CU-"
                const numPart = match[2];  // e.g., "00902"

                // Increment the number and preserve leading zeros
                const newNum = String(parseInt(numPart) + 1).padStart(numPart.length, "0");

                // Construct the new code
                newCode = `${prefix}${newNum}`;
            }
        }

        const result = await Clients.create({
            ...value,
            code: newCode,
            nongl: "1",
        }).catch((x) => console.log(x));

      
        res.json({status:'success', result: result});
    }
    catch (error) {
        console.error(error)
        res.json({status:'error', result:error});
    }
});

routes.get("/getParties", async(req, res) => {
    try {
        const result = await Clients.findAll({
            attributes:['id', 'name' , 'person1', 'mobile1', 'person2', 'mobile2', 'telephone1', 'telephone2', 'address1', 'address2', 'createdBy', 'code'],
            where:{nongl:'1'},
            order: [['createdAt', 'DESC'], /* ['name', 'ASC'],*/] 
        });
        res.json({status:'success', result:result});
    }
    catch (error) {
      res.json({status:'error', result:error});
    }
});

routes.get("/getPartiesById", async(req, res) => {
    try {
        const result = await Clients.findOne({where:{id:req.headers.id}});
        res.json({status:'success', result:result});
    }
    catch (error) {
      res.json({status:'error', result:error});
    }
});

routes.post("/editNonGlParty", async(req, res) => {
    try {
        let value = req.body;
        value.id = value.id
        value.operations = value.operations.join(', ');
        value.types = value.types.join(', ');
        const result = await Clients.update({...value, code: parseInt(value.code)},{where:{id:value.id}}).then((x)=>console.log(x))
       
        res.json({status:'success', result:result})
    }
    catch (error) {
      res.json({status:'error', result:error});
    }
});


module.exports = routes;