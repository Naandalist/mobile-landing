import type { AppLogo, StoreLinks } from "./types";

export const appInfo = {
	title: "Kuiskuensi",
	description:
		"Asah Pertimbangan Bijak Ibu Salihah untuk Mendidik Buah Hati",
	logo: {
		type: "image" as AppLogo["type"],
		src: "favicon.webp",
	},
	storeLinks: {
		apple: "#",
		google: "https://play.google.com/store/apps/details?id=com.naandalist.kuiskuensi",
	} as StoreLinks,
};
