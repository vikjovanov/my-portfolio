'use client';

import ExperienceCard from '@/components/experience-card';
import { WORK_EXPERIENCES } from '../work-experiences';
import { twMerge } from 'tailwind-merge';
import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import ExperienceDetailsModal from '@/components/experience-details-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCircleDown } from '@fortawesome/free-regular-svg-icons';

export default function Home() {
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    ReactModal.setAppElement('#main');
  }, []);

  return (
    <main id="main" className="flex flex-col md:h-screen bg-white">
      <div className="block md:absolute md:top-0 md:right-0 md:left-0">
        <div className="flex flex-row flex-wrap justify-between items-center p-4">
          <div>
            {/* <div className="text-md text-slate font-bold">📍 Paris</div> */}
          </div>
          <div className="flex flex-row items-center gap-2">
            <a href="/documents/resume.pdf" target="_blank">
              <div className="cursor-pointer h-12 rounded-md px-3 font-black text-sm flex items-center text-white hover:bg-red-500 bg-hamburger transition-colors duration-100">
                <FontAwesomeIcon icon={faCircleDown} className="pr-3 text-md" />
                Download my resume
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/viktorjovanovic/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-xl text-hamburger hover:text-[#0e76a8] cursor-pointer transition-colors duration-100"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center min-h-[600px] md:min-h-1">
        <div className="relative">
          <img
            src="/assets/images/myself.jpg"
            alt="myself"
            width={208}
            height={208}
            className="rounded-full"
          />
          <div className="absolute animate-waves-hand hover:animate-waves-hand origin-bottom text-shake-hand -bottom-3 -left-14 leading-none">
            👋
          </div>
        </div>
        <h1 className="font-black text-slate text-xl leading-tight text-center">
          I&apos;m Viktor Jovanovic
        </h1>
        <h2 className="font-black text-slate text-lg text-center">
          Frontend Developer{' '}
          <span className="text-md whitespace-nowrap">📍 Paris, FR</span>
        </h2>
      </div>
      <div
        className={twMerge(
          'flex-1 flex flex-col items-center gap-10 overflow-x-auto pt-6 pb-10 md:pb-0',
          'md:px-24 md:flex-row'
        )}
      >
        <div className="px-5 text-slate text-lg font-black text-center">
          My
          <br />
          Work
        </div>
        {WORK_EXPERIENCES().map((exp, idx) => (
          <div
            key={exp.slug}
            className="flex-shrink-0"
            onClick={() => setOpen(exp.id)}
          >
            <ExperienceCard
              index={idx}
              color={exp.color}
              company={exp.company}
              logo={exp.logo}
              type={exp.type}
              role={exp.type === 'work' ? exp.role : undefined}
            />
          </div>
        ))}
      </div>
      <ExperienceDetailsModal
        open={!!open}
        projectId={open}
        onClose={() => setOpen(null)}
      />
    </main>
  );
}
