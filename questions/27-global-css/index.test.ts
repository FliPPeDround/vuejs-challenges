import { describe, it, expect } from "vitest"

import AppRaw from "./App.vue?raw"

describe("global-css", () => {
  it("render to body", () => {
    expect(AppRaw).toContain(":global(body)")
  })
})
