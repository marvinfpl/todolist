import {useState, useEffect} from "react"

export default function Theme() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") ?? "white";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    function bgColor() {
        if (theme === "white") {
            return "bg-white";
        } else {
            return "bg-slate-900";
        }
    }

    function textColor() {
        if (theme === "white") {
            return "text-black";
        } else {
            return "text-white";
        }
    }

    return (                                                   
        <button onClick={() => setTheme(theme === "white" ? "black" : "white")} className={`${textColor()} ${bgColor()} w-20 h-16 border-4 border-red-400`} >{theme}</button>
    )
    
}