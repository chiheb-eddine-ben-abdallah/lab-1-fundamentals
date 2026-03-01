// src/components/ProjectShowcase.jsx
import ProjectCard from './ProjectCard';

export default function ProjectShowcase({ projects }) {
    return (
        <section style={{ maxWidth: '1100px', margin: '0 auto 80px', padding: '0 20px' }}>
            <h2 style={{ textAlign: 'center', color: '#282c34', marginBottom: '50px' }}>
                My Projects
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
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