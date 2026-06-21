import Link from "next/link";

export const metadata = {
  title: "Gizlilik Politikası | KGNPOS",
  description: "KGNPOS kişisel verilerin korunması ve gizlilik politikası.",
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
    id: "veri-sorumlusu",
    title: "1. Veri Sorumlusu",
    content: `Bu Gizlilik Politikası, KGNPOS Yazılım ve Teknoloji A.Ş. ("KGNPOS", "biz", "bizim") tarafından hazırlanmıştır. KGNPOS, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu sıfatıyla hareket etmektedir.

Kişisel verilerinizin işlenmesine ilişkin her türlü soru ve talebinizi info@kgnpos.com adresine iletebilirsiniz.`,
  },
  {
    id: "toplanan-veriler",
    title: "2. Toplanan Kişisel Veriler",
    content: `Hizmetlerimizi kullanmanız kapsamında aşağıdaki kişisel verileriniz işlenebilir:

• Kimlik Bilgileri: Ad, soyad, T.C. kimlik numarası (yasal zorunluluk gerektiren durumlarda).
• İletişim Bilgileri: E-posta adresi, telefon numarası, iş adresi.
• İşletme Bilgileri: Firma adı, vergi kimlik numarası, vergi dairesi, ticaret sicil numarası.
• Hesap ve Erişim Bilgileri: Kullanıcı adı, şifrelenmiş parola, oturum bilgileri.
• Finansal İşlem Bilgileri: Fatura ve ödeme kayıtları, ödeme yöntemi bilgileri.
• Teknik Veriler: IP adresi, tarayıcı tipi, cihaz bilgisi, çerez verileri, uygulama kullanım logları.
• Müşteri İletişim Kayıtları: Destek talepleri ve yazışma içerikleri.`,
  },
  {
    id: "isleme-amaci",
    title: "3. Kişisel Verilerin İşlenme Amaçları",
    content: `Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:

• Hizmet sunumu ve sözleşmenin ifası: Kayıt, aktivasyon, lisans yönetimi ve teknik destek.
• Yasal yükümlülüklerin yerine getirilmesi: e-Fatura, e-Arşiv ve GİB entegrasyonu kapsamında mevzuat gereklilikleri.
• Fatura ve muhasebe işlemleri: Vergi mevzuatı uyumu.
• Güvenlik ve doğrulama: Yetkisiz erişimin önlenmesi, kimlik doğrulama.
• İletişim: Ürün güncellemeleri, bakım bildirimleri ve destek yanıtları.
• Hizmet geliştirme: Kullanım analizleri, hata tespiti ve performans iyileştirmeleri.
• Pazarlama (açık rıza ile): Kampanya, yenilik ve duyuru bildirimleri.`,
  },
  {
    id: "hukuki-dayanak",
    title: "4. Hukuki Dayanaklar",
    content: `Kişisel verileriniz aşağıdaki hukuki dayanaklar kapsamında işlenmektedir:

• Sözleşmenin kurulması veya ifası (KVKK m.5/2-c): Hizmet sözleşmesinin yerine getirilmesi.
• Hukuki yükümlülük (KVKK m.5/2-ç): Vergi mevzuatı, e-Fatura ve GİB düzenlemeleri.
• Meşru menfaat (KVKK m.5/2-f): Güvenlik, dolandırıcılık önleme ve hizmet kalitesinin korunması.
• Açık rıza (KVKK m.5/1): Pazarlama iletişimi ve profilleme gibi zorunlu olmayan işlemler.`,
  },
  {
    id: "veri-aktarimi",
    title: "5. Verilerin Aktarılması",
    content: `Kişisel verileriniz, aşağıdaki taraflarla ve belirtilen amaçlar doğrultusunda paylaşılabilir:

• Gelir İdaresi Başkanlığı (GİB): e-Fatura ve e-Arşiv yasal zorunlulukları kapsamında.
• Ödeme kuruluşları ve bankalar: Tahsilat işlemlerinin gerçekleştirilmesi amacıyla.
• Altyapı ve bulut hizmet sağlayıcıları: Veri barındırma ve işleme hizmetleri.
• Yetkili kamu kurum ve kuruluşları: Yasal zorunluluk halinde.
• İş ortakları ve yetkili bayiler: Yalnızca hizmet sunumu için gerekli ölçüde.

Yurt dışına veri aktarımı söz konusu olduğunda, KVKK'nın 9. maddesi kapsamındaki güvenceler sağlanmaktadır.`,
  },
  {
    id: "veri-guvenligi",
    title: "6. Veri Güvenliği",
    content: `KGNPOS, kişisel verilerinizi yetkisiz erişim, kayıp, değiştirilme veya ifşa edilmeye karşı korumak amacıyla aşağıdaki teknik ve idari tedbirleri uygulamaktadır:

• Tüm veri iletişimi 256-bit SSL/TLS şifreleme ile korunmaktadır.
• Parolalar güçlü hash algoritmaları (bcrypt) ile şifrelenerek saklanmaktadır.
• Erişim yetkisi, görev bazlı rol yönetimi ile sınırlandırılmaktadır.
• Sistemler günlük otomatik yedeklenmekte, yedekler şifreli olarak saklanmaktadır.
• Altyapı ISO 27001 sertifikalı veri merkezlerinde barındırılmaktadır.
• Düzenli güvenlik testleri ve sızma testleri uygulanmaktadır.`,
  },
  {
    id: "veri-saklama",
    title: "7. Veri Saklama Süreleri",
    content: `Kişisel verileriniz, işlenme amacının gerektirdiği süre boyunca ve ilgili mevzuatın öngördüğü süreler dahilinde saklanmaktadır:

• Finansal kayıtlar ve fatura bilgileri: Vergi Usul Kanunu gereği 10 yıl.
• Hesap ve sözleşme bilgileri: Sözleşme ilişkisinin sona ermesinden itibaren 10 yıl.
• Teknik log kayıtları: En fazla 2 yıl.
• Pazarlama iletişimi verileri: Açık rıza geri alınana kadar.

Saklama süresinin dolmasının ardından veriler geri dönüşümsüz biçimde silinmekte, yok edilmekte veya anonim hale getirilmektedir.`,
  },
  {
    id: "cerezler",
    title: "8. Çerezler (Cookies)",
    content: `Web sitemiz ve uygulamalarımız aşağıdaki amaçlarla çerez kullanmaktadır:

• Zorunlu çerezler: Oturum yönetimi ve temel işlevsellik için gereklidir, devre dışı bırakılamaz.
• Performans çerezleri: Sayfa yüklenme süresi ve hata takibi için kullanılır.
• Analitik çerezler: Kullanım istatistikleri toplanması amacıyla (anonim).
• Tercih çerezleri: Dil ve arayüz tercihlerinizin hatırlanması için.

Tarayıcı ayarlarınızdan zorunlu olmayan çerezleri reddedebilirsiniz. Bu durumda bazı özellikler kısıtlı çalışabilir.`,
  },
  {
    id: "haklariniz",
    title: "9. KVKK Kapsamındaki Haklarınız",
    content: `KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:

• Kişisel verilerinizin işlenip işlenmediğini öğrenme.
• İşlenmişse buna ilişkin bilgi talep etme.
• Verilerin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme.
• Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme.
• Eksik veya yanlış işlenmişse düzeltilmesini isteme.
• Kanun'un 7. maddesinde öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme.
• Yapılan işlemlerin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme.
• İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme.
• Kanun'a aykırı işleme nedeniyle zarara uğraması halinde zararın giderilmesini talep etme.

Haklarınızı kullanmak için info@kgnpos.com adresine yazılı başvuruda bulunabilirsiniz.`,
  },
  {
    id: "iletisim",
    title: "10. İletişim",
    content: `Gizlilik politikamıza ilişkin soru, görüş veya talepleriniz için:

E-posta: info@kgnpos.com
Adres: KGNPOS Yazılım ve Teknoloji A.Ş., Türkiye

Kişisel verilerinizin korunmasına ilişkin şikayetlerinizi ayrıca Kişisel Verileri Koruma Kurumu'na (www.kvkk.gov.tr) iletebilirsiniz.`,
  },
];

export default async function GizlilikPage() {
  let dynamicSections = null;
  try {
    const res = await fetch('https://api.kgnpos.com/api/website', { next: { revalidate: 60 } });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.privacy_sections) && data.privacy_sections.length > 0) {
        dynamicSections = data.privacy_sections;
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
            KVKK Uyumlu
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Gizlilik Politikası
          </h1>
          <p className="text-gray-500 text-lg">
            Kişisel verileriniz KGNPOS tarafından nasıl toplanır, işlenir ve korunur.
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
              KGNPOS, kişisel verilerinizi yalnızca hizmet sunumu, yasal yükümlülükler ve güvenlik amaçlarıyla işler.
              Verilerinizi üçüncü taraflara satmaz. KVKK kapsamındaki tüm haklarınızı her zaman kullanabilirsiniz.
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
              <Link href="/" className="hover:text-[#E85D04] transition-colors">Ana Sayfa</Link>
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
              <Link href="/login"    className="hover:text-white transition-colors">Giriş Yap</Link>
              <Link href="/register" className="hover:text-white transition-colors">Kayıt Ol</Link>
              <Link href="/gizlilik"          className="text-[#E85D04]">Gizlilik</Link>
              <Link href="/kullanim-sartlari" className="hover:text-white transition-colors">Kullanım Şartları</Link>
            </nav>
            <p className="text-xs">© {new Date().getFullYear()} KGNPOS. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
