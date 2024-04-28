import { Hedvig_Letters_Sans } from "next/font/google";
import { ThemeProvider } from "@/providers/theme";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { QueryProvider } from "@/providers/query";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/navbar";
import Script from "next/script";
import Footer from "@/components/footer";
import { AuthProvider } from "@/providers/auth";

const inter = Hedvig_Letters_Sans({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
	fallback: ["sans-serif"],
	preload: true,
});

export const metadata: Metadata = {
	title: {
		default: "Doc Disc",
		template: "%s | Doc Disc",
	},
	description: "A chat app to chat with your documents",
	applicationName: "Doc Disc",
	icons: [
		{
			rel: "icon",
			type: "image/png",
			href: "/favicon-16x16.png",
			sizes: "16x16",
			url: "/favicon-32x32.png",
		},
	],
};

export const viewport: Viewport = {
	themeColor: "#FFFFFF",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className="no-scrollbar"
		>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					enableColorScheme
				>
					<QueryProvider>
						<AuthProvider>
							<Navbar />
							{children}
							<Footer />
						</AuthProvider>
					</QueryProvider>
				</ThemeProvider>
				<Toaster />
				<Script src="/js/nav.js" />
			</body>
		</html>
	);
}
