import {CountryDto} from "../dto/country.dto";

export const countries: CountryDto[] = [
  {
    id: 1,
    name: "USA",
    states: [
      {
        id: 1,
        name: "Alabama"
      },
      {
        id: 2,
        name: "Alaska"
      },
      {
        id: 3,
        name: "Florida"
      },
      {
        id: 4,
        name: 'Montana'
      },
      {
        id: 5,
        name: 'Washington'
      }
    ]
  },
  {
    id: 2,
    name: "Ukraine",
    states: [
      {
        id: 1,
        name: "Kiev"
      },
      {
        id: 2,
        name: "Lviv"
      },
      {
        id: 3,
        name: "Dnipro"
      }
    ]
  }
]
