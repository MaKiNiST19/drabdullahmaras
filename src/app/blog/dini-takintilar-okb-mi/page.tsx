import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Dini Takıntılar OKB midir? Dini Vesvese Nedir? | Uzm. Dr. Abdullah Maraş',
    description:
        'İbadet ederken akla gelen küfür ve günah düşünceleri (dini takıntı / vesvese) bir OKB midir? Ankara Eryaman yetişkin takıntı (OKB) değerlendirme ve süreci.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/dini-takintilar-okb-mi' },
    openGraph: {
        title: 'Dini Takıntılar ve İbadette İstenmeyen Düşünceler OKB mi?',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Namaz kılarken / ibadet ederken aklıma gelen kötü kelimeler günah mıdır?',
        answer: 'Klinik açıdan bu "istenmeyen, irade dışı" düşen kelimelerin tamamı bir hastalıktan (OKB / Takıntılar) kaynaklıdır. Yargılanacak ya da suçluluk duyulacak eylemler değil, tedavi veya psikiyatrik yönetimi gereken biyolojik amigdala şoklarıdır.',
    },
    {
        question: 'Dini değerlerimi kaybediyor muyum, aklımdan gitmeyen saygısız düşünceler neden durmuyor?',
        answer: 'OKB, kişinin "en değer verdiği, en hassas olduğu" konuları hedefler. Siz inançlı ve dindar oldukça beyniniz o inancı kaybetme korkusunu obsesyon (takıntı) haline getirebilir. Yani dini takıntı bir inanç zayıflığı değil, tam tersi inanca duyulan aşırı hassasiyetin OKB versiyonudur.',
    },
    {
        question: 'Tövbe ederek veya içimden belirli kelimeleri fısıldayarak bu vesvese geçer mi?',
        answer: 'Bu yapılanlar (örneğin tövbe kelimesini 5 kez tekrarlamak) "zihinsel kompulsiyondur". O an ruhu geçici rahatlatır, lakin beynin OKB alarmını güçlendirir. Siz tekrarladıkça, yeni bir takıntı gelme hızı artar. Bilimsel bir yapılandırma şarttır.',
    },
    {
        question: 'Dini OKB takıntıları biter mi / geçer mi?',
        answer: 'Belirtilerin seyri kişiden kişiye değişebilir. Zihinsel bu zorlayıcı prangalar kader değildir. Uzman denetiminde (Eryaman kliniğimizdeki gibi) yapılan klinik tedavilerin (ilaç vb.) o amigdalayı ehlileştirmesiyle eski "normal" ibadet dengesine dönebilme potansiyeli bulunur.',
    },
    {
        question: 'Böyle şeyler her OKB hastasında olur mu?',
        answer: 'Evet. İstenmeyen, ayıp, günah, küfür gibi tabu kelimeler yetişkin OKB tablolarının en sık lakin hastanın sır olarak 10 yıl saklamayı seçtiği (utancından dolayı) en can yakıcı yüzüdür.',
    },
];

export default function DiniTakintilarBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/okb">OKB</Link><span>/</span>
                        <span>Dini Takıntılar</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>OKB</span>
                        <time dateTime="2026-04-25">25 Nisan 2026</time>
                        <span>•</span><span>8 dk okuma</span>
                    </div>
                    <h1>Dini Takıntılar OKB midir? (İstenmeyen / Günah Düşünceleri)</h1>
                    <p className={styles.heroDesc}>
                        İbadete durduğunuzda veya Tanrı'dan bahsederken yakanıza yapışan, zihninize amansızca dolan
                        "o günah dolu", "küfür içeren" sözler...
                        Gerçek niyetinizin tam zıttı olan bu dini "vesveselerin" psikiyatrik takıntı (OKB) yüzünü inceliyoruz.
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
                                "Aklımdan kötü düşünceler gitmiyor... Namaz kılarken veya dua okurken beynime
                                tanrıya, dine veya kutsal değerlere karşı öylesine korkunç laflar üşüşüyor ki; kendimi
                                en günahkar veya inançsız insan gibi hissedip o düşünceyi yıkayıp atmak için kendime
                                eziyet ediyorum."
                            </p>
                            <p>
                                İşte toplumda (özellikle geleneksel kodları olan yapılanda) en saklanan, hastanın eşine, annesine
                                dahi utancından bahsedemediği ve tek başına ızdırap çektiği bu "ahlaklılık / günahkârlık kurgusu";
                                <Link href="/hizmetler/okb">Obsesif Kompulsif Bozukluğun (OKB)</Link> en gaddar ve belirgin
                                şekillerinden biri olan <strong>Dini Obsesyon (Scrupulosity)</strong> tablosudur.
                            </p>

                            <h2>1. "Aklımdaki Düşünceler Gerçek Ben Miyim?"</h2>
                            <p>
                                Asla. Bir bireyin OKB beyni; sıradan bir korku mekanizmasından daha zekidir. Kişinin en zayıf
                                noktası (en değer verdiği şey) ne ise oradan saldırır. Eğer sizin için hayattaki en önemli direk
                                "temizlik" ise amigdala size kirlenme korkusu verir (<Link href="/blog/temizlik-takintisi">Temizlik Takıntısı</Link>).
                                Ancak eğer en hassas olduğunuz konu inanç ve dini değerler ise, beyin size
                                "Ya aniden dine söversen?" kaygısını zerk eder.
                            </p>
                            <p>
                                Aklınıza zorla giren (intrusive / istenmeyen) bu fikirler, <strong>gerçek sizi hiç yansıtmaz.
                                    Bilakis gerçek niyetinizin tam aksi olduğu için</strong> sizi korkutur ve üzer, panik
                                hissettirir. Dindar insanlarda en sık ve en ağır yaşanan
                                <Link href="/blog/okb-belirtileri">OKB belirtileri grubundadır</Link>.
                            </p>

                            <h2>2. "Vesvese"nin Tıbbi (Nöropsikiyatrik) Adı: Zihinsel Kompulsiyon</h2>
                            <p>
                                Halk ağzında "Vesvese" olarak tanımlanarak maneviyat eksikliğine atfedilen bu durum, aslında
                                sinir sistemindeki elektriğin (amigdala bozukluğunun) organik yansımasıdır. Düşünce (obsesyon)
                                akla gelir gelmez hastayı derin bir suçluluk kaplar: "Eyvah, ben dinden mi çıktım?"
                            </p>
                            <p>
                                Bunun üzerine beynin yarattığı bu ateşli yanmayı (anksiyete) yatıştırmak için
                                <strong>zihinsel kompulsiyon</strong> yapmaya başlar:
                            </p>
                            <ul>
                                <li>İçinden defalarca "Haşa" veya "Tövbe" diyerek o kötü kelimenin günahını silmeye / dengelemeye çalışır.</li>
                                <li>Abdestini "Acaba yanlış mı aldım" diyerek 45 dakikada, suyu defalarca baştan açarak alır.</li>
                                <li>Aynı rekatı "Araya o şeytani düşünce girdi ibadetim yandı" diyerek günde 15 kez tekrarlar. Fakat yine
                                    <Link href="/hizmetler/anksiyete">kaygı sarmalından</Link> ve şüpheden kurtulamaz.</li>
                            </ul>

                            <h2>3. Neden Direndikçe Daha Çok Gelir?</h2>
                            <p>
                                Düşüncelerin yapısı "Kaçış" eylemine (zihnin o düşünceyi düşünmemeye zorlanmasına) karşı ters teper.
                                Siz "Sakın aklıma yaratıcıya karşı şöyle şöyle bir şey gelmesin" dediğiniz anda; beyne
                                "Bu kelime benim için çok tehlikeli, buna odaklan" mesajı verirsiniz. Ve paradoksal biçimde, en
                                çok korktuğunuz o cümle durmaksızın zihninizde dönmeye başlar. Bunu "kendi başınıza yenememek" inanç
                                zayıflığı değil, hastalıklı bedeninize tek başınıza sözünüzü geçirememenizdir.
                            </p>

                            <h2>4. "Ahlaki Kurallar İçinde Yıpranıp Çökmek" (Depresyon)</h2>
                            <p>
                                Çoğu dindar (ya da iyi bir vatandaş) profili, bu takıntıları kimseye duyuramadan kendi kalbinde
                                yaşayıp eridiği için ciddi <Link href="/hizmetler/depresyon">çökkünlük (depresif tablo)</Link>
                                inşa eder. İbadet artık ona bir huzur mekanizması değil; bir terleme, anksiyete, ritüeli defalarca
                                tekrarlama eziyeti sunduğu için ("<Link href="/blog/okb-gunluk-hayati-nasil-etkiler">ibadeti veya sosyal
                                    ibadetgahları tamamen terk etmeye</Link>") sürüklenir.
                            </p>

                            <h2>Eryaman Psikiyatri Değerlendirmesi: Suçluluk Düşüncelerinden Arınmak</h2>
                            <p>
                                "O günahkar / ayıp düşüncelere" kulak vermeyi sonlandırmak ("Acaba falan oldu mu" diye ritüel
                                tekrarlamayı bırakmak); bireysel inancınızı terk etmek demek değildir. Bu beyninizin size oynadığı
                                bir hastalık formudur ve adının konması gerekir.
                            </p>
                            <p>
                                Ankara Eryaman'daki (Altay Mh.) Uzm. Dr. Abdullah Maraş; Etimesgut ve Batıkent lokasyonlarında, evde
                                sessizce bu utanç ağırlığını taşıyan yetişkin bireylerle özel "Dini OKB / Obsesyonlar" konusunu
                                bireysel konsültasyonda ele alır. Hekim nezdindeki profesyonel bir yaklaşım ve (gerekli görülürse
                                farmakolojik izleme), bu kimyasal sinyali susturabilmek adına yetişkinlere makul, rahatlatıcı ve yargısız
                                bir tıbbi psikiyatrik değerlendirme zemini sunmaktadır. Gidişatı ve başarı hızı, kişisel döngünüze göre
                                değişebilir olsa bile başlamadan yol alınamaz.
                            </p>


                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Yetişkin Sağlığı Bilgilendirme Notu</strong>
                                Bu sayfa (ve içindeki telkinler) dinsel fetva niteliği değil, tıbbın ve psikiyatrinin (tıp etiğinin)
                                OKB hastalıkları hakkındaki "beynin yanlış algı çalışması" klinik bilgisidir. Kişilerin tedavi veya ilaç, klinik görüşme, iyileşme süreleri garantili ve mutlak (kesin %100 süreçler) olarak sunulmaz; tıbbiyede
                                uzman/hekim ilişkisi sürecinde her hastada değişkendir.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <h3>Ruhunuzdaki Utanca Son Vermelisiniz</h3>
                                <p>Eryaman kliniğimize başvurarak yetişkinlerin sık yaşadığı bu düşüncelerin "sizin suçunuz olmadığını" uzman hekimle görüşüp teyidini (değerlendirmesini) alabilirsiniz.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Randevu Menüsü ve İletişim →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Değerlendirme Randevusu</h3>
                                <p>O utanç hissinden kurtulmanız adına (Eryaman, Ankara)</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Psikiyatri Randevusu</Link>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4>Düşünce Zincirleri</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/blog/okb">OKB Bilgi Merkezi</Link></li>
                                    <li><Link href="/blog/okb-gunluk-hayati-nasil-etkiler">Zihnin Tüm Gün Bizi Esir Alması</Link></li>
                                    <li><Link href="/blog/zarar-verme-dusuncesi-okb-mi">Sevdiklerine Zarar Vermek</Link></li>
                                    <li><Link href="/hizmetler/anksiyete">Kaygıdan Tükenmişlik Modu</Link></li>
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
