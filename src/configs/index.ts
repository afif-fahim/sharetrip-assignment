import dotenv from "dotenv";
import * as Joi from "joi";


dotenv.config();

interface IEnvVars {
    PORT: number;
}

const envVarsSchema: Joi.ObjectSchema<IEnvVars> = Joi.object()
    .keys({
        PORT: Joi.number().default(3000),
    })
    .unknown();

const { value: envVars, error } = envVarsSchema.validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const config = {
    port: envVars.PORT,
};

export default config;
