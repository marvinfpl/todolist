type Props = {
    percent: number
}

export default function ProgressBar({percent}: Props) {
    const color  = percent < 30 ? "bg-red-500" : percent < 70 ? "bg-yellow-500" : "bg-green-500";
    return (
        <div className="w-full max-w-md">
            <div className="flex justify-between mb-1 text-white">
                <span>Progress</span>
                <span>{percent}%</span>
            </div>

            <div className="w-full h-4 bg-slate-700 rounded-full">
                <div className={`h-4 bg-green-500 rounded-full transition-all duration-300 ${color}`} style={{width: `${percent}%`}}/>
            </div>
        </div>
    )
}