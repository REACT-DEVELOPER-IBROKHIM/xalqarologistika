const certificateTypeList = (type, path) => {
    return (
     [
          {
              route: `${path}/${type}-driver-certificate`,
              name: `${type[0].toUpperCase() + type.slice(1)} Driver certificate`
          },
          {
              route: `${path}/${type}-driver-manager-certificate`,
              name: `${type[0].toUpperCase() + type.slice(1)} Manager certificate`
          },
          {
              route: `${path}/${type}-driver-adr-certificate`,
              name: `${type[0].toUpperCase() + type.slice(1)} ADR certificate`
          },
          {
              route: `${path}/${type}-driver-adr-tank-certificate`,
              name: `${type[0].toUpperCase() + type.slice(1)} ADR TANK certificate`
          },
     ]
    )
  }
  
  export default certificateTypeList