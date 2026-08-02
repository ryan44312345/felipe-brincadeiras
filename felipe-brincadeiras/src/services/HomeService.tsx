import { useState, useEffect } from "react";

export function HomeService() {
    const [loading, setLoading] = useState(true);
    const [text] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch(import.meta.env.VITE_API_URL + "/hello");
                const text = await result.text();
                console.log(text);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();    
    }, []);

    return { loading, text };
}