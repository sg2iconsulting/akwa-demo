import type { Metadata } from "next";
import NavBar from "@/components/maghribOxygen/navbar";
import Footer from "@/components/maghribOxygen/footer";
import { Wraper } from "@/components/animation/Wraper";

export const metadata: Metadata = {
  title: "Maghrib Oxygen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navlinks = [
    { label: "Nous Connaitre" },
    { label: "Applications" },
    { label: "Réseaux" },
    { label: "QHSE" },
    { label: "Actualités" },
  ];
  const footlinks = [
    { label: "Contact" },
    { label: "Conditions d'utilisation" },
    { label: "Politique de Confidentialité" },
    { label: "FAQ" },
  ];
  return (
    <main>
      <Wraper>
        <NavBar Links={navlinks} logo="/maghriboxygen/logo.png" />

        {children}
        <Footer links={footlinks} />
      </Wraper>
    </main>
  );
}
