import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Sabah Erken Uyanma ve Ruh Sağlığı | Terminal İnsomnia',
    description:
        'Sabahın köründe aniden gözlerin açılması (03:00 - 04:00 uyanmaları), depresyon ve kaygı ilişkisi; yetişkin hastalar için psikiyatrik klinik uyarılar.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/sabah-erken-uyanma-ve-ruh-sagligi' },
    openGraph: {
        title: 'Depresyonun İşareti Olan "Terminal İnsomnia" (Sabah Erken Uyanma)',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Sabah erken uyanmak genetik/yaşa bağlı mı?',
        answer: 'İleri yaşlarda melatonin azaldığı için uyanma süresi öne çekilebilir; ancak saat 03:00’te birdenbire sıkıntıyla, kalpte çok ağır bir depresif acıyla gözlerin tam açılması asla yaşla açıklanamaz, bu tıbbi bir bozukluktur.',
    },
    {
        question: 'Tekrar uyumak mümkün müdür?',
        answer: 'Terminal insomnia hastaları, yastıktaki o zihinsel çırpınış veya çok yoğun bir keder duygusu yüzünden sabah 06:00’ya kadar (örneğin işe gidilecek o saate kadar) asla geri dalamaz, sadece bitkinleşerek yatakta acı çeker.',
    },
    {
        question: 'Bunun sabah kortizoluyla ilgisi nedir?',
        answer: 'Sabahları bedeni uyandıran "kortizol (stres) piki" vardır. Depresyon ve yoğun anksiyete hastalarında bu zirve biyolojik olarak arızalanır ve gereğinden iki saat önce bütün sistemi uyararak beyni uykudan koparır.',
    },
    {
        question: 'O sırada yataktan kalkmak mı iyidir dönmek mi?',
        answer: 'Hastanın yatakta dönmesi beyni "O yatağın çile çekme yeri" olarak kodlayacağı için önerilmez. Genelde hafif loş bir odaya geçip (ekransız) zihin yorulunca geri dönmek hedeflense de, bu ana sorunu kökten susturamaz.',
    },
    {
        question: 'Bu durum psikiyatri olmadan geçer mi?',
        answer: 'Geçme ihtimali oldukça zayıftır. Altından yatan çok sert duygudurum çöküşlerine (major depresyon, melankolik tablo vs.) yetişkin bazında (hekim eşliğinde) yapılandırılmış ilaç+terapi desteği (bireysel klinik) şart koşulmaktadır.',
    },
];

export default function SabahErkenUyanmaBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/uyku-bozukluklari">Uyku Bozuklukları</Link><span>/</span>
                        <span>Sabah Erken Uyanış (Terminal)</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Psikiyatri, Depresyon, İnsomnia</span>
                        <time dateTime="2026-06-08">08 Haziran 2026</time>
                        <span>•</span><span>5 dk okuma</span>
                    </div>
                    <h1>Sabah Erken Uyanma ve Ruh Sağlığı: Terminal İnsomniyanın Alarmı</h1>
                    <p className={styles.heroDesc}>
                        Güneş ufukta belirmeden saatlerce önce, o kapkaranlık odada; hiçbir alarm veya dış gürültü yokken,
                        göğsünde hissettiği muazzam keder ve anksiyete acısıyla aniden gözlerini açan hastanın o yalnız
                        ruhsal tablosunu, çok acı verici ve çok güçlü bir depresyon işaretini (Terminal İnsomniya) inceliyoruz.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>(Ankara Ruh Sağlığı Uzmanı)</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            <h2 id="nedir-stres">Asıl Neden: Kendini Güvende Hissetmeyen Beyin</h2>
                            <p>
                                İnsomnia (Uykusuzluk) hastalarının bir kısmı yatağa girerken
                                <Link href="/blog/uykuya-dalamama-sorunu">uykuya dalamama sorunundan</Link> şikayet ederken,
                                asıl ve bir diğer çok yaygın ama şiddetli tür <strong>"Terminal İnsomnia" (Sabah erken uyanıp tekrar
                                    uykuya asla dönememe)</strong> tablosudur. İnsan beyni; tam uykusunun en derin ve rüya (REM) evresindeyken,
                                kişinin kendi kendini "Hiçbir amacım yok", "Her şey çok kötü" diye kodlanmış 03:00 uyanışlarında
                                boğması, psikiyatrinin kırmızı çizgisidir.
                            </p>

                            <p>
                                Eğer bir kişi akşam televizyon izlerken hiçbir sorunu yok gibi görünüyor; fakat sabaha karşı gözleri
                                "Kederli" bir uyanıklığa (cin gibi) açılıyorsa ve o gün işe gitmek / yaşamak için hiçbir umut kırıntısı
                                bulamıyorsa; psikiyatri bilimi buna "Sabahları kötüleşen melankolik tipte
                                <Link href="/hizmetler/depresyon">şiddetli majör depresyon</Link> işareti" diyebilir.
                                <Link href="/blog/gece-sik-uyanma-nedenleri">Gece sık uyanma sorunu</Link> gibi parça parça
                                değildir, kişi bir uyanır ve o uyku ona o gece tamamen (acı vererek) sonsuza dek kapanır.
                            </p>

                            <h2 id="depresyon-bagi">Kortizolün Erken Zil Çalması</h2>
                            <p>
                                Vücudumuzda bizi sabahları doğal olarak yataktan kaldıran Kortizol isimli bedeni çalıştıran (faydalı)
                                bir hormon uyandırma servisimiz vardır. Sağlıklı insanda sabah saat 07:00'lerde salınır.
                            </p>
                            <ul>
                                <li>Ancak ağır depresyon ve <Link href="/hizmetler/anksiyete">Anksiyete hastasında</Link> bu hormon yapısı
                                    felç edilir; zihin 03:00 - 04:00 bandında kişiyi adeta <strong>Savaş uyanışı (korku)</strong> ile
                                    sıçratarak yataktan kalk diyebilir.</li>
                                <li>Zihin bir defa bu alarmını verdiyse; sistem bütün kapılarını açıp "Neredeydi o dertlerim? Şunları
                                    düşüneyim de kendime sabah 06:00'ya kadar eziyet edeyim" döngüsüne saniye saniye teslim edilir.</li>
                            </ul>

                            <h2 id="fiziksel-fizyolojik">Yaşlananların Gündelik Tesellisi ve Tehlikesi</h2>
                            <p>
                                İleri yetişkinlikteki 50-60 yaş bandındaki ebeveynler, bu erken sabah uyanışını sıklıkla
                                "Ben artık yaşlandım, yaşlılar az uyur" gibi kendi kendine "Tıbbi teselli (geçersiz olan)"
                                bir mazeretle üstünü örter.
                            </p>
                            <p>
                                Oysa, uyanıldığındaki o kalp ağrıları, anlamsızlık, "Sabah olsa da ne yapacağım sanki dünyada" feryadı,
                                o yaşlıların ruhlarındaki yıkımın en bariz habercisidir. Hele ki; eski gençlik yıllarındaki uykuyu
                                geri getireceğim diyerek yatakta inatlaşıp acı çeken bireyler, farkında olmadan
                                <Link href="/blog/uyku-bozukluklari-nedir">çok derin uyku bozukluğu girdaplarına</Link>
                                kendi elleriyle batmaktadır.
                            </p>

                            <h2 id="tedavi-psikiyatri">Bir Daha Dalar Mıyım? (Kaygı Döngüsü)</h2>
                            <p>
                                Hasta, uyanıp saate (04:00) baktığında ilk tepkisi; "Eyvah, yarın işte o kadar toplantım var ama yine
                                uyanık kaldım, beynim çöktü" şeklinde çok haklı bir bedensel feryatlardır. Bu panikle beraber
                                vücuduna zaten ekstra bir <Link href="/hizmetler/panik-atak">panik (kaygı sarmalı)</Link> pompalanır ve
                                o "uyuyan" beyni "uykusuz" tutan tek gerçek; bu uykusuzluğu dert ederek kendisini "zorlayan" hastanın ta
                                kendisi haline gelir.
                            </p>

                            <h2 id="eryaman-sureci">Çözümün Asıl Anahtarı: O Tavanı Değil, Yüzleşmeyi Seçin</h2>
                            <p>
                                Eryaman’da <Link href="/hizmetler/uyku-bozukluklari">Uyku bozuklukları değerlendirme (psikiyatrist) sürecimiz</Link>
                                kapsamında (Uzm. Dr. Abdullah Maraş eşliğinde),
                                hastalara sadece reçete veya bitki çayı ile "geri sızlamaları" değil, asıl meselenin uykunun uyanması
                                değil, "beyninin içindeki yangının (ve korkunun)" tespit edilip de söndürülmesi gerektiği (Kişiden
                                kişiye değişebilir seyirlerle) birebir tahlil ve tedavi formülüyle ilerletilmektedir.
                            </p>

                            <p>
                                Eğer siz de gününüzün en sessiz (rahatlanılacak) bölümü olan o saatleri, tavana bakarak
                                "Keder ve anlamsızlık okyanusunda" geçiriyorsanız; derhal klinik bir adım atmalı, uyku
                                nörobiyolojisinin ve psikiyatrisinin uzman elinde çözüme ulaşmasını sağlamalısınız. Yetişkin (adult) değerlendirme zeminindeki o uykunun eski
                                tatlı döngüsü; kendinize ve zihninizin tedavi/psikiyatrik görüşme ile regülasyonuna borçlu
                                olduğunuz ilk mirastır.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Klinik Uyarısı</strong>
                                Belirtilen durumlar yetişkin tıp disiplini (psikiyatri) nezdinde kronik "Terminal" (sonlandırıcı) uyku kapanışı (majör belirtidir). Sırf oda havasız, ortam sıcak/soğuk diye uyandığını sanarak geçiştiren ve yıllarca kendi
                                hayatına (%100 başarı vaadeden tık tuzaklarıyla) zindan inşa eden hastalara "birebir poliklinik muayenesi ve tıp" esastır. Hekim değerlendirmesi olmadan hiçbir takviye tıp veya test tek başına bir teşhis koymaz, önerilmez.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <p>Sizi saat 04.00'te kaldırıp hayatın bütün anlamsız yükleriyle yüzleştiren o uykusuz saatlerin, gerçek medikal ve psikolojik köküne kliniğimizle erişim kurun.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Ruh Sağlığı (Randevu) Masası →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Karanlıkta Yalnız Değilsiniz</h3>
                                <p>Sabaha kadar uzanan o azaplı zihin acısı; Ankara randevu rotanızla sonlanabilir.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Klinik Üzerinden Alınız</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>Okumaya Devam Edin</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/blog/uyku-bozukluklari-nedir">İnsomnia Tam Olarak Neden Başlar?</Link></li>
                                    <li><Link href="/blog/uyku-hijyeni-nasil-saglanir">Yatağınızı Yanlış Mı Kodluyorsunuz?</Link></li>
                                    <li><Link href="/hizmetler/depresyon">Majör Çökkünlük Tespiti Neler?</Link></li>
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
