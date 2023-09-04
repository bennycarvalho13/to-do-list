import React, { useEffect } from "react";
import { useState} from "react";

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
		<div className="container-fluid text-center">
		<p className="h1 display-1 text-secondary m-2">ToDos</p>
		<div className="row justify-content-center">
			<div className="col-6 m-3">
			<input className="input-group"
			type="text"
			placeholder="Enter a task"
			value={input}
			onKeyDown={input => {
                if (input.key === 'Enter') {
					addTask();
                }
              }}
			onChange={(e) => setInput(e.target.value)}
			maxlength="100"
			 />
			</div>
		</div>

		<div className="row justify-content-center">
			<div className="col-8">
			<ul className="list-group">
			{tasks.map((task, index) => (
			<li className="list-group-item m-0 text-center d-inline-flex justify-content-between" key={index}>{task}<button type="button" onClick={() => removeTask(index)} className="btn text-danger" ><i className="fa-solid fa-x fa-lg "></i></button></li>
		  ))}
		</ul>
			</div>
		</div>
		 </div>
	);
};

export default Home;
