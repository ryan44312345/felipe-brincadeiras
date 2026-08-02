import { useGetGrades } from "../hooks/usePostGrade";
import { useRef } from "react";
import patrickGeniusBg from "../assets/patrick-genius.jpg";

export default function Grades() {
    const { loading, resposta, buscarGrades } = useGetGrades()

    const envio = () => {
        if(gradesInput.current && secondGradesInput.current && thirdGradesInput.current){
            const nota = gradesInput.current.value
            const secondNota = secondGradesInput.current.value
            const thirdNota = thirdGradesInput.current.value
            buscarGrades(Number(nota), Number(secondNota), Number(thirdNota))
        }
    }

    const gradesInput = useRef<HTMLInputElement>(null)
    const secondGradesInput = useRef<HTMLInputElement>(null)
    const thirdGradesInput = useRef<HTMLInputElement>(null)

    return (
        <div 
            className="min-h-screen flex flex-col items-center justify-center p-6 text-gray-800 font-sans bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${patrickGeniusBg})` }}
        >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

            <div className="max-w-md w-full bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 flex flex-col gap-6 relative z-10">
                <h1 className="text-2xl font-light tracking-tight text-center text-gray-900">
                    Coloque as notas
                </h1>
                
                <div className="flex flex-col gap-4">
                    <input 
                        type="number" 
                        ref={gradesInput} 
                        placeholder="Primeira nota"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all font-light placeholder:text-gray-400"
                    />
                    <input 
                        type="number" 
                        ref={secondGradesInput} 
                        placeholder="Segunda nota"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all font-light placeholder:text-gray-400"
                    />
                    <input 
                        type="number" 
                        ref={thirdGradesInput} 
                        placeholder="Terceira nota"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all font-light placeholder:text-gray-400"
                    />
                    <button 
                        onClick={envio}
                        disabled={loading}
                        className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors shadow-md cursor-pointer"
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