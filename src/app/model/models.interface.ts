export interface CityData {
    "name": string,
    "latitude": number,
    "longitude": number,
    "country": string,
    "state": string
}

export interface WeatherInfo {
    clouds: { all: number };
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
      };
      name: string;
      sys: {
        country: string;
        sunrise: number;
        sunset: number;
      };
      timezone: number;
      visibility: number;
      weather: [{icon: string, description: string}];
      wind: { speed: number; deg: number };
}


