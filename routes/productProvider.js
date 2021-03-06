const { Op } = require("sequelize"),
  { Router, request, response } = require("express"),
  { getRequestParams } = require("../helper/requestUtils");

const { Provider, Product } = require("../database/models").models;
const router = Router();

router.use(function (req, res, next) {
  res.append("service", ["product-provider"]);
  next();
});

router.get("/list", async (req, res) => {
  res.append("service-action", ["listAll"]);

  var { provName } = req.query;
  const where = {};
  if (provName)
    where.name = { [Op.iLike]: "%" + provName.split(" ").join("%") + "%" };

  var hasWhere = !(
    Object.keys(where).length === 0 && where.constructor === Object
  );

  //TODO colocar em um trycatch
  const responseDb = await Provider.findAll({
    where: hasWhere ? where : null,
    order: [
      ["isActive", "DESC"],
      ["name", "ASC"],
    ],
  });

  if (responseDb) {
    return res.send(responseDb);
  } else {
    res.append("error", ["There's no provider records on database."]);
    return res.send(null);
  }
});

router.post("/create", async (req, res) => {
  res.append("service-action", ["create"]);
  const newProvider = getRequestParams(req, [
    "name",
    "phone",
    "email",
    "endereco",
  ]);

  if (!newProvider.name && !newProvider.phone) {
    res.append("error", ["Missing params on declaration."]);
    return res.send(null);
  }
  const responseDb = await Provider.create({ ...newProvider });

  if (responseDb) {
    return res.send(responseDb.dataValues);
  } else {
    res.append("error", ["Error while creating new entry."]);
    return res.send(null);
  }
});

router.post("/update", async (req, res) => {
  const updatedProvider = getRequestParams(req, [
    "id",
    "name",
    "phone",
    "email",
    "endereco",
  ]);

  if (!updatedProvider.name || !updatedProvider.phone) {
    return res.send(null);
  }
  var provider;
  try {
    provider = await Provider.findByPk(updatedProvider.id);
  } catch (error) {
    console.log(error);
    return res.json(null);
  }
  console.log("provider", provider);
  if (!provider) return res.json(null);

  let { name, phone, email, endereco } = updatedProvider;
  if (name) provider.name = name;
  if (phone) provider.phone = phone;
  if (email) provider.email = email;
  if (endereco) provider.endereco = endereco;

  try {
    provider.save();
  } catch (error) {
    console.log(error);
    return res.json(null);
  }

  return res.json(provider);
});

router.post("/delete", async (req, res) => {
  var { id } = getRequestParams(req, ["id"]);
  var provider;
  try {
    provider = await Provider.findByPk(id);
  } catch (error) {
    return res.json(null);
  }

  if (!provider) return res.send(null);

  var hasProduct;
  try {
    hasProduct =
      (await Product.findOne({
        attributes: ["id"],
        where: { condition: id },
      })) != null;
  } catch (error) {
    return res.json(null);
  }
  console.log(hasProduct);

  if (hasProduct) {
    return res.json(null);
  }

  try {
    provider.destroy();
  } catch (error) {
    return res.json(null);
  }

  return res.json(true);
});

router.get("/:id", async (req, res) => {
  res.append("service-action", ["getByPk"]);
  const { id } = req.params;

  const responseDb = await Provider.findOne({
    where: { id: id },
    include: [
      {
        model: Product,
        attributes: ["id", "name", "price"],
        where: { provider: id },
        required: false,
      },
    ],
  }).catch((err) => console.log(err));

  if (responseDb) {
    var hasProduct = false;
    try {
      hasProduct =
        (await Product.findOne({
          attributes: ["id"],
          where: { category: id },
        })) != null;
    } catch (error) {
      console.log(error);
    }

    responseDb.dataValues.hasProduct = hasProduct;

    return res.json(responseDb);
  } else {
    return res.send(null);
  }
});

router.all("/*", function (req, res) {
  res.append("error", ["Invalid API URI"]);
  res.status(500);
  return res.send({ error: "Invalid API URI" });
});

module.exports = router;
