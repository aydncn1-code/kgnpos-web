import Link from "next/link";

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const navLinks = [
  { label: "Özellikler",  href: "#ozellikler" },
  { label: "Modüller",    href: "#moduller" },
  { label: "Hakkımızda",  href: "#hakkimizda" },
  { label: "Teknoloji",   href: "#teknoloji" },
];

const stats = [
  { value: "8.000+",  label: "Aktif İşletme" },
  { value: "₺5M+",   label: "Günlük İşlem" },
  { value: "%99.9",  label: "Uptime" },
  { value: "7/24",   label: "Teknik Destek" },
];

const features = [
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    title: "Hızlı Kasa",
    desc: "Dokunmatik ekran destekli sezgisel arayüz. Saniyeler içinde işlem, sıfır hata.",
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
    title: "Stok Yönetimi",
    desc: "Gerçek zamanlı stok takibi, otomatik kritik stok uyarısı ve tedarikçi yönetimi.",
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
    title: "Anlık Raporlar",
    desc: "Satış, kâr/zarar ve personel analizlerini tek panelde, anlık olarak izleyin.",
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
    title: "Personel Yönetimi",
    desc: "Rol bazlı yetkilendirme, vardiya takibi ve performans raporları.",
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />,
    title: "Çoklu Ödeme",
    desc: "Nakit, kredi kartı, QR kod ve dijital cüzdan. Tüm ödeme yöntemleri tek ekranda.",
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    title: "e-Fatura & GİB",
    desc: "Türkiye mevzuatına uygun e-fatura, e-arşiv ve GİB entegrasyonu hazır.",
  },
];

const modules = [
  { emoji: "🛒", name: "Kasa & Satış",       desc: "Hızlı satış, iade, iskonto ve fiş yönetimi." },
  { emoji: "📦", name: "Depo & Sevkiyat",    desc: "Çok depolu yönetim, transfer ve fire takibi." },
  { emoji: "📊", name: "Muhasebe Entegrasyon", desc: "Logo, Mikro, ETA ve Netsis bağlantısı." },
  { emoji: "👥", name: "CRM & Müşteri",      desc: "Müşteri kartı, sadakat puanı ve kampanya yönetimi." },
  { emoji: "🖨️", name: "Yazarkasa (ÖKC)",   desc: "Tüm ÖKC markaları ile uyumlu, sertifikalı." },
  { emoji: "📱", name: "Mobil Uygulama",     desc: "iOS ve Android ile işletmenizi her yerden izleyin." },
];

const techs = [
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />,
    title: "Bulut Tabanlı",
    desc: "Verileriniz güvenli bulut altyapısında, her cihazdan erişilebilir.",
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />,
    title: "Gerçek Zamanlı Senkronizasyon",
    desc: "Tüm kasalar ve şubeler arasında anlık veri akışı, sıfır gecikme.",
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />,
    title: "256-bit SSL Şifreleme",
    desc: "Banka düzeyinde güvenlik. Tüm veriler şifreli aktarılır ve saklanır.",
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />,
    title: "Otomatik Yedekleme",
    desc: "Saatlik otomatik yedek. Veri kaybı riski sıfır, geri yükleme tek tık.",
  },
];

/* ─── Icon wrapper ──────────────────────────────────────────────────────────── */
function Icon({ children, className = "" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      {children}
    </svg>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────────── */
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* ── Navbar ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-8">

            {/* Logo — sol */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#E85D04]">
                <span className="text-white font-extrabold text-sm tracking-tight">K</span>
              </div>
              <span className="font-extrabold text-lg text-gray-900 tracking-tight">KGNPOS</span>
            </Link>

            {/* Nav linkleri — orta */}
            <nav className="hidden md:flex items-center gap-7 flex-1 justify-center">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium text-gray-600 hover:text-[#E85D04] transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Giriş yap — sağ */}
            <div className="ml-auto flex-shrink-0">
              <Link
                href="/login"
                className="text-sm font-semibold text-white px-5 py-2.5 rounded-lg transition-colors bg-[#E85D04] hover:bg-[#C44D00]"
              >
                Giriş Yap
              </Link>
            </div>

          </div>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#FFF6EE] py-24 md:py-36">
        {/* Dekoratif daireler */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 bg-[#E85D04] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-10 bg-[#E85D04] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 text-[#E85D04] bg-[#FFE8D6]">
            Türkiye&apos;nin Tercih Ettiği POS Sistemi
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            İşletmenizi Yönetin,<br />
            <span className="text-[#E85D04]">Satışlarınızı Artırın</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            Kasadan depoya, personelden muhasebeye kadar tüm süreçlerinizi tek
            platformdan yönetin. Kurulum yok, karmaşıklık yok — sadece büyüme.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="px-8 py-4 rounded-xl text-base font-semibold text-white transition-colors shadow-lg shadow-orange-200 bg-[#E85D04] hover:bg-[#C44D00]"
            >
              14 Gün Ücretsiz Dene
            </Link>
            <a
              href="#ozellikler"
              className="px-8 py-4 rounded-xl text-base font-semibold text-gray-700 border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
            >
              Özellikleri Keşfet →
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-4">Kredi kartı gerekmez · Anında kurulum</p>
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#E85D04] py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-extrabold mb-1">{s.value}</div>
                <div className="text-sm text-orange-100">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Özellikler ─────────────────────────────────────────────────────── */}
      <section id="ozellikler" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E85D04]">Özellikler</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
              Her İşletme İçin Eksiksiz Araçlar
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              İhtiyacınız olan her şey tek çatı altında. Karmaşık entegrasyonlar olmadan, hemen kullanmaya başlayın.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-7 rounded-2xl border border-gray-100 hover:border-[#E85D04]/30 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-[#E85D04] bg-[#FFF0E6] group-hover:bg-[#E85D04] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6">{f.icon}</Icon>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hakkımızda ─────────────────────────────────────────────────────── */}
      <section id="hakkimizda" className="py-24 bg-[#FFF6EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Sol — metin */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E85D04]">Hakkımızda</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                2015&apos;ten Bu Yana<br />Perakende Teknolojisinde
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                KGNPOS, küçük esnaftan büyük zincir mağazalara kadar binlerce işletmenin
                güvenle kullandığı yerli bir POS yazılımıdır. Türkiye&apos;nin dört bir yanındaki
                işletmeler KGNPOS ile kasalarını, stoklarını ve personellerini yönetiyor.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                GİB entegrasyonu, ÖKC uyumluluğu ve Türk muhasebe standartlarına tam
                uyumluluk ile yasal gereksinimlerinizi zahmetsizce karşılıyoruz.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                {[
                  "ISO 27001 Sertifikalı",
                  "GİB Onaylı",
                  "ÖKC Uyumlu",
                  "KVKK Uyumlu",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full text-[#E85D04] border border-[#E85D04]/30 bg-white"
                  >
                    ✓ {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Sağ — rakamlar */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { val: "10 Yıl+",   txt: "Sektör Deneyimi" },
                { val: "81 İl",     txt: "Türkiye Geneli Hizmet" },
                { val: "50+",       txt: "Muhasebe Entegrasyonu" },
                { val: "3 Dak.",    txt: "Ortalama Destek Yanıt Süresi" },
              ].map((item) => (
                <div
                  key={item.txt}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100"
                >
                  <div className="text-3xl font-extrabold text-[#E85D04]">{item.val}</div>
                  <div className="mt-1 text-sm text-gray-500">{item.txt}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Modüller ───────────────────────────────────────────────────────── */}
      <section id="moduller" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E85D04]">Modüller</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
              İşletmenize Özel Çözümler
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Sadece ihtiyacınız olan modülleri seçin. Her modül birbiriyle tam entegre çalışır.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m) => (
              <div
                key={m.name}
                className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:border-[#E85D04]/40 hover:shadow-md transition-all group"
              >
                <div className="text-3xl leading-none mt-0.5 group-hover:scale-110 transition-transform">
                  {m.emoji}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{m.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Teknoloji ──────────────────────────────────────────────────────── */}
      <section id="teknoloji" className="py-24 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E85D04]">Teknoloji</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
              Güvenilir Altyapı, Kesintisiz Hizmet
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Kurumsal düzey güvenlik ve ölçeklenebilirlik ile her büyüklükteki işletmeye hazır.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techs.map((t) => (
              <div
                key={t.title}
                className="p-6 rounded-2xl border border-white/10 hover:border-[#E85D04]/50 hover:bg-white/5 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-[#E85D04] bg-[#E85D04]/10 group-hover:bg-[#E85D04] group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5">{t.icon}</Icon>
                </div>
                <h3 className="font-bold text-white mb-2">{t.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#E85D04]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            Hemen Başlayın,<br />Farkı Görün
          </h2>
          <p className="text-orange-100 text-lg mb-10 max-w-xl mx-auto">
            14 gün boyunca tüm özellikleri ücretsiz kullanın. Kredi kartı gerekmez,
            sözleşme yok, her an iptal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="px-8 py-4 rounded-xl font-semibold text-[#E85D04] bg-white hover:bg-orange-50 transition-colors"
            >
              Ücretsiz Hesap Oluştur
            </Link>
            <a
              href="tel:+908501234567"
              className="px-8 py-4 rounded-xl font-semibold text-white border border-white/40 hover:bg-white/10 transition-colors"
            >
              📞 Bizi Arayın
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="bg-gray-950 text-gray-500 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md flex items-center justify-center bg-[#E85D04]">
                <span className="text-white font-extrabold text-xs">K</span>
              </div>
              <span className="font-bold text-white text-sm">KGNPOS</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
              ))}
              <Link href="/login"   className="hover:text-white transition-colors">Giriş Yap</Link>
              <Link href="/register" className="hover:text-white transition-colors">Kayıt Ol</Link>
            </nav>
            <p className="text-xs">© {new Date().getFullYear()} KGNPOS. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
