// src/components/Greeting.jsx
export default function Greeting() {
    const hours = new Date().getHours();
    let message = "Good day, Cyber Developer.";

    if (hours < 12) {
        message = "Good morning, initiate.";
    } else if (hours < 18) {
        message = "Good afternoon, developer.";
    } else {
        message = "Good evening, architect.";
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h2 className="neon-title" style={{
                fontSize: '3rem',
                margin: '20px 0',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
            }}>
                {message}
            </h2>
        </div>
    );
}