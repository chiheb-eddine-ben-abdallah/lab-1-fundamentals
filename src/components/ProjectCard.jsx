// src/components/ProjectCard.jsx
export default function ProjectCard({ name, description, technologies }) {
    return (
        <div
            className="card"
            style={{
                padding: '50px',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '420px',
            }}
        >
            <div>
                <span style={{
                    fontSize: '0.8rem',
                    color: 'var(--secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '3px',
                    fontWeight: '800',
                    display: 'block',
                    marginBottom: '20px',
                }}>
                    Experimental
                </span>

                <h3 className="neon-title" style={{
                    fontSize: '2.5rem',
                    marginBottom: '20px',
                    lineHeight: '1.2',
                    fontWeight: 800,
                }}>
                    {name}
                </h3>

                <p style={{
                    fontSize: '1.2rem',
                    color: 'var(--text-dim)',
                    lineHeight: '1.8',
                    marginBottom: '40px',
                }}>
                    {description}
                </p>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        style={{
                            padding: '6px 14px',
                            borderRadius: '4px',
                            fontSize: '0.85rem',
                            fontWeight: '700',
                            background: 'rgba(255, 255, 255, 0.03)',
                            color: 'var(--text-dim)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                        }}
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}