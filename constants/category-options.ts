import { JokeCategories } from "@/enums/jokes";

export const CategoryOptions = Object.values(JokeCategories).map((category) => ({
	label: category,
	value: category,
}));
