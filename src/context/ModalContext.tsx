"use client";

import React, { createContext, useContext, useState } from "react";

interface ModalContextType {
  isQuoteOpen: boolean;
  openQuote: (defaultProjectType?: string) => void;
  closeQuote: () => void;
  isStoryOpen: boolean;
  openStory: () => void;
  closeStory: () => void;
  selectedProjectType?: string;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [selectedProjectType, setSelectedProjectType] = useState<string | undefined>(undefined);

  const openQuote = (defaultProjectType?: string) => {
    setSelectedProjectType(defaultProjectType);
    setIsQuoteOpen(true);
  };

  const closeQuote = () => {
    setIsQuoteOpen(false);
    setSelectedProjectType(undefined);
  };

  const openStory = () => setIsStoryOpen(true);
  const closeStory = () => setIsStoryOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isQuoteOpen,
        openQuote,
        closeQuote,
        isStoryOpen,
        openStory,
        closeStory,
        selectedProjectType,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
