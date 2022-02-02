const express = require("express");
const {getHospitals, createHospital, deleteHospital, getHospital, updateHospital} = require("../controllers/hospital");
const router = express.Router();

router.route("/").get(getHospitals).post(createHospital);
router.route("/:id").get(getHospital).put(updateHospital).delete(deleteHospital);

module.exports = router;