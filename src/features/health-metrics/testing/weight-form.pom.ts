import { Page, Locator } from "@playwright/test";

export class WeightFormPage {
  readonly page: Page;
  readonly weightInput: Locator;
  readonly dateInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.weightInput = page.locator("input[name='value']");
    this.dateInput = page.locator("input[name='date']");
    this.submitButton = page.locator("button[type='submit']");
  }

  async fillForm(weight: string, date: string) {
    await this.weightInput.fill(weight);
    await this.dateInput.fill(date);
  }

  async submit() {
    await this.submitButton.click();
  }
}