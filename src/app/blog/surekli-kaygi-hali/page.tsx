import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Sürekli Kaygı Hali Neden Olur? | Uzm. Dr. Abdullah Maraş Psikiyatri',
    description:
        'Sürekli endişe hali ve geçmeyen kaygının bedensel, zihinsel nedenleri nelerdir? Günlük stres ile anksiyete uykusuzluğu farkları, Eryaman psikiyatrik değerlendirme.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/surekli-kaygi-hali' },
    openGraph: {
        title: 'Sürekli Kaygı Hali Neden Olur? Anksiyetenin Sürekliliği',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Neden sürekli kötü bir şey olacakmış gibi hissediyorum?',
        answer: 'Sürekli olan tetikte bekleme hali, beynin tehlike merkezi olan amigdalanın yanlış çalışarak sürekli alarm vermesi nedeniyle oluşan bir kaygı bozukluğu belirtisidir.',
    },
    {
        question: 'Kaygım yüzünden fiziksel olarak da hastalanabilir miyim?',
        answer: 'Kaygının bizatihi kendisi bedensel sorunları şiddetlendirir ve organlara gerçek hastalığa gitmese de fiziksel semptomlar (kalp, kas, bağırsak, migren, yorgunluk) olarak ciddi bir yük oluşturur.',
    },
    {
        question: 'Hamilelik veya tiroid hastalıkları bu duruma yol açar mı?',
        answer: 'Kesinlikle; hormonsal veya nörolojik durumlar, özellikle tiroid dengesizlikleri kaygı paniklerine yol açabilir.',
    },
    {
        question: 'Kaygım kronikleşti, artık böyle mi yaşayacağım?',
        answer: 'Psikiyatrik klinik muayene ve değerlendirmeyle rahatsızlığın derecesi saptanabilmektedir, böyle bir yaşama mahkum değilsiniz uzman ruh sağlığı doktorları bu hususta yardımcı olabilir.',
    },
    {
        question: 'Eryaman’da kliniğiniz tam olarak nerede ve süreci kime aktarabilirim?',
        answer: 'Uzm. Dr. Abdullah Maraş, Ankara Eryaman’da Altay mahallesindeki kliniğinde değerlendirme sağlamaktadır.',
    },
];

export default function SurekliKaygiBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/anksiyete">Anksiyete</Link><span>/</span>
                        <span>Sürekli Kaygı Hali</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Anksiyete</span>
                        <time dateTime="2026-05-05">5 Mayıs 2026</time>
                        <span>•</span><span>9 dk okuma</span>
                    </div>
                    <h1>Sürekli Kaygı Hali (Sürekli Endişe) Neden Olur?</h1>
                    <p className={styles.heroDesc}>
                        Gevşeyememek, sürekli kasılmak ve huzursuz beklemek... Hayatınız boyunca gölgeniz gibi sizi takip
                        eden "aşırı kaygılı olma duruşu" ve bunun arka planındaki zihinsel yorgunluğun nedenlerini ele alıyoruz.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>Ruh Sağlığı (Psikiyatrist) Uzmanı</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            <p className={styles.lead}>
                                "Hiçbir sebep yokken bile içimde bir daralma var, sanki her an çok kötü bir haber alacakmışım gibi
                                hissediyorum." Bu cümle bir hekimin muayenehanesinde duyabileceği en yaygın yakınmalardan biridir.
                                Hayat rutini devam ederken içsel bir "sürekli alarm hali", <Link href="/hizmetler/anksiyete">anksiyetenin
                                    bizatihi temel yansımasıdır</Link>.
                            </p>

                            <p>
                                Sürekli devam eden evhamlar bir karakter özelliği ya da kader olarak algılanıp yıllarca saklanabiliyor.
                                Fakat sürekli endişe halinin (Yaygın Anksiyete) zihinselin çok ötesinde ciddi bedensel faturası olan
                                tıbbi bir durum olduğunu unutmamak önemlidir.
                            </p>

                            <h2>Sürekli Kaygı Hali Ne Anlama Gelebilir?</h2>
                            <p>
                                Aslında insan zihni olumlu şeyleri kanıksarken olası tehditleri (<Link href="/blog/anksiyete-belirtileri">kaygıları</Link>)
                                büyük ve belirgin (milyonlarca yıllık evrimsel bir mekanizma gereği) algılamaya programlıdır.
                                Yaygın Anksiyete Bozukluğunda (YAB) beynin tehlike uyarıcı noktaları aşırı hassaslaşmıştır. Rüzgarda sallanan
                                bir perdeyi bile bir eve hırsız girdi tehlikesi olarak kodlayabilir.
                            </p>

                            <p>
                                Birisi uzun sürdüğü için artık kontrolü tamamen yitirdiğini sananlar sıklıkla
                                <Link href="/blog/anksiyete-ve-panik-atak-farki">panik takıntısına (krizlere)</Link>
                                ya da aniden zihnin tükenip çöküşüne sürüklenenlerin ruhsal harita yolculuğunu paylaşırlar.
                            </p>

                            <h2>Günlük Stres ile Anksiyete Bozukluğu Arasındaki Fark</h2>
                            <p>
                                Gündelik stres, spesifik, net, objektif olarak ortada olan problemlerdir: iş yerinde amirle gerilim, borcun ödenememesi
                                veya çocuğun sınav stresi. İşler yoluna girince (kriz durumu bitince) bu duygu erir.
                            </p>

                            <p>
                                Sürekli kaygı durumu ve Anksiyete bozukluğunda ise (aylar süren):
                            </p>
                            <ul>
                                <li>Durum belirsiz olsa da <strong>en olası en kötü felaket senaryosu</strong> gerçekleşmiş hissini bedene yükler.</li>
                                <li>Konular birbirinden sıçrar (finansalken birden sağlık kaygısına dönüşür).</li>
                                <li>Gerçek sorun bitse de bedensel huzursuzluk hali bitmek bilmez ve sürer, dinleme / kontrol yetisi felce uğramıştır.</li>
                            </ul>

                            <h2>Bedensel ve Zihinsel Yorgunluk</h2>
                            <p>
                                Böyle aylar geçiren bedenin omuz, sırt ve boyun bölümlerindeki çizgili kasları sürekli (tehdide hazırlandıkları
                                için) kasılır. Sabah uyanılan "ağır yorgunluk", aslında bütün gün zihnin o görünmez düşmanla (kaygıyla)
                                çarpışıp en büyük eforu harcamasından ileri gelir. Vücudun sürekli yüksek rölantide çalışmasından dolayı da kişi
                                dikkatini veremez, unutkanlık ve öğrenme konsantrasyon kaybı yaşanır. Kimi zaman
                                <Link href="/hizmetler/depresyon">şiddetli üzüntü depresyon ile bezenerek</Link> daha derin tükenmişliğe yol
                                açar.
                            </p>

                            <h2>Uyku ve İştah Gibi Alanlara Etkisi</h2>
                            <p>
                                Uykuya dalmak "kendini o günkü savunmasız bir eyleme teslim etmek"tir. Kaygılı beyinler bunu
                                sevmeyerek ("Ya uyurken bir şey olursa?") kişiyi en derin gece vakitlerinde yüzlerce kez uyandıran,
                                düzensiz <Link href="/hizmetler/uyku-bozukluklari">Uyku bozukluğuna (insomni)</Link> doğru itebilirler.
                                Sürekli sempatik sinir sistemi aktive olduğu için vücudun normal iştah döngüsü bozulur (ya mide fesadına dek
                                strese bağlı yeme ya da yeme / yutkunmadan kesilme hissi doğar).
                            </p>

                            <h2>Ne Zaman Psikiyatri Uzmanı İle Görüşmeyi Düşünmelisiniz?</h2>
                            <p>
                                Stresin kendi kendine veya eşin dostun verdiği telkinlerle geçmesini beklemek ya da anlamsız fiziksel,
                                organik (kalp, tansiyon, böbrek vb.) rahatsızlık testlerinden olumlu cevap almasına rağmen "Hayır, bir
                                şeyim var" döngüsü <strong>uzman ruh sağlığı dokturuyla görüşülmesi gereken</strong> ilk uyarı fitillerinin
                                açtığı süreçlerdir.
                            </p>

                            <h2>Eryaman ve Çevresinde Yaşayanlar İçin Değerlendirme Sürecine Dair Eğilimler</h2>
                            <p>
                                Ankara Eryaman (Altay Mahallesi) ile Etimesgut ve Batıkent gibi semtlerden
                                kliniğimize gelen aşırı endişeli bireyler, modern, güven veren sıcak bir konuşma ikliminde bilimsel uzmanlığımıza
                                ortak olabilirler. Uzm. Dr. Abdullah Maraş eşliğinde gerçekleştirilecek ilk ve sonrasındaki seanslarla:
                            </p>
                            <ul>
                                <li>Kişinin yıllar boyu süreklileşen içsel yangının asıl nedenlerinin (biyokimyasal veya düşünsel) adının konulması klinik değerlendirmeyle sağlanır.</li>
                                <li>Farkında olunmayan ruhsal bir rahatsızlık (psikiyatrik anksiyete, obsesyon-OKB vb.) varlığının anlaşılması / planlanmasındaki profesyonel dokunuşa şahit olunur.</li>
                            </ul>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Bilgilendirme ve Yasal Uyarı</strong>
                                Yazıdaki hususlar, sadece rehberlik, genel hastalık süreçleri kapsamında bilgilendirme taşıdığı, hastalar adına
                                uygulama, teşhis garantisi vadetmediği bilinmelidir.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <h3>Psikiyatrist Değerlendirmesi İçin Biz Buradayız</h3>
                                <p>Eğer endişelerinize dur diyemediğinizi düşünüyorsanız Ankara Eryaman kliniğimize ulaşıp sürecinizin bilimsel izale yollarını haritalayabilirsiniz.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Randevu Menüsü →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Uzm. Klinik Görüşmesi</h3>
                                <p>Anksiyeteniz İçin Ankara Eryaman bölgesinde Randevu alarak rahatlayın.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Randevu</Link>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4>Diğer Konularımız</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/hizmetler/anksiyete">Anksiyete Hizmetleri</Link></li>
                                    <li><Link href="/blog/anksiyete-belirtileri">Kaygı Bozukluklarında Belirtiler</Link></li>
                                    <li><Link href="/blog/anksiyete-ne-kadar-surer">Endişem Ne Kadar Sürede Geçer?</Link></li>
                                    <li><Link href="/hizmetler/uyku-bozukluklari">Uykuya Dalamama</Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* FAQ Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "FAQPage",
                    mainEntity: faqItems.map(f => ({
                        "@type": "Question", name: f.question,
                        acceptedAnswer: { "@type": "Answer", text: f.answer },
                    })),
                })
            }} />
        </>
    );
}
