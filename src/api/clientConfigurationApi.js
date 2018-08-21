import 'whatwg-fetch';

export const getClientConfiguration = (token) => {
  return fetch('http://localhost:4000/warp-service/client/configuration', {
    method: 'GET',
    headers: {
      jwt: token
    }
  })
    .then(getStatus)
    .then(data => data.json());
}

const getStatus = (response) => {
  if (response.ok) {
    return Promise.resolve(response);
  }

  return Promise.reject(new Error(response.statusText));
};
