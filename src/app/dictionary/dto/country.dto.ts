import {StateDto} from './state.dto';

export interface CountryDto {
  id: number;
  name: string;
  states: StateDto[];
}
