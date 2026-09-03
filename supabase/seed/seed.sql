-- SOATGA V1 - Local Seed Data (Burkina Faso Real Test Dataset)

-- 1. Insert Initial Organization & Shops
INSERT INTO public.organizations (id, name, sector, phone, currency)
VALUES 
  ('11111111-1111-1111-1111-111111111111', 'Alimentation & Matériaux Ouaga', 'Quincaillerie & Épicerie', '+226 70 12 34 56', 'FCFA')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.shops (id, organization_id, name, city, district, address)
VALUES 
  ('22222222-2222-2222-2222-222222222222', '11111111-1111-1111-1111-111111111111', 'Boutique Gounghin', 'Ouagadougou', 'Gounghin', 'Avenue Babanguida'),
  ('33333333-3333-3333-3333-333333333333', '11111111-1111-1111-1111-111111111111', 'Boutique 1200 Logements', 'Ouagadougou', '1200 Logements', 'En face de l''école Yennenga')
ON CONFLICT (id) DO NOTHING;

-- 2. Insert User Profiles
INSERT INTO public.profiles (id, email, phone, full_name)
VALUES 
  ('44444444-4444-4444-4444-444444444444', 'mariam@soatga.bf', '+226 65 89 74 12', 'Mariam Kaboré'),
  ('55555555-5555-5555-5555-555555555555', 'aminata@soatga.bf', '+226 70 99 88 77', 'Aminata Diarra')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.organization_members (organization_id, user_id, shop_id, role)
VALUES 
  ('11111111-1111-1111-1111-111111111111', '44444444-4444-4444-4444-444444444444', '22222222-2222-2222-2222-222222222222', 'OWNER'),
  ('11111111-1111-1111-1111-111111111111', '55555555-5555-5555-5555-555555555555', '22222222-2222-2222-2222-222222222222', 'MANAGER')
ON CONFLICT DO NOTHING;

-- 3. Insert Categories & Products
INSERT INTO public.categories (id, organization_id, name)
VALUES 
  ('cat_1', '11111111-1111-1111-1111-111111111111', 'Matériaux de construction'),
  ('cat_2', '11111111-1111-1111-1111-111111111111', 'Céréales'),
  ('cat_3', '11111111-1111-1111-1111-111111111111', 'Épicerie'),
  ('cat_4', '11111111-1111-1111-1111-111111111111', 'Hygiène'),
  ('cat_5', '11111111-1111-1111-1111-111111111111', 'Boissons')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.products (id, organization_id, category_id, reference, name, unit_name, current_price, cost_price, min_stock_alert)
VALUES 
  ('prd_1', '11111111-1111-1111-1111-111111111111', 'cat_1', 'PRD-0010', 'Ciment CIMFASO 50 kg', 'sac', 6500.00, 5800.00, 10),
  ('prd_2', '11111111-1111-1111-1111-111111111111', 'cat_2', 'PRD-0001', 'Sac de riz 25 kg', 'sac', 16500.00, 14500.00, 10),
  ('prd_3', '11111111-1111-1111-1111-111111111111', 'cat_3', 'PRD-0002', 'Huile 5 L', 'bidon', 6500.00, 5500.00, 12),
  ('prd_4', '11111111-1111-1111-1111-111111111111', 'cat_4', 'PRD-0004', 'Savon Kabakourou', 'pièce', 350.00, 250.00, 10),
  ('prd_5', '11111111-1111-1111-1111-111111111111', 'cat_3', 'PRD-0003', 'Sucre 1 kg', 'paquet', 800.00, 680.00, 20),
  ('prd_6', '11111111-1111-1111-1111-111111111111', 'cat_5', 'PRD-0005', 'Bidon d''eau 10 L', 'bidon', 1200.00, 950.00, 15)
ON CONFLICT (id) DO NOTHING;

-- Product Voice Aliases
INSERT INTO public.product_aliases (organization_id, product_id, alias)
VALUES 
  ('11111111-1111-1111-1111-111111111111', 'prd_1', 'ciment'),
  ('11111111-1111-1111-1111-111111111111', 'prd_1', 'sac de ciment'),
  ('11111111-1111-1111-1111-111111111111', 'prd_1', 'cimfaso'),
  ('11111111-1111-1111-1111-111111111111', 'prd_2', 'riz'),
  ('11111111-1111-1111-1111-111111111111', 'prd_2', 'sac de riz'),
  ('11111111-1111-1111-1111-111111111111', 'prd_3', 'huile'),
  ('11111111-1111-1111-1111-111111111111', 'prd_3', 'bidon d''huile'),
  ('11111111-1111-1111-1111-111111111111', 'prd_4', 'savon'),
  ('11111111-1111-1111-1111-111111111111', 'prd_4', 'kabakourou')
ON CONFLICT DO NOTHING;

-- 4. Insert Customers & Aliases
INSERT INTO public.customers (id, organization_id, full_name, phone, credit_limit)
VALUES 
  ('cust_1', '11111111-1111-1111-1111-111111111111', 'Abdou Ouédraogo', '+226 70 11 22 33', 100000.00),
  ('cust_2', '11111111-1111-1111-1111-111111111111', 'Mariam Kaboré', '+226 65 89 74 12', 200000.00),
  ('cust_3', '11111111-1111-1111-1111-111111111111', 'Issa Traoré', '+226 76 55 21 09', 150000.00),
  ('cust_4', '11111111-1111-1111-1111-111111111111', 'Boutique Sanogo', '+226 70 12 34 56', 500000.00),
  ('cust_5', '11111111-1111-1111-1111-111111111111', 'Alimentation Wend-Kuuni', '+226 71 44 88 03', 500000.00)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.customer_aliases (organization_id, customer_id, alias)
VALUES 
  ('11111111-1111-1111-1111-111111111111', 'cust_1', 'abdou'),
  ('11111111-1111-1111-1111-111111111111', 'cust_1', 'ouedraogo abdou'),
  ('11111111-1111-1111-1111-111111111111', 'cust_2', 'mariam'),
  ('11111111-1111-1111-1111-111111111111', 'cust_3', 'issa'),
  ('11111111-1111-1111-1111-111111111111', 'cust_4', 'sanogo')
ON CONFLICT DO NOTHING;

-- 5. Inventory Balances
INSERT INTO public.inventory_balances (shop_id, product_id, current_quantity)
VALUES 
  ('22222222-2222-2222-2222-222222222222', 'prd_1', 32),
  ('22222222-2222-2222-2222-222222222222', 'prd_2', 42),
  ('22222222-2222-2222-2222-222222222222', 'prd_3', 8),
  ('22222222-2222-2222-2222-222222222222', 'prd_4', 5),
  ('22222222-2222-2222-2222-222222222222', 'prd_5', 120),
  ('22222222-2222-2222-2222-222222222222', 'prd_6', 64)
ON CONFLICT (shop_id, product_id) DO UPDATE SET current_quantity = EXCLUDED.current_quantity;
