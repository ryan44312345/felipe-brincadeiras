import { HomeService } from "../services/HomeService"

export async function Home() {
    const { loading, message } = HomeService();

    return (
        <>
            <h1>{message}</h1>
            <h1>{loading ? "loading..." : "Carregou"}</h1>
            <p>Vendo se aparece algo no site</p>
        </>
    )
}

export default Home