import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './stores/rootReducer.ts'
import { Provider } from 'react-redux'

const queryClient = new QueryClient()
const config = configureStore({ 
  reducer: rootReducer 
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Router>

          <Provider store={config}>
          <App />
          </Provider>

        </Router>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
