import { WizardProvider } from './context/WizardContext'
import Layout from './components/layout/Layout'
import Wizard from './components/wizard/Wizard'

function App() {
  return (
    <WizardProvider>
      <Layout>
        <Wizard />
      </Layout>
    </WizardProvider>
  )
}

export default App
