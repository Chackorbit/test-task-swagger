import axios from 'axios';

axios.defaults.baseURL = 'https://onboarding.art-code.team';

export const getBrands = async () => {
  const { data } = await axios.get('/api/test/v1/search/brands_terms');
  return data.data;
};

export const getStyles = async () => {
  const { data } = await axios.get('/api/test/v1/search/styles');
  return data.data;
};

export const getTerms = async () => {
  const { data } = await axios.get('/api/test/v1/search/terms');
  return data.data;
};

export const parseLink = async () => {
  const { data } = await axios.get(`/api/test/v1/search/parse_link/`);
  console.log('data: ', data);
  return data.data;
};
