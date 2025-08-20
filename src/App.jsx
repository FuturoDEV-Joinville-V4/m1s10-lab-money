import { TransactionProvider } from './contexts/TransactionContext'

// import { Perfil } from "./pages/Perfil"
// import { LoginPage } from "./pages/Login"
import { DashboardPage } from "./pages/Dashboard"


function App() {
  
  return (
    <TransactionProvider>
      <DashboardPage />
    </TransactionProvider>
  )
}

export default App
