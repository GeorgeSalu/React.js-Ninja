import { configure } from '@storybook/react'

// arquivo de configuração da nova versao da dependecia do
// storybook
const req = require.context('../src/components', true, /\.story\.js$/)

function loadStories () {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
