import initWasm from "@vlcn.io/crsqlite-wasm";
import wasmUrl from "@vlcn.io/crsqlite-wasm/crsqlite.wasm?url";
import { it } from "vitest";

const sqlite = await initWasm(() => wasmUrl);

it("should return the database", async () => {
    await sqlite.open(":memory:");
});
