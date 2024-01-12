import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./styles/globals.css";
import { Wrapper } from "./components/Wrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="any"
          href="https://prismic.io/favicon.ico"
        />
      </head>
      <body>
        <Wrapper>
          {children}
          <PrismicPreview repositoryName={repositoryName} />
        </Wrapper>
      </body>
    </html>
  );
}
