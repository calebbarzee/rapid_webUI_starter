import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

import style from "./test.component.css?inline";

@customElement("test-component")
export class TestComponent extends TailwindElement(style) {
  @property()
  name?: string = "World";

  render() {
    return html`
      <h3 class="text-lg">
        Hello, ${this.name}!
      </h3>
      <p class="text-gray-500">This test component utilizes Lit, Tailwind CSS, Vite, and TypeScript. </p>
    `;
  }
}
