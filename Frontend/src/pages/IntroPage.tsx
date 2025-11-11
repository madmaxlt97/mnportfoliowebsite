import Header from "../components/Header";
import "../styles/IntroPage.css";
import IntroPageScreen from "../assets/IntroPageScreen.png";

export default function IntroPage() {
  return (
    <>
      <Header />
      <main>
        <h1>Hi, I'm Max Nikolajev</h1>
        <p className="intro-text">
          I'm junior Web Developer. Here You can see my works, experiences and
          contacts.
        </p>
        <div className="img-container">
          <img src={IntroPageScreen} alt="screen" />
        </div>
      </main>
    </>
  );
}
