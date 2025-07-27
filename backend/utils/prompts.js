const questionAnswerPrompt = (role, experience, topicsToFocus, numberOfQuestions) => `
You are a highly skilled AI that generates technical interview questions and answers.

Instructions:
- Generate exactly ${numberOfQuestions} unique and relevant interview questions.
- Role: ${role}
- Candidate Experience: ${experience} years
- Focus Topics: ${topicsToFocus}
- Each question should include a clear, beginner-friendly explanation.
- If helpful, include a concise code snippet within triple backticks (\`\`\`) in the answer.
- Responses should not include introductions or conclusions.

Output Format:
[
  {
    "question": "Your question here?",
    "answer": "Your detailed answer here."
  }
]

Important:
- ONLY return a valid JSON array as shown above.
- DO NOT include markdown formatting like \`\`\`json or any extra commentary.
`;

const conceptExplainPrompt = (question) => `
You are a skilled AI tutor helping junior developers understand technical concepts.

Instructions:
- Explain the following interview question in depth:
  "${question}"
- Break it down as if teaching a beginner.
- Include code snippets if applicable, using triple backticks (\`\`\`).
- At the end, provide a short, meaningful title summarizing the concept.

Output Format:
{
  "title": "Short title here",
  "explanation": "Detailed explanation here"
}

Important:
- ONLY return a valid JSON object.
- DO NOT include markdown formatting like \`\`\`json or any extra commentary.
`;

module.exports = { questionAnswerPrompt, conceptExplainPrompt };
