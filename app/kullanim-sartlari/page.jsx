import Link from "next/link";

export const metadata = {
  title: "Kullanım Şartları | KGNPOS",
  description: "KGNPOS hizmet kullanım şartları ve son kullanıcı lisans sözleşmesi.",
};

const navLinks = [
  { label: "Özellikler",  href: "/#ozellikler" },
  { label: "Modüller",    href: "/#moduller" },
  { label: "Hakkımızda",  href: "/#hakkimizda" },
  { label: "Teknoloji",   href: "/#teknoloji" },
  { label: "Fiyatlar",    href: "/#fiyatlar" },
];

const sections = [
  {
    id: "taraflar-ve-kapsam",
    title: "1. Taraflar ve Kapsam",
    content: `Bu Kullanım Şartları ("Şartlar"), KGNPOS Yazılım ve Teknoloji A.Ş. ("KGNPOS") ile KGNPOS yazılımını, web sitesini veya ilgili hizmetlerini ("Hizmet") kullanan gerçek veya tüzel kişi ("Kullanıcı") arasında akdedilen bağlayıcı bir sözleşme niteliğindedir.

Hizmeti kullanmaya başlamakla, bu Şartları okuduğunuzu, anladığınızı ve kabul ettiğinizi beyan etmiş olursunuz. Şartları kabul etmiyorsanız Hizmeti kullanmayınız.

Bu Şartlar; kgnpos.com alan adı üzerinden sunulan web sitesi, POS yazılımı, mobil uygulamalar, API hizmetleri ve ilgili tüm dijital hizmetleri kapsamaktadır.`,
  },
  {
    id: "hesap-olusturma",
    title: "2. Hesap Oluşturma ve Güvenlik",
    content: `Hizmeti kullanabilmek için geçerli bir hesap oluşturmanız gerekmektedir.

• Kayıt sırasında sağladığınız bilgilerin doğru, güncel ve eksiksiz olması zorunludur.
• Hesap güvenliğinizden ve parolanızın gizliliğinden münhasıran siz sorumlusunuzdur.
• Hesabınızda gerçekleşen tüm işlemler size ait sayılır.
• Yetkisiz erişim veya güvenlik ihlali şüphesi durumunda derhal info@kgnpos.com adresini bilgilendirmelisiniz.
• Bir hesap başkasına devredilemez veya paylaşılamaz.
• KGNPOS, güvenlik gerekçesiyle herhangi bir hesabı askıya alma veya sonlandırma hakkını saklı tutar.`,
  },
  {
    id: "lisans-ve-kullanim",
    title: "3. Lisans ve Kullanım Hakkı",
    content: `KGNPOS, geçerli bir abonelik veya lisans sözleşmesi kapsamında size sınırlı, münhasır olmayan, devredilemez ve alt lisans verilemez bir kullanım hakkı tanımaktadır.

Bu hak kapsamında:
• Hizmeti yalnızca kendi ticari faaliyetleriniz için kullanabilirsiniz.
• Seçtiğiniz plan dahilindeki cihaz, masa ve kullanıcı limitlerine uymalısınız.

Aşağıdaki eylemler kesinlikle yasaktır:
• Yazılımı kopyalamak, değiştirmek, tersine mühendislik uygulamak veya türev eserler oluşturmak.
• Hizmeti üçüncü taraflara satmak, kiralamak, devretmek veya alt lisanslamak.
• KGNPOS altyapısına yetkisiz araçlarla erişim sağlamak.
• Diğer kullanıcıları, KGNPOS sistemlerini veya üçüncü tarafları zarara uğratacak faaliyetlerde bulunmak.
• Hizmeti yasa dışı amaçlarla kullanmak.`,
  },
  {
    id: "abonelik-ve-odeme",
    title: "4. Abonelik ve Ödeme",
    content: `Ücretli planlar için aşağıdaki koşullar geçerlidir:

• Abonelik ücretleri seçilen plana ve faturalama dönemine (aylık, yıllık) göre belirlenir.
• Ödemeler, faturalama dönemi başında peşin olarak tahsil edilir.
• Banka havalesi/EFT ile yapılan ödemeler, KGNPOS tarafından doğrulandıktan sonra abonelik aktive edilir.
• Fiyatlar KDV hariç belirtilmiş olup yasal vergi ve harçlar ayrıca yansıtılır.
• KGNPOS, makul bir önceden bildirimle plan fiyatlarını değiştirme hakkını saklı tutar. Mevcut abonelik dönemine fiyat değişikliği uygulanmaz.
• Ödeme yapılmaması durumunda hesap askıya alınabilir ve veriler silinmeden önce 30 gün süre tanınır.`,
  },
  {
    id: "ucretsiz-deneme",
    title: "5. Ücretsiz Deneme",
    content: `KGNPOS, yeni kullanıcılara ücretsiz deneme süresi sunabilir.

• Ücretsiz deneme süresi 14 takvim günüdür ve yalnızca bir kez kullanılabilir.
• Deneme süresi sonunda ücretli bir plana geçilmezse hesap otomatik olarak kısıtlanır.
• KGNPOS, herhangi bir gerekçe sunmaksızın ücretsiz deneme teklifini değiştirme veya sonlandırma hakkını saklı tutar.
• Ücretsiz deneme kapsamında elde edilen veriler, ücretli plana geçişte korunur.`,
  },
  {
    id: "iptal-ve-iade",
    title: "6. İptal ve İade Politikası",
    content: `Aboneliğinizi istediğiniz zaman iptal edebilirsiniz.

• İptal işlemi, mevcut faturalama döneminin sonunda geçerli olur; o döneme ait ücret iade edilmez.
• Yıllık aboneliklerde, ilk 14 gün içinde yapılan iptallerde kalan süreye oranla iade yapılabilir.
• Ödeme hatası veya çift faturalandırma gibi teknik nedenlerle oluşan fazla ödemelerde tam iade garantidir.
• İade talepleri info@kgnpos.com adresine yazılı olarak iletilmelidir.
• İade kararı KGNPOS'un takdir yetkisindedir ve 7 iş günü içinde sonuçlandırılır.`,
  },
  {
    id: "veri-ve-gizlilik",
    title: "7. Veri ve Gizlilik",
    content: `Hizmet kapsamında işlenen kişisel veriler, Gizlilik Politikamız çerçevesinde korunmaktadır.

• Hizmet üzerinde oluşturduğunuz iş verileri (ürünler, satışlar, müşteri kayıtları vb.) size aittir.
• KGNPOS, bu verileri yalnızca hizmet sunumu amacıyla işler; satmaz veya üçüncü taraflarla paylaşmaz.
• Abonelik sonlandırıldığında verilerinizi dışa aktarabilirsiniz. Veriler, sonlandırma tarihinden itibaren 30 gün süreyle saklanır, ardından kalıcı olarak silinir.
• KGNPOS, hizmetin iyileştirilmesi amacıyla anonim istatistiksel veriler toplayabilir.

Detaylı bilgi için Gizlilik Politikamızı inceleyiniz.`,
  },
  {
    id: "hizmet-seviyesi",
    title: "8. Hizmet Seviyesi ve Kesintiler",
    content: `KGNPOS, Hizmetin %99,9 uptime hedefiyle çalışmasını sağlamak için gerekli teknik önlemleri almaktadır.

• Planlı bakım çalışmaları öncesinde Kullanıcılara bildirim yapılır.
• Öngörülemeyen teknik aksaklıklar, doğal afetler, üçüncü taraf altyapı sorunları veya mücbir sebepler nedeniyle yaşanan kesintiler için KGNPOS'un sorumluluğu sınırlıdır.
• Kurumsal plan kullanıcıları için Hizmet Seviyesi Anlaşması (SLA) ayrıca düzenlenebilir.
• Hizmet kesintilerine ilişkin anlık durum bilgisine destek kanallarından ulaşılabilir.`,
  },
  {
    id: "fikri-mulkiyet",
    title: "9. Fikri Mülkiyet",
    content: `KGNPOS yazılımı, tasarımı, logosu, marka adı, belgeleri ve Hizmet kapsamındaki tüm içerikler KGNPOS'a aittir ve Türk Fikir ve Sanat Eserleri Kanunu ile uluslararası telif hukuku kapsamında korunmaktadır.

• Kullanıcıya tanınan lisans, bu hakların devri niteliğinde değildir.
• KGNPOS markasını, logosunu veya içeriklerini izinsiz kullanamazsınız.
• Kullanıcının Hizmet üzerinde oluşturduğu içerik ve veriler üzerindeki fikri mülkiyet hakları Kullanıcı'ya aittir.`,
  },
  {
    id: "sorumluluk-sinirlamasi",
    title: "10. Sorumluluk Sınırlaması",
    content: `Yürürlükteki mevzuatın izin verdiği azami ölçüde:

• KGNPOS, dolaylı, arızi, özel veya sonuçsal zararlardan (veri kaybı, kâr kaybı, iş kesintisi dahil) sorumlu değildir.
• KGNPOS'un herhangi bir takvim yılında üstlenebileceği azami sorumluluk, söz konusu yılda Kullanıcı tarafından ödenen toplam abonelik ücretiyle sınırlıdır.
• KGNPOS, üçüncü taraf hizmetleri, entegrasyonlar veya Kullanıcı kaynaklı veri hatalarından doğan zararlardan sorumlu tutulamaz.

Bu sınırlama, kasıt veya ağır ihmal hallerinde uygulanmaz.`,
  },
  {
    id: "degisiklikler",
    title: "11. Şartlarda Değişiklik",
    content: `KGNPOS, bu Şartları zaman zaman güncelleyebilir.

• Önemli değişiklikler, yürürlük tarihinden en az 30 gün önce kayıtlı e-posta adresinize bildirilir.
• Değişiklik sonrası Hizmeti kullanmaya devam etmeniz, güncellenmiş Şartları kabul ettiğiniz anlamına gelir.
• Değişiklikleri kabul etmiyorsanız aboneliğinizi ilgili bildirim süresi içinde iptal etme hakkına sahipsiniz.
• Şartların güncel haline her zaman kgnpos.com/kullanim-sartlari adresinden ulaşabilirsiniz.`,
  },
  {
    id: "uygulanacak-hukuk",
    title: "12. Uygulanacak Hukuk ve Uyuşmazlık Çözümü",
    content: `Bu Şartlar, Türkiye Cumhuriyeti hukukuna tabidir.

• Şartlardan doğan uyuşmazlıklarda öncelikle dostane çözüm yolları aranır.
• Dostane çözüm sağlanamaması halinde İstanbul Mahkemeleri ve İcra Daireleri münhasır yetki merci olarak kabul edilir.
• Tüketici sıfatı taşıyan Kullanıcılar için tüketici mevzuatından kaynaklanan haklar saklıdır.`,
  },
  {
    id: "iletisim",
    title: "13. İletişim",
    content: `Bu Şartlara ilişkin soru ve talepleriniz için:

E-posta: info@kgnpos.com
Adres: KGNPOS Yazılım ve Teknoloji A.Ş., Türkiye

Yazılı başvurularınız 5 iş günü içinde yanıtlanacaktır.`,
  },
];

export default async function KullanimSartlariPage() {
  let dynamicSections = null;
  try {
    const res = await fetch('https://api.kgnpos.com/api/website', { next: { revalidate: 60 } });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.terms_sections) && data.terms_sections.length > 0) {
        dynamicSections = data.terms_sections;
      }
    }
  } catch {}
  const activeSections = dynamicSections || sections;
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* ── Navbar ───────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-8">
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <img src="/logo.svg" alt="KGNPOS" className="h-8 w-8" />
              <span className="font-extrabold text-lg text-gray-900 tracking-tight">KGNPOS</span>
            </Link>

            <nav className="hidden md:flex items-center gap-7 flex-1 justify-center">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium text-gray-600 hover:text-[#E85D04] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

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

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#FFF6EE] py-16 md:py-24">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 bg-[#E85D04] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-10 bg-[#E85D04] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 text-[#E85D04] bg-[#FFE8D6]">
            Yasal Belgeler
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Kullanım Şartları
          </h1>
          <p className="text-gray-500 text-lg">
            KGNPOS hizmetlerini kullanmadan önce lütfen bu şartları dikkatlice okuyunuz.
          </p>
          <p className="mt-3 text-sm text-gray-500">
            Son güncelleme: {new Date(2026, 5, 1).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      </section>

      {/* ── İçerik ───────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Özet kutusu */}
          <div className="bg-[#FFF6EE] border border-orange-100 rounded-2xl p-6 mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E85D04] mb-2">Özetle</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              KGNPOS'u kullanarak bu şartları kabul etmiş olursunuz. Hizmetimizi dürüst ve yasal amaçlarla kullanın,
              hesabınızın güvenliğini koruyun. Sorularınız için her zaman buradayız.
            </p>
          </div>

          {/* Bölümler */}
          <div className="space-y-12">
            {activeSections.map((section) => (
              <div key={section.id} id={section.id}>
                <h2 className="text-xl font-extrabold text-gray-900 mb-4 pb-3 border-b border-gray-100">
                  {section.title}
                </h2>
                <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Alt bağlantılar */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <span>© {new Date().getFullYear()} KGNPOS. Tüm hakları saklıdır.</span>
            <div className="flex gap-6">
              <Link href="/gizlilik" className="hover:text-[#E85D04] transition-colors">Gizlilik Politikası</Link>
              <a href="mailto:info@kgnpos.com" className="hover:text-[#E85D04] transition-colors">İletişim</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer className="bg-gray-950 text-gray-500 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="KGNPOS" className="h-7 w-7" />
              <span className="font-bold text-white text-sm">KGNPOS</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              ))}
              <Link href="/login"              className="hover:text-white transition-colors">Giriş Yap</Link>
              <Link href="/register"           className="hover:text-white transition-colors">Kayıt Ol</Link>
              <Link href="/gizlilik"           className="hover:text-white transition-colors">Gizlilik</Link>
              <Link href="/kullanim-sartlari"  className="text-[#E85D04]">Kullanım Şartları</Link>
            </nav>
            <p className="text-xs">© {new Date().getFullYear()} KGNPOS. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
