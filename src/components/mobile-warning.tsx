"use client";

import { useEffect, useState } from "react";
import { Toast, ToastProvider, ToastViewport, ToastTitle, ToastDescription } from "@/components/ui/toast";

export const MobileWarning = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice =
        /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
          navigator.userAgent
        ) || window.innerWidth < 768;
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (!isMobile) return null;

  return (
    <ToastProvider>
      <Toast variant="destructive">
        <ToastTitle>Mobile Warning</ToastTitle>
        <ToastDescription>
          This website is designed for desktop use only. For the best experience, please use a larger screen.
        </ToastDescription>
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
};