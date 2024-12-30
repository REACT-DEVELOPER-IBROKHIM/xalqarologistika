const express = require("express");
const DriverCertificates = require("../models/DriverCertificates");
const ManagerCertificates = require("../models/ManagerCertificates");
const AdrCertificates = require("../models/AdrCertificates");
const AdrTankCertificates = require("../models/AdrTankCertificate");
const identifyMonth = require("../utils/summarizeTime").identifyMonth;
const verifyAdmin = require("../middleware/verifytoken");

const analytics = express.Router();

analytics.get("/allbymonth", verifyAdmin, async (req, res) => {
    const certificates = await DriverCertificates.find();
    const dates = certificates.map(certificate => {
        if (certificate.from !== "Mavjud emas") {
            return certificate.from
        }
    }).filter(validCertificateDate => validCertificateDate).map(i => i.slice(0, 7));
    const counts = {};
    dates.forEach(function (x) {
        counts[x] = (counts[x] || 0) + 1;
    })

    const monthly = [];
    for (let key in counts) {
        monthly.push({
            count: counts[key],
            month: identifyMonth(+key.split(".")[1]),
            year: key.split(".")[0]
        })
    }

    res.status(200).json(monthly);
})

analytics.get("/alltotal", verifyAdmin, async (req, res) => {
    const certificates = await DriverCertificates.countDocuments();
    const adrs = await AdrCertificates.countDocuments();
    const adrTank = await AdrTankCertificates.countDocuments();
    const managers = await ManagerCertificates.countDocuments();

    res.status(200).json({
        total: certificates + adrs + adrTank + managers,
        counts: [
            {
                name : "Driver", 
                count: certificates 
            },
            {
                name : "Adr", 
                count: adrs
            },
            {
                name: "Adr Tank",
                count: adrTank
            },
            {
                name: "Manager",
                count: managers
            }]
    })
})

module.exports = analytics