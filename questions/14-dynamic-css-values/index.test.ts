import { describe, it, expect } from "vitest"

import AppRaw from "./App.vue?raw"

describe("dynamic-css-value", () => {
  it("render to body", () => {
    expect(AppRaw).toContain("color: v-bind(theme)")
  })
})
