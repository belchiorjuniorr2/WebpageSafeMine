"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const initialState = {
  nome: "",
  empresa: "",
  cargo: "",
  email: "",
  telefone: "",
  canal: "",
  mensagem: "",
};

const fieldLabels = {
  nome: "Nome completo",
  empresa: "Empresa",
  cargo: "Cargo",
  email: "Email corporativo",
  telefone: "Telefone (com DDD)",
  canal: "Como sua operação se comunica em campo?",
  mensagem: "Conte-nos sobre sua operação (opcional)",
};

const canalOptions = [
  { value: "radio_digital", label: "Rádio digital" },
  { value: "radio_analogico", label: "Rádio analógico" },
  { value: "celular_app", label: "Celular / app" },
  { value: "nao_sei", label: "Não sei" },
];

function validate(data) {
  const errors = {};
  if (!data.nome.trim()) errors.nome = "Informe seu nome.";
  if (!data.empresa.trim()) errors.empresa = "Informe a empresa.";
  if (!data.cargo.trim()) errors.cargo = "Informe seu cargo.";
  if (!data.email.trim()) {
    errors.email = "Informe um email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Email inválido.";
  }
  const digits = data.telefone.replace(/\D/g, "");
  if (!digits) {
    errors.telefone = "Informe um telefone.";
  } else if (digits.length < 10) {
    errors.telefone = "Telefone deve ter pelo menos 10 dígitos.";
  }
  return errors;
}

export default function DemoForm() {
  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [serverError, setServerError] = useState("");

  function update(field, value) {
    setData((d) => ({ ...d, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const v = validate(data);
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }
    setStatus("loading");
    setServerError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        if (body.errors) setErrors(body.errors);
        setServerError(
          body.message || "Não foi possível enviar agora. Tente novamente."
        );
        setStatus("error");
        return;
      }
      setStatus("success");
      setData(initialState);
    } catch {
      setServerError("Falha de conexão. Tente novamente em instantes.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="bg-white border border-mod-env/30 rounded-2xl p-8 sm:p-10 text-center shadow-sm"
      >
        <div
          className="mx-auto flex items-center justify-center w-14 h-14 rounded-full bg-mod-env/10 text-mod-env"
          aria-hidden="true"
        >
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="mt-5 text-2xl font-semibold text-safemine-text">
          Recebemos seu contato.
        </h3>
        <p className="mt-2 text-safemine-text-mid">
          Nossa equipe retorna em até 1 dia útil para agendar sua demonstração.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-safemine-orange hover:underline"
        >
          Enviar outra solicitação
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl border border-safemine-border/60 p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          name="nome"
          value={data.nome}
          error={errors.nome}
          onChange={update}
          autoComplete="name"
        />
        <Field
          name="empresa"
          value={data.empresa}
          error={errors.empresa}
          onChange={update}
          autoComplete="organization"
        />
        <Field
          name="cargo"
          value={data.cargo}
          error={errors.cargo}
          onChange={update}
          autoComplete="organization-title"
        />
        <Field
          name="email"
          type="email"
          value={data.email}
          error={errors.email}
          onChange={update}
          autoComplete="email"
        />
        <Field
          name="telefone"
          type="tel"
          value={data.telefone}
          error={errors.telefone}
          onChange={update}
          autoComplete="tel"
        />
        <SelectField
          name="canal"
          value={data.canal}
          options={canalOptions}
          onChange={update}
        />
        <Field
          name="mensagem"
          value={data.mensagem}
          error={errors.mensagem}
          onChange={update}
          textarea
          required={false}
          className="sm:col-span-2"
        />
      </div>

      {serverError && (
        <div
          role="alert"
          className="mt-4 flex items-start gap-2 text-sm text-mod-safety bg-mod-safety/5 border border-mod-safety/20 rounded-lg px-3 py-2.5"
        >
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
          <span>{serverError}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-safemine-orange text-white text-base font-semibold px-6 py-3.5 rounded-lg hover:bg-safemine-orange/90 transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" && (
          <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
        )}
        {status === "loading" ? "Enviando…" : "Solicitar demo"}
      </button>

      <p className="mt-3 text-xs text-safemine-muted">
        Ao enviar, você concorda em ser contatado pela equipe SafeMine.
      </p>
    </form>
  );
}

function Field({
  name,
  value,
  error,
  onChange,
  type = "text",
  textarea = false,
  required = true,
  autoComplete,
  className = "",
}) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;
  const Component = textarea ? "textarea" : "input";
  const baseClasses = `mt-1.5 block w-full rounded-lg border px-3.5 py-2.5 text-base text-safemine-text placeholder:text-safemine-muted focus:outline-none focus:ring-2 focus:ring-safemine-orange/30 focus:border-safemine-orange transition-colors ${
    error
      ? "border-mod-safety/60 bg-mod-safety/5"
      : "border-safemine-border bg-white"
  }`;

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-safemine-text"
      >
        {fieldLabels[name]}
        {required && <span className="text-mod-safety ml-0.5" aria-hidden="true">*</span>}
      </label>
      <Component
        id={id}
        name={name}
        type={textarea ? undefined : type}
        rows={textarea ? 4 : undefined}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        autoComplete={autoComplete}
        className={baseClasses}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-mod-safety">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({ name, value, options, onChange, className = "" }) {
  const id = `field-${name}`;
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-safemine-text"
      >
        {fieldLabels[name]}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        className="mt-1.5 block w-full rounded-lg border border-safemine-border bg-white px-3.5 py-2.5 text-base text-safemine-text focus:outline-none focus:ring-2 focus:ring-safemine-orange/30 focus:border-safemine-orange transition-colors"
      >
        <option value="">Selecione…</option>
        {options.map(({ value: v, label }) => (
          <option key={v} value={v}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
