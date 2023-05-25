import { useState, useEffect, useRef } from "react";
import "./Stage.css";
import Input from "../inputs/Input";
import Button from "../buttons/Button";
import Figure from "./Figure"
import { useAppSelector, useAppDispatch } from "../../hooks";
import * as StageSlice from "../../features/stage/StageSlice";

function Stage() {
	const projects = useAppSelector((state: any) => state.stage.projects);
	const status = useAppSelector((state: any) => state.stage.status);
	const projectId = useRef<HTMLInputElement>(null)
	const dispatch = useAppDispatch();
	let cssCanvas = {}
	let viewBox;

	function handleSubmit(e: any) {
		e.preventDefault()
		dispatch(StageSlice.getProject(projectId.current!.value));
	}

	if (status === "project") {
		cssCanvas = {
			aspectRatio: (projects.project.width) / (projects.project.height),
			margin: "auto",
			backgroundColor: "#efefef",
			border: "1px dashed #aaa",
			maxWidth: "100%"
		}

		viewBox = `0 0 ${projects.project.width} ${projects.project.height}`
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
				status === "project" &&
				(
					<div className='container-stage'>
						Name: {projects.project.name} <br />
						ID: {projects.project.id}
					</div>
				)
			}


			{
				status === "project" &&
				(
					<div className="container-stage-canvas" style={cssCanvas}>

						<svg
							width="100%"
							height="100%"
							preserveAspectRatio="xMidYMid meet"
							>

							<svg
								width="100%"
								height="100%"
								viewBox={viewBox}
							>
								{
									projects.project.items.map((item: any) => {
										return (
											<>
												<Figure dimensions={item} />
											</>
											)
									})
								}
							</svg>
						</svg>
					</div>
				)
			}

		</div>
	</>
  )
}

export default Stage;