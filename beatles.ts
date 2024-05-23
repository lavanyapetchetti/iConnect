import {expect, type Locator, type Page} from '@playwright/test';

export class BeatlesPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToWiKiPage(name: string) {
        await this.page.goto(`https://en.wikipedia.org/wiki/${name}`);
        name = name.replace(/_/g, ' ');
        const pageTitle = await this.page.title();
        expect(pageTitle).toContain(`${name} - Wikipedia`);
        await expect(this.page.getByRole('heading', { name: `${name}`, exact: true }).locator('span')).toBeVisible();
    }

    async selectSingerByName(name: string) {
        await this.page.locator(`a:has-text('${name}')`).first().click();
        await expect(this.page.getByRole('heading', { name: `${name}`, exact: true }).locator('span')).toBeVisible();
    }
}