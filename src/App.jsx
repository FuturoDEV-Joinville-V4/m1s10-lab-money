import { RouterProvider } from "react-router"
import { TransactionProvider } from './contexts/TransactionContext'

import { routes } from "./routes"


function App() {
  return (
      <TransactionProvider>
          <RouterProvider router={routes}/>
      </TransactionProvider>
  )
}

export default App
