import dotenv from "dotenv";
import Joi from "joi";


dotenv.config();

interface IEnvVars {
    PORT: number;
    MONGO_CONNECTION_STRING: string;
    POST_API_URL: string;
}

// Define a Joi schema for environment variable validation
const envVarsSchema: Joi.ObjectSchema<IEnvVars> = Joi.object()
    .keys({
        PORT: Joi.number().default(3000),
        MONGO_CONNECTION_STRING: Joi.string().required().description("MongoDB connection string"),
        POST_API_URL: Joi.string().required().description("URL of external post API"),
    })
    .unknown();

const { value: envVars, error } = envVarsSchema.validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

// Create a configuration object based on validated environment variables
const config = {
    port: envVars.PORT,
    mongo: {
        connectionString: envVars.MONGO_CONNECTION_STRING,
    },
    postAPI: {
        url: envVars.POST_API_URL,
    },
};

export default config;
