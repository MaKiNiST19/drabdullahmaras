import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Depresyon mu Üzüntü mü? Farkı Nasıl Anlarsınız? | Uzm. Dr. Abdullah Maraş',
    description:
        'Depresyon ile normal üzüntü arasındaki fark nedir? Geçici üzüntü ve klinik depresyonun ayrımını öğrenin. Ankara Eryaman psikiyatri uzmanı bilgilendirmesi.',
    alternates: { canonical: 'https://drabdullahmaras.com/blog/depresyon-mu-uzuntu-mu' },
    openGraph: {
        title: 'Depresyon mu Üzüntü mü? Farkı Nasıl Anlarsınız?',
        type: 'article', locale: 'tr_TR',
        publishedTime: '2026-03-09T09:00:00+03:00',
        authors: ['Uzm. Dr. Abdullah Maraş'],
    },
};

const faqItems = [
    { question: 'Üzüntü ne zaman depresyona dönüşür?', answer: 'Üzüntü en az iki hafta boyunca çoğu gün devam ediyorsa, yoğunluğu artıyorsa ve günlük işlevselliği olumsuz etkiliyorsa, klinik depresyondan söz edilebilir. Ancak kesin değerlendirme bir psikiyatri uzmanı tarafından yapılmalıdır.' },
    { question: 'Normal üzüntü ile depresyonun temel farkı nedir?', answer: 'Normal üzüntü genellikle belirli bir olay kaynaklıdır ve zamanla azalır. Depresyonda ise belirtiler orantısız şekilde yoğun, uzun süreli ve günlük yaşamı belirgin biçimde etkileyen düzeydedir.' },
    { question: 'Depresyon tanısı nasıl konulur?', answer: 'Depresyon tanısı, psikiyatri uzmanı tarafından yapılan kapsamlı bir klinik görüşmeye dayanır. Belirtilerin süresi, şiddeti, çeşitliliği ve günlük yaşama etkisi değerlendirilerek bireysel bir planlama yapılır.' },
    { question: 'Eryaman\'da depresyon değerlendirmesi nerede yapılır?', answer: 'Ankara Eryaman, Altay Mahallesi çevresinde Uzm. Dr. Abdullah Maraş\'ın kliniğinde depresyon değerlendirmesi yapılmaktadır. Randevu sistemiyle çalışılmaktadır.' },
    { question: 'Üzüntümü hafife almamalı mıyım?', answer: 'Geçici üzüntü doğal bir duygudur, ancak süreğen üzüntü ciddiye alınmalıdır. Belirtiler iki haftadan uzun sürüyorsa ve yaşam kalitenizi etkiliyorsa, profesyonel bir değerlendirme almanız önerilmektedir.' },
];

export default function DepresyonMuUzuntuMuBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <span>Depresyon mu Üzüntü mü?</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Depresyon</span>
                        <time dateTime="2026-03-09">9 Mart 2026</time>
                        <span>•</span><span>8 dk okuma</span>
                    </div>
                    <h1>Depresyon mu Üzüntü mü? Farkı Nasıl Anlarsınız?</h1>
                    <p className={styles.heroDesc}>
                        &ldquo;Normal bir üzüntü mü yaşıyorum, yoksa depresyon mu?&rdquo; bu soruyu
                        kendi kendinize sorduysanız, bu yazı sizi bilgilendirmek için hazırlandı.
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
                                Üzüntü, insan deneyiminin doğal ve kaçınılmaz bir parçasıdır. Bir kayıp, bir
                                hayal kırıklığı veya zorlu bir yaşam olayı karşısında üzüntü hissetmek tamamen
                                normaldir. Ancak bu üzüntü ne zaman &ldquo;normal&rdquo; sınırları aşar ve
                                klinik bir depresyona dönüşür? Bu ayrımı yapmak, doğru adımları atabilmek
                                açısından büyük önem taşımaktadır.
                            </p>
                            <p>
                                Ankara Eryaman&apos;da Uzm. Dr. Abdullah Maraş, depresyon ile normal yaşam
                                üzüntüsü arasındaki ayrımın profesyonel değerlendirmesini gerçekleştirmektedir.{' '}
                                <Link href="/hizmetler/depresyon">Depresyon değerlendirmesi</Link> hizmet
                                sayfamızda detaylı bilgi bulabilirsiniz.
                            </p>

                            <h2>Üzüntü: Doğal Bir Duygusal Tepki</h2>
                            <p>
                                Üzüntü, belirli bir olaya karşı verilen sağlıklı ve uyumsal bir duygusal
                                tepkidir. Bir yakınını kaybeden, bir ilişkisi sona eren veya iş hayatında
                                zorluklarla karşılaşan bir birey için üzüntü doğaldır. Normal üzüntünün
                                bazı temel özellikleri vardır:
                            </p>
                            <ul>
                                <li>Genellikle <strong>belirli bir olay</strong> veya durumla ilişkilidir</li>
                                <li><strong>Zamanla azalır</strong> ve birey normale dönebilir</li>
                                <li>Kişi hâlâ bazı şeylerden <strong>keyif alabilir</strong></li>
                                <li>Kendine olan <strong>değer algısı büyük ölçüde korunur</strong></li>
                                <li>Uyku ve iştahta <strong>kısa süreli</strong> değişiklikler olabilir</li>
                                <li>İşlevsellik <strong>geçici olarak</strong> etkilenebilir ancak tamamen bozulmaz</li>
                            </ul>

                            <h2>Depresyon: Klinik Bir Ruh Sağlığı Durumu</h2>
                            <p>
                                Depresyon ise üzüntüden farklı olarak tıbbi bir durumdur. Belirli bir tetikleyici
                                olmaksızın da ortaya çıkabilir, belirtiler haftalarca ve aylarca sürebilir ve
                                bireyin yaşam kalitesini ciddi biçimde etkileyebilir.{' '}
                                <Link href="/blog/depresyon-belirtileri">Depresyon belirtileri yazımızda</Link>{' '}
                                kapsamlı bir liste sunmaktayız. Depresyonun ayırt edici özellikleri:
                            </p>
                            <ul>
                                <li>Belirtiler <strong>en az iki hafta</strong> boyunca çoğu gün sürer</li>
                                <li>Belirli bir tetikleyici <strong>olmayabilir</strong></li>
                                <li>Hemen hemen <strong>hiçbir şeyden</strong> zevk alınamaz</li>
                                <li>Yoğun <strong>değersizlik ve suçluluk</strong> duyguları belirgindir</li>
                                <li>Uyku, iştah ve enerjide <strong>belirgin ve kalıcı</strong> değişiklikler vardır</li>
                                <li>Günlük işlevsellik <strong>önemli ölçüde bozulur</strong></li>
                                <li>Düşünce biçiminde <strong>olumsuz kalıplar</strong> baskın hale gelir</li>
                            </ul>

                            <h2>Ayrımı Yapmanın 5 Kritik Sorusu</h2>
                            <p>
                                Kendinize şu soruları sorarak, yaşadığınız durumun doğasını daha iyi
                                anlayabilirsiniz:
                            </p>
                            <ul>
                                <li><strong>Süre:</strong> Belirtilerim iki haftadan uzun süredir devam ediyor mu?</li>
                                <li><strong>Yoğunluk:</strong> Daha önce keyif aldığım hiçbir şeyden zevk alamıyor muyum?</li>
                                <li><strong>İşlevsellik:</strong> İş, ev veya sosyal hayatımı sürdürmekte zorlanıyor muyum?</li>
                                <li><strong>Bedensel etki:</strong> Uyku düzenim, iştahım veya enerjim belirgin biçimde değişti mi?</li>
                                <li><strong>Düşünce kalıpları:</strong> Kendimi sürekli değersiz veya umutsuz hissediyor muyum?</li>
                            </ul>
                            <p>
                                Bu sorulara &ldquo;evet&rdquo; yanıtları biriken bir birey için profesyonel
                                bir psikiyatrik değerlendirme önerilmektedir. Unutulmalıdır ki bu sorular
                                tanı amaçlı değildir; kesin değerlendirme uzman bir psikiyatrist tarafından
                                yapılmalıdır.
                            </p>

                            <h2>Yas Süreci ve Depresyon</h2>
                            <p>
                                Özellikle kayıp yaşayan bireylerde yas süreci ile depresyon karıştırılabilir.
                                Yas, sevilen birinin kaybına karşı doğal bir tepkidir ve zamanla şiddeti
                                azalır. Ancak bazı durumlarda yas süreci komplike hale gelebilir ve depresyona
                                dönüşebilir. Yas sürecinde uzun süreli ağır işlevsellik kaybı, yoğun
                                değersizlik duyguları ve sosyal izolasyon gözleniyorsa, profesyonel değerlendirme
                                düşünülmelidir.
                            </p>

                            <h2>Neden Profesyonel Değerlendirme Önemlidir?</h2>
                            <p>
                                Üzüntü ile depresyon arasındaki ayrım her zaman net değildir ve bireyin
                                kendi kendine değerlendirmesi yanıltıcı olabilir. Pek çok insan depresyon
                                belirtilerini &ldquo;geçici bir kötü dönem&rdquo; olarak
                                normalleştirebilmektedir. Bu nedenle profesyonel bir değerlendirme:
                            </p>
                            <ul>
                                <li>Belirtilerin doğasını ve şiddetini doğru biçimde anlamayı sağlar</li>
                                <li>Olası bedensel nedenlerin dışlanmasına katkı sunar</li>
                                <li>Bireysel ihtiyaçlara uygun bir yönlendirme planı oluşturulmasını mümkün kılar</li>
                                <li>Erken dönem desteği ile yaşam kalitesinin korunmasını destekler</li>
                            </ul>
                            <p>
                                Eryaman&apos;da psikiyatrist arayan kişiler, Altay Mahallesi çevresindeki
                                kliniğimize başvurabilirler. Etimesgut ve Batıkent bölgelerinden kolay
                                ulaşım sağlanabilir.{' '}
                                <Link href="/hizmetler/yetiskin-psikiyatrisi">Yetişkin psikiyatrisi</Link>{' '}
                                değerlendirmesi kapsamında kapsamlı bir görüşme gerçekleştirilmektedir.
                            </p>

                            <div className="info-banner">
                                <strong>📌 Önemli Bilgilendirme</strong>
                                Bu yazıdaki içerikler genel bilgilendirme amaçlıdır. Tanı ve tedavi süreçleri
                                için mutlaka bir psikiyatri uzmanına başvurunuz.
                            </div>

                            <div className={styles.faqSection}>
                                <h2>Depresyon ve Üzüntü Hakkında Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.relatedBox}>
                                <h3>İlgili Sayfalar</h3>
                                <ul>
                                    <li><Link href="/hizmetler/depresyon">Depresyon Değerlendirmesi →</Link></li>
                                    <li><Link href="/blog/depresyon-belirtileri">Depresyon Belirtileri Nelerdir? →</Link></li>
                                    <li><Link href="/blog/mevsimsel-depresyon">Mevsimsel Depresyon →</Link></li>
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
                                <p>Profesyonel psikiyatrik değerlendirme</p>
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
                                    <li><Link href="/blog/depresyonda-profesyonel-destek">Profesyonel Destek Süreci</Link></li>
                                    <li><Link href="/blog/is-yasami-ve-depresyon">İş Yaşamı ve Depresyon</Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Depresyon mu Üzüntü mü? Farkı Nasıl Anlarsınız?", datePublished: "2026-03-09T09:00:00+03:00", author: { "@id": "https://drabdullahmaras.com/#physician" }, publisher: { "@id": "https://drabdullahmaras.com/#organization" }, mainEntityOfPage: "https://drabdullahmaras.com/blog/depresyon-mu-uzuntu-mu" }) }} />
        </>
    );
}
