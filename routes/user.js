const express = require("express");
const {
  index,
  create,
  show,
  update,
  destroy,
} = require("../app/controllers/UserController");
const authMiddleware = require("../app/middleware/authMiddleware");
const {
  validateUserCreate,
  validateUserUpdate,
  handleValidation,
} = require("../app/requests/UserRequest");
const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
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
router.get("/users", authMiddleware, index);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
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
router.post(
  "/users",
  authMiddleware,
  validateUserCreate,
  handleValidation,
  create
);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
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
router.get("/users/:id", authMiddleware, show);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update a user
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
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
router.put(
  "/users/:id",
  authMiddleware,
  validateUserUpdate,
  handleValidation,
  update
);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
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
router.delete("/users/:id", authMiddleware, destroy);

module.exports = router;
