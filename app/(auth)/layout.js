import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";

export const metadata = {
    title: "AUTH",
    description: "Iniciar sesión para poder usar la app",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <ClerkProvider>
            <html lang="en" className="h-full">
                <body
                    className={`${inter.className} flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white`}
                >
                    <div className="relative w-full max-w-md p-6 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20">
                        <div className="absolute -top-6 -right-6 h-12 w-12 rounded-full bg-pink-500/70 blur-lg animate-pulse"></div>
                        <div className="absolute -bottom-6 -left-6 h-16 w-16 rounded-full bg-indigo-500/50 blur-lg animate-pulse"></div>
                        <div className="relative z-10">{children}</div>
                    </div>
                </body>
            </html>
        </ClerkProvider>
    );
}
