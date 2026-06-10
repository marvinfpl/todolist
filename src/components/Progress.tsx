type Props = {
    percent: number
}

export default function ProgressBar({percent}: Props) {
    return (
        <div className="w-full max-w-md">
            <div className="flex justify-between mb-1 text-white mb-2">
                <span>Progress</span>
                <span>{percent}%</span>
            </div>

            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden transition-all hover:scale-102">
                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out shadow-lg shadow-blue-500/30 rounded-full" style={{width: `${percent}%`}}/>
            </div>
        </div>
    )
}