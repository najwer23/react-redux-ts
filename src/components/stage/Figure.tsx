export default function Figure(props: any) {

	if (props.dimensions.type === "ellipse") {
		return (
			<>
				<Ellipse dimensions={props.dimensions} />
			</>
		);
	}

	if (props.dimensions.type === "rectangle") {
		return (
			<>
				<Rect dimensions={props.dimensions} />
			</>
		);
	}

	//todo another one

	return <></>
}


function Rect(props: any) {
	let dim = props.dimensions;
	const transform = `translate(-${dim.width/2}, -${dim.height/2}) rotate(${dim.rotation}, ${dim.x + dim.width/2}, ${dim.y + dim.height/2})`

		return (
			<>
				<g style={{ outline: "1px solid red", outlineOffset: "0px" }}>
					<rect
						x={dim.x}
						y={dim.y}
						width={dim.width}
						height={dim.height}
						transform={transform}
						fill={dim.color}
					/>
					<circle
						cx={dim.x}
						cy={dim.y}
						r="4"
						fill="red"
					>
					</circle>
					<text
						x={dim.x + 5}
						y={dim.y}
						fill="black"
					>
						<tspan>{dim.rotation}°</tspan>
					</text>
				</g>
			</>
		)
}

function Ellipse(props: any) {
	let dim = props.dimensions;
	const transform = `rotate(${dim.rotation}, ${dim.x}, ${dim.y})`

	return (
		<>
			<g style={{ outline: "1px solid red", outlineOffset: "0px" }}>
					<ellipse
						cx={dim.x}
						cy={dim.y}
						rx={dim.width/2}
						ry={dim.height/2}
						transform={transform}
						fill={dim.color}
					/>
					<circle
						cx={dim.x}
						cy={dim.y}
						r="4"
						fill="red"
					>
					</circle>
					<text
						x={dim.x + 5}
						y={dim.y}
						fill="black"
					>
						<tspan>{dim.rotation}°</tspan>
					</text>
				</g>
		</>
	)
}