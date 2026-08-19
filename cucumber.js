module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
      'src/hooks/**/*.ts',
      'src/step-definitions/**/*.ts',
      'src/support/**/*.ts'
    ],
    paths: ['features/**/*.feature'],
    format: [
      'progress',
      'html:reports/cucumber-report.html'
    ],
    formatOptions: {
      snippetInterface: 'async-await'
    },
    publishQuiet: true,
    timeout: 30000
  }
};