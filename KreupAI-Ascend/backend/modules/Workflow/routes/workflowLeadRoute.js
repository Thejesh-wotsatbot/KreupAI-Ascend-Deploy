import express from "express";
import {
  createLead,
  getAllLeads,
  getLeadById,
  updateLead,
  deleteLead,
} from "../controllers/workflowLeadController.js";

const router = express.Router();

router.post("/leads", createLead);
router.get("/leads", getAllLeads);
router.get("/leads/:id", getLeadById);
router.put("/leads/:id", updateLead);
router.delete("/leads/:id", deleteLead);

export default router;
