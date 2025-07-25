const browserName="chrome"

function getBrowserName() {
    if (browserName === "chrome") {
      let browserName = "Chrome 1";
    console.log("Inside if block: " + browserName);
  }
  if (browserName === "chrome") {
    let browserName = "Chrome 2";
    console.log("Outside if block: " + browserName);
  }
}
  getBrowserName();