// src/components/Movie.jsx
export default function Movie({ title, director, year, rating }) {
    const stars = '⭐'.repeat(Math.floor(rating || 0));

    return (
        <div className="card" style={{ width: '280px' }}>
            <h4 style={{ marginBottom: '12px', color: '#282c34' }}>{title}</h4>
            <p style={{ margin: '8px 0', color: '#555' }}>
                Director: <strong>{director}</strong>
            </p>
            <p style={{ margin: '8px 0', color: '#555' }}>
                Year: {year}
            </p>
            <p style={{ fontSize: '1.3rem', margin: '12px 0' }}>
                {stars} ({rating || 'N/A'})
            </p>
        </div>
    );
}