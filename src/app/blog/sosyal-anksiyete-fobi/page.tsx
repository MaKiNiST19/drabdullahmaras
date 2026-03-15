import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Sosyal Anksiyete (Sosyal Fobi) Nedir? Belirtiler | Uzm. Dr. Abdullah Maraş',
    description:
        'Sosyal anksiyete (sosyal fobi) nedir? İnsanlar içinde yargılanma ve eleştirilme korkusunun belirtileri ile Eryaman psikiyatrik değerlendirme süreci.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/sosyal-anksiyete-fobi' },
    openGraph: {
        title: 'Sosyal Anksiyete (Sosyal Fobi) Nedir? Yaşamı Nasıl Etkiler?',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Sosyal anksiyete utangaçlık demek midir?',
        answer: 'Hayır. Utangaçlık bir kişilik özelliği iken sosyal anksiyete bozukluğu (sosyal fobi), kişinin sosyal ortamlarda aşırı ve mantıksız bir yargılanma korkusu yaşayarak ciddi işlev kaybına uğramasıdır.',
    },
    {
        question: 'Sosyal anksiyete sonradan mı ortaya çıkar?',
        answer: 'Sosyal anksiyete genellikle ergenlik döneminde veya genç yetişkinlikte, sosyal gereksinimlerin ve eleştirilme kaygısının yoğunlaştığı zamanlarda belirginleşme eğilimi gösterir.',
    },
    {
        question: 'Sosyal fobisi olan biri panik atak yaşar mı?',
        answer: 'Evet. Sosyal fobiye sahip bir birey özellikle korktuğu bir ortamla (örneğin topluluk önünde konuşmak) karşılaştığında yoğun bir paniğe, terleme ve titremeye maruz kalarak atak geçirebilir.',
    },
    {
        question: 'Sosyal fobisi olanlar neden asosyal görünür?',
        answer: 'Aslında sosyal zayıflıktan ziyade temel neden kaygıdır. Kişiler kaygılarından ötürü sürekli ortamdan kaçınma (avoidance) stratejisi geliştirdikleri için dışarıdan içe dönük veya asosyal algılanabilmektedir.',
    },
    {
        question: 'Ankara Eryaman (Altay Mh.)’de sosyal anksiyete için psikiyatri desteği var mı?',
        answer: 'Evet. Uzm. Dr. Abdullah Maraş, sosyal anksiyete de dahil olmak üzere yaygın kaygı durumlarının bilimsel değerlendirmesini Ankara Eryaman’da uygulamaktadır.',
    },
];

export default function SosyalAnksiyeteBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/anksiyete">Anksiyete</Link><span>/</span>
                        <span>Sosyal Anksiyete</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Anksiyete</span>
                        <time dateTime="2026-04-15">15 Nisan 2026</time>
                        <span>•</span><span>8 dk okuma</span>
                    </div>
                    <h1>Sosyal Anksiyete (Sosyal Fobi) Nedir?</h1>
                    <p className={styles.heroDesc}>
                        Başkalarının önünde konuşmak, yeni ortamlara girmek veya yemek yemek bile korkutucu olabilir mi?
                        Sıradan bir "utangaçlığın" çok ötesine geçen sosyal fobiyi ve nasıl etki ettiğini bilmeniz gerekir.
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
                                "Herkes bana bakıyor, rezil olacağım, yanlış bir şey söylersem benimle alay edecekler..."
                                Zihinde sürekli dönen bu yargı sistemi sosyal fobi veya profesyonel adıyla Sosyal Anksiyete Bozukluğu'na
                                dair güçlü hislerden oluşmaktadır.
                            </p>

                            <p>
                                Sosyal anksiyete; kişinin basit utangaçlığının, iletişim eksikliğinin çok ötesindedir.
                                <Link href="/hizmetler/anksiyete">Anksiyetenin klinik olarak hayat enerjisini</Link> en sinsi şekilde
                                emen ve kişiyi yalnızlığa hapseden yüzlerinden birisidir. Daha yakından inceleyeceğimiz detaylarıyla bu
                                tabloya yakından bakalım.
                            </p>

                            <h2>Sosyal Anksiyete Nedir?</h2>
                            <p>
                                Sosyal anksiyete (sosyal fobi); bireyin sosyal ortamlarda, performans sergilemesi gereken durumlarda veya
                                dikkatlerin üzerinde toplandığı zamanlarda yoğun bir kaygı (endişe / korku) hissetmesi durumudur.
                                Temel düşünce, "başkaları tarafından olumsuz değerlendirilme, eleştirilme, küçük düşme, utandırıcı bir
                                hata yapma" korkusudur.
                            </p>

                            <p>
                                İçinden çıkamadıkları "Ya olursa" döngüleri aslında
                                <Link href="/blog/surekli-kaygi-hali">sürekli kaygı halinin belirli odaklara yoğunlaşmış şablonlarındaki</Link>
                                en belirgin mekanizmalarından biridir.
                            </p>

                            <h2>Sosyal Anksiyete Belirtileri</h2>
                            <p>
                                Belirtiler genellikle korkulan bir soysal durum tetiklendiğinde —ya da bazen günler/haftalar öncesinden
                                beklenti ankstiyetesiyle— kendini gösterir:
                            </p>
                            <ul>
                                <li><strong>Bedensel:</strong> Yüzde kızarma, terleme, ellerin titremesi (özellikle çay/kahve tutarken), sesin titremesi, bağırsak rahatsızlıkları / mide bunaltısı, kalp çarpıntısı.</li>
                                <li><strong>Düşünsel:</strong> Zihinde her konuşmanın / davranışın tekrar tekrar en kötü, rezil edici senaryoyla canlandırılması, aşırı düzeyde yetersizlik hissi.</li>
                                <li><strong>Davranışsal:</strong> Korkulan o ortamdan uzak durma çabası (Kaçınma) ya da oradan kaçamadığı zamanlarda büyük bir panik duygusuyla (<Link href="/blog/anksiyete-ve-panik-atak-farki">Panik Atak benzeri bedensel yoğun sarsılmalar</Link>) süreyi katlanarak geçirmesi.</li>
                            </ul>

                            <h2>Günlük Yaşam ve İş / Okul Hayatına Etkileri</h2>
                            <p>
                                Sosyal fobinin asıl zorlayıcı tarafı işlevselliktir. Hastalar aslında oldukça zeki ve başarılı olmalarına
                                rağmen "sunum yapamamak, yöneticilerle / yetili figürlerle görüşmekten kaçmak" yüzünden hak ettikleri
                                kariyere / akademiye varamazlar. Sınıfta hiçbir soruyu (cevabı bildikleri halde) yanlış olup alay
                                edilme korkusuyla sormazlar. <Link href="/hizmetler/depresyon">Zamanla bu durum bir depresyona / tükenmişliğe</Link> dönüşebilir.
                            </p>

                            <h2>Kaçınma Davranışları</h2>
                            <p>
                                Belirli telefonlara çıkmamak, gelen davetlere / düğünlere bahaneler üreterek gitmemek, yeni ortamlara veya
                                restoranlara girmekten korkmak, hatta bazı bireylerde (gözlemlendiğini düşünerek) toplum içinde yemek
                                yiyememe, toplu tuvaletlere girememe gibi durumlar sosyal fobiye ait "kaçınma" unsurlarıdır.
                                Kaçındıkça rahatlayan beynimiz aslında bir sonraki sefere "Korktuğun o ortama gitmemek en iyisi" diyerek
                                korkumuzu ve yalnızlığımızı besler.
                            </p>

                            <h2>Ne Zaman Destek Düşünülmeli?</h2>
                            <p>
                                Bireyler toplum içinde eleştirilmeme kalkanına sığınarak potansiyellerinden vazgeçmeye başlıyorsa,
                                insanlarla aralarına örülen duvar kalınlaşmakta ise bir psikiyatri uzmanının klinik görüşme yardımıyla
                                değerlendirilmesi kaçınılmazdır. Eğer korkunuz bir sınava dair spesifik veya sunuma dair özel bir konu değil de,
                                gündelik selamlaşmalarınıza ve mesai molanıza (yemekhane) dek etki ettiyse mutlaka psikiyatri görüşü düşünmelisiniz.
                            </p>

                            <h2>Ankara Eryaman'da Sosyal Anksiyete Yaşayan Kişiler İçin Değerlendirme Süreci</h2>
                            <p>
                                Eryaman, Batıkent, Etimesgut ve çevre semtlerde ikamet eden kişiler için Uzm. Dr. Abdullah Maraş (Tıp Dr.),
                                kişinin hikayesini birebir dikkatle irdelediği kliniğinde (Ankara Eryaman - Altay Mh.) sosyal anksiyete,
                                kapsamlı kaygı tablosu ve utangaçlığın ayırt edilmesi işlemini (değerlendirmesini) sunmaktadır. Modern tıbbi / klinik
                                uygulamalar eşliğinde hastalar, potansiyellerini sosyal fobi denilen o duvarı yıkarak daha rahat
                                sergileyebilecekleri adımları hekim eşliğinde planlama fırsatı bulurlar.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Bilgilendirme Notu</strong>
                                Bu metinler hastalık teşhisi / tedavi yöntemi olarak kullanılmamalı, sadece genel bilgilendirme amacıyla okunmalıdır. Kaygılarınızın organik/klinik bir nedene dayanıp dayanmadığını sadece uzman ruh sağlığı doktorları belirleyebilir.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <h3>Randevu ve Danışman Ön Görüşmesi İçin</h3>
                                <p>Toplum içinde kendiniz olmak isterseniz Ankara Eryaman’da "utangaçlıktan" fazlası olan anksiyeteyi birlikte anlamlandırabiliriz.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Randevu Menüsü →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Psikiyatrist Görüşmesi</h3>
                                <p>Eryaman kliniğinde sosyal kaygınız için doktor değerlendirmesine başvurun.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Randevu Planı</Link>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4>Detaylı Kaynak Listesi</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/hizmetler/anksiyete">Anksiyete Genel</Link></li>
                                    <li><Link href="/hizmetler/depresyon">Depresyon Psikiyatrisi</Link></li>
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
