import { Trash2 } from "lucide-react"

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
        <h1 className="flex justify-center font-bold">Tasks</h1>
        {tasks.map(task => (
          <div
            key={task.name}  
            className="flex items-center bg-blue-600 rounded-xl border-2 p-4">
            <div className="flex-1 flex justify-start">
              <input type="checkbox" checked={task.done} onChange={() => toggleTask(task.name)} className="animation hover:scale-120"/>
            </div>
            <div className="flex-1 flex justify-center">
              <span className={`${task.done ? "line-through text-gray-400" : ""}`}>{task.name}</span>
            </div>
            <div className="flex-1 flex justify-end animation hover:scale-110">
              <button onClick={() => removeTask(task.name)}>
                <Trash2 />
              </button>
            </div>
          </div>
        ))}
      </div>
    )
}