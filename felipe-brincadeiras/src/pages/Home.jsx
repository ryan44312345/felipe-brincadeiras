import { HomeService } from "../services/HomeService"

export function Home() {
    const { message } = HomeService();

    return (
        <>
            <h1>{message}</h1>
            <h1>{loading ? "loading..." : "Carregou"}</h1>
        </>
    )
}
