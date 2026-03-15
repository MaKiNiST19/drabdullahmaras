import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'İşe Gitmek İstememe Hali | İşten Soğuma ve Tükenmişlik',
    description:
        'Sabahları mide bulantısı ve çarpıntı ile uyanıp işe gitmekten nefret etme, iş yerinde mobbing ve kronik stresin yarattığı psikiyatrik direnç halleri.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/ise-gitmek-istememe-hali' },
    openGraph: {
        title: 'Bedeni Ele Geçiren İşe Gitme Fobisi: Sadece Tembellik Mi?',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'İşten soğuma hali normal mi?',
        answer: 'Şirkette yaşanan akut bir krizden dolayı üç beş gün sıkıntılı gitmek olağan bir süreçtir. Ancak iş yerinin adı anıldığı an kişi de "panik hali", "ellerde terleme", "kusma (öğürme) hissi" oluyorsa, olay soğumayı geçmiş, bedenin o ortama karşı (Travmatik stres / Burnout) alerjisidir.',
    },
    {
        question: 'İşe giderken neden kalbim sıkışır?',
        answer: 'Beyin, o çalışma ortamını (oradaki yöneticileri veya sonsuz iş yükünü) evrimsel bir amigdala (korku) filtresiyle tarar. "Orada ezileceksin" diyen zihin, kişiyi korumak! için bedene yoğun bir şekilde adrenalin yükleyip adeta "oraya girersen ölürsün" alarmını kalple vurdurur.',
    },
    {
        question: 'İşe sadece para için gitmek işkence midir?',
        answer: 'Ödül sistemini en çok bozan durumdur. Paranın yetmediği veya paranın tek (savunulacak) sığınak olduğu yapılarda "ruhsal değer, iş tatmini ve aidiyat" yoksa, yetişkinlerin bir makine gibi 10 sene boyunca duygusuzlaşarak o çarkta çalışması (Duyarsızlaşma) beyin için çok acımtıraktır.',
    },
    {
        question: 'Pazartesi sendromuyla farkı nedir?',
        answer: 'Pazartesi sendromu genelde "pazar akşamı" başlar, salı günü geçer. Ancak "Tükenmişlik" ya da iş (mobbing) depresyonunda kişi, salı, çarşamba demeden (kronik) saat kavramı olmaksızın, uyandığı/kalktığı her salise o cenderenin (işkencenin) umutsuz izlerini taşır.',
    },
    {
        question: 'İstifa etmek tek çare midir?',
        answer: 'Olay her zaman istifa değildir. Bazen asıl sorun "Hayır diyememe", "Her göreve koşma veya hata yapmaktan ölümüne korkma" gibi iş yeri patolojileridir (İçsel mükemmeliyetçilik). İstifa da etse kişi o (Anksiyeteyi/Özgüvensizliği) diğer şirkete yine taşıyacaktır. Temel çözüm birebir kliniğin (anksiyete tamirinin) sonucunda belirir.',
    },
];

export default function IseGitmekIstememeBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/tukenmislik-sendromu">Tükenmişlik</Link><span>/</span>
                        <span>İşe Gitmeme (Fobisi)</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Psikiyatri, Burnout, Somatizasyon</span>
                        <time dateTime="2026-06-12">12 Haziran 2026</time>
                        <span>•</span><span>5 dk okuma</span>
                    </div>
                    <h1>İşe Gitmek İstememe Hali: Tembellik Değil, Ruhsal İflas</h1>
                    <p className={styles.heroDesc}>
                        Alarmın çalmasıyla birlikte bedenin buz kesmesi, midenin bulanması ve
                        "Allahım bugün de gitmesem ne olur" feryadıyla başlayan sabahların aslında yetişkin insanın;
                        <strong>şirket / meslek ortamına </strong> olan derinlikli (tükenmişlik / burnout) anksiyolojik tepkilerini (isyanını) işliyoruz.
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

                            <h2 id="nedir-stres">Midenin O İlk Alarmı ("Oraya Gitmek İstemiyorum") </h2>
                            <p>
                                İnsan vücudu stresi akılla yenebileceğini sandığı kadar (kibirli) olsa da; beden yalan söylemez. Dış çevresinden
                                <strong>"Ne var herkes çalışıyor şükret işin var"</strong> diye çok yersiz bir ambalajla bastırılan yetişkin kişi;
                                pazar akşamları terleyerek, mide krampları içerisinde kıvranmasına asla bir "şımarıklık-tembellik" diyemez.
                            </p>

                            <p>
                                Olay sadece bedeninizin, beyninizin <strong>algıladığı ağır tehdide</strong> verdiği somatik (kusturan/ağrıtan) reflekslerdir.
                                <Link href="/blog/tukenmislik-sendromu-nedir">Tükenmişlik (Burnout) süreci</Link>, kişinin onca yıl mesaiye (sabahlattığı)
                                o ofisin artık kişiyi boğduğu, bir oksijensiz kafese (işyeri toksisitesine) dönüştüğü ilk andır. Hastanın beyni
                                ona "Dur, gitme! Orada ruhsal bütünlüğümüz her defasında saldırıya/işyüküne maruz kalıyor" ihtarı veriyordur.
                            </p>

                            <h2 id="ikincil-bozukluk">Değersizleştirme (Mobbing) ve Travmalar</h2>
                            <p>
                                Hiçbir insan sevildiği, katkı sağladığı veya aidiyat kurduğu mekandan kaçmaz. Oysa yıllarca çalışıp, bütün departmanların
                                işini yüklenip; sonunda hiç alakasız (ve yeteneksiz) birinin müdür olduğu o odalar artık
                                o çalışana "adaletsizliğin" putu olmuştur.
                                <br />
                                Sonrası çöküş (Brain Fog / Zihin felci). O masaya oturduğu an beynin tüm <Link href="/blog/motivasyon-kaybi-neden-olur">motivasyonu "Sıfır"a iner</Link>. Kişi sabahtan akşama dek ekrana sadece boş boş bakarak,
                                bitkinliğini (<Link href="/blog/surekli-yorgun-hissetmek-psikolojik-mi">psikolojik o yorgunluğu</Link>) evine, eşine dahi taşımaya ve yansıtmaya başlar.
                            </p>

                            <h2 id="zihinsel-donma">Korkudan (Anksiyeteden) İşi Büyütmek</h2>
                            <p>
                                Bir diğer sebep ortam veya patronlar değildir, çalışanın kendi "korku kalesidir". <Link href="/hizmetler/anksiyete">Anksiyetesine (hata yapma/rezil olma korkusuna)</Link>
                                yenik olan kişi; patronundan gelen ufacık bir düzeltme talebini bile "Eyvah kovulacağız, ben rezil biriyim" diyerek (içsel) büyütür.
                                O odaya/o sunuma her gidişi, kurbanlık bir koyun misali tir tir titreyerek (elleri terleyerek) olur ki; elbette hiç kimse
                                böyle bir giyotine (sabah işe) her gün gönül rahatlığıyla yürüyerek gidemez. Sınırsız evham kişiyi dondurmuştur.
                            </p>

                            <h2 id="depresif-kapanis">"Her Şeyin Anlamsızlaşması"</h2>
                            <p>
                                Bu korku ve tükenmişlik aşaması vaktinde klinik/psikiyatrik olarak ele alınmazsa kişi kendini "Ben neden varım ki zaten?" dipsiz
                                kuyusuna yuvarlayarak, işi gücü ve sosyalliği geçtik; <Link href="/hizmetler/depresyon">Major Depresyonun</Link> sarmalındaki
                                tamamen zevk alamama (Anhedoni) felcine bağlar. (Sabah uyanınca işin de hayatın da bir değerinin kalmadığı, yatakta sızıp ölümü bekleme evresi). Yıllarca <Link href="/blog/asiri-uyuma-hipersomnia-nedir">15 saat aşırı uykulardan (hipersomniadan)</Link> kurtulamaz.
                            </p>

                            <h2 id="psikiyatrist">Nasıl Kurtulunur? Klinik Otoritenin Rolü! (Eryaman Modeli)</h2>
                            <p>
                                Bu devasa yıkımın çözümü tek günde o "işi bırakıp, evde üç ay deniz tatiline menfaatsiz" uzanmak değildir. Çözüm bireyde o "Tükenmişliği ve tahammülsüzlüğü" başlatan
                                sınır ihlallerini (insanlara hayır diyememeyi, "Ben" özgüven çekirdeğini),
                                <Link href="/hizmetler/tukenmislik-sendromu">Ankara Eryaman tükenmişlik değerlendirme (burnout süreci)</Link> masasında o uzman klinik psikiyatristin dokunuşlarıyla revize etmektir.
                            </p>
                            <p>
                                Bazen bir farmakolojik ajan (birebir planlanan görüşme rotasında), bazense o özgüven ve sınırı sağlayan terapötik tahlil;
                                sizi saniye saniye ölüme götüren o sendrom (ve bitirdiği o hayat sevincinizi) geri örmektedir.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Klinik Uyarısı</strong>
                                Belirtilen durumlar (İş yeri Fobisi / Burnout bedenselleşmesi - tükenmişlik sendromu) psikiyatrik semptomlardır. Arkadaş ve akraba sözleriyle "Herkes bunları yaşıyor katlanacaksın (%100 iş böyledir)" diye (tıbbın devre dışı bırakılıp) bastırılması, kişinin tamamen istifasına, yuvasının çökmesine (öfkeden / tahammülsüzlükten) sebebiyet verdiği için klinik görüşme rotası tıp gereği asıl tek geçerlidir.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <p>Sırf ekmek paranız (ve koca sorumluluklarınız) yüzünden sinir sisteminizin o kapıda / ofiste her gün çökertilmesine, midenizin asitle kavrulmasına dur demek için tıp kapısından uzmana (klinik hekime) bağlanın.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Burnout / İşe Gitmeme Değerlendirme Çözümü →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>İstifa Ettiğiniz Yer; Aslında Zihniniz!</h3>
                                <p>Size bu eziyeti yapan o kaygılı patronunuz da olabilir, "Sizin kendi evhamlı (Anksiyete) beyniniz de." Gelin çözelim.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Klinik Üzerinden Alınız</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>İçerikteki Zincirler</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/blog/tukenmislik-sendromu-nedir">Tükenmişliğin Ofis Boyutu (Kavramlar)</Link></li>
                                    <li><Link href="/blog/tukenmislik-sendromu-belirtileri-nelerdir">Fiziksel / Bedensel Alarm Verilmesi</Link></li>
                                    <li><Link href="/blog/motivasyon-kaybi-neden-olur">Övülmediğimiz Evrakların Psikolojisi</Link></li>
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
