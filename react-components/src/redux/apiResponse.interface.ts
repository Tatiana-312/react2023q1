import { Data } from '../pages/Home/data.interface';

interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}

export interface ApiResponse {
  info: Info;
  results: Data[];
}
