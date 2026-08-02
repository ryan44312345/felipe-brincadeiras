import { useRef } from "react";
import { useGetName } from "../hooks/useGetName";
import sayMyNameImg from "../assets/saymyname.jpg";

export default function SayMyName() {
    const nameInput = useRef<HTMLInputElement>(null)
    const { loading, resposta, buscarNome } = useGetName()

    const envio = () => {
        if (nameInput.current) {
            const nomeDigitado = nameInput.current.value;
            buscarNome(nomeDigitado)
        }
    }

    return (
        <div 
            className="min-h-screen flex flex-col items-center justify-center p-6 text-gray-800 font-sans bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${sayMyNameImg})` }}
        >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

            <div className="max-w-md w-full bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 flex flex-col gap-6 relative z-10">
                <h1 className="text-2xl font-light tracking-tight text-center text-gray-900">Coloque o seu nome</h1>

                <div className="flex flex-col gap-4">
                    <input 
                        type="text" 
                        placeholder="Digite seu nome" 
                        ref={nameInput} 
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all font-light placeholder:text-gray-400"
                    />
                    <button 
                        onClick={envio}
                        className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors shadow-md"
                    >
                        Enviar
                    </button>
                </div>

                <div className="mt-4 text-center min-h-[28px]">
                    <p className={`text-lg font-medium transition-opacity duration-300 ${loading ? 'text-gray-500' : 'text-gray-900'}`}>
                        {loading ? "carregando..." : resposta}
                    </p>
                </div>
            </div>
        </div>
    );
}