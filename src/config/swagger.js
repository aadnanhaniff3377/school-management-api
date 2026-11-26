
import swaggerJsdoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",

        info: {
            title: "School Management API",
            version: "1.0.0",
            description: "Complete API documentation for School Management System"
        },

        servers: [
            {
                url: "/",
                description: "Current server"
            }
        ],

        components: {
            schemas: {
                Student: {
                    type: "object",
                    properties: {
                        student_id: { type: "integer", example: 1 },
                        name: { type: "string", example: "Ali Khan" },
                        email: { type: "string", example: "ali@gmail.com" },
                        phone: { type: "string", example: "03001234567" },
                        gender: { type: "string", example: "Male" },
                        age: { type: "integer", example: 20 },
                        address: { type: "string", example: "Lahore" },
                        class: { type: "string", example: "BSCS" },
                        section: { type: "string", example: "A" },
                        fee: { type: "number", example: 5000 },
                        fee_status: { type: "string", example: "Unpaid" },
                        admission_date: {
                            type: "string",
                            format: "date",
                            example: "2026-11-26"
                        },
                        created_at: {
                            type: "string",
                            format: "date-time"
                        }
                    }
                },

                StudentInput: {
                    type: "object",
                    required: ["name", "email"],
                    properties: {
                        name: { type: "string", example: "Ali Khan" },
                        email: { type: "string", example: "ali@gmail.com" },
                        phone: { type: "string", example: "03001234567" },
                        gender: { type: "string", example: "Male" },
                        age: { type: "integer", example: 20 },
                        address: { type: "string", example: "Lahore" },
                        class: { type: "string", example: "BSCS" },
                        section: { type: "string", example: "A" },
                        fee: { type: "number", example: 5000 },
                        fee_status: { type: "string", example: "Unpaid" },
                        admission_date: {
                            type: "string",
                            format: "date"
                        }
                    }
                }
            }
        }
    },

    apis: ["./src/routes/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
