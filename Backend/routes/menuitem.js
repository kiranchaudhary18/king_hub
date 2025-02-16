const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');
router.get('/:foodname', async (req, res) => {
    try {
        const foodname = req.params.foodname;
        const lower=foodname.toLowerCase();
        // console.log(lower)
        const areaname = await MenuItem.findOne({ foodname: lower });

        if (!areaname) {
            return res.status(404).json({ message: "No hostels found in this foodname." });
        }

        res.status(200).json(areaname);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

module.exports = router;