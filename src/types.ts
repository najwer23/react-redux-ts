export interface InitData {
	id: string;
	name: string;
	modified: number;
}

export interface Item {
	id: string;
	type: 'rectangle' | 'ellipse';
	color: string;
	rotation: number;
	x: number;
	y: number;
	width: number;
	height: number;
}

export interface Project {
	id: string;
	name: string;
	width: number;
	height: number;
	items: Item[]
}

export interface Projects {
	id: string;
	project: Project;
}

export interface ErrorMsg {
	error?: number;
	message?: string;
}

export interface FigureProps {
	dimensions: Item;
	key?: any;
}
