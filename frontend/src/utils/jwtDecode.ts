
export interface JWTPayload {
    id: string;
    role: string
}

export default function parseJwt<T>(token: string | null): JWTPayload {
    if (token) {

        const [, payload] = token.split('.');
        const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
        const json = atob(base64);
        return JSON.parse(json) as JWTPayload;
    }

    return { id: "", role: 'user' }
} 