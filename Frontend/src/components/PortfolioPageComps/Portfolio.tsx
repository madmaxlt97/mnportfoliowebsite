import landing from "../../assets/PortfolioImg/landing.png";
import finmavi from "../../assets/PortfolioImg/finmavi1.png";
import ebs from "../../assets/PortfolioImg/ebs1.png";
import { Link } from "react-router-dom";

const cards = [
  {
    id: 1,
    image: finmavi,
    title: "Finmavi | Typescript, React, Node.js, MongoDB, Express",
    description:
      "Financial investment site where clients can see info, leave their contacts and admin can reach them to provide more info or organize a call.",
    link: "https://github.com/madmaxlt97/quantumcopy",
  },
  {
    id: 2,
    image: landing,
    title: "My first landing page | HTML, CSS",
    description: "My landing page with info about me and contacts.",
    link: "https://mylandingpage-tau.vercel.app/",
  },
  {
    id: 3,
    image: ebs,
    title: "Explore Baltic States | TypeScript, React, CSS",
    description: "Website about Baltic countries",
    link: "https://explorebalticstates.com/",
  },
];

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <img src={card.image} alt="img" />
          <div className="info-block">
            <Link
              to={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              {card.title}
            </Link>

            <p className="card-description">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
