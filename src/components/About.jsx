// src/components/About.jsx
export default function About({ bio, skills }) {
    return (
        <section
            className="section"
            style={{
                padding: '100px 0',
                borderBottom: '1px solid var(--border)',
            }}
        >
            <div
                className="card"
                style={{
                    padding: '80px 60px',
                    textAlign: 'left',
                }}
            >
                <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1.5', minWidth: '350px' }}>
                        <h2
                            style={{
                                fontSize: '3rem',
                                marginBottom: '40px',
                                color: 'white',
                                fontWeight: 800,
                            }}
                        >
                            Professional <span className="neon-title">Expertise</span>
                        </h2>

                        <p style={{
                            fontSize: '1.5rem',
                            lineHeight: '1.8',
                            color: 'var(--text-dim)',
                            maxWidth: '850px',
                            fontWeight: 300,
                        }}>
                            {bio}
                        </p>
                    </div>

                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <h3 style={{
                            color: 'var(--secondary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em',
                            fontSize: '1rem',
                            marginBottom: '30px',
                            fontWeight: 800
                        }}>
                            Technical Arsenal
                        </h3>

                        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    style={{
                                        padding: '10px 22px',
                                        borderRadius: '8px',
                                        background: 'rgba(157, 80, 187, 0.1)',
                                        color: 'var(--primary)',
                                        fontSize: '1rem',
                                        fontWeight: '700',
                                        border: '1px solid rgba(157, 80, 187, 0.2)',
                                        transition: 'var(--transition)',
                                    }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}