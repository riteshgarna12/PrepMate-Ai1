import React from 'react';
import { LuTrash2 } from 'react-icons/lu';
import { getInitials } from '../../utils/helper';

const SummaryCard = ({
  role,
  topicsToFocus,
  experience,
  questions,
  description,
  lastUpdated,
  onSelect,
  onDelete,
}) => {
  return (
    <div
      className="bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-xl p-2 overflow-hidden cursor-pointer hover:shadow-xl transition-shadow relative group"
      onClick={onSelect}
    >
      {/* Top Section - Light Blue Background */}
      <div
        className="rounded-lg p-4 relative"
        style={{ backgroundColor: 'var(--color-card-header-bg)' }}
      >
        <div className="flex items-start">
          <div className="flex-shrink-0 w-12 h-12 bg-white rounded-md flex items-center justify-center mr-4 shadow-sm">
            <span className="text-lg font-semibold text-[var(--color-text-main)]">
              {getInitials(role)}
            </span>
          </div>

          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-[17px] font-semibold text-[var(--color-text-main)]">
                  {role}
                </h2>
                <p className="text-xs text-[var(--color-text-muted)]">
                  {topicsToFocus}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Delete Button */}
        <button
          className="hidden group-hover:flex items-center gap-1 text-xs text-rose-500 font-medium bg-white px-2.5 py-1 rounded border border-rose-300 hover:bg-white absolute top-2 right-2 transition"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          <LuTrash2 size={14} />
        </button>
      </div>

      {/* Bottom Section - Inner Card */}
      <div className="px-3 pb-3">
        <div className="flex flex-wrap items-center gap-2 mt-4">
          <div className="text-[10px] font-medium text-[var(--color-text-main)] px-3 py-1 border border-[var(--color-accent-dark)] rounded-full">
            Experience: {experience} {experience == 1 ? 'Year' : 'Years'}
          </div>

          <div className="text-[10px] font-medium text-[var(--color-text-main)] px-3 py-1 border border-[var(--color-accent-dark)] rounded-full">
            {questions} Q&A
          </div>

          <div className="text-[10px] font-medium text-[var(--color-text-main)] px-3 py-1 border border-[var(--color-accent-dark)] rounded-full">
            Last Updated: {lastUpdated}
          </div>
        </div>

        <p className="text-[12px] text-[var(--color-text-muted)] font-medium mt-3 line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;
