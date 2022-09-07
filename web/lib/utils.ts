export const stringifyCaughtError = (e: unknown, defaultMessage: string) => {
    if (typeof e === "string") {
        return e
    } else if (e instanceof Error) {
        return e.message
    }
    return defaultMessage
}