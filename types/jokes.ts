interface JokeFlags {
	explicit: boolean;
	nsfw: boolean;
	political: boolean;
	racist: boolean;
	religious: boolean;
	sexist: boolean;
}

export interface Joke {
	id: number;
	category: string;
	type: "single" | "twopart";
	joke?: string;
	setup?: string;
	delivery?: string;
	lang: string;
	safe: boolean;
	error: boolean;
	flags: JokeFlags;
}
