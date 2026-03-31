import { useEffect, useState, useRef } from "react";

interface DecodeTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  onComplete?: () => void;
}

const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ0123456789!@#$%^&*";

export function DecodeText({
  text,
  className = "",
  delay = 0,
  duration = 2,
  onComplete,
}: DecodeTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    const startTimeout = setTimeout(() => {
      setIsAnimating(true);

      const textLength = text.length;
      const totalFrames = Math.floor(duration * 30); // 30fps
      let currentFrame = 0;

      const animate = () => {
        currentFrame++;
        const progress = currentFrame / totalFrames;

        let result = "";
        for (let i = 0; i < textLength; i++) {
          const charProgress = Math.max(
            0,
            Math.min(1, (progress * textLength - i) / 3),
          );

          if (charProgress >= 1) {
            result += text[i];
          } else if (charProgress > 0) {
            // Mix of real char and random char
            if (Math.random() < charProgress) {
              result += text[i];
            } else {
              result += chars[Math.floor(Math.random() * chars.length)];
            }
          } else {
            // Random char or space
            result +=
              text[i] === " "
                ? " "
                : chars[Math.floor(Math.random() * chars.length)];
          }
        }

        setDisplayText(result);

        if (currentFrame < totalFrames) {
          requestAnimationFrame(animate);
        } else {
          setDisplayText(text);
          setIsAnimating(false);
          onComplete?.();
        }
      };

      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => {
      clearTimeout(startTimeout);
      hasStarted.current = false;
    };
  }, [text, delay, duration, onComplete]);

  return (
    <span
      className={`inline-block font-mono ${className} ${isAnimating ? "text-blue-600" : ""}`}
    >
      {displayText ||
        text
          .split("")
          .map(() => " ")
          .join("")}
    </span>
  );
}

// Multi-line decode text component
interface DecodeTextLinesProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  lineDelay?: number;
  duration?: number;
  onComplete?: () => void;
}

export function DecodeTextLines({
  lines,
  className = "",
  lineClassName = "",
  delay = 0,
  lineDelay = 0.5,
  duration = 1.5,
  onComplete,
}: DecodeTextLinesProps) {
  const handleLineComplete = () => {
    onComplete?.();
  };

  return (
    <div className={className}>
      {lines.map((line, index) => (
        <div key={index} className={lineClassName}>
          <DecodeText
            text={line}
            delay={delay + index * lineDelay}
            duration={duration}
            onComplete={handleLineComplete}
          />
        </div>
      ))}
    </div>
  );
}
