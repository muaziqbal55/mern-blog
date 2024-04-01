export const errorHandler = (statusCode, message) => {
    const error = new Error({
        statusCode,
        message
    })
    return error
}