export function cleanConfig<Config extends Record<string, any>>(config: Config) {
    const cleanedConfig = Object.fromEntries(
        Object.entries(config).filter(([_, value]) => value !== null)
    )
    return cleanedConfig
}