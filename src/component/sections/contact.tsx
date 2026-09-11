"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm, type FieldError, type UseFormRegisterReturn } from "react-hook-form";

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const fieldWrapVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const floatingLabelClasses =
  "pointer-events-none absolute left-3 top-1/2 origin-left -translate-y-1/2 text-sm text-muted transition-all duration-200 " +
  "peer-focus:top-2.5 peer-focus:translate-y-0 peer-focus:scale-75 peer-focus:text-accent " +
  "peer-[&:not(:placeholder-shown)]:top-2.5 peer-[&:not(:placeholder-shown)]:translate-y-0 peer-[&:not(:placeholder-shown)]:scale-75";

const inputClasses =
  "peer w-full rounded-md border border-border bg-background px-3 pb-2 pt-5 text-sm text-foreground " +
  "focus:outline-none focus:ring-2 focus:ring-accent transition-shadow duration-200";

function FieldError({ error }: { error?: FieldError }) {
  return (
    <AnimatePresence>
      {error && (
        <motion.p
          initial={{ opacity: 0, height: 0, y: -4 }}
          animate={{ opacity: 1, height: "auto", y: 0 }}
          exit={{ opacity: 0, height: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          className="mt-1 text-xs text-red-500"
        >
          {error.message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

function FloatingInput({
  id,
  label,
  type = "text",
  registration,
  error,
}: {
  id: string;
  label: string;
  type?: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
}) {
  return (
    <motion.div variants={fieldWrapVariants}>
      <div className="relative">
        <input {...registration} id={id} type={type} placeholder=" " className={inputClasses} />
        <label htmlFor={id} className={floatingLabelClasses}>
          {label}
        </label>
      </div>
      <FieldError error={error} />
    </motion.div>
  );
}

function SendIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 12L20 4L13 20L11 13L4 12Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SpinnerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={2} strokeOpacity={0.25} />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("idle");
    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? "Something went wrong.");
      }

      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section id="contact" className="border-t border-border bg-surface py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12 text-center text-3xl font-bold sm:text-4xl"
        >
          Contact
        </motion.h2>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-background p-8 text-center shadow-sm sm:p-10"
            >
              <motion.div
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", bounce: 0.5, duration: 0.6, delay: 0.1 }}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
                  <motion.path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.4, delay: 0.35 }}
                  />
                </svg>
              </motion.div>
              <p className="text-lg font-medium">
                Thanks for reaching out — I&apos;ll get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="text-sm font-medium text-accent hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5 rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8"
            >
              <AnimatePresence>
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden rounded-md bg-red-500/10 px-3 py-2 text-center text-sm text-red-500"
                  >
                    {errorMessage}
                  </motion.p>
                )}
              </AnimatePresence>

              <FloatingInput
                id="name"
                label="Name"
                registration={register("name", { required: "Name is required" })}
                error={errors.name}
              />

              <FloatingInput
                id="email"
                label="Email"
                type="email"
                registration={register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email format" },
                })}
                error={errors.email}
              />

              <FloatingInput
                id="subject"
                label="Subject"
                registration={register("subject", {
                  required: "Subject is required",
                  minLength: { value: 10, message: "Subject must be at least 10 characters" },
                })}
                error={errors.subject}
              />

              <motion.div variants={fieldWrapVariants}>
                <div className="relative">
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                      minLength: { value: 20, message: "Message must be at least 20 characters" },
                    })}
                    id="message"
                    rows={5}
                    placeholder=" "
                    className={inputClasses}
                  />
                  <label htmlFor="message" className={floatingLabelClasses}>
                    Message
                  </label>
                </div>
                <FieldError error={errors.message} />
              </motion.div>

              <motion.button
                variants={fieldWrapVariants}
                type="submit"
                disabled={isSubmitting}
                whileHover={isSubmitting ? undefined : { scale: 1.02 }}
                whileTap={isSubmitting ? undefined : { scale: 0.98 }}
                className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-md bg-accent py-3 font-semibold text-accent-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span
                  className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full"
                  aria-hidden="true"
                />
                {isSubmitting ? (
                  <>
                    <SpinnerIcon className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <SendIcon className="h-4 w-4" />
                    Send message
                  </>
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}