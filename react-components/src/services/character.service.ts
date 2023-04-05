import { Data } from '../pages/Home/data.interface';
import { get } from './httpClient';

export const getCharacters = async (value: string) => {
  try {
    const endpoint = 'character';
    const query = '/?name=';
    const characters: Data[] = await get(endpoint, query, value);
    return characters;
  } catch {
    throw Error('Could not fetch the data!');
  }
};
