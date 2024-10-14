import axios from 'axios';

const API_URL = 'http://localhost:3000/api/vendors';

export const getVendors = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getVendorById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createVendor = async (vendorData) => {
  const response = await axios.post(API_URL, vendorData);
  return response.data;
};

export const updateVendor = async (id, vendorData) => {
  const response = await axios.put(`${API_URL}/${id}`, vendorData);
  return response.data;
};

export const deleteVendor = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
