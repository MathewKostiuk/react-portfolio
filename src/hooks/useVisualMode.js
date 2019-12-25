import { useState } from "react";

export default function useVisualMode(initial) {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(initial);

  function transition(newMode) {
    setMobileMenuIsOpen(newMode);
  }

  return { transition, mobileMenuIsOpen };
}
