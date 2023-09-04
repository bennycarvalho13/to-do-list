import React, { useEffect } from "react";
import { useState} from "react";

function Home() {
	const [tasks, setTasks] = useState([]);
	const [input, setInput] = useState('');

	const addTask = () => {
		if (input === " " || input === "") {
			alert("Task cannot be empty");
		}else{
			setTasks([...tasks, input]);
		}
	};
	const removeTask = (index) => {
		const tempArr = [...tasks];
		tempArr.splice(index,1);
		setTasks(tempArr);

	};
	return (
		<div className="container-fluid text-center">
		<p className="h1 display-1 text-secondary m-2">ToDos</p>
		<div className="row justify-content-center">
			<div className="col-6 m-3">
			<input className="input-group rounded"
			type="text"
			placeholder="Enter a task"
			value={input}
			onKeyDown={event => {
                if (event.key === 'Enter') {
					addTask();
					setInput("");
                }
              }}
			onChange={(e) => setInput(e.target.value)}
			maxLength="100"
			 />
			</div>
		</div>

		<div className="row justify-content-center">
			<div className="col-8">
			<ul className="list-group">
				{tasks.map((task, index) => (<li className="list-group-item m-0 d-inline-flex justify-content-between" key={index}>{task}<button type="button" onClick={() =>{removeTask(index)}} className="btn text-danger" ><i className="fa-solid fa-x fa-lg "></i></button></li>))}
				<li className="list-group-item m-0 text-start text-secondary list-group-item-dark">{tasks.length === 1 ? tasks.length + " item on the list" : tasks.length + " items on the list"}</li>
		</ul>
			</div>
		</div>
		 </div>
	);
};

export default Home;
