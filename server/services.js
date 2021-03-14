const axios = require("axios");

const makeRequest = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const HOST = "https://api.mercadolibre.com";

const searchItems = async (slug) => {
  const url = `${HOST}/sites/MLA/search?q=${slug}`;
  return makeRequest(url);
};

const getItemById = async (id) => {
  const url = `${HOST}/items/${id}`;
  return makeRequest(url);
};

const getItemDescriptionById = async (id) => {
  const url = `${HOST}/items/${id}/description`;
  return makeRequest(url);
};

const getFullItemById = async (id) => {
  const item = await getItemById(id);
  const description = await getItemDescriptionById(id);
  const data = { ...item, description };
  return data;
};

module.exports = { searchItems, getFullItemById };
