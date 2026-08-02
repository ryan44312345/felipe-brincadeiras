export function HomeService() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    
    const fetchData = async () => {
        setLoading(true)
        
        try {
            const result = await fetch(`${import.meta.env.VITE_URL_API}`)
            setData(await result.json())
        } finally {
            setLoading(false);
        }
    }

    return {loading, data, fetchData}
}