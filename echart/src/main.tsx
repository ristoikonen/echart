import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
//import { ThemeProvider } from "next-themes"  <ThemeProvider attribute="class" disableTransitionOnChange>
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider  value={defaultSystem}>
        <App />
    </ChakraProvider>
  </StrictMode>,
)
