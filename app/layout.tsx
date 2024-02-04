import React from "react";
import SomeLayout from "./some-layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <SomeLayout>{children}</SomeLayout>
      </body>
    </html>
  );
}
