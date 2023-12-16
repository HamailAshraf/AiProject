import './App.css';
// import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
// import { CTA, Brand, Navbar } from './components';
import { useState } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Brand } from './components/brand/Brand';
import { CTA } from './components/cta/CTA';
import { Header } from './containers/header/Header';
import { Blog } from './containers/blog/Blog';
import { WhatGPT3 } from './containers/whatGPT3/WhatGPT3';
import { Features } from './containers/features/Features';
import { Possibility } from './containers/possibility/Possibility';
import { Footer } from './containers/footer/Footer';


function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRunButtonClick = async () => {
    try {
      setLoading(true);

      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          crypto_currency: 'ETH',
          against_currency: 'USD',
        }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();
      setResult(data.prediction);
    } catch (error) {
      console.error('Error:', error);
      setResult(null);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <div className='predict-btn'>
          <div className='predict-btn_run'>
            <button onClick={handleRunButtonClick} disabled={loading}>
              {loading ? 'Running Prediction...' : 'Run Prediction'}
            </button>
        {loading && <div className="spinner"></div>}
          </div>
        {result && (
          <div>
           <h2>Prediction Result:</h2>
            <p>{result}</p>
          </div>
      )}
    </div>
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </>
  )
}

export default App
