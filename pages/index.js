import Container from "../components/Container";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Working from "../components/Working";
import Features from "../components/Features";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero />
      <Working />
      <Features />
      <NewsLetter />
      <Footer />
    </Container>
  );
}
