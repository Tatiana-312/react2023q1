import { defineConfig } from "cypress";
import registerCodeCoverageTasks from '@cypress/code-coverage/task';


export default defineConfig({
  env: {
    codeCoverage: {
        exclude: "cypress/**/*.*",
    },
  },
  e2e: {
    // baseUrl: 'http://localhost:5173',
    // setupNodeEvents(on, config) {
    //   require('@cypress/code-coverage/task')(on, config)
    //   return config
    // },
    setupNodeEvents(on, config) {
      registerCodeCoverageTasks(on, config);
      return config;
    },

  },
  video: false,
});
