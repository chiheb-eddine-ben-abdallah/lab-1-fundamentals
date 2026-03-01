// src/components/StatusBadge.jsx
export default function StatusBadge() {
    return (
        <div className="card" style={{ maxWidth: '380px', textAlign: 'center' }}>
            <p style={{
                fontSize: '3.2rem',
                margin: '0 0 12px',
                color: '#22c55e',
                textShadow: '0 0 20px #22c55e66',
            }}>
                ◉ ONLINE
            </p>
            <p style={{ color: 'var(--text-dim)' }}>
                Node connected to the grid
            </p>
        </div>
    );
}