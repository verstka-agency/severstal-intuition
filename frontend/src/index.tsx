import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import AuthenticationProvider from "src/hoc/AuthenticationProvider"
import CitiesProvider from "src/hoc/CitiesProvider"
import ProfileProvider from "src/hoc/ProfileProvider"
import { BrowserRouter } from "react-router-dom"
import NetworkProvider from "src/hoc/NetworkProvider/NetworkProvider"
import { ScoreProvider } from './contexts/ScoreContext'
import Modal from 'react-modal'
import HeaderProvider from './hoc/HeaderProvider'

Modal.setAppElement('#root')

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
        },
    },
})

root.render(
    <Suspense fallback={<div>Loading</div>}>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <NetworkProvider>
                    <HeaderProvider>
                        <AuthenticationProvider>
                            <ProfileProvider>
                                {/* <ScoreProvider> */}
                                <CitiesProvider>
                                    <App />
                                </CitiesProvider>
                                {/* </ScoreProvider> */}
                            </ProfileProvider>
                        </AuthenticationProvider>
                    </HeaderProvider>
                </NetworkProvider>
            </BrowserRouter>
        </QueryClientProvider>
    </Suspense>
)