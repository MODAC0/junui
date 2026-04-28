# junui

> React/Next.js component library, real-estate web/app, and a daily dev blog — built as a single 1-person portfolio monorepo.

**Status:** Phase 0 (bootstrap). See [`PORTFOLIO_PLAN.md`](../PORTFOLIO_PLAN.md) in the parent hub for the master plan.

## Workspace

```
junui/
├── packages/
│   ├── ui/                   # @junui/ui          — component library (Phase 1)
│   ├── tokens/               # @junui/tokens      — design tokens
│   ├── utils/                # @junui/utils       — shared utilities
│   ├── api-real-estate/      # @junui/api-real-estate (private, Phase 3)
│   └── native/               # @junui/native      — RN component subset (Phase 4)
└── apps/
    ├── docs/                 # Storybook + docs site (Phase 1)
    ├── web/                  # Real-estate web service (Phase 2~3)
    └── mobile/               # iOS/Android RN app (Phase 4)
```

요람일지 (https://yoramilji.kr/) 는 별도 운영 — `study-yoram-ilji` 에 그대로. 이 모노레포로 흡수하지 않는다.

## Requirements

- Node `>=20` (see `.nvmrc`)
- pnpm `>=10`

## Commands

```bash
pnpm install          # install all workspaces
pnpm dev              # turbo run dev across workspaces
pnpm build            # build all packages/apps
pnpm lint             # eslint
pnpm typecheck        # tsc --noEmit
pnpm test             # vitest
pnpm format           # prettier --write
pnpm changeset        # add a changeset for a release
```

## Publishing

Public packages (`@junui/ui`, `@junui/tokens`, `@junui/utils`) ship via Changesets + GitHub Actions on every merge to `main` that contains a `.changeset/*.md` file. The `NPM_TOKEN` secret must be set on the repo.

## License

MIT © modac
