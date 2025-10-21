import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contribute | Project NexTech",
  description: "Contribute to Project NexTech",
};

export default function ContributeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
