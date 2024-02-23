const baseUrl = 'http://localhost:8085/api'


export async function login({email, password}: { email: string, password: string }) {
    return await fetch(`${baseUrl}/auth/login`, {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password})
    })
}

export async function register({email, password, name}: { email: string, password: string, name: string }) {
    return await fetch(`${baseUrl}/auth/register`, {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password, name})
    })
}