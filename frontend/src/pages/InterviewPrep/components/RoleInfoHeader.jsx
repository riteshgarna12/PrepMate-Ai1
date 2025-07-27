import React from 'react';
import { LuClock3, LuClipboardList, LuSparkle } from 'react-icons/lu';

const RoleInfoHeader = ({
  role,
  topicsToFocus,
  experience,
  questions,
  description,
  lastUpdated,
}) => {
  return (
    <div className="relative bg-[var(--color-bg-main)] py-5 px-5 md:px-10 overflow-hidden rounded-b-xl shadow-sm">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3 flex-wrap">
        {/* Left Side: Role + Topics */}
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)]">
            {role}
          </h1>
          <p className="text-sm text-[var(--color-text-muted)]">{topicsToFocus}</p>
        </div>

        {/* Right Side: Badges */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          <Badge
            icon={<LuSparkle size={16} />}
            text={`Exp: ${experience} ${experience === 1 ? 'Yr' : 'Yrs'}`}
          />
          <Badge icon={<LuClipboardList size={16} />} text={`${questions} Q&A`} />
          <Badge icon={<LuClock3 size={16} />} text={lastUpdated} />
        </div>
      </div>

      {/* Optional Blobs (Background) */}
      <div className="absolute -top-16 -right-20 w-[300px] h-[300px] bg-[var(--color-accent)] opacity-20 blur-[130px] animate-blob1"></div>
      <div className="absolute top-10 right-10 w-[200px] h-[200px] bg-[var(--color-accent-dark)] opacity-30 blur-[100px] animate-blob2"></div>
    </div>
  );
};

const Badge = ({ icon, text }) => (
  <div className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-accent-dark)] bg-[var(--color-bg-light)] px-3 py-1 rounded-full border border-[var(--color-accent)] shadow-sm">
    {icon}
    <span className="whitespace-nowrap">{text}</span>
  </div>
);

export default RoleInfoHeader;
