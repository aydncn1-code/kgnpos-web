"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) { setError("E-posta adresi zorunludur."); return; }
    if (!/\S+@\S+\.\S+/.test(email)) { setError("Geçerli bir e-posta girin."); return; }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://api.kgnpos.com/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      await res.json().catch(() => {});
      setDone(true);
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
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="KGNPOS" className="h-10 w-10" />
            <span className="font-extrabold text-xl text-gray-900">KGNPOS</span>
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-8">
          {done ? (
            <div className="text-center py-2">
              <div className="w-14 h-14 rounded-full bg-[#FFF0E6] flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#E85D04]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-xl font-extrabold text-gray-900 mb-2">E-posta Gönderildi</h1>
              <p className="text-sm text-gray-500 mb-6">
                Eğer bu e-posta kayıtlıysa, şifre sıfırlama bağlantısı gönderildi. Gelen kutunuzu kontrol edin.
              </p>
              <Link href="/login" className="text-sm font-semibold text-[#E85D04] hover:underline">
                Giriş sayfasına dön
              </Link>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-extrabold text-gray-900 mb-1">Şifremi Unuttum</h1>
              <p className="text-sm text-gray-500 mb-7">
                E-posta adresinizi girin, şifre sıfırlama bağlantısı göndereceğiz.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    E-posta
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setError(""); }}
                    placeholder="ornek@sirket.com"
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
                  {loading ? "Gönderiliyor…" : "Sıfırlama Bağlantısı Gönder"}
                </button>

                <p className="text-center text-sm text-gray-500">
                  <Link href="/login" className="font-semibold text-[#E85D04] hover:underline">
                    Giriş sayfasına dön
                  </Link>
                </p>
              </form>
            </>
          )}
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} KGNPOS. Tüm hakları saklıdır.
        </p>
      </div>
    </div>
  );
}
