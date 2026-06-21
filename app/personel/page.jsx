"use client";

import Link from "next/link";

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

export default function KasiyerGarsonPage() {
  return (
    <div className="min-h-screen bg-[#FFF6EE] flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        <div className="flex justify-center mb-8">
          <Logo />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-8 text-center">
          <div className="text-5xl mb-4">🧑‍🍳</div>
          <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Garson & Kasiyer Girişi</h1>
          <p className="text-sm text-gray-500 mb-8">
            Kullanıcı adınız ve şifrenizle POS uygulamasına giriş yapın.
          </p>

          <a
            href="https://kgnpos.com/personel/"
            className="block w-full py-4 rounded-xl text-base font-bold text-white bg-[#E85D04] hover:bg-[#C44D00] transition-colors shadow-lg shadow-orange-100 mb-4"
          >
            POS Ekranını Aç →
          </a>

          <div className="bg-orange-50 rounded-xl p-4 text-left space-y-2">
            <p className="text-xs font-semibold text-gray-700">Nasıl giriş yapılır?</p>
            <ol className="text-xs text-gray-500 space-y-1 list-decimal list-inside">
              <li>Yukarıdaki butona tıklayın</li>
              <li>İşletmenizin size verdiği <span className="font-medium text-gray-700">kullanıcı adı</span> ve <span className="font-medium text-gray-700">şifre</span> ile giriş yapın</li>
              <li>POS ekranı otomatik olarak açılır</li>
            </ol>
          </div>
        </div>

        <Link
          href="/isletme"
          className="mt-4 flex items-center justify-between bg-white rounded-2xl border border-orange-100 px-6 py-4 hover:bg-orange-50 transition-colors group"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏪</span>
            <div>
              <div className="text-sm font-semibold text-gray-800">İşletme sahibi misiniz?</div>
              <div className="text-xs text-gray-500 mt-0.5">Yönetim paneline buradan girin</div>
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
