import express from "express";

// IMPORT ALL THE CONTROLLERS....

import { createProperty, getAllProperty, getPropertyDetails, updateProperty, deleteProperty } from "../controllers/property.controller.js";

const router = express.Router();

router.route('/').get(getAllProperty);
router.route('/:id').get(getPropertyDetails);
router.route('/').post(createProperty);
router.route('/:id').patch(updateProperty);
router.route('/:id').delete(deleteProperty);

export default router;