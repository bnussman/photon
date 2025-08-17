# `@banksnussman/photon`


A TypeScript client for the [photon](https://github.com/komoot/photon) REST API.

Thank you to @KiwiKilian and @danielgit0 for providing the `openapi.json` file.

## Install

```bash
bun add @banksnussman/photon
```

## Usage

```typescript
import { photon } from '@banksnussman/photon';

const { data, error } = await photon.GET("/api", {
  params: {
    query: {
      q: "Booneshine",
    },
  },
});

console.log(data, error);
```
