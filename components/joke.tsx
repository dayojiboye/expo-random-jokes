import { Button, cn } from "heroui-native";
import { Text, View } from "react-native";

interface JokeProps {
	joke: string;
	onGetMoreJokes: () => void;
}

export function Joke({ joke, onGetMoreJokes }: JokeProps) {
	return (
		<View className="min-h-[400px] mt-4 justify-center items-center">
			<View className="w-[90%] max-w-[500px] relative">
				<View
					className={cn(
						"rounded-tl-md rounded-tr-md h-[18px] w-[95%] bg-surface border border-b-[0] border-b-[none] border-border",
						"absolute -top-[10px] left-1/2 -translate-x-1/2 z-1",
					)}
				/>
				<View className="w-full p-4 rounded-md border border-border relative z-2 bg-surface min-h-[200px] items-center justify-center gap-6">
					<Text className="text-base text-center">{joke}</Text>
					<Button
						onPress={onGetMoreJokes}
						className="rounded-none bg-primary w-[150px]"
						animation={{
							scale: { value: 0.97 },
							highlight: {
								backgroundColor: { value: "var(--primary)" },
							},
						}}
					>
						Get new joke
					</Button>
				</View>
			</View>
		</View>
	);
}
