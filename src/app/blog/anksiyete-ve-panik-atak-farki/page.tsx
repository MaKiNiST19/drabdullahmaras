import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Anksiyete ve Panik Atak Farkı Nedir? Belirtiler | Uzm. Dr. Abdullah Maraş',
    description:
        'Anksiyete bozukluğu ile panik atak birbirine sıkça karıştırılır. Ancak süre, şiddet ve belirti açısından farklıdır. Ankara Eryaman anksiyete ve panik ayrımları.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/anksiyete-ve-panik-atak-farki' },
    openGraph: {
        title: 'Anksiyete ve Panik Atak Arasındaki Fark Nedir?',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Panik atak ve anksiyete aynı şey mi?',
        answer: 'Hayır, aynı şey değillerdir. Anksiyete (kaygı), daha düşük şiddette ancak uzun bir süreye, bazen aylara yayılan endişe halidir. Panik atak ise saniyeler/dakikalar içinde en üst düzeye çıkan ani ve çok şiddetli bedensel-zihinsel nöbetlerdir.',
    },
    {
        question: 'Anksiyete atağı var mıdır?',
        answer: 'Klinik tıp dilinde (örneğin DSM-5 kriterlerinde) spesifik bir "anksiyete atağı" tanımı yoktur. Ancak "kaygı durumunun tırmanarak krize dönüşmesi" halk arasında bu adla anılmaktadır. Çoğunlukla panik atağın belirgin başlangıcı ile karıştırılabilmektedir.',
    },
    {
        question: 'Bende hangisi olduğunu nasıl anlarım?',
        answer: 'Şiddetli ve kısa (10-30 dakika arasında yatışan) fiziksel korkular panik atağa işaret ederken; aylarca süren uykusuzluk, kas gerginliği ve "ya olursa" beklentisi yaygın anksiyeteye işaret eder.',
    },
    {
        question: 'Panik atak kendiliğinden iyileşir mi?',
        answer: 'Bazı durumlarda tek seferlik panik ataklar bir daha yaşanmayabilir. Ancak atakların tekrarlaması durumunda kronikleşen bir panik bozukluğu söz konusu ise uzman psikiyatri hekimi görüşü önemlidir.',
    },
    {
        question: 'Eryaman kliniğinde her iki duruma da bakılıyor mu?',
        answer: 'Türkiye Cumhuriyeti kanunları ve Tıp Uzmanlığı gereğince, Uzm. Dr. Abdullah Maraş kliniğimizde her iki klinik duruma dair Ankara Eryaman’da ayrıntılı ruhsal süreç değerlendirilmesi yapılmaktadır.',
    },
];

export default function AnksiyeteVsPanikBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/anksiyete">Anksiyete</Link><span>/</span>
                        <span>Panik Atak ve Anksiyete Farkı</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Anksiyete</span>
                        <time dateTime="2026-04-08">8 Nisan 2026</time>
                        <span>•</span><span>9 dk okuma</span>
                    </div>
                    <h1>Anksiyete (Kaygı) ile Panik Atak Arasındaki Fark Nedir?</h1>
                    <p className={styles.heroDesc}>
                        Çoğu insan şiddetli bir endişe veya ölüm hissi hissettiği o dakikalarda panik mi yaşadığını yoksa
                        anksiyetenin mi kriz haline geldiğini sorgular. İşte klinikte en çok karşılaşılan "Fark nerede?"
                        sorusunun yanıtları.
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
                                Göğsünüz hızla inip kalkıyor, kalbiniz sanki yerinden çıkacakmış gibi atıyor ve içinizde, adını
                                tam koyamadığınız korkunç bir "felaket beklentisi" var. Böyle anlar yaşadığınızda aklınıza gelen ilk soru
                                "Kalp krizi mi? O halde panik atak mıyım yoksa kronik bir <Link href="/hizmetler/anksiyete">anksiyete mi</Link>?"
                                olmaktadır. Her iki kavram medya dilinde sıkça iç içe kullanılsa da klinik olarak tamamen
                                farklı dinamiklere ve tedavi (değerlendirme) süreçlerine sahiptirler.
                            </p>

                            <h2>Anksiyete Nedir? (Tepenin Ardındaki Gölgeler)</h2>
                            <p>
                                Anksiyete veya kaygı bozukluğunu tanımak için onu, arkada kısık sesle sürekli çalan tatsız bir radyo yayını
                                olarak düşünebilirsiniz. Süreğen, yaygın ve haftalara hatta
                                <Link href="/blog/anksiyete-ne-kadar-surer">aylar süren bir zaman dilimine</Link> yayılan bir endişe
                                silsilesidir.
                            </p>
                            <ul>
                                <li>Olasılıklar düşünülür: "Ya toplantıda komik duruma düşersem?", "Ya otobüs kaza yaparsa?", "Çocuğum geç kaldı, kesin kötü bir şey oldu."</li>
                                <li>Belirtiler ılımlı bedensel huzursuzluk, kaslarda omuz bölgesindeki tutulmalar, yorgunluk ve mide bulantısı gibi yavaş ilerleyen tarzı yansıtır.</li>
                                <li>Hemen bitmez; gün boyunca yatışıp alevlenerek yaşama ortak olur.</li>
                            </ul>

                            <h2>Panik Atak Nedir? (Fırtınanın Ta Kendisi)</h2>
                            <p>
                                Buna karşılık panik atak, sakin ve güneşli bir havada aniden patlayan beklenmedik ve şiddetli bır fırtınadır.
                                Çoğunlukla gözle görülür veya net bir "şu an" tehdidi o esnada mevcut dahi olmayabilir.
                                <Link href="/hizmetler/panik-atak">Panik atak özellikleri</Link> içinde belirgin bir başlangıç öne çıkar:
                            </p>
                            <ul>
                                <li>Genellikle sadece birkaç dakika (çoğunlukla 10-20 dakika) sürer ama hasta o anı bitmeyecekmiş gibi, sonsuz bir korku (sıklıkla "Ölüyorum" korkusu) içinde değerlendirir.</li>
                                <li>Çarpıntı son derece şiddetlidir. Nefes, sanki tamamen kesilir gibi hissedilir. Terleme, ani sıcaklık ya da aşırı üşüme ile ellerde uyuşmalar (karıncalanma) meydana gelir.</li>
                                <li>Zihin "Çıldıracağım, kontrolümü dış dünyaya kapatarak kendimi kaybedeceğim" sinyalleri atar.</li>
                            </ul>

                            <h2>Süre ve Yoğunluk Üzerinden Karşılaştırma</h2>
                            <p>
                                Klinik pratisyenlikte en temel ve net ayrım bu maddedir.
                                <strong>Anksiyete bozukluğu "maraton" koşusudur</strong>; düşük-orta dozda kalp atışı, süreğen huzursuzluk
                                ve uykusuzlukla seyreden aylar alabilen bir "gelecek" endişesidir.
                                <br /><br />
                                Buna mukabil, <strong>panik atak "yüz metre sprintidir"</strong>; aşırı doz yoğunluk, bedensel ölüm
                                korkusudur ve saniyeler bazen dakikalar içinde tırmanır ardından insanı çok bitkin şekilde bırakıp çekilir.
                            </p>

                            <h2>Bedensel Belirtilerdeki O Küçük Ama Hayati Farklar</h2>
                            <p>
                                Aslında bedensel sinyaller (çarpıntı, mide, ter, titreme) her iki durumun da yansımalarıdır. Ancak:
                            </p>
                            <ul>
                                <li>Anksiyetede genelde "Uyuyamıyorum, sürekli karnım ağrıyor, boynum kaskatı." gibi şikâyetler duyulur. Kişi bunların bilincinden ziyade uzun süren rahatsızlığından sızlanır.</li>
                                <li>Panik atakta ise "Acile gidelim, nefes alamıyorum, kalbim duracak." şeklinde yoğun bedensel his korkusu ortaya atılır.</li>
                            </ul>

                            <p>
                                Ayrıca panik atakların artması ve <Link href="/hizmetler/depresyon">depresyon ile perçinleşmesi</Link> durumu
                                hayli sık karşılaşılır. Kişi artık yeni ataktan (beklenti endişesi) korktuğu için hiçbir aktivite yapmaz; evden,
                                asansörden ve kalabalıktan kaçmaya başlayabilir (Agorafobi).
                            </p>

                            <h2>Günlük Yaşam ve İşlevsellik Üzerindeki Etkisi</h2>
                            <p>
                                Kaygı duyan bir birey, işlevselliği aksasa da "zorunlu" gördüğü rutinlerine devam edebilme eğiliminde (dişini sıkarak da olsa) olabilir.
                                Panik yaşayan bir birey ise atağı yeni geçirdiği sıralarda bir adım atmaktan bile çekinir, acil servislere
                                kendini atar. İş ortamına veya kapalı yerlere girmekte yoğun zorluk yaşamaya yol açabilir. Günlük üretkenlik
                                büyük darbe almaktadır.
                            </p>

                            <h2>Ne Zaman Bir Psikiyatri Uzmanı İle Görüşmek Gerekir?</h2>
                            <p>
                                Cevap aslında çok basit: Bu tür belirtiler ortaya çıktığında ve siz kendi kendinize telkin etmeye çabalamanıza
                                ağmen döngüyü (korku sarmalını) kırmakta çaresiz kaldığınızda, ilk kapıyı çaldığınız "Dahiliye, Kardiyoloji, vs."
                                gibi fiziki uzmanlardan kalp/vücut sağlığınızın <strong>temiz olduğu cevabını / teşhisini aldığınızda</strong>
                                vakit kaybetmeden profesyonel psikiyatrik değerlendirme düşünmelisiniz. Tıp, bu farklılıkları bilen eğitimli
                                uzmanların doğru ayırıcı tanıyı (differential diagnosis) yapmasıyla hayatınızı rahatlatır.
                            </p>

                            <p>
                                Ankara Eryaman (Altay Mh.) bölgesinde yaşayan hastalar, <Link href="/blog/anksiyete-belirtileri">kaygı ve stresin belirtilerini</Link>
                                ya da panik korkularının yarattığı zorlukları güvenilir bir şekilde Etimesgut kliniğinde (Uzm. Dr. Abdullah Maraş
                                ile) çalışabilir, bilimsel sağlık standartlarından yararlanarak huzurlu yaşam değerlendirme planlarına ortak
                                olabilirler.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Lütfen Unutmayınız</strong>
                                Anksiyete ve panik atak farkı sadece bilgilendirici yazılar kapsamındadır, okurun kendisine bir teşhis
                                koymasına yöneltmez. Tıbbi teşhis/tedavi kesinliği Ankara Eryaman'da yetkili tıp doktorlarınca yapılmalı,
                                kesin/mucize tedaviler sunan yanıltıcı içeriklerden kaçınılmalıdır.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <h3>Ayrıntılı Psikiyatrik Değerlendirme</h3>
                                <p>Eryaman kliniğimize panik / kaygı kargaşanızı doğru tanımak, şikayetlerinizin bilimsel adını bularak birlikte görüşmek için aşağıdan randevu alabilirsiniz.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Ön Görüşme ve Değerlendirme Randevusu →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Farkı Birlikte Anlayalım</h3>
                                <p>Klinik olarak teşhis / tanı ve uzman görüşmesi.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Randevu Bilgileri</Link>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4>Yakın Hastalıklar & İncelemeler</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/hizmetler/anksiyete">Anksiyete Değerlendirmesi</Link></li>
                                    <li><Link href="/hizmetler/panik-atak">Panik Atak Kapsamı</Link></li>
                                    <li><Link href="/blog/anksiyete-krizi">Anksiyete Krizinde Ne Olur?</Link></li>
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
