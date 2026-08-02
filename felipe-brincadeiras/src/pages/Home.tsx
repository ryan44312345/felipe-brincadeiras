import { useGetMessage } from "../hooks/useGetMessage";
import { Link } from "react-router-dom";
import sayMyNameImg from "../assets/saymyname.jpg";
import hackerBg from "../assets/Hacker Angolano.jpg";
import patrickGeniusImg from "../assets/patrick-genius.jpg";

export default function Home() {
    const { loading, message } = useGetMessage();

    return (
        <div 
            className="min-h-screen flex flex-col items-center justify-center p-6 text-gray-800 font-sans bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${hackerBg})` }}
        >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

            <div className="max-w-md w-full flex flex-col items-center gap-6 bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 relative z-10">
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-light tracking-tight text-gray-900">{message}</h1>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">{loading ? "Carregando..." : "Carregou"}</p>
                </div>
                
                <p className="text-gray-600 font-light text-sm">Vendo se aparece algo no site</p>
                
                <img 
                    src={sayMyNameImg} 
                    alt="Say My Name" 
                    className="w-full rounded-xl shadow-md border border-gray-200/60 object-cover"
                />
                
                <Link 
                    to="/saymyname"
                    className="px-6 py-3 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors shadow-md w-full text-center"
                >
                    Ir para a página Saymyname
                </Link>

                <div className="w-full h-px bg-gray-200 my-2"></div>

                <img 
                    src={patrickGeniusImg} 
                    alt="Patrick Genius" 
                    className="w-full rounded-xl shadow-md border border-gray-200/60 object-cover"
                />
                
                <Link 
                    to="/grades"
                    className="px-6 py-3 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors shadow-md w-full text-center"
                >
                    Ir para a página Grades
                </Link>
            </div>
        </div>
    );
}