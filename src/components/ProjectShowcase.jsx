// src/components/ProjectShowcase.jsx
import ProjectCard from './ProjectCard';

export default function ProjectShowcase({ projects }) {
    return (
        <section className="section" style={{ margin: '140px auto', padding: '0 20px' }}>
            <h2 className="neon-title" style={{ textAlign: 'center', marginBottom: '80px', fontSize: '3.5rem', fontWeight: 800 }}>
                My Projects
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px' }}>
                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        name={project.name}
                        description={project.description}
                        technologies={project.technologies}
                    />
                ))}
            </div>
        </section>
    );
}