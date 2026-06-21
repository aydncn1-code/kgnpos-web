import Link from "next/link";
import LazyYoutube from "./components/LazyYoutube";
import PricingSection from "./components/PricingSection";
import ContactForm from "./components/ContactForm";
import MobileNav from "./components/MobileNav";

/* ─── Nav ───────────────────────────────────────────────────────────────────── */

const navLinks = [
  { label: "Özellikler",  href: "#ozellikler" },
  { label: "Demo",        href: "#demo" },
  { label: "Modüller",    href: "#moduller" },
  { label: "Hakkımızda",  href: "#hakkimizda" },
  { label: "Teknoloji",   href: "#teknoloji" },
  { label: "Fiyatlar",    href: "#fiyatlar" },
  { label: "SSS",         href: "#sss" },
  { label: "İletişim",   href: "#iletisim" },
];

const PLAN_DESC = {
  trial:      "14 gün boyunca tüm özellikleri deneyin.",
  starter:    "Küçük işletmeler için ideal başlangıç paketi.",
  pro:        "Büyüyen işletmeler için tüm özellikler.",
  enterprise: "Zincir mağaza ve kurumsal çözümler.",
};

function mapPlan(p) {
  const monthly = Number(p.price_monthly);
  return {
    id: p.id,
    name: p.display_name,
    planKey: p.name,
    price: monthly === 0 ? "₺0" : `₺${monthly.toLocaleString("tr-TR")}`,
    period: "/ay",
    rawPrice: monthly,
    desc: PLAN_DESC[p.name] || p.display_name,
    features: Array.isArray(p.features) ? p.features : (() => { try { return JSON.parse(p.features || "[]"); } catch { return []; } })(),
    cta: monthly === 0 ? "Ücretsiz Başla" : "Satın Al",
    highlight: p.name === "pro",
  };
}

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "KGNPOS",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "TRY",
    description: "14 günlük ücretsiz deneme",
  },
  description: "Restoran, kafe ve perakende işletmeleri için bulut tabanlı POS ve işletme yönetim sistemi.",
  url: "https://kgnpos.com",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "320",
  },
};


/* ─── Page (Server Component) ───────────────────────────────────────────────── */
export default async function LandingPage() {
  let plans = [];
  let cms = {};
  try {
    const [plansRes, cmsRes] = await Promise.all([
      fetch("https://api.kgnpos.com/api/subscription/plans", { next: { revalidate: 60 } }),
      fetch("https://api.kgnpos.com/api/website",            { next: { revalidate: 60 } }),
    ]);
    if (plansRes.ok) {
      const rows = await plansRes.json();
      plans = rows.map(mapPlan);
    }
    if (cmsRes.ok) cms = await cmsRes.json();
  } catch {
    // fallback to hardcoded defaults below
  }

  const cmsContact  = cms.contact  || {};
  const cmsHero     = cms.hero     || {};
  const cmsStats    = cms.stats    || [];
  const cmsFeatures = cms.features || [];
  const cmsModules  = cms.modules  || [];
  const cmsAbout    = cms.about    || {};
  const cmsTech     = cms.tech     || [];
  const cmsFaqs     = cms.faqs     || [];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KGNPOS",
    url: "https://kgnpos.com",
    logo: "https://kgnpos.com/logo.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: (cmsContact.phone || '+90 533 543 01 82').replace(/\s/g, '-'),
      contactType: "customer support",
      availableLanguage: "Turkish",
      hoursAvailable: "Mo-Su 00:00-23:59",
    },
    sameAs: [
      "https://www.instagram.com/kgnpos",
      ...(cmsContact.instagram && cmsContact.instagram !== '@kgnpos'
        ? [`https://www.instagram.com/${cmsContact.instagram.replace('@','')}`]
        : []),
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cmsFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Navbar ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-8">

            <Link href="/" className="flex items-center flex-shrink-0">
              <div style={{position:'relative',display:'inline-block',paddingTop:10}}>
                <svg style={{position:'absolute',top:0,right:-5,display:'block'}} width="20" height="11" viewBox="1 4 21 16" fill="none" stroke="#E85D04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                </svg>
                <div style={{display:'flex',alignItems:'baseline'}}>
                  <span style={{fontSize:20,fontWeight:900,color:'#111827',letterSpacing:'-0.5px',lineHeight:1}}>KGN</span>
                  <span style={{fontSize:20,fontWeight:900,color:'#E85D04',letterSpacing:'-0.5px',lineHeight:1}}>POS</span>
                </div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-7 flex-1 justify-center">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-sm font-medium text-gray-600 hover:text-[#E85D04] transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:block ml-auto flex-shrink-0">
              <Link href="/isletme" className="text-sm font-semibold text-white px-5 py-2.5 rounded-lg transition-colors bg-[#E85D04] hover:bg-[#C44D00]">
                Giriş Yap
              </Link>
            </div>

            <MobileNav links={navLinks} />

          </div>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#FFF6EE] py-24 md:py-36">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 bg-[#E85D04] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-10 bg-[#E85D04] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 text-[#E85D04] bg-[#FFE8D6]">
            {cmsHero.badge || 'Bulut Tabanlı Adisyon Programı & Tablet POS'}
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            {cmsHero.h1_1 || 'İşletmenizi Yönetin,'}<br />
            <span className="text-[#E85D04]">{cmsHero.h1_2 || 'Satışlarınızı Artırın'}</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            {cmsHero.p || 'Restoran, kafe ve fast food işletmeleri için bulut tabanlı POS ve adisyon sistemi. Masa yönetimi, QR menü, paket servis, e-fatura ve raporlama tek platformda.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="px-8 py-4 rounded-xl text-base font-semibold text-white transition-colors shadow-lg shadow-orange-200 bg-[#E85D04] hover:bg-[#C44D00]">
              14 Gün Ücretsiz Dene
            </Link>
            <a href="#ozellikler" className="px-8 py-4 rounded-xl text-base font-semibold text-gray-700 border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
              Özellikleri Keşfet →
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-4">Kredi kartı gerekmez · Anında kurulum</p>
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#E85D04] py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {cmsStats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-extrabold mb-1">{s.value}</div>
                <div className="text-sm text-orange-100">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Demo Video ─────────────────────────────────────────────────────── */}
      <section id="demo" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E85D04]">Canlı Demo</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
              KgnPOS&apos;u Çalışırken Görün
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Gerçek bir işletmede hızlı kasa, stok takibi ve raporları tek ekranda nasıl yönettiğimizi izleyin.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-[320px] sm:max-w-[360px] rounded-[2rem] overflow-hidden shadow-2xl shadow-orange-100 border-[3px] border-[#E85D04]/20 bg-black">
              <div className="relative w-full" style={{ paddingTop: "177.78%" }}>
                <LazyYoutube videoId="fojmdVoIOQU" title="KgnPOS Canlı Demo" />
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register" className="px-8 py-4 rounded-xl text-base font-semibold text-white text-center transition-colors shadow-lg shadow-orange-200 bg-[#E85D04] hover:bg-[#C44D00]">
              Ücretsiz Dene
            </a>
            <a href="#ozellikler" className="px-8 py-4 rounded-xl text-base font-semibold text-gray-700 border border-gray-200 bg-white hover:bg-gray-50 transition-colors text-center">
              Özellikleri Keşfet →
            </a>
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
            {cmsFeatures.map((f) => (
              <div key={f.title} className="group p-7 rounded-2xl border border-gray-100 hover:border-[#E85D04]/30 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-[#E85D04] bg-[#FFF0E6] group-hover:bg-[#E85D04] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={f.path} />
                  </svg>
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

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E85D04]">Hakkımızda</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                {cmsAbout.heading1 || "2025'ten Bu Yana"}<br />{cmsAbout.heading2 || 'Perakende Teknolojisinde'}
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                {cmsAbout.p1 || "KGNPOS, küçük esnaftan büyük zincir mağazalara kadar binlerce işletmenin güvenle kullandığı yerli bir POS yazılımıdır. Türkiye'nin dört bir yanındaki işletmeler KGNPOS ile kasalarını, stoklarını ve personellerini yönetiyor."}
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {cmsAbout.p2 || 'Uyumsoft, EDM, Türkkep ve Foriba e-fatura entegrasyonları, ÖKC uyumluluğu ve Türk muhasebe standartlarına tam uyumluluk ile yasal gereksinimlerinizi zahmetsizce karşılıyoruz.'}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                {(cmsAbout.badges || ["ISO 27001 Sertifikalı", "e-Fatura Entegrasyonlu", "ÖKC Uyumlu", "KVKK Uyumlu"]).map((badge) => (
                  <span key={badge} className="text-xs font-semibold px-3 py-1.5 rounded-full text-[#E85D04] border border-[#E85D04]/30 bg-white">
                    ✓ {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {(cmsAbout.stats || [
                { val: "2025",    txt: "Kuruluş Yılı" },
                { val: "81 İl",   txt: "Türkiye Geneli Hizmet" },
                { val: "50+",     txt: "Muhasebe Entegrasyonu" },
                { val: "3 Dak.",  txt: "Ortalama Destek Yanıt Süresi" },
              ]).map((item) => (
                <div key={item.txt} className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100">
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
            {cmsModules.map((m) => (
              <div key={m.name} className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:border-[#E85D04]/40 hover:shadow-md transition-all group">
                <div className="text-3xl leading-none mt-0.5 group-hover:scale-110 transition-transform">{m.emoji}</div>
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
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Kurumsal düzey güvenlik ve ölçeklenebilirlik ile her büyüklükteki işletmeye hazır.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cmsTech.map((t) => (
              <div key={t.title} className="p-6 rounded-2xl border border-white/10 hover:border-[#E85D04]/50 hover:bg-white/5 transition-all group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-[#E85D04] bg-[#E85D04]/10 group-hover:bg-[#E85D04] group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={t.path} />
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-2">{t.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fiyatlar ───────────────────────────────────────────────────────── */}
      <section id="fiyatlar" className="py-24 bg-[#FFF6EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E85D04]">Fiyatlar</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
              Şeffaf ve Esnek Fiyatlandırma
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Gizli ücret yok. İşletmenizin büyüklüğüne göre plan seçin, istediğiniz zaman değiştirin.
            </p>
          </div>

          <PricingSection plans={plans} />

          <p className="text-center text-xs text-gray-500 mt-10">
            Tüm planlar 14 günlük ücretsiz deneme içerir · Kredi kartı gerekmez · İstediğiniz zaman iptal
          </p>
        </div>
      </section>

      {/* ── SSS ────────────────────────────────────────────────────────────── */}
      <section id="sss" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E85D04]">SSS</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
              Sık Sorulan Sorular
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Aklınızdaki soruların cevabını burada bulamazsanız 7/24 destek hattımızdan bize ulaşabilirsiniz.
            </p>
          </div>

          <div className="space-y-3">
            {cmsFaqs.map((item, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-gray-100 bg-white overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none hover:bg-[#FFF6EE] transition-colors">
                  <span className="font-semibold text-gray-900 text-sm md:text-base">{item.q}</span>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFF0E6] flex items-center justify-center text-[#E85D04] group-open:rotate-45 transition-transform duration-200">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                  {item.a}
                </div>
              </details>
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
            <Link href="/register" className="px-8 py-4 rounded-xl font-semibold text-[#E85D04] bg-white hover:bg-orange-50 transition-colors">
              Ücretsiz Hesap Oluştur
            </Link>
            <a href={`tel:${(cmsContact.phone||'+905335430182').replace(/[\s-]/g,'')}`} className="px-8 py-4 rounded-xl font-semibold text-white border border-white/40 hover:bg-white/10 transition-colors">
              📞 {cmsContact.phone || '+90 533 543 01 82'}
            </a>
          </div>
        </div>
      </section>

      {/* ── İletişim ───────────────────────────────────────────────────────── */}
      <section id="iletisim" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">İletişime Geçin</h2>
            <p className="text-gray-500 text-lg">Sorularınız için bize yazın, en kısa sürede dönelim.</p>
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-500">
              <a href={`tel:${(cmsContact.phone||'+905335430182').replace(/[\s-]/g,'')}`} className="hover:text-[#E85D04] transition-colors">
                📞 {cmsContact.phone || '+90 533 543 01 82'}
              </a>
              <a href={`mailto:${cmsContact.email||'kurucu@kgnpos.com'}`} className="hover:text-[#E85D04] transition-colors">
                ✉ {cmsContact.email || 'kurucu@kgnpos.com'}
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <ContactForm/>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="bg-gray-950 text-gray-500 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center">
              <div style={{position:'relative',display:'inline-block',paddingTop:10}}>
                <svg style={{position:'absolute',top:0,right:-5,display:'block'}} width="18" height="10" viewBox="1 4 21 16" fill="none" stroke="#E85D04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                </svg>
                <div style={{display:'flex',alignItems:'baseline'}}>
                  <span style={{fontSize:16,fontWeight:700,color:'#fff',letterSpacing:'-0.5px',lineHeight:1}}>KGN</span>
                  <span style={{fontSize:16,fontWeight:700,color:'#E85D04',letterSpacing:'-0.5px',lineHeight:1}}>POS</span>
                </div>
              </div>
            </div>
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
              ))}
              <Link href="/login"             className="hover:text-white transition-colors">Giriş Yap</Link>
              <Link href="/register"          className="hover:text-white transition-colors">Kayıt Ol</Link>
              <Link href="/gizlilik"          className="hover:text-white transition-colors">Gizlilik</Link>
              <Link href="/kullanim-sartlari" className="hover:text-white transition-colors">Kullanım Şartları</Link>
            </nav>
            <div className="flex flex-col items-end gap-1">
              <a href={`tel:${(cmsContact.phone||'+905335430182').replace(/[\s-]/g,'')}`} className="text-xs hover:text-white transition-colors">📞 {cmsContact.phone || '+90 533 543 01 82'}</a>
              <a href={`mailto:${cmsContact.email||'kurucu@kgnpos.com'}`} className="text-xs hover:text-white transition-colors">✉ {cmsContact.email || 'kurucu@kgnpos.com'}</a>
              <a href={`https://instagram.com/${(cmsContact.instagram||'@kgnpos').replace('@','')}`} target="_blank" rel="noreferrer" className="text-xs hover:text-white transition-colors">📷 {cmsContact.instagram || '@kgnpos'}</a>
              <p className="text-xs">© {new Date().getFullYear()} KGNPOS. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
