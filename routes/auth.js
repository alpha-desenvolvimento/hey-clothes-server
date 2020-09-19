var { Router, request, response } = require("express"),
  jwt = require("../jwt");
const { Provider } = require("../database/models").models;
const router = Router();

router.use(function (req, res, next) {
  res.append("service", ["auth"]);
  next();
});

router.post("/user", async (req, res) => {
  res.append("service-action", ["user"]);

  const user = req.body.user || req.headers["x-access-user"];
  const pwd = req.body.pwd || req.headers["x-access-pwd"];

  const jwtResponse = await jwt.authUser({ user, pwd });

  if (jwtResponse.error) {
    res.append("error", [jwtResponse.error]);
    return res.send(null);
  } else {
    const { auth, token, name } = jwtResponse;

    return res.json({ auth, token, name });
  }
});

router.post("/token", async (req, res) => {
  res.append("service-action", ["token"]);

  const jwtResponse = await jwt.authToken(
    req.headers["x-access-token"] || req.body.token
  );

  if (jwtResponse.error) {
    res.append("error", [jwtResponse.error]);
    return res.send(null);
  } else {
    const { auth, token, name } = jwtResponse;

    return res.json({ auth, token, name });
  }
});

module.exports = router;