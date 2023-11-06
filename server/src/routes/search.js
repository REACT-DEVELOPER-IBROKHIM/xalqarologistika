const express = require("express");
const DriverCertificates = require("../models/DriverCertificates");
const ManagerCertificates = require("../models/ManagerCertificates");
const AdrCertificates = require("../models/AdrCertificates");
const AdrTankCertificates = require("../models/AdrTankCertificate");
const verifyAdmin = require("../middleware/verifytoken");
const generateId = require("../utils/generateId");

const search = express.Router();

search.get("/",  async (req, res) => {
    const id = req.query.id;
    let certificate;
    try {
        if(id.toLowerCase().includes("d")){
             certificate = await DriverCertificates.findOne({id});
        }
        else if(id.toLowerCase().includes("m")){
            certificate =  await ManagerCertificates.findOne({id});
        }
        else if(id.toLowerCase().includes("t")){
            certificate =  await AdrTankCertificates.findOne({id});
        }
        else{
            certificate =  await AdrCertificates.findOne({id});

        }
        res.status(200).json(certificate);
      } 
      catch (err) {
        res.send(404).json({
            "error_uz": "Sertifikat topilmadi"
        });
      }
})

search.get("/search-by-all", verifyAdmin, async (req, res) => {
    const name = req.query.name; 
    const id = req.query.id;
    const type = req.query.type;
  
    const query = {};
  
    if (name) {
      query.name = { $regex: name, $options: 'i' };
    }
  
    if (id) {
      query.id = id;
    }
    
    try {
        let certificates;
        let totalCertificates;
        const limit = req.query.limit;
        const page = req.query.page || 1;
        switch(type){
           case "certificate": 
                certificates = await DriverCertificates.find(query).limit(limit).skip(limit * (page - 1))
                totalCertificates = await DriverCertificates.countDocuments({})
                totalCertificates = generateId(totalCertificates + 1, 5, "D");
            break;
            case "adr-certificate": 
                certificates = await AdrCertificates.find(query).limit(limit).skip(limit * (page - 1))
                totalCertificates = await AdrCertificates.countDocuments({})
                totalCertificates = generateId(totalCertificates + 1, 6);
            break;
            case "adr-tank-certificate": 
                certificates = await AdrTankCertificates.find(query).limit(limit).skip(limit * (page - 1))
                totalCertificates = await AdrTankCertificates.countDocuments({})
                totalCertificates = generateId(totalCertificates + 1, 7, "T");
            break;
            case "manager-certificate":
                certificates = await ManagerCertificates.find(query).limit(limit).skip(limit * (page - 1))
                totalCertificates = await ManagerCertificates.countDocuments({})
                totalCertificates = generateId(totalCertificates + 1, 5, "M");
            break;
        }
        res.json({allCertificates: certificates, totalItems: totalCertificates});
    } 
    catch (error) {
        console.error(error);
        res.status(500).send('Error searching for products.');
    }
})

module.exports = search;