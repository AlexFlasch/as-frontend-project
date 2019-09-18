const API_URL = 'https://appsheettest1.azurewebsites.net/sample/';

// args should be an array of objects to work properly.
// each queryParam should be an object in the form of:
// {
//   paramName: paramValue
// }
const constructQueryParamString = (queryParams = []) =>
  queryParams.reduce((acc, queryParam, index) => {
    const joinChar = index === 0 ? '?' : '&';
    const [paramName] = Object.keys(queryParam);
    const paramValue = queryParam[paramName];
    return `${acc}${joinChar}${paramName}=${paramValue}`;
  }, '');

export const fetchUsers = async queryParams => {
  const endpoint = 'list';
  const queryParamString = constructQueryParamString(queryParams);
  const requestUrl = `${API_URL}${endpoint}${queryParamString}`;

  const response = await fetch(requestUrl);

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error('An error occurred while getting users.');
  }
};
