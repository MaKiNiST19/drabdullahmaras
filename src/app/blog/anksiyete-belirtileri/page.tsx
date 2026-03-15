import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Anksiyete Belirtileri Nelerdir? Normal Kaygı ve Bozukluk | Uzm. Dr. Abdullah Maraş',
    description:
        'Anksiyete belirtileri nelerdir? Normal kaygı ile anksiyete bozukluğu arasındaki fark, günlük işlevsellik ve Eryaman psikiyatri değerlendirmesi uzman bilgilendirmesi.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/anksiyete-belirtileri' },
    openGraph: {
        title: 'Anksiyete Belirtileri Nelerdir? Kaygı Hangi Noktada Bozukluğa Dönüşür?',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Tüm kaygılar anksiyete bozukluğu mudur?',
        answer: 'Hayır, kaygı doğal bir insani duygudur ve bizi tehlikelerden korur. Ancak ortada gerçek bir tehlike yokken orantısız şekilde ortaya çıkıyorsa ve günlük yaşamı engelliyorsa bozukluk olarak değerlendirilebilir.',
    },
    {
        question: 'Anksiyete bozukluğunun en yaygın bedensel belirtileri nelerdir?',
        answer: 'Çarpıntı, nefes darlığı, titreme, aşırı terleme, kas gerginliği, baş ağrısı, yutkunma güçlüğü ve mide rahatsızlıkları en sık karşılaşılan bedensel belirtiler arasındadır.',
    },
    {
        question: 'Anksiyete uyku sorunlarına yol açar mı?',
        answer: 'Evet. Sürekli devam eden endişe hali ve zihni susturamamak, uykuya dalmada güçlük, uykuyu sürdürememe veya dinlendirici olmayan uyku gibi belirtilere yol açabilir.',
    },
    {
        question: 'Ne zaman bir psikiyatri uzmanına gitmeliyim?',
        answer: 'Belirtileriniz haftalarca devam ediyor, sosyal ilişkilerinizi veya iş yaşamınızı bozuyor, kaçınma davranışlarına yol açıyorsa mutlaka bir uzman değerlendirmesi almalısınız.',
    },
    {
        question: 'Ankara Eryaman bölgesinde anksiyete için kime başvurabilirim?',
        answer: 'Ankara Eryaman Altay Mahallesi çevresinde Uzm. Dr. Abdullah Maraş, anksiyete bozukluklarının profesyonel klinik değerlendirmesini yürütmektedir.',
    },
];

export default function AnksiyeteBelirtileriBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/anksiyete">Anksiyete</Link><span>/</span>
                        <span>Belirtiler</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Anksiyete</span>
                        <time dateTime="2026-03-10">10 Mart 2026</time>
                        <span>•</span><span>9 dk okuma</span>
                    </div>
                    <h1>Anksiyete Belirtileri Nelerdir? Kaygı Hangi Noktada Bozukluğa Dönüşür?</h1>
                    <p className={styles.heroDesc}>
                        Günlük hayatın yoğunluğu içinde herkes zaman zaman stres ve endişe duyar. Peki, yaşadığınız bu
                        kaygılar basit bir yaşam tepkisi mi, yoksa anksiyete bozukluğuna mı işaret ediyor?
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>Psikiyatri Uzmanı</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            <p className={styles.lead}>
                                Zaman zaman endişelenmek insan olmanın doğal bir parçasıdır. Gireceğiniz bir mülakat öncesinde,
                                yaşanacak büyük bir yaşam değişikliğinde veya yolda karşınıza çıkan kontrolsüz bir durum karşısında
                                kaygı hissetmeniz son derece sağlıklıdır. Ancak bu duygu hali, görünürde belirgin bir neden yokken
                                veya nedenin ötesine geçecek bir orantısızlığa ulaştığında tıbbi açıdan değerlendirilmeyi gerektirir.
                            </p>

                            <h2>Anksiyete Nedir?</h2>
                            <p>
                                Anksiyete (kaygı), organizmayı yaklaşan tehlikelere karşı uyaran ve kişiyi
                                &ldquo;savaş, kaç veya don&rdquo; tepkilerine hazırlayan temel bir savunma sistemidir.
                                Evrimsel süreçte hayatta kalmamızı sağlayan mekanizma da budur. Ancak anksiyete bozukluğu (kaygı bozukluğu)
                                olarak adlandırdığımız durumda, bu alarm sistemi adeta hassas bir yangın detektörüne dönüşür ve duman
                                olmaksızın dahi çalmaya devam eder. Daha geniş bir perspektif için
                                <Link href="/hizmetler/anksiyete">Eryaman anksiyete değerlendirme süreci</Link> adlı ana hizmet
                                sayfamıza göz atabilirsiniz.
                            </p>

                            <h2>Anksiyete Belirtileri Nelerdir?</h2>
                            <p>
                                Anksiyete kendini <strong>bedensel, duygusal ve bilişsel (düşünsel)</strong> şekillerde gösterebilir.
                                Çoğu zaman kişiler bu belirtilerin fiziksel farklı bir sorunun işareti olduğunu düşünerek psikiyatri
                                dışındaki bölümlere (örneğin kardiyoloji veya dahiliye) uzun süre başvurabilirler. Ancak temel
                                problemin bir anksiyete tablosu olabileceğini anlamak için belirtileri bütünüyle tanımak önemlidir.
                            </p>

                            <h3>1. Zihinsel ve Duygusal Belirtiler</h3>
                            <ul>
                                <li>Sürekli ve durdurulamayan &ldquo;ya olursa&rdquo; korkuları</li>
                                <li>Çabuk öfkelenme, tahammülsüzlük ve çabuk parlama</li>
                                <li>Kötü bir haber alacağı beklentisi ile aşırı korku (Felaketleştirme)</li>
                                <li>Konsantre olmakta veya zihnin boşaldığını hissetmekte zorluk</li>
                            </ul>

                            <h3>2. Physical (Bedensel) Belirtiler</h3>
                            <ul>
                                <li><strong>Kalp ve Solunum:</strong> Göğüste sıkışma hissi, nefes darlığı, hızlı veya düzensiz kalp atışı.</li>
                                <li><strong>Gastrointestinal Sistem:</strong> Mide bulantısı, yutkunma güçlüğü, boğazda bir düğüm varmış gibi hissetme, ishal.</li>
                                <li><strong>Sinir Sistemi:</strong> Baş ağrısı, aşırı terleme, sıcak/soğuk basması, yüzde ateşlenme.</li>
                                <li><strong>Kas-İskelet Sistemi:</strong> Boyun, sırt ve el bölgelerinde kronik kas tutulmaları, seyirmeler veya titremeler.</li>
                            </ul>

                            <h3>3. Davranışsal Belirtiler</h3>
                            <ul>
                                <li>Belirsizlikten nefret etme ve her detayı aşırı kontrol etme ihtiyacı</li>
                                <li>Kaygı hissi yarattığı düşünülen mekanlardan, kişilerden veya durumlardan sürekli <strong>kaçınma</strong> davranışı.</li>
                            </ul>

                            <h2>Normal Kaygı İle Anksiyete Bozukluğu Arasındaki Fark</h2>
                            <p>
                                Hepimizin borçları, hastalık şüpheleri veya ilişki sorumlulukları sebebiyle endişelendiği anlar olur. Fakat
                                bunlar normal kaygılardır. Bir durumun &ldquo;bozukluk&rdquo; sayılabilmesi için kaygı, yaşanan nesnel
                                tehdide oranla çok aşırıdır ve uzun solukludur (genellikle aylarca sürer).
                            </p>
                            <p>
                                Normal kaygı geçicidir ve kişi problemi çözmeye odaklandıkça hafifler. Ancak anksiyete bozukluğunda
                                durum kronikleşebilir, kişi çare ararken daha da derin bir endişe çukuruna yuvarlanmış hisseder.
                                Burada belirtilerin <Link href="/blog/anksiyete-ne-kadar-surer">sürekli kaygı hali ve süresi</Link>
                                de ayırt edici önemli bir faktördür.
                            </p>

                            <h2>Günlük İşlevsellik Üzerindeki Etkiler</h2>
                            <p>
                                Kaygının kişiye verdiği zararın belki de en somutlaştığı yer, genel işlevselliktir. Anksiyete
                                bozukluğu olan bireyler; zihinsel enerjilerinin çoğunu tehditlere karşı hazır beklemeye ve bu
                                endişeyi dizginlemeye ayırdıklarından gün içinde sürekli yorgunluk yaşarlar. Bu durum, zaman
                                zaman başka rahatsızlıkların kapısını da aralar:
                            </p>
                            <ul>
                                <li>Sürekli endişe <Link href="/hizmetler/depresyon">klinik depresyonla birlikte</Link> görünebilir, kişi zamanla
                                    mutsuz, bitkin ve çaresiz hissetmeye başlayabilir.</li>
                                <li>Zihni susturamamak <Link href="/hizmetler/uyku-bozukluklari">uyku bozukluklarına</Link> neden olur. Gece uyuyamayan kişinin gündüz dayanıklılığı düşer.</li>
                                <li>Sosyal izolasyon başlayabilir ve ilişkiler zarar görebilir.</li>
                            </ul>

                            <h2>Ne Zaman Uzman Desteği Düşünülmeli?</h2>
                            <p>
                                Sürekli devam eden evhamlar nedeniyle yaşam kaliteniz düşmüşse, sürekli farklı tıbbi tahliller
                                yaptırıp olumlu yanıtlarına (bedensel bir sorununuzun olmamasına) karşılık ikna olamıyor, bedensel
                                huzursuzluğunuz devam ediyorsa, süreç tıbbileşmeden önce mutlaka bir psikiyatrist hekime
                                başvurmalısınız.
                            </p>

                            <h2>Ankara Eryaman&apos;da Anksiyete Destek ve Değerlendirme</h2>
                            <p>
                                Ankara Eryaman (Altay Mahallesi) bölgesinde yaşayan ve sürekli hissettiği kaygılarının iş ve sosyal
                                hayatını böldüğünü düşünen kişiler, Uzm. Dr. Abdullah Maraş tarafından gerçekleştirilen
                                bilimsel psikiyatrik değerlendirme süreci için randevu alabilirler. Etimesgut ve Batıkent
                                bölgesine olan yakınlığıyla, bu zorlu süreci yalnız atlatmak zorunda olmadığınızı hissedeceksiniz.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Genel Bilgilendirme</strong>
                                Bu sayfa bilgilendirme amaçlı hazırlanmıştır ve tıbbi tedavi önermemektedir. Anksiyete belirtileri, mutlaka
                                farklı organik veya ruhsal başka sorunlar (tiroid, kalp, depresyon vb.) açısından detaylıca uzman bir doktor tarafından araştırıldıktan sonra teşhis edilmelidir.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <h3>Değişime Destek İle Başlayın</h3>
                                <p>Eryaman bölgesinde yer alan kliniğimizde, anksiyete belirtilerinizin sağlıklı profesyonel bir ortamda incelenmesi için randevunuzu planlayabilirsiniz.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Randevu Ön Görüşme →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Uzman Değerlendirmesi</h3>
                                <p>Belirtilerinizi psikiyatri hekemiyle görüşün.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Randevu Al</Link>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4>Konuya Yakın Yazılar</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/hizmetler/anksiyete">Anksiyete (Hizmet)</Link></li>
                                    <li><Link href="/blog/anksiyete-ve-panik-atak-farki">Panik Atak ile Farkı</Link></li>
                                    <li><Link href="/blog/surekli-kaygi-hali">Sürekli Kaygı Hali Neden Olur?</Link></li>
                                    <li><Link href="/hizmetler/yetiskin-psikiyatrisi">Yetişkin Psikiyatrisi Uzmanı</Link></li>
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
