export interface LocationPlace {
  lat: number;
  lng: number;
}

export interface Place {
  location: LocationPlace;
  name: string;
  formattedAddress: string;
  active?: boolean;
}
