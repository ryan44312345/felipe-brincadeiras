import { useState } from "react";
import { usePostGrades } from "../hooks/usePostGrade";
import patrickGeniusBg from "../assets/patrick-genius.jpg";

function formatResponse(response: any): string {
    if (!response) return "";
    return typeof response === "object" ? JSON.stringify(response) : String(response);
}

export default function Grades() {
    const { loading, response, submitGrades, clearResponse } = usePostGrades();
    const [grades, setGrades] = useState<string[]>([""]);

    const handleSubmit = () => {
        const parsedGrades = grades
            .map((grade) => grade.trim())
            .filter((grade) => grade !== "")
            .map(Number);
            
        submitGrades(parsedGrades);
    };

    const handleGradeChange = (index: number, value: string) => {
        const updatedGrades = [...grades];
        updatedGrades[index] = value;
        setGrades(updatedGrades);
    };

    const handleAddGrade = () => {
        setGrades((prevGrades) => [...prevGrades, ""]);
    };

    const handleResetGrades = () => {
        setGrades([""]);
        clearResponse();
    };

    const renderResponse = () => {
        if (loading) return "Carregando...";
        return formatResponse(response);
    };

    return (
        <div 
            className="min-h-screen flex flex-col items-center justify-center p-6 text-gray-800 font-sans bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${patrickGeniusBg})` }}
        >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            <div className="max-w-md w-full bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 flex flex-col gap-6 relative z-10 max-h-[90vh] overflow-y-auto">
                <h1 className="text-2xl font-light tracking-tight text-center text-gray-900">
                    Coloque as notas
                </h1>
                
                <div className="flex flex-col gap-4">
                    {grades.map((grade, index) => (
                        <input 
                            key={index}
                            type="number" 
                            value={grade}
                            onChange={(e) => handleGradeChange(index, e.target.value)}
                            placeholder={`Nota ${index + 1}`}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all font-light placeholder:text-gray-400"
                        />
                    ))}
                    
                    <div className="flex gap-4">
                        <button 
                            onClick={handleAddGrade}
                            className="w-full px-6 py-2 bg-gray-200 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors cursor-pointer"
                        >
                            Adicionar números
                        </button>
                        
                        <button 
                            onClick={handleResetGrades}
                            className="w-full px-6 py-2 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors cursor-pointer"
                        >
                            Resetar
                        </button>
                    </div>

                    <button 
                        onClick={handleSubmit}
                        disabled={loading || grades.some((grade) => grade.trim() === "")}
                        className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors shadow-md cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        Enviar
                    </button>
                </div>

                <div className="mt-4 text-center min-h-[28px]">
                    <p className={`text-lg font-medium transition-opacity duration-300 ${loading ? "text-gray-500" : "text-gray-900"}`}>
                        {renderResponse()}
                    </p>
                </div>
            </div>
        </div>
    );
}