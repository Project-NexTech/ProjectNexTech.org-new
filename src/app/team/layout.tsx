import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Project NexTech",
  description: "Meet some of the talented people leading Project NexTech!",
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
