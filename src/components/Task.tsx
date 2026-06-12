import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Checkbox } from "@/@/components/ui/checkbox";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Task {
  id: string;
  name: string;
  done: boolean;
}

type Props = {
  tasks: Task[];
  removeTask: (id: string) => void;
  toggleTask: (id: string) => void;
};

type SortableTaskProps = {
  task: Task;
  removeTask: (id: string) => void;
  toggleTask: (id: string) => void;
};

export function SortableTask({task, removeTask, toggleTask}: SortableTaskProps) {
  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id: task.id});

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "drag",
  };

  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.name);

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className=" flex items-center bg-slate-800 rounded-xl border-2 p-4 transition hover:border-cyan-400 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/50">
      <div className="flex-1 flex justify-start">
        <Checkbox checked={task.done} onCheckedChange={() => toggleTask(task.id)} className="transition-transform duration-200 hover:scale-110"/>
      </div>

      <div className="flex-1 flex justify-center w-64">
        {editing ? (
          <input className="bg-slate-700 text-white rounded px-2 py-1 w-full" value={text} onChange={(e) => setText(e.target.value)} onBlur={() => setEditing(false)} autoFocus />
        ) : (
          <span className={task.done ? "line-through text-gray-400" : "text-white"} onDoubleClick={() => setEditing(true)}>
            {task.name}
          </span>
        )}
      </div>

      <div className="flex-1 flex justify-end">
        <button onClick={() => removeTask(task.id)} className="transition-transform hover:scale-110">
          <Trash2 color="white" />
        </button>
      </div>
    </div>
  );
}

export default function Tasks({tasks, removeTask, toggleTask }: Props) {
  return (
    <div className="flex flex-col gap-3 px-6">
      <h1 className="flex justify-center font-bold text-white">Tasks</h1>
      {tasks.map((task) => (
        <SortableTask key={task.id} task={task} removeTask={removeTask} toggleTask={toggleTask}/>
      ))}
    </div>
  );
}