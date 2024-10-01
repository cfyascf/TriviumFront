export interface RegisterData {
    fullname: string
    email: string
    password: string
}

export interface RegisterResponse {
    data: {
        message: string
    }
}