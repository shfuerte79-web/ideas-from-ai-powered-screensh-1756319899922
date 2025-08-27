import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: '[
  {
    "title": "Contextual Screenshot Summarizer",
    "one_liner": "Turn screenshots into concise summaries and action items instantly.",
    "why_now": "Remote work demands effective communication tools more than ever.",
    "novel_mechanism": "Utilizes NLP in conjunction with OCR to create actionable insights from visual content.",
    "ai_stack": [
      "GPT",
      "RAG",
      "Vision",
      "Embeddings"
    ],
    "edge_use_cases": [
      "Consolidate multi-screenshot information into a single report.",
      "Generate tasks directly from visual content, assigned in team management tools."
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "OCR-based text extraction",
        "Summarization model",
        "Task list integration"
      ],
      "tools": [
        "React",
        "Firebase",
        "Slack API",
        "NLP libraries"
      ],
      "data_bootstrap": [
        "public dataset Z (images with text)",
        "internal demo screenshots"
      ],
      "risk": [
        "Limited user testing",
        "Overlapping with existing tools"
      ],
      "mitigation": [
        "Rapid feedback sessions",
        "Focus on unique feature set"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Transform your communication with one click!",
        "See the difference in summarization quality."
      ],
      "channels": [
        "ProductHunt",
        "LinkedIn",
        "Slack Communities"
      ],
      "pricing": {
        "free": "Limited daily summaries",
        "pro": "$10/month for unlimited use",
        "business": "$50/month with team collaboration features"
      }
    },
    "moat": [
      "User-generated inputs leading to improved models",
      "Direct integrations with popular collaboration tools"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 9,
      "revenue_potential": 7,
      "defensibility": 8
    },
    "total_score": 32,
    "reasoning": "Unlike existing tools, this combines visualization and summarization, targeting a growing need in remote work."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}