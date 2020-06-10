import {CountryDto, StateDto} from "../../dictionary/dto";

export interface UserAddressDto {
  address: string;
  country: CountryDto;
  zipCode: number;
  state: StateDto;
  city: string;
}
