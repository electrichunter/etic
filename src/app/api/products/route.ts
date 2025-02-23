import { NextResponse } from "next/server";
import { getConnection } from "@/lib/dbConfig";
import { RowDataPacket } from "mysql2";

// Ürün tipi
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
};

export async function GET() {
  let connection;
  try {
    connection = await getConnection();
    
    // En büyük id'ye sahip 4 farklı ürünü çek
    const [rows] = await connection.execute<Product[] & RowDataPacket[]>(
      "SELECT DISTINCT id, name, description, price, image_url FROM products ORDER BY id DESC LIMIT 4;"
    );
    
    return NextResponse.json(rows);
  } catch (error: unknown) {
    console.error("Veri çekilirken hata oluştu:", (error as Error).message);
    return NextResponse.json(
      {
        error: "Veri çekilemedi",
        reason: (error as Error).message,
      },
      { status: 500 }
    );
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}
