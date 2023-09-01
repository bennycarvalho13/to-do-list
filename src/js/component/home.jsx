import React, { useEffect } from "react";
import { useState} from "react";
import ListItem from "./listItem";

function Home() {
	const [tasks, setTasks] = useState([]);
	const [input, setInput] = useState('');

	const addTask = () => {
		if (input !== "")
		{
			setTasks([...tasks, input]);
		}
	};
	const removeTask = (index) => {
	const newTasks = [...tasks];
	newTasks.splice(index, 1);
	setTasks(newTasks);
	};
	return (
		<div>
		<h1>To-Do List</h1>
		<div>
			<input
			type="text"
			placeholder="Enter a task"
			value={input}
			onKeyDown={input => {
                if (input.key === 'Enter') {
					addTask();
                }
              }}
			onChange={(e) => setInput(e.target.value)}
			 />
		</div>
		<ul className="list-group">
			{tasks.map((task, index) => (
			<li className="list-group-item m-0" key={index}>{task}<button type="button" onClick={() => removeTask(index)} className="btn text-danger"><i class="fa-solid fa-x fa-lg"></i></button></li>
		  ))}
		</ul>
		 </div>
	);
};

export default Home;
