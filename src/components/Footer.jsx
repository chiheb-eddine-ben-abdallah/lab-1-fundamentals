// src/components/Footer.jsx
export default function Footer({ name }) {
    const year = new Date().getFullYear();
    return (
        <footer
            style={{
                textAlign: 'center',
                padding: '100px 20px',
                background: 'var(--bg-deep)',
                borderTop: '1px solid var(--border)',
                marginTop: '120px',
            }}
        >
            <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                <h3 className="neon-title" style={{
                    fontSize: '1.8rem',
                    marginBottom: '20px',
                    fontWeight: 800,
                    letterSpacing: '0.2em'
                }}>
                    {name.toUpperCase()}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', opacity: 0.6, letterSpacing: '1px' }}>
                    Cyber React Development Lab. Focused on architectural excellence and futuristic UI patterns.
                </p>
                <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase' }}>
                    <span>&copy; {year} Registry Node</span>
                    <span>//</span>
                    <span>All Rights Reserved</span>
                </div>
            </div>
        </footer>
    );
}