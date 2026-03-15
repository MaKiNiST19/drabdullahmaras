import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Anksiyete Ne Kadar Sürer? | Sürekli Kaygı Hakkında Bilgiler',
    description:
        'Anksiyete ne kadar sürer? Anksiyete bozukluğu belirtilerinin ne kadar devam edeceği kişiden kişiye farklılık gösterir. Ankara Eryaman anksiyete değerlendirmesi.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/anksiyete-ne-kadar-surer' },
    openGraph: {
        title: 'Anksiyete Ne Kadar Sürer? Kaç Günde Geçer?',
        description: 'Anksiyetenin süresi, belirtilerin şiddeti ve uzun / kısa dönem kaygı farkları.',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Anksiyete ne kadar sürede düzelir?',
        answer: 'Anksiyetenin süresi sabit değildir. Hafif stres kaynaklı kaygılar kısa sürede yatışabilirken, klinik anksiyete bozukluklarında aylar sürebilen profesyonel destek gerekebilir.',
    },
    {
        question: 'Anksiyete kendi kendine geçer mi?',
        answer: 'Yaygın anksiyete veya panik bozukluk gibi klinik durumlar genellikle kendi kendine geçme eğilimi göstermez ve durumu ihmal etmek kronikleşme riskini artırır.',
    },
    {
        question: 'Sürekli olan kaygım hiç bitmeyecek mi?',
        answer: 'Bu, anksiyetenin yarattığı yaygın bir yanılsamadır. Uygun profesyonel değerlendirme ve bireysel yaklaşımla kişinin yaşam kalitesi korunabilmektedir.',
    },
    {
        question: 'Ne zaman doktorla görüşmeliyim?',
        answer: 'Kaygınız birkaç haftayı geçiyor, iş ve özel hayatınızı olumsuz şekilde aksatıyor ve uyku düzeninizi bozuyorsa bir psikiyatri uzmanına başvurmalısınız.',
    },
    {
        question: 'Ankara Eryaman’da anksiyete için psikiyatrist değerlendirmesi var mı?',
        answer: 'Evet, Uzm. Dr. Abdullah Maraş Eryaman (Altay Mh.) kliniğinde anksiyete bozukluklarının bilimsel ve etik çerçevede değerlendirmesini yürütmektedir.',
    },
];

export default function AnksiyeteSuresiBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/anksiyete">Anksiyete</Link><span>/</span>
                        <span>Ne Kadar Sürer?</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Anksiyete</span>
                        <time dateTime="2026-05-12">12 Mayıs 2026</time>
                        <span>•</span><span>8 dk okuma</span>
                    </div>
                    <h1>Anksiyete Ne Kadar Sürer? Kaygı Hali Ne Zaman Geçer?</h1>
                    <p className={styles.heroDesc}>
                        &ldquo;Anksiyete belirtilerinin ne kadar süreceği kişiden kişiye değişebilir. Bazı kişiler
                        tetikleyici bir duruma karşı sadece kısa süreli rahatsızlık yaşarken, diğerlerinde aylar boyunca
                        devam eden tablo görülebilir.&rdquo;
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>Ruh Sağlığı ve Hastalıkları Uzmanı</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            <p className={styles.lead}>
                                Arama motorlarında en çok aranan konulardan biri de anksiyetenin bitip bitmeyeceği, biterse ne
                                zaman biteceği konusudur. Eğer siz de &ldquo;Anksiyete kaç günde geçer?&rdquo; diye merak
                                ediyorsanız öncelikle şunu bilmelisiniz: Her bireyin biyolojik yapısı, sosyal destek sistemi
                                ve yaşadığı stres faktörleri tamamen farklıdır.
                            </p>
                            <p>
                                Bu durum belirli ve kesin bir sürenin önceden söylenemeyeceği anlamına gelir. Süre kişiden
                                kişiye değişebilir ve <strong>uzman değerlendirmesi önemlidir.</strong>
                                Daha kapsamlı bilgi almak için <Link href="/hizmetler/anksiyete">Ankara Eryaman anksiyete
                                    değerlendirme</Link> sayfamızı inceleyebilirsiniz.
                            </p>

                            <h2>Anksiyete Belirtileri Ne Kadar Sürebilir?</h2>
                            <p>
                                Hepimiz hayatta belli başlı kaygılar (sınav kaygısı, iş görüşmesi stresi) yaşarız.
                                Böylesi doğal tepkiler stres faktörü ortadan kalktıktan birkaç saat veya birkaç gün sonra
                                sakinleşir.
                            </p>
                            <p>
                                Ancak, eğer anksiyete klinik anlama ulaşmışsa — ki buna <Link href="/blog/anksiyete-belirtileri">
                                    Yaygın Anksiyete Bozukluğu</Link> diyorsak, süreç genellikle aylar boyunca seyredebilir.
                                Kişi altı aydan daha uzun bir süre boyunca hemen hemen her gün aşırı bir kaygı ve huzursuzluk
                                hali yaşıyorsa bu artık klinik bir bulgudur.
                            </p>

                            <h2>Süreyi Etkileyen Faktörler Nelerdir?</h2>
                            <p>
                                Bekleme sürecinin süresi üzerinde etkili olan unsurları birkaç ana başlık altında toplayabiliriz:
                            </p>
                            <ul>
                                <li><strong>Belirtilerin Şiddeti:</strong> Gün içinde zihni sürekli meşgul edip işlevselliği
                                    bozan bedensel belirtilerin yoğunluğu.</li>
                                <li><strong>Profesyonel Destek Aşaması:</strong> Kaygı belirtilerinin erkenden tanınarak bir
                                    psikiyatrist ile görüşülüp görüşülmediği. Belirtiler aylarca saklandığında veya önemsenmediğinde
                                    tablo direnç kazanabilir.</li>
                                <li><strong>Gündelik Stresörler:</strong> Stresin kaynağı olabilecek olayların halihazırda
                                    devam edip etmediği. Açık bir finansal baskı, mobbing veya ev içi ilişki sorunları süreleri uzatan
                                    ciddi stresörlerdir.</li>
                            </ul>

                            <h2>Kısa Dönem ve Uzun Dönem Kaygı Farkı</h2>
                            <p>
                                Eğer endişelerin belli bir süresi yoksa veya kaynağı belirsizse aylar boyu &ldquo;bekleme
                                süresi&rdquo; yaşanmasına neden olan <em>kronik anksiyete</em> ortaya çıkar. Gündelik yaşanan,
                                birkaç gün durup yatışan tepkilere ise hafif-kısa dönemli stres tepkisi demekteyiz.
                                Eğer panik nöbeti (atak) halini alan ani sıkıntılar yaşıyorsanız bunlar dakikalar içinde geçer ama
                                ardında haftalarca yeni bir atak beklentisi endişesi bırakabilir.
                            </p>

                            <h2>Ne Zaman Psikiyatri Uzmanına Başvurmalısınız?</h2>
                            <p>
                                Kaygının yoğunluğu nedeniyle gece uyku uyumakta güçlük çekiyor veya her sabah aynı
                                anksiyete çarpıntısı ile uyanıyorsanız tıbbi değerlendirme saati gelmiş demektir.
                            </p>
                            <p>
                                Kişiler bazen anksiyetelerini <Link href="/hizmetler/depresyon">depresyon ile
                                    birlikte</Link> yaşamaya başlayabilir ve ruhsal enerjilerini hızlıca tüketebilirler.
                                İçeride kontrol edilemeyen bir endişe makinesi varmış gibi hissediliyorsa
                                bireysel değerlendirme mutlaka planlanmalıdır.
                            </p>

                            <h2>Ankara Eryaman&apos;da Anksiyete İçin Değerlendirme Süreci</h2>
                            <p>
                                Ankara Eryaman, Altay Mahallesi çevresinde yaşayan bireyler anksiyetenin süresiyle ve şiddetiyle
                                ilgili soru işaretlerini netleştirmek için Uzm. Dr. Abdullah Maraş ile detaylı bir klinik görüşme
                                yapabilirler. Etimesgut ve Batıkent bölgesinden başvuran ve
                                kaygısı nedeniyle hayat konforu azalan kişiler, yalnız olmadığını hissederek
                                anlaşılır bir tıbbi süreçten geçerler.
                            </p>
                            <p>
                                Zaman zaman yayılan ve sonu gelmez gibi hissettiren o panik veya endişe çemberini kırmanın yolu
                                nitelikli ve güven veren profesyonel sağlık arayışından geçmektedir.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Genel Bilgilendirme</strong>
                                &ldquo;Anksiyete kaç günde geçer&rdquo; türü bekleyişler, değerlendirme eksikliğinden ileri
                                gelebildiği için rahatsızlığın seyri hakkında kesin bir garanti vermek doğru
                                değildir. Doğru tıbbi tanı için bir ruh sağlığı hekimi (psikiyatrist) tarafından yapılacak
                                değerlendirme şarttır.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <h3>Değerlendirme İçin Bizimle İletişime Geçin</h3>
                                <p>Anksiyeteniz ne kadar sürerse sürsün, Ankara Eryaman&apos;da bulunan kliniğimizde bilimsel değerlendirme ile size yardımcı olmak için buradayız.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Randevu Planla →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Değerlendirme İçin</h3>
                                <p>Anksiyete (Kaygı) Süreci</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Randevu Al</Link>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4>İlgili Hastalıklar</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/hizmetler/anksiyete">Anksiyete (Kaygı Bzk.)</Link></li>
                                    <li><Link href="/hizmetler/panik-atak">Panik Atak</Link></li>
                                    <li><Link href="/blog/anksiyete">Anksiyete Tüm Yazılar</Link></li>
                                    <li><Link href="/blog/anksiyete-belirtileri">Anksiyete Belirtileri</Link></li>
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
