// src/components/StatusBadgeOffline.jsx
export default function StatusBadgeOffline() {
    return (
        <span
            className="card"
            style={{
                background: 'rgba(255, 255, 255, 0.05)',
                color: 'var(--text-dim)',
                padding: '12px 28px',
                borderRadius: '50px',
                fontSize: '1.2rem',
                fontWeight: '800',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
            }}
        >
            <span style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#444',
                display: 'block',
                opacity: 0.6,
            }} />
            Offline
        </span>
    );
}