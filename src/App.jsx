import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import AddToDo from "./components/addToDo/AddToDo";
import ToDoList from "./components/todoList/ToDoList";
import { Container } from "react-bootstrap";
import Main from "./components/main/Main";

const data = [
	{
		id: 1,
		img: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/ff332ca3-44cb-459a-93f3-9d7e33921cb0/600x900",
		name: "Развод",
		nameG: "Комедии",
	},
	{
		id: 2,
		img: "https://upload.wikimedia.org/wikipedia/ru/0/06/%D0%96%D0%B5%D0%BD%D0%B8%D1%85_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpeg",
		name: "Жених",
		nameG: "Комедии",
	},
	{
		id: 3,
		img: "https://афишашатура.рф/wp-content/uploads/%D0%9A%D0%BE%D0%BC%D0%B5%D0%B4%D0%B8%D1%8F-%D0%9D%D0%B5%D0%BF%D0%BE%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE-%D0%9A%D0%B0%D1%85%D0%B0-%D0%94%D1%80%D1%83%D0%B3%D0%BE%D0%B9-%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-683x1024.jpg",
		name: "Каха",
		nameG: "Комедии",
	},
	{
		id: 4,
		img: "https://s2.vcdn.biz/static/f/2353353491/image.jpg/pt/r386x544x4",
		name: "Слезы Стали",
		nameG: "Фантастика",
	},
	{
		id: 5,
		img: "https://upload.wikimedia.org/wikipedia/ru/4/4b/Avatar-2009.jpg",
		name: "Аватар",
		nameG: "Фантастика",
	},
	{
		id: 6,
		img: "https://kinobar.vip/uploads/posts/2023-11/1700492974_5.jpg",
		name: "Монарх",
		nameG: "Фантастика",
	},
	{
		id: 7,
		img: "https://s4.afisha.ru/mediastorage/55/f5/5916b0018a6e4e868e98b971f555.jpg",
		name: "Крушение",
		nameG: "Боевики",
	},
	{
		id: 8,
		img: "https://s5.vcdn.biz/static/f/825356211/image-movie-big.jpg",
		name: "Ниндзя",
		nameG: "Боевики",
	},
	{
		id: 9,
		img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/5c775217-8796-4c7a-aba8-e4c6d48a6c36/600x900",
		name: "Переводчик",
		nameG: "Боевики",
	},
	{
		id: 10,
		img: "https://thumbs.dfs.ivi.ru/storage23/contents/2/e/3a01f020f56e2b954c3ab556487c24.jpg",
		name: "Синистер",
		nameG: "Ужасы",
	},
	{
		id: 11,
		img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/90b989a2-7cc2-4572-8840-beb85d4878c3/600x900",
		name: "Сиджин",
		nameG: "Ужасы",
	},
	{
		id: 12,
		img: "https://www.kino-teatr.ru/movie/posters/big/4/150844.jpg",
		name: "Ведьма",
		nameG: "Ужасы",
	},
	{
		id: 13,
		img: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/36d65f41-d8e7-471d-bd90-c72bb3f6ae99/600x900",
		name: "Дороро",
		nameG: "Аниме",
	},
	{
		id: 14,
		img: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/42a96d55-d514-433a-a102-dca295d8e64e/600x900",
		name: "Судзумэ",
		nameG: "Аниме",
	},
	{
		id: 15,
		img: "https://thumbs.dfs.ivi.ru/storage6/contents/f/c/939f030cfce103ac27002721a8889c.jpg",
		name: "Трох",
		nameG: "Аниме",
	},
];

function App() {
	const [todo, setTodo] = useState(data);

	return (
		<Container>
			<Header />
			<AddToDo todo={todo} setTodo={setTodo} />
			<Main  todo={todo}/>
			<ToDoList todo={todo} setTodo={setTodo} />
		</Container>
	);
}

export default App;
