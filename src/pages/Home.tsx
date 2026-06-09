import Navbar from "../components/Navbar.tsx"
import Tasks from "../components/Task.tsx"
import {useState} from "react"
import { SquareArrowRight } from "lucide-react"

interface Task  {
    name: string
    done: boolean
}

export default function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [input, setInput] = useState("");

    function addTask() {
        if (!input) return;

        const newTask: Task = {name: input, done: false};
        setTasks(prev => [...prev, newTask]);
        setInput("");
    }

    function removeTask(name: string) {
        setTasks(prev => prev.filter(task => task.name !== name));
    }

    return (
        <div>
            <Navbar/>
            <br />
            <div className="flex flex-col items-center justify-center">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    addTask()
                    }}
                className="flex flex-col items-center gap-2">
                    <input value={input} onChange={(e) => setInput(e.target.value)} className="border p-2" placeholder="Enter a task..."/>
                    <button className="text-white px-3 py-2 rounded">
                        <SquareArrowRight size={32} color="black"/>
                    </button>
                </form>
                <Tasks tasks={tasks} removeTask={removeTask}/>
            </div>
        </div>
    )
}