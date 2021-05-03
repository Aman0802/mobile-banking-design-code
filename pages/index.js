import Container from "../components/Container";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Working from "../components/Working";
import Footer from "../components/Footer";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero />
      <Working />
      <Footer />
    </Container>
  );
}
