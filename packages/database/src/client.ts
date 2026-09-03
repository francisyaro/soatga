import { Pool } from 'pg';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const DEFAULT_DB_URL = 'postgresql://postgres:postgres@localhost:5432/soatga_db';

export const dbPool = new Pool({
  connectionString: process.env.DATABASE_URL || DEFAULT_DB_URL,
  max: 10,
  idleTimeoutMillis: 30000,
});

export async function query<T = any>(sql: string, params: any[] = []): Promise<T[]> {
  const client = await dbPool.connect();
  try {
    const res = await client.query(sql, params);
    return res.rows;
  } finally {
    client.release();
  }
}
