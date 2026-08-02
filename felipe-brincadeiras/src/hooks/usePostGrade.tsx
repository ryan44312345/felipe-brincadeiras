import { useState } from "react";
import { postGrades } from "../services/grade";

export function useGetGrades() {
    const [loading, setLoading] = useState(false)
    const [resposta, setResposta] = useState<any>(null)

    const buscarGrades = async (nota: number, secondNota: number, thirdNota: number) => {
        setLoading(true)
        try {
            const response = await postGrades(nota, secondNota, thirdNota)
            setResposta(response)
        } catch (error) {
            console.error("Failed to post grades:", error);
            setResposta("Erro ao enviar notas")
        } finally {
            setLoading(false)
        }
    }

    return {loading, resposta, buscarGrades}
}