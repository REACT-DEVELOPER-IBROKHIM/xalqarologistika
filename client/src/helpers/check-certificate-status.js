export const checkCertificateStatus = (document) => {
  if (document) {
    const { to } = document;
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate();

    const year = +to.split(".")[2];
    const month = +to.split(".")[1];
    const day = +to.split(".")[0];

    const isCurrentDateValid = () => {
      if (currentYear > year) return false;
      if (currentYear === year && currentMonth > month) return false;
      if (currentYear === year && currentMonth === month && currentDay >= day)
        return false;
      return true;
    };

    return isCurrentDateValid();
  }
};
