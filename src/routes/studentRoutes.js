
import express from "express";

import {
    getStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent
} from "../controllers/studentController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Student management APIs
 */

/**
 * @swagger
 * /api/students:
 *   get:
 *     summary: Get all students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: Students retrieved successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               data:
 *                 - student_id: 1
 *                   name: Ali Khan
 *                   email: ali@gmail.com
 *                   phone: "03001234567"
 *                   gender: Male
 *                   age: 20
 *                   address: Lahore
 *                   class: BSCS
 *                   section: A
 *                   fee: "5000.00"
 *                   fee_status: Unpaid
 *                   admission_date: "2026-11-26"
 *       500:
 *         description: Internal server error
 */
router.get("/", getStudents);

/**
 * @swagger
 * /api/students/{id}:
 *   get:
 *     summary: Get student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Student retrieved successfully
 *       404:
 *         description: Student not found
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Student not found
 *       500:
 *         description: Internal server error
 */
router.get("/:id", getStudentById);

/**
 * @swagger
 * /api/students:
 *   post:
 *     summary: Add a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentInput'
 *           example:
 *             name: Ali Khan
 *             email: ali@gmail.com
 *             phone: "03001234567"
 *             gender: Male
 *             age: 20
 *             address: Lahore
 *             class: BSCS
 *             section: A
 *             fee: 5000
 *             fee_status: Unpaid
 *     responses:
 *       201:
 *         description: Student created successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Student added successfully
 *               data:
 *                 student_id: 1
 *                 name: Ali Khan
 *                 email: ali@gmail.com
 *       400:
 *         description: Invalid input or missing required field
 *       409:
 *         description: Email already exists
 *       500:
 *         description: Internal server error
 */
router.post("/", addStudent);

/**
 * @swagger
 * /api/students/{id}:
 *   put:
 *     summary: Update student details
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentInput'
 *           example:
 *             name: Ali Ahmed
 *             email: ali@gmail.com
 *             phone: "03001234567"
 *             gender: Male
 *             age: 21
 *             address: Sahiwal
 *             class: BSCS
 *             section: B
 *             fee: 6000
 *             fee_status: Paid
 *     responses:
 *       200:
 *         description: Student updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Student not found
 *       409:
 *         description: Email already exists
 *       500:
 *         description: Internal server error
 */
router.put("/:id", updateStudent);

/**
 * @swagger
 * /api/students/{id}:
 *   delete:
 *     summary: Delete student
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Student deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Student deleted successfully
 *       404:
 *         description: Student not found
 *       500:
 *         description: Internal server error
 */
router.delete("/:id", deleteStudent);

export default router;
