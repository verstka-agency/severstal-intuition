export function declineRound(count: number): string {
    switch (count) {
        case 1:
            return "раунд";
        case 2:
        case 3:
        case 4:
            return "раунда";
        case 5:
            return "раундов";
        default:
            throw new Error("Число раундов должно быть от 1 до 5");
    }
}