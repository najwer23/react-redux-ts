export default function Figure(props: any) {
	const obj = {
		id: props.dimensions.id,
		type: props.dimensions.type,
		color: props.dimensions.color,
		rotation: props.dimensions.rotation,
		x: props.dimensions.x,
		y: props.dimensions.y,
		width: props.dimensions.width,
		height: props.dimensions.height,
	};

	const transform = `translate(-${obj.width/2}, -${obj.height/2}) rotate(${obj.rotation}, ${obj.x + obj.width/2}, ${obj.y + obj.height/2})`



	if (props.dimensions.type === "ellips2") {
		return (
			<>
				<g style={{ outline: "1px solid red", outlineOffset: "0px" }}>
					<ellipse
						cx={obj.x}
						cy={obj.y}
						rx={obj.x}
						ry={obj.y}
						width={obj.width}
						height={obj.height}
						transform={transform}
						fill={obj.color}
					/>
					<circle
						cx={obj.x}
						cy={obj.y}
						r="4"
						fill="red"
					>
					</circle>
					<text
						x={obj.x + 5}
						y={obj.y}
						fill="black"
					>
						<tspan>{obj.rotation}°</tspan>
					</text>
				</g>
			</>
		);
	}



	if (props.dimensions.type === "rectangle") {
		return (
			<>
				<g style={{ outline: "1px solid red", outlineOffset: "0px" }}>
					<rect
						x={obj.x}
						y={obj.y}
						width={obj.width}
						height={obj.height}
						transform={transform}
						fill={obj.color}
					/>
					<circle
						cx={obj.x}
						cy={obj.y}
						r="4"
						fill="red"
					>
					</circle>
					<text
						x={obj.x + 5}
						y={obj.y}
						fill="black"
					>
						<tspan>{obj.rotation}°</tspan>
					</text>
				</g>
		</>
		);
	}

	return <></>
}