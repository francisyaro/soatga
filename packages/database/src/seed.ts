import fs from 'fs';
import path from 'path';
import { dbPool } from './client';

async function runSeed() {
  console.log('🚀 Démarrage de l\'initialisation de la base de données PostgreSQL SOATGA...');

  const migrationPath = path.resolve(process.cwd(), 'supabase/migrations/20260902000000_initial_schema.sql');
  const seedPath = path.resolve(process.cwd(), 'supabase/seed/seed.sql');

  try {
    const client = await dbPool.connect();
    console.log('✅ Connecté à PostgreSQL avec succès !');

    if (fs.existsSync(migrationPath)) {
      console.log('📜 Exécution de la migration PostgreSQL (initial_schema.sql)...');
      const migrationSql = fs.readFileSync(migrationPath, 'utf-8');
      await client.query(migrationSql);
      console.log('✅ Migration appliquée avec succès !');
    }

    if (fs.existsSync(seedPath)) {
      console.log('🌱 Exécution du peuplement de test (seed.sql)...');
      const seedSql = fs.readFileSync(seedPath, 'utf-8');
      await client.query(seedSql);
      console.log('✅ Données de test Burkinabè (boutiques, produits, clients) insérées !');
    }

    client.release();
    await dbPool.end();
    console.log('🎉 Base de données locale SOATGA 100% prête pour les tests !');
  } catch (err: any) {
    console.error('❌ Erreur lors du seed de la base de données :', err.message);
    process.exit(1);
  }
}

runSeed();
