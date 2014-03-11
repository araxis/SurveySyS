declare module server {
	interface Question {
		Id: number;
		Title: string;
		Description: string;
		ImagePath: string;
		Choices: server.Choice[];
	}
	interface Choice {
		Id: number;
		Title: string;
		QuestionId: number;
		Question: server.Question;
	}
}
