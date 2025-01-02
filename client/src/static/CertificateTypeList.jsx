const certificateTypeList = (type, path) => {
    const endpoints = ["driver", "manager", "adr", "adr-tank"]
    return endpoints.map(endpoint => ({
        route: `${path}/${type}-driver-${endpoint}-certificate`,
        name: `${endpoint[0].toUpperCase() + endpoint.slice(1)} certificate`,
    }))
}

export default certificateTypeList
