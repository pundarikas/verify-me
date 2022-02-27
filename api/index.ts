import express from "express";
import cors from "cors";
import path from "path";
import { verify } from "./verification.service";

var app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, "../web/build")));

app.post("/api/verification", (req, res) => {
  const code = req.body.code;

  try {
    verify(code);
    res.status(200).send({ msg: "Verification Successful!" });
  } catch (err: any) {
    res.status(500).send({ msg: err.message });
  }
});

app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "../web/build", "index.html"));
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
