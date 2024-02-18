# THE ONE

This is my submission for VOIDS' `THE ONE`.

Please find notes taken along the journey in [notes section](#notes).

# requirements

- **tested on** `macOS 14.2.1 (M1)`
- **using** `node v20.11.0`
- **with** [`yarn`](https://yarnpkg.com)

# how to run

install dependencies

```bash
yarn
```

add environments/secrets in [`backend/src/environments/environment.ts`](backend/src/environments/environment.ts)

run backend in development mode

```bash
yarn nx run backend:serve
```

run froontend in development mode

```bash
yarn nx run frontend:dev
```

---

# Notes

This section summarizes my thoughts along the requirments engineering process

## Stores:

- Hamburg
- Munich

## Sunglass

THE ONE
plan supply quantities per location

Weather _Suddenly changes and goes bad_,
--> Assumption: (bad == !notSunny) since sunglasses not needed otherwise

## User Stories rephrased

1. procurement: list forecastedSales with location

- input: date

2. procurement: join forecastedSales with weather
   --> Note: with 3. in mind, its unclear if this join should be a listing, or just shown on the individual location page
   Assumption: Just show on location page

3. procurement: individual views per locations

4. procurement:

   - CRUD for inventory
     --> Note: no table for this
     Decission: For now lets keep it in memory
   - alert with timeframes when running out (inventory + incomingInventory )
     --> Note: not specified when to trigger the alert; alerting when we are out of stock would be too late I guess.
     Assumption: Alerting for upcomming week

5. staffing:
   - alert when forecastedSales<1000 for 3 days
     --> Note: less than 1000 within these 3 days or less than 1000 on every of these 3 days?
     Assumption: On every of these 3 days
     --> Note: not specified when to trigger the alert;
     Assumption: alerting for upcomming day

---

# Deliverables

- [ ] README file with run explanations
- [ ] share github repository
- [ ] demo video/loom (7 min)

---

# Plan:

- Manage repository with NX
- frontend
  - NextJS - general front-end framework with backend-rendering
  - Tailwind + DaisyUI - layouting/styling
  - Redux - local state management
  - SocketIO - realtime communication
- backend
  - NestJS - general API framework
  - TypeORM - DB tooling
  - ZOD - convenient runtime typing
  - RxJS - reactivity
  - Controller for forecasts
    - consuming PostgressDB with
      - forecastedSales
      - incomingInventory
      - (what about inventory??)
  - Controller for weather
    - consuming weather API
  - Gateway for alerts

---

# Missing Steps

Well, time flies, and the following steps are not yet implemented in time:

- fix weather data is not loaded properly
- add current inventory CRUD
- add websockets to "broadcast" alerts

---

# Nice to haves but out of scope for now

- unit tests
- e2e tests
- cicd
- secrets management!
- add and use environment configs
- dark/light mode
- user and service authentication/authorization
- switch to realtime
- separate backend
- make timeframe selectable
- pagination
- sort by
- mature error handling
- mature structured logging
- abstraction of layers for internal/external/private/public types
- for typesafety/schema shared library, replace by some versioned openapi generation
- handle CORS properly
- abstract to containerized setup
