"use client";

import { queryClient as RandomJokesQueryClient } from "@/lib/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function ReactQueryProvider({ children }: { children: React.ReactNode }) {
	const [queryClient] = useState(() => RandomJokesQueryClient);

	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
