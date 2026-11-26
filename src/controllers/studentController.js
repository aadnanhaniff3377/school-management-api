
import pool from "../config/db.js";

// GET ALL STUDENTS
export const getStudents = async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM students ORDER BY student_id"
        );

        res.json({
            success: true,
            data: result.rows
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error fetching students"
        });
    }
};

// GET STUDENT BY ID
export const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            "SELECT * FROM students WHERE student_id = $1",
            [id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        res.json({
            success: true,
            data: result.rows[0]
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error fetching student"
        });
    }
};

// ADD STUDENT
export const addStudent = async (req, res) => {
    try {
        const { name, email, phone, gender, age,
                address, class: studentClass, section,
                fee, fee_status } = req.body;

        const result = await pool.query(
            `INSERT INTO students
            (name, email, phone, gender, age, address,
             class, section, fee, fee_status)
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
            RETURNING *`,
            [
                name, email || null, phone || null,
                gender || null, age || null, address || null,
                studentClass || null, section || null,
                fee ?? 0, fee_status || "Unpaid"
            ]
        );

        res.status(201).json({
            success: true,
            message: "Student added successfully",
            data: result.rows[0]
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error adding student"
        });
    }
};

// UPDATE STUDENT
export const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;

        const { name, email, phone, gender, age,
                address, class: studentClass, section,
                fee, fee_status } = req.body;

        const result = await pool.query(
            `UPDATE students SET
            name=$1, email=$2, phone=$3, gender=$4,
            age=$5, address=$6, class=$7, section=$8,
            fee=$9, fee_status=$10
            WHERE student_id=$11
            RETURNING *`,
            [
                name, email || null, phone || null,
                gender || null, age || null, address || null,
                studentClass || null, section || null,
                fee ?? 0, fee_status || "Unpaid", id
            ]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        res.json({
            success: true,
            message: "Student updated successfully",
            data: result.rows[0]
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error updating student"
        });
    }
};

// DELETE STUDENT
export const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            "DELETE FROM students WHERE student_id=$1 RETURNING *",
            [id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        res.json({
            success: true,
            message: "Student deleted successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error deleting student"
        });
    }
};
