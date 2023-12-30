import dotenv from "dotenv";
import * as Joi from "joi";


dotenv.config();

interface IEnvVars {
    PORT: number;
    MONGO_CONNECTION_STRING: string;
}

const envVarsSchema: Joi.ObjectSchema<IEnvVars> = Joi.object()
    .keys({
        PORT: Joi.number().default(3000),
        MONGO_CONNECTION_STRING: Joi.string().required().description("MongoDB connection string"),
    })
    .unknown();

const { value: envVars, error } = envVarsSchema.validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const config = {
    port: envVars.PORT,
    mongo: {
        connectionString: envVars.MONGO_CONNECTION_STRING,
    },
};

export default config;
