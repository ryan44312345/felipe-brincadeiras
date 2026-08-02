import { useGetMessage } from "../hooks/useGetMessage";
import { Link } from "react-router-dom";
import sayMyNameImg from "../assets/saymyname.jpg";

export default function Home() {
    const { loading, message } = useGetMessage();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-gray-800 font-sans">
            <div className="max-w-md w-full flex flex-col items-center gap-8">
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-light tracking-tight">{message}</h1>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">{loading ? "Carregando..." : "Carregou"}</p>
                </div>
                
                <p className="text-gray-500 font-light text-sm">Vendo se aparece algo no site</p>
                
                <img 
                    src={sayMyNameImg} 
                    alt="Say My Name" 
                    className="w-full rounded-xl shadow-sm border border-gray-200/60 object-cover"
                />
                
                <Link 
                    to="/saymyname"
                    className="px-6 py-3 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm w-full text-center"
                >
                    Ir para a página Saymyname
                </Link>
            </div>
        </div>
    );
}