import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Panik Atak ile Kalp Krizi Farkı Nasıl Ayırt Edilir? | Uzm. Dr. Abdullah Maraş',
    description:
        'Panik atak kalp krizi midir? Göğüs kafesinde uyuşma, kalp sıkışması ve omuz sızıları panik atakta nasıl seyreder? Acil tanı ve Eryaman psikiyatrik süreç.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/panik-atak-kalp-krizi-mi' },
    openGraph: {
        title: 'Panik Atak İle Kalp Krizini Ayırt Etme Adımları',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Göğüsteki ağrının kalp krizinden geldiğini nasıl anlarım?',
        answer: 'Genellikle kalp krizi sıkışması hareket (efor, merdiven çıkma) ile şiddetlenir ve göğse "bir fil oturmuş gibi" çok ezici (batıcı olmayan) sabit bir baskı yayılır.',
    },
    {
        question: 'Panik atak sol kol uyuşması yapar mı?',
        answer: 'Evet. Adrenalin salgısı kol kaslarını ve damarları kasarak sol kolda, ellerde ve hatta yüzde yoğun karıncalanma, iğne batması ve uyuşma (parestezi) yapabilir.',
    },
    {
        question: 'Kalp grafisi (EKG) temiz çıktı ama hala ağrım var, neden?',
        answer: 'Eğer bir kardiyoloji uzmanı (fiziksel doktorunuz) kalbinizde organik hiçbir bir tıkanıklık bulamadıysa, göğüs duvarınızdaki kaslar panik nedeniyle kasıldığı için aylarca devam eden "yansıma ağrılar" yaşıyor olabilirsiniz.',
    },
    {
        question: 'İlk defa kalp çarpıntısı ve göğüs sıkışması yaşarsam nereye gitmeliyim?',
        answer: 'Bu his ilk kez yaşanıyorsa, ağrı şiddetliyse; kişi durumun panik atak (psikiyatri) olduğunu kendince varsaymadan derhal bir ACİL tip servisine veya kardiyoloğa gitmelidir.',
    },
    {
        question: 'Ankara Eryaman’da panik ve kalp ayrımını kime danışabilirim?',
        answer: 'Hastanedeki acil testleri "tertemiz" sonuçlanan ve sorunun tamamen beynin yanlış savaş/kaç tepkisi (panik bozukluğu) olduğu söylenen bireyler, kliniğimizde (Altay Mh.) Uzm. Dr. Abdullah Maraş / Psikiyatri alanında değerlendirmeye alınır.',
    },
];

export default function PanikKalpKriziFarkiBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/panik-atak">Panik Atak</Link><span>/</span>
                        <span>Kalp Krizi Mi?</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Panik Atak</span>
                        <time dateTime="2026-03-18">18 Mart 2026</time>
                        <span>•</span><span>8 dk okuma</span>
                    </div>
                    <h1>Panik Atak ile Kalp Krizi Nasıl Ayırt Edilir?</h1>
                    <p className={styles.heroDesc}>
                        Göğüs kafesinde adeta mengene ile sıkılan devasa bir sızı, saniyeler içinde hızlanan nabız
                        ve akla gelen o korkunç ilk soru: "Kalp krizi mi geçiriyorum?"
                        Neyin amigdaladan (beyin), neyin organdan (kalp) geldiğini ayırt edebilmek, sürecin ilk adımıdır.
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
                                112 İlk ve Acil Yardım ekipleri (Ambulanslar), her gün yüzlerce "Kalbim bir anda
                                fırlayacak gibi oluyor ve soluma uyuşma girdi!" ihbarına gitmektedir. Hastanelerin Acil Servis
                                odalarında, kan testleri (Troponin vs.) ve EKG'si (kalp grafiği) "tertemiz,
                                turp gibisiniz" çıkan hastalar oysaki halen "Ölecekmişim hissi" ile sedye üzerinde
                                <Link href="/blog/panik-atak-kac-dakika-surer">dakikalar geçmek bilmiyor diye</Link> beklemektedir.
                            </p>

                            <h2>Temel Fark Nerede Yatar?</h2>
                            <p>
                                Her ikisinin de <Link href="/blog/panik-atak-belirtileri">bedensel fırtınaları / belirtileri (terleme,
                                    göğüste sıkışma, ölüm korkusu)</Link> tıp dilinde ve hastanın tecrübesinde o an birbirine fazlasıyla
                                benzer. Lakin:
                            </p>
                            <ul>
                                <li><strong>Panik Atak</strong>: Amigdaladan (beyindeki tehlike algısı merkezi) çıkar. Damarlarınız veya kasınızda tıkanan bir pıhtı veya organ hasarı (nekroz) <em>yoktur</em>. Sadece bedeni savaştırmaya hazırlayan lakin yersiz olan, çok yanlış bir "elektrik (Adrenalin)" devresidir.</li>
                                <li><strong>Kalp Krizi</strong>: Koroner (kalp) damarlardan birinin tıkanmasıyla, kalp kasının organik olarak oksijensiz (iskemik) kalarak hücresel düzeyde fiziksel hasar - çürüme görmesidir.</li>
                            </ul>

                            <h2>Ağrının Karakteri (Teşhisin İnce Çizgisi)</h2>
                            <p>
                                Tıbbi aciller uzmanlığında en önemli ayrım, hastanın ağrıyı (hissettiği baskıyı) anlatma biçimidir:
                            </p>

                            <h3>Şiddet ve Nitelik Farkı</h3>
                            <p>
                                Kalp krizi ağrısı için hastalar genellikle "Göğsüme bir fil oturdu", "Biri mengeneden sıkıyor"
                                şeklinde <strong>baskı ve ezici</strong> bir ağrı tanımlar. Panik ataktaysa ağrı bazen yine baskılı olsa
                                da sıklıkla göğsün içinde sağa sola gezen (özelikle tam sol meme altında odaklı kalan) "bıçak batması
                                gidi, elektrik çarpması gibi ince sızılar" formatındadır.
                            </p>

                            <h3>Süre ve Hareketle Etkileşimi</h3>
                            <p>
                                Asıl kritik ayrım burada yatar. Panik Atakta kalp deli gibi atar ancak siz yürüseniz de
                                kalkıp nefes alsanız da (hatta pozisyon değiştirseniz de) ağrı ve çarpıntı hızı o an değişir.
                                <strong>Kalp Krizinde (enfarktüs)</strong> hasta hareket etmeye (efora) tahammül edemez; 1 adım dahi
                                atsa (kalp kasa oksijen iletemediği için) o mengene sızısı katlanılmaz boyutlara gelir ve
                                hasta kıvrılır kalır.
                            </p>

                            <h2>Sol Kol Neden Uyuşur?</h2>
                            <p>
                                Özellikle kalple ilişkilendirilen sol kolun, sırta ve çeneye yayılan tipik kalp krizi
                                uyuşturuğuna karşın; panik bozuklukta hasta aslında hızlı nefes aldığı için
                                (hiperventilasyon sendromu) kandaki CO2 / oksijen dengesini alt üst eder.
                                Bu da direkt dudak kenarlarında (perioral), parmak uçlarında (iki elde birden veya özellikle sol kolda)
                                şiddetli <strong>iğne batması ve uyuşma hissine</strong> ("ellerim kitlendi, buz gibi") neden olur.
                            </p>

                            <h2>Neden Kardiyolog Değil de Psikiyatri?</h2>
                            <p>
                                Hastalar panik atasında kalplerine veya akciğerlerine o an bir şey olduğunu
                                (ölüm korkusunu) %100 "gerçek" kabul ederek yaşarlar. Bu nedenle EKG kağıdıyla gezer, defalarca tahlil yaptırırlar
                                ve "<Link href="/blog/panik-atak-oldurur-mu">bana doktorlar teşhis koyamıyor ölüyorum</Link>" sanrısına düşerler.
                            </p>
                            <p>
                                Aylarca süren bu doktor arayışları (ve hastalık hastalığı endişeleri), panikle birleştiğinde
                                artık <Link href="/hizmetler/anksiyete">ağır bir yaygın anksiyete uykusuzluğuna</Link> kadar
                                vücudu çökertir (veya <Link href="/hizmetler/depresyon">çökkünlük / depresyon</Link> eşliğinde
                                hayattan soyutlar). Kardiyoloji "sizde kardiyovasküler bir sorun (tıkanıklık) yok" der demez,
                                zaman kaybetmeden rotanın Psikiyatri Kliniğine çevrilmesi hayati önem taşır.
                            </p>

                            <h2>Eryaman’da Doğru Uzmana, Psikiyatrik Değerlendirme İçin Başvurun</h2>
                            <p>
                                Göğüsteki o ağır panik dalgasının kalbinize değil ruhunuza (ve beyninizin kimyasal ileticilerine)
                                ait olduğunu bilmek büyük bir aşamadır. Ankara Eryaman (Altay Mh.) civarındaki veya Etimesgut /
                                Batıkent bölgesindeki tüm bireyler; Acil hekimlerince ("Fiziksel / Organik Temiz") sonucuyla
                                karşılaştıklarında panik bozukluğun (kaygı krizlerinin) tıbbi bilimsel tedarikini oluşturmak
                                üzere kliniğimizde (Uzm. Dr. Abdullah Maraş / Psikiyatrist) kapsamlı bir değerlendirme sürecine
                                alınmaktadır. Bireysel / kişisel görüşmelerle gereksiz bir felaket beklentisinden ve
                                acıdan tamamen kurtulmanın rasyonel adımları atılır.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Acil Yardım Bilgilendirme Notu</strong>
                                Bu sayfanın amacı okuru tıbbi ilkeye kavuşturmaktır lakin hasta anlık teşhisi KESİNLİKLE internete okutarak koymamalı ("Ağrım paniktir bir şey olmaz" diyip oturmamalıdır). İlk kez göğüste yoğun basınç hisseden; yaşlı, diyabet, tansiyon, sigara geçmişi olan <strong>her birey, göğüs ağrısını öncelikle 112 (Acil Tıp) veya Kardiyoloji nezdinde</strong> iskeletinden ekarte etmelidir ("Kalp krizi mi değil mi?" sorusunun yanıtı kan/EKG testidir). Sağlık raporu psikiyatriye ardından tevdi olmalıdır.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <h3>Psikiyatrist Randevusuyla Göğsünüzdeki Kaygıyı Anlamlandırın</h3>
                                <p>Eryaman kliniğimize panik krizlerinizde "neden kalbim" sorusunun profesyonel psikiyatrik değerlendirme seansıyla cevabına (doktor görüşmesiyle) odaklanabilirsiniz.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Randevu Bilgileri →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Değerlendirme Başvurusu</h3>
                                <p>Bu ataklar fiziksel kalbiniz değilse, bir psikiyatri süreci Eryaman'da çözüm için yanınızdadır.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Psikiyatri Randevusu</Link>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4>Detaylı İlişki Kümeleri</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/hizmetler/panik-atak">Panik Atak Kapsam (Hizmetler)</Link></li>
                                    <li><Link href="/blog/panik-atak">Panik (Genel Merkezi) Blog</Link></li>
                                    <li><Link href="/blog/panik-atak-oldurur-mu">Panik Ölüm Riski Yaratır mı?</Link></li>
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
