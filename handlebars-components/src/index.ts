import './app.css'

import { Block, registerComponent, renderPage } from './core'
import OnboardingPage from './pages/onboarding'

const components = require('./components/**/index.ts') as {
  [key: string]: { default: typeof Block }
}

Object.values(components).forEach(component => {
  registerComponent(component.default)
})

class MyComponent extends Block {
  render() {
    return `
      <div>hello world</div>
    `
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderPage(OnboardingPage)
})
