import React, { useState } from 'react'
import { WizardProvider } from './context/WizardContext'
import Layout from './components/layout/Layout'
import Wizard from './components/wizard/Wizard'
import LandingPage from './components/layout/LandingPage'

function AppContent() {
  const [hasStarted, setHasStarted] = useState(false);

  if (!hasStarted) {
    return <LandingPage onStart={() => setHasStarted(true)} />;
  }

  return (
    <Layout>
      <Wizard />
    </Layout>
  );
}

function App() {
  return (
    <WizardProvider>
      <AppContent />
    </WizardProvider>
  )
}

export default App
