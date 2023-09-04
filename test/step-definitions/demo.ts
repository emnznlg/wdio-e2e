import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^User opens the Google page$/, async function () {
  await browser.url("https://www.google.com");
});

When(/^User searches with (.*)$/, async function (searchItem) {
  await $(`[name="q"]`).setValue(searchItem);
  await browser.keys("Enter");
});

When(/^User clicks on the first search result$/, async function () {
  await $(`<h3>`).click();
});

Then(
  /^User verifies that the URL matches with the (.*)$/,
  async function (expectedURL) {
    chai.expect(await browser.getUrl()).to.equal(expectedURL);
  }
);
