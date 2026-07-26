export interface User {
  id: number
  name: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: GeoLocation
}

interface GeoLocation {
  lat: string
  lng: string
}

interface Company {
  name: string
  catchPhrase: string
  bs: string
}

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export interface MessageState {
  message: string
}
