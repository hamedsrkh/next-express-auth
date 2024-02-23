declare module 'next-auth' {
  export interface Session {
    user: {
      id: number
      name: string
      email: string
      accessToken: string
    }
  }
}
