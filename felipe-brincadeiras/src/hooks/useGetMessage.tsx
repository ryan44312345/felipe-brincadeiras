import { useState, useEffect } from "react";
import { fetchHelloMessage } from "../services/HomeService";

export function useGetMessage() {
    const [loading, setLoading] = useState<boolean>(true);
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const text = await fetchHelloMessage();
                setMessage(text);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { loading, message };
}