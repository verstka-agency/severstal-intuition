export const formatTimer = (timer: number): string => {
    const minutes = "00"
    const seconds = timer.toString().padStart(2, "0")
    return `${minutes}:${seconds}`
}