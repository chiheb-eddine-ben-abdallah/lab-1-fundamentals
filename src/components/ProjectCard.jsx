// src/components/ProjectCard.jsx
export default function ProjectCard({ name, description, technologies }) {
    return (
        <div className="card" style={{ width: '320px' }}>
            <h3 style={{ margin: '0 0 16px', color: '#282c34' }}>{name}</h3>
            <p style={{ color: '#555', marginBottom: '20px', lineHeight: 1.6 }}>
                {description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
                {technologies.map((tech, i) => (
                    <span
                        key={i}
                        style={{
                            backgroundColor: '#e0f7fa',
                            color: '#006064',
                            padding: '8px 16px',
                            borderRadius: '999px',
                            fontSize: '0.95rem',
                        }}
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}