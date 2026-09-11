# Medixpro360-Rehab UI Foundation

Enterprise-grade React + TypeScript UI starter for a multi-tenant rehabilitation / wellness management platform.

## Included modules
- Dashboard / Home
- Accounts & Billing
- Inventory
- Client Records / Client 360
- Client Self-Service Portal
- Admission & Digital Onboarding
- Administration foundation: Roles & Security, Users, Locations, Modules, Master Lookups
- Shared notifications, profile, settings, audit placeholders

## Architecture
src/
- app/                Application shell, routing, providers
- core/               auth, access-control, api, config, types
- shared/             reusable components, layouts, hooks, utils
- modules/            feature modules, each self-contained
- assets/             static assets

Each feature owns its screens and can later own api/, hooks/, types/, components/, validators/, tests/.

## Run
npm install
npm run dev

## Notes
This is UI-first and uses mock data only. No clinical, billing, inventory, identity or authorization data is persisted in the browser.
Backend integration points are intentionally abstracted.
