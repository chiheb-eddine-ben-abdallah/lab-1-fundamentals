// src/App.jsx
import Greeting from './components/Greeting';
import StatusBadge from './components/StatusBadge';
import StatusBadgeOffline from './components/StatusBadgeOffline';
import UserCard from './components/UserCard';
import Product from './components/Product';
import Card from './components/Card';
import BlogPost from './components/BlogPost';
import MovieList from './components/MovieList';
import Header from './components/Header';
import About from './components/About';
import ProjectShowcase from './components/ProjectShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const movies = [
    { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010, rating: 4.8 },
    { id: 2, title: 'The Matrix', director: 'Wachowskis', year: 1999, rating: 4.7 },
    { id: 3, title: 'Interstellar', director: 'Christopher Nolan', year: 2014, rating: 4.6 },
    { id: 4, title: 'Parasite', director: 'Bong Joon-ho', year: 2019, rating: 4.9 },
  ];

  const projects = [
    {
      id: 1,
      name: 'Neon React Portfolio',
      description: 'Interactive lab project with futuristic neon UI and dark mode.',
      technologies: ['React', 'Vite', 'CSS Neon', 'Composition'],
    },
    {
      id: 2,
      name: 'Cyber Movie Explorer',
      description: 'Dynamic movie grid with animated cards and hover effects.',
      technologies: ['Lists', 'Animations', 'Props'],
    },
    {
      id: 3,
      name: 'Holo Blog Engine',
      description: 'Composable blog posts with glowing author cards.',
      technologies: ['Composition', 'Reusability', 'Neon UI'],
    },
  ];

  return (
    <div>
      {/* Futuristic Header */}
      <Header name="Chiheb" tagline="Cyber React Developer – Neon Grid 2026" />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
        {/* Lab Showcase Title */}
        <h1 className="neon-title" style={{ textAlign: 'center', margin: '80px 0 60px' }}>
          React Fundamentals Lab – Neon Edition
        </h1>

        {/* Part 1 – JSX & Components */}
        <section className="section" style={{ marginBottom: '120px' }}>
          <h2 style={{ textAlign: 'center', color: 'var(--primary)', marginBottom: '50px' }}>
            Part 1 – JSX & Components
          </h2>

          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <Greeting />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', flexWrap: 'wrap' }}>
            <div>
              <h3 style={{ color: 'var(--primary)', marginBottom: '16px', textAlign: 'center' }}>
                Online Node
              </h3>
              <StatusBadge />
            </div>

            <div>
              <h3 style={{ color: 'var(--secondary)', marginBottom: '16px', textAlign: 'center' }}>
                Offline Node
              </h3>
              <StatusBadgeOffline />
            </div>
          </div>
        </section>

        {/* Part 2 – Props & Data Flow */}
        <section className="section" style={{ marginBottom: '120px' }}>
          <h2 className="neon-title" style={{ textAlign: 'center', marginBottom: '50px' }}>
            Part 2 – Props & Data Flow
          </h2>

          <div style={{ marginBottom: '60px' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--primary)' }}>
              User Nodes
            </h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
              <UserCard
                name="Chiheb"
                email="chiheb@neon.dev"
                role="Cyber Developer"
              />
            </div>
          </div>

          <div>
            <h3 style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--primary)' }}>
              Product Nodes
            </h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
              <Product title="Quantum Keyboard" price={299} inStock={true} rating={4.9} />
              <Product title="Holo Display" price={1499} inStock={false} rating={4.7} />
            </div>
          </div>
        </section>

        {/* Part 3 – Composition */}
        <section className="section" style={{ marginBottom: '120px' }}>
          <h2 className="neon-title" style={{ textAlign: 'center', marginBottom: '50px' }}>
            Part 3 – Component Composition
          </h2>

          <div style={{ marginBottom: '60px' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--primary)' }}>
              Holo Blog Post
            </h3>
            <BlogPost
              title="The Future is React + Neon"
              authorName="Chiheb"
              authorEmail="chiheb@neon.dev"
              authorRole="Cyber Architect"
              content="In 2026, React remains the backbone of dynamic UIs. Composition with glowing cards and animated flows is the new standard."
              date="March 1, 2026"
            />
          </div>

          <div>
            <h3 style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--primary)' }}>
              Cyber Movie Grid
            </h3>
            <MovieList movies={movies} />
          </div>
        </section>

        {/* Portfolio Challenge */}
        <About
          bio="Cyber citizen from Tunis. Crafting next-gen web experiences with React, Vite, and neon aesthetics."
          skills={['React', 'Vite', 'Neon UI', 'Composition', 'Animations']}
        />

        <ProjectShowcase projects={projects} />

        <Contact
          email="chiheb@neon.dev"
          github="https://github.com/chiheb-neon"
          linkedin="https://linkedin.com/in/chiheb-neon"
        />
      </div>

      <Footer name="Chiheb" />
    </div>
  );
}

export default App;