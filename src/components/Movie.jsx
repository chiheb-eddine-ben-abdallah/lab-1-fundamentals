// src/components/Movie.jsx
export default function Movie({ title, director, year, rating }) {
    const stars = '⭐'.repeat(Math.round(rating || 0));

    return (
        <div
            className="card"
            style={{
                width: '320px',
                textAlign: 'left',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                background: 'rgba(5, 5, 5, 0.4)',
                borderRadius: '16px',
            }}
        >
            <span style={{
                fontSize: '0.75rem',
                color: 'var(--primary)',
                textTransform: 'uppercase',
                fontWeight: '800',
                letterSpacing: '1px',
                display: 'block',
                marginBottom: '15px'
            }}>
                Archive // {year}
            </span>

            <h4 style={{ margin: '0 0 15px', color: 'white', fontSize: '1.6rem', fontWeight: 800 }}>{title}</h4>

            <p style={{ margin: '8px 0', color: 'var(--text-dim)', fontSize: '1rem' }}>
                Director: <strong style={{ color: 'white', fontWeight: 700 }}>{director}</strong>
            </p>

            <div style={{ marginTop: '25px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1.2rem' }}>{stars}</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--secondary)', fontWeight: 800 }}>{rating}</span>
            </div>
        </div>
    );
}