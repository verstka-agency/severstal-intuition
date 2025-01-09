import React, { useEffect, useState } from "react"
import { LocalStorageEnum } from "src/types"

const SessionProvider = () => {
    const [isSecondTabOpen, setIsSecondTabOpen] = useState(false)

    // TODO блокировать открытие второй вкладки
    // useEffect(() => {
    //     const currentTabId = Date.now().toString() // Уникальный идентификатор для текущей вкладки
    //
    //     // Сохранить текущую вкладку
    //     localStorage.setItem(LocalStorageEnum.SESSION_TIMESTAMP, currentTabId)
    //
    //     const handleStorageChange = () => {
    //         const latestTabId = localStorage.getItem(LocalStorageEnum.SESSION_TIMESTAMP)
    //         if (latestTabId !== currentTabId) {
    //             // Другая вкладка была открыта
    //             setIsSecondTabOpen(true)
    //         }
    //     }
    //
    //     // Добавить слушатель события storage
    //     window.addEventListener("storage", handleStorageChange)
    //
    //     // Удалить текущую вкладку при закрытии
    //     const handleBeforeUnload = () => {
    //         localStorage.removeItem(LocalStorageEnum.SESSION_TIMESTAMP)
    //     }
    //     window.addEventListener("beforeunload", handleBeforeUnload)
    //
    //     return () => {
    //         // Очистить слушатели при размонтировании
    //         window.removeEventListener("storage", handleStorageChange)
    //         window.removeEventListener("beforeunload", handleBeforeUnload)
    //     }
    // }, [])

    return null
}

export default SessionProvider