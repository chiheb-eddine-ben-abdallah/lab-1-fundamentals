// src/components/Header.jsx
export default function Header({ name, tagline }) {
    return (
        <header
            style={{
                background: 'var(--bg-deep)',
                color: 'white',
                padding: '120px 20px 140px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                borderBottom: '1px solid var(--border)',
            }}
        >
            {/* Background ambient glows */}
            <div
                style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '50%',
                    width: '100%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(157, 80, 187, 0.15) 0%, transparent 60%)',
                    transform: 'translateX(-50%)',
                    pointerEvents: 'none',
                }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
                <h1 style={{
                    fontSize: '5.5rem',
                    margin: '0 0 20px',
                    lineHeight: '0.9',
                    letterSpacing: '-2px',
                    fontWeight: 800,
                }}>
                    <span className="neon-title">{name}</span>
                </h1>
                <p style={{
                    fontSize: '1.8rem',
                    margin: 0,
                    fontWeight: '300',
                    color: 'var(--text-dim)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.3em',
                }}>
                    {tagline}
                </p>
                <div style={{
                    marginTop: '50px',
                    height: '2px',
                    width: '100px',
                    background: 'linear-gradient(90deg, transparent, var(--secondary), transparent)',
                    margin: '50px auto 0'
                }} />
            </div>
        </header>
    );
}