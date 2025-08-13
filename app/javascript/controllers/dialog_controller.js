import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    connect() {
        this.element.showModal()
        this.element.addEventListener("close", () => { this.element.remove() })
    }
}