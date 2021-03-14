const express = require("express");
const router = express.Router();
const axios = require("axios");
const { searchItems, getFullItemById } = require("../services");

router.get("/", async (req, res, next) => {
  const data = await searchItems(req.query.q);
  res.json({
    author: { name: "Marcos", lastname: "Millas" },
    categories: data.filters,
    data: data,
    items: data.results.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: "Number",
        },
        picture: item.thumbnail,
        condition: item.condition,
        freeShipping: item.shipping.free_shipping,
      };
    }),
  });
});

router.get("/:id", async (req, res, next) => {
  const item = await getFullItemById(req.params.id);

  res.json({
    author: { name: "Marcos", lastname: "Millas" },
    item: {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
      },
      picture: item.thumbnail,
      condition: item.condition,
      freeShiping: item.shipping.free_shipping,
      soldQuantity: item.sold_quantity,
      description: item.description.plain_text,
    },
  });
});
module.exports = router;
