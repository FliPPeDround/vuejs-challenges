import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"

import App from "./App.vue"

interface AppType {
  count: number
  textContent: number
  increment: () => Promise<void>
}

describe("next-dom-update", () => {
  it("should work'", async() => {
    const wrapper = mount(App)

    expect(wrapper.text()).toMatchInlineSnapshot('"0"')
    const button = wrapper.find("button")
    await button.trigger("click")

    expect(wrapper.text()).toMatchInlineSnapshot('"1"')
    expect((wrapper.vm as unknown as AppType).textContent).toMatchInlineSnapshot('"1"')
  })
})
