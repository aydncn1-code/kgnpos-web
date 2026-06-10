import Link from "next/link";

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Hızlı Kasa",
    description: "Dokunmatik ekran destekli, sezgisel arayüzüyle saniyeler içinde işlem tamamlayın.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Stok Yönetimi",
    description: "Gerçek zamanlı stok takibi, otomatik uyarılar ve tedarikçi entegrasyonu.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Detaylı Raporlar",
    description: "Satış, kar/zarar ve personel performans raporlarını anlık takip edin.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Personel Yönetimi",
    description: "Kullanıcı rolleri, vardiya takibi ve yetki yönetimi tek platformda.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "Çoklu Ödeme",
    description: "Nakit, kredi kartı, QR kod ve dijital cüzdan ile ödeme alın.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Güvenli & Lisanslı",
    description: "256-bit SSL şifreleme, otomatik yedekleme ve Türkiye mevzuatına uygun e-fatura.",
  },
];

const plans = [
  {
    name: "Başlangıç",
    price: "₺499",
    period: "/ay",
    description: "Küçük işletmeler için ideal",
    features: ["1 Kasa", "Temel stok yönetimi", "Günlük raporlar", "E-posta destek"],
    cta: "Ücretsiz Dene",
    highlight: false,
  },
  {
    name: "İşletme",
    price: "₺999",
    period: "/ay",
    description: "Büyüyen işletmeler için",
    features: ["3 Kasa", "Gelişmiş stok & tedarikçi", "Anlık raporlar", "Personel yönetimi", "7/24 telefon destek"],
    cta: "Hemen Başla",
    highlight: true,
  },
  {
    name: "Kurumsal",
    price: "Özel",
    period: "",
    description: "Zincir mağazalar için",
    features: ["Sınırsız kasa", "Çoklu şube yönetimi", "API entegrasyonu", "Özel raporlama", "Öncelikli destek & SLA"],
    cta: "Teklif Al",
    highlight: false,
  },
];

const stats = [
  { value: "5.000+", label: "Aktif İşletme" },
  { value: "₺2M+", label: "Günlük İşlem Hacmi" },
  { value: "%99.9", label: "Uptime Garantisi" },
  { value: "7/24", label: "Teknik Destek" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="font-bold text-xl text-gray-900">KGNPOS</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Özellikler</a>
              <a href="#pricing" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Fiyatlar</a>
              <a href="#contact" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">İletişim</a>
            </nav>

            <div className="flex items-center gap-3">
              <Link href="/login" className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Giriş Yap
              </Link>
              <Link
                href="/register"
                className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Ücretsiz Dene
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-wide">
            Türkiye&apos;nin En Hızlı POS Sistemi
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            İşletmenizi{" "}
            <span className="text-blue-600">Dijitalleştirin,</span>
            <br />
            Satışlarınızı Artırın
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            KGNPOS ile kasadan depoya, personelden raporlamaya kadar tüm işletme süreçlerinizi tek
            platformdan yönetin. Kurulum yok, karmaşıklık yok.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
            >
              14 Gün Ücretsiz Başla
            </Link>
            <a
              href="#features"
              className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl text-base font-semibold hover:bg-gray-50 transition-colors"
            >
              Özellikleri Keşfet
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-4">Kredi kartı gerekmez • Anında kurulum</p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold mb-1">{stat.value}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Her İşletme İçin Güçlü Araçlar
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              İhtiyacınız olan her şey tek bir yerde. Karmaşık entegrasyonlar olmadan, hemen kullanmaya başlayın.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Şeffaf Fiyatlandırma
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Gizli ücret yok. İşletmenizin büyüklüğüne göre plan seçin, istediğiniz zaman değiştirin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 ${
                  plan.highlight
                    ? "bg-blue-600 text-white shadow-2xl shadow-blue-200 scale-105"
                    : "bg-white border border-gray-200"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1 rounded-full">
                    En Popüler
                  </span>
                )}
                <h3 className={`font-bold text-xl mb-1 ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlight ? "text-blue-100" : "text-gray-500"}`}>
                  {plan.description}
                </p>
                <div className="flex items-end gap-1 mb-6">
                  <span className={`text-4xl font-extrabold ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm mb-1 ${plan.highlight ? "text-blue-100" : "text-gray-500"}`}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <svg
                        className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? "text-blue-200" : "text-blue-600"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={plan.highlight ? "text-blue-100" : "text-gray-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/register"
                  className={`block text-center py-3 rounded-xl font-semibold text-sm transition-colors ${
                    plan.highlight
                      ? "bg-white text-blue-600 hover:bg-blue-50"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Hemen Başlamaya Hazır mısınız?
          </h2>
          <p className="text-blue-100 mb-8 text-lg max-w-xl mx-auto">
            14 gün boyunca tüm özellikleri ücretsiz kullanın. Kredi kartı gerekmez.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              Ücretsiz Hesap Oluştur
            </Link>
            <a
              href="tel:+908501234567"
              className="border border-blue-300 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-500 transition-colors"
            >
              Bizi Arayın
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">K</span>
              </div>
              <span className="font-bold text-white">KGNPOS</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#features" className="hover:text-white transition-colors">Özellikler</a>
              <a href="#pricing" className="hover:text-white transition-colors">Fiyatlar</a>
              <Link href="/login" className="hover:text-white transition-colors">Giriş Yap</Link>
              <Link href="/register" className="hover:text-white transition-colors">Kayıt Ol</Link>
            </nav>
            <p className="text-xs">© {new Date().getFullYear()} KGNPOS. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
