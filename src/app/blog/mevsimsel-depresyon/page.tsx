import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Mevsimsel Depresyon Nedir? Kış Depresyonu Belirtileri | Uzm. Dr. Abdullah Maraş',
    description:
        'Mevsimsel depresyon (kış depresyonu) nedir? Kısa gün ışığı, enerji kaybı ve duygudurum değişiklikleri. Ankara Eryaman psikiyatri uzmanı bilgilendirmesi.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/mevsimsel-depresyon' },
    openGraph: {
        title: 'Mevsimsel Depresyon Nedir? Kış Depresyonu Belirtileri',
        description: 'Mevsimsel duygudurum değişiklikleri hakkında kapsamlı bilgilendirme yazısı.',
        type: 'article', locale: 'tr_TR',
        publishedTime: '2026-03-26T09:00:00+03:00',
        authors: ['Uzm. Dr. Abdullah Maraş'],
    },
};

const faqItems = [
    {
        question: 'Mevsimsel depresyon nedir?',
        answer: 'Mevsimsel depresyon, belirli mevsimlerde — özellikle sonbahar ve kış aylarında — ortaya çıkan ve gün ışığı süresinin kısalmasıyla ilişkili olduğu düşünülen bir depresyon türüdür. Belirtiler genellikle ilkbahar ve yaz aylarında kendiliğinden hafifler.',
    },
    {
        question: 'Kış depresyonunun belirtileri nelerdir?',
        answer: 'Aşırı uyuma ihtiyacı, enerji düşüklüğü, karbonhidratlı gıdalara yönelme, kilo artışı, sosyal çekilme, karamsarlık ve motivasyon kaybı mevsimsel depresyonun yaygın belirtileri arasındadır.',
    },
    {
        question: 'Mevsimsel depresyon sıradan bir kış hüznü müdür?',
        answer: 'Hayır. Belirtiler haftalarca sürebilir, günlük işlevselliği olumsuz etkileyebilir ve her yıl benzer dönemlerde tekrar edebilir. Geçici bir hüzünden daha derin ve kalıcı olan bu durum, profesyonel değerlendirme gerektirebilir.',
    },
    {
        question: 'Eryaman\'da mevsimsel depresyon değerlendirmesi yapılır mı?',
        answer: 'Evet. Ankara Eryaman, Altay Mahallesi çevresinde Uzm. Dr. Abdullah Maraş\'ın kliniğinde mevsimsel depresyon dahil tüm depresif durumların kapsamlı psikiyatrik değerlendirmesi yapılmaktadır.',
    },
    {
        question: 'Işık terapisi mevsimsel depresyonda işe yarar mı?',
        answer: 'Yapay gün ışığı uygulaması (ışık terapisi), mevsimsel depresyonda destekleyici bir yaklaşım olarak kullanılabilmektedir. Ancak bu yöntemin uygulanabilirliği bireysel değerlendirme sonucu uzman hekim tarafından belirlenmelidir.',
    },
];

export default function MevsimselDepresyonBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <span>Mevsimsel Depresyon</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Depresyon</span>
                        <time dateTime="2026-03-26">26 Mart 2026</time>
                        <span>•</span><span>9 dk okuma</span>
                    </div>
                    <h1>Mevsimsel Duygudurum Değişiklikleri ve Kış Depresyonu</h1>
                    <p className={styles.heroDesc}>
                        Sonbahar ve kış aylarında belirginleşen enerji kaybı, karamsarlık ve motivasyon
                        düşüklüğü — mevsimsel depresyonun doğasını, belirtilerini ve profesyonel
                        değerlendirmenin önemini ele alıyoruz.
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
                                Her yıl sonbaharla birlikte gün ışığı kısalmaya başladığında, pek çok kişi
                                enerjisinde düşüş, uyku düzeninde bozulma ve genel bir isteksizlik hisseder.
                                Bazıları için bu yalnızca geçici bir &ldquo;kış hüznü&rdquo;dür. Ancak belirtiler
                                haftalarca sürdüğünde, günlük yaşamı olumsuz etkilediğinde ve her yıl
                                tekrarladığında, mevsimsel duygudurum bozukluğundan — halk arasında
                                &ldquo;kış depresyonu&rdquo; olarak bilinen durumdan — söz edilebilir.
                            </p>
                            <p>
                                Ankara Eryaman&apos;da Uzm. Dr. Abdullah Maraş, mevsimsel depresyon dahil olmak
                                üzere depresif durumların kapsamlı değerlendirmesini bilimsel çerçevede
                                gerçekleştirmektedir.{' '}
                                <Link href="/hizmetler/depresyon">Depresyon değerlendirmesi</Link> hakkında
                                detaylı bilgi için hizmet sayfamızı inceleyebilirsiniz.
                            </p>

                            <h2>Mevsimsel Depresyon (SAD) Nedir?</h2>
                            <p>
                                Mevsimsel depresyon, tıbbi terminolojide &ldquo;Mevsimsel Afektif Bozukluk&rdquo;
                                (Seasonal Affective Disorder — SAD) olarak adlandırılan, yılın belirli
                                dönemlerinde tekrarlayan depresif belirtilerle karakterize bir durumdur. En
                                yaygın biçimi sonbahar-kış tipidir; gün ışığı süresinin kısalmasıyla belirtiler
                                başlar ve ilkbaharla birlikte kendiliğinden hafifler.
                            </p>
                            <p>
                                Mevsimsel depresyon, &ldquo;geçici bir kötü ruh hâli&rdquo; veya &ldquo;kış
                                tembelliği&rdquo;nden farklıdır. Belirtiler, bireyin günlük yaşam işlevselliğini,
                                iş performansını ve sosyal ilişkilerini anlamlı biçimde etkileyebilecek düzeyde
                                olabilir. Bu nedenle sıradan bir hüzün ile mevsimsel depresyon arasındaki ayrımın
                                profesyonel bir değerlendirme ile yapılması önerilmektedir.
                            </p>

                            <h2>Mevsimsel Depresyonun Olası Nedenleri</h2>
                            <p>
                                Mevsimsel depresyonun kesin nedeni henüz tam olarak aydınlatılmamış olmakla
                                birlikte, birkaç biyolojik mekanizmanın rol oynadığı düşünülmektedir:
                            </p>
                            <ul>
                                <li><strong>Gün ışığı süresinin azalması:</strong> Daha kısa gündüzler ve sınırlı güneş ışığı, vücudun biyolojik saatini (sirkadiyen ritmi) etkileyebilir. Bu durum uyku-uyanıklık döngüsünde ve duygudurum düzenlemesinde bozulmalara yol açabilir.</li>
                                <li><strong>Serotonin düzeylerindeki değişimler:</strong> Güneş ışığının azalması, beynin duygudurum düzenlenmesinde rol oynayan serotonin üretimini etkileyebilir.</li>
                                <li><strong>Melatonin dengesindeki kayma:</strong> Karanlık süresinin uzaması, uyku hormonları üzerindeki dengeyi değiştirebilir ve aşırı uyuma eğilimini artırabilir.</li>
                                <li><strong>D vitamini düzeylerindeki düşüş:</strong> Güneş ışığına maruz kalma süresinin azalması, D vitamini sentezini etkileyebilir. Düşük D vitamini düzeyleri, duygudurum değişiklikleriyle ilişkilendirilmektedir.</li>
                            </ul>
                            <p>
                                Genetik yatkınlık da önemli bir faktördür; ailesinde depresyon öyküsü bulunan
                                bireylerde mevsimsel depresyon riski artabilmektedir. Özellikle kuzey enlemlerde
                                yaşayan ve doğal gün ışığına sınırlı maruz kalan bireylerde daha yaygın
                                gözlenebilmektedir.
                            </p>

                            <h2>Kış Depresyonunun Belirtileri</h2>
                            <p>
                                Mevsimsel depresyonun belirtileri, klasik depresyon belirtileriyle büyük ölçüde
                                örtüşmekle birlikte bazı kendine özgü özellikleri bulunmaktadır.{' '}
                                <Link href="/blog/depresyon-belirtileri">Depresyon belirtileri hakkında
                                    kapsamlı blog yazımızı</Link> da inceleyebilirsiniz.
                            </p>
                            <h3>Duygusal Belirtiler</h3>
                            <ul>
                                <li>Süreğen karamsarlık, üzüntü ve boşluk hissi</li>
                                <li>Daha önce keyif alınan etkinliklere karşı ilgi kaybı</li>
                                <li>Umutsuzluk ve çaresizlik duyguları</li>
                                <li>Kolay sinirlenme ve irritabilite</li>
                                <li>Sosyal etkinliklerden kaçınma, yalnız kalma isteği</li>
                            </ul>
                            <h3>Bedensel ve Davranışsal Belirtiler</h3>
                            <ul>
                                <li>Aşırı uyuma ihtiyacı — sabah uyanmakta güçlük (hipersomnia)</li>
                                <li>Belirgin enerji düşüklüğü, hareket etmekte isteksizlik</li>
                                <li>Karbonhidrat ve şekerli gıdalara yönelme, iştah artışı</li>
                                <li>Kilo artışı</li>
                                <li>Kollar ve bacaklarda ağırlık hissi</li>
                            </ul>
                            <p>
                                Bu belirtilerden özellikle hipersomnia (aşırı uyuma) ve karbonhidrat isteğindeki
                                artış, mevsimsel depresyonu klasik depresyondan ayıran önemli özelliklerdir.{' '}
                                <Link href="/hizmetler/uyku-bozukluklari">Uyku bozuklukları</Link> ile depresyon
                                arasındaki ilişki, değerlendirme sürecinde birlikte ele alınmaktadır.
                            </p>

                            <h2>Mevsimsel Depresyon ile Sıradan Kış Hüznü Arasındaki Fark</h2>
                            <p>
                                Kış aylarında enerjide bir miktar düşüş hissetmek, birçok insan için yaygın
                                bir deneyimdir. Ancak aşağıdaki durumlar mevsimsel depresyona işaret edebilir:
                            </p>
                            <ul>
                                <li>Belirtiler en az <strong>iki hafta boyunca</strong> çoğu gün devam ediyorsa</li>
                                <li>İş, ev veya sosyal yaşamı sürdürmekte <strong>zorluk yaşanıyorsa</strong></li>
                                <li>Her yıl <strong>benzer dönemlerde</strong> aynı belirtiler tekrarlıyorsa</li>
                                <li>İlkbahar ve yazla birlikte belirtiler <strong>belirgin şekilde hafifliyorsa</strong></li>
                                <li>Günlük yaşamdan <strong>zevk alamama</strong> hâli belirginse</li>
                            </ul>
                            <p>
                                Bu durumların varlığında, bir psikiyatri uzmanından değerlendirme almanız
                                önerilmektedir. Eryaman&apos;da psikiyatrist arayan kişiler, Altay Mahallesi
                                çevresindeki kliniğimize başvurabilirler.
                            </p>

                            <h2>Mevsimsel Depresyon Kimlerde Daha Sık Görülür?</h2>
                            <p>
                                Mevsimsel depresyon genel olarak şu risk faktörleriyle ilişkilendirilmektedir:
                            </p>
                            <ul>
                                <li>Kadınlarda erkeklere göre daha sık rapor edilmektedir</li>
                                <li>Genç yetişkinlerde ve orta yaş grubunda daha yaygın görülebilmektedir</li>
                                <li>Ailede depresyon veya mevsimsel duygudurum bozukluğu öyküsü bulunan bireylerde risk artabilmektedir</li>
                                <li>Kuzey enlemlerde veya doğal gün ışığına sınırlı maruz kalan bölgelerde yaşayan bireyler daha fazla etkilenebilmektedir</li>
                                <li>Mevcut depresyon veya bipolar bozukluk tanısı olan bireylerde mevsimsel alevlenmeler görülebilmektedir</li>
                            </ul>

                            <h2>Mevsimsel Depresyonda Profesyonel Değerlendirme</h2>
                            <p>
                                Mevsimsel depresyon şüphesinde profesyonel bir değerlendirme, belirtilerin
                                doğasını, şiddetini ve altta yatan olası nedenleri anlamak açısından önem
                                taşımaktadır. Ankara Eryaman&apos;da Uzm. Dr. Abdullah Maraş tarafından
                                yürütülen değerlendirme süreci şu aşamaları içermektedir:
                            </p>
                            <p>
                                <strong>Klinik görüşme:</strong> Belirtilerin başlangıcı, süresi, şiddeti ve
                                mevsimsel örüntüsü detaylı olarak ele alınır.<br />
                                <strong>Ayırıcı değerlendirme:</strong> Mevsimsel depresyonun, diğer depresyon
                                türlerinden veya tiroid bozuklukları gibi bedensel durumlardan ayırt edilmesi
                                sağlanır.<br />
                                <strong>Bireysel planlama:</strong> Klinik değerlendirme sonucunda bireyin
                                ihtiyaçlarına uygun bir yaklaşım planı oluşturulur. Bu plan ışık terapisi,
                                farmakolojik destek, psikoterapi veya yaşam tarzı düzenlemelerini içerebilir.
                            </p>
                            <p>
                                Etimesgut ve Batıkent bölgelerinden de kolay ulaşım sağlanabilen kliniğimizde,
                                her bireye yeterli süre ve özen ayrılarak detaylı bir değerlendirme
                                gerçekleştirilmektedir.{' '}
                                <Link href="/randevu">Randevu almak için tıklayınız.</Link>
                            </p>

                            <div className="info-banner">
                                <strong>📌 Önemli Bilgilendirme</strong>
                                Bu yazıdaki içerikler genel bilgilendirme amaçlı hazırlanmıştır ve tıbbi tanı
                                ya da tedavi önerisi niteliği taşımamaktadır. Mevsimsel depresyon belirtileri
                                yaşıyorsanız, bireysel değerlendirme için bir psikiyatri uzmanına başvurunuz.
                            </div>

                            <div className={styles.faqSection}>
                                <h2>Mevsimsel Depresyon Hakkında Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.relatedBox}>
                                <h3>İlgili Sayfalar</h3>
                                <ul>
                                    <li><Link href="/hizmetler/depresyon">Depresyon Değerlendirmesi →</Link></li>
                                    <li><Link href="/blog/depresyon-belirtileri">Depresyon Belirtileri Nelerdir? →</Link></li>
                                    <li><Link href="/hizmetler/uyku-bozukluklari">Uyku Bozuklukları →</Link></li>
                                    <li><Link href="/blog/depresyon-mu-uzuntu-mu">Depresyon mu Üzüntü mü? →</Link></li>
                                </ul>
                            </div>

                            <div className={styles.articleCta}>
                                <h3>Profesyonel Değerlendirme İçin</h3>
                                <p>Mevsimsel depresyon belirtileri yaşıyorsanız, Ankara Eryaman&apos;da bilimsel çerçevede psikiyatrik değerlendirme için randevu alabilirsiniz.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Randevu Al →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Değerlendirme İçin</h3>
                                <p>Mevsimsel depresyon değerlendirmesi</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Randevu Al</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>Uzman Hekim</h4>
                                <div className={styles.doctorInfo}><strong>Uzm. Dr. Abdullah Maraş</strong><span>Psikiyatri Uzmanı</span><span>Eryaman, Ankara</span></div>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>Depresyon Kümesi</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/blog/depresyon-belirtileri">Depresyon Belirtileri</Link></li>
                                    <li><Link href="/blog/depresyon-mu-uzuntu-mu">Depresyon mu Üzüntü mü?</Link></li>
                                    <li><Link href="/blog/depresyonda-profesyonel-destek">Profesyonel Destek Süreci</Link></li>
                                    <li><Link href="/blog/is-yasami-ve-depresyon">İş Yaşamı ve Depresyon</Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "FAQPage",
                    mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } }))
                })
            }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "Article",
                    headline: "Mevsimsel Duygudurum Değişiklikleri ve Kış Depresyonu",
                    datePublished: "2026-03-26T09:00:00+03:00",
                    author: { "@id": "https://www.drabdullahmaras.com.tr/#physician" },
                    publisher: { "@id": "https://www.drabdullahmaras.com.tr/#organization" },
                    mainEntityOfPage: "https://www.drabdullahmaras.com.tr/blog/mevsimsel-depresyon"
                })
            }} />
        </>
    );
}
