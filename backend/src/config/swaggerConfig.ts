// swaggerConfig.js
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0', // Версия OpenAPI
        info: {
            title: 'My API', // Название API
            version: '1.0.0', // Версия API
            description: 'API documentation with Swagger',
        },
        servers: [
            {
                url: 'http://localhost:8080', // Базовый URL вашего API
            },
        ],
    },
    apis: ['./routes/*.ts'], // Пути к файлам с аннотациями Swagger
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
