// src/components/Greeting.jsx
export default function Greeting() {
    return (
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h1 style={{ color: 'var(--primary)', marginBottom: '16px' }}>
                Welcome to React!
            </h1>
            <h2 style={{ color: '#555', marginBottom: '20px' }}>
                This is my first component
            </h2>
            <p style={{ color: '#444' }}>
                Fun fact: React was created by Jordan Walke at Facebook in 2011 and open-sourced in 2013.
            </p>
        </div>
    );
}