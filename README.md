# Vite Issue Repro

```sh
yarn vitest run
```

```sh
➜ yarn vitest run
yarn run v1.22.19
$ /path/redacted/vite-issue-repro/node_modules/.bin/vitest run

 RUN  v0.34.6 /path/redacted/vite-issue-repro

 ❯ src/db.test.ts  (0 test)

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Suites 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  src/db.test.ts [ src/db.test.ts ]
TypeError: Failed to parse URL from /node_modules/@vlcn.io/crsqlite-wasm/dist/crsqlite.wasm
Caused by: TypeError: Invalid URL
 ❯ Fa node_modules/@vlcn.io/crsqlite-wasm/src/crsqlite.mjs:13:278
 ❯ node_modules/@vlcn.io/crsqlite-wasm/src/crsqlite.mjs:91:435
 ❯ node_modules/@vlcn.io/crsqlite-wasm/src/crsqlite.mjs:91:488
 ❯ Proxy.initWasm node_modules/@vlcn.io/crsqlite-wasm/src/index.ts:46:28

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
Serialized Error: { input: '/node_modules/@vlcn.io/crsqlite-wasm/dist/crsqlite.wasm', code: 'ERR_INVALID_URL' }
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯

 Test Files  1 failed (1)
      Tests  no tests
   Start at  19:58:07
   Duration  284ms (transform 26ms, setup 0ms, collect 0ms, tests 0ms, environment 0ms, prepare 48ms)

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
