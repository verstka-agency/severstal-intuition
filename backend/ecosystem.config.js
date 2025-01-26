module.exports = {
    apps: [
      {
        name: 'my-express-app',
        script: './src/app.ts',
        interpreter: 'ts-node', // Если вы используете ts-node для запуска TypeScript
        env: {
          NODE_ENV: 'development',
          PG_USER: process.env.PG_USER,
          PG_HOST: process.env.PG_HOST,
          PG_DATABASE: process.env.PG_DATABASE,
          PG_PASSWORD: process.env.PG_PASSWORD,
          PG_PORT: process.env.PG_PORT,
          PORT: process.env.PORT,
          JWT_SECRET: process.env.JWT_SECRET,
          JWT_EXPIRES: process.env.JWT_EXPIRES,
          BASE_URL: process.env.BASE_URL,
        },
        env_production: {
          NODE_ENV: 'production',
          PG_USER: process.env.PG_USER,
          PG_HOST: process.env.PG_HOST,
          PG_DATABASE: process.env.PG_DATABASE,
          PG_PASSWORD: process.env.PG_PASSWORD,
          PG_PORT: process.env.PG_PORT,
          PORT: process.env.PORT,
          JWT_SECRET: process.env.JWT_SECRET,
          JWT_EXPIRES: process.env.JWT_EXPIRES,
          BASE_URL: process.env.BASE_URL,
        },
      },
    ],
  };