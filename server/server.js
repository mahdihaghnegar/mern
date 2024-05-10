import express from "express";
import cors from "cors";
import records from "./routes/record.js";

const PORT = process.env.PORT || 5050;
const app = express();

// middleware
const corsOptions = {
  origin: "http://127.0.0.1:5173", // frontend URI (ReactJS)
};
app.use(express.json());
app.use(cors(corsOptions));
app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
