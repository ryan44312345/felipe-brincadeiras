import { HomeService } from "../services/HomeService"

export function Home() {

    const message = HomeService.getHelloWorld()

    return (
        <h1>{message}</h1>
    )
}
