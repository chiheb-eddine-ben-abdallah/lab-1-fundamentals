// src/components/Product.jsx
export default function Product({ title, price, inStock, rating }) {
    const stars = '⭐'.repeat(Math.floor(rating || 0));

    return (
        <div className="card" style={{ width: '340px' }}>
            <h3 style={{ margin: '0 0 12px', color: '#282c34' }}>{title}</h3>
            <p style={{ fontSize: '1.4rem', fontWeight: 'bold', margin: '12px 0' }}>
                ${price.toFixed(2)}
            </p>
            <p style={{
                color: inStock ? '#22c55e' : '#ef4444',
                fontWeight: 'bold',
                margin: '12px 0'
            }}>
                {inStock ? 'In Stock ✓' : 'Out of Stock ✗'}
            </p>
            <p style={{ fontSize: '1.3rem' }}>
                {stars} ({rating || 'N/A'})
            </p>
        </div>
    );
}