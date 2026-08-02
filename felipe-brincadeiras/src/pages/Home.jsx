import { HomeService } from "../services/HomeService"

export function Home() {
    const { loading, message } = HomeService();

    return (
        <h1>{loading ? "loading..." : message}</h1>
    )
}
