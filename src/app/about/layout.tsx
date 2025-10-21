import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Project NexTech",
  description: "Project NexTech is a student-led nonprofit organization dedicated to effective and free STEM education for all students powered by high school and college students from across southern California that currently works with the San Diego Branch Library system, the San Diego Bengali Association (Saikat), the Poway Unified School District",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
