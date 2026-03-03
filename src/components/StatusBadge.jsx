// src/components/StatusBadge.jsx
export default function StatusBadge() {
    return (
        <span
            className="card"
            style={{
                background: 'rgba(157, 80, 187, 0.1)',
                color: 'var(--primary)',
                padding: '12px 28px',
                borderRadius: '50px',
                fontSize: '1.2rem',
                fontWeight: '800',
                border: '1px solid rgba(157, 80, 187, 0.3)',
                boxShadow: '0 0 20px rgba(157, 80, 187, 0.2)',
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
                background: 'var(--primary)',
                boxShadow: '0 0 15px var(--primary)',
                display: 'block',
            }} />
            Operational
        </span>
    );
}