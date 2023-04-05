export const get = async (endpoint: string, query?: string, value?: string, id?: number) => {
  const baseUrl = 'https://rickandmortyapi.com/api/';
  const currentId = id ? id : '';
  const options = value ? `${query}${value}` : '';
  const url = `${baseUrl}${currentId}${endpoint}${options}`;
  try {
    const response: Response = await fetch(url);

    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw Error('Could not fetch the data!');
  }
};
