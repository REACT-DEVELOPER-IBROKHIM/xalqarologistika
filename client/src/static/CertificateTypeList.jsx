const certificateTypeList = () => {
    const endpoints = [
        'driver',
        'driver-manager',
        'driver-adr',
        'driver-adr-tank',
    ]
    return endpoints.map(endpoint => ({
        route: `manage-${endpoint}-certificate`,
        name: `${endpoint[0].toUpperCase() + endpoint.slice(1).replace(/-/g, ' ')} certificate`,
    }))
}

export default certificateTypeList
