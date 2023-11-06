const summarizeTime = (fromDate, toDate) => {
  let from = fromDate.replace(/[\s\n]+/g, "").replace(/\./g, "-").split("-");
  let to = toDate.replace(/[\s\n]+/g, "").replace(/\./g, "-").split("-");
  if(fromDate.startsWith("202") || toDate.startsWith("202")) {
    from = from.reverse();
    to = to.reverse()
  }
  if(!from[0].toLowerCase().startsWith("m")){
    return ({
      from: `${from[2]}.${from[1]?.toString().padStart(2, "0")}.${from[0]?.toString().padStart(2, "0")}`,
      to: `${to[2]}.${to[1]?.toString().padStart(2, "0")}.${to[0]?.toString().padStart(2, "0")}`,
    })
  }
  else{
    return ({
      from: "Mavjud emas",
      to: "Mavjud emas",
    })
  }
}

export default summarizeTime;