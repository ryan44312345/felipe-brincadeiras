export async function postGrades(grades: number[]): Promise<any> {
    const api_url = import.meta.env.VITE_API_URL;

    const response = await fetch(`${api_url}/grades`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(grades)
    });

    if (!response.ok) {
        throw new Error(`Error posting grades: ${response.statusText}`);
    }

    return await response.json();
}