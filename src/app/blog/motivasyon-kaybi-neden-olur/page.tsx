import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Motivasyon Kaybı Neden Olur? | İş ve Gündelik Yaşam İsteği',
    description:
        'Yetişkinlerde daha önce severek yapılan işlere karşı ortaya çıkan motivasyon kaybı, isteksizlik ve tükenmişlik (burnout) sendromunun psikiyatrik asıl nedenleri.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/motivasyon-kaybi-neden-olur' },
    openGraph: {
        title: 'Ödül Merkezinin İflası: Motivasyon Kaybı Neden Olur ve Yenilir?',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Motivasyon kaybı sadece işi sevmeme midir?',
        answer: 'Hayır; aslında o kaybolan his "mesleği veya işi yapamama" becerisi değil; aylarca yıllarca (takdirsiz) verilen o emeğin, karşılığını maddi-manevi (ödül) alamaması neticesinde zihnin eylemi "faydasız-gereksiz" olarak psikiyatrik sisteme kodlamasıdır (Anhedoni).',
    },
    {
        question: 'Sabahları neden kimseyle konuşmak bile istemiyorum?',
        answer: 'Tükenmişlik ve depresyon sınırındaki bir yetişkin, basit bir günaydın faslını bile (o devasa isteksizlik / anksiyete deryasında) taşınamayacak kadar manasız, anlamsız bir yük (sosyal çekilme) olarak yorumlar.',
    },
    {
        question: 'Geçici heves kayıplarından farkı nedir?',
        answer: 'Geçici olan; projede olan bir anlaşmazlığın iki gününüzü bozmasıdır. Patolojik (hastalık) olan ise, sizin çok sevdiğiniz hobinizden bile tat alamamaya başlayıp bir aya yayılmış olan "Ne yapsam değişmeyecek ki" o dev (pes etme) çökkünlüğü hissidir.',
    },
    {
        question: 'Tatile gitsem motivasyonum geri gelmez mi?',
        answer: 'Sizi "Çalışsan da boşa çalışıyorsun" düşüncesine iten şirket kültürünüzden ya da narsistik eşten bir hafta denize giriyorum diye uzaklaşmak; döndüğünüzde o sorun tekrar karşılayacağı için sorunu (%100 garantiyle aslen) silmez, zihin o zihindir.',
    },
    {
        question: 'Bu isteksizlik bana mı (genetik) özgüdür?',
        answer: 'Motivasyon kaybı asla bir tembellik, bir kimlik/karakter kusuru değildir. O, sizin zihinsel kortekste stresi yıllardır taşıyan sisteminizin "Ben yandım, artık ne yaparsa yap bana bir görev (yük) verme" feryadıdır.',
    },
];

export default function MotivasyonKaybiNelerdirBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/tukenmislik-sendromu">Tükenmişlik Kütüphanesi</Link><span>/</span>
                        <span>Motivasyon Yıkımı (Anhedoni)</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Psikiyatri, Burnout, Ödül Eksikliği</span>
                        <time dateTime="2026-06-18">18 Haziran 2026</time>
                        <span>•</span><span>5 dk okuma</span>
                    </div>
                    <h1>Motivasyon Kaybı Neden Olur? Biten Heveslerin Psikiyatrisi</h1>
                    <p className={styles.heroDesc}>
                        Günde on saat severek yaptığınız projelerin, eskiden övünerek bahsettiğiniz başarı hedeflerinin ansızın,
                        <strong>"Bugün de bir bitsin de umurumda değil"</strong> cümlesine (Korkunç bir isteksizlik şaftına) nasıl ve neden evrildiğini, zihinsel ödül döngüsünün nasıl iflas ettiğini çözümlüyoruz.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>(Ankara, Eryaman Klinik Psikiyatrist)</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            <h2 id="nedir-stres">Emek Verip, Hiçbir "Takdir" Alamamak</h2>
                            <p>
                                İnsan eyleme geçer. Bunu ya maaş için, ya terfi için ya da ailesinden bir "Aferin" takdiri
                                almak için (ödül) dopamin döngüsüyle kurar. Ancak siz ne kadar mesai yaparsanız yapın;
                                çalıştığınız işyerinde sizin başarınız bir başka yeteneksiz liyakatsiz bir ismin cebine terfi olarak konuyor, ya da
                                eşiniz sizin bütün o evin yükünü çekmenizi (vefakar olmanızı) kaba kuvvet ve eleştiriyle eziyorsa;
                                beyin şöyle çok basit ve kokuşmuş bir kod yazar:
                                <strong>"Ben neden bu kadar yoruluyorum ki? Zaten hiçbir şey değişmiyor (Başa Çıkamama/Öğrenilmiş Çaresizlik)."</strong>
                            </p>

                            <p>
                                İşte bu dakikadan sonra, sizin deparanızı durduran o asıl zihinsel pranga, yani <Link href="/blog/tukenmislik-sendromu-nedir">Tükenmişlik (Burnout) temelli motivasyon kaybı</Link> devreye girer.
                            </p>

                            <h2 id="dehb-baglantisi">Erişkin DEHB Zihninde Biten "Hevesler"</h2>
                            <p>
                                Klasik mutsuzlukların haricinde, özellikle <Link href="/hizmetler/eriskin-dehb">Erişkin DEHB hastalarında
                                    (Dikkat düzensizliği, erteleme alışkanlıklarında)</Link> baştan aşırı bir "yenilik"
                                (Heyecan) isteğiyle başlayan her iş 2 gün sonra büyük bir motivasyon çukurunda can verir.
                            </p>
                            <ul>
                                <li>Odak sürekli kaydığı için projeler darmadağın olur. O kadar çok iş eksik kalır ki; oluşan o dağınıklık (Bilişsel Yük) hastayı ezer ve sonucunda "Yapamayacağım zaten vazgeçiyorum" diyerek (motivasyon) fişini çektirir. Bu durum tamamen klinik bir tablodur.</li>
                            </ul>

                            <h2 id="ikincil-bozukluk">Depresyon Maskesi Olarak İsteksizlik (Anhedoni)</h2>
                            <p>
                                İnsan sadece işte değil; önceden gidip gitar çalmaktan zevk alır, arkadaşıyla maç izlemeye koşa koşa
                                giderdi. Lakin şu an telefonu çaldığında arkadaşlarına dahi <Link href="/blog/surekli-yorgun-hissetmek-psikolojik-mi">sadece bitmek bilmeyen o ağır yorgunluğu hissederek "Gidemem"</Link> diyorsa; orada artık sadece tükenmişlik değil, aynı zamanda
                                zevk alamama hastalığı dediğimiz <Link href="/hizmetler/depresyon">Major Çökkünlük / Depresif tablonun (Anhedonisi)</Link> başlaması durumu kuvvetle muhtemeldir. (Ruhun hayatla tüm damarları kurumaktadır).
                            </p>

                            <h2 id="zihinsel-donma">Korkudan (Anksiyeteden) Donup Kalmak</h2>
                            <p>
                                Bazı zihinler "hata yapmaktan" öylesine tiksinir ki, ya "mükemmel" olmalıyım (Mükemmeliyetçilik) ya da
                                "hiç ellememeliyim" diyerek kendi kendini <Link href="/hizmetler/anksiyete">Anksiyetenin o felç eden
                                    panik ve evham döngüsüne kitler.</Link> Yapacağı o en küçük bir işten dahi (Aman müdür şimdi yine bana bağıracak) diyerek sürekli kaygı üreten organizma, eylemden kaçarak kendini motivasyonsuz gibi ambalajlar. Oysa altındaki asıl gerçek, eylem anındaki korkudan / başarısızlık ihtimalinden donup kalma durumudur.
                            </p>

                            <h2 id="psikiyatrist">Klinik Olarak Nasıl Onarılacak (Eryaman Planlaması)?</h2>
                            <p>
                                Arkadaş tesellileri ya da "Haydi başarabilirsin, şöyle güçlüsün" tarzı boş ve popülist narsistik sloganlar,
                                dopamin sistemini darmadağın eden ve "ümidini kesmiş (Tükenmiş)" bir beyni asla sıfırlayamaz. <Link href="/hizmetler/tukenmislik-sendromu">Ankara Eryaman tükenmişlik değerlendirme sürecimizle (Uzm. Dr. Abdullah Maraş)</Link> birlikte, o zihnin neden o
                                motivasyonu bir "boşa verilmiş kürek (işe yaramaz yük)" olarak okuduğunun derinindeki klinik anıları ve (anksiyete/DEHB/depresif) kilitlerini teşhis edilip, farmakolojik ve terapatik/bilişsel bir yapıda "Bireysel (yetişkine özgü değerlendirmeler boyutunda)" masaya yatırılıp; hayatla olan o körelmiş bağlar tekrar regüle ettirilmelidir. Şiddet kişiden kişiye değişebilir oluşunun tek çözüm garantisi uzmanlıktır.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Klinik Uyarısı</strong>
                                Belirtilen durumlar (Burnout/Motivasyon Yıkımı, Anhedoni) psikiyatrik semptomlardır. Bunları sıradan bir pazartesi tembelliği
                                (can sıkan sıradan şeyler) gibi görerek kendinize sahte etiketler ve internetten bulunan ("%100 hemen bu sorunu halledin") diyen hap çözümleri asıl (uzman/doktor) tıp dünyasının analizlerinin alternatifi değildir. Kesin ve güvenli rota hekimin vizyonudur.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <p>Her gün sevdiğiniz tüm şeylerin (kariyeriniz dahil) koca bir angaryaya dönüştüğü o kaygılı kuyudan; psikiyatristin uzman analiziyle tırmanın ve heveslerinize yeniden inanın.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Kaybolan Odağını / Motivasyonunu Düzenle →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Motivasyonunuz Ölmedi</h3>
                                <p>Sadece omuzlayan beyniniz o yükleri reddediyor, tahlille (Ankara, Eryaman) bunu düzenleyin.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Doktor Değerlendirmesi Çözümü</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>İçerikteki Sendrom Ağı</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/blog/tukenmislik-sendromu-belirtileri-nelerdir">Burnout Olduğumu Nasıl Hissederim?</Link></li>
                                    <li><Link href="/blog/ise-gitmek-istememe-hali">Pazartesi Günleri (Savaş Alanları)</Link></li>
                                    <li><Link href="/hizmetler/uyku-bozukluklari">Uyku Bozulursa Ne Neye Motive Olacağız?</Link></li>
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
