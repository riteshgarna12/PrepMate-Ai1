import React, { useState } from 'react';
import { LuCopy, LuCheck, LuCode } from 'react-icons/lu';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const AIResponsePreview = ({ content }) => {
  if (!content) return null;

  return (
    <div className="text-[14px] prose prose-slate max-w-none dark:prose-invert">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ className, children }) {
            const match = /language-(\w+)/.exec(className || '');
            const language = match ? match[1] : '';
            const isInline = !className;
            return !isInline ? (
              <CodeBlock
                code={String(children).replace(/\n$/, '')}
                language={language}
              />
            ) : (
              <code className="px-1 py-0.5 bg-gray-100 rounded text-sm">
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

const CodeBlock = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-gray-50 border border-gray-200 rounded-md my-5 overflow-hidden">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-100 border-b border-gray-200">
        <div className="text-xs text-gray-600 font-semibold flex items-center gap-2">
          <LuCode size={14} /> {language || 'Code'}
        </div>
        <button
          onClick={copyCode}
          className="text-gray-500 hover:text-gray-700 relative group"
        >
          {copied ? <LuCheck size={16} className="text-green-600" /> : <LuCopy size={16} />}
          {copied && (
            <span className="absolute -top-8 right-0 bg-black text-white text-xs px-2 py-1 rounded-md">
              Copied!
            </span>
          )}
        </button>
      </div>
      <pre className="p-4 text-xs overflow-x-auto">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default AIResponsePreview;
