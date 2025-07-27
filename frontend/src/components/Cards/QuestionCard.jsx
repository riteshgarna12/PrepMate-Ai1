import React, { useEffect, useRef, useState } from 'react';
import { LuChevronDown, LuPin, LuPinOff, LuSparkles } from 'react-icons/lu';
import AIResponsePreview from '../../pages/InterviewPrep/components/AIResponsePreview';

const QuestionCard = ({
  question,
  answer,
  onLearnMore,
  isPinned,
  onTogglePin,
}) => {
  const [isExpanded, setisExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isExpanded) {
      setHeight(contentRef.current.scrollHeight + 20);
    } else {
      setHeight(0);
    }
  }, [isExpanded]);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-[var(--color-card-border)] mb-5 overflow-hidden transition-all">
      {/* Top */}
      <div className="flex justify-between items-start px-6 pt-5 pb-2">
        <div className="flex gap-3 text-gray-800">
          <span className="font-semibold text-[13px] text-[var(--color-accent)]">Q.</span>
          <h3
            className="text-sm md:text-[15px] font-medium cursor-pointer"
            onClick={() => setisExpanded(!isExpanded)}
          >
            {question}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="text-xs text-indigo-700 bg-indigo-50 border border-indigo-100 hover:border-indigo-300 rounded px-3 py-1.5 flex items-center gap-2"
            onClick={onTogglePin}
          >
            {isPinned ? <LuPinOff /> : <LuPin />} Pin
          </button>
          <button
            className="text-xs text-cyan-800 bg-cyan-50 border border-cyan-100 hover:border-cyan-300 rounded px-3 py-1.5 flex items-center gap-2"
            onClick={() => {
              setisExpanded(true);
              onLearnMore();
            }}
          >
            <LuSparkles /> Learn More
          </button>
          <button
            className="text-gray-400 hover:text-gray-600"
            onClick={() => setisExpanded(!isExpanded)}
          >
            <LuChevronDown
              size={20}
              className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Answer Body */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: `${height}px` }}
      >
        <div
          ref={contentRef}
          className="px-6 pb-5 pt-3 bg-[var(--color-bg-light)] text-sm text-gray-700 rounded-b-xl"
        >
          <AIResponsePreview content={answer} />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
