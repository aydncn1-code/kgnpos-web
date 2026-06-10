"use client";

import { useState } from "react";
import Link from "next/link";

const LOGIN_URL = "https://api.kgnpos.com/api/auth/login";

export default function LoginPage() {
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

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#E85D04]">
              <span className="text-white font-extrabold text-base">K</span>
            </div>
            <span className="font-extrabold text-xl text-gray-900">KGNPOS</span>
          </Link>
        </div>

        {/* Kart */}
        <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-8">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-1">Giriş Yap</h1>
          <p className="text-sm text-gray-500 mb-7">
            Hesabınız yok mu?{" "}
            <Link href="/register" className="font-semibold text-[#E85D04] hover:underline">
              Kayıt olun
            </Link>
          </p>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* E-posta */}
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

            {/* Şifre */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Şifre
                </label>
                <a href="#" className="text-xs text-[#E85D04] hover:underline">
                  Şifremi unuttum
                </a>
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

            {/* Hata mesajı */}
            {error && (
              <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed bg-[#E85D04] hover:bg-[#C44D00]"
            >
              {loading ? "Giriş yapılıyor…" : "Giriş Yap"}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} KGNPOS. Tüm hakları saklıdır.
        </p>
      </div>
    </div>
  );
}
