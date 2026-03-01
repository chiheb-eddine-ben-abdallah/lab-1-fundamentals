// src/components/About.jsx
export default function About({ bio, skills }) {
    return (
        <section style={{ maxWidth: '900px', margin: '0 auto 80px', padding: '0 20px', textAlign: 'center' }}>
            <h2 style={{ color: '#282c34', marginBottom: '30px' }}>About Me</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#444', marginBottom: '40px' }}>
                {bio}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
                {skills.map((skill, i) => (
                    <span
                        key={i}
                        style={{
                            backgroundColor: 'var(--primary)',
                            color: '#0f172a',
                            padding: '10px 18px',
                            borderRadius: '999px',
                            fontWeight: '600',
                        }}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}