import { setHeadlessWhen, setCommonPlugins } from "@codeceptjs/configure";
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: "./tests/**/*_test.*s",
  output: "./output",
  helpers: {
    WebDriver: {
      url: "https://www.magentasport.de/",
      host: "127.0.0.1",
      port: 4444,
      browser: "chrome",
    },
  },
  mocha: {
    reporterOptions: {
      mochaFile: "output/result.xml",
      reportDir: "output",
    },
  },
  include: {
    I: "./steps_file",
  },
  plugins: {
    wdio: {
      enabled: true,
      services: ["selenium-standalone"],
    },
  },
  name: "TemplateCodeceptJS",
  fullPromiseBased: false,
};
