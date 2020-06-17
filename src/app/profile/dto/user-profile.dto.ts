export interface UserProfileDto {
  userName: string;
  lastName: string;
  phoneNumber: string;
  screenName?: string;
  profilePictureUrl: string;
  address: string;
  countryId: number;
  zipCode: number;
  state: number;
  city: string;
}
