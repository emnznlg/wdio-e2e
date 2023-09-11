import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";
//import * as helpers from "../helper/helperFunctions.ts";

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

Given(/^A web page is opened$/, async () => {
  await browser.url("/inputs");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

When(/^Perform web interactions$/, async () => {
  let ele = await $(`[type="number"]`);
  let num = 12345;
  let strNum = num.toString();
  for (let i = 0; i < strNum.length; i++) {
    await browser.pause(1000);
    await ele.addValue(strNum.split("")[i]);
  }
});

Given(/^A web page -(.*)- is opened$/, async (webPage) => {
  await browser.url(`/${webPage}`);
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

When(/^Choose an element -(.*)- from dropdown$/, async (element) => {
  let dropdown = await $(`#dropdown`);
  await dropdown.selectByVisibleText(element);
});

When(/^Perform window handling actions$/, async function () {
  await $(`=Click Here`).click();

  //==> Kendim helper fonksiyon yazmaya calistim...
  // await helpers.switchToWindow("New Windows");
  // let title = await browser.getTitle();
  // console.log(title);

  //==> 5 dk sonra aslinda gerek olmadigini ogrendim :)
  await browser.switchWindow("New Window");
  let title = await browser.getTitle();
  console.log(title);
});

When(/^Perform alert handling actions$/, async function () {
  await $(`button=Click for JS Alert`).click();
  await browser.acceptAlert();
  await browser.pause(5000);
});
