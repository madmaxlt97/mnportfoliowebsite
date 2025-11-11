export default function Contacts() {
  return (
    <div className="contacts">
      <h2>Have a question? Feel free to contact me on my social media!</h2>
      <p>
        <i className="fa-solid fa-envelope fa-xl"></i>:
        nikolajevmax.workspace@gmail.com
      </p>
      <div className="socials">
        <a href="https://github.com/madmaxlt97" target="_blank">
          <i className="fa-brands fa-github fa-xl icon"></i>Github
        </a>

        <a
          href="https://www.linkedin.com/in/maksim-nikolajev-workspace"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin fa-xl icon"></i>LinkedIn
        </a>

        <a href="https://www.instagram.com/max.nikolajev/" target="_blank">
          <i className="fa-brands fa-instagram fa-xl icon"></i>Instagram
        </a>

        <a href="https://www.facebook.com/max.nikolajev/" target="_blank">
          <i className="fa-brands fa-facebook fa-xl icon"></i>Facebook
        </a>
      </div>
    </div>
  );
}
