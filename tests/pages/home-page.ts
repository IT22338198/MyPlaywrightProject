import { type Locator, type Page, expect } from "@playwright/test";

export class HomePage {
    //variables
    readonly page:Page;
    //await page.getByRole('link', {name: 'Get Started'}).click();
    readonly getStartedButton: Locator;
    //await expect(page).toHaveTitle(/Playwright/);
    readonly title: RegExp;


    //constructor
    constructor (page: Page) {
        this.page = page;
        this.getStartedButton = page.getByRole('link', {name: 'Get Started'});
        this.title = /Playwright/;
    }

    //methods
    async GetStated(){
        await this.getStartedButton.click();
    }

    async assertPageTitle(){
        await expect(this.page).toHaveTitle(this.title);
    }

}

    
export default HomePage;