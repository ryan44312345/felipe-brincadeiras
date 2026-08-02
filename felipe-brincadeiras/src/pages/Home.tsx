import { HomeService } from "../services/HomeService"

export function Home() {
    const { loading, text } = HomeService();

    return (
        <>
            <h1>{text}</h1>
            <h1>{loading ? "loading..." : "Carregou"}</h1>
            <p>Vendo se aparece algo no site</p>
        </>
    )
}

export default Home