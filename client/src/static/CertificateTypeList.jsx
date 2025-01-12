const certificateTypeList = () => {
    const endpoints = ['driver', 'adr', 'manager', 'adr-tank']
    return endpoints.map(endpoint => ({
        route: `${endpoint}`,
        name: `${endpoint.toUpperCase()}`,
    }))
}

export default certificateTypeList
