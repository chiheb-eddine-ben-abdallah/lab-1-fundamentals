// src/components/Card.jsx
export default function Card({ title, children }) {
    return (
        <div className="card">
            {title && (
                <h3 style={{ marginBottom: '16px', color: '#282c34' }}>
                    {title}
                </h3>
            )}
            {children}
        </div>
    );
}