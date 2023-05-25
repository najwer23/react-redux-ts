import { FigureProps } from "../../types";
import { FC } from "react";

const Figure: FC<FigureProps> = ({dimensions}) => {
	if (dimensions.type === "ellipse") {
		return (
			<>
				<Ellipse dimensions={dimensions} />
				<BBEllipse dimensions={dimensions} />
			</>
		);
	}

	if (dimensions.type === "rectangle") {
		return (
			<>
				<Rect dimensions={dimensions} />
				<BBRect dimensions={dimensions} />
			</>
		);
	}

	//todo another one
	return <></>
}

export default Figure;

// workaround for outline which doesnt work on firefox
const BBRect: FC<FigureProps> = ({dimensions}) => {
	const dimProps = dimensions;

	const rA = dimProps.rotation * (Math.PI / 180)
	const h = dimProps.height;
	const w = dimProps.width;
	const cosA = Math.abs(Math.cos(rA));
  const sinA = Math.abs(Math.sin(rA));

	const bbH = w * sinA + h * cosA;
  const bbW = w * cosA + h * sinA;

  let bbX = dimProps.x - (bbW) /2
  let bbY = dimProps.y - (bbH) /2

	let dim = {
		x: bbX,
		y: bbY,
		width: bbW,
		height: bbH,
	}

	return (
			<>
				<g style={{ outline: "1px solid green", outlineOffset: "0px" }}>
					<rect
						x={dim.x}
						y={dim.y}
						width={dim.width}
						height={dim.height}
						// transform={transform}
						stroke='black'
						stroke-width='1'
						fill='transparent'
					/>
				</g>
			</>
		)
}



// workaround for outline which doesnt work on firefox
const BBEllipse: FC<FigureProps> = ({dimensions}) => {
	const dimProps = dimensions;

	let centerX = dimProps.x;
	let centerY = dimProps.y;
	let radiusX = dimProps.width/2;
	let radiusY = dimProps.height/2;
	let degrees = dimProps.rotation;

	let radians = degrees * (Math.PI / 180);
	let radians90 = radians + Math.PI / 2;
	let ux = radiusX * Math.cos(radians);
	let uy = radiusX * Math.sin(radians);
	let vx = radiusY * Math.cos(radians90);
	let vy = radiusY * Math.sin(radians90);

	let width = Math.sqrt(ux * ux + vx * vx) * 2;
	let height = Math.sqrt(uy * uy + vy * vy) * 2;
	let x = centerX - (width / 2);
	let y = centerY - (height / 2);

	let dim = {
		x: x,
		y: y,
		width: width,
		height: height,
	}

	return (
			<>
				<g style={{ outline: "1px solid green", outlineOffset: "0px" }}>
					<rect
						x={dim.x}
						y={dim.y}
						width={dim.width}
						height={dim.height}
						// transform={transform}
						stroke='black'
						stroke-width='1'
						fill='transparent'
					/>
				</g>
			</>
		)
}





const Rect: FC<FigureProps> = ({dimensions}) => {
	const dim = dimensions;
	const transform = `translate(-${dim.width/2}, -${dim.height/2}) rotate(${dim.rotation}, ${dim.x + dim.width/2}, ${dim.y + dim.height/2})`

		return (
			<>
				<g >
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

const Ellipse: FC<FigureProps> = ({dimensions}) => {
	let dim = dimensions;
	const transform = `rotate(${dim.rotation}, ${dim.x}, ${dim.y})`

	return (
		<>
			<g>
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