// src/components/BlogPost.jsx
import UserCard from './UserCard';

export default function BlogPost({
    title,
    authorName,
    authorEmail,
    authorRole,
    content,
    date,
}) {
    return (
        <div className="card" style={{ maxWidth: '900px', margin: '0 auto', padding: '60px' }}>
            <h1 className="neon-title" style={{ fontSize: '3.5rem', marginBottom: '40px', lineHeight: '1.1', fontWeight: 800 }}>
                {title}
            </h1>

            <div style={{ marginBottom: '60px' }}>
                <UserCard
                    name={authorName}
                    email={authorEmail}
                    role={authorRole}
                />
            </div>

            <div style={{
                fontSize: '1.4rem',
                lineHeight: 1.8,
                color: 'var(--text-dim)',
                marginBottom: '40px',
                paddingLeft: '30px',
                borderLeft: '2px solid var(--primary)'
            }}>
                {content}
            </div>

            <footer style={{
                fontSize: '1rem',
                color: 'var(--text-dim)',
                textAlign: 'right',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                paddingTop: '30px',
                opacity: 0.6,
                letterSpacing: '1px'
            }}>
                Published on {date}
            </footer>
        </div>
    );
}