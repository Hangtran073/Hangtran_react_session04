import React from 'react';
import "../dashboard.css";

export default function Dashboard() {
  return (
    
    <>
  <header>
    <div className="logo">whitepace</div>
    <nav>
      <ul>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Solutions</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
      </ul>
    </nav>
    <div className="actions">
      <button className="login-btn">Login</button>
      <button className="cta-btn">Try Whitepace free</button>
    </div>
  </header>
  <main className="hero">
    <div className="hero-content">
      <h1>
        Get More Done with <span>whitepace</span>
      </h1>
      <p>
        Project management software that enables your teams to collaborate,
        plan, analyze and manage everyday tasks
      </p>
      <button className="cta-btn">Try Whitepace free →</button>
    </div>
    <div className="hero-image">
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/dashboard-4487151-3726301.png" alt="Dashboard illustration" />
    </div>
  </main>
</>

    
  )
}
