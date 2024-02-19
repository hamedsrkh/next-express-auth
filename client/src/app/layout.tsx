import type {Metadata} from "next";
import type {ReactNode} from "react";
import MuiProvider from "@/providers/mui";
import Header from "@/components/global/Header";

export const metadata: Metadata = {
    title: "Next Mui Chat app",
    description: "",
};

export default function RootLayout({children}: Readonly<{ children: ReactNode; }>) {
    return (
        <html lang="en">
        <MuiProvider>
            <body>
            <Header/>
            <main>
                {children}
            </main>
            </body>
        </MuiProvider>
        </html>
    );
}
