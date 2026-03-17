import { Button } from "heroui-native";
import Icon from "react-native-remix-icon";
import { Uniwind, useUniwind } from "uniwind";

export function ThemeToggler() {
	const { theme } = useUniwind();

	return (
		<Button
			isIconOnly
			variant="secondary"
			className="border-border absolute right-safe-offset-5 bottom-safe-offset-5 shadow-sm"
			size="lg"
			onPress={() => Uniwind.setTheme(theme === "light" ? "dark" : "light")}
		>
			<Icon
				size={24}
				name={theme === "dark" ? "sun-fill" : "moon-fill"}
				color={theme === "dark" ? "gold" : "black"}
			/>
		</Button>
	);
}
