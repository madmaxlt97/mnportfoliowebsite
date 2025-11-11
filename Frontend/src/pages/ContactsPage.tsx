import Contacts from "../components/ContactPageComps/Contacts";
import Header from "../components/Header";
import "../styles/Contacts.css";

export default function ContactsPage() {
  return (
    <>
      <Header />
      <main className="contacts-page-main">
        <Contacts />
      </main>
    </>
  );
}
