import { useHomeService } from "../services/useHomeService"

export function Home() {
    const { loading, message } = useHomeService();

    return (
        <>
            <h1>{message}</h1>
            <h1>{loading ? "loading..." : "Carregou"}</h1>
            <p>Vendo se aparece algo no site</p>
        </>
    )
}

export default Home