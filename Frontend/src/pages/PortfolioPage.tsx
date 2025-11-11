import Header from "../components/Header";
import Portfolio from "../components/PortfolioPageComps/Portfolio";
import "../styles/Portfolio.css";

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="portfolio-page-main">
        <Portfolio />
      </main>
    </>
  );
}
