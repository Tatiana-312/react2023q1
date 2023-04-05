export const get = async (endpoint: string, query?: string, value?: string, id?: number) => {
  const baseUrl = 'https://rickandmortyapi.com/api/';
  const currentId = id ? id : '';
  const options = value ? `${query}${value}` : '';
  const url = `${baseUrl}${endpoint}${currentId}${options}`;
  console.log(url);
  try {
    const response: Response = await fetch(url);

    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error('Could not fetch the data!');
  }
};
