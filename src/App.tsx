import "./App.css";
import CardHeroContainer from "./components/CardHeroContainer/CardHeroContainer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title.tsx";
import ActionCard from "./components/ActionCard/ActionCard.tsx";
import SearchSection from "./components/SearchSection/SearchSection.tsx";
import ApartmentCard from "./components/ApartmentCard/ApartmentCard.tsx";
import Footer from "./components/Footer/Footer.tsx";
import PropertiesSection from "./components/PropertiesSection/PropertiesSection.tsx";

const linksNav = [
  { name: "Home", to: "#" },
  { name: "About", to: "#" },
  { name: "Service", to: "#" },
  { name: "New Property", to: "#" },
  { name: "Contact", to: "#" },
];

import {
  cards,
  actionCards,
  ApartmentCards,
  FooterItems,
  PropertiesFilter,
} from "../data.tsx";

function App() {
  return (
    <>
      <Navbar
        logo="/assets/imgs/logo.png"
        links={linksNav}
        bttn="Login"
      ></Navbar>

      <Hero
        title="Discover a place
        you will love to live"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Imperdiet tempus felis vitae sit est quisque."
      >
        <CardHeroContainer cards={cards}></CardHeroContainer>
      </Hero>

      <section className="section">
        <Title
          title="How it Works"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
        ></Title>
        <div className="actionCardContainer">
          {actionCards.map((item, index) => (
            <ActionCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              className={item.className}
            ></ActionCard>
          ))}
        </div>
      </section>

      <section>
        <SearchSection
          title="Find Dream Home"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
        ></SearchSection>
      </section>

      <section className="section">
        <Title
          title="Most Trending"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
        ></Title>
        <div className="apartmentCardSection">
          {ApartmentCards.map((item, index) => (
            <ApartmentCard
              key={index}
              image={item.image}
              price={item.price}
              title={item.title}
              location={item.location}
            ></ApartmentCard>
          ))}
        </div>
      </section>

      <section className="section">
        <Title
          title="Best Real Estate Deals"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
        ></Title>
        <PropertiesSection
          propertiesData={PropertiesFilter}
        ></PropertiesSection>
      </section>

      <footer>
        <Footer
          logo={FooterItems.logo}
          description={FooterItems.description}
          columns={FooterItems.columns}
          bottomLeft={FooterItems.bottomLeft}
          bottomRight={FooterItems.bottomRight}
        ></Footer>
      </footer>
    </>
  );
}

export default App;
