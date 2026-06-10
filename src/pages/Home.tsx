import Navbar from "@/components/Navbar.tsx"
import Tasks from "@/components/Task.tsx"
import ProgressBar from "@/components/Progress.tsx"
import {useState, useEffect} from "react"
import { SquareArrowRight } from "lucide-react"

interface Task  {
    name: string
    done: boolean
}

export default function Home() {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const saved = localStorage.getItem("tasks");
        if (saved) {
            return JSON.parse(saved);
        }
        return [];
    });

    const [input, setInput] = useState("");

    const completedTasks = tasks.filter(task => task.done).length
    const percent = tasks.length === 0 ? 0 : Math.round((completedTasks / tasks.length) * 100);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);

    function addTask() {
        if (!input) return;

        const newTask: Task = {name: input, done: false};
        setTasks(prev => [...prev, newTask]);
        setInput("");
    }

    function toggleTask(name: string) {
        setTasks(prev => prev.map(task => {
            if (task.name === name) {
                return {...task, done: !task.done}
            }
            return task;
        }))
    }

    function removeTask(name: string) {
        setTasks(prev => prev.filter(task => task.name !== name));
    }

    return (
        <div className="bg-slate-900">
            <Navbar/>
            <br />
            <ProgressBar percent={percent}/>
            <div className="flex flex-col items-center justify-center">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    addTask()
                    }}
                className="flex flex-col items-center gap-3 text-white">
                    <input value={input} onChange={(e) => setInput(e.target.value)} className="border border-white p-2 rounded-xl" placeholder="Enter a task..."/>
                    <button className="text-white px-3 py-2 rounded transition hover:scale-110">
                        <SquareArrowRight size={32} color="white"/>
                    </button>
                </form>
                <Tasks tasks={tasks} removeTask={removeTask} toggleTask={toggleTask}/>
            </div>
        </div>
    )
}