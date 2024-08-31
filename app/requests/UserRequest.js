const { check, validationResult } = require("express-validator");

const validateUserCreate = [
  check("name").notEmpty().withMessage("Name cannot be blank"),
  check("email").isEmail().withMessage("Email is not valid"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

const validateUserUpdate = [
  check("name").optional().isLength({ min: 3 }).withMessage("Name too short"),
  check("email").optional().isEmail().withMessage("Email is not valid"),
  check("password")
    .optional()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  validateUserCreate,
  validateUserUpdate,
  handleValidation,
};
