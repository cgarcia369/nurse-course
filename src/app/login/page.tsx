import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { BookOpen, Check, HeartPulse, LockKeyhole, Play, Stethoscope } from "lucide-react";
import GoogleSignIn from "@/components/auth/GoogleSignIn";
import { auth } from "@/lib/auth";

export const metadata: Metadata = { title: "Iniciar sesión | Curso de enfermería" };

export default async function Login({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const session = await auth();
  if (session?.user) redirect("/");
  const { error } = await searchParams;

  return (
    <main className="min-h-dvh bg-[#faf9f6] p-4 text-stone-900 sm:p-6 lg:p-8">
      <div className="mx-auto grid min-h-[calc(100dvh-2rem)] max-w-[1440px] overflow-hidden rounded-3xl border border-stone-200 bg-white sm:min-h-[calc(100dvh-3rem)] lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-[1.08fr_1fr]">
        <section
          aria-labelledby="course-heading"
          className="relative order-2 flex flex-col overflow-hidden bg-[#eeeaf7] p-7 sm:p-12 lg:order-1 lg:p-14 xl:p-16"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-40 size-[540px] rounded-full border border-violet-300/30"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-56 size-[410px] rounded-full border border-violet-300/30"
          />
          <div className="relative flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl bg-[#6b4ba5] text-white">
              <Stethoscope aria-hidden="true" className="size-6" />
            </span>
            <span className="text-sm font-semibold tracking-tight">
              Curso de enfermería<span className="mt-0.5 block text-xs font-normal text-stone-600">Aula virtual</span>
            </span>
          </div>

          <div className="relative my-auto py-12 lg:py-16">
            <p className="mb-5 flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-[#6b4ba5]">
              <span className="size-1.5 rounded-full bg-[#6b4ba5]" /> APRENDE PARA CUIDAR
            </p>
            <h1
              id="course-heading"
              className="max-w-lg text-4xl font-medium leading-[1.12] tracking-[-0.045em] sm:text-5xl xl:text-6xl"
            >
              Tu conocimiento.
              <br />
              Su bienestar.
              <br />
              <span className="text-[#6b4ba5]">Un mejor cuidado.</span>
            </h1>
            <p className="mt-6 max-w-sm text-base leading-7 text-stone-600">
              Fortalece tus conocimientos en cuidado respiratorio, a tu ritmo y desde donde estés.
            </p>

            <div className="mt-9 max-w-sm rounded-2xl border border-white/90 bg-white/75 p-5 shadow-[0_8px_32px_-20px_#6b4ba5] backdrop-blur-sm">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-[#6b4ba5]">
                  <HeartPulse aria-hidden="true" className="size-6" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.14em] text-stone-500">EXPLORA EL CURSO</p>
                  <p className="mt-1 text-sm font-semibold">Cuidado del sistema respiratorio</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-stone-200/80 pt-4 text-xs text-stone-600">
                <span className="flex items-center gap-1.5">
                  <Play aria-hidden="true" className="size-3.5" /> Videos y recursos
                </span>
                <span className="flex items-center gap-1.5">
                  <BookOpen aria-hidden="true" className="size-3.5" /> Evaluaciones
                </span>
              </div>
            </div>
          </div>
          <p className="relative text-xs text-stone-500">Cada aprendizaje cuenta. Cada cuidado también.</p>
        </section>

        <section
          aria-labelledby="login-heading"
          className="order-1 flex flex-col px-7 py-10 sm:px-12 lg:order-2 lg:px-14 xl:px-20"
        >
          <div className="mb-12 flex items-center justify-end gap-2 text-xs text-stone-500">
            <LockKeyhole aria-hidden="true" className="size-3.5" /> Acceso seguro
          </div>
          <div className="mx-auto my-auto w-full max-w-[360px] py-4 lg:py-12">
            <span className="mb-7 flex size-12 items-center justify-center rounded-2xl border border-violet-100 bg-violet-50 text-[#6b4ba5]">
              <BookOpen aria-hidden="true" className="size-5" />
            </span>
            <p className="mb-3 text-xs font-semibold tracking-[0.15em] text-[#6b4ba5]">TU ESPACIO DE APRENDIZAJE</p>
            <h2 id="login-heading" className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              Bienvenido a tu aula
            </h2>
            <p className="mb-8 mt-4 text-sm leading-6 text-stone-500">
              Inicia sesión para comenzar el curso o retomar tu aprendizaje donde lo dejaste.
            </p>
            <GoogleSignIn error={error} />
            <p className="mt-4 text-center text-xs leading-5 text-stone-500">
              Usa tu cuenta de Google. No necesitas
              <br className="hidden sm:block" /> crear una contraseña nueva.
            </p>
            <div className="my-8 h-px bg-stone-100" />
            <ul className="space-y-3 text-sm text-stone-600">
              <li className="flex items-center gap-3">
                <Check aria-hidden="true" className="size-4 shrink-0 text-[#6b4ba5]" /> Todo tu material en un solo
                lugar
              </li>
              <li className="flex items-center gap-3">
                <Check aria-hidden="true" className="size-4 shrink-0 text-[#6b4ba5]" /> Tu progreso se guarda
                automáticamente
              </li>
            </ul>
            <div className="mt-9 rounded-xl bg-[#faf9f6] p-4 text-xs leading-5 text-stone-500">
              <p className="font-medium text-stone-700">¿Es tu primera vez?</p>
              <p className="mt-1">
                Continúa con Google y tu cuenta se creará al ingresar. Si ya tienes una, usa el mismo correo de siempre.
              </p>
            </div>
          </div>
          <p className="mt-12 text-center text-xs text-stone-400">Formación en enfermería · A tu ritmo</p>
        </section>
      </div>
    </main>
  );
}
