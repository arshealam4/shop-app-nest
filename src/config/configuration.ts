import * as dotenv from 'dotenv';
dotenv.config();
const env = process.env;

export default (): any => ({
  PORT: parseInt(env.PORT, 10) || 3500,
  SERVER: env.SERVER || `http://localhost:3500`,
  APP_NAME: env.APP_NAME || `SHOP-NEST-API`,
  DB: {
    MONGODB_URL: env.MONGODDB_CONNECTION_STRING || 'mongodb://localhost/shop',
  },
});
