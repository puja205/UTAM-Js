/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import Login from 'salesforce-pageobjects/helpers/pageObjects/login';
import { TestEnvironment } from './test-environment';

/**
 * Helper function used in crud tests to login in STMFA environment
 * @param testEnvironment
 * @param landingPagePartialUrl
 */
export async function login(testEnvironment: TestEnvironment, landingPagePartialUrl: string): Promise<void> {
    const { baseUrl, username, password } = testEnvironment;

    console.log(`Navigate to login URL: ${baseUrl}`);
    await browser.url(baseUrl);
    const loginPage = await utam.load(Login);
    await loginPage.login(username, password);
    const document = utam.getCurrentDocument();
    await document.waitFor(async () => {
        const docUrl = await document.getUrl();
        return docUrl.includes(landingPagePartialUrl);
    });
}