export const generateDocumentType = url => {
    const urlParts = url.split('/')

    return {
        base: urlParts[1],
        secondary: urlParts[2],
        type: urlParts[3],
    }
}
