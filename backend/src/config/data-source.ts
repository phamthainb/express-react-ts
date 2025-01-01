import "reflect-metadata";
import { DataSource } from "typeorm";
import { Wallet } from "../models/Wallet";

import dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432", 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: true,
  entities: [Wallet],
});

export async function getDatabaseVersion() {
  try {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();

    const result = await queryRunner.query("SELECT version();");
    console.log("Database Version:", result[0].version);

    await queryRunner.release();
  } catch (error) {
    console.error("Error fetching database version:", error);
  }
}
