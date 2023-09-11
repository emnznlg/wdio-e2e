import { Then } from "@wdio/cucumber-framework";
import chai from "chai";

Then(/^Inventory page should list (.*)$/, async function (numberOfProducts) {
  if (!numberOfProducts) {
    throw Error(`Invalid number provided in feature file ${numberOfProducts}`);
  }
  let arr = await $$(`.inventory_item_name`);
  chai.expect(arr.length).to.equal(+numberOfProducts);
});

Then(/^Validate all products have a valid price$/, async function () {
  let eleArr = await $$(`.inventory_item_price`);
  let priceStrArr = [];
  for (let i = 0; i < eleArr.length; i++) {
    let priceStr = (await eleArr[i].getText()).replace("$", "");
    priceStrArr.push(priceStr);
  }
  console.log(`==> ${priceStrArr}`);

  let counter = 0;
  for (let i = 0; i < priceStrArr.length; i++) {
    let priceNum = +priceStrArr[i];
    if (priceNum > 0) counter++;
  }
  chai.expect(counter).to.be.equal(6);
});
