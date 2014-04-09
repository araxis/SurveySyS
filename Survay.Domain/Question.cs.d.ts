declare module server {
	interface Question {
		id: number;
		title: string;
		description: string;
		imagePath: string;
		choices: server.Choice[];
	}
	interface Choice {
		id: number;
		title: string;
		questionId: number;
		question: server.Question;
	}
}
