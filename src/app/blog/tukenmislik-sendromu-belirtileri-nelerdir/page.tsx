import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Tükenmişlik Sendromu Belirtileri Nelerdir? | İş ve Yaşam",',
    description:
        'Sürekli yorgunluk, aniden parlama, isteksizlik ve duygusal çöküş gibi (tükenmişlik sendromu - burnout) yetişkin ruh sağlığı belirtilerinin uzman analizi.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/tukenmislik-sendromu-belirtileri-nelerdir' },
    openGraph: {
        title: 'Bedenin Feryadı: Tükenmişlik (Burnout) Belirtileri Nelerdir?',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Sabahları mide bulantısı tükenmişlik belirtisi midir?',
        answer: 'Fiziksel / gastrointestinal bir hastalık (ülser vs.) yoksa; bedenin sırf stresten ve işe gidecek omzundaki o kaygı yüzünden kusturmaya çalışma isteği spesifik bir (somatik - bedenselleşen) tükenmişlik belirtisidir.',
    },
    {
        question: 'En ufak bir sese bile tahammül edememek normal mi?',
        answer: 'Burnout esnasında zihnin tolerans (şefkat, katlanma) penceresi tamamen kapandığı için, en ufak bir kalem tıkırtısı veya eşin sorduğu soru gibi durumlarda, beynin ona cinnet (patlama) boyutunda "öfkeli" bir sinyalle karşılık vermesi klinik düzeyde gözlenir.',
    },
    {
        question: 'Unutkanlık da bu belirtilere dahil mi?',
        answer: 'Kronik stres, beynin ön belleğini (Frontal korteksi) tıkadığı için, kişinin bir maili 5 kere hatalı okuyup yanlış kişiye atması, sözlerini unutması gibi (zihin sisi - brain fog) tabloları tükenmişliğin orta-ileri kognitif hasarlarıdır.',
    },
    {
        question: 'Hastalıklara sık yakalanmak psikolojik midir?',
        answer: 'Bitik ve tükenmiş bir ruhta ilk çöken sistem daima bağışıklıktır. Aylardır çok gergin olan yetişkin sürekli soğuk algınlığı, zona, aft ve uçuk çıkarır. Bu durum kortizolün bedeni asidik bir iltihap sahasına çevirmesinden ibarettir.',
    },
    {
        question: 'Psikiyatrist bu belirtileri ölçebilir mi?',
        answer: 'Zaten hekim; "bireysel değerlendirme" odasında, hastanın bu uykusuzluğunu, öfke patlamalarını ve isteksizliğini (depresyondan ayrıt ederek) klinik skalalar, anamnez / psikiyatrik görüşme verileriyle analiz edebilen ve şiddetine göre plan yapan otoritedir.',
    },
];

export default function TukenmislikBelirtileriBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/tukenmislik-sendromu">Tükenmişlik Kütüphanesi</Link><span>/</span>
                        <span>Sendrom Belirtileri</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Psikiyatri, Sendrom Bulgu, Stres</span>
                        <time dateTime="2026-06-20">20 Haziran 2026</time>
                        <span>•</span><span>6 dk okuma</span>
                    </div>
                    <h1>Tükenmişlik Sendromu Belirtileri Nelerdir? Ruhun Vücuttaki Alarmı</h1>
                    <p className={styles.heroDesc}>
                        Size kendinizi sürekli "Adım atacak halim yok" şeklinde hasta gibi hissettiren o ağırlığın aslında
                        bir mikrop ya da virüs olmadığını, zihninizin size <strong>"duygusal tükenme belirtileri"</strong>
                        şeklinde sunduğu o devasa ruhsal iflasları (burnout sinyallerini) inceliyoruz.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>(Ankara Eryaman Ruh Sağlığı Uzmanı)</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            <h2 id="nedir-stres">Fiziksel Çöküşle Başlayan Sessiz Senfoni</h2>
                            <p>
                                İnsan bedeni, içeride yıllarca gizlenen stresi en nihayetinde bir <strong>hastalık veya acı
                                    tablosu (psikosomatik tepki)</strong> olarak bedene döker. <Link href="/blog/tukenmislik-sendromu-nedir">Tükenmişlik (Burnout)</Link>
                                birdenbire, bir cumartesi sabahı uyanılıp "Ben artık kimseye faydalı olamam" denilen bir vaka değildir.
                                Sizin içinizi gıdım gıdım; işte çalışırken gösterilmeyen takdirlerle, ezip geçen patronla veya
                                evdeki bencil ve empati sıfır ilişkiyle yavaş yavaş bitirip çökertir.
                            </p>

                            <p>
                                Kişi her defasında <Link href="/blog/surekli-yorgun-hissetmek-psikolojik-mi">"Sadece yorgunum, haftaya geçer"</Link> der.
                                Lakin o yorgunluk hiçbir vitaminde sıfırlanmaz, her kan tahlilinde "Turp gibisiniz bir eksiğiniz yok"
                                denerek hasta eve yollanır; oysa hasta ruhsal olarak yatağından asfalta kendi bedenini zor kazıyordur.
                            </p>

                            <h2 id="ikincil-bozukluk">Duyguların Tükenmesi (Sinirlilik)</h2>
                            <p>
                                Tükenmişlik yelpazesindeki (burnout spektrumu) hastalarda çevrenin gördüğü en büyük belirti;
                                önceden melek gibi gülümsediği hatalara veya sorulara dahi şimdi bir canavar gibi
                                <strong>öfke ve tahammülsüzlükle ("Bana soru sormayın yeter artık!")</strong> patlayan kişilik değişimidir.
                            </p>
                            <p>
                                Zihinde tolerans denilen o tampon bölgesi tamamen yırtıldığı için,
                                <Link href="/hizmetler/anksiyete">Anksiyetenin (kaygılı o sürekli uyarılmışlık halinin)</Link>
                                tahribatıyla birlikte en ufak bir şey bile o bedene bir mızrak (işkence) gibi batıp acı verir.
                            </p>

                            <h2 id="zihinsel-donma">Kavramsal Bozulma: (Odak ve İş Performansı)</h2>
                            <p>
                                Dünün en yetenekli mühendisi / en pratik analisti olan hasta; bir cümlenin öznesini zar zor kavradığı,
                                bir rakamı üç kez yanlış girdiği veya "işe gitmek istemiyorum" dedirten o büyük <Link href="/blog/motivasyon-kaybi-neden-olur">motivasyon çukurunu</Link> yaşar.
                                Bu aptallaşma (Brain Fog) safında; <Link href="/hizmetler/eriskin-dehb">Erişkin DEHB vakalarındaki
                                    dağılmadan</Link> ziyade; tamamen stresi ve "Gelecek ümidini" bedenin reddedip artık hiçbir
                                bilgiyi kortekste depolamak istememesi söz konusudur (Bana ne? Benim ne faydama ki? duyarsızlaşması).
                            </p>

                            <h2 id="uyku-uykusuzluk">Gece İşkencesi ve Somatik Pencereler</h2>
                            <p>
                                Bu devasa yıkımın bedende ilk sinyali uykuda atar. Hasta gün içinde ne kadar çabalarsa çabalasın,
                                gece <Link href="/hizmetler/uyku-bozukluklari">Uyku bozukluğuna (gece 2'de aniden terleyerek kalkmalara veya saatlerce tavanı izlemelere)</Link>
                                esir olmaktan tamamen kurtulamaz.
                            </p>
                            <ul>
                                <li>Sonrasındaki belirtilerde ise baş ağrıları, ensede boyun tutulmaları, ani giren göğüs sancıları veya sabah işe gideceği zaman klozette geçirilen bulantı kusma nöbetleri (panik yansımaları) devreye girer. Bedensel alarm vermiştir.</li>
                            </ul>

                            <h2 id="psikiyatrist">Neden Kliniğe / Hekime Gözükmek Şarttır?</h2>
                            <p>
                                <Link href="/hizmetler/tukenmislik-sendromu">Ankara Eryaman tükenmişlik değerlendirme sürecimizdeki
                                    (Psikiyatrik süreçlerle)</Link> amaç; "Evet yorulmuşsun arkadaşım sen tatile git" demek tarzında
                                boş konuşmalar değildir. O bitkinliğin içinde eğer bir <Link href="/hizmetler/depresyon">Major
                                    Çökkünlük (İntihar planı vb)</Link> gelişmişse; ya da hasta sırf mesleği kaldıramıyor diye bir
                                gün o trafikte ağır bir kalp ya da panik atağı ile sarsılmak üzereyse buna müdahale eden tıbbın o ilk adımıdır hekim.
                            </p>

                            <p>
                                Burnout geçiştirilirse kişinin kariyerini sadece durdurmaz, kendi hayatını tamamen ortadan ikiye kırar (işsizlik + asosyal kapanma). Şiddetinize göre kişiden kişiye değişebilecek o çıkış haritası klinik masada "bireysel görüşme" disipliniyle işlenir.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Klinik Uyarısı</strong>
                                Belirtilen durumlar yetişkin tıp disiplini (psikiyatri) nezdindeki olgulardır. İnternette yer alan testler veya vitamin reklamlarıyla "iki haftada eskiye dönülür (%100 çözüm)" safsataları asıl tıbbi teşhisin yerine geçmez. Kişiye has, gerçekçi bir uzman analizi için psikiyatrik (Eryaman) görüşmeniz planlanmalıdır.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <p>Her gün daha enerjisiz kalıp "Kendimi kaybediyorum" dediğiniz an o dibe vuruşun ilk basamağıdır. Zihninizi yalnız bırakmayın, klinik değerlendirmeyle bu yükten kurtulun.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Ruh Sağlığı (Belirti Muayenesi) →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Alarmı Daha Fazla Ertelemeyin</h3>
                                <p>Belirtiler artık vücudunuza ağrılarla işlediyse, o zihne el ve mola atmanın (Ankara) zamanı gelmiştir.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Klinik Üzerinden Alınız</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>İçerik Uzantıları</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/blog/surekli-yorgun-hissetmek-psikolojik-mi">O Yorgunluğu Bedensel Mi Sanıyorsunuz?</Link></li>
                                    <li><Link href="/blog/tukenmislik-ve-depresyon-arasindaki-fark">Belirtiler Depresyon İle Çok Karışır</Link></li>
                                    <li><Link href="/hizmetler/tukenmislik-sendromu">Klinik Sendrom Değerlendirme Rotası</Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Application / JSON */}
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
