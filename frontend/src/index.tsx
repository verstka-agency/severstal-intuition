import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import NetworkStatus from "src/components/NetworkStatus/NetworkStatus"
import AuthenticationProvider from "src/hoc/AuthenticationProvider"
import CitiesProvider from "src/hoc/CitiesProvider"
import SessionProvider from "src/hoc/SessionProvider"
import ProfileProvider from "src/hoc/ProfileProvider"
import GameProvider from "src/hoc/GameProvider"
import { LocalStorageEnum } from "src/types"

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
    // <React.StrictMode>
    <Suspense fallback={<div>Loading</div>}>
        <QueryClientProvider client={queryClient}>
            <NetworkStatus/>
            <SessionProvider/>
            <AuthenticationProvider>
                <ProfileProvider>
                    <CitiesProvider>
                        <GameProvider>
                            <button onClick={() => {
                                localStorage.removeItem(LocalStorageEnum.SEVERSTAL_TOKEN)
                            }}>reset
                            </button>
                            <App/>
                        </GameProvider>
                    </CitiesProvider>
                </ProfileProvider>
            </AuthenticationProvider>
        </QueryClientProvider>
    </Suspense>
    // </React.StrictMode>
)