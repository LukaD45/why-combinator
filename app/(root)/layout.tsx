export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="font-work-sans">{children}</main>;
}
