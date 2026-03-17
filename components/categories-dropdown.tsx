import { CategoryOptions } from "@/constants/category-options";
import { JokeCategories } from "@/enums/jokes";
import { cn, Select } from "heroui-native";
import { View } from "react-native";

interface CategoriesDropdownProps {
	category: { label: string; value: JokeCategories };
	setCategory: React.Dispatch<
		React.SetStateAction<{
			label: string;
			value: JokeCategories;
		}>
	>;
}

export function CategoriesDropdown({ category, setCategory }: CategoriesDropdownProps) {
	return (
		<Select
			value={category}
			onValueChange={(val) => {
				if (val)
					setCategory({
						label: val.label,
						value: val.value as JokeCategories,
					});
			}}
		>
			<Select.Trigger className="rounded-none shadow-none border border-border">
				<Select.Value placeholder="Choose an option" className="capitalize" />
				<Select.TriggerIndicator />
			</Select.Trigger>
			<Select.Portal>
				<Select.Overlay />
				<Select.Content presentation="popover" width="trigger" className="rounded-none">
					{CategoryOptions.map((c) => (
						<Select.Item key={c.value} value={c.value} label={c.label} className="py-2 px-1">
							{({ isSelected }) => (
								<>
									<View className="rounded-full size-4 shrink-0 border border-border items-center justify-center">
										<View
											className={cn("rounded-full size-2.5 shrink-0 bg-accent hidden", {
												flex: isSelected,
											})}
										/>
									</View>
									<Select.ItemLabel className="capitalize font-normal" />
								</>
							)}
						</Select.Item>
					))}
				</Select.Content>
			</Select.Portal>
		</Select>
	);
}
