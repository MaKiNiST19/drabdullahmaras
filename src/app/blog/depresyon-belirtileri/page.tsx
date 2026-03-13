import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Depresyon Belirtileri Nelerdir? Kendinizi Tanıyın | Uzm. Dr. Abdullah Maraş',
    description:
        'Depresyon belirtileri nelerdir? Sürekli mutsuzluk, enerji kaybı, uyku sorunları gibi depresyon işaretlerini öğrenin. Ankara Eryaman psikiyatri uzmanı bilgilendirmesi.',
    alternates: {
        canonical: 'https://drabdullahmaras.com/blog/depresyon-belirtileri',
    },
    openGraph: {
        title: 'Depresyon Belirtileri Nelerdir? Kendinizi Tanıyın',
        description: 'Depresyon belirtileri hakkında kapsamlı bilgilendirme. Ankara Eryaman psikiyatri uzmanı.',
        type: 'article',
        locale: 'tr_TR',
        publishedTime: '2026-03-02T09:00:00+03:00',
        authors: ['Uzm. Dr. Abdullah Maraş'],
    },
};

const faqItems = [
    {
        question: 'Depresyon belirtileri ne kadar süre devam ederse profesyonel destek alınmalıdır?',
        answer:
            'Depresif belirtiler iki hafta veya daha uzun süre boyunca çoğu gün devam ediyorsa ve günlük yaşam işlevselliğinizi olumsuz etkiliyorsa, profesyonel bir psikiyatrik değerlendirme almanız önerilmektedir. Erken dönemde alınan uzman desteği, bireyin yaşam kalitesinin korunmasına katkı sağlayabilir.',
    },
    {
        question: 'Depresyon belirtileri sadece ruhsal mıdır?',
        answer:
            'Hayır, depresyon hem ruhsal hem de bedensel belirtilerle kendini gösterebilir. Kronik yorgunluk, baş ağrısı, kas ağrıları, sindirim sorunları, iştah değişiklikleri ve uyku düzensizlikleri gibi fiziksel yakınmalar da depresyonla ilişkili olabilir. Bu nedenle kapsamlı bir değerlendirme önemlidir.',
    },
    {
        question: 'Kendimi sürekli mutsuz hissediyorum, bu depresyon mu?',
        answer:
            'Sürekli mutsuzluk hissi depresyonun olası belirtilerinden biri olmakla birlikte, tek başına kesin bir tanı koydurmaz. Depresyon değerlendirmesi, belirtilerin süresi, şiddeti ve günlük yaşama etkisi gibi birçok faktörü içermektedir. Kesin bir değerlendirme için uzman bir psikiyatristle görüşmeniz önerilir.',
    },
    {
        question: 'Eryaman\'da depresyon belirtileri için hangi uzmana başvurulmalıdır?',
        answer:
            'Depresyon belirtileri yaşıyorsanız, bir psikiyatri uzmanına (ruh sağlığı ve hastalıkları uzmanı) başvurmanız önerilmektedir. Ankara Eryaman, Altay Mahallesi çevresinde Uzm. Dr. Abdullah Maraş\'ın kliniğinde depresyon değerlendirmesi yapılmaktadır.',
    },
    {
        question: 'Depresyon belirtileri kişiden kişiye farklılık gösterir mi?',
        answer:
            'Evet, depresyon belirtileri bireyden bireye önemli farklılıklar gösterebilir. Bazı bireylerde ağırlıklı olarak duygusal belirtiler (üzüntü, karamsarlık) ön plandayken, bazılarında bedensel yakınmalar (yorgunluk, ağrılar) veya bilişsel belirtiler (konsantrasyon güçlüğü, kararsızlık) daha belirgin olabilir.',
    },
];

export default function DepresyonBelirtileriBlog() {
    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link>
                        <span>/</span>
                        <Link href="/blog">Blog</Link>
                        <span>/</span>
                        <span>Depresyon Belirtileri</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Depresyon</span>
                        <time dateTime="2026-03-02">2 Mart 2026</time>
                        <span>•</span>
                        <span>8 dk okuma</span>
                    </div>
                    <h1>Depresyon Belirtileri Nelerdir? Kendinizi Tanıyın</h1>
                    <p className={styles.heroDesc}>
                        Depresyonun ruhsal ve bedensel belirtilerini tanımak, profesyonel değerlendirme
                        için atılacak ilk adımdır. Bu yazıda depresyon işaretlerini birlikte inceliyoruz.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </div>
                        <div>
                            <strong>Uzm. Dr. Abdullah Maraş</strong>
                            <span>Ruh Sağlığı ve Hastalıkları Uzmanı</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article */}
            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            <p className={styles.lead}>
                                &ldquo;Kendimi sürekli mutsuz hissediyorum, acaba depresyonda mıyım?&rdquo;
                                Bu soruyu kendi kendinize sorduysanız, yalnız değilsiniz. Dünya Sağlık Örgütü
                                verilerine göre dünya genelinde 280 milyondan fazla insan depresyon belirtileri
                                yaşamaktadır. Depresyon, yalnızca bir &ldquo;kötü gün geçirme&rdquo; hâli
                                değildir; bireyin yaşam kalitesini, ilişkilerini ve iş performansını derinden
                                etkileyebilen bir ruh sağlığı durumudur.
                            </p>
                            <p>
                                Ankara Eryaman&apos;da psikiyatrist arayan kişiler sıklıkla depresyon
                                belirtileriyle ilgili bilgi edinmek istemektedir. Bu yazıda depresyonun
                                yaygın belirtilerini, bedensel yansımalarını ve profesyonel değerlendirmenin
                                önemini bilimsel çerçevede ele alıyoruz. Depresyon belirtileri hakkında daha
                                kapsamlı bilgi için{' '}
                                <Link href="/hizmetler/depresyon">depresyon değerlendirmesi</Link>{' '}
                                sayfamızı da inceleyebilirsiniz.
                            </p>

                            {/* H2 - 1 */}
                            <h2>Depresyonun Duygusal Belirtileri</h2>
                            <p>
                                Depresyonun en bilinen yüzü, duygusal alanda kendini gösterir.
                                Süreğen bir karamsarlık, derin bir üzüntü hissi ve yaşama karşı ilgi
                                kaybı, depresyonun temel duygusal belirtileri arasında yer almaktadır.
                            </p>
                            <p>
                                Bu belirtiler, sıradan bir üzüntüden farklı olarak günlerce, haftalarca
                                hatta aylarca devam edebilir. Birey daha önce keyif aldığı etkinliklere
                                karşı ilgisizlik hissedebilir; hobiler, sosyal aktiviteler ve hatta sevdikleriyle
                                vakit geçirmek artık eski anlamını yitirebilir. &ldquo;Kendimi sürekli mutsuz
                                hissediyorum, hiçbir şeyden zevk alamıyorum&rdquo; ifadesi, klinik pratikte
                                en sık duyulan yakınmalardan biridir.
                            </p>
                            <p>
                                Bunun yanı sıra değersizlik duygusu, aşırı suçluluk hissi ve umutsuzluk
                                da depresyonun duygusal belirtileri arasındadır. Birey kendini yetersiz
                                hissedebilir ve gelecekle ilgili olumsuz bir bakış açısı geliştirebilir.
                                Bu belirtilerin varlığı, tek başına kesin tanı anlamına gelmemekle birlikte,
                                profesyonel bir değerlendirme için önemli ipuçları sunmaktadır.
                            </p>

                            {/* H2 - 2 */}
                            <h2>Bedensel Belirtiler: Depresyonun Görünmeyen Yüzü</h2>
                            <p>
                                Depresyon yalnızca ruhsal bir durum değildir; bedensel olarak da kendini
                                belirgin şekilde gösterebilir. Birçok birey, depresyon belirtilerini fiziksel
                                yakınmalar olarak deneyimler ve bu nedenle durumun ruhsal bir boyutu olduğunu
                                fark etmekte gecikilebilir.
                            </p>
                            <p>
                                Depresyonla ilişkili yaygın bedensel belirtiler şunlardır:
                            </p>
                            <ul>
                                <li><strong>Kronik yorgunluk ve enerji kaybı:</strong> Yeterli uyku alınsa dahi sürekli bir bitkinlik hissi yaşanabilir. Basit günlük görevler bile büyük çaba gerektirebilir.</li>
                                <li><strong>Uyku düzeninde değişiklikler:</strong> Uykuya dalmakta güçlük, gece sık uyanma veya tam tersine aşırı uyuma görülebilir. <Link href="/hizmetler/uyku-bozukluklari">Uyku bozuklukları</Link> ve depresyon arasında güçlü bir ilişki bulunmaktadır.</li>
                                <li><strong>İştah ve kilo değişimleri:</strong> Belirgin iştah artışı veya azalması, bunlara bağlı kilo değişimleri depresyonun bedensel yansımaları olabilir.</li>
                                <li><strong>Açıklanamayan ağrılar:</strong> Baş ağrısı, sırt ağrısı, kas gerginliği ve sindirim sorunları gibi fiziksel yakınmalar, altta yatan bir depresif durumla ilişkili olabilir.</li>
                                <li><strong>Psikomotor değişiklikler:</strong> Hareketlerde yavaşlama veya tam tersi huzursuz, yerinde duramama hâli gözlenebilir.</li>
                            </ul>
                            <p>
                                Bu bedensel belirtiler, depresyonun tanınmasını zorlaştırabilir. Özellikle
                                yalnızca fiziksel yakınmalarla başvuran bireylerde, kapsamlı bir psikiyatrik
                                değerlendirmenin önemi daha da artmaktadır.
                            </p>

                            {/* H2 - 3 */}
                            <h2>Bilişsel Belirtiler: Düşünce Dünyasında Yaşanan Değişimler</h2>
                            <p>
                                Depresyon, bireyin düşünce biçimini ve bilişsel işlevlerini de etkileyebilir.
                                Konsantrasyon güçlüğü, dikkat dağınıklığı, unutkanlık ve karar vermekte
                                zorlanma, depresyonun sıklıkla gözlenen bilişsel belirtileri arasındadır.
                            </p>
                            <p>
                                İş yerinde performans düşüklüğü, okuma veya bir konuya odaklanmada güçlük
                                ve günlük kararları bile vermekte zorlanma gibi durumlar yaşanabilir.
                                Bu belirtiler bazen{' '}
                                <Link href="/hizmetler/dikkat-eksikligi">dikkat eksikliği (DEHB)</Link>{' '}
                                ile karıştırılabilir; bu nedenle ayırıcı değerlendirme önem taşımaktadır.
                            </p>
                            <p>
                                Ayrıca depresyonda olumsuz düşünce kalıpları belirgin hâle gelebilir.
                                &ldquo;Hiçbir şey düzelmeyecek&rdquo;, &ldquo;Ben yetersizim&rdquo;
                                gibi tekrarlayan olumsuz iç konuşmalar, depresyonun bilişsel boyutunun
                                önemli bir göstergesidir.
                            </p>

                            {/* H2 - 4 */}
                            <h2>Davranışsal Belirtiler ve Sosyal Yaşam Üzerindeki Etkisi</h2>
                            <p>
                                Depresyon, bireyin davranışlarında ve sosyal yaşamında belirgin değişikliklere
                                yol açabilir. Sosyal izolasyon, yani arkadaşlardan ve aileden uzaklaşma,
                                depresyonun en yaygın davranışsal belirtilerinden biridir. Birey davetleri
                                reddetmeye, telefon aramalarını karşılamamaya ve yalnız kalmayı tercih etmeye
                                başlayabilir.
                            </p>
                            <p>
                                Günlük sorumlulukların ihmal edilmesi de önemli bir göstergedir. Kişisel
                                bakımda azalma, ev işlerinin birikmesi, iş veya okul performansında düşüş
                                ve önceden keyif alınan aktivitelerin tamamen bırakılması gibi davranış
                                değişiklikleri gözlenebilir.
                            </p>
                            <p>
                                Bununla birlikte, bazı bireylerde irritabilite (kolay sinirlenme) ve
                                huzursuzluk da depresyon belirtisi olarak ortaya çıkabilir. Özellikle
                                erkeklerde ve ergenlerde depresyon, üzüntüden ziyade öfke ve sinirlilik
                                şeklinde kendini gösterebilir. Ergenlik döneminde yaşanan belirtiler için{' '}
                                <Link href="/hizmetler/16-yas-uzeri-ergen-psikiyatrisi">16 yaş üzeri ergen psikiyatrisi</Link>{' '}
                                değerlendirmesi önem kazanmaktadır.
                            </p>

                            {/* H2 - 5 */}
                            <h2>Depresyon Belirtilerini Ne Zaman Ciddiye Almalısınız?</h2>
                            <p>
                                Herkes zaman zaman üzüntü, motivasyon düşüklüğü veya yorgunluk hissedebilir.
                                Ancak aşağıdaki durumlar söz konusu olduğunda, profesyonel bir psikiyatrik
                                değerlendirme almanız önerilmektedir:
                            </p>
                            <ul>
                                <li>Belirtiler <strong>iki hafta veya daha uzun süre</strong> boyunca çoğu gün devam ediyorsa</li>
                                <li>Günlük yaşam aktivitelerinizi (iş, ev, sosyal yaşam) <strong>sürdürmekte zorlanıyorsanız</strong></li>
                                <li>Uyku düzeniniz veya iştahınızda <strong>belirgin değişiklikler</strong> yaşıyorsanız</li>
                                <li>Sosyal ilişkilerinizde <strong>gözle görülür bir çekilme</strong> söz konusuysa</li>
                                <li>Daha önce keyif aldığınız etkinliklere karşı <strong>tamamen ilgi kaybı</strong> yaşıyorsanız</li>
                                <li>Kendinizi <strong>değersiz veya umutsuz</strong> hissediyorsanız</li>
                            </ul>
                            <p>
                                Erken dönemde alınan profesyonel destek, bireyin yaşam kalitesinin
                                korunmasına ve günlük işlevselliğinin sürdürülmesine önemli katkı sağlayabilir.
                                Eryaman&apos;da psikiyatrist arayan kişiler,{' '}
                                <Link href="/hizmetler/depresyon">depresyon değerlendirmesi</Link>{' '}
                                için Altay Mahallesi çevresindeki kliniğimize başvurabilirler.
                            </p>

                            {/* H2 - 6 */}
                            <h2>Ankara Eryaman&apos;da Depresyon Değerlendirmesi</h2>
                            <p>
                                Uzm. Dr. Abdullah Maraş, Ankara Eryaman&apos;da bilimsel ve etik çerçevede
                                depresyon değerlendirmesi gerçekleştirmektedir. Anadolu Üniversitesi Tıp
                                Fakültesi mezunu olan Dr. Maraş, Ruh Sağlığı ve Hastalıkları alanında
                                uzmanlık belgesine sahiptir.
                            </p>
                            <p>
                                Depresyon değerlendirmesi, kapsamlı bir klinik görüşme ile başlamaktadır.
                                Bu süreçte bireyin mevcut belirtileri, belirtilerin süresi ve şiddeti,
                                geçmiş sağlık öyküsü ve psikososyal faktörler detaylı olarak ele alınmaktadır.
                                Her bireyin özgün koşullarına göre bireysel bir değerlendirme ve planlama
                                süreci yürütülmektedir.
                            </p>
                            <p>
                                Kliniğimiz Altay Mahallesi çevresinde yer almakta olup Etimesgut ve Batıkent
                                bölgelerinden de kolay ulaşım sağlanabilmektedir. Depresyon belirtileri
                                yaşıyorsanız, profesyonel bir değerlendirme için{' '}
                                <Link href="/randevu">randevu</Link> alabilirsiniz.
                            </p>

                            {/* Info Banner */}
                            <div className="info-banner">
                                <strong>📌 Önemli Bilgilendirme</strong>
                                Bu yazıdaki içerikler genel bilgilendirme amaçlı hazırlanmıştır ve tıbbi tanı
                                ya da tedavi önerisi niteliği taşımamaktadır. Depresyon belirtileri yaşıyorsanız,
                                bireysel değerlendirme için mutlaka bir psikiyatri uzmanına başvurunuz.
                                Acil durumlarda 182 ALO Psikiyatri hattını arayabilirsiniz.
                            </div>

                            {/* FAQ */}
                            <div className={styles.faqSection}>
                                <h2>Depresyon Belirtileri Hakkında Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            {/* Internal Links Box */}
                            <div className={styles.relatedBox}>
                                <h3>İlgili Sayfalar</h3>
                                <ul>
                                    <li><Link href="/hizmetler/depresyon">Depresyon Değerlendirmesi →</Link></li>
                                    <li><Link href="/hizmetler/anksiyete">Anksiyete Bozuklukları →</Link></li>
                                    <li><Link href="/hizmetler/uyku-bozukluklari">Uyku Bozuklukları →</Link></li>
                                    <li><Link href="/hizmetler/yetiskin-psikiyatrisi">Yetişkin Psikiyatrisi →</Link></li>
                                </ul>
                            </div>

                            {/* CTA */}
                            <div className={styles.articleCta}>
                                <h3>Profesyonel Değerlendirme İçin</h3>
                                <p>
                                    Depresyon belirtileri yaşıyorsanız, Ankara Eryaman&apos;da bilimsel
                                    çerçevede psikiyatrik değerlendirme için randevu alabilirsiniz.
                                </p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">
                                    Randevu Al →
                                </Link>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Değerlendirme İçin</h3>
                                <p>Depresyon belirtileri için profesyonel psikiyatrik değerlendirme</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Randevu Al</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>Uzman Hekim</h4>
                                <div className={styles.doctorInfo}>
                                    <strong>Uzm. Dr. Abdullah Maraş</strong>
                                    <span>Psikiyatri Uzmanı</span>
                                    <span>Eryaman, Ankara</span>
                                </div>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>İlgili Yazılar</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/blog/mevsimsel-depresyon">Mevsimsel Depresyon</Link></li>
                                    <li><Link href="/blog/depresyon-mu-uzuntu-mu">Depresyon mu Üzüntü mü?</Link></li>
                                    <li><Link href="/blog/depresyonda-profesyonel-destek">Profesyonel Destek Süreci</Link></li>
                                    <li><Link href="/blog/is-yasami-ve-depresyon">İş Yaşamı ve Depresyon</Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* JSON-LD Schemas */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: faqItems.map(f => ({
                        "@type": "Question",
                        name: f.question,
                        acceptedAnswer: { "@type": "Answer", text: f.answer }
                    }))
                })
            }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    headline: "Depresyon Belirtileri Nelerdir? Kendinizi Tanıyın",
                    description: "Depresyon belirtileri nelerdir? Sürekli mutsuzluk, enerji kaybı, uyku sorunları gibi depresyon işaretlerini öğrenin.",
                    datePublished: "2026-03-02T09:00:00+03:00",
                    dateModified: "2026-03-02T09:00:00+03:00",
                    author: {
                        "@id": "https://drabdullahmaras.com/#physician" 
                    },
                    publisher: {
                        "@id": "https://drabdullahmaras.com/#organization" },
                    mainEntityOfPage: "https://drabdullahmaras.com/blog/depresyon-belirtileri",
                    url: "https://drabdullahmaras.com/blog/depresyon-belirtileri",
                    wordCount: 1200,
                    articleSection: "Depresyon"
                })
            }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: [
                        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://drabdullahmaras.com" },
                        { "@type": "ListItem", position: 2, name: "Blog", item: "https://drabdullahmaras.com/blog" },
                        { "@type": "ListItem", position: 3, name: "Depresyon Belirtileri" }
                    ]
                })
            }} />
        </>
    );
}
