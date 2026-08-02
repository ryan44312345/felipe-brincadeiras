import { useState, useEffect } from "react";

export function HomeService() {
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch(`${import.meta.env.VITE_API_URL}`);
                const text = await result.text();
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