import { CategoriesDropdown } from "@/components/categories-dropdown";
import { Joke } from "@/components/joke";
import { ThemeToggler } from "@/components/theme-toggler";
import { CategoryOptions } from "@/constants/category-options";
import { JokeCategories } from "@/enums/jokes";
import useFetchJoke from "@/hooks/use-fetch-joke";
import { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
	const [category, setCategory] = useState<{ label: string; value: JokeCategories }>(
		CategoryOptions[0],
	);

	const { data, status, isRefetching, refetch } = useFetchJoke(category.value);

	useEffect(() => {
		refetch();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [category]);

	function renderData() {
		switch (status) {
			case "pending":
				return <ActivityIndicator className="h-[400px] items-center justify-center" />;

			case "error":
				return isRefetching ? (
					<ActivityIndicator className="h-[400px] items-center justify-center" />
				) : (
					<View className="flex-row gap-1 h-[400px] items-center justify-center">
						<Text className="text-left text-base">Failed to load!</Text>
						<Pressable onPress={() => refetch()}>
							<Text className="text-accent text-base font-medium">Try again</Text>
						</Pressable>
					</View>
				);

			case "success":
				return (
					<Joke
						joke={data.type === "twopart" ? data.setup + " " + data.delivery : data.joke || ""}
						onGetMoreJokes={() => refetch()}
					/>
				);

			default:
				return null;
		}
	}

	return (
		<View className="flex-1 bg-surface">
			<ScrollView
				className="flex-1 pt-safe-offset-0 relative"
				contentContainerClassName="grow py-6 px-4"
			>
				<CategoriesDropdown category={category} setCategory={setCategory} />
				{renderData()}
			</ScrollView>
			<ThemeToggler />
		</View>
	);
}
