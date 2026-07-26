export interface User {
  id: number
  name: String
  email: String
  address: Address
  phone: String
  website: String
  company: Company
}

interface Address {
  street: String
  suite: String
  city: String
  zipcode: String
  geo: GeoLocation
}

interface GeoLocation {
  lat: String
  lng: String
}

interface Company {
  name: String
  catchPhrase: String
  bs: String
}

export interface Post {
  userId: number
  id: number
  title: String
  body: String
}

export interface MessageState {
  message: string
}