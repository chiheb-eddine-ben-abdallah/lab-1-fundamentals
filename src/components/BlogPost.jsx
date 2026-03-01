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
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2.4rem', marginBottom: '24px', color: '#282c34' }}>
                {title}
            </h1>

            <div style={{ marginBottom: '32px' }}>
                <UserCard
                    name={authorName}
                    email={authorEmail}
                    role={authorRole}
                />
            </div>

            <div style={{ fontSize: '1.15rem', lineHeight: 1.7, color: '#444', marginBottom: '32px' }}>
                {content}
            </div>

            <footer style={{
                fontSize: '0.95rem',
                color: '#777',
                textAlign: 'right',
                borderTop: '1px solid #eee',
                paddingTop: '16px',
            }}>
                Published on {date}
            </footer>
        </div>
    );
}