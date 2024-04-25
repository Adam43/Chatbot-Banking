import React from 'react';
import './Main.css';

function Main() {
  return (
    <div className="kj-investments">
      <header className="header">
        <img src="logo.svg" alt="KJ Investments Logo" className="logo" />
        <h1>KJ Investments</h1>
        <nav className="nav">
          <a href="#">Accounts</a>
          <a href="#">Transfers</a>
          <a href="#">Bill Pay</a>
          <a href="#">Investments</a>
          <div className="login">
            <a href="#">Login</a>
          </div>
        </nav>
      </header>
      <main className="main">
        <section className="hero">
          <img src="hero-banner.jpg" alt="Financial Security Banner" className="hero-banner" />
          <div className="hero-content">
            <h2>Manage your finances with ease</h2>
            <p>KJ Investments provides a secure and convenient platform for all your banking needs.</p>
            <a href="#" className="btn">Open an Account</a>
          </div>
        </section>
        <section className="services">
          <h2>Our Services</h2>
          <div className="service-card">
            <img src="checking-account.svg" alt="Checking Account Icon" className="service-icon" />
            <h3>Checking Accounts</h3>
            <p>Manage your everyday expenses and access your funds easily.</p>
          </div>
          <div className="service-card">
            <img src="savings-account.svg" alt="Savings Account Icon" className="service-icon" />
            <h3>Savings Accounts</h3>
            <p>Grow your savings with competitive interest rates.</p>
          </div>
          <div className="service-card">
            <img src="investment.svg" alt="Investment Icon" className="service-icon" />
            <h3>Investments</h3>
            <p>Invest in your future with a variety of investment options.</p>
          </div>
          <div className="service-card">
            <img src="loan.svg" alt="Loan Icon" className="service-icon" />
            <h3>Loans</h3>
            <p>Get the financing you need to achieve your goals.</p>
          </div>
        </section>
        <div className="chatbot-placeholder">
          <span>Need help?</span>
          <img src="chatbot-icon.svg" alt="Chatbot Icon" className="chatbot-icon" />
        </div>
      </main>
      <footer className="footer">
        <p>&copy; KJ Investments 2024</p>
      </footer>
    </div>
  );
}

export default Main;
