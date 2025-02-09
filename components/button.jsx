'use client';

export default function Button({ text, type = "button", bgColor = "bg-sky-200", border = "", hover = "" }) {
    return (
        <button
            type={type}
            className={`px-4 py-2 rounded-lg font-bold ${bgColor} transition ${border} ${hover}`}
            onClick={() => alert('Button clicked: ' + text)}
        >
            {text}
        </button>
    );
}

