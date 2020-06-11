import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CountryDto} from "../dto";

@Injectable()
export class DictionaryRepositoryService {
  constructor(private http: HttpClient) {

  }
  getCountries() {
    return this.http.get<CountryDto[]>("/api/countries")
  }
}
