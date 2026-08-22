import { useRef, memo } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { cn } from '../../lib/utils';
import sunilImage from '../../assets/logos/sunil.png';
import janeImage from '../../assets/logos/jane.png';
import chaisuttaLogo from '../../assets/logos/chaisutta.png';
import highontalesLogo from '../../assets/logos/highontales.png';
import airenLogo from '../../assets/logos/airen.png';
import kaffeelaLogo from '../../assets/logos/kaffeela.png';
import stellaspireLogo from '../../assets/logos/stellaspire.png';

/* ─── 100% Authentic Website Testimonials Data matching 3-Row Clustered Layout ─── */
const CARDS = [
  /* ROW 1: LEFT */
  {
    id: 1,
    name: 'Raj Gyanee',
    role: 'The Currencypedia',
    avatarColor: '#2563EB',
    avatarImage: sunilImage,
    isLogo: false,
    quote:
      'Working with Nihar felt like having a true creative partner rather than just an editor. From video editing and thumbnails to channel management, he consistently brought ideas that improved our content.',
    highlight: null,
    theme: 'blue',
    quoteMark: true,
    stars: null,
    reactions: [
      { emoji: '❤️', count: '24' },
      { emoji: '💬', count: '3' },
    ],
    pill: null,
    featured: false,
    style: {
      left: '0%',
      top: '0px',
      rotate: -3,
      width: '320px',
      zIndex: 3,
    },
  },
  /* ROW 1: CENTER */
  {
    id: 2,
    name: 'Jane Gentry',
    role: "CEO\u2019s Unscripted Podcast",
    avatarColor: '#8B5CF6',
    avatarImage: janeImage,
    isLogo: false,
    quote:
      'Professional, reliable, and easy to work with. Nihar consistently delivers quality work while',
    highlight: 'making the entire process effortless.',
    theme: 'purple',
    quoteMark: false,
    stars: 5,
    reactions: null,
    pill: null,
    featured: false,
    style: {
      left: '37%',
      top: '-18px',
      rotate: 2,
      width: '330px',
      zIndex: 4,
    },
  },
  /* ROW 1: RIGHT */
  {
    id: 3,
    name: 'Team Chai Sutta Bar',
    role: 'Video Production',
    avatarColor: '#F97316',
    avatarImage: chaisuttaLogo,
    isLogo: true,
    quote:
      'Working with Nihar was a great experience because he consistently brought creative direction, fresh ideas, and a problem-solving mindset to every project.',
    highlight: null,
    theme: 'orange',
    quoteMark: true,
    stars: null,
    reactions: null,
    pill: { emoji: '🚀', label: 'Final Approved', type: 'orange' },
    featured: false,
    style: {
      left: '76%',
      top: '12px',
      rotate: -2,
      width: '330px',
      zIndex: 3,
    },
  },
  /* ROW 2: LEFT */
  {
    id: 4,
    name: 'Ravish Bohare',
    role: 'High On Tales',
    avatarColor: '#22C55E',
    avatarImage: highontalesLogo,
    isLogo: true,
    quote:
      'What stood out most was Nihar\'s ability to deliver high-quality work under demanding timelines without compromising standards. His professionalism earned positive feedback.',
    highlight: null,
    theme: 'green',
    quoteMark: true,
    stars: null,
    reactions: [{ emoji: '❤️', count: '28' }],
    pill: null,
    featured: false,
    style: {
      left: '1%',
      top: '255px',
      rotate: -1.5,
      width: '315px',
      zIndex: 4,
    },
  },
  /* ROW 2: CENTER (THE FEATURED ANCHOR CARD — using Chai Sutta Bar Soundbite) */
  {
    id: 5,
    name: 'Nikita Agrawal',
    role: 'Stellaspire',
    avatarColor: '#27272A',
    avatarImage: stellaspireLogo,
    isLogo: true,
    quote: 'Nihar has an excellent understanding of what makes short-form content engaging. Beyond delivering great edits, he contributed creative ideas, adapted quickly to feedback,',
    highlight: 'and was always invested in helping us achieve better results.',
    theme: 'dark',
    quoteMark: true,
    stars: null,
    reactions: null,
    pill: { emoji: '✨', label: null, type: 'dark' },
    featured: true,
    style: {
      left: '38%',
      top: '240px',
      rotate: -1,
      width: '340px',
      zIndex: 10,
    },
  },
  /* ROW 2: RIGHT */
  {
    id: 6,
    name: 'Team Airen Group',
    role: 'Airen Group',
    avatarColor: '#3B82F6',
    avatarImage: airenLogo,
    isLogo: true,
    quote:
      'Nihar brought fresh creative thinking to our campaigns and understood how to translate ideas into engaging visual content. Proactive with suggestions and always committed.',
    highlight: null,
    theme: 'blue-subtle',
    quoteMark: false,
    stars: 5,
    reactions: null,
    pill: null,
    featured: false,
    style: {
      left: '77%',
      top: '268px',
      rotate: 1.5,
      width: '325px',
      zIndex: 4,
    },
  },
  /* ROW 3: CENTER-LEFT */
  {
    id: 7,
    name: 'Apni Rasoi (Cafe Chain)',
    role: 'Brand Content & Reels',
    avatarColor: '#F59E0B',
    avatarImage: null,
    isLogo: false,
    quote:
      'Nihar helped us create content that truly reflected our brand\'s personality. His creativity and willingness to experiment made every reel feel unique and impactful.',
    highlight: null,
    theme: 'amber',
    quoteMark: true,
    stars: null,
    reactions: null,
    pill: { emoji: '💬', label: 'Verified WhatsApp Check ✓✓', type: 'amber' },
    featured: false,
    style: {
      left: '14%',
      top: '530px',
      rotate: 2,
      width: '330px',
      zIndex: 5,
    },
  },
  /* ROW 3: CENTER-RIGHT (Pull-quote from Raj Gyanee Currencypedia) */
  {
    id: 8,
    name: 'Anubhav',
    role: 'Content Collaboration',
    avatarColor: '#10B981',
    avatarImage: null,
    isLogo: false,
    quote:
      'Nihar has been incredibly consistent throughout our collaboration. His speed, editing expertise, and ability to understand the brief with minimal back-and-forth',
    highlight: 'made him someone we could always depend on for high-quality content.',
    theme: 'green',
    quoteMark: true,
    stars: null,
    reactions: null,
    pill: { emoji: '🔥', label: 'Highly Recommended', type: 'green' },
    featured: false,
    style: {
      left: '58%',
      top: '545px',
      rotate: -2.5,
      width: '330px',
      zIndex: 5,
    },
  },
];

/* ─── UI / UX Micro-Components ────────────────────────────────────────────── */
function StarRating({ count = 5, theme }) {
  const starColors = {
    purple: '#8B5CF6',
    'blue-subtle': '#3B82F6',
    default: '#F59E0B',
  };
  const color = starColors[theme] || starColors.default;

  return (
    <div className="ftw-stars" aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color }}>★</span>
      ))}
    </div>
  );
}

function Avatar({ card }) {
  const initials = card.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <div
      className="ftw-avatar"
      style={{ background: card.avatarImage ? 'transparent' : card.avatarColor }}
    >
      {card.avatarImage ? (
        <img
          src={card.avatarImage}
          alt={card.name}
          loading="lazy"
          decoding="async"
          className={cn(card.isLogo ? 'ftw-avatar-logo' : 'ftw-avatar-photo')}
        />
      ) : (
        <span className="ftw-avatar-initials">{initials}</span>
      )}
    </div>
  );
}

/* ─── GSAP Physics-Driven Card Component ───────────────────────────────────── */
const FloatingCard = memo(({ card }) => {
  const cardRef = useRef(null);
  const floatTweenRef = useRef(null);
  const isFeatured = card.featured;
  const themeClass = `ftw-card--theme-${card.theme}`;

  useGSAP(
    () => {
      if (!cardRef.current) return;

      /* Initial entrance check/animation */
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          delay: (card.id * 0.08) + 0.1,
          ease: 'power3.out',
          onComplete: () => {
            /* Start continuous physics-based floating using GSAP */
            const randomDuration = 3.6 + Math.random() * 2.2;
            const floatDelta = isFeatured ? -10 : -14;
            const rotDelta = (Math.random() - 0.5) * 1.8;

            floatTweenRef.current = gsap.to(cardRef.current, {
              y: floatDelta,
              rotation: card.style.rotate + rotDelta,
              duration: randomDuration,
              yoyo: true,
              repeat: -1,
              ease: 'sine.inOut',
            });

            /* Randomize initial progress so every card floats asynchronously */
            floatTweenRef.current.progress(Math.random());
          },
        }
      );
    },
    { scope: cardRef }
  );

  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    if (floatTweenRef.current) floatTweenRef.current.pause();

    gsap.to(cardRef.current, {
      y: -12,
      scale: 1.035,
      rotation: card.style.rotate,
      zIndex: 50,
      boxShadow: isFeatured
        ? '0 32px 85px rgba(0, 0, 0, 0.38)'
        : '0 28px 75px rgba(0, 0, 0, 0.15)',
      duration: 0.35,
      ease: 'power3.out',
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      rotation: card.style.rotate,
      zIndex: card.style.zIndex,
      boxShadow: isFeatured
        ? '0 24px 70px rgba(0, 0, 0, 0.28)'
        : '0 18px 50px rgba(0, 0, 0, 0.075)',
      duration: 0.45,
      ease: 'power3.out',
      onComplete: () => {
        if (floatTweenRef.current) floatTweenRef.current.play();
      },
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'ftw-card',
        themeClass,
        isFeatured && 'ftw-card--featured'
      )}
      style={{
        position: 'absolute',
        left: card.style.left,
        top: card.style.top,
        width: card.style.width,
        zIndex: card.style.zIndex,
        transform: `rotate(${card.style.rotate}deg)`,
      }}
    >
      {/* header */}
      <div className="ftw-card-header">
        <div className="ftw-card-identity">
          <Avatar card={card} />
          <div>
            <p className="ftw-name">{card.name}</p>
            <p className="ftw-role">{card.role}</p>
          </div>
        </div>

        {/* top-right accent */}
        {card.stars && <StarRating count={card.stars} theme={card.theme} />}
        {card.quoteMark && !card.stars && (
          <span className={cn('ftw-quote-mark', `ftw-quote-mark--${card.theme}`)} aria-hidden="true">
            “
          </span>
        )}
      </div>

      {/* quote body using exact website Inter & Plus Jakarta typography */}
      <p className={cn('ftw-quote', isFeatured && 'ftw-quote--featured')}>
        {card.quote}
        {card.highlight && (
          <span className={cn('ftw-highlight', `ftw-highlight--${card.theme}`)}>
            {' '}{card.highlight}
          </span>
        )}
      </p>

      {/* footer reactions / pills */}
      {(card.reactions || card.pill) && (
        <div className="ftw-footer-badges">
          {card.reactions &&
            card.reactions.map((r, idx) => (
              <span key={idx} className="ftw-reaction-pill">
                <span>{r.emoji}</span>
                <span className="ftw-reaction-count">{r.count}</span>
              </span>
            ))}

          {card.pill && (
            <span className={cn('ftw-pill', `ftw-pill--${card.pill.type || 'default'}`)}>
              <span className="ftw-pill-emoji">{card.pill.emoji}</span>
              {card.pill.label && <span className="ftw-pill-label">{card.pill.label}</span>}
            </span>
          )}
        </div>
      )}
    </div>
  );
});

FloatingCard.displayName = 'FloatingCard';

/* ─── Master Wall Container ───────────────────────────────────────────────── */
const FloatingTestimonialWall = () => {
  return (
    <div className="ftw-wall" aria-label="Customer testimonials">
      {/* subtle radial glass glow backdrop */}
      <div className="ftw-glow" aria-hidden="true" />

      <div className="ftw-stage">
        {CARDS.map((card) => (
          <FloatingCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default FloatingTestimonialWall;
