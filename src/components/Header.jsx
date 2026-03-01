// src/components/Header.jsx
export default function Header({ name, tagline }) {
    return (
        <header
            style={{
                background: 'linear-gradient(135deg, #0a0e17 0%, #1e293b 100%)',
                color: 'white',
                padding: '100px 20px 120px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at 20% 30%, rgba(0,240,255,0.12) 0%, transparent 40%)',
                    pointerEvents: 'none',
                }}
            />
            <h1 style={{
                fontSize: '4.2rem',
                margin: '0 0 16px',
                textShadow: '0 0 30px rgba(97,218,251,0.7)',
            }}>
                {name}
            </h1>
            <p style={{
                fontSize: '1.9rem',
                margin: 0,
                opacity: 0.9,
                textShadow: '0 0 15px rgba(255,0,170,0.5)',
            }}>
                {tagline}
            </p>
        </header>
    );
}