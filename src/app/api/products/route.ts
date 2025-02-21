import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "rootpassword",
  database: process.env.DB_NAME || "etic",
 
};

export async function GET() {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);
    await connection.query("SET NAMES utf8mb4;");
    
    // En büyük id'ye sahip 4 farklı ürünü çek
    const [rows] = await connection.execute(
      "SELECT DISTINCT id, name, description, price, image_url FROM products ORDER BY id DESC LIMIT 4;"
    );
    
    return NextResponse.json(rows);
  } catch (error: any) {
    console.error("Veri çekilirken hata oluştu:", error.message);
    return NextResponse.json(
      {
        error: "Veri çekilemedi",
        reason: error.message
      },
      { status: 500 }
    );
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}
