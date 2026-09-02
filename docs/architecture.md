# SOATGA V1 — System Architecture & Development Blueprint

## Overview
SOATGA is a multi-tenant commercial SaaS platform designed for SMEs in Burkina Faso. It allows merchants to operate their business via natural language voice instructions, processed deterministically through strict business engines and transactional boundaries.

## Architecture Guidelines & Core Principles
1. **AI is never the Source of Truth**: The AI transcribes, extracts, and suggests. It never executes direct database mutations.
2. **Deterministic Financial Calculations**: All amounts ($10 \times 6500 = 65000$) are calculated by the domain engine (`@soatga/domain`).
3. **Traceability & Auditing**: No physical deletions of confirmed sales. Reversals produce inverse transactions and log to an append-only audit trail.
4. **Strict Tenant Isolation**: All resources belong to an `organization_id` (and `shop_id`). Enforced via Supabase Row Level Security (RLS).
5. **Atomic Transactions**: All operations (`sale`, `sale_items`, `payment`, `receivable`, `stock_movement`, `cash_transaction`, `reminder`, `audit_log`) execute in a single PostgreSQL transaction (`BEGIN ... COMMIT / ROLLBACK`).
6. **Controlled Offline-First**: PWA offline drafts with explicit syncing states (`LOCAL_PENDING`, `QUEUED`, `SYNCED`, `CONFLICT`).
7. **WhatsApp as an External Input Channel**: Decoupled interface sending voice notes into the SOATGA Voice Engine pipeline.
8. **Fiscal Adapter Ready**: Architecture prepared for regulatory invoice reporting.

## Package Architecture

```text
soatga/
├── apps/
│   ├── web/            # Next.js 14+ PWA Frontend (Tailwind, RSC, UI Components)
│   └── admin/          # Admin & Support Management Console
├── packages/
│   ├── shared/         # Constants, FCFA Formatter, Enums, Tenant Context
│   ├── domain/         # Deterministic Pricing, Sales, Stock & Transaction Event Builder
│   ├── validation/     # Zod Schemas for Voice Extractions & Confidence Engine
│   ├── permissions/    # RBAC Policies (Owner, Manager, Seller, Cashier)
│   ├── database/       # Supabase Client & Database Types
│   ├── ai/             # Entity Resolver & Fuzzy Trigram Matching Service
│   └── ui/             # Reusable UI Design System & Component Library
└── supabase/
    └── migrations/     # PostgreSQL Multi-tenant Schemas with RLS
```

## Voice-to-Database Pipeline

```text
AUDIO (.wav / .m4a / .ogg)
   ↓
TRANSCRIPTION (Whisper / Gemini AI)
   ↓
INTENT CLASSIFICATION (CREATE_SALE, RECORD_PAYMENT, CHECK_STOCK...)
   ↓
STRUCTURED EXTRACTION (Zod JSON Schema)
   ↓
ENTITY RESOLUTION (Trigram FTS matching 'Abdou' -> customer_id, 'Ciment' -> product_id)
   ↓
CONFIDENCE & RULES ENGINE (Check prices, stock, credit limits)
   ↓
TRANSACTION DRAFT (Status: WAITING_CONFIRMATION)
   ↓
USER CONFIRMATION (1-Click / Voice / PIN)
   ↓
TRANSACTION ENGINE (PostgreSQL Atomic Transaction Execution)
```
