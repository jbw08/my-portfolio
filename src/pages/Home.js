import CentreStage from "../components/CentreStage";
import WelcomeStatement from "../components/WelcomeStatement";
import Background from "../components/Background";
import ServiceList from "../components/ServiceList";
import ContactButton from "../components/ContactButton";
const Home = () => {
  return (
  <>
    <WelcomeStatement />
    <Background />
    <CentreStage />
    <ServiceList />
    <ContactButton />
  </>
  );
};

export default Home;