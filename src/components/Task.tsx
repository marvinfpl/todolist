import {useState} from "react"

interface Task  {
    name: string
    done: boolean
}

export default function Task() {
    const [tasks, setTasks] = useState<Task[]>([]);

    function addTask(name: string) {
        let task: Task = {name, done: false};
        setTasks(prev => [...prev, task]);
    }

    function removeTask(name: string) {
        setTasks(prev => prev.filter(task => task.name != name));
    }

    function filterTasksDone(): Task[] {
        return tasks.filter((task) => !task.done);
    }

    return (
        <div>
            <h1>Tasks</h1>
        </div>
    )
}