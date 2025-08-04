import type { AppLogo, StoreLinks } from "./types";

export const appInfo = {
	title: "Kuiskuensi",
	description:
		"Aplikasi gamifikasi Duolingo-style untuk membantu ibu dan calon ibu salihah mengasah kebijaksanaan dalam mengasuh dan mendidik buah hati.",
	logo: {
		type: "image" as AppLogo["type"],
		src: "favicon.webp",
	},
	storeLinks: {
		apple: "#",
		google: "https://play.google.com/store/apps/details?id=com.naandalist.kuiskuensi",
	} as StoreLinks,
};
