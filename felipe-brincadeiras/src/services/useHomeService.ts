import { useState, useEffect } from "react";

export function useHomeService() {
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");

    const api_url = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${api_url}/hello`);
                const text = await response.text();
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