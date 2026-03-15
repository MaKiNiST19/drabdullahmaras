import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'İş Yaşamı ve Depresyon: İşlevselliği Korumak | Uzm. Dr. Abdullah Maraş',
    description:
        'Depresyonun iş yaşamı üzerindeki etkileri nelerdir? Performans düşüklüğü, devamsızlık ve tükenmişlik ile depresyon ilişkisi. Ankara Eryaman psikiyatri uzmanı.',
    alternates: { canonical: 'https://drabdullahmaras.com/blog/is-yasami-ve-depresyon' },
    openGraph: {
        title: 'İş Yaşamı ve Depresyon: İşlevselliği Korumak',
        type: 'article', locale: 'tr_TR',
        publishedTime: '2026-05-04T09:00:00+03:00',
        authors: ['Uzm. Dr. Abdullah Maraş'],
    },
};

const faqItems = [
    { question: 'Depresyon iş performansını etkiler mi?', answer: 'Evet. Depresyon konsantrasyon güçlüğü, motivasyon düşüklüğü, karar verme zorluğu ve enerji kaybına yol açarak iş performansını olumsuz etkileyebilir. Bu durum "presenteeism" olarak da adlandırılmaktadır.' },
    { question: 'Tükenmişlik sendromu depresyon mudur?', answer: 'Tükenmişlik ve depresyon farklı kavramlar olmakla birlikte örtüşen belirtileri olabilir. Tükenmişlik ağırlıklı olarak işle ilişkili iken, depresyon yaşamın tüm alanlarını etkileyebilir. Profesyonel değerlendirme ile ayrım yapılabilir.' },
    { question: 'İş stresi depresyon nedeni olabilir mi?', answer: 'Kronik iş stresi, depresyon gelişimi için risk faktörlerinden biri olabilir. Ancak depresyon genellikle birden fazla etkenin bir araya gelmesiyle oluşur. Stresle başa çıkma becerilerinin güçlendirilmesi profesyonel bir destek sürecinin parçası olabilir.' },
    { question: 'İş yerinde depresyon belirtileri nasıl fark edilir?', answer: 'İş yerinde sürekli konsantrasyon güçlüğü, hataların artması, görevleri tamamlayamama, devamsızlık, meslektaşlardan uzaklaşma ve motivasyon kaybı depresyon belirtileri olabilir.' },
    { question: 'Eryaman\'da iş stresine bağlı depresyon değerlendirmesi yapılır mı?', answer: 'Evet. Ankara Eryaman\'da Uzm. Dr. Abdullah Maraş kliniğinde, iş stresi kaynaklı belirtiler dahil olmak üzere kapsamlı depresyon değerlendirmesi yapılmaktadır.' },
];

export default function IsYasamiVeDepresyonBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <span>İş Yaşamı ve Depresyon</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Depresyon</span>
                        <time dateTime="2026-05-04">4 Mayıs 2026</time>
                        <span>•</span><span>9 dk okuma</span>
                    </div>
                    <h1>İş Yaşamı ve Depresyon: Profesyonel Hayatta İşlevselliği Korumak</h1>
                    <p className={styles.heroDesc}>
                        Depresyon, iş yaşamını nasıl etkiler? Performans düşüklüğü, tükenmişlik ve
                        işlevsellik kaybı — iş hayatında depresyonun yansımalarını ve
                        profesyonel desteğin önemini ele alıyoruz.
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
                                İş hayatı, yetişkin yaşamının merkezi unsurlarından biridir. Ancak depresyon,
                                bireyin profesyonel yaşamını derinden etkileyebilecek bir ruh sağlığı durumudur.
                                Dünya Sağlık Örgütü&apos;ne göre depresyon, iş gücü kaybının önde gelen
                                nedenlerinden biridir ve küresel ölçekte milyarlarca dolarlık üretkenlik kaybına
                                yol açmaktadır.
                            </p>
                            <p>
                                Ankara Eryaman&apos;da Uzm. Dr. Abdullah Maraş, iş yaşamından kaynaklanan
                                veya iş yaşamını etkileyen depresyon belirtilerinin kapsamlı değerlendirmesini
                                gerçekleştirmektedir.{' '}
                                <Link href="/hizmetler/depresyon">Depresyon değerlendirmesi</Link> hizmet
                                sayfamızda detaylı bilgi bulabilirsiniz.
                            </p>

                            <h2>Depresyonun İş Performansına Etkileri</h2>
                            <p>
                                Depresyon, iş performansını görünür ve görünmeyen birçok şekilde
                                etkileyebilmektedir. Bu etkilerin iki temel boyutu bulunmaktadır:
                            </p>
                            <h3>Devamsızlık (Absenteeism)</h3>
                            <p>
                                Depresyon yaşayan bireyler, işe gidemeyecek kadar yoğun belirtiler
                                yaşayabilmektedir. Enerji kaybı, uyku düzensizlikleri ve motivasyon eksikliği,
                                iş yerine düzenli devam etmeyi zorlaştırabilir. Araştırmalar, depresyonun
                                iş yerinde devamsızlığın en yaygın nedenlerinden biri olduğunu göstermektedir.
                            </p>
                            <h3>Masada Devamsızlık (Presenteeism)</h3>
                            <p>
                                Presenteeism, bireyin fiziksel olarak iş yerinde bulunmasına rağmen
                                verimli çalışamaması durumudur. Depresyon, bu durumun en sık karşılaşılan
                                nedenlerinden biridir. Konsantrasyon güçlüğü, karar verme zorluğu, yavaşlamış
                                düşünce süreçleri ve hata yapma eğiliminde artış, presenteeism&apos;in
                                tipik belirtileridir.
                            </p>

                            <h2>İş Yerinde Depresyon Belirtileri</h2>
                            <p>
                                Depresyon belirtileri iş ortamında kendine özgü biçimlerde ortaya çıkabilir.
                                Aşağıdaki belirtiler hem bireyin kendisi hem de yöneticiler ve iş arkadaşları
                                tarafından fark edilebilir:
                            </p>
                            <ul>
                                <li>Sürekli konsantrasyon güçlüğü ve dikkat dağınıklığı</li>
                                <li>Daha önce kolayca yapılan görevlerin ağır gelmesi</li>
                                <li>Termin tarihlerini kaçırma ve işleri tamamlayamama</li>
                                <li>Hataların artması</li>
                                <li>Meslektaşlardan uzaklaşma ve ekip çalışmasından kaçınma</li>
                                <li>İş yerinde irritabilite ve sabırsızlık</li>
                                <li>Toplantılara katılmakta isteksizlik</li>
                                <li>Sık hastalık izni alma eğilimi</li>
                            </ul>
                            <p>
                                Bu belirtiler genellikle kademeli olarak gelişir ve birey tarafından
                                &ldquo;stres&rdquo; veya &ldquo;yorgunluk&rdquo; olarak yorumlanabilir.{' '}
                                <Link href="/blog/depresyon-belirtileri">Depresyon belirtileri</Link>{' '}
                                hakkında kapsamlı yazımızı da inceleyebilirsiniz.
                            </p>

                            <h2>İş Stresi ve Depresyon İlişkisi</h2>
                            <p>
                                Kronik iş stresi, depresyon gelişimi için önemli bir risk faktörüdür.
                                Ancak iş stresi ile depresyon arasında doğrusal bir neden-sonuç ilişkisi
                                kurmak doğru değildir; depresyon çok faktörlü bir durumdur. Bununla
                                birlikte, aşağıdaki iş ortamı faktörleri depresyon riskini artırabilir:
                            </p>
                            <ul>
                                <li>Aşırı iş yükü ve uzun çalışma saatleri</li>
                                <li>İş-yaşam dengesinin bozulması</li>
                                <li>İş güvencesizliği ve ekonomik kaygılar</li>
                                <li>İş yerinde mobbing (psikolojik baskı)</li>
                                <li>Yönetim tarzı ve iş ortamı sorunları</li>
                                <li>Yeterli ödüllendirme ve takdir eksikliği</li>
                                <li>Monoton ve anlamsız hissedilen iş görevleri</li>
                            </ul>

                            <h2>Tükenmişlik ile Depresyon: Fark ve Benzerlikler</h2>
                            <p>
                                Tükenmişlik sendromu ve depresyon sıklıkla karıştırılan kavramlardır.
                                Tükenmişlik, Dünya Sağlık Örgütü tarafından &ldquo;iş yerinde kronik
                                stresin yeterince yönetilememesi sonucu ortaya çıkan bir sendrom&rdquo;
                                olarak tanımlanmaktadır. Her iki durum bazı ortak belirtiler paylaşabilir:
                            </p>
                            <ul>
                                <li>Kronik yorgunluk ve enerji kaybı</li>
                                <li>İş yerinde motivasyon düşüklüğü</li>
                                <li>Sinizm ve mesleğe karşı mesafe</li>
                                <li>Konsantrasyon güçlüğü</li>
                            </ul>
                            <p>
                                Ancak önemli bir fark vardır: Tükenmişlik ağırlıklı olarak
                                iş ile ilişkili iken, depresyon yaşamın tüm alanlarını kapsar. Tükenmişlik
                                yaşayan bir birey iş dışında hâlâ keyif alabilirken, depresyonda bu keyif
                                neredeyse tüm alanlarda kaybolabilir. Bu ayrım, profesyonel bir
                                değerlendirme ile netleştirilebilir.{' '}
                                <Link href="/hizmetler/yetiskin-psikiyatrisi">Yetişkin psikiyatrisi</Link>{' '}
                                değerlendirmesi kapsamında bu ayrım ele alınmaktadır.
                            </p>

                            <h2>İş Yaşamında İşlevselliği Korumak İçin Ne Yapılabilir?</h2>
                            <p>
                                İş hayatında depresyon belirtileriyle mücadele ederken bazı adımlar
                                işlevselliğin korunmasına katkı sağlayabilir:
                            </p>
                            <ul>
                                <li><strong>Belirtileri erken tanıyın:</strong> Belirtileri normalleştirmek yerine, değişimleri fark edin ve ciddiye alın.</li>
                                <li><strong>Profesyonel değerlendirme alın:</strong> Erken dönemde alınan uzman desteği, işlevselliğin korunmasına önemli katkı sağlayabilir.</li>
                                <li><strong>İş-yaşam dengesine dikkat edin:</strong> Düzenli mola vermek, uyku hijyenine özen göstermek ve fiziksel aktiviteye yer vermek destekleyici olabilir.</li>
                                <li><strong>Sosyal desteği sürdürün:</strong> İş arkadaşları ve yakın çevre ile iletişimi koparmamaya özen gösterin.</li>
                                <li><strong>Gerçekçi beklentiler belirleyin:</strong> Kendinizden mükemmeliyetçi beklentiler yerine, gerçekçi hedefler koyun.</li>
                            </ul>

                            <h2>Eryaman&apos;da İş Stresi ve Depresyon Değerlendirmesi</h2>
                            <p>
                                Uzm. Dr. Abdullah Maraş, Ankara Eryaman&apos;da iş stresi kaynaklı belirtiler
                                ve depresyonun bireysel değerlendirmesini bilimsel çerçevede gerçekleştirmektedir.
                                Altay Mahallesi çevresinde yer alan kliniğe Etimesgut ve Batıkent bölgelerinden
                                kolay ulaşım sağlanabilmektedir. Klinikte, her bireye yeterli süre ayrılarak
                                kapsamlı bir klinik görüşme gerçekleştirilmektedir.
                            </p>
                            <p>
                                İş yaşamınızda depresyon belirtileri veya tükenmişlik hissi yaşıyorsanız,
                                profesyonel bir değerlendirme almayı düşünebilirsiniz.{' '}
                                <Link href="/randevu">Randevu almak için tıklayınız.</Link>
                            </p>

                            <div className="info-banner">
                                <strong>📌 Önemli Bilgilendirme</strong>
                                Bu yazıdaki içerikler genel bilgilendirme amaçlıdır ve tıbbi tanı ya da tedavi
                                önerisi niteliği taşımamaktadır. Depresyon belirtileri yaşıyorsanız, bireysel
                                değerlendirme için bir psikiyatri uzmanına başvurunuz.
                            </div>

                            <div className={styles.faqSection}>
                                <h2>İş Yaşamı ve Depresyon Hakkında Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.relatedBox}>
                                <h3>İlgili Sayfalar</h3>
                                <ul>
                                    <li><Link href="/hizmetler/depresyon">Depresyon Değerlendirmesi →</Link></li>
                                    <li><Link href="/blog/depresyon-belirtileri">Depresyon Belirtileri Nelerdir? →</Link></li>
                                    <li><Link href="/blog/depresyonda-profesyonel-destek">Profesyonel Destek Süreci →</Link></li>
                                    <li><Link href="/hizmetler/yetiskin-psikiyatrisi">Yetişkin Psikiyatrisi →</Link></li>
                                </ul>
                            </div>

                            <div className={styles.articleCta}>
                                <h3>Profesyonel Değerlendirme İçin</h3>
                                <p>Ankara Eryaman&apos;da bilimsel çerçevede psikiyatrik değerlendirme için randevu alabilirsiniz.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Randevu Al →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Değerlendirme İçin</h3>
                                <p>İş stresi ve depresyon değerlendirmesi</p>
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
                                    <li><Link href="/blog/mevsimsel-depresyon">Mevsimsel Depresyon</Link></li>
                                    <li><Link href="/blog/depresyon-mu-uzuntu-mu">Depresyon mu Üzüntü mü?</Link></li>
                                    <li><Link href="/blog/depresyonda-profesyonel-destek">Profesyonel Destek Süreci</Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "İş Yaşamı ve Depresyon: Profesyonel Hayatta İşlevselliği Korumak", datePublished: "2026-05-04T09:00:00+03:00", author: { "@id": "https://drabdullahmaras.com/#physician" }, publisher: { "@id": "https://drabdullahmaras.com/#organization" }, mainEntityOfPage: "https://drabdullahmaras.com/blog/is-yasami-ve-depresyon" }) }} />
        </>
    );
}
