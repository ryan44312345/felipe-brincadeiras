export async function fetchHelloMessage(): Promise<string> {
    const api_url = import.meta.env.VITE_API_URL;
    const response = await fetch(`${api_url}/hello`);

    if (!response.ok) {
        throw new Error(`Error fetching message: ${response.statusText}`);
    }

    return await response.text();
}