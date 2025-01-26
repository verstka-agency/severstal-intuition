import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import NetworkStatus from "src/components/NetworkStatus/NetworkStatus"
import AuthenticationProvider from "src/hoc/AuthenticationProvider"
import CitiesProvider from "src/hoc/CitiesProvider"
import ProfileProvider from "src/hoc/ProfileProvider"
import { LocalStorageEnum } from "src/types"
import { BrowserRouter } from "react-router-dom"
import NetworkProvider from "src/hoc/NetworkProvider/NetworkProvider"

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
            <BrowserRouter>
                {/*<NetworkStatus/>*/}
                <NetworkProvider>
                    <AuthenticationProvider>
                        <ProfileProvider>
                            <CitiesProvider>
                                {/*<button onClick={() => {*/}
                                {/*    localStorage.removeItem(LocalStorageEnum.SEVERSTAL_TOKEN)*/}
                                {/*}}>reset*/}
                                {/*</button>*/}
                                <App/>
                            </CitiesProvider>
                        </ProfileProvider>
                    </AuthenticationProvider>
                </NetworkProvider>
            </BrowserRouter>
        </QueryClientProvider>
    </Suspense>
    // </React.StrictMode>
)