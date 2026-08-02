import { useState } from "react";
import { postGrades } from "../services/grade";

export function usePostGrades() {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<any>(null);

    const submitGrades = async (grades: number[]) => {
        setLoading(true);
        try {
            const apiResponse = await postGrades(grades);
            setResponse(apiResponse);
        } catch (error) {
            console.error("Failed to post grades:", error);
            setResponse("Erro ao enviar notas");
        } finally {
            setLoading(false);
        }
    };

    const clearResponse = () => setResponse(null);

    return { loading, response, submitGrades, clearResponse };
}