import { Data } from '../pages/Home/data.interface';
import { get } from './httpClient';

export const getCharacters = async (value: string) => {
  try {
    const endpoint = 'character/';
    const query = '?name=';
    const data = await get(endpoint, query, value);
    const characters: Data[] = data.results;
    return characters;
  } catch {
    throw Error('Could not fetch the data!');
  }
};

export const getCharacterById = async (id: number) => {
  try {
    const endpoint = 'character/';
    const query = '';
    const character: Data = await get(endpoint, query, '', id);
    return character;
  } catch {
    throw Error('Could not fetch the data!');
  }
};
