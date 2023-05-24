import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	initData: null,
	data: null,
	status: "idle",
	error: null
};

export const StageSlice = createSlice({
	name: "stage",
	initialState,
	reducers: {
		setInitState: (state, action) => {
			state.initData = action.payload
			state.status = "init"
		},
		setProjectState: (state, action) => {
			state.data = action.payload
			state.status = "project"
		},
		setErrorState: (state, action) => {
			state.error = action.payload
			state.status = "error"
		},
	}
});

export const getProject = (projectId?: any) => async (dispatch: any) => {
	try {

		let URL, res, data;

		if (projectId == "") {
			URL = "https://recruitment01.vercel.app/api/init";
			res = await fetch(URL)
			data = await res.json();
			dispatch(setInitState(data))
			projectId = data.id;
		}

		URL = "https://recruitment01.vercel.app/api/project/" + projectId;
		res = await fetch(URL)
		data = await res.json();

		if (data.error) {
			dispatch(setErrorState(data))
		} else {
			//todo dane mogą być błędne, wysokosc ujemna
			dispatch(setProjectState(data))
		}

	} catch (err: any) {
		throw new Error(err);
	}
};


export const { setInitState, setProjectState, setErrorState } = StageSlice.actions;
export default StageSlice.reducer;


// https://codesandbox.io/s/yjdwp?file=/src/App.js:231-235