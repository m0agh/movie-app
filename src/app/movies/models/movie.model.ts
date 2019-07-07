import { Genre } from './genre.model';

export interface Movie {
  id: number;
  key: string;
  name: string;
  description: string;
  genres: Array<Genre>;
  rate: string;
  length: string;
  img: string;
  cover: string;
}
