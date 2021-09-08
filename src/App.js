import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  const [categories, setCategories] = useState([
    {
      name: "portfolio",
      description:
        "Projects that I have completed",
    },
    { name: "resume", description: "Resume of past work" },
    
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        setCategories={setCategories}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            
            <About></About>
            <Portfolio currentCategory={currentCategory}></Portfolio>
          </>
        ) : (
          <ContactForm></ContactForm>
          
        )}
      </main>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
