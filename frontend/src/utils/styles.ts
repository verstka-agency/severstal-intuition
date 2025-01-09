import { Modificators } from "src/types"

export const getStyles = (baseClassName: string, modificators: Modificators, className?: string | undefined): string => {
    const styles: Array<string | undefined> = [baseClassName]

    modificators.forEach((modificator) => {
        if (
            typeof modificator === "string"
            || typeof modificator === "boolean"
            || typeof modificator === "number") {
            styles.push(`${baseClassName}--${String(modificator)}`)
        } else {
            if (modificator === undefined) {
                return
            }
            if (Object.hasOwn(modificator, "decision")) {
                if (modificator?.decision) {
                    styles.push(`${baseClassName}--${modificator.name}`)
                } else {
                    styles.push(`${baseClassName}--not-${modificator.name}`)
                }
            }
        }
    })

    styles.push(className)

    return styles.filter(Boolean).join(" ")
}