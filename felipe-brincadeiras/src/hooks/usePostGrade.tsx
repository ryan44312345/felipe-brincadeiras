import { useState } from "react";
import { postGrades } from "../services/grade";

export function useGetGrades() {
    const [loading, setLoading] = useState(true)
    const [resposta, setResposta] = useState<Array<number>>([])

    const buscarGrades = async (nota: number, secondNota: number, thirdNota: number) => {
        try {
            const response = await postGrades(nota, secondNota, thirdNota)
            setResposta(response)
            setLoading(false)
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    }

    return {loading, resposta, buscarGrades}

}