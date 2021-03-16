const makeRequest = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const getItemById = async (id) => {
  const url = `https://meli-challenge-server.herokuapp.com/api/items/${id}`;
  return makeRequest(url);
};

export const searchItems = async (slug) => {
  const url = `https://meli-challenge-server.herokuapp.com/api/items?q=${slug}`;
  return makeRequest(url);
};
