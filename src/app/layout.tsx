import { ReactNode } from "react";
import { Comfortaa as FontHeader, Montserrat as FontBody } from "next/font/google";

import { cn } from "@/utils";
import { env } from "@/lib/env";

import { ThemeProvider } from "@/components/providers/theme-provider";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
	title: {
		template: "%s | NextJS Starter Template",
		default: "NextJS Starter Template",
	},
	description: "Template to get started with Next.js, Tailwind CSS and shadcn/ui.",
	metadataBase: new URL(env.NEXT_PUBLIC_SERVER_URL),
	openGraph: {
		images: "/favicon.svg",
	},
};

const fontHeader = FontHeader({ subsets: ["latin"], variable: "--font-header" });
const fontBody = FontBody({ subsets: ["latin"], variable: "--font-body" });

const RootLayout = async ({ children }: Readonly<{ children: ReactNode }>) => {
	return (
		<html lang="en" suppressHydrationWarning className={cn(fontHeader.variable, fontBody.variable)}>
			<head>
				<link href="/favicon.svg" rel="icon" type="image/svg+xml" />
			</head>

			<body className="font-body flex h-screen flex-col">
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
					<header>
						<Header />
					</header>

					<main>{children}</main>

					<footer className="mt-auto">
						<Footer />
					</footer>
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
