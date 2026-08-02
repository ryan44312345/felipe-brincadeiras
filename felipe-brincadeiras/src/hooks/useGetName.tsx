import { useState } from "react";
import { fetchHelloName } from "../services/sayMyName";

export function useGetName() {
    const [loading, setLoading] = useState(true)
    const [resposta, setResposta] = useState("")

    const buscarNome = async (nome: string) => {
        if (!nome) {
            return
        }

        try {
            const response = await fetchHelloName(nome)
            setResposta(response)
            setLoading(false)
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    }

    return {loading, resposta, buscarNome}
    
    
}