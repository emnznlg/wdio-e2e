export async function switchToWindow(myTitle: string) {
  let windowsArr = await browser.getWindowHandles();

  for (let i = 0; i < windowsArr.length; i++) {
    let title = await browser.getTitle();
    if (title === myTitle) break;
    await browser.switchToWindow(windowsArr[i]);
  }
}
