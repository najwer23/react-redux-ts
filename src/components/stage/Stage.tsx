import { useState, useEffect, useRef } from "react";
import "./Stage.css";
import Input from "../inputs/Input";
import Button from "../buttons/Button";
import { useAppSelector, useAppDispatch } from "../../hooks";
import * as StageSlice from "../../features/stage/StageSlice";

function Stage() {
	const projects = useAppSelector((state: any) => state.stage.projects);
	const status = useAppSelector((state: any) => state.stage.status);
	const projectId = useRef<HTMLInputElement>(null)
	const dispatch = useAppDispatch();

	function handleSubmit(e: any) {
		e.preventDefault()
		dispatch(StageSlice.getProject(projectId.current!.value));
	}

	console.log(projects)
	console.log(status)

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
				projects &&
				(
					<div className='container-stage'>
						Name: {projects.project.name} <br />
						ID: {projects.project.id}
					</div>
				)
			}

		</div>
	</>
  )
}

export default Stage;