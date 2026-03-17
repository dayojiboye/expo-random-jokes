import { JokeCategories } from "@/enums/jokes";
import { getErrorMessage } from "@/lib/utils";
import { Joke } from "@/types/jokes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useToast } from "heroui-native";

export default function useFetchJoke(category: JokeCategories) {
	const { toast } = useToast();

	return useQuery({
		queryKey: ["get_joke", category],
		queryFn: async function (): Promise<Joke> {
			try {
				const response = await axios.get(
					`https://v2.jokeapi.dev/joke/${category.toLowerCase()}?blacklistFlags=nsfw,sexist,racist,political,religious,explicit`,
				);
				return response.data;
			} catch (error) {
				toast.show({ variant: "danger", label: getErrorMessage(error) });
				throw error;
			}
		},
		enabled: !!category,
	});
}
