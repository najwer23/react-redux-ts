import { useSelector, useDispatch } from "react-redux";
import * as FetchSlice from "./StageSlice";
import { useState, useEffect } from "react";

export default function FetchTest() {
	const fetchData = useSelector((state) => state.fetch.data);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(FetchSlice.getFetchAsync());
	}, []);

	const addNewData = () => {
		dispatch(FetchSlice.postDataAsync({ userId: 42 }));
	};





	///
	const [testData, setTestData] = useState({});
	useEffect(() => {
		async function testFetch() {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/todos/1"
			);
			const data = await response.json();
			setTestData(data);
		}

		testFetch();
	}, []);
	console.log(24, testData);






	const test2 = [
		{
			a: "1",
			b: "2",
		},
		{
			a: "3",
			b: "4",
		},
		{
			a: "5",
			b: "6",
		},
	];




	const a = <p>12</p>
	return (
		<section>

			{a}

			<p>{fetchData && fetchData.userId}</p>

			<button onClick={addNewData}>Add new!</button>
			<br></br>

			{test2 && test2.map(x=>x.a)}
		</section>
	);
};
