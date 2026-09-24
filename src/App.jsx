import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home" className="placeholder-section">
          <h1>Home</h1>
        </section>

        <section id="about" className="placeholder-section">
          <h2>About</h2>
        </section>

        <section id="skills" className="placeholder-section">
          <h2>Skills</h2>
        </section>

        <section id="projects" className="placeholder-section">
          <h2>Projects</h2>
        </section>

        <section id="education" className="placeholder-section">
          <h2>Education</h2>
        </section>

        <section id="contact" className="placeholder-section">
          <h2>Contact</h2>
        </section>
      </main>
    </>
  );
}

export default App;