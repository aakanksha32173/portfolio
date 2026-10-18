import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { links, profile, publications } from "../data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${profile.name} | Software, AI/ML & Systems Security Engineer`;
const description =
  "CS graduate student at Purdue University Northwest building eBPF/XDP network security, applied AI, backend automation, and GPU-accelerated digital twins. Open to full-time roles from January 2027.";

export const metadata: Metadata = {
  title: { default: title, template: `%s | ${profile.name}` },
  description,
  authors: [{ name: profile.name }],
  keywords: [
    "Aakanksha Trivedi",
    "software engineer",
    "AI/ML engineer",
    "eBPF",
    "XDP",
    "network security",
    "intrusion detection",
    "Purdue University Northwest",
  ],
  openGraph: {
    type: "profile",
    title,
    description,
    siteName: profile.name,
    locale: "en_US",
  },
  twitter: { card: "summary", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0e16",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.roles.join(", "),
  email: `mailto:${links.email}`,
  affiliation: { "@type": "CollegeOrUniversity", name: profile.school },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Institute of Engineering & Technology, Devi Ahilya University" },
  sameAs: [links.github, links.linkedin],
  knowsAbout: ["eBPF", "XDP", "Network Security", "Machine Learning", "Linux Kernel", "Digital Twins", "RAG"],
  subjectOf: publications.map((p) => ({
    "@type": "ScholarlyArticle",
    name: p.title,
    url: p.url,
    sameAs: `https://doi.org/${p.doi}`,
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
