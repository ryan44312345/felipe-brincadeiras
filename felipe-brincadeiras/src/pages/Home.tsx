import { useGetMessage } from "../hooks/useGetMessage";

export default function Home() {
    const { loading, message } = useGetMessage();

    return (
        <>
            <h1>{message}</h1>
            <h1>{loading ? "loading..." : "Carregou"}</h1>
            <p>Vendo se aparece algo no site</p>
        </>
    );
}