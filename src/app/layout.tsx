import type { Metadata } from "next";
import "./globals.css";

import { WorkoutProvider } from "@/context/WorkoutContext";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "FitLog",
  description: "Workout Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <WorkoutProvider>
          <Navbar />

          {children}
          <Footer></Footer>
        </WorkoutProvider>
      </body>
    </html>
  );
}