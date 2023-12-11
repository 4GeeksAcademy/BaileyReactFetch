import React, { useState, useEffect } from "react";
import Heading from "./Heading";
import Form from "./Form";
import TodoList from "./TodoList";
import Count from "./Count";

const Home = () => {const [inputText, setInputText] = useState("");

	const [todos, setTodos] = useState([]);
	const userURL = "https://playground.4geeks.com/apis/fake/todos/user/klbailey";
//Return line 24 because here is where we're setting todoList on line 24
	useEffect(() => {
		fetch(userURL)
		.then(response=>response.json())
		.then(data=>setTodos(data))
		.catch(error=>console.log(error))
    }, []);

	return (
		<div className="heading">
			<Heading />
			<div className="body">
				<Form inputText={inputText} todos={todos} setTodos={setTodos} userURL={userURL} setInputText={setInputText} />
				<TodoList setTodos={setTodos} todos={todos} userURL={userURL} />
				{/* <Count setTodos={setTodos} todos={todos}/> */}
			</div>
		</div>
	)
};

export default Home;
