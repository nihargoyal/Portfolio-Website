import { m, useReducedMotion } from 'framer-motion';
import { focusAreas, whatIDoSkills } from '../data/aboutData';
import SkillCard from './about/SkillCard';

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full py-[60px] md:py-[100px] font-sans" id="about">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8 xl:px-16">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-16 w-full">
        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-center max-w-2xl">
          <m.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-7"
          >
            <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3.8rem] leading-[1.12] tracking-tight">
              <span className="block font-serif font-semibold text-[#0F0F0F]">
                Creative
              </span>

              <span className="block font-serif font-semibold text-[#0F0F0F]">
                Direction Built for
              </span>

              <span className="block font-serif font-semibold italic text-[#ff5a00]">
                Business Growth
              </span>
            </h2>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4 mb-16 max-w-md"
          >
            <p className="text-[#0F0F0F] text-[1rem] font-medium leading-relaxed">
              Combining strategic thinking, creative direction, and AI-driven systems to build brands that communicate clearly, scale consistently, and create lasting impact.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <a
              href="#contact"
              className="group inline-flex flex-col sm:flex-row items-center gap-0 bg-[#FAF9F7] border border-[#EBEBEB] rounded-2xl sm:rounded-full p-2 w-full sm:w-auto shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_rgba(255,90,0,0.12)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a00]"
            >
              {/* Left: dot + text */}
              <div className="flex items-center gap-3 px-3 py-1">
                {/* Concentric rings dot */}
                <div className="relative flex items-center justify-center w-10 h-10 shrink-0">
                  <div className="absolute w-10 h-10 bg-[#ff5a00]/10 rounded-full"></div>
                  <div className="absolute w-7 h-7 bg-[#ff5a00]/15 rounded-full"></div>
                  <div className="w-4 h-4 bg-[#ff5a00] rounded-full shadow-[0_0_8px_rgba(255,90,0,0.5)]"></div>
                </div>
                <span className="text-[13px] font-medium text-[#555555] whitespace-nowrap">
                  Available for{' '}
                  <span className="text-[#ff5a00] font-semibold">exciting projects</span>
                </span>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-8 bg-[#E0E0E0] mx-1"></div>

              {/* Right: CTA button */}
              <div className="w-full sm:w-auto px-1">
                <div className="bg-[#E8460A] hover:bg-[#d43e06] text-white rounded-xl sm:rounded-full px-6 py-3 flex items-center justify-center gap-3 transition-colors duration-200 shadow-sm">
                  <span className="text-[14px] font-semibold tracking-[-0.01em] whitespace-nowrap">
                    Let's Connect
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          </m.div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-6 max-w-2xl">
          {/* Top Card */}
          <m.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-6 sm:p-10 flex flex-col sm:flex-row gap-8 justify-between items-center relative overflow-hidden group"
          >
            <div className="flex flex-col gap-8 relative z-10">
              <div className="inline-flex items-center px-4 py-1.5 border border-orange-100 rounded-full max-w-max">
                <span className="text-[10px] font-bold tracking-widest text-[#ff5a00] uppercase">
                  FOCUS AREAS
                </span>
              </div>
              <ul className="space-y-5">
                {focusAreas.map(({ title, icon: Icon }) => (
                  <li
                    key={title}
                    className="group flex items-center gap-3 transition-all duration-300 hover:translate-x-1"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#ff5a00]/10 group-hover:bg-[#ff5a00]/15 flex items-center justify-center shrink-0 transition-colors">
                      <Icon
                        size={20}
                        className="text-[#ff5a00] group-hover:scale-110 transition-transform"
                        strokeWidth={2.25}
                      />
                    </div>

                    <span className="text-[1.25rem] font-semibold text-[#0F0F0F]">
                      {title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative w-40 h-40 flex items-center justify-center mr-4">
              <m.div
                style={{ position: 'absolute', width: '100%', height: '100%' }}
                animate={{ rotate: shouldReduceMotion ? 0 : 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              >
                {(() => {
                  const text = 'CREATE • SCALE • BUILD • DOMINATE • ';
                  const chars = [...text];
                  const total = chars.length;
                  return chars.map((char, i) => (
                    <span
                      key={i}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        transform: `rotate(${(i / total) * 360}deg)`,
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          top: '4px',
                          fontSize: '12px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          color: '#9ca3af',
                          lineHeight: 1,
                          userSelect: 'none',
                        }}
                      >
                        {char}
                      </span>
                    </span>
                  ));
                })()}
              </m.div>
              <div className="absolute text-[#ff5a00] group-hover:scale-110 transition-transform">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="19" x2="19" y2="5"></line>
                  <polyline points="9 5 19 5 19 15"></polyline>
                </svg>
              </div>
            </div>

          </m.div>

          {/* Bottom Card */}
          <m.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-6 sm:p-10 flex flex-col gap-10"
          >
            <div className="inline-flex items-center px-4 py-1.5 border border-orange-100 rounded-full max-w-max">
              <span className="text-[10px] font-bold tracking-widest text-[#ff5a00] uppercase">
                WHAT I DO
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {whatIDoSkills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </m.div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
