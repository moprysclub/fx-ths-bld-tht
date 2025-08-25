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
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrEDAlUdgkOizmiDF1mRa43R2qdQ3NUaV61tdZ5PjYCdlja0AsKArcckQJFZPehj_Zg6ZWYiBzaxI5ElOOViYtciM5kl90MhXmZVIe2M4vX6lw1WpeBjW_MmVbtINmToRPBisgqwuDwE1_a=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noATEi8btY04jmkYgrmNndVS3LYaT1fbQN1dVz-gidIY0YiUhEJ5Bko26W5W__3KLIXtVK0_G24SMV6_9HlOL6F_I7oPTpaZVVM19QOLQ6cC__05Uky333N-WUR6ckOE_fhqnNXbbrQsHXv=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr_fdpXm4gZECbHBuVOxm3Y8CG-o3fpLBLFRDe2SdEIxSb_ASnvtmC5unEw1rkJfKS5ScboZDFrc7anWRfqmxfWDX_2U0xVzrFAEqahzqBeqVj429AaRCqD2I9gKO2XNDPPAXp3sUvOe88Y=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4np6MTNMyIa6Qtx3PiqU-xFOJNqsBikDSwgk8fYXnZ8j60LA3CB136b_pr2hkFtF_RDOiTEPl9VXoOt2cn7H5ru8r935NK7KwuS1Qatm28_OqInRaWfFufmjTm-Gg4rDZyKHfit_3hxIPAWI=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipMzqLh4Ugh4h7shV2NNXGnl07gCs9lXHEI60jIT=w621-h1023-p-k-no",
    "https://lh3.googleusercontent.com/p/AF1QipMxaIisklvyvTVzELGB55cldIVwQkIn6s0xue0w=w621-h332-p-k-no",
    "https://lh3.googleusercontent.com/p/AF1QipPtcDJYT2Q3uYzegKWB8rfocwTrnxQ7UCuX41R1=w621-h884-p-k-no",
    "https://lh3.googleusercontent.com/p/AF1QipNEF-ss1xHefrKYNnve-7KUokt8KDv9jupBWkqe=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrCxiHbk3RZkGWCX_D7xDsOB-Vzlbl5UAHb0jqk4SvZe_KooUCWGVKoGVvoZLrDOg2z_3G2eAe5hPOTO4jogXzuSwXiev1YTXDcJ7JCZCE7WuVD6ohvtiUYCkiIEWM6tQOEcUqC1WKbJuxL=s1360-w1360-h1020-rw"
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
          Activate ⇲
        </a>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="centered">
          <div className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Beautiful Kitchens & Bathrooms — Built to Last
          </div>

          <div className="text-lg md:text-xl text-muted-foreground mb-6">
            7+ Years Experience • Design, Fixtures, Full Renovations & More
          </div>

          {/* Proof Bar */}
          <div className="proof-bar">
            <div className="proof-item"><div className="text"><div className="text-lg mb-1">🏆</div><strong>7+ years in business</strong></div></div>
            <div className="proof-item"><div className="text"><div className="text-lg mb-1">⭐</div><strong>5.0 Google Rating</strong></div></div>
            <div className="proof-item"><div className="text"><div className="text-lg mb-1">📍</div><strong>Kingston, England</strong></div></div>
          </div>

          <div className="text-sm text-muted-foreground mt-4">
            🇬🇧 Serving Kingston & Greater London • +44 7940 476 220
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
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
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
