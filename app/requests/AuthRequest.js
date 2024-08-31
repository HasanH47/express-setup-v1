const { check, validationResult } = require("express-validator");

const validateRegister = [
  check("name").notEmpty().withMessage("Name cannot be blank"),
  check("email").isEmail().withMessage("Email is not valid"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

const validateLogin = [
  check("email").isEmail().withMessage("Email is not valid"),
  check("password").notEmpty().withMessage("Password cannot be blank"),
];

const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  validateRegister,
  validateLogin,
  handleValidation,
};
