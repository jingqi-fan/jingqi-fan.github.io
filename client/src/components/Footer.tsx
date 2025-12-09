export default function Footer() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric"
});


  return (
      <footer className="bg-gray-100 text-gray-800 py-7">
        <div className="max-w-7xl mx-auto px-4 base:px-6 lg:px-8">
          <p className="text-center text-base">
            © {currentYear} Jingqi Fan • Last updated {lastUpdated}
          </p>
        </div>
      </footer>
  );
}