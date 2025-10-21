import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join | Project NexTech",
  description: "Interested? Volunteer with us by clicking here to join!",
};

export default function JoinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
