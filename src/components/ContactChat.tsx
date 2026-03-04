import { useCallback, useEffect, useRef, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { ArrowUpIcon, Mail, Github, Linkedin, Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface ContactInfo {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const contacts: ContactInfo[] = [
  {
    label: "aditrahman5945@gmail.com",
    href: "mailto:aditrahman5945@gmail.com",
    icon: <Mail className="w-4 h-4" />,
  },
  {
    label: "github.com/adit-rah",
    href: "https://github.com/adit-rah",
    icon: <Github className="w-4 h-4" />,
  },
  {
    label: "linkedin.com/in/adit-rahman",
    href: "https://linkedin.com/in/adit-rahman",
    icon: <Linkedin className="w-4 h-4" />,
  },
];

interface Message {
  role: "user" | "bot";
  content: string;
  links?: ContactInfo[];
}

const suggestions = [
  "By email",
  "Through GitHub",
  "On LinkedIn",
];

function parseQuery(input: string): { text: string; links: ContactInfo[] } {
  const lower = input.toLowerCase();

  const emailKeywords = ["email", "mail", "message", "write", "send"];
  const githubKeywords = ["github", "code", "repo", "source", "open source", "git"];
  const linkedinKeywords = ["linkedin", "professional", "connect", "network", "hire", "job", "work"];

  const matched: ContactInfo[] = [];

  if (emailKeywords.some((k) => lower.includes(k))) {
    matched.push(contacts[0]);
  }
  if (githubKeywords.some((k) => lower.includes(k))) {
    matched.push(contacts[1]);
  }
  if (linkedinKeywords.some((k) => lower.includes(k))) {
    matched.push(contacts[2]);
  }

  if (matched.length > 0) {
    const names = matched.map((m) => m.label.split(".")[0] || m.label);
    return {
      text:
        matched.length === 1
          ? `Here you go! You can reach Adit via ${names[0]}:`
          : `Here are the matching ways to reach Adit:`,
      links: matched,
    };
  }

  return {
    text: "I couldn't find a specific match for that — here are all the ways you can reach Adit:",
    links: contacts,
  };
}

function useAutoResizeTextarea(minHeight: number, maxHeight: number) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = useCallback(
    (reset?: boolean) => {
      const textarea = textareaRef.current;
      if (!textarea) return;
      if (reset) {
        textarea.style.height = `${minHeight}px`;
        return;
      }
      textarea.style.height = `${minHeight}px`;
      const newHeight = Math.max(minHeight, Math.min(textarea.scrollHeight, maxHeight));
      textarea.style.height = `${newHeight}px`;
    },
    [minHeight, maxHeight],
  );

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) textarea.style.height = `${minHeight}px`;
  }, [minHeight]);

  return { textareaRef, adjustHeight };
}

export default function ContactChat() {
  const [value, setValue] = useState("");
  const [thinking, setThinking] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { textareaRef, adjustHeight } = useAutoResizeTextarea(44, 120);

  const hasStarted = messages.length > 0;

  const scrollToBottom = useCallback(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, []);

  useEffect(() => {
    setTimeout(scrollToBottom, 50);
  }, [messages, thinking, scrollToBottom]);

  const sendMessage = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || thinking) return;

      const userMsg: Message = { role: "user", content: trimmed };
      setMessages((prev) => [...prev, userMsg]);
      setValue("");
      adjustHeight(true);
      setThinking(true);

      const delay = 600 + Math.random() * 800;
      setTimeout(() => {
        const { text: reply, links } = parseQuery(trimmed);
        const botMsg: Message = { role: "bot", content: reply, links };
        setMessages((prev) => [...prev, botMsg]);
        setThinking(false);
      }, delay);
    },
    [thinking, adjustHeight],
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(value);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <AnimatePresence>
        {!hasStarted && (
          <motion.div
            key="title"
            initial={{ opacity: 1, height: "auto", marginBottom: 32 }}
            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-center overflow-hidden"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Where would you like to reach Adit?
            </h2>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="rounded-xl border border-border bg-muted/30 backdrop-blur-sm overflow-hidden">
        <AnimatePresence>
          {hasStarted && (
            <motion.div
              key="chat"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div
                ref={scrollRef}
                className="max-h-[400px] overflow-y-auto p-5 space-y-4 scroll-smooth"
              >
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex",
                      msg.role === "user" ? "justify-end" : "justify-start",
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[85%] rounded-lg px-3.5 py-2.5 text-sm leading-relaxed",
                        msg.role === "user"
                          ? "bg-foreground text-background"
                          : "bg-muted text-foreground",
                      )}
                    >
                      <p>{msg.content}</p>
                      {msg.links && (
                        <div className="mt-2.5 space-y-1.5">
                          {msg.links.map((link) => (
                            <a
                              key={link.href}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors py-1"
                            >
                              {link.icon}
                              <span>{link.label}</span>
                              <span className="ml-auto">&rarr;</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {thinking && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-lg px-3.5 py-2.5">
                      <Loader2 className="w-4 h-4 text-muted-foreground animate-spin" />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className={cn("border-border p-3", hasStarted && "border-t")}>
          <div className="relative flex items-end gap-2">
            <Textarea
              ref={textareaRef}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                adjustHeight();
              }}
              onKeyDown={handleKeyDown}
              placeholder={hasStarted ? "Ask another question..." : "Ask me anything..."}
              className={cn(
                "flex-1 px-3 py-2.5 resize-none bg-transparent border-none text-foreground text-sm",
                "focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
                "placeholder:text-muted-foreground/50 placeholder:text-sm",
                "min-h-[44px]",
              )}
              style={{ overflow: "hidden" }}
            />
            <button
              type="button"
              onClick={() => sendMessage(value)}
              disabled={thinking}
              className={cn(
                "shrink-0 p-2 rounded-lg transition-colors border cursor-pointer",
                value.trim() && !thinking
                  ? "bg-foreground text-background border-foreground"
                  : "text-muted-foreground border-border hover:border-muted-foreground/60",
              )}
            >
              <ArrowUpIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {!hasStarted && (
          <motion.div
            key="suggestions"
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex flex-wrap justify-center gap-2 mt-4"
          >
            {suggestions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => sendMessage(s)}
                className="px-4 py-2 rounded-full border border-border text-xs text-muted-foreground hover:text-foreground hover:border-muted-foreground/60 transition-colors cursor-pointer"
              >
                {s}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
