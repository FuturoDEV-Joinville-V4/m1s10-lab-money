import { RouterProvider } from "react-router"
import { TransactionProvider } from './contexts/TransactionContext'
import { AuthProvider } from "./contexts/AuthContext"
import { routes } from "./routes"


function App() {
  return (
    <AuthProvider>
      <TransactionProvider>
          <RouterProvider router={routes}/>
      </TransactionProvider>
    </AuthProvider>
  )
}

export default App
