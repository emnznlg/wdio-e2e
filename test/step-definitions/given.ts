import { Given } from "@wdio/cucumber-framework";

Given(/^Login to inventory web app$/, async function () {
  await browser.url("https://www.saucedemo.com/v1/");
  await browser.maximizeWindow();
  await $(`#user-name`).setValue("standard_user");
  await $(`#password`).setValue("secret_sauce");
  await $(`#login-button`).click();
  await browser.pause(10000);
});
