export async function postGrades(nota: number, secondNota: number, thirdNota: number): Promise<any> {
    const api_url = import.meta.env.VITE_API_URL;

    const response = await fetch(`${api_url}/grades`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify([nota, secondNota, thirdNota])
    });

    if (!response.ok) {
        throw new Error(`Error posting grades: ${response.statusText}`);
    }

    return await response.json();
}