const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const Shop = require("./model/Shop");
const cors = require("cors");

mongoose.connect("mongodb://localhost:27017/Shoppers").then(() => {
  console.log("Database Connected Successfully");
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get("/", async (req, res) => {
    const data = await Shop.find();
    res.json(data);
  });

  app.get("/:id", async (req, res) => {
    const data = await Shop.findOne({ ShopID: req.params.id });
    res.json(data);
  });

  app.post("/", async (req, res) => {
    const shop = Shop();
    const { ShopID, ShopName, ShopAddress } = req.body;
    shop.ShopID = ShopID;
    shop.ShopName = ShopName;
    shop.ShopAddress = ShopAddress;
    const data = await shop.save();
    res.json(data);
  });

  app.put("/:id", async (req, res) => {
    const data = await Shop.findOne({ ShopID: req.params.id });
    const { ShopID, ShopName, ShopAddress } = req.body;
    data.ShopID = ShopID;
    data.ShopName = ShopName;
    data.ShopAddress = ShopAddress;
    await data.save();
    res.json(data);
  });

  app.delete("/:id", async (req, res) => {
    const data = await Shop.deleteOne({ ShopID: req.params.id });
    res.json(data);
  });

  app.listen(5000, () => {
    console.log("Server Started @http://localhost:5000");
  });
});
