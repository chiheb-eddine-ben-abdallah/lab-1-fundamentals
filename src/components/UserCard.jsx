// src/components/UserCard.jsx
export default function UserCard({ name, email, role }) {
    return (
        <div className="card" style={{ width: '400px', textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <h3 className="neon-title" style={{
                    fontSize: '2.2rem',
                    margin: 0,
                    fontWeight: 800,
                }}>
                    {name}
                </h3>
                <div style={{ padding: '6px 14px', borderRadius: '8px', background: 'rgba(157, 80, 187, 0.1)', border: '1px solid var(--primary)', color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 800 }}>
                    NODE
                </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px' }}>
                <p style={{ margin: '10px 0', color: 'var(--text-dim)', fontSize: '1.1rem' }}>
                    <strong style={{ color: 'var(--secondary)', fontSize: '0.8rem', textTransform: 'uppercase', marginRight: '10px' }}>Email:</strong> {email}
                </p>
                <p style={{ margin: '10px 0', color: 'var(--text-dim)', fontSize: '1.1rem' }}>
                    <strong style={{ color: 'var(--primary)', fontSize: '0.8rem', textTransform: 'uppercase', marginRight: '10px' }}>Role:</strong> {role}
                </p>
            </div>
        </div>
    );
}