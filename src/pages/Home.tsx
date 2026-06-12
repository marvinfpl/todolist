import Navbar from "@/components/Navbar.tsx"
import Tasks from "@/components/Task.tsx"
import ProgressBar from "@/components/Progress.tsx"
import Footer from "@/components/Footer.tsx"
import {useState, useEffect} from "react"
import { SquareArrowRight } from "lucide-react"
import confetti from "canvas-confetti"
import {arrayMove, SortableContext, verticalListSortingStrategy} from "@dnd-kit/sortable"
import { DndContext, type DragEndEvent, closestCenter } from "@dnd-kit/core"

interface Task {
    id: string
    name: string
    done: boolean
}

export default function Home() {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? (JSON.parse(saved) as Task[]) :  [];
    });

    const [input, setInput] = useState("");

    const completedTasks = tasks.filter(task => task.done).length
    const percent = tasks.length === 0 ? 0 : Math.round((completedTasks / tasks.length) * 100);

    useEffect(() => {
        if (percent === 100) {
            const duration = 1000;
            const end = Date.now() + duration;
            const frame = () => {
                confetti({
                    particleCount: 5,
                    spread: 70,
                    startVelocity: 40,
                    origin: {y: 0.5},
                });
            
            if (Date.now() < end) {
                requestAnimationFrame(frame);
                }
            }
            frame();
        }
    }, [percent]);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);

    function addTask() {
        if (!input) return;

        const newTask: Task = {id: crypto.randomUUID(), name: input, done: false};
        setTasks(prev => [...prev, newTask]);
        setInput("");
    }

    function toggleTask(id: string) {
        setTasks(prev => prev.map(task => {
            if (task.id === id) {
                return {...task, done: !task.done}
            }
            return task;
        }))
    }

    function removeTask(id: string) {
        setTasks(prev => prev.filter(task => task.id !== id));
    }

    function handleDragEnd(event: DragEndEvent) {
        const {active, over} = event;
        if (!over || active.id === over.id) return;

        setTasks((tasks) => {
            const oldIndex = tasks.findIndex(task => task.id === active.id);
            const newIndex = tasks.findIndex(task => task.id === over.id);
            if (oldIndex === -1 || newIndex === -1) return tasks;
            return arrayMove(tasks, oldIndex, newIndex);
        });
    }

    return (
        <div className="min-h-screen bg-slate-900">
            <Navbar/>
            <br />
            <div className="flex flex-col items-center justify-center">
                <ProgressBar percent={percent}/>
                <br />
                <form onSubmit={(e) => {
                    e.preventDefault()
                    addTask()
                    }}
                className="flex flex-col items-center gap-3 text-white">
                    <input value={input} onChange={(e) => setInput(e.target.value)} className="border border-slate-600 focus:border-blue-500 outline-none p-2 rounded-xl hover:border-blue-500" placeholder="Enter a task..."/>
                    <button className="text-white px-3 py-2 rounded transition hover:scale-110">
                        <SquareArrowRight size={32} color="white"/>
                    </button>
                </form>
                <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
                    <SortableContext items={tasks.map(task => task.id)} strategy={verticalListSortingStrategy}>
                    <Tasks tasks={tasks} removeTask={removeTask} toggleTask={toggleTask}/>
                    </SortableContext>
                </DndContext>
            </div>
            <div className="flex flex-col">
                <Footer/>
            </div>
        </div>
    )
}