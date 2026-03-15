import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Panik Atak Kaç Dakika Sürer? Snippet Kısa Süreli mi? | Uzm. Dr. Abdullah Maraş',
    description:
        'Panik atak krizi kaç dakika sürer? Hiç bitmeyecek gibi gelen "dakikalar geçmek bilmiyor" hissinin fizyolojisi. Ankara Eryaman panik atak değerlendirme süreci.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/panik-atak-kac-dakika-surer' },
    openGraph: {
        title: 'Panik Atak Kaç Dakika Sürer?',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Panik atak kaç dakika sürer?',
        answer: 'Bir panik atak genellikle saniyeler içinde hızla tırmanır, ortalama 10 ile 20 dakika (nadir durumlarda 30 dakika) içinde zirve noktasına ulaştıktan sonra sönümlenir.',
    },
    {
        question: 'Neden "bu kriz hiç bitmeyecekmiş" gibi geliyor?',
        answer: 'Adrenalin patlaması anında beynin zaman algısı bozulur; hayatta kalma moduna geçildiği için bir dakikalık bir süre bile saatler sürüyormuş gibi algılanabilmektedir.',
    },
    {
        question: 'Atak sonrası titreme ve halsizlik ne kadar sürer?',
        answer: 'Atak 10-20 dakikada bitse de, vücudun o şiddetli kasılma/efor döngüsünden çıkıp laktik asidi atması saatlerce ya da gün boyu sersemlik hissi şeklinde sürebilir.',
    },
    {
        question: 'Birkaç saat süren panik atak var mıdır?',
        answer: 'Klasik bir atak saatlerce sürmez, lakin üst üste gelen dalgalı ataklar ("rolling panic attacks") veya atağın bıraktığı aşırı kaygı hali kişiye tek ve uzun bir kriz gibi gelebilir.',
    },
    {
        question: 'Uzman psikiyatriste gitmek gerekli mıdır?',
        answer: 'Atak geçiyorsa bile, beynin yeni atağı beklediği o korku sendromu (beklenti evhamı) aylarca sürerek yaşamı mahveder. Ankara Eryaman’da bu durumun profesyonelce kırılması şarttır.',
    },
];

export default function SnippetPanikAtakSuresi() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/panik-atak">Panik Atak</Link><span>/</span>
                        <span>Kaç Dakika Sürer?</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Panik Atak</span>
                        <time dateTime="2026-02-27">27 Şubat 2026</time>
                        <span>•</span><span>6 dk okuma</span>
                    </div>
                    <h1>Panik Atak Kaç Dakika Sürer? Kriz Ne Zaman Biter?</h1>
                    <p className={styles.heroDesc}>
                        Panik atak (krizi) saniyeler içinde ortaya çıkıp hızla tırmanır ve kural olarak
                        <strong>ortalama 10 ila 20 dakika içinde zirvesine ulaşarak sönümlenir.</strong>
                        Nadir durumlarda bu zirve hali 30 dakikaya uzayabilir ancak hiçbir atak bedensel sistem
                        ve hormon deposu (adrenalin) sınırları gereği bedende saatlerce aynı tempoyla süremez.
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
                                "Her şey 1 dakika içinde oldu", "Kalbim adeta patlayacaktı", "Dakikalar bir türlü
                                geçmek bilmiyor, bu kriz hiç bitmeyecek gibi geliyor..."
                                Bunlar, panik atağın ortasındayken bir hastanın aklından geçen en büyük kaygı sesleridir.
                            </p>

                            <h2>Beynin Zaman Algısı Neden Bozulur?</h2>
                            <p>
                                Aniden tehlikede olduğumuz bilgisini alan beyindeki "Amigdala"
                                adındaki merkez, bedene öylesine dev bir adrenalin salgılar ki; tüm dış etkenler flu
                                bırakılıp sadece o fırtınanın içindeki bedensel sinyallere (kalp çarpıntısı, nefessizlik)
                                odaklanılır. Saatlerce kalmışsınız gibi hissettirse de <Link href="/hizmetler/panik-atak">
                                    Panik Atak Değerlendirmesi</Link> sırasında hekiminize aslında gerçek zamanın en fazla
                                10 veya 20 dakika sürdüğünü belirtirsiniz.
                            </p>

                            <h2>10-20 Dakikadan Sonra Ne Olur?</h2>
                            <p>
                                Aslında insan anatomisi bir aslanla (veya büyük bir tehlikeyle) saatlerce aynı hızda
                                kaçarak boğuşacak bir Adrenalin sistemine sahip değildir.
                                Sistem kendi kendini tüketir. Zirve sönümlendikten sonra kalbinizin ritmi
                                yavaşlar ama yerini devasa bir <strong>"tertemiz bir dayak yemiş" yorgunluğuna bırakır.</strong>
                                Çünkü bedendeki çizgili kaslar 10-20 dk boyunca çok büyük efor sarf etmiş ve o oksijenle
                                kasılmıştır. Geriye saatlerce sürecek o uyuşma ve titremeler kalır.
                            </p>

                            <h2>Saatlerce Süren Bir Anksiyete (Kaygı) Olabilir mi?</h2>
                            <p>
                                Panik atak biter ama geriye "Acaba yeniden bir atak gelecek mi? Ya yolda olursa
                                rezil olur muyum?" şeklindeki "Beklenti Anksiyetesi" kalır. Bu durum, atağın kendisi
                                kadar şiddetli bir zemin oluşturarak <Link href="/hizmetler/anksiyete">sürekli kaygı ve anksiyete</Link>
                                olarak günlerinizi mahvedebilir. Veya bazen sönümlenen atağın hemen arkasından
                                korkudan ötürü beynin tetiği yeniden çekmesiyle küçük ataklar ("Rolling attacks") yaşanır.
                                Her biri birbirinden bağımsız atakların peş peşe hissi, kişiyi saatlerce atak yaşıyorum yanılsamasına
                                iter.
                            </p>

                            <h2>Ne Zaman Destek Alınmalıdır?</h2>
                            <p>
                                Panik atağın (krizinin) geçmesi hastalık durumunun düzeldiği anlamına gelmez. "Kendi kendine"
                                beklemek, beynin en ufak olayda (asansöre binme, köprüden geçme) atak geliştirmesini engellemez,
                                hastalığın Agorafobi ile (dışarıya çıkamama, kalabalıktan kaçınma fobisi)
                                güçlenmesine veya <Link href="/hizmetler/depresyon">çökkünlük/depresyon</Link> eşliğine yol
                                açar. O bitmeyen 10 dakikalarınızı tıbbi uzman bir çerçevede saptamalısınız.
                            </p>

                            <h2>Ankara Eryaman Panik Atak Değerlendirme Süreci</h2>
                            <p>
                                Bu ataklara göğüs gerdikten ve organlarınız fiziksel acilden temiz (kardiyolojik problem yok) olarak
                                çıktıysa; Etimesgut, Batıkent ve Eryaman (Altay Mh.) sakinleri olarak Ankara Eryaman Panik Atak
                                sürecinizi Uzm. Dr. Abdullah Maraş eşliğinde masaya yatırabilirsiniz. Bilimsel çerçevede yapılacak
                                bireysel psikiyatrik görüşme ile atakların silsilesinin adımlarını ve tıbbi yol haritasını öğrenmiş,
                                konuyu kontrolünüz altına (profesyonel değerlendirmeyle) hissetmiş olacaksınız.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Bilgilendirme Notu</strong>
                                Panik krizin (atağın) kaç dakika süreceği bilgisi kişiye kriz anı için sadece rehberdir. Amacı:
                                tıbbı tedavi yerine geçmek değil, tıp doktoruyla görüşene kadarki farkındalığı güçlendirmektir.
                                Şiddetli kalp veya sol omuz uyuşmalarında lütfen öncelikli olarak Tıbbi Acil çağrı değerlendirmesine başvurunuz.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <h3>O Dakikaları Yalnız Çekmeyin</h3>
                                <p>Ankara Eryaman kliniğimizdeki psikiyatrist destek değerlendirmesi / panik analizleri için bize ulaşın.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Randevu Menüsü →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Psikiyatrist Kliniği</h3>
                                <p>Panik ataklarınız için doktorunuzla (Ankara Eryaman)</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Ön Değerlendirme Randevusu</Link>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4>Detaylı Konular</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/hizmetler/panik-atak">Panik Atak Hizmeti</Link></li>
                                    <li><Link href="/blog/panik-atak-belirtileri">Atağın Bedensel Belirtileri Neler?</Link></li>
                                    <li><Link href="/blog/gece-panik-atak">Gece Uykudan Çarpıntı Uyanma Durumu</Link></li>
                                    <li><Link href="/blog/panik-atak-kalp-krizi-mi">Kalp Krizi Ayırt Etme</Link></li>
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
