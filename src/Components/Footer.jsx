import { navLinks, socialLinks } from '../data/navigationData';

const Footer = ({ onPrivacyClick }) => {
  return (
    <footer className="footer-section">
      {/* Top CTA Section (The Action Card) */}
      <div className="footer-cta-container">
        <div className="footer-cta-card">
          <div className="footer-cta-left">
            <h2 className="footer-cta-title">Build Your Growth Engine.</h2>
            <p className="footer-cta-subtitle">
              Stop micromanaging your brand. Let's scale your business.
            </p>
          </div>
          <div className="footer-cta-right">
            <a href="#contact" className="footer__cta">
              Let's Connect
              <span className="footer__cta-icon" aria-hidden="true">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Middle Divider */}
      <div className="footer-divider"></div>

      {/* Bottom Navigation Row */}
      <div className="footer-nav-container">
        {/* Left Column (Brand) */}
        <div className="footer-brand-column">
          <div className="footer-logo">
            NG<span className="footer-logo-dot"></span>
          </div>
          <p className="footer-copyright">
            © 2026 NiharGoyal – Automated Creative Systems.
          </p>
        </div>

        {/* Right Column (Links & Socials) */}
        <div className="footer-links-column">
          <div className="footer-links-grid">
            <div className="footer-links-row">
              {navLinks.map((link, idx) => (
                <a key={idx} href={link.href} className="footer-link">
                  {link.label}
                </a>
              ))}
            </div>
            <div className="footer-links-row">
              <a
                href="#privacy"
                onClick={(e) => {
                  e.preventDefault();
                  if (onPrivacyClick) onPrivacyClick();
                }}
                className="footer-link"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="footer-socials-row">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .footer-section {
          width: 100%;
          background-color: #0F0F0F;
          border-top: 1px solid rgba(255, 90, 0, 0.4);
          box-shadow: 0px -15px 40px rgba(255, 90, 0, 0.05);
          margin-top: 6rem;
          color: #fff;
          font-family: 'Inter', sans-serif;
          z-index: 10;
        }

        .footer-cta-container {
          max-width: var(--content-width);
          margin: 0 auto;
          padding: 4rem var(--content-padding-desktop);
        }

        .footer-cta-card {
          background: #1A1A1A;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 3rem 4rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.5);
        }

        .footer-cta-left {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-cta-title {
          font-size: 2.25rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .footer-cta-subtitle {
          font-size: 1.1rem;
          color: #A1A1AA;
          margin: 0;
        }

        .footer__cta {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem 0.6rem 0.6rem 1.75rem;
          background-color: #ff5a00;
          color: #121212 !important;
          font-weight: 700;
          font-size: 0.95rem;
          border-radius: 9999px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .footer__cta-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: #121212;
          border-radius: 50%;
          color: #fff;
          flex-shrink: 0;
        }

        .footer-divider {
          width: 100%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-nav-container {
          max-width: var(--content-width);
          margin: 0 auto;
          padding: 3rem var(--content-padding-desktop);
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 2rem;
        }

        .footer-brand-column {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-logo {
          font-size: 2.5rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: #ffffff;
          line-height: 1;
        }

        .footer-logo-dot {
          display: inline-block;
          width: 12px;
          height: 12px;
          background-color: #ff5a00;
          border-radius: 50%;
          margin-left: 6px;
          vertical-align: baseline;
        }

        .footer-copyright {
          font-size: 0.825rem;
          color: #A1A1AA;
          margin: 0;
        }

        .footer-links-column {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 1.5rem;
        }

        .footer-links-grid {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.75rem;
        }

        .footer-links-row {
          display: flex;
          gap: 1.5rem;
        }

        .footer-link {
          color: #A1A1AA;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: #ff5a00;
        }

        .footer-socials-row {
          display: flex;
          gap: 1rem;
        }

        .footer-social-link {
          color: #A1A1AA;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .footer-social-link:hover {
          color: #ff5a00;
          transform: translateY(-2px);
        }

        .footer-social-link svg {
          width: 20px;
          height: 20px;
        }

        @media (max-width: 1400px) {
          .footer-cta-container {
            padding-inline: var(--content-padding-laptop);
          }
          .footer-nav-container {
            padding-inline: var(--content-padding-laptop);
          }
        }

        @media (max-width: 1024px) {
          .footer-cta-container {
            padding-inline: var(--content-padding-tablet);
          }
          .footer-nav-container {
            padding-inline: var(--content-padding-tablet);
          }
        }

        @media (max-width: 768px) {
          .footer-cta-card {
            flex-direction: column;
            align-items: flex-start;
            padding: 2.5rem var(--content-padding-mobile);
            gap: 1.5rem;
          }

          .footer-cta-title {
            font-size: 1.75rem;
          }

          .footer-cta-container {
            padding: 2.5rem var(--content-padding-mobile);
          }

          .footer-nav-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 2.5rem;
            padding: 2rem var(--content-padding-mobile);
          }

          .footer-links-column {
            align-items: flex-start;
            width: 100%;
          }

          .footer-links-grid {
            align-items: flex-start;
          }
        }
      `}} />
    </footer>
  );
};

export default Footer;
