"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { X, Send, Smartphone } from "lucide-react";

/* ─── Types ───────────────────────────────────────────────── */
interface AppDef {
  id: string;
  name: string;
  tagline: string;
  description: string;
  emoji: string;
  iconBg: string;
  accentHex: string;
  badgeBg: string;
  badgeText: string;
  tags: string[];
  systemPrompt: string;
  welcomeMsg: string;
  renderScreen: () => React.ReactNode;
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

/* ─── Phone screen UIs ────────────────────────────────────── */
function FoodDashScreen() {
  return (
    <div className="flex flex-col h-full text-white" style={{ fontFamily: "system-ui, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 12px 6px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: "#818cf8" }}>FoodDash</span>
        <div style={{ display: "flex", gap: 4 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#6366f1" }} />
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.2)" }} />
        </div>
      </div>
      <div style={{ flex: 1, overflow: "hidden", padding: "8px 10px", display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ background: "rgba(99,102,241,0.2)", borderRadius: 10, padding: "8px 10px", border: "1px solid rgba(99,102,241,0.25)" }}>
          <div style={{ fontSize: 8, color: "#818cf8", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 3 }}>Delivering to</div>
          <div style={{ fontSize: 11, fontWeight: 600 }}>Sector 12, Indore</div>
          <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", marginTop: 1 }}>~40 min avg · 2.4 km away</div>
        </div>
        <div style={{ fontSize: 8, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: 0.5 }}>Popular Now</div>
        {[
          { emoji: "🍕", name: "Pizza Palace", stars: "4.8", time: "25 min", badge: "₹99 off", bg: "rgba(194,65,12,0.2)" },
          { emoji: "🥗", name: "Green Bowl", stars: "4.6", time: "20 min", badge: "", bg: "rgba(6,95,70,0.2)" },
          { emoji: "🍜", name: "Noodle House", stars: "4.7", time: "30 min", badge: "Free del.", bg: "rgba(30,58,95,0.2)" },
        ].map((r) => (
          <div key={r.name} style={{ display: "flex", alignItems: "center", gap: 7, background: r.bg, borderRadius: 10, padding: "7px 10px", border: "1px solid rgba(255,255,255,0.06)" }}>
            <span style={{ fontSize: 16 }}>{r.emoji}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 10, fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.name}</div>
              <div style={{ fontSize: 8, color: "rgba(255,255,255,0.4)" }}>★ {r.stars} · {r.time}</div>
            </div>
            {r.badge && <span style={{ fontSize: 8, background: "rgba(99,102,241,0.2)", color: "#818cf8", padding: "2px 6px", borderRadius: 20 }}>{r.badge}</span>}
          </div>
        ))}
        <div style={{ marginTop: "auto", background: "#6366f1", borderRadius: 10, padding: "7px 10px", textAlign: "center", fontSize: 10, fontWeight: 600 }}>
          View All Restaurants
        </div>
      </div>
      <div style={{ display: "flex", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 6, paddingBottom: 4 }}>
        {[["🏠","Home"],["🔍","Search"],["🛒","Cart"],["👤","Me"]].map(([ic,lb]) => (
          <div key={lb} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, fontSize: 7, color: lb === "Home" ? "#818cf8" : "rgba(255,255,255,0.3)" }}>
            <span style={{ fontSize: 13 }}>{ic}</span>{lb}
          </div>
        ))}
      </div>
    </div>
  );
}

function WealthLensScreen() {
  return (
    <div className="flex flex-col h-full text-white" style={{ fontFamily: "system-ui, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 12px 6px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: "#34d399" }}>WealthLens</span>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981" }} />
      </div>
      <div style={{ flex: 1, overflow: "hidden", padding: "8px 10px", display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ background: "rgba(16,185,129,0.15)", borderRadius: 10, padding: "8px 10px", border: "1px solid rgba(16,185,129,0.25)" }}>
          <div style={{ fontSize: 8, color: "#34d399", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 3 }}>Total Balance</div>
          <div style={{ fontSize: 20, fontWeight: 700 }}>₹45,820</div>
          <div style={{ fontSize: 9, color: "#34d399", marginTop: 1 }}>+₹2,340 this month</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          {[
            { label: "Spent", val: "₹12,340", pct: 62, color: "#f87171" },
            { label: "Saved", val: "₹8,500", pct: 42, color: "#10b981" },
          ].map((s) => (
            <div key={s.label} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: "7px 9px", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 3 }}>{s.label}</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: s.color }}>{s.val}</div>
              <div style={{ height: 3, background: "rgba(255,255,255,0.1)", borderRadius: 2, marginTop: 5, overflow: "hidden" }}>
                <div style={{ width: `${s.pct}%`, height: "100%", borderRadius: 2, background: s.color }} />
              </div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 8, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: 0.5 }}>Recent</div>
        {[
          { emoji: "🛒", name: "Grocery Store", cat: "Food", amt: "-₹850", when: "Today" },
          { emoji: "💊", name: "Pharmacy", cat: "Health", amt: "-₹320", when: "Yesterday" },
        ].map((t) => (
          <div key={t.name} style={{ display: "flex", alignItems: "center", gap: 7, background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "7px 10px", border: "1px solid rgba(255,255,255,0.06)" }}>
            <span style={{ fontSize: 15 }}>{t.emoji}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 10, fontWeight: 500 }}>{t.name}</div>
              <div style={{ fontSize: 8, color: "rgba(255,255,255,0.3)" }}>{t.when} · {t.cat}</div>
            </div>
            <span style={{ fontSize: 10, color: "#f87171", fontWeight: 500 }}>{t.amt}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 6, paddingBottom: 4 }}>
        {[["🏠","Home"],["📊","Stats"],["💳","Budget"],["👤","Me"]].map(([ic,lb]) => (
          <div key={lb} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, fontSize: 7, color: lb === "Home" ? "#34d399" : "rgba(255,255,255,0.3)" }}>
            <span style={{ fontSize: 13 }}>{ic}</span>{lb}
          </div>
        ))}
      </div>
    </div>
  );
}

function LearnFlowScreen() {
  return (
    <div className="flex flex-col h-full text-white" style={{ fontFamily: "system-ui, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 12px 6px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: "#c084fc" }}>LearnFlow</span>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#a855f7" }} />
      </div>
      <div style={{ flex: 1, overflow: "hidden", padding: "8px 10px", display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ background: "rgba(168,85,247,0.15)", borderRadius: 10, padding: "8px 10px", border: "1px solid rgba(168,85,247,0.25)" }}>
          <div style={{ fontSize: 8, color: "#c084fc", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 3 }}>Continue Learning</div>
          <div style={{ fontSize: 11, fontWeight: 600 }}>React Mastery Course</div>
          <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", marginTop: 1 }}>Lesson 8 of 24 · 33% complete</div>
          <div style={{ height: 3, background: "rgba(255,255,255,0.1)", borderRadius: 2, marginTop: 6, overflow: "hidden" }}>
            <div style={{ width: "33%", height: "100%", borderRadius: 2, background: "#a855f7" }} />
          </div>
          <div style={{ marginTop: 7, background: "#a855f7", borderRadius: 8, padding: "5px 10px", textAlign: "center", fontSize: 9, fontWeight: 600 }}>
            Resume Lesson →
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: "7px 9px", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", marginBottom: 3 }}>Streak</div>
            <div style={{ fontSize: 11, fontWeight: 600 }}>🔥 7 days</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: "7px 9px", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", marginBottom: 3 }}>Quiz Score</div>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#c084fc" }}>92%</div>
          </div>
        </div>
        <div style={{ fontSize: 8, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: 0.5 }}>Recommended</div>
        {[
          { emoji: "🎨", name: "UI/UX Fundamentals", meta: "18 lessons · Beginner", badge: "New" },
          { emoji: "⚙️", name: "Node.js Backend", meta: "30 lessons · Intermediate", badge: "" },
        ].map((c) => (
          <div key={c.name} style={{ display: "flex", alignItems: "center", gap: 7, background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "7px 10px", border: "1px solid rgba(255,255,255,0.06)" }}>
            <span style={{ fontSize: 15 }}>{c.emoji}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 10, fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.name}</div>
              <div style={{ fontSize: 8, color: "rgba(255,255,255,0.3)" }}>{c.meta}</div>
            </div>
            {c.badge && <span style={{ fontSize: 8, background: "rgba(168,85,247,0.2)", color: "#c084fc", padding: "2px 6px", borderRadius: 20 }}>{c.badge}</span>}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 6, paddingBottom: 4 }}>
        {[["🏠","Home"],["📚","Courses"],["📈","Progress"],["👤","Me"]].map(([ic,lb]) => (
          <div key={lb} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, fontSize: 7, color: lb === "Home" ? "#c084fc" : "rgba(255,255,255,0.3)" }}>
            <span style={{ fontSize: 13 }}>{ic}</span>{lb}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── App definitions ─────────────────────────────────────── */
const APPS: AppDef[] = [
  {
    id: "fooddash",
    name: "FoodDash",
    tagline: "Food Delivery App",
    description:
      "Mobile-first food ordering with restaurant listings, cart, real-time order tracking, loyalty rewards, and seamless checkout flow.",
    emoji: "🍔",
    iconBg: "#12123a",
    accentHex: "#6366f1",
    badgeBg: "rgba(99,102,241,0.12)",
    badgeText: "#818cf8",
    tags: ["React Native", "Node.js", "MongoDB", "Maps API"],
    systemPrompt:
      "You are the built-in assistant for FoodDash, a mobile food delivery app. Help users browse restaurants, place orders, track deliveries, apply coupons, and resolve issues. Features: restaurant listings with ratings/cuisine filters, cart and checkout, real-time order tracking, order history, loyalty rewards. Respond in 2-3 concise sentences. Be friendly and practical.",
    welcomeMsg:
      "Hi! I'm your FoodDash assistant 🍔 Ask me about restaurants near you, how to track your order, apply coupons, or anything else about the app!",
    renderScreen: () => <FoodDashScreen />,
  },
  {
    id: "wealthlens",
    name: "WealthLens",
    tagline: "Finance Manager App",
    description:
      "Personal finance app with expense tracking, budget goals, transaction history, visual analytics, bill reminders, and multi-account management.",
    emoji: "💰",
    iconBg: "#0a2218",
    accentHex: "#10b981",
    badgeBg: "rgba(16,185,129,0.12)",
    badgeText: "#34d399",
    tags: ["Next.js", "Chart.js", "MongoDB", "Plaid API"],
    systemPrompt:
      "You are the built-in assistant for WealthLens, a personal finance manager app. Help users understand spending, set budgets, analyze transactions, and reach financial goals. Features: expense categorization, monthly budget tracking, transaction history, visual analytics, bill reminders, savings goals, multi-account linking. Respond in 2-3 concise sentences. Use a calm, informative tone.",
    welcomeMsg:
      "Hello! I'm your WealthLens assistant 💰 Ask me about budgeting tips, how to read your spending analytics, or how to set savings goals!",
    renderScreen: () => <WealthLensScreen />,
  },
  {
    id: "learnflow",
    name: "LearnFlow",
    tagline: "E-Learning Platform App",
    description:
      "Learning platform with course catalog, video lessons, progress tracking with daily streaks, interactive quizzes, certificates, and instructor Q&A.",
    emoji: "🎓",
    iconBg: "#180f30",
    accentHex: "#a855f7",
    badgeBg: "rgba(168,85,247,0.12)",
    badgeText: "#c084fc",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Video.js"],
    systemPrompt:
      "You are the built-in assistant for LearnFlow, an e-learning mobile app. Help students find courses, understand content, track progress, and prepare for quizzes. Features: course catalog across tech/design/business/science, video lessons with notes, progress tracking with streaks, interactive quizzes, certificates, instructor Q&A, student community. Respond in 2-3 concise sentences. Use an encouraging, educational tone.",
    welcomeMsg:
      "Hey there, learner! I'm your LearnFlow guide 🎓 Ask me about course recommendations, quiz tips, or anything on your learning journey!",
    renderScreen: () => <LearnFlowScreen />,
  },
];

/* ─── App Window Modal ────────────────────────────────────── */
function AppWindow({ app, onClose }: { app: AppDef; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: app.welcomeMsg },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    inputRef.current?.focus();
    // Block body scroll when modal open
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const newHistory: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newHistory);
    setLoading(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: app.systemPrompt,
          messages: newHistory,
        }),
      });
      const data = await res.json();
      const reply =
        data.content?.find((b: { type: string; text?: string }) => b.type === "text")?.text ||
        "Sorry, I could not respond right now.";
      setMessages([...newHistory, { role: "assistant", content: reply }]);
    } catch {
      setMessages([...newHistory, { role: "assistant", content: "Connection error. Please try again." }]);
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", background: "rgba(5,8,18,0.88)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 24 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-4xl rounded-3xl overflow-hidden"
        style={{
          background: "#0c1120",
          border: `1px solid ${app.accentHex}30`,
          boxShadow: `0 0 100px ${app.accentHex}18, 0 40px 80px rgba(0,0,0,0.7)`,
        }}
      >
        {/* ── Title bar ── */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
              style={{ background: app.iconBg }}
            >
              {app.emoji}
            </div>
            <div>
              <div className="font-display font-bold text-text-primary text-sm leading-tight">{app.name}</div>
              <div className="text-text-muted text-xs">{app.tagline}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-mono px-3 py-1 rounded-full hidden sm:inline-block"
              style={{ background: app.badgeBg, color: app.badgeText }}
            >
              Concept App Design
            </span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-xl flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <X size={14} />
            </button>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="flex flex-col md:flex-row" style={{ height: "clamp(400px, 65vh, 560px)" }}>

          {/* Phone mockup panel */}
          <div
            className="hidden md:flex flex-shrink-0 w-72 items-center justify-center p-6 border-r"
            style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.25)" }}
          >
            <div className="relative">
              {/* glow */}
              <div
                className="absolute inset-4 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ background: app.accentHex }}
              />
              {/* phone shell */}
              <div
                className="relative"
                style={{
                  width: 200,
                  borderRadius: 36,
                  background: "#08091a",
                  border: `2px solid ${app.accentHex}35`,
                  boxShadow: `0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.65)`,
                  overflow: "hidden",
                }}
              >
                {/* status bar */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 16px 4px", background: "rgba(0,0,0,0.4)" }}>
                  <span style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", fontFamily: "monospace" }}>9:41</span>
                  <div style={{ width: 56, height: 14, background: "#08091a", borderRadius: 7 }} />
                  <div style={{ width: 12, height: 8, border: "1px solid rgba(255,255,255,0.3)", borderRadius: 2, display: "flex", alignItems: "center", padding: 1 }}>
                    <div style={{ width: `${70}%`, height: "100%", borderRadius: 1, background: app.accentHex }} />
                  </div>
                </div>
                {/* screen */}
                <div style={{ height: 390, background: "#0d0f1e", overflow: "hidden" }}>
                  {app.renderScreen()}
                </div>
                {/* home bar */}
                <div style={{ display: "flex", justifyContent: "center", padding: "6px 0 10px", background: "rgba(0,0,0,0.4)" }}>
                  <div style={{ width: 60, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.18)" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Chat panel */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* chat header */}
            <div
              className="flex items-center gap-2 px-5 py-3 border-b"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: app.accentHex, boxShadow: `0 0 6px ${app.accentHex}` }}
              />
              <span className="text-text-secondary text-xs font-medium">{app.name} Assistant — Live</span>
              <span className="text-text-muted text-xs ml-auto opacity-60">Powered by Claude</span>
            </div>

            {/* messages */}
            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-3 scroll-smooth">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} items-end gap-2`}
                >
                  {msg.role === "assistant" && (
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-sm flex-shrink-0 mb-0.5"
                      style={{ background: app.iconBg }}
                    >
                      {app.emoji}
                    </div>
                  )}
                  <div
                    className="max-w-xs lg:max-w-sm text-sm leading-relaxed"
                    style={{
                      padding: "9px 13px",
                      borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                      background: msg.role === "user" ? app.accentHex : "rgba(255,255,255,0.07)",
                      color: msg.role === "user" ? "#fff" : "#e8eeff",
                      border: msg.role === "user" ? "none" : "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {/* typing dots */}
              {loading && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-end gap-2"
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                    style={{ background: app.iconBg }}
                  >
                    {app.emoji}
                  </div>
                  <div
                    className="flex gap-1.5 items-center"
                    style={{ padding: "10px 14px", borderRadius: "18px 18px 18px 4px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    {[0, 0.18, 0.36].map((delay, di) => (
                      <span
                        key={di}
                        className="w-2 h-2 rounded-full"
                        style={{ background: app.accentHex, animation: `typingDot 1.2s ${delay}s infinite` }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* input */}
            <div
              className="px-5 py-4 border-t"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <div className="flex gap-3 items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && !loading && sendMessage()}
                  placeholder={`Ask anything about ${app.name}…`}
                  disabled={loading}
                  className="flex-1 text-sm outline-none transition-colors disabled:opacity-50"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: `1px solid rgba(255,255,255,0.1)`,
                    borderRadius: 12,
                    padding: "9px 14px",
                    color: "#e8eeff",
                    fontFamily: "inherit",
                  }}
                />
                <button
                  onClick={sendMessage}
                  disabled={loading || !input.trim()}
                  className="flex items-center justify-center flex-shrink-0 transition-all disabled:opacity-40"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: app.accentHex,
                    border: "none",
                    cursor: loading || !input.trim() ? "not-allowed" : "pointer",
                  }}
                >
                  <Send size={15} color="#fff" />
                </button>
              </div>
              <p className="text-text-muted text-xs mt-2 text-center opacity-60">
                Ask about features, screens, flows, or pricing in {app.name}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes typingDot {
          0%, 60%, 100% { opacity: 0.2; transform: translateY(0); }
          30% { opacity: 1; transform: translateY(-3px); }
        }
      `}</style>
    </motion.div>
  );
}

/* ─── Main exported section ───────────────────────────────── */
export default function AppSamples() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openApp, setOpenApp] = useState<AppDef | null>(null);

  return (
    <>
      <section id="apps" className="section-pad relative" ref={ref}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div
          className="absolute top-1/2 left-1/2 pointer-events-none"
          style={{ transform: "translate(-50%, -50%)", width: 600, height: 400, background: "rgba(88,28,235,0.08)", borderRadius: "50%", filter: "blur(100px)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-purple-500" />
              <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">App Projects</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display font-bold text-4xl md:text-5xl text-text-primary"
            >
              App Development{" "}
              <span className="gradient-text">Portfolio</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="text-text-secondary mt-4 max-w-xl"
            >
              Click any project to open a live app window — explore the UI and chat with a built-in
              assistant that knows each app inside out.
            </motion.p>
          </div>

          {/* App cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {APPS.map((app, i) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                onClick={() => setOpenApp(app)}
                className="group relative rounded-3xl border border-border overflow-hidden cursor-pointer"
                style={{
                  background: "#0c1120",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = `0 0 50px ${app.accentHex}18`;
                  el.style.borderColor = `${app.accentHex}40`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "";
                  el.style.boxShadow = "";
                  el.style.borderColor = "";
                }}
              >
                {/* accent top stripe */}
                <div style={{ height: 2, background: `linear-gradient(90deg, ${app.accentHex}, ${app.accentHex}50)` }} />

                {/* preview area with mini phone */}
                <div
                  className="h-52 relative overflow-hidden flex items-center justify-center"
                  style={{ background: `linear-gradient(145deg, #070a16, ${app.accentHex}0e)` }}
                >
                  {/* mini phone preview */}
                  <div
                    style={{
                      width: 110,
                      borderRadius: 20,
                      overflow: "hidden",
                      background: "#08091a",
                      border: `1.5px solid ${app.accentHex}30`,
                      boxShadow: `0 8px 32px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)`,
                      transform: "perspective(800px) rotateY(-8deg) rotateX(4deg)",
                      transition: "transform 0.4s ease",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1.04)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "perspective(800px) rotateY(-8deg) rotateX(4deg)"; }}
                  >
                    <div style={{ height: 6, background: "rgba(0,0,0,0.5)" }} />
                    <div style={{ height: 200, overflow: "hidden", transform: "scale(0.52) translateY(-50%)", transformOrigin: "top left", width: "192%" }}>
                      {app.renderScreen()}
                    </div>
                    <div style={{ height: 6, background: "rgba(0,0,0,0.5)" }} />
                  </div>

                  {/* hover CTA overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(0,0,0,0.55)" }}
                  >
                    <div
                      className="flex items-center gap-2 px-5 py-2.5 rounded-2xl font-semibold text-sm text-white"
                      style={{ background: app.accentHex }}
                    >
                      <Smartphone size={15} />
                      Open App
                    </div>
                  </div>
                </div>

                {/* card body */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0 mr-3">
                      <span
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded-full inline-block mb-2"
                        style={{ background: app.badgeBg, color: app.badgeText }}
                      >
                        Concept App Design
                      </span>
                      <h3 className="font-display font-bold text-text-primary text-lg leading-tight">
                        {app.name}
                      </h3>
                      <p className="text-text-muted text-xs mt-0.5">{app.tagline}</p>
                    </div>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: app.iconBg }}
                    >
                      {app.emoji}
                    </div>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {app.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {app.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs"
                        style={{ background: `${app.accentHex}10`, color: `${app.accentHex}cc` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white"
                    style={{ background: `linear-gradient(135deg, ${app.accentHex}, ${app.accentHex}90)`, transition: "opacity 0.2s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.88"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                  >
                    <Smartphone size={15} />
                    Launch App Window
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-screen app window */}
      <AnimatePresence>
        {openApp && <AppWindow app={openApp} onClose={() => setOpenApp(null)} />}
      </AnimatePresence>
    </>
  );
}
