const createStatusInstance = (status, message, data) => {
  switch (status) {
    case "backlog":
      return {
        status: status,
        message: "",
        data: null,
        error: false,
        loading: false,
        success: false,
      };
    case "pending":
      return {
        status: status,
        message: message,
        data: null,
        error: false,
        loading: true,
        success: false,
      };
    case "success":
      return {
        status: status,
        message: message,
        data: data,
        error: false,
        loading: false,
        success: true,
      };
    case "error":
      return {
        status: status,
        message: message,
        data: null,
        error: true,
        loading: false,
        success: false,
      };
    default:
      return {};
  }
};

export { createStatusInstance };
