import { number } from "yup"

export enum ButtonVariantsEnum {
    PRIMARY = "primary",
    PRIMARY_NEXT = "primary-next",
    SECONDARY = "secondary",
    SECONDARY_ROUND = "secondary-round",
    LINK = "link"
}

export enum ButtonTypeEnum {
    "SUBMIT" = "submit",
    "RESET" = "reset",
    "BUTTON" = "button"
}

export type ButtonVariant = "primary" | "primary-next" | "secondary" | "secondary-round" | "link"

export type THeadingVariants = "h1" | "h2" | "h3" | "h4"
export type TParagraphVariants = "int-1" | "int-2" | "int-3"

export type ModificatorObject = {
    decision: boolean,
    name: string
}

export type Modificators = Array<string | number | boolean | undefined | ModificatorObject>

export enum CornersPosition {
    INSIDE = "inside",
    OUTSIDE = "outside"
}

export interface OnboardingSlide {
    heading: string
    text: string
    image: string
}

export interface CityOption {
    label: string
    value: string
    group: string
}

export enum LocalStorageEnum {
    SEVERSTAL_TOKEN = "severstal-token",
    SESSION_TIMESTAMP = "severstal-session-timestamp"
}

export interface UserProps {
    id: string
    firstName: string
    lastName: string
    email: string
    phone: string

    city: string
    avatar: string

    isSeverstalEmployee: "Да" | "Нет"
    subdivision: string
    jobTitle: string

    isPrivacyPolicyConfirmed: boolean
    isGameRulesConfirmed: boolean

    game: GameProviderProps
}

export interface AvatarProps {
    id: string
    label: string
    slug: string
    groupId: string
}

export interface GroupProps {
    id: string
    label: string
    slug: string
}

export enum AvatarIconSizeEnum {
    BIG = "big",
    SMALL = "small"
}

export interface GameProviderProps {
    currentRound: number
    currentQuestion: number
    score: number
    isMemoryPassed: boolean
    isPostcardsPassed: boolean
}