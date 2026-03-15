import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'OKB Belirtileri Nelerdir? (Obsesyon ve Kompulsiyon) | Uzm. Dr. Abdullah Maraş',
    description:
        'OKB (Takıntı Hastalığı) belirtileri nelerdir? Hastalık bulaşması hissi, evden çıkamama, saçma düşüncelerin zihni kemirmesi ve Ankara Eryaman uzman psikiyatrist değerlendirmesi.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/okb-belirtileri' },
    openGraph: {
        title: 'Yetişkinlerde Obsesyon ve Kompulsif Bozukluk (OKB) Belirtileri',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Aklıma gelen her saçma düşünce OKB belirtisi midir?',
        answer: 'Hayır. Her insanın zihninden gün içinde binlerce alakasız (veya bazen ürkütücü) düşünce geçebilir. OKB belirtisi olan düşünce, geldiğinde size dehşet verici bir kaygı yaşatan ve onu zihninizden atmaya çalışırken (savunma ritüelleriyle) saatlerinizi tükettiğiniz saplantılardır.',
    },
    {
        question: 'İçimden birisinin hastalık kapacağı korkusunu sayarak engelleyebilir miyim?',
        answer: 'Bu durum çok tipik bir "zihinsel kompulsiyon" (takıntıyı sayıyla bertaraf etme) eylemidir. İçinizden belli sayılara (10’a kadar veya uğurlu sayılara) kadar ritmik olarak sayarak ailenizin ölmesini engelleyeceğinizi sanmak, organik hastalığın en büyük bilişsel yansımasıdır.',
    },
    {
        question: 'Neden "Ellerimi yıkamadan rahat edemiyorum" hissi hiç bitmiyor?',
        answer: 'Çünkü beynin tehlike uyarı merkezi alarmı kapatmayı reddeder. Siz ellerinizi defalarca ve asit/deterjan ile yıkasanız dahi, beynin aradığı şey "mantıksal bir temizlik" değil "duygusal olarak (kaygının bitmesi) rahatlamadır". Doyuma ulaşmayan o kaygı (anksiyete) hissi yüzünden eller yarılana dek ritüel tekrarlanır.',
    },
    {
        question: 'Eşimde simetri ve sıralama takıntısı var ama kendisi bununla övünüyor, o da OKB mi?',
        answer: 'Eğer kişi bu "aşırı düzen ve simetri" huyundan zevk alıyor veya "ben sadece titizim, bu doğru olan" deyip hayatından (zamanından ve kaygısından) ödün vermiyorsa bu bir OKB değil, "Obsesif Kompulsif Kişilik Özelliği" olabilir. Hastalığın (OKB) en büyük özelliği kişinin de bu davranıştan ızdırap çekmesi lakin kendini durduramamasıdır.',
    },
    {
        question: 'Ankara Eryaman’da OKB’nin türleri (belirtileri) nasıl değerlendirilir?',
        answer: 'Yetişkinlerde, Ankara Eryaman Uzm. Dr. Abdullah Maraş / Psikiyatri kliniğimizde uzman değerlendirmesi gerçekleştirilerek; şüphenin anksiyete veya OKB kökünden mi geldiği teşhislenir. Kliniğimizde sadece erişkin hastaların değerlendirmesi yapılır.',
    },
];

export default function OkbBelirtileriBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/okb">OKB</Link><span>/</span>
                        <span>Belirtiler</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>OKB</span>
                        <time dateTime="2026-04-02">2 Nisan 2026</time>
                        <span>•</span><span>8 dk okuma</span>
                    </div>
                    <h1>OKB Belirtileri Nelerdir? (Obsesyon - Kompulsiyon Döngüsü)</h1>
                    <p className={styles.heroDesc}>
                        Mantıksız olduğunu bile bile, zihninize batan iğneli bir oklu düşünceden kaçamamak...
                        Yetişkinlerde takıntıların (Obsesif Kompulsif Bozukluğun) en yaygın zihinsel
                        ve bedensel ritüel belirtilerini klinik yönleriyle inceliyoruz.
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
                                "Ellerimi yıkadım, biliyorum ancak o <em>pislik ve kir hissi</em> bana öyle geliyor
                                ki 10. kez lavaboya dönmeden oturamıyorum!" Çoğu kişinin kendi kendisine "Ben de
                                biraz titizim" dediği yerde kesilen o masum çizgi, OKB vakalarında hayatın tamamını
                                adeta kilidi kilitlenen tek bir eyleme mahkum kılar.
                            </p>

                            <h2>1. "Zihne İzinsiz Girenler": Obsesyonların Çeşitleri </h2>
                            <p>
                                Aslında OKB (Obsesif Kompulsif Bozukluk), halk dilindeki "Titizlik" hastalığının
                                ötesinde <Link href="/hizmetler/okb">beynin uyarı ve elektrik ağının</Link> yanlış alarmından ibarettir.
                                Kişi sokakta yürürken aklına aniden "Acaba çocuğuma araba mı çarpacak?" veya "Dokunduğum o kapı kulpunda AIDS
                                kan damlası var mıydı?" şeklinde mantıksız fikirler sıçrar. Obsesyonların en belirgin türleri:
                            </p>
                            <ul>
                                <li><strong>Kirlilik ve Hastalık Karıştı Bulantısı:</strong> Başkalarının salgılarından, çamurdan, radyasyon ya da kimyasaldan kendine veya sevdiklerine "mikrop bulaştıracağı" korkusu (Enjekte olan obsesyon).</li>
                                <li><strong>Şüphe ve Kuşku:</strong> "Kapıyı kilitledim mi?", "Ocak altı açık mıydı?", "O arabayı park ederken yanlışlıkla arkamdaki yayayı ezip kaçmış / fark etmemiş olabilir miyim?"</li>
                                <li><strong>Simetri veya Kesinlik Eğilimi:</strong> Etraftaki eşyaların "doğru" veya tam hizasında olmaması halinde içsel bir felaket patlayacağı hissi.</li>
                            </ul>

                            <h2>2. "Sıvışma ve Rahatlatma": Kompulsiyonlar</h2>
                            <p>
                                Beliren o şüphe düşüncesi kişide öyle kuvvetli bir <Link href="/hizmetler/anksiyete">Anksiyete
                                    (kaygı ve ecel terleri)</Link> yapar ki, beyin "Sakinleşmek ve felaketi engellemek istiyorsan
                                hemen şu ritüeli yap!" komutunu verir. İşte OKB'yi bir "hastalık" (bozukluk) kılan, kişinin saatlerini çalan
                                o eylemler dizisi:
                            </p>
                            <ul>
                                <li><strong>Yıkama / Temizleme:</strong> Kollarını dirseklerine dek aşındırarak saatlerce keselemek. Eve gelen misafirlerin ardından tüm evi çamaşır suyu / asitlerle yıkayıp yıpratmak.</li>
                                <li><strong>Sürekli Kontrol Etmek:</strong> "Acaba kapıyı kilitledim mi diye tekrar tekrar bakıyorum" sözünü söyleyen hasta bazen asansörden 8 kere dönerek işe daima geç kalmaktadır.</li>
                                <li><strong>Düzeltmek ve Sıralamak:</strong> Kıyafetleri, masadaki dosyaları hep aynı yöne bakacak gibi hizalamazsalar işe başlayamamak.</li>
                                <li><strong>Güvence İsteme (Sorma):</strong> Eşine veya annesine sürekli "Ellerim temiz değil mi, yıkadım gördün dimi?", "Fişi çekmiştim sence de çektim değil mi?" diye sorarak onay (rahatlama) almak.</li>
                            </ul>

                            <h2>3. Görünmeyen Belirtiler: Zihinsel Kompulsiyonlar</h2>
                            <p>
                                Hasta dışarıdan saatlerce el yıkamaz veya kapı kilidine bakmaz ama yerinde kaskatı otururken zihninde
                                devasa yorgun bir efor döner. Örneğin aklından "kötü/günah bir kelime" geçtiyse, o kelimenin
                                şerrini silmek adına içinden sessizce 5 defa sevdiği bir ayeti tekrar eder. Dualar dahi artık ibadet
                                maksadıyla değil, "OKB'nin felaket hissini bastırmak" amacıyla sayıyla (kompulsiyon) yapılarak tüketilir.
                            </p>

                            <h2>4. "İçsel Zarar Vermeler" ve İstenmeyen Düşünceler</h2>
                            <p>
                                Bazı vakalarda kişi (hiçbir eylem niyeti yokken) balkondan bakarken aklına aniden "Ya arkamdaki dostumu
                                / bebeğimi aniden aşağı atarsam?" korkunçluğu gelir ve dehşete düşer. (Bu eyleme hiçbir zaman geçilmez, zira
                                asıl sorun beynin "Bunu yaparsam ya?" diyip paniğe girmesidir). Veya kutsal değerlere karşı ("Allah'a küfür gibi")
                                <Link href="/blog/dini-takintilar-okb-mi">dini takıntılı düşünceler</Link> aklına damlar.
                                Tüm bu fikirlerin tek ortak paydası, "hastaya zerre ait olmayan ve tam zıttı karakterini tehdit eden" mantıksız uyarılardır.
                            </p>

                            <h2>5. Çökkünlüğe Sürüklemesi ve Depresyon İlişkisi</h2>
                            <p>
                                OKB beyni o kadar yorar, kişiyi kapı kollarından dahi kaçacak kadar izole eder ki; beyninin ve iradesinin
                                kendi sözünü dinlememesi hastayı çok ağır bir <Link href="/hizmetler/depresyon">çökkünlük (depresyon) tablosuna</Link>
                                gömebilir. Suçluluk hissi, tükenmişlik ve utanç nedeniyle bu belirtiler (özellikle zarar verme
                                kompulsiyonları) yıllarca doktora söylenmeden sinesine çekilir.
                            </p>

                            <h2>Ankara Eryaman’da OKB Belirtilerini Yönetme Adımları</h2>
                            <p>
                                Hastalar takıntı ve tekrar davranış döngüsünü iradeleri ("sadece yapmayacağım diyerek başarabilme") gücüyle
                                kıramazlar çünkü biyolojik alarm sistemi çalışmaktadır. Eğer Eryaman, Batıkent veya Etimesgut sınırlarında
                                ikametseniz; bu belirtileri tek başınıza yenmenin çaresizliğini yaşamak yerine yetişkinlerdeki OKB'yi değerlendiren
                                psikiyatrik uzmanlık sürecine Uzm. Dr. Abdullah Maraş / Ruh Sağlığı Kliniği'nde ulaşabilirsiniz.
                            </p>
                            <p>
                                Yapılacak özel <strong>bireysel uzman değerlendirmesinde</strong>; hastalık düzeyinin ağırlığı,
                                yaşamınızdan çaldığı enerji ("işe geç kalma, banyodan 2 saat çıkamama") analizi saptanır
                                ve tıbbi literatüre dayalı kişiselleştirilmiş (psikofarmakoterapi / ilaç veya psiko-destek)
                                bir yön haritası sunulur. Tablonun seyri, klinik desteğin ciddiyeti ile kişiden kişiye değişebilmektedir.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Yetişkin Sağlığı Bilgilendirme Notu</strong>
                                Metin okuru; bir "tıbbi iyileşme" teşhisi vadedilmeden genel bilgilendirilmektedir. Takıntıların adının konulabilmesi hastanelerde/kliniklerde
                                yalnızca psikiyatri tıp doktorları ("kesin çözüm, tam garanti verilmemesi" ilkesiyle) tarafından icra edilir. Kliniğimizde
                                16 yaş altı çocuk danışan gruplarına hizmet verilmemekte olup, 16 yaş ve üzeri ergenlere yönelik psikiyatrik değerlendirme verilmektedir.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <h3>O Sesi Tek Başına Susturmak Zorunda Değilsiniz</h3>
                                <p>Eryaman kliniğimizdeki psikiyatrist değerlendirme seansıyla bu yorucu döngüyü nasıl kıracağınızı uzmanla (randevu alarak) masaya yatırın.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Randevu Menüsü →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Psikiyatrist Ön Görüşmesi</h3>
                                <p>Zihninizi hapseden ritüellerden arınmak için klinik süreci (Ankara) başlatın.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Değerlendirme</Link>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4>Detaylı İlişki Kümeleri</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/hizmetler/okb">Takıntı (OKB) Ana Değerlendirme</Link></li>
                                    <li><Link href="/hizmetler/anksiyete">Anksiyete Hastalıkları</Link></li>
                                    <li><Link href="/blog/temizlik-takintisi">Bulaş / Temizlik Korkuları</Link></li>
                                    <li><Link href="/blog/okb-gecer-mi">OKB Geçer mi?</Link></li>
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
