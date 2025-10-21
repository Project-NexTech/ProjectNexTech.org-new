import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs | Project NexTech",
  description: "Upcoming Project NexTech programs are listed on this page",
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
