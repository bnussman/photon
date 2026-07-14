# `@banksnussman/photon`


A TypeScript client for the [photon](https://github.com/komoot/photon) REST API.

Thank you to @KiwiKilian and @danielgit0 for providing the `openapi.json` file.

## Install

```bash
bun add @banksnussman/photon
```

## Usage

```typescript
import { geocoding } from "@banksnussman/photon";

const { data, error } = await geocoding({
  query: {
    q: "North Carolina",
  },
});

console.log(data, error);
```
