import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import Header from "@/components/general/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Tela |  Ruppells Solutions",
    description: "Tela",
    image: ["/og.png"],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <StyledComponentsRegistry>
                <body className={inter.className}>
                    <Header />
                    {children}
                </body>
            </StyledComponentsRegistry>
        </html>
    );
}
