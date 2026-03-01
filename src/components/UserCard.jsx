// src/components/UserCard.jsx
export default function UserCard({ name, email, role }) {
    return (
        <div className="card" style={{ width: '360px', textAlign: 'center' }}>
            <h3 style={{
                margin: '0 0 16px',
                fontSize: '1.8rem',
                color: 'var(--neon-cyan)',
                textShadow: '0 0 15px var(--neon-cyan-glow)',
            }}>
                {name}
            </h3>
            <p style={{ margin: '12px 0', color: 'var(--text-dim)' }}>
                Email: <span style={{ color: 'var(--neon-magenta)' }}>{email}</span>
            </p>
            <p style={{ margin: '12px 0', color: 'var(--text-dim)' }}>
                Role: <span style={{ color: 'var(--neon-cyan)' }}>{role}</span>
            </p>
        </div>
    );
}