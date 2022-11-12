import Header from "./Header";

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <Header/>
        {children}</body>
    </html>
  )
}
