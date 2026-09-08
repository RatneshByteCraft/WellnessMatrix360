# UI Architecture

## 1. Principles
1. Feature-first modular structure.
2. No cross-module database ownership in UI contracts.
3. Route definitions remain centralized; feature implementation remains local.
4. Reusable shared components contain no business logic.
5. Access control is permission based, never role-name based.
6. Tenant subscription decides which modules are available; RBAC decides what an authenticated user can do inside them.
7. Location context is explicit.
8. No sensitive patient data is persisted to localStorage in the production implementation.
9. Server state should later be implemented with a query/cache layer; transient form state stays feature-local.
10. Heavy screens should be lazy-loaded before production rollout.

## 2. Recommended Production Additions
- TanStack Query for server state
- React Hook Form + Zod for forms/validation
- Zustand only for small global UI state if needed
- React.lazy route-level code splitting
- Design tokens + Storybook
- MSW for UI integration mocks
- Vitest + React Testing Library
- Playwright for E2E
- Sentry / OpenTelemetry browser telemetry
- i18n framework when multilingual support is activated
- CSP, XSS hardening and secure cookie authentication

## 3. Feature Folder Pattern
modules/<feature>/
- pages/
- components/
- api/
- hooks/
- types/
- validators/
- tests/
- index.ts

## 4. Module Registration
A production version should introduce a module registry:
- module key
- route prefix
- navigation group
- required permission
- subscription module key
- icon
- lazy component

This allows additional modules such as Therapy, Assessments, Medication, Behavioral Tracking and Analytics to be plugged in without rewriting the shell.
