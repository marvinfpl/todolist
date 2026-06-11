import { Trash2 } from "lucide-react"
import {Checkbox} from "@/@/components/ui/checkbox"

interface Task  {
    name: string
    done: boolean
}

type Props = {
    tasks: Task[]
    removeTask: (name: string) => void
    toggleTask: (name: string) => void
}

export default function Tasks({ tasks, removeTask, toggleTask}: Props) {
    return (
      <div className="flex flex-col gap-3 px-6">
        <h1 className="flex justify-center font-bold text-white ">Tasks</h1>
        {tasks.map(task => (
          <div
            key={task.name}  
            className="flex items-center bg-slate-800 rounded-xl border-2 p-4 transition hover:border-cyan-400 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/50">
            <div className="flex-1 flex justify-start">
              <Checkbox checked={task.done} onCheckedChange={() => toggleTask(task.name)} className="transition-transform duration-200 hover:scale-120"/>
            </div>
            <div className="flex-1 flex justify-center">
              <span className={`${task.done ? "line-through text-gray-400" : "text-white"}`}>{task.name}</span>
            </div>
            <div className="flex-1 flex justify-end animation hover:scale-110">
              <button onClick={() => removeTask(task.name)}>
                <Trash2 color="white"/>
              </button>
            </div>
          </div>
        ))}
      </div>
    )
}