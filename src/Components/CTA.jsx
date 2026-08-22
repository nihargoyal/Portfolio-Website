import { useCallback } from 'react';

const CTA = () => {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const subject = `New Inquiry from ${data.name}`;
    const body = `Name: ${data.name}\nEmail: ${data.email}\nProject Type: ${data.projectType}`;

    window.location.href = `mailto:hello@nihargoyal.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }, []);

  return (
    <section
      className="cta-section pt-[60px] pb-[60px] md:pt-[100px] md:pb-[100px] lg:pt-[70px]"
      id="contact"
      style={{ position: 'relative', zIndex: 12 }}
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8 xl:px-16">
        <div className="cta-top-content">
          <div className="cta-left">

            <h2 className="cta-title">
              <span className="cta-kicker">
                Let's Build
              </span>
              <span className="cta-main">
                Your Next
              </span>
              <span className="cta-highlight">
                Growth Engine
              </span>
            </h2>




          </div>

          <div className="cta-right">
            <form className="cta-form-card" onSubmit={handleSubmit}>
              <div className="form-inputs flex flex-col gap-6">
                <div className="flex flex-col md:flex-row gap-6 w-full">
                  <div className="fi-group">
                    <label htmlFor="cta-name">YOUR NAME</label>
                    <input id="cta-name" type="text" name="name" className="fi-input" placeholder="John Doe" autoComplete="name" required />
                  </div>
                  <div className="fi-group">
                    <label htmlFor="cta-email">EMAIL ADDRESS</label>
                    <input id="cta-email" type="email" name="email" className="fi-input" placeholder="hello@example.com" autoComplete="email" required />
                  </div>
                </div>
                <div className="fi-group w-full">
                  <label htmlFor="cta-project">PROJECT TYPE</label>
                  <select id="cta-project" name="projectType" className="fi-input w-full" required defaultValue="">
                    <option value="" disabled hidden>Select a service...</option>
                    <option value="Branding & Strategy">Branding & Strategy</option>
                    <option value="UI/UX & Web Design">UI/UX & Web Design</option>
                    <option value="Automated Systems">Automated Systems</option>
                    <option value="AI Integration">AI Integration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="start-btn-large group/btn" aria-label="Let's Connect">
                Let's Connect
                <div className="start-btn-icon flex items-center justify-center" aria-hidden="true">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </button>

              <div className="fc-footer">
                <div className="fc-reply" role="status"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> Replies within 24 hours</div>
              </div>
            </form>
          </div>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .pt-card {
          transform: translateY(var(--y-rest));
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .pt-card.active, .pt-card:hover {
          transform: translateY(calc(var(--y-rest) - 8px));
          border-color: var(--accent-orange, #ff5a00) !important;
          box-shadow: 0 10px 20px rgba(255, 90, 0, 0.1);
        }

        @keyframes orbitShape {
          0% { transform: rotate(0deg) translateX(15px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(15px) rotate(-360deg); }
        }
        .cta-bg-shape {
          animation: orbitShape 20s linear infinite;
        }

        @keyframes breatheBtn {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .start-btn-large {
          animation: breatheBtn 2s ease-in-out infinite;
        }

        @keyframes blinkDot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .fc-status .dot.green {
          animation: blinkDot 1.5s ease-in-out infinite;
        }

        select.fi-input {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23888888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 1.25rem center;
          background-size: 14px;
          padding-right: 2.75rem;
          cursor: pointer;
        }
        select.fi-input:invalid,
        select.fi-input option[value=""] {
          color: #888888;
        }
      `}} />
    </section>
  );
};

export default CTA;
