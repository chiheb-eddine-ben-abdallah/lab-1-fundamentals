// src/components/Footer.jsx
export default function Footer({ name }) {
    return (
        <footer
            style={{
                background: '#0f172a',
                color: '#94a3b8',
                textAlign: 'center',
                padding: '60px 20px',
                fontSize: '0.95rem',
            }}
        >
            <p style={{ margin: 0 }}>
                © {new Date().getFullYear()} {name} • Built with React & Vite
            </p>
        </footer>
    );
}