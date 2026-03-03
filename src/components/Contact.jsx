// src/components/Contact.jsx
export default function Contact({ email, github, linkedin }) {
    return (
        <section
            id="contact"
            className="section"
            style={{
                padding: '140px 0',
                textAlign: 'center',
            }}
        >
            <div
                className="card"
                style={{
                    padding: '100px 40px',
                    borderColor: 'var(--secondary)',
                    boxShadow: '0 0 50px var(--secondary-glow)',
                    maxWidth: '900px',
                    margin: '0 auto'
                }}
            >
                <h2 style={{ fontSize: '4rem', marginBottom: '30px', fontWeight: 800, color: 'white' }}>
                    Initiate <span className="neon-title">Connection</span>
                </h2>
                <p style={{ fontSize: '1.4rem', color: 'var(--text-dim)', marginBottom: '80px', maxWidth: '600px', margin: '0 auto 80px', fontWeight: 300 }}>
                    Official channels for professional inquiries and collaborations. Reach out through the infrastructure below.
                </p>

                <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href={`mailto:${email}`} className="btn-luxury" style={{ minWidth: '220px' }}>
                        EMAIL NODE
                    </a>
                    <a href={github} target="_blank" className="btn-luxury" style={{
                        background: 'transparent',
                        border: '1px solid var(--secondary)',
                        color: 'var(--secondary)',
                        boxShadow: 'none',
                    }}>
                        GITHUB
                    </a>
                    <a href={linkedin} target="_blank" className="btn-luxury" style={{
                        background: 'transparent',
                        border: '1px solid var(--primary)',
                        color: 'var(--primary)',
                        boxShadow: 'none',
                    }}>
                        LINKEDIN
                    </a>
                </div>
            </div>
        </section>
    );
}