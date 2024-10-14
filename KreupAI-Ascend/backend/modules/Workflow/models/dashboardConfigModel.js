//Khushi
//24-09-24
import mongoose from 'mongoose';

const dashboardConfigSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    widget_type: { type: String, required: true },
    position: {
      x: { type: Number, required: true },
      y: { type: Number, required: true },
    },
    filter_settings: { type: Object, required: false },
  },
  { collection: "Dashboard Config" }
);

const DashboardConfig = mongoose.model('DashboardConfig', dashboardConfigSchema);

export default DashboardConfig;
