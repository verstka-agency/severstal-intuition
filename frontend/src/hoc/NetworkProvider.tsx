import React, { useEffect, useState } from 'react'
import { Outlet } from "react-router-dom"
import { NetworkContext } from "src/contexts/NetworkContext"

const NetworkProvider = () => {
    const [isConnected, setIsConnected] = useState<boolean>(false)

    return (
        <NetworkContext.Provider
            value={{ isConnected: isConnected }}
        >
            <Outlet/>
        </NetworkContext.Provider>
    )
}

export default NetworkProvider