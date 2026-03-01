// src/components/StatusBadgeOffline.jsx
export default function StatusBadgeOffline() {
    return (
        <div className="card" style={{ maxWidth: '380px', textAlign: 'center' }}>
            <p style={{
                fontSize: '3.2rem',
                margin: '0 0 12px',
                color: '#ef4444',
                textShadow: '0 0 20px #ef444466',
            }}>
                ◉ OFFLINE
            </p>
            <p style={{ color: 'var(--text-dim)' }}>
                Node disconnected
            </p>
        </div>
    );
}