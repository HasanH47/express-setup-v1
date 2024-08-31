const express = require("express");
const { register, login } = require("../app/controllers/AuthController");
const {
  validateRegister,
  validateLogin,
  handleValidation,
} = require("../app/requests/AuthRequest");
const router = express.Router();

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *        description: Bad Request
 *       422:
 *         description: Unprocessable Entity
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 */
router.post("/register", validateRegister, handleValidation, register);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *        description: Bad Request
 *       422:
 *         description: Unprocessable Entity
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 */
router.post("/login", validateLogin, handleValidation, login);

module.exports = router;
