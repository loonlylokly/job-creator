export const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
export const HOST_URL = process.env.NEXT_PUBLIC_HOST_NAME || "";

export const API_ROUTES = {
  main: `${API_URL}/`,
  getFieldsData: `${API_URL}/getFieldsData`,
  updateFieldsData: `${API_URL}/updateFieldsData`,
};
