import dotenv from "dotenv";
dotenv.config();

interface Config {
  dbHost: string;
  dbPort: number;
  dbUsername: string;
  dbPassword: string;
  dbName: string;
  APP_PORT: number;
}

export const getConfig = (): Config => {
  const {
    DB_HOST,
    DB_PORT,
    DB_USERNAME,
    DB_PASSWORD,
    DB_NAME,
    CHAIN,
    APP_PORT,
  } = process.env;

  if (!DB_HOST || !DB_PORT || !DB_USERNAME || !DB_PASSWORD || !DB_NAME) {
    throw new Error("Missing required database environment variables.");
  }

  if (!CHAIN || !["devnet", "mainnet-beta"].includes(CHAIN.trim())) {
    throw new Error('CHAIN must be one of "devnet", "mainnet-beta".');
  }

  return {
    dbHost: DB_HOST,
    dbPort: parseInt(DB_PORT, 10),
    dbUsername: DB_USERNAME,
    dbPassword: DB_PASSWORD,
    dbName: DB_NAME,
    APP_PORT: APP_PORT ? +APP_PORT : 3005,
  };
};
