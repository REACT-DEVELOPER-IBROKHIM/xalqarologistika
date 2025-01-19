export async function resolve(promise) {
    const resolved = {
        data: null,
        error: null,
    }

    try {
        const {
            data: { data, error },
        } = await promise
        resolved.data = data
        resolved.error = error
    } catch (error) {
        resolved.error = error
    }

    return resolved
}
