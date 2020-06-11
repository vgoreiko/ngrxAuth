import {Controller, Get} from '@nestjs/common';
import {countries} from "../responses/countries";

@Controller("api")
export class CountryController {
  @Get("countries")
  getCountries() {
    return countries
  }
}
