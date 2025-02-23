import mysql, { Connection } from "mysql2/promise";

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "rootpassword",
  database: process.env.DB_NAME || "etic",
};

export const getConnection = async (): Promise<Connection> => {
  const connection = await mysql.createConnection(dbConfig);
  await connection.query("SET NAMES utf8mb4;");
  return connection;
};
