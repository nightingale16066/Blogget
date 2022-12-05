export const setToken = (token) => {
  localStorage.setItem('bearer', token);
};

export const getToken = () => {
  let token = '';
  if (location.href.includes('access_token')) {
    token = new URLSearchParams(location.hash.substring(1))
      .get('access_token');
    setToken(token);
  }
  if (localStorage.getItem('bearer')) {
    token = localStorage.getItem('bearer');
  }

  return token;
};

export const delToken = () => {
  localStorage.removeItem('bearer');
  // location.href = location.href.replace(/(http:\/\/localhost:3000).*/, '$1');
};
