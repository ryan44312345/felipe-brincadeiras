

export async function fetchHelloName(name: string): Promise<string> {
    const api_url = import.meta.env.VITE_API_URL;

    const response = await fetch(`${api_url}/hello/` + name);

    return response.text();
}