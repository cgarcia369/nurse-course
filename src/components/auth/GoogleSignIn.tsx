"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GoogleSignIn({ error }: { error?: string }) {
  const [pending, setPending] = useState(false);
  const [failed, setFailed] = useState(false);
  const message = failed
    ? "No pudimos conectar con Google. Revisa tu conexión e inténtalo de nuevo."
    : error === "OAuthAccountNotLinked"
      ? "Este correo ya está asociado a otra cuenta. Usa el método con el que ingresaste por primera vez."
      : error === "Configuration"
        ? "El inicio de sesión no está disponible en este momento. Inténtalo más tarde."
        : error
          ? "No pudimos iniciar sesión. Inténtalo de nuevo y permite el acceso con tu cuenta de Google."
          : null;

  async function handleSignIn() {
    setPending(true);
    setFailed(false);
    try {
      await signIn("google", { redirectTo: "/" });
    } catch {
      setFailed(true);
      setPending(false);
    }
  }

  return (
    <div>
      {message && (
        <p role="alert" className="mb-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800">
          {message}
        </p>
      )}
      <Button
        type="button"
        variant="outline"
        onClick={handleSignIn}
        disabled={pending}
        aria-busy={pending}
        className="h-14 w-full cursor-pointer justify-between rounded-xl border-stone-300 bg-white px-5 text-sm text-stone-900 shadow-none hover:border-violet-400 hover:bg-violet-50"
      >
        {pending ? (
          <LoaderCircle aria-hidden="true" className="size-5 motion-safe:animate-spin" />
        ) : (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5">
            <path
              fill="#4285F4"
              d="M21.6 12.23c0-.71-.06-1.39-.18-2.05H12v3.88h5.38a4.6 4.6 0 0 1-2 3.02v2.51h3.24c1.89-1.74 2.98-4.3 2.98-7.36Z"
            />
            <path
              fill="#34A853"
              d="M12 22c2.7 0 4.96-.9 6.62-2.41l-3.24-2.51c-.9.6-2.05.97-3.38.97-2.6 0-4.81-1.76-5.6-4.12H3.06v2.59A10 10 0 0 0 12 22Z"
            />
            <path fill="#FBBC05" d="M6.4 13.93a6 6 0 0 1 0-3.86V7.48H3.06a10 10 0 0 0 0 9.04l3.34-2.59Z" />
            <path
              fill="#EA4335"
              d="M12 5.95c1.47 0 2.79.51 3.82 1.51l2.87-2.87A9.6 9.6 0 0 0 12 2a10 10 0 0 0-8.94 5.48l3.34 2.59C7.19 7.71 9.4 5.95 12 5.95Z"
            />
          </svg>
        )}
        <span aria-live="polite">{pending ? "Conectando con Google…" : "Continuar con Google"}</span>
        <ArrowRight aria-hidden="true" className="size-4 text-stone-400" />
      </Button>
    </div>
  );
}
