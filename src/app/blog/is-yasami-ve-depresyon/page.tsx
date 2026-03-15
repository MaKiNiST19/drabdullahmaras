import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Ýþ Yaþamý ve Depresyon: Ýþlevselliði Korumak | Uzm. Dr. Abdullah Maraþ',
    description:
        'Depresyonun iþ yaþamý üzerindeki etkileri nelerdir? Performans düþüklüðü, devamsýzlýk ve tükenmiþlik ile depresyon iliþkisi. Ankara Eryaman psikiyatri uzmaný.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/is-yasami-ve-depresyon' },
    openGraph: {
        title: 'Ýþ Yaþamý ve Depresyon: Ýþlevselliði Korumak',
        type: 'article', locale: 'tr_TR',
        publishedTime: '2026-05-04T09:00:00+03:00',
        authors: ['Uzm. Dr. Abdullah Maraþ'],
    },
};

const faqItems = [
    { question: 'Depresyon iþ performansýný etkiler mi?', answer: 'Evet. Depresyon konsantrasyon güçlüðü, motivasyon düþüklüðü, karar verme zorluðu ve enerji kaybýna yol açarak iþ performansýný olumsuz etkileyebilir. Bu durum "presenteeism" olarak da adlandýrýlmaktadýr.' },
    { question: 'Tükenmiþlik sendromu depresyon mudur?', answer: 'Tükenmiþlik ve depresyon farklý kavramlar olmakla birlikte örtüþen belirtileri olabilir. Tükenmiþlik aðýrlýklý olarak iþle iliþkili iken, depresyon yaþamýn tüm alanlarýný etkileyebilir. Profesyonel deðerlendirme ile ayrým yapýlabilir.' },
    { question: 'Ýþ stresi depresyon nedeni olabilir mi?', answer: 'Kronik iþ stresi, depresyon geliþimi için risk faktörlerinden biri olabilir. Ancak depresyon genellikle birden fazla etkenin bir araya gelmesiyle oluþur. Stresle baþa çýkma becerilerinin güçlendirilmesi profesyonel bir destek sürecinin parçasý olabilir.' },
    { question: 'Ýþ yerinde depresyon belirtileri nasýl fark edilir?', answer: 'Ýþ yerinde sürekli konsantrasyon güçlüðü, hatalarýn artmasý, görevleri tamamlayamama, devamsýzlýk, meslektaþlardan uzaklaþma ve motivasyon kaybý depresyon belirtileri olabilir.' },
    { question: 'Eryaman\'da iþ stresine baðlý depresyon deðerlendirmesi yapýlýr mý?', answer: 'Evet. Ankara Eryaman\'da Uzm. Dr. Abdullah Maraþ kliniðinde, iþ stresi kaynaklý belirtiler dahil olmak üzere kapsamlý depresyon deðerlendirmesi yapýlmaktadýr.' },
];

export default function IsYasamiVeDepresyonBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <span>Ýþ Yaþamý ve Depresyon</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Depresyon</span>
                        <time dateTime="2026-05-04">4 Mayýs 2026</time>
                        <span>•</span><span>9 dk okuma</span>
                    </div>
                    <h1>Ýþ Yaþamý ve Depresyon: Profesyonel Hayatta Ýþlevselliði Korumak</h1>
                    <p className={styles.heroDesc}>
                        Depresyon, iþ yaþamýný nasýl etkiler? Performans düþüklüðü, tükenmiþlik ve
                        iþlevsellik kaybý — iþ hayatýnda depresyonun yansýmalarýný ve
                        profesyonel desteðin önemini ele alýyoruz.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraþ</strong><span>Ruh Saðlýðý ve Hastalýklarý Uzmaný</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            <p className={styles.lead}>
                                Ýþ hayatý, yetiþkin yaþamýnýn merkezi unsurlarýndan biridir. Ancak depresyon,
                                bireyin profesyonel yaþamýný derinden etkileyebilecek bir ruh saðlýðý durumudur.
                                Dünya Saðlýk Örgütü&apos;ne göre depresyon, iþ gücü kaybýnýn önde gelen
                                nedenlerinden biridir ve küresel ölçekte milyarlarca dolarlýk üretkenlik kaybýna
                                yol açmaktadýr.
                            </p>
                            <p>
                                Ankara Eryaman&apos;da Uzm. Dr. Abdullah Maraþ, iþ yaþamýndan kaynaklanan
                                veya iþ yaþamýný etkileyen depresyon belirtilerinin kapsamlý deðerlendirmesini
                                gerçekleþtirmektedir.{' '}
                                <Link href="/hizmetler/depresyon">Depresyon deðerlendirmesi</Link> hizmet
                                sayfamýzda detaylý bilgi bulabilirsiniz.
                            </p>

                            <h2>Depresyonun Ýþ Performansýna Etkileri</h2>
                            <p>
                                Depresyon, iþ performansýný görünür ve görünmeyen birçok þekilde
                                etkileyebilmektedir. Bu etkilerin iki temel boyutu bulunmaktadýr:
                            </p>
                            <h3>Devamsýzlýk (Absenteeism)</h3>
                            <p>
                                Depresyon yaþayan bireyler, iþe gidemeyecek kadar yoðun belirtiler
                                yaþayabilmektedir. Enerji kaybý, uyku düzensizlikleri ve motivasyon eksikliði,
                                iþ yerine düzenli devam etmeyi zorlaþtýrabilir. Araþtýrmalar, depresyonun
                                iþ yerinde devamsýzlýðýn en yaygýn nedenlerinden biri olduðunu göstermektedir.
                            </p>
                            <h3>Masada Devamsýzlýk (Presenteeism)</h3>
                            <p>
                                Presenteeism, bireyin fiziksel olarak iþ yerinde bulunmasýna raðmen
                                verimli çalýþamamasý durumudur. Depresyon, bu durumun en sýk karþýlaþýlan
                                nedenlerinden biridir. Konsantrasyon güçlüðü, karar verme zorluðu, yavaþlamýþ
                                düþünce süreçleri ve hata yapma eðiliminde artýþ, presenteeism&apos;in
                                tipik belirtileridir.
                            </p>

                            <h2>Ýþ Yerinde Depresyon Belirtileri</h2>
                            <p>
                                Depresyon belirtileri iþ ortamýnda kendine özgü biçimlerde ortaya çýkabilir.
                                Aþaðýdaki belirtiler hem bireyin kendisi hem de yöneticiler ve iþ arkadaþlarý
                                tarafýndan fark edilebilir:
                            </p>
                            <ul>
                                <li>Sürekli konsantrasyon güçlüðü ve dikkat daðýnýklýðý</li>
                                <li>Daha önce kolayca yapýlan görevlerin aðýr gelmesi</li>
                                <li>Termin tarihlerini kaçýrma ve iþleri tamamlayamama</li>
                                <li>Hatalarýn artmasý</li>
                                <li>Meslektaþlardan uzaklaþma ve ekip çalýþmasýndan kaçýnma</li>
                                <li>Ýþ yerinde irritabilite ve sabýrsýzlýk</li>
                                <li>Toplantýlara katýlmakta isteksizlik</li>
                                <li>Sýk hastalýk izni alma eðilimi</li>
                            </ul>
                            <p>
                                Bu belirtiler genellikle kademeli olarak geliþir ve birey tarafýndan
                                &ldquo;stres&rdquo; veya &ldquo;yorgunluk&rdquo; olarak yorumlanabilir.{' '}
                                <Link href="/blog/depresyon-belirtileri">Depresyon belirtileri</Link>{' '}
                                hakkýnda kapsamlý yazýmýzý da inceleyebilirsiniz.
                            </p>

                            <h2>Ýþ Stresi ve Depresyon Ýliþkisi</h2>
                            <p>
                                Kronik iþ stresi, depresyon geliþimi için önemli bir risk faktörüdür.
                                Ancak iþ stresi ile depresyon arasýnda doðrusal bir neden-sonuç iliþkisi
                                kurmak doðru deðildir; depresyon çok faktörlü bir durumdur. Bununla
                                birlikte, aþaðýdaki iþ ortamý faktörleri depresyon riskini artýrabilir:
                            </p>
                            <ul>
                                <li>Aþýrý iþ yükü ve uzun çalýþma saatleri</li>
                                <li>Ýþ-yaþam dengesinin bozulmasý</li>
                                <li>Ýþ güvencesizliði ve ekonomik kaygýlar</li>
                                <li>Ýþ yerinde mobbing (psikolojik baský)</li>
                                <li>Yönetim tarzý ve iþ ortamý sorunlarý</li>
                                <li>Yeterli ödüllendirme ve takdir eksikliði</li>
                                <li>Monoton ve anlamsýz hissedilen iþ görevleri</li>
                            </ul>

                            <h2>Tükenmiþlik ile Depresyon: Fark ve Benzerlikler</h2>
                            <p>
                                Tükenmiþlik sendromu ve depresyon sýklýkla karýþtýrýlan kavramlardýr.
                                Tükenmiþlik, Dünya Saðlýk Örgütü tarafýndan &ldquo;iþ yerinde kronik
                                stresin yeterince yönetilememesi sonucu ortaya çýkan bir sendrom&rdquo;
                                olarak tanýmlanmaktadýr. Her iki durum bazý ortak belirtiler paylaþabilir:
                            </p>
                            <ul>
                                <li>Kronik yorgunluk ve enerji kaybý</li>
                                <li>Ýþ yerinde motivasyon düþüklüðü</li>
                                <li>Sinizm ve mesleðe karþý mesafe</li>
                                <li>Konsantrasyon güçlüðü</li>
                            </ul>
                            <p>
                                Ancak önemli bir fark vardýr: Tükenmiþlik aðýrlýklý olarak
                                iþ ile iliþkili iken, depresyon yaþamýn tüm alanlarýný kapsar. Tükenmiþlik
                                yaþayan bir birey iþ dýþýnda hâlâ keyif alabilirken, depresyonda bu keyif
                                neredeyse tüm alanlarda kaybolabilir. Bu ayrým, profesyonel bir
                                deðerlendirme ile netleþtirilebilir.{' '}
                                <Link href="/hizmetler/yetiskin-psikiyatrisi">Yetiþkin psikiyatrisi</Link>{' '}
                                deðerlendirmesi kapsamýnda bu ayrým ele alýnmaktadýr.
                            </p>

                            <h2>Ýþ Yaþamýnda Ýþlevselliði Korumak Ýçin Ne Yapýlabilir?</h2>
                            <p>
                                Ýþ hayatýnda depresyon belirtileriyle mücadele ederken bazý adýmlar
                                iþlevselliðin korunmasýna katký saðlayabilir:
                            </p>
                            <ul>
                                <li><strong>Belirtileri erken tanýyýn:</strong> Belirtileri normalleþtirmek yerine, deðiþimleri fark edin ve ciddiye alýn.</li>
                                <li><strong>Profesyonel deðerlendirme alýn:</strong> Erken dönemde alýnan uzman desteði, iþlevselliðin korunmasýna önemli katký saðlayabilir.</li>
                                <li><strong>Ýþ-yaþam dengesine dikkat edin:</strong> Düzenli mola vermek, uyku hijyenine özen göstermek ve fiziksel aktiviteye yer vermek destekleyici olabilir.</li>
                                <li><strong>Sosyal desteði sürdürün:</strong> Ýþ arkadaþlarý ve yakýn çevre ile iletiþimi koparmamaya özen gösterin.</li>
                                <li><strong>Gerçekçi beklentiler belirleyin:</strong> Kendinizden mükemmeliyetçi beklentiler yerine, gerçekçi hedefler koyun.</li>
                            </ul>

                            <h2>Eryaman&apos;da Ýþ Stresi ve Depresyon Deðerlendirmesi</h2>
                            <p>
                                Uzm. Dr. Abdullah Maraþ, Ankara Eryaman&apos;da iþ stresi kaynaklý belirtiler
                                ve depresyonun bireysel deðerlendirmesini bilimsel çerçevede gerçekleþtirmektedir.
                                Altay Mahallesi çevresinde yer alan kliniðe Etimesgut ve Batýkent bölgelerinden
                                kolay ulaþým saðlanabilmektedir. Klinikte, her bireye yeterli süre ayrýlarak
                                kapsamlý bir klinik görüþme gerçekleþtirilmektedir.
                            </p>
                            <p>
                                Ýþ yaþamýnýzda depresyon belirtileri veya tükenmiþlik hissi yaþýyorsanýz,
                                profesyonel bir deðerlendirme almayý düþünebilirsiniz.{' '}
                                <Link href="/randevu">Randevu almak için týklayýnýz.</Link>
                            </p>

                            <div className="info-banner">
                                <strong>?? Önemli Bilgilendirme</strong>
                                Bu yazýdaki içerikler genel bilgilendirme amaçlýdýr ve týbbi taný ya da tedavi
                                önerisi niteliði taþýmamaktadýr. Depresyon belirtileri yaþýyorsanýz, bireysel
                                deðerlendirme için bir psikiyatri uzmanýna baþvurunuz.
                            </div>

                            <div className={styles.faqSection}>
                                <h2>Ýþ Yaþamý ve Depresyon Hakkýnda Sýk Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.relatedBox}>
                                <h3>Ýlgili Sayfalar</h3>
                                <ul>
                                    <li><Link href="/hizmetler/depresyon">Depresyon Deðerlendirmesi ›</Link></li>
                                    <li><Link href="/blog/depresyon-belirtileri">Depresyon Belirtileri Nelerdir? ›</Link></li>
                                    <li><Link href="/blog/depresyonda-profesyonel-destek">Profesyonel Destek Süreci ›</Link></li>
                                    <li><Link href="/hizmetler/yetiskin-psikiyatrisi">Yetiþkin Psikiyatrisi ›</Link></li>
                                </ul>
                            </div>

                            <div className={styles.articleCta}>
                                <h3>Profesyonel Deðerlendirme Ýçin</h3>
                                <p>Ankara Eryaman&apos;da bilimsel çerçevede psikiyatrik deðerlendirme için randevu alabilirsiniz.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Randevu Al ›</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Deðerlendirme Ýçin</h3>
                                <p>Ýþ stresi ve depresyon deðerlendirmesi</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Randevu Al</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>Uzman Hekim</h4>
                                <div className={styles.doctorInfo}><strong>Uzm. Dr. Abdullah Maraþ</strong><span>Psikiyatri Uzmaný</span><span>Eryaman, Ankara</span></div>
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
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Ýþ Yaþamý ve Depresyon: Profesyonel Hayatta Ýþlevselliði Korumak", datePublished: "2026-05-04T09:00:00+03:00", author: { "@id": "https://www.drabdullahmaras.com.tr/#physician" }, publisher: { "@id": "https://www.drabdullahmaras.com.tr/#organization" }, mainEntityOfPage: "https://www.drabdullahmaras.com.tr/blog/is-yasami-ve-depresyon" }) }} />
        </>
    );
}
