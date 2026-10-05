import { Outfit } from "next/font/google";
import { Toaster } from "react-hot-toast";
import StoreProvider from "@/app/StoreProvider";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
    title: "Morrow & Co. — Objects with a point of view",
    description: "A considered marketplace for modern essentials.",
    applicationName: "Morrow & Co.",
    icons: {
        icon: "/icon.svg",
    },
    openGraph: {
        title: "Morrow & Co. — Objects with a point of view",
        description: "A considered marketplace for modern essentials.",
        siteName: "Morrow & Co.",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Morrow & Co. — Objects with a point of view",
        description: "A considered marketplace for modern essentials.",
    },
};

export const viewport = {
    themeColor: "#7c332f",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${outfit.className} antialiased site-shell`}>
                <StoreProvider>
                    <Toaster />
                    {children}
                </StoreProvider>
            </body>
        </html>
    );
}
