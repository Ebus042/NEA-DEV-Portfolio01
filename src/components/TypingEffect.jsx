import { useState, useEffect } from "react";

const TypingEffect = () => {
  const roles = [
    "Front-End Web Developer",
    "Front-End Mobile Designer",
    "Graphic Designer",
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 2000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span>
      <span className="font-semibold">I'm a </span>
      <span className="text-sky-300">
        {roles[index].substring(0, subIndex)}
      </span>
      <span>{blink ? "|" : " "}</span>
    </span>
  );
};

export default TypingEffect;
