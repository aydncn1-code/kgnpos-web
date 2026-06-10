"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    businessName: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  }

  function validate() {
    if (!form.name.trim())         return "Ad Soyad zorunludur.";
    if (!form.email.trim())        return "E-posta zorunludur.";
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Geçerli bir e-posta girin.";
    if (form.password.length < 6)  return "Şifre en az 6 karakter olmalıdır.";
    if (!form.businessName.trim()) return "İşletme adı zorunludur.";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const err = validate();
    if (err) { setError(err); return; }

    setLoading(true);
    try {
      const res = await fetch("https://api.kgnpos.com/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.name,
          email: form.email,
          password: form.password,
          businessName: form.businessName,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.message || "Kayıt sırasında bir hata oluştu.");
        return;
      }

      setSuccess(true);
    } catch {
      setError("Sunucuya bağlanılamadı. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-[#FFF6EE] flex items-center justify-center px-4">
        <div className="w-full max-w-md text-center bg-white rounded-2xl shadow-sm border border-orange-100 p-10">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 bg-[#FFF0E6]">
            <svg className="w-8 h-8 text-[#E85D04]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Hesabınız Oluşturuldu!</h2>
          <p className="text-gray-500 text-sm mb-8">
            E-posta adresinize bir doğrulama bağlantısı gönderdik. Gelen kutunuzu kontrol edin.
          </p>
          <Link
            href="/login"
            className="inline-block px-8 py-3 rounded-xl text-sm font-semibold text-white bg-[#E85D04] hover:bg-[#C44D00] transition-colors"
          >
            Giriş Sayfasına Git
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF6EE] flex items-center justify-center px-4 py-12">
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
          <h1 className="text-2xl font-extrabold text-gray-900 mb-1">Hesap Oluştur</h1>
          <p className="text-sm text-gray-500 mb-7">
            Zaten hesabınız var mı?{" "}
            <Link href="/login" className="font-semibold text-[#E85D04] hover:underline">
              Giriş yapın
            </Link>
          </p>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* Ad Soyad */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                Ad Soyad
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Emircan Aydın"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#E85D04] focus:ring-2 focus:ring-[#E85D04]/20 transition"
              />
            </div>

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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                Şifre
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                value={form.password}
                onChange={handleChange}
                placeholder="En az 6 karakter"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#E85D04] focus:ring-2 focus:ring-[#E85D04]/20 transition"
              />
            </div>

            {/* İşletme Adı */}
            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1.5">
                İşletme Adı
              </label>
              <input
                id="businessName"
                name="businessName"
                type="text"
                autoComplete="organization"
                value={form.businessName}
                onChange={handleChange}
                placeholder="Şirket / Mağaza adınız"
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
              {loading ? "Kayıt oluşturuluyor…" : "Ücretsiz Kayıt Ol"}
            </button>

            <p className="text-xs text-center text-gray-400">
              Kayıt olarak{" "}
              <a href="#" className="underline hover:text-gray-600">Kullanım Koşulları</a>
              &apos;nı ve{" "}
              <a href="#" className="underline hover:text-gray-600">Gizlilik Politikası</a>
              &apos;nı kabul etmiş olursunuz.
            </p>
          </form>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} KGNPOS. Tüm hakları saklıdır.
        </p>
      </div>
    </div>
  );
}
