import Container from "components/Container";
import Header from "components/Header";
import Footer from "components/Footer";
import Main from "components/Main";

export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
}
