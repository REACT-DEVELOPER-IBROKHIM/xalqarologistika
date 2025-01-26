const summarizeName = (firstname, lastname, parentname) => {
  return `${lastname} ${firstname} ${parentname ? parentname : ""}`;
};

export default summarizeName;
