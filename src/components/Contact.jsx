// src/components/Contact.jsx
export default function Contact({ email, github, linkedin }) {
    return (
        <section
            style={{
                background: 'linear-gradient(135deg, #282c34, #1e293b)',
                color: 'white',
                padding: '80px 20px',
                textAlign: 'center',
            }}
        >
            <h2 style={{ marginBottom: '40px', fontSize: '2.2rem' }}>Get in Touch</h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '30px' }}>
                Feel free to reach out for collaborations or questions!
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap' }}>
                <a href={`mailto:${email}`} style={{ color: 'var(--primary)', fontSize: '1.2rem', textDecoration: 'none' }}>
                    ✉️ {email}
                </a>
                <a href={github} target="_blank" style={{ color: 'var(--primary)', fontSize: '1.2rem', textDecoration: 'none' }}>
                    GitHub
                </a>
                <a href={linkedin} target="_blank" style={{ color: 'var(--primary)', fontSize: '1.2rem', textDecoration: 'none' }}>
                    LinkedIn
                </a>
            </div>
        </section>
    );
}