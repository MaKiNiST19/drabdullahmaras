import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Depresyon Kaç Günde Geçer? Süre Hakkýnda Bilinmesi Gerekenler | Uzm. Dr. Abdullah Maraþ',
    description:
        'Depresyon kaç günde geçer? Depresyonun süresi kiþiden kiþiye deðiþir. Belirtilerin süresi, etkileyen faktörler ve profesyonel deðerlendirmenin önemi. Ankara Eryaman.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/depresyon-kac-gunde-gecer' },
    openGraph: {
        title: 'Depresyon Kaç Günde Geçer? Süre Hakkýnda Bilinmesi Gerekenler',
        type: 'article', locale: 'tr_TR',
        publishedTime: '2026-03-18T09:00:00+03:00',
        authors: ['Uzm. Dr. Abdullah Maraþ'],
    },
};

const faqItems = [
    {
        question: 'Depresyon kaç günde geçer?',
        answer: 'Depresyonun süresi kiþiden kiþiye önemli ölçüde farklýlýk gösterir. Depresif bir dönem, profesyonel destek olmaksýzýn ortalama 6-13 ay sürebilmektedir. Ancak erken dönemde alýnan profesyonel deðerlendirme ve destek, sürecin daha saðlýklý yönetilmesine katký saðlayabilir.',
    },
    {
        question: 'Depresyon kendiliðinden geçer mi?',
        answer: 'Bazý hafif depresif dönemler zamanla kendiliðinden hafifleme eðilimi gösterebilir. Ancak orta ve aðýr düzeydeki depresyonlarda profesyonel deðerlendirme ve destek önerilmektedir. Belirtilerin ihmal edilmesi, durumun kronikleþme riskini artýrabilir.',
    },
    {
        question: 'Depresyon belirtileri ne kadar süre devam ederse ciddiye alýnmalýdýr?',
        answer: 'Depresif belirtiler en az iki hafta boyunca çoðu gün devam ediyorsa ve günlük iþlevselliði olumsuz etkiliyorsa, profesyonel psikiyatrik deðerlendirme almanýz önerilmektedir.',
    },
    {
        question: 'Depresyon tekrarlar mý?',
        answer: 'Evet, depresyon tekrarlama özelliði taþýyabilir. Ýlk depresif dönemi yaþayan bireylerin önemli bir kýsmý ilerleyen dönemlerde yeni epizodlar yaþayabilmektedir. Düzenli izlem ve bireysel planlama, tekrar riskinin yönetilmesine katký saðlayabilir.',
    },
    {
        question: 'Eryaman\'da depresyon süreci deðerlendirmesi yapýlýr mý?',
        answer: 'Evet. Ankara Eryaman, Altay Mahallesi çevresinde Uzm. Dr. Abdullah Maraþ\'ýn kliniðinde depresyon deðerlendirmesi ve bireysel izlem süreçleri yürütülmektedir.',
    },
];

export default function DepresyonKacGundeGecerBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/depresyon">Depresyon</Link><span>/</span>
                        <span>Depresyon Kaç Günde Geçer?</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Depresyon</span>
                        <time dateTime="2026-03-18">18 Mart 2026</time>
                        <span>•</span><span>8 dk okuma</span>
                    </div>
                    <h1>Depresyon Kaç Günde Geçer? Süre Hakkýnda Bilinmesi Gerekenler</h1>
                    <p className={styles.heroDesc}>
                        &ldquo;Bu durum ne kadar sürecek?&rdquo; sorusu, depresyon yaþayan bireylerin
                        en sýk sorduðu sorulardan biridir. Depresyonun süresi, birçok faktöre baðlý
                        olarak kiþiden kiþiye deðiþir.
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
                                &ldquo;Depresyon kaç günde geçer?&rdquo; — Bu soru, hem depresyon belirtileri
                                yaþayan bireyler hem de yakýnlarý tarafýndan sýklýkla sorulmaktadýr. Sorunun
                                ardýnda doðal bir umut ve belirsizlik kaygýsý yatmaktadýr. Net bir rakam vermek
                                ne yazýk ki mümkün deðildir; çünkü depresyonun süresi birçok bireysel faktöre
                                baðlý olarak büyük farklýlýklar göstermektedir.
                            </p>
                            <p>
                                Bu yazýda depresyonun süresi hakkýnda bilimsel çerçevede bilgilendirme
                                sunmaktayýz.{' '}
                                <Link href="/hizmetler/depresyon">Depresyon deðerlendirmesi</Link> hakkýnda
                                detaylý bilgi için hizmet sayfamýzý inceleyebilirsiniz.
                            </p>

                            <h2>Depresyonun Süresi: Net Bir Rakam Var mý?</h2>
                            <p>
                                Depresyonun süresi hakkýnda kesin bir &ldquo;gün sayýsý&rdquo; vermek bilimsel
                                olarak doðru deðildir. Her birey benzersizdir ve depresif süreç, kiþinin
                                biyolojik yapýsýna, yaþam koþullarýna ve aldýðý desteðe göre farklý
                                þekillenmektedir.
                            </p>
                            <p>
                                Bununla birlikte, klinik literatürde bazý genel çerçeveler mevcuttur:
                            </p>
                            <ul>
                                <li>Profesyonel destek almayan bir depresif dönem, ortalama <strong>6-13 ay</strong> sürebilmektedir.</li>
                                <li>Hafif düzeydeki depresif belirtiler daha kýsa sürede hafifleme eðilimi gösterebilir.</li>
                                <li>Orta ve aðýr düzey depresyonda süre daha uzun olabilir ve profesyonel destek sürecin yönetiminde kritik önem taþýr.</li>
                                <li>Erken dönemde alýnan profesyonel deðerlendirme ve destek, sürecin daha saðlýklý seyretmesine katký saðlayabilir.</li>
                            </ul>
                            <p>
                                Bu rakamlar genel yönelimlerdir; bireysel süreçler bunlardan farklýlýk
                                gösterebilir. Kesin deðerlendirme, uzman bir psikiyatrist tarafýndan yapýlmalýdýr.
                            </p>

                            <h2>Süreyi Etkileyen Faktörler</h2>
                            <p>
                                Depresyonun ne kadar süreceði, birbirleriyle etkileþen birçok faktöre baðlýdýr:
                            </p>
                            <h3>Belirtilerin Þiddeti</h3>
                            <p>
                                Depresyonun þiddeti, süresini etkileyen en önemli faktörlerden biridir.
                                Hafif düzeydeki depresif belirtiler daha kýsa sürede hafifleme eðilimi
                                gösterirken, aðýr depresyonda süreç daha uzun ve karmaþýk olabilmektedir.
                            </p>
                            <h3>Profesyonel Destek Zamanlamasý</h3>
                            <p>
                                Araþtýrmalar, erken dönemde profesyonel deðerlendirme alan bireylerde sürecin
                                daha olumlu seyrettiðini göstermektedir. Belirtilerin uzun süre ihmal edilmesi,
                                durumun kronikleþme riskini artýrabilir.
                            </p>
                            <h3>Psikososyal Faktörler</h3>
                            <p>
                                Sosyal destek aðý, yaþam koþullarý, devam eden stresörler ve baþa çýkma
                                kaynaklarý süreyi etkileyebilir. Güçlü bir sosyal destek aðýna sahip
                                bireylerde süreç daha yapýcý ilerleyebilmektedir.
                            </p>
                            <h3>Eþlik Eden Durumlar</h3>
                            <p>
                                Depresyona{' '}
                                <Link href="/hizmetler/anksiyete">anksiyete bozukluklarý</Link>,{' '}
                                <Link href="/hizmetler/uyku-bozukluklari">uyku bozukluklarý</Link> veya
                                kronik fiziksel hastalýklar eþlik ettiðinde, süreç daha karmaþýk hale
                                gelebilir ve kapsamlý bir deðerlendirme gerektirmektedir.
                            </p>

                            <h2>Belirtilerin Süresi Neden Önemlidir?</h2>
                            <p>
                                Depresif belirtilerin süresi, deðerlendirme açýsýndan kritik bir veridir.{' '}
                                <Link href="/blog/depresyon-belirtileri">Depresyon belirtileri</Link>{' '}
                                hakkýnda kapsamlý yazýmýzda belirtilerin detaylarýný inceleyebilirsiniz.
                            </p>
                            <ul>
                                <li>Belirtiler <strong>iki hafta veya daha uzun</strong> süre çoðu gün devam ediyorsa, klinik bir deðerlendirme önem kazanýr.</li>
                                <li>Belirtilerin <strong>þiddeti artýyorsa</strong> veya <strong>yeni belirtiler ekleniyorsa</strong>, profesyonel deðerlendirme aciliyet kazanýr.</li>
                                <li>Belirtiler <strong>günlük iþlevselliði</strong> (iþ, ev, sosyal yaþam) olumsuz etkiliyorsa, destek ertelenmemelidir.</li>
                            </ul>
                            <p>
                                Önemle belirtmek gerekir ki, belirtilerin kýsa sürmesi her zaman
                                &ldquo;sorun yok&rdquo; anlamýna gelmez. Hafif seyreden ancak tekrarlayan
                                depresif dönemler de deðerlendirme gerektirebilir.
                            </p>

                            <h2>&ldquo;Kendiliðinden Geçer mi?&rdquo; Sorusu</h2>
                            <p>
                                Bazý hafif depresif dönemler, özellikle belirli bir tetikleyiciyle iliþkiliyse,
                                zamanla kendiliðinden hafifleme eðilimi gösterebilir. Ancak bu durum,
                                &ldquo;depresyon beklemeyle geçer&rdquo; þeklinde genelleþtirilemez.
                            </p>
                            <p>
                                Profesyonel deðerlendirme almak yerine beklemeyi tercih etmenin riskleri
                                bulunmaktadýr:
                            </p>
                            <ul>
                                <li>Belirtiler <strong>kronikleþebilir</strong> ve daha dirençli bir hale gelebilir</li>
                                <li>Günlük iþlevsellik kaybý <strong>birikebilir</strong> (iþ kaybý, iliþki sorunlarý)</li>
                                <li><strong>Eþlik eden durumlar</strong> geliþebilir (anksiyete, uyku bozukluklarý)</li>
                                <li>Tekrar riski <strong>artabilir</strong></li>
                            </ul>
                            <p>
                                Bu nedenle, belirtiler yaþam kalitenizi etkiliyorsa, &ldquo;kendiliðinden
                                geçmesini beklemek&rdquo; yerine profesyonel bir deðerlendirme almanýz
                                önerilmektedir.
                            </p>

                            <h2>Depresyonun Tekrarlama Özelliði</h2>
                            <p>
                                Depresyon, tekrarlama özelliði taþýyabilen bir durumdur. Ýlk depresif dönemi
                                yaþayan bireylerin yarýdan fazlasýnda ilerleyen yýllarda yeni depresif dönemler
                                görülebilmektedir. Bu nedenle:
                            </p>
                            <ul>
                                <li>Ýlk depresif dönemin uygun þekilde deðerlendirilmesi ve yönetilmesi önemlidir</li>
                                <li>Düzenli izlem, tekrar riskinin erken fark edilmesine katký saðlar</li>
                                <li>Bireyin uyarýcý belirtilerini tanýmasý, koruyucu bir yaklaþým geliþtirmesine yardýmcý olabilir</li>
                                <li>Yaþam tarzý düzenlemeleri ve baþa çýkma stratejileri destekleyici rol üstlenebilir</li>
                            </ul>

                            <h2>Ankara Eryaman&apos;da Deðerlendirme</h2>
                            <p>
                                Uzm. Dr. Abdullah Maraþ, Ankara Eryaman&apos;da Altay Mahallesi çevresinde
                                bilimsel çerçevede depresyon deðerlendirmesi ve bireysel izlem süreçleri
                                sunmaktadýr. Klinikte her bireye yeterli süre ayrýlarak kapsamlý bir
                                klinik görüþme gerçekleþtirilmektedir. Etimesgut ve Batýkent bölgelerinden
                                kolay ulaþým saðlanabilir.
                            </p>
                            <p>
                                Depresyon belirtileri yaþýyorsanýz ve sürenin belirsizliði sizi
                                kaygýlandýrýyorsa, profesyonel bir deðerlendirme bu kaygýyý azaltmanýn
                                ilk adýmý olabilir.{' '}
                                <Link href="/randevu">Randevu almak için týklayýnýz.</Link>
                            </p>

                            <div className="info-banner">
                                <strong>?? Önemli Bilgilendirme</strong>
                                Bu yazýdaki içerikler genel bilgilendirme amaçlýdýr ve týbbi taný ya da tedavi
                                önerisi niteliði taþýmamaktadýr. Depresyonun süresi bireysel faktörlere baðlýdýr;
                                kesin deðerlendirme için bir psikiyatri uzmanýna baþvurunuz.
                            </div>

                            <div className={styles.faqSection}>
                                <h2>Depresyonun Süresi Hakkýnda Sýk Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.relatedBox}>
                                <h3>Ýlgili Sayfalar</h3>
                                <ul>
                                    <li><Link href="/hizmetler/depresyon">Depresyon Deðerlendirmesi ›</Link></li>
                                    <li><Link href="/blog/depresyon-belirtileri">Depresyon Belirtileri Nelerdir? ›</Link></li>
                                    <li><Link href="/blog/depresyonda-profesyonel-destek">Profesyonel Destek Süreci ›</Link></li>
                                    <li><Link href="/hizmetler/anksiyete">Anksiyete Bozukluklarý ›</Link></li>
                                </ul>
                            </div>

                            <div className={styles.articleCta}>
                                <h3>Profesyonel Deðerlendirme Ýçin</h3>
                                <p>Ankara Eryaman&apos;da bilimsel çerçevede depresyon deðerlendirmesi ve bireysel izlem için randevu alabilirsiniz.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Randevu Al ›</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Deðerlendirme Ýçin</h3>
                                <p>Depresyon süreci deðerlendirmesi</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Randevu Al</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>Uzman Hekim</h4>
                                <div className={styles.doctorInfo}><strong>Uzm. Dr. Abdullah Maraþ</strong><span>Psikiyatri Uzmaný</span><span>Eryaman, Ankara</span></div>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>Depresyon Yazýlarý</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/blog/depresyon-belirtileri">Depresyon Belirtileri</Link></li>
                                    <li><Link href="/blog/mevsimsel-depresyon">Mevsimsel Depresyon</Link></li>
                                    <li><Link href="/blog/depresyon-mu-uzuntu-mu">Depresyon mu Üzüntü mü?</Link></li>
                                    <li><Link href="/blog/depresyonda-profesyonel-destek">Profesyonel Destek Süreci</Link></li>
                                    <li><Link href="/blog/is-yasami-ve-depresyon">Ýþ Yaþamý ve Depresyon</Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "FAQPage",
                    mainEntity: faqItems.map(f => ({
                        "@type": "Question", name: f.question,
                        acceptedAnswer: { "@type": "Answer", text: f.answer },
                    })),
                })
            }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "Article",
                    headline: "Depresyon Kaç Günde Geçer? Süre Hakkýnda Bilinmesi Gerekenler",
                    datePublished: "2026-03-18T09:00:00+03:00",
                    author: { "@id": "https://www.drabdullahmaras.com.tr/#physician" },
                    publisher: { "@id": "https://www.drabdullahmaras.com.tr/#organization" },
                    mainEntityOfPage: "https://www.drabdullahmaras.com.tr/blog/depresyon-kac-gunde-gecer",
                })
            }} />
        </>
    );
}
