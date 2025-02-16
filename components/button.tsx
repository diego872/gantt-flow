'use client';

import { useRouter } from 'next/navigation';

export default function Button({ 
    text, 
    type = "button", 
    bgColor = "bg-sky-200", 
    border = "", 
    hover = "", 
    redirectTo = "", 
    onClick 
}: { 
    text: string; 
    type?: "button" | "submit" | "reset"; 
    bgColor?: string; 
    border?: string; 
    hover?: string; 
    redirectTo?: string; 
    onClick?: () => void; 
}) {
    const router = useRouter();

    const handleClick = async () => {
        if (onClick) {
            await onClick(); // Ejecuta la función si existe
        } else if (redirectTo) {
            router.push(redirectTo);
        }
    };

    return (
        <button
            type={type}
            className={`px-4 py-2 rounded-lg font-bold ${bgColor} transition ${border} ${hover}`}
            onClick={handleClick}
        >
            {text}
        </button>
    );
}




