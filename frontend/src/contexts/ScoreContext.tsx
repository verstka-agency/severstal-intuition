import React, { createContext, useState, useContext } from 'react'

interface ScoreContextType {
    diff: boolean | null
    setDiff: (diff: boolean | null) => void
}

const ScoreContext = createContext<ScoreContextType | undefined>(undefined)

export const ScoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [diff, setDiff] = useState<boolean | null>(null)

    return (
        <ScoreContext.Provider value={{ diff, setDiff }}>
            {children}
        </ScoreContext.Provider>
    )
}

export const useScore = () => {
    const context = useContext(ScoreContext)
    if (context === undefined) {
        throw new Error('useScore must be used within a ScoreProvider')
    }
    return context
} 