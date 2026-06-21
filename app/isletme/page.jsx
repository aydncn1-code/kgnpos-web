"use client";

import { useState } from "react";
import Link from "next/link";

const LOGIN_URL = "https://api.kgnpos.com/api/auth/login";

const Logo = () => (
  <Link href="/" className="flex items-center">
    <div style={{ position: 'relative', display: 'inline-block', paddingTop: 14 }}>
      <svg style={{ position: 'absolute', top: 0, right: -7, display: 'block' }} width="26" height="14" viewBox="1 4 21 16" fill="none" stroke="#E85D04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 0 }}>
        <span style={{ fontSize: 26, fontWeight: 900, color: '#111827', letterSpacing: '-0.5px', lineHeight: 1 }}>KGN</span>
        <span style={{ fontSize: 26, fontWeight: 900, color: '#E85D04', letterSpacing: '-0.5px', lineHeight: 1 }}>POS</span>
      </div>
    </div>
  </Link>
);

export default function IsletmePage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("E-posta ve şifre alanları zorunludur.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(LOGIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "E-posta veya şifre hatalı.");
        return;
      }
      localStorage.setItem("kgnpos_token", data.token);
      window.location.href = `https://posapi.kgnpos.com/api/auth/sso?token=${data.token}`;
    } catch {
      setError("Sunucuya bağlanılamadı. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF6EE] flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        <div className="flex justify-center mb-8">
          <Logo />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">🏪</span>
            <h1 className="text-2xl font-extrabold text-gray-900">İşletme Girişi</h1>
          </div>
          <p className="text-sm text-gray-500 mb-7">
            Hesabınız yok mu?{" "}
            <Link href="/register" className="font-semibold text-[#E85D04] hover:underline">
              Kayıt olun
            </Link>
          </p>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                E-posta
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder="ornek@sirket.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#E85D04] focus:ring-2 focus:ring-[#E85D04]/20 transition"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Şifre
                </label>
                <Link href="/forgot-password" className="text-xs text-[#E85D04] hover:underline">
                  Şifremi unuttum
                </Link>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#E85D04] focus:ring-2 focus:ring-[#E85D04]/20 transition"
              />
            </div>

            {error && (
              <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed bg-[#E85D04] hover:bg-[#C44D00]"
            >
              {loading ? "Giriş yapılıyor…" : "Giriş Yap"}
            </button>
          </form>
        </div>

        <Link
          href="/personel/"
          className="mt-4 flex items-center justify-between bg-white rounded-2xl border border-orange-100 px-6 py-4 hover:bg-orange-50 transition-colors group"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🧑‍🍳</span>
            <div>
              <div className="text-sm font-semibold text-gray-800">Garson veya Kasiyer misiniz?</div>
              <div className="text-xs text-gray-500 mt-0.5">POS ekranına buradan giriş yapın</div>
            </div>
          </div>
          <span className="text-[#E85D04] font-bold text-lg group-hover:translate-x-1 transition-transform">→</span>
        </Link>

        <p className="text-center text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} KGNPOS. Tüm hakları saklıdır.
        </p>
      </div>
    </div>
  );
}
