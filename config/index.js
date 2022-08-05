import convict from 'convict';
import dotenv from 'dotenv';
dotenv.config();

const config = convict({
    ENV: {
        format: ['production', 'development', 'test'],
        default: 'development',
        arg: 'nodeEnv',
        env: 'NODE_ENV',
    },
    PORT: {
        format: 'int',
        default: 8000,
        arg: 'port',
        env: 'PORT',
    },
    DB: {
        host: {
            format: String,
            default: 'localhost',
            env: 'DB_HOST',
        },
        name: {
            format: String,
            default: 'messanger_db',
            env: 'DB_NAME',
        },
        user: {
            format: String,
            default: 'admin',
            env: 'DB_USERNAME',
        },
        password: {
            format: String,
            default: 'admin',
            env: 'DB_PASSWORD',
        },
    },
});

// TODO: Make load env file
// try {
//     config.loadFile(`.env.${config.get('ENV')}`);
// } catch (error) {
//     config.loadFile('.env');
// }

config.validate();

export default config.getProperties();
