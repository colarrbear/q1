const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const ads = [
  { name: "Shopee", url: "https://shopee.co.th/", image: "https://via.placeholder.com/150" },
  { name: "Lazada", url: "https://www.lazada.co.th/", image: "https://via.placeholder.com/150" },
  { name: "Kaidee", url: "https://www.kaidee.com/", image: "https://via.placeholder.com/150" }
];

app.get("/ads", (req, res) => {
  res.json(ads);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Advertise service running on port ${PORT}`));
