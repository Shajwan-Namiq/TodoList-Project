import react, { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex"
    >
      <input
        type="text"
        className="bg-slate-100 rounded-l-sm w-full p-3"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="p-3 hover:bg-slate-300 bg-slate-100 border border-slate-900 rounded-r-sm text-slate-800 font-bold">
        Add
      </button>
    </form>
  );
}
