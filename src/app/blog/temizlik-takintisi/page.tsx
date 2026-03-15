import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Temizlik Takıntısı (Kirlenme Obsesyonu) Nedir? | Uzm. Dr. Abdullah Maraş',
    description:
        'Temizlik takıntısı nedir? Saatlerce el yıkamak, kapıya dokunamamak ve mikroptan aşırı korkmak. Ankara Eryaman OKB temizlik tedavisi psikiyatrik değerlendirme süreci.',
    alternates: { canonical: 'https://drabdullahmaras.com/blog/temizlik-takintisi' },
    openGraph: {
        title: 'Temizlik Takıntısı (Mizofobi) ve Aşırı Titizlik Farkı',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Temizlik takıntısı sadece dışarıdaki pis (kir/mikrop) olan şeylere mi duyulur?',
        answer: 'Hayır, hastalar bazen tamamen temiz görünen, yıkanmış eşyaları bile "henüz dezenfekte olmadı" diyerek defalarca kaynatabilirler; zira beynin takıldığı yer objenin kiri değil, zihninde kurguladığı "hastalık bulaşması" şüphesidir.',
    },
    {
        question: 'Eşim misafir gittikten sonra koltukları çamaşır suyuyla silmeden oturmuyor, OKB olabilir mi?',
        answer: 'Eğer bu durum onun da zamanını ciddi şekilde çalıyor, bunu yapmadığında derin bir bunaltı çekip kriz geçiriyorsa ve her misafir gelişini evden izole olma şeklinde engelliyorsa (toplumsal işlev bozukluğu), profesyonel OKB değerlendirmesi düşünülmelidir.',
    },
    {
        question: 'Ellerim yıkamaktan yara bere oldu ama duramıyorum, bu hastalık geçer mi?',
        answer: 'Bu durum kişinin karakteri (titizliği) değil, nöropsikiyatrik beynin "yanlış alarmıdır". Takıntının seyri kişiden kişiye değişebilir; uzman takibi (ilaç ve terapi bütünleşmesi) ile ellerdeki o zorlantı dürtüsü makul ve yaşanılabilir bir şekle yapılandırılabilmektedir.',
    },
    {
        question: 'Dokunduğum yerden cinsel bir hastalık kapar mıyım hissi temizlik takıntısı mıdır?',
        answer: 'Kesinlikle. Tuvalet kapağından, havludan hatta rüzgardan "hastalık ya da HIV gibi" mantık dışı yollarla mikrop bulaşacağı obsesyonu da çok yaygın bir kontaminasyon (kirlenme) OKB belirtisidir.',
    },
    {
        question: 'Eryaman’da OKB temizlik takıntısını hangi doktora göstermeliyiz?',
        answer: 'Temizlik ve aşırı titizlik bir dermatoloji (deri) sorunu değil (ellerin aşınması sonuçtur), beynin amigdala temelli Ruh Sağlığı ve Hastalıkları (Psikiyatri) alanının klinik hastalığıdır. Ankara Eryaman’daki Uzm. Dr. Abdullah Maraş / Psikiyatri kliniğimizden durumla yüzleşmek ve değerlendirmek adına yardım alınabilir.',
    },
];

export default function TemizlikTakintisiBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/okb">OKB</Link><span>/</span>
                        <span>Temizlik Takıntısı</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>OKB</span>
                        <time dateTime="2026-04-10">10 Nisan 2026</time>
                        <span>•</span><span>8 dk okuma</span>
                    </div>
                    <h1>Temizlik Takıntısı (Mizofobi) Nedir? Kirlenme Obsesonu</h1>
                    <p className={styles.heroDesc}>
                        Kapı koluna peçeteyle dokunmak, misafirliğe gidildiğinde tuvaleti hiç kullanmamak, "o elden"
                        veya "o sandalyeden" amansızca hastalık kaparım korkusuyla saati ellerini yıkayarak harcamak...
                        Titizliği bir cehenneme eviren Temizlik Takıntısının zihin anatomisi.
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
                                "Ellerimi o kadar çok sabunladım ki derim çatlayıp kanıyor. Lakin yine de içimde
                                o 'Acaba tam temizlenmedi mi?' dürtüsü yankılanıyor. Çıldıracak gibi hissedip
                                yeniden lavaboya koşuyorum." Çoğu zaman halk ağzında <em>Aşırı Titizlik</em> diye şirin
                                gösterilen ancak gerçekte bireyin ruhunu bir hapishaneye tıkan o tablo;
                                <Link href="/hizmetler/okb">Obsesif Kompulsif Bozukluğun (OKB)</Link> en gözlemlenebilir
                                ve klasik şekli olan <strong>"Bulaş (Kirlenme) Obsesyonudur"</strong>.
                            </p>

                            <h2>1. Hastalık Sadece "Toz Ve Toprak" Değildir</h2>
                            <p>
                                Temizlik takıntısı (Mizofobi) bir evi bal dök yala yapma hevesinden ziyade; dışarıdan gelen
                                herhangi bir etkenin bedene girmesinden (kontaminasyon) duyulan ilkel ve aşırı dehşet hissidir.
                            </p>
                            <ul>
                                <li><strong>Mikrop/Virüs Korkusu:</strong> Bir başkasının dokunduğu otobüs demirinden, bir asansör düğmesinden kendisine AIDS, Hepatit gibi ölümcül bir organizmanın geçeceği fobisinden kaynaklı obsesyonlardır. Bazen radyasyon ya da "hasta kişilerin nefesi" bile omuzlara yapışmış bir toz gibi kurgulanır.</li>
                                <li><strong>"Aklımdaki izi geçiremiyorum":</strong> Hastalar nesnenin tertemiz veya sterilize edildiğini (%99) görseler bile, zihinlerindeki o %1'lik <Link href="/blog/okb-belirtileri">obsesyon (vesvese)</Link> şüphesi silinmediği sürece işleme baştan başlarlar.</li>
                            </ul>

                            <h2>2. Vücudun Alarmı (Anksiyetenin Baskısı)</h2>
                            <p>
                                Aslında kişi durumun çoğu zaman "ne denli saçma veya uydurmaca" olduğunun farkındadır. Mantıken, bir
                                peçeteye el atıldığında mikrop geçmediğini öğrenmiştir lakin <Link href="/hizmetler/anksiyete">Anksiyetesi (Biyolojik Amigdalası)</Link>
                                o denli güçlü elektrik şoklarıyla "Acil Elini Yıka!" tehdidinde bulunur ki; kişi bu dayanılmaz
                                daralmayı bitirmek ve <Link href="/hizmetler/panik-atak">panik yaşamamak
                                    için</Link> çaresizce ritüeli ("Kompulsiyonu") devreye sokar.
                            </p>

                            <h2>3. Yıkıcı Saatler: Kompulsiyon (Yıkama) Davranışı</h2>
                            <p>
                                Kirlenme ve şüpheyi geçirmek için gerçekleştirilen hareketlere kompulsiyon denir. En yaygınları şunlardır:
                            </p>
                            <ul>
                                <li><strong>Saatler Süren Duşlar:</strong> Belli sırayla (önce sol kol, sonra yüz) köpüklemek zorundadırlar. Sırayı unuttukları an "Başa dön!" sarmalı işler ve 2 saat duştan çıkılamaz. Vücut derisinde ciddi dermatolojik eksfoliasyonlar (yarıklar) yaşanır.</li>
                                <li><strong>Çamaşır Suyu ile Giyinik Geziler:</strong> Evin yerlerinin asitle, alkollerle durmaksızın veya misafir her ayağını kaldırdığında silinmesi. Dezenfektanların cildi zehirleyebileceğine de aldırmaksızın uygulanması.</li>
                                <li><strong>Kaçınma (Avoidance):</strong> Evden hiç çıkmamaya başlamak (nasıl olsa kirleneceğim), gelen dostlara dokunmamak, cüzdanını dahi poşetle tutmak birer fobik engel tablosudur.</li>
                            </ul>

                            <h2>4. "Sadece Kendisine Değil, Aileye Bulaştırma Korkusu"</h2>
                            <p>
                                "Ellerimi yıkamazsam ellediğim o asansör mikrobu eşimde veya yeni doğan bebeğimde ölümcül
                                bir hastalığa yol açacak" düşüncesi hastayı en çok vicdan azabıyla zehirler
                                (<Link href="/blog/zarar-verme-dusuncesi-okb-mi">zarar verme düşüncesinin varyantıyla eşlenik</Link>).
                                Bu utanç ve korkuyla birey, eşini de veya evde yaşayan diğer yetişkinleri de kendi kurallarına (eve girince şurada
                                soyun, çantanı buraya as, ellerini 3 kez sabunla) <strong>zorla uymaya ikna eder (partner zorlantısı)</strong>.
                                Zamanla aile içinde şiddetli kavgalar / boşanmalar kaçınılmaz hale gelebilmektedir.
                            </p>

                            <h2>5. Çökkün Yaşantı Modu (Depresyondaki Yeri)</h2>
                            <p>
                                Yıllarca bir mikroptan kaçacağım diye hayatının potansiyelini ellerini köpürtmeye adayan beynin zihinsel
                                pil gücü sığlaşır; hayattan, hobilerden koparak mutsuz bir <Link href="/hizmetler/depresyon">çökkünlük / yalnızlığa
                                    ve depresyona</Link> gömülür. Kişi evindeki temizlik takıntısı bataklığına hapsolup mesleğinden koptukça
                                derin bir değersizlik hissinin esiri olmaktadır.
                            </p>

                            <h2>Temizliğiniz Kontrolünüz Dışında Mı? Uzm. Başvurusu Süreci</h2>
                            <p>
                                Eğer evdeki sabun kokusu sizin huzurunuzu sağlamaktan çıkıp,
                                "Ellerimi yıkamadan rahat edemiyorum" adlı işkencenize dönüşüyorsa; durum tıp litaratüründe nöro-psikiyatrik
                                olarak saptanması gereken, biyolojik destek ya da terapi süreçleriyle zayıflatılabilecek uzman
                                destek sahasına (Ankara Eryaman) gelmiştir.
                            </p>
                            <p>
                                Eryaman'da (Altay Mh.) hizmetini yürüten kliniğimiz; sizlerin dışarıdaki
                                kapılara poşetle tutmadan da dokunabilmenizi hedefleyen ve asılsız kirlenme korteksinizi yatıştıran süreci (psikiyatrik
                                değerlendirmeyle) ele almaktadır. Birebir olarak Uzm. Dr. Abdullah Maraş aracılığıyla yetişkin OKB süreçlerinize klinik
                                bir isim ve güven tahsis edilir.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Tıbbi Sınır Yasal Uyarı</strong>
                                Salgınlar, obsesif kompulsif hastalığın "titizlikten ya da huy/karakter meselesinden" ziyade doğrudan kimyasal bir bozulmanın klinik adı olduğunu kanıtlamaktadır. Okuyana tavsiyemiz;
                                asla kendi öz iradenizi suçlayarak "Niye duramıyorum, niye başaramıyorum" diyip eziyet etmeyiniz (çünkü bu nöral bir alarmdır). "%100 Kesin ve kalıcı sökülür" cümleleri tıbbi bağlama uymaz
                                lakin hayat kalitesini mahveden bu durumun psikiyatri hekimliği süreçlerinizde anlamlandırılıp kontrolü mümkündür.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <h3>Hayatınızın Anahtarını Takıntılarınıza Bırakmayın</h3>
                                <p>Ankara Eryaman'da OKB Değerlendirme planı başlatarak; obsesyon ve kompulsiyonların yıktığı o köprüleri, klinik adımlarla yeniden irdeleyebilirsiniz.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg" style={{ marginTop: 'var(--space-4)' }}>
                                    Görüşme Talebi ve Randevu Menüsü →
                                </Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Değerlendirme Başvurusu</h3>
                                <p>Eryaman kliniğinde yetişkin takıntılarınız için psikiyatri randevusu (Ankara).</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Doktor Randevusu Al</Link>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4>Detaylı Hastalık Kayıtları</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/hizmetler/okb">OKB Değerlendirmeleri</Link></li>
                                    <li><Link href="/blog/okb-belirtileri">Obsesyon Döngüleri Nedir?</Link></li>
                                    <li><Link href="/blog/dini-takintilar-okb-mi">Dini Obsesyon Düşünceleri</Link></li>
                                    <li><Link href="/hizmetler/depresyon">Evden Çıkamayan İnsan Psikolojisi</Link></li>
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
