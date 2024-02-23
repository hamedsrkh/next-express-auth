import type {Metadata} from "next";
import type {ReactNode} from "react";
import MuiProvider from "@/providers/MuiProvider";
import Header from "@/components/global/Header";
import AuthProvider from "@/providers/AuthProvider";

export const metadata: Metadata = {
    title: "Next Mui Chat app",
    description: "",
};

export default function RootLayout({children}: Readonly<{ children: ReactNode; }>) {
    return (
        <html lang="en">
        <AuthProvider>
            <MuiProvider>
                <body>
                <Header/>
                <main>
                    {children}
                </main>
                </body>
            </MuiProvider>
        </AuthProvider>
        </html>
    );
}
