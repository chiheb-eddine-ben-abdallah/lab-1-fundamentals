// src/components/Product.jsx
export default function Product({ title, price, inStock, rating }) {
    const stars = '⭐'.repeat(Math.round(rating || 0));

    return (
        <div className="card" style={{ width: '360px', textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <span style={{
                    color: inStock ? 'var(--secondary)' : '#666',
                    fontWeight: '800',
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    {inStock ? 'Available ✓' : 'Out of Stock ✗'}
                </span>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: inStock ? 'var(--secondary)' : '#444' }} />
            </div>

            <h3 style={{ margin: '0 0 15px', color: 'white', fontSize: '1.8rem', fontWeight: 800 }}>{title}</h3>

            <p style={{ fontSize: '2.5rem', fontWeight: '800', margin: '20px 0', color: 'white' }}>
                ${price.toFixed(2)}
            </p>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1.3rem' }}>{stars}</span>
                <span style={{ color: 'var(--text-dim)', fontSize: '1rem', fontWeight: 600 }}>({rating})</span>
            </div>
        </div>
    );
}