import React, { useEffect, useState } from 'react'
import Button from 'src/components/Button/Button'
import { NetworkContext } from "src/contexts/NetworkContext"
import './NetworkProvider.scss'

interface NetworkProviderProps extends React.HTMLAttributes<HTMLDivElement> {

}

const NetworkProvider: React.FC<NetworkProviderProps> = (props) => {
    const { children } = props

    const [isOnline, setIsOnline] = useState(true)
    const [showError, setShowError] = useState(false)

    useEffect(() => {
        // Set initial state
        setIsOnline(navigator.onLine)

        // Add event listeners
        const handleOnline = () => {
            setIsOnline(true)
        }

        const handleOffline = () => {
            setIsOnline(false)
            setShowError(true)
        }

        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffline)

        return () => {
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffline)
        }
    }, [])

    /**
     * Если соединение было прервано, то показывать ошибку о разрыве соединения
     * Как только соединение было восстановлено, то показать предложение продолжить игру
     */

    return (
        <NetworkContext.Provider
            value={{ isOnline: isOnline }}
        >
            {showError ?
                <div className={"network-provider"}>
                    <div className={"network-provider__message"}>
                        {!isOnline ?
                            <>
                                {/* Spacer */}
                                <h2 className="h2 white network-provider__heading">Соединение прервано</h2>
                                <p className="int-2 white network-provider__description">Проверьте интернет</p>
                            </>
                            :
                            <>
                                <h2 className="h2 white network-provider__heading">Упс, игра была прервана!</h2>
                                <p className="int-2 white network-provider__description">Но мы сохранили ваш результат и
                                    вы можете продолжить
                                    играть</p>
                                <Button
                                    className={"network-provider__button"}
                                    onClick={() => {
                                        setShowError(false)
                                    }}
                                >
                                    Продолжить игру
                                </Button>
                            </>
                        }
                    </div>
                </div>
                :
                isOnline && children
            }
        </NetworkContext.Provider>
    )
}

export default NetworkProvider