

export async function fetchHelloName(name: string): Promise<string> {
    const api_url = import.meta.env.VITE_API_URL;

    if (!api_url.endsWith("/")) {
        throw new Error("Deu ruim");
    }

    return api_url + name;
}