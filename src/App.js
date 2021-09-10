import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";




function App() {
  const [categories, setCategories] = useState([
    {
      name: "portfolio",
      description:
        "Projects that I have completed",
    },
    { name: "resume", description: "Resume of past work" },
    { name: "about", description: "about me fool" },
    { name: "contact", description: "contact me" },

    
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[2]);

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
        
        {/* {console.log({currentCategory})} */}
        
        {currentCategory.name === "portfolio" && (
          <Portfolio currentCategory={currentCategory}/>
        )}
        {currentCategory.name === "about" && <About/>}
        {currentCategory.name === 'contact' && <ContactForm/>}
       { currentCategory.name === 'resume' && <Resume/> }
        
      </main>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
