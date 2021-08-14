const { verify } = require("jsonwebtoken");

const validatetoken = (req, res, next) => {
  const accessToken = req.header("accessToken");

  if (!accessToken) return res.json({ error: "user is not logged in" });

  try {
    const validToken = verify(accessToken, process.env.ACCESS_TOKEN);
    req.user = validToken;
    if (validToken) {
      return next();
    }
  } catch (err) {
    return res.json({ error: err });
  }
};

module.exports = { validatetoken };
