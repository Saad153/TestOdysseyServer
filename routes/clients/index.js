const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require("../../models");
const routes = require('express').Router();
const { History } = require("../../functions/Associations/historyAssociations");
const { Employees } = require("../../functions/Associations/employeeAssociations");
const { Clients, Client_Associations } = require("../../functions/Associations/clientAssociation");
const { Child_Account, Parent_Account } = require("../../functions/Associations/accountAssociations");
const { Voucher_Heads } = require('../../functions/Associations/voucherAssociations');

const createChildAccounts = (list, name) => {
    let result = [];
    list.forEach((x)=>{
        result.push({title:name, ParentAccountId:x.id, subCategory:'Customer'})
    })
    return result;
}
const createAccountList = (parent, child, id) => {
    let result = [];
    parent.forEach((x, i)=>{
        result[i] = {
            ClientId:id,
            CompanyId:x.CompanyId,
            ParentAccountId:x.id,
            ChildAccountId:null
        }
        child.forEach((y, j)=>{
            if(y.ParentAccountId==x.id){
                result[i].ChildAccountId=child[j].id
            }
        })
    })
    return result;
}

routes.post("/addClient", async(req, res)=>{
    try{
        // console.log(req.body)
        const result = await Clients.create(req.body)
        console.log(result)
        res.json({
            status:'success', 
            result:result.dataValues
        });
    }catch(e){
        res.json({status:'error', result:e});
        console.error(e)
    }
})

routes.post("/createClientAssociations", async(req, res) => {
    try{
        const result1 = await Clients.findOne({
            attributes:['id', 'name'],
            where:{
                name: req.body.name
            }
        })
        const ChAcc = await Child_Account.findOne({
            where:{
                id: req.body.ChildAccountId
            },
            attributes:['id', 'title', 'ParentAccountId'],
        })
        // for(let x of result1){
        //     console.log(x.dataValues)

        // }
        // console.log(result1.dataValues.id)
        // console.log(req.body.companyId)
        // console.log(ChAcc.dataValues.ParentAccountId)
        // console.log(ChAcc.dataValues.id)
        const result = await Client_Associations.create({
            ClientId: result1.dataValues.id,
            CompanyId: req.body.companyId,
            ParentAccountId: ChAcc.dataValues.ParentAccountId,
            ChildAccountId: ChAcc.dataValues.id
        });        
        console.log(result.dataValues)
        res.json({status: 'success', result:result.dataValues});
    }catch(e){
        res.json({status:'error', result:e});
        console.error(e)
    }
})

routes.post("/createClient", async(req, res) => {
    
    try {
        let value = req.body;
        value.operations = value.operations.join(', ');
        value.types = value.types.join(', ');
        delete value.id
        const check = await Clients.findOne({
            where:{
                [Op.and]: [
                    { code: { [Op.ne]: 'CU-00633' } },
                    { code: { [Op.ne]: 'CC-00884' } },
                    { code: { [Op.ne]: 'CU-00647' } },
                    { code: { [Op.ne]: 'CU-00013' } },
                    { code: { [Op.ne]: 'CU-00721' } },
                    { code: { [Op.ne]: 'CU-00902' } },
                    { code: { [Op.ne]: 'CU-00146' } },
                    { code: { [Op.ne]: 'CC-11914' } },
                ]
            },
            attributes:['code'],
            order: [ [ 'createdAt', 'DESC' ]]
        })
        if(!check){
            check.code = 0
        }
        value.accountRepresentatorId = value.accountRepresentatorId==""?null:value.accountRepresentatorId;
        value.salesRepresentatorId = value.salesRepresentatorId==""?null:value.salesRepresentatorId;
        value.docRepresentatorId = value.docRepresentatorId==""?null:value.docRepresentatorId;
        value.authorizedById = value.authorizedById==""?null:value.authorizedById;
        console.log(value)
        const check2 = await Clients.findOne({
            where: {
                name: value.name
            }
        })
        if(check2){
            return res.json({status:'exists', message:"Client Already Exists"});
        }
        const result = await Clients.create({...value, code : parseInt(check.code) + 1 })   
        // console.log(result)
        
        const accounts = await Parent_Account.findAll({
            where: { title: { [Op.or]: [`${req.body.pAccountName}`] } }
        });
        const accountsList = await Child_Account.bulkCreate(createChildAccounts(accounts, result.name));
        await Client_Associations.bulkCreate(createAccountList(accounts, accountsList, result.id));
        res.json({
            status:'success', 
            result:result
        });
    }
    catch (error) {
        console.error(error)
        res.json({status:'error', result:error});
    }
});

routes.post("/createClientInBulk", async(req, res) => {

    const createChildAccounts = (list, name) => {
        let result = [];
        list.forEach((x)=>{
            result.push({title:name+ `${x.title=="ACCOUNT RECEIVABLE"?" RECEIVABLE":" PAYABLE"}`, ParentAccountId:x.id, subCategory:'Customer'})
        })
        return result;
    }
    const createAccountList = (parent, child, id) => {
        let result = [];
        parent.forEach((x, i)=>{
            result[i] = {
                ClientId:id,
                CompanyId:x.CompanyId,
                ParentAccountId:x.id,
                ChildAccountId:null
            }
            child.forEach((y, j)=>{
                if(y.ParentAccountId==x.id){
                    result[i].ChildAccountId=child[j].id
                }
            })
        })
        return result;
    }

    try {
        await obj.forEach(async(val, i)=>{
            let value = {...val};
            value.accountRepresentatorId = null;
            value.salesRepresentatorId   = null;
            value.docRepresentatorId     = null;
            value.authorizedById         = null;
            value.createdBy              = "";
            const result = await Clients.create({...value}).catch((x)=>console.log(x))
            const accounts = await Parent_Account.findAll({
                where: {
                    CompanyId: { [Op.or]: [1, 2, 3] },
                    title: { [Op.or]: ['ACCOUNT RECEIVABLE', 'ACCOUNT PAYABLE'] }
                }
            }).catch((x)=>console.log("===========1=============", x))
            const accountsList = await Child_Account.bulkCreate(createChildAccounts(accounts, result.name)).catch((x)=>console.log("===========2===========", x))
            Client_Associations.bulkCreate(createAccountList(accounts, accountsList, result.id)).catch((x)=>console.log("===========3===========", x))
            console.log(i)
        });

        await res.json({status:'success'});
    }
    catch (error) {
      res.json({status:'error', result:error});
    }
});

routes.post("/editClient", async(req, res) => {

    try {
        let ids = [];
        let value = req.body.data;
        value.id = value.id
        value.operations = value.operations.join(', ');
        value.types = value.types.join(', ');

        await Clients.update({...value, code: parseInt(value.code)},{where:{id:value.id}});
        const pAccountList = await Parent_Account.findAll({where:{title:req.body.pAccountName}})
        const clientAssociation = await Client_Associations.findAll({
            where:{ClientId:value.id},
        });
        if(clientAssociation.length==0){
            console.log("No Client Associations")
            const accounts = await Parent_Account.findAll({
              where: { title: { [Op.or]: [`${req.body.pAccountName}`] } }
            });
            const accountsList = await Child_Account.bulkCreate(await createChildAccounts(accounts, value.name));
            // await clientAssociation.bulkCreate(createAccountList(accounts, accountsList, value.id)).catch((x)=>console.log(x))
        } else {
            clientAssociation.forEach(async(x)=>{
                ids.push(x.ChildAccountId);
                let tempChildId = pAccountList.find((y)=>y.CompanyId==x.CompanyId).id
                await Client_Associations.update({ParentAccountId:tempChildId}, {where:{id:x.id}})
            });
            await Child_Account.update({ title:value.name }, { where:{ id:ids } });
        }
        res.json({status:'success'});
    }
    catch (error) {
        console.error(error)
      res.json({status:'error', result:error});
    }
});

routes.get("/getClients", async(req, res) => {
    try {
        const result = await Clients.findAll({
            where:{[Op.and]:[{nongl:{[Op.eq]:null}}]},
            attributes:['id', 'name' , 'person1', 'mobile1', 'person2', 'mobile2', 'telephone1', 'telephone2', 'address1', 'address2', 'createdBy', 'code', 'active', 'types'],
            order: [['createdAt', 'DESC'], /* ['name', 'ASC'],*/] 
        });
        res.json({status:'success', result:result});
    }
    catch (error) {
      res.json({status:'error', result:error});
    }
});

routes.get("/getClientById", async(req, res) => {
    try {
        const result = await Clients.findOne({
            where:{id:req.headers.id},
            include:[{
                model:Client_Associations,
                attributes:['id'],
                include:[{
                    where:{CompanyId:1},
                    attributes:['id', 'title'],
                    model:Parent_Account,
                    include:[{
                        model:Child_Account
                    }]
                }]
            }]
        });
        res.json({status:'success', result:result});
    }
    catch (error) {
      res.json({status:'error', result:error});
    }
});

routes.get("/getNotifyParties", async(req, res) => {
    try {
        const result = await Clients.findAll({
            where:{
                types:{[Op.substring]: 'Notify'},
                
            },
            attributes:['id','name', 'address1', 'address1', 'person1', 'mobile1',
            'person2', 'mobile2', 'telephone1', 'telephone2', 'infoMail'],
            order: [['createdAt', 'DESC'], /* ['name', 'ASC'],*/] 
        });
        res.json({status:'success', result:result});
    }
    catch (error) {
      res.json({status:'error', result:error});
    }
});

routes.get("/getForCharges", async(req, res) => {
    try {
        let obj = req.headers.id===undefined?{[Op.and]:[{nongl:{[Op.eq]:null}}]}:{[Op.and]:[{ nongl:{[Op.eq]:null}, id:req.headers.id }]};
        const result = await Clients.findAll({
            where:obj,
            attributes:["id", "name", "person2", "person1", "mobile1", "mobile2", "address1", "address2", "types", "city", "types", "nongl"],
            order: [['createdAt', 'DESC'], /* ['name', 'ASC'],*/] 
        });
        res.json({status:'success', result:result});
    }
    catch (error) {
      res.json({status:'error', result:error});
    }
});

routes.get("/experimentalQuery", async(req, res) => {
    try {
        const [results, metadata] = await db.sequelize.query(
            `
            SELECT
                Clients.name,
                Employees.name AS EmployeeName,
                Clients.bank
            FROM Clients
            LEFT OUTER JOIN Employees ON Clients.accountRepresentatorId=Employees.id;
            `
            );
        res.json({status:'success', result:results});
    }
    catch (error) {
      res.json({status:'error', result:error});
    }
});

// routes.get("/getClientExperimental", async(req, res) => {
//     try {
//         const result = await Clients.findOne({
//             attributes:['id', 'name'],
//             include:[
//                 {
//                     model:Employees, as:"account_representator",
//                     attributes:['id', 'name'],
//                 },
//                 {
//                     model:Employees, as:"sales_representator",
//                     attributes:['id', 'name'],
//                 },
//                 {
//                     model:Employees, as:"doc_representator",
//                     attributes:['id', 'name'],
//                 },
//                 {
//                     model:Employees, as:"authorizedBy",
//                     attributes:['id', 'name'],
//                 },
//                 {
//                     model:Client_Associations,
//                     attributes:['CompanyId', 'ParentAccountId', 'ChildAccountId'],
//                 },
//             ],
//             where:{id:req.headers.id}
//         });
//         res.json({status:'success', result:result});
//     }
//     catch (error) {
//       res.json({status:'error', result:error});
//     }
// });

routes.get("/getChildAccounts", async(req, res) => {
    try {
        const result = await Client_Associations.findOne({
            where: {
                id: req.headers.id
            },
        });
        const result1 = await Vendor_Associations.findOne({
            where: {
                id: req.headers.id
            }
        })
        if(result){
            console.log(result)
            res.json({status:'success', result:result});
        }
        if(result1){   
            console.log(result1)
            res.json({status:'success', result:result1});
        }
    }
    catch (error) {
        console.log(error)
      res.json({status:'error', result:error});
    }
})

routes.post("/findAccounts", async(req, res) => {
    try {
        console.log(req.body);
        const result = await Parent_Account.findAll({
            where: {
                CompanyId: {
                    [Op.or]: req.body.companies
                },
                title:'Accounts Recievable'
            },
            attributes:['id', 'title']
        });
        res.json({status:'success', result:result});
    }
    catch (error) {
      res.json({status:'error', result:error});
    }
});

routes.get("/getClientAssociations", async(req, res) => {
    try {
        // console.log(req.headers)
        const result = await Client_Associations.findAll({
            where: {
                CompanyId: req.headers.company
            },
        });
        res.json({status:'success', result:result});
    }
    catch (error) {
        console.log(error)
        res.json({status:'error', result:error});
    }
});

routes.post("/deleteClient", async(req, res) => {
    try{
        console.log("Delete Client:", req.body.id)
        let clientId = req.body.id
        const result0 = await Clients.findOne({where: {
            id: clientId
        }})
        if(result0){
            const result1 = await Client_Associations.findOne({
                where: {
                    ClientId: result0.dataValues.id
                }
            })
            if(result1){
                const result2 = await Child_Account.findOne({
                    where: {
                        id: result1.dataValues.ChildAccountId
                    }
                })
                if(result2){
                    const result3 = await Voucher_Heads.findOne({
                        where: {
                            ChildAccountId: result2.dataValues.id
                        }
                    })
                    if(result3){
                        return res.json({status: 'transaction'})
                    } else {
                        await Child_Account.destroy({
                            where: {
                                id: result2.dataValues.id
                            }
                        })
                        await Client_Associations.destroy({
                            where: {
                                id: result1.dataValues.id
                            }
                        })
                        await Clients.destroy({
                            where: {
                                id: result0.dataValues.id
                            }
                        })
                    }
                } else {
                    await Client_Associations.destroy({
                        where: {
                            id: result1.dataValues.id
                        }
                    })
                    await Clients.destroy({
                        where: {
                            id: result0.dataValues.id
                        }
                    })
                }
            } else {
                await Clients.destroy({
                    where: {
                        id: result0.dataValues.id
                    }
                })
            }
        } else {
            return res.json({status: 'deleted'})
        }
        console.log(result0.dataValues)
        res.json({status: 'success'})
    }catch(e){
        console.error(e)
        res.json({status: 'error', message: e})
    }
})

module.exports = routes;