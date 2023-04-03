interface Location {
  name: string;
  url: string;
}
export interface Data {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: unknown;
  location?: Location;
  image?: string;
  episode?: string[];
  url?: string;
  created?: string;
}
