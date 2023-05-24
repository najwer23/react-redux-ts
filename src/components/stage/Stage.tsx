import { useState, useEffect, useRef } from "react";
import "./Stage.css";
import Input from "../inputs/Input";
import Button from "../buttons/Button";
import { useAppSelector, useAppDispatch } from "../../hooks";
import * as StageSlice from "../../features/stage/StageSlice";

function Stage() {
	const stageData = useAppSelector((state: any) => state.stage.data);
	const stageDataStatus = useAppSelector((state: any) => state.stage.status);
	const projectId = useRef<HTMLInputElement>(null)
	const dispatch = useAppDispatch();

	function handleSubmit(e: any) {
		e.preventDefault()
		dispatch(StageSlice.getProject(projectId.current!.value));
	}

	console.log(stageData)
	console.log(stageDataStatus)

  return (
	<>
		<div className='container'>

			<form onSubmit={handleSubmit} className="container-stage-form">
				<Input
					innerRef={projectId}
					id={"projectId"}
					label={"Project ID"}
					type="text"
				/>

				<Button text={"Fetch"} />
			</form>

			<hr />

			{
				stageData &&
				(
					<div className='container-stage'>
						Name: {stageData.project.name} <br />
						ID: {stageData.project.id}
					</div>
				)
			}

		</div>
	</>
  )
}

export default Stage;