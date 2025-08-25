import { useEffect } from 'react';

declare global {
  interface Window {
    Calendly: any;
  }
}

const Index = () => {
  useEffect(() => {
    const checkCalendly = setInterval(() => {
      if (window.Calendly) {
        clearInterval(checkCalendly);
      }
    }, 100);

    return () => {
      clearInterval(checkCalendly);
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/kevins-club/30min'
      });
    }
    return false;
  };

  const galleryImages = [
    // ✅ Images remain untouched
    "https://lh3.googleusercontent.com/p/AF1QipPW3WKSWigK5l25E6qB-gUMYvD1NcnJha3_fGc_=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipP_vBTI68uHreIluNWQPW8LpgT4YRadc0VCzoXL=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipMqDQ4GDb9PmB8Iz7y_WPq9O4g23WUS3I_YOVJG=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipP3dDpExatmkHRYUcXNJlHmk2cY6ZZGhXcPVW-n=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipM9H-wHlzpvQurnE9F4fgyO9hdEJkUGLM1f9gnz=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipPkDFENrEzX7OpgEKFgIp20-b3yZp3ql1RXkc1p=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipN6akfE__NS1DrIWPgeDUmQRKMVJcT5mPlpr60g=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npez31Yvo6muFjxWQ76RqAStxag85Ib2Koxw4YfVlL06JPSHPFemFs08go_0Etjhc95h2p5Hos85f5tukUJ9Zw06RmKv3b_ydTEv69KlOOl_8rkC5cErWR_8_XNP2LOouwVigXe=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipOWr5V0Tk4MIbrEpSq-9j3TV8ML61bOnXciAcEw=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipPFL7K6k4MS6zy6b1aOi138THTAajcampg7Rmzh=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npMP6qIiJl0SzVrq6693ZgIAy7yn20Q2zWSR1NCEckHIZmQSWu2WuTZO38hmEkQbmjsgp426RxRCVTCWxCcXlzQQfGwdUInRRM6q-HSVXv72-oll3Tp-COWagDPltWPk1MUvixFEw=s1360-w1360-h1020-rw"
  ];

  return (
    <>
      {/* Urgency Bar */}
      <div className="urgency-bar">🔒 This site preview is reserved for 72h.</div>

      {/* Sticky Header */}
      <header className="sticky-header">
        <div className="font-semibold text-foreground">Fix This Build That Ltd</div>
        <a 
          href="https://docs.google.com/document/d/1DqhtzSNcn6-BmSpcdNpk682iofGPDtb2Y-VXB0p_GjM/edit?usp=sharing" 
          className="btn-activate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Activate ▶
        </a>
      </header>

{/* Hero Section (Mobile‑first, conversion‑ready) */}
<section className="hero-section py-8 md:py-12">
  <div className="centered px-4">
    {/* Headline */}
    <h1 className="text-2xl leading-tight font-bold text-foreground md:text-4xl md:leading-tight text-balance mb-3">
      Beautiful Kitchens & Bathrooms — Built to Last
    </h1>

    {/* Subheadline (1–2 linhas no mobile) */}
    <p className="text-base md:text-xl text-muted-foreground mb-5">
      Expert design + full-service remodeling for results you’ll love.
    </p>
    
    {/* Proof Bar — 3 itens, compactos, sempre lado a lado */}
    <div className="proof-bar mb-6">
      <div className="proof-item">
        <div className="text-2xl mb-1" aria-hidden>🏆</div>
        <div className="text">
          <strong>7+ Years Experience</strong>
        </div>
      </div>
      <div className="proof-item">
        <div className="text-2xl mb-1" aria-hidden>⭐</div>
        <div className="text">
          <strong>5.0 Google Top‑rated</strong>
        </div>
      </div>
      <div className="proof-item">
        <div className="text-2xl mb-1" aria-hidden>🎖️</div>
        <div className="text">
          <strong>Certified Installers</strong>
        </div>
      </div>
    </div>

    {/* Business details — 1 linha no mobile, foco em contato */}
    <div className="text-sm md:text-base text-muted-foreground space-y-1">
      <div>🇬🇧 Serving Kingston & Greater London</div>
      <div>
        <a href="tel:+447940476220" className="underline underline-offset-2">
          +44 7940 476 220
        </a>
      </div>
    </div>
  </div>
</section>


      {/* <!-- Elfsight Google Reviews | Fix This Build That Google Reviews --> */}
      <div className="centered" style={{ marginTop: '0px' }}>
        <script src="https://elfsightcdn.com/platform.js" async></script>
        <div class="elfsight-app-a98f04fe-0b5d-4aba-bb82-98fe1a7d031d" data-elfsight-app-lazy></div>
      </div>

      {/* Page Copy */}
      <main className="centered" style={{ marginTop: '1.5rem', paddingBottom: '4rem' }}>
        <h1 className="text-xl font-bold text-foreground mb-1.5">
          Fix This Build That Ltd
        </h1>

        <h2 className="text-base font-semibold text-muted-foreground mb-3">
          🇬🇧 Kingston & Surroundings, London
        </h2>

        <h3 className="text-base font-medium text-foreground mb-5">
          Kitchen & Bathroom Renovations • Start to Finish
        </h3>

        <div className="space-y-3 mb-6 text-sm">
          <p>We build beautiful spaces that elevate your home and daily life.</p>
          <p>Design, demo, installation — we handle it all with top-tier craftsmanship.</p>
          <p>Our skilled team ensures every detail is precise, clean, and long-lasting.</p>
          <p>We're fast, friendly, and always respect your space.</p>
        </div>

        {/* 📸 Gallery Section */}
        <section className="gallery-scroll-container">
          <div className="gallery-scroll">
            {galleryImages.map((src, idx) => (
              <img key={idx} src={src} alt={`Project ${idx + 1}`} className="gallery-image" />
            ))}
          </div>
        </section>

        <style>{`
          .gallery-scroll-container {
            overflow-x: auto;
            padding: 1rem 0;
          }
          .gallery-scroll {
            display: flex;
            gap: 1rem;
            padding: 0 1rem;
          }
          .gallery-image {
            height: 200px;
            border-radius: 0.5rem;
            object-fit: cover;
            flex-shrink: 0;
          }
        `}</style>

        {/* What We Do */}
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4" style={{ marginTop: '1.5rem'}} >
          What We Do
        </h2>

        <div className="services-grid">
          <div>🛁<br />Full Bathroom Renovations</div>
          <div>🚿<br />Custom Shower Systems</div>
          <div>🧱<br />Tiling & Flooring</div>
          <div>🧼<br />Waterproofing Solutions</div>
          <div>🚽<br />Kitchen & Bath Installations</div>
          <div>💡<br />Smart Lighting & Ventilation</div>
        </div>

        {/* How It Works */}
        <h2 className="text-lg font-bold text-foreground mt-8 mb-3">
          How It Works
        </h2>

        <h3 className="text-sm font-semibold text-foreground mb-3">
          Smooth process from start to finish
        </h3>

        <div className="space-y-2 text-sm mb-6">
          <div>1️⃣ Request a free consultation</div>
          <div>2️⃣ We plan, design & build</div>
          <div>3️⃣ Enjoy your stunning new space</div>
        </div>

        {/* Why Choose Us */}
        <h2 className="text-lg font-bold text-foreground mb-3">
          Why Us?
        </h2>

        <div className="space-y-2 text-sm mb-6">
          <div>📍 Based in Kingston, England</div>
          <div>✅ Trusted by locals — 5.0 rating</div>
          <div>🔧 Full-service renovation experts</div>
        </div>

        {/* Final Callout */}
        <section className="mt-10 mb-6">
          <h2 className="text-lg font-bold text-foreground mb-2">
            Let's build your dream space
          </h2>
          <p className="text-sm text-muted-foreground">
            Book your free consult today — and let’s bring your vision to life.
          </p>
        </section>

        {/* Main Footer */}
        <footer className="centered" style={{ paddingBottom: '2rem' }}>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="font-semibold">Fix This Build That Ltd</div>
            <div>+44 7940 476 220</div>
            <div>Kingston, England</div>
            <div className="mt-4">© 2025 Fix This Build That Ltd. All rights reserved.</div>
          </div>
        </footer>
      </main>

      {/* Sticky Footer */}
      <div className="sticky-footer">
        <a href="tel:+447940476220" className="btn btn-call">📞 Call Us</a>
        <button onClick={openCalendly} className="btn btn-book">📅 Book Now</button>
      </div>
    </>
  );
};


export default Index;





