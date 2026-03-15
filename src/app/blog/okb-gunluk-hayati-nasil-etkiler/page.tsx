import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'OKB Günlük Hayatı Nasıl Etkiler? İş ve İlişkilerdeki Yıkım | Uzm. Dr. Abdullah Maraş',
    description:
        'Takıntılar (OKB) günlük yaşantıyı, mesai hayatını ve evlilik ilişkilerini nasıl etkiler? Sürekli bir şeyleri kontrol etmekten evden çıkamamak ve Ankara Eryaman klinik süreçleri.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/okb-gunluk-hayati-nasil-etkiler' },
    openGraph: {
        title: 'Obsesif Kompulsif Bozuklukların Günlük Hayattaki ve İş Hayatındaki Maskesi',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Neden sürekli işe geç kalıyorum, evden çıkmak neden saatlerimi alıyor?',
        answer: 'OKB bir "zaman hırsızı" dır. Kapıyı kilitlediğinizi 15 kez kontrol etmediğinizde (veya ayakkabılığınızdaki simetri aynı olmadığında) beyninizin "yanlış, eksik, felaket olacak" demesi yüzünden o ritüeli tekrar edersiniz. Bu kompulsiyon kısır döngüsü sizin işe ya da randevulara vaktinde varmanızı fiilen kilitler.',
    },
    {
        question: 'Eşim bana "Sen hastasın, benden de bunu istiyorsun" diyip bağırıyor, OKB evliliği bitirir mi?',
        answer: 'Eşler arası en ciddi krizlerden biri "ikincil OKB katılımıdır." Kirlilik takıntısında partnerinizi eve girmeden soymaya, yahut şüphe hissinizde defalarca sizle aynı ocağı kontrol etmesine onu da zorladığınızda tükenmişliğe yol açar.',
    },
    {
        question: 'İş yerindeki mükemmeliyetçiliğim faydalı değil mi, neden dosya yollayamıyorum?',
        answer: '"Asla hata yapmamalıyım" şeklindeki katılık çoğu zaman mesleki bir yetenek gibi algılanır ancak bir e-maili veya belgeyi "acaba yanlış onay verdiysem şirketi yakar mıyım/kovulur muyum" şüphesiyle saatlerce ekranda tutmak (zihinsel kontrol OKB’si), tam aksine iş verimliliğinizi sıfırlar.',
    },
    {
        question: 'OKB günlük hayattaki tüm hevesimi söküp beni depresyona itebilir mi?',
        answer: 'Evet. Sosyal izolasyon (başkasının bardağıyla / kapısıyla temas etmemek adına kahveye çıkmamak) ve tükenen biyolojik enerji, kişiyi kendi evine (ve odasına) bağlayarak derin bir yalnızlık hissiyle ikincil depresif çöküşe iter.',
    },
    {
        question: 'Eryaman’da hayatımı geri kazanmak için takıntılarımı hangi uzman değerlendirir?',
        answer: 'Ankara (Altay Mh.) Eryaman / Etimesgut güzergahındaki merkezimizde, bu yetişkinlik boyutu takıntı döngüleri (işlev kaybı yaratan kompulsiyonlar) Uzm. Dr. Abdullah Maraş (Psikiyatri/Ruh Sağlığı) tarafından birebir seanslarda ve klinik izlem süreciyle değerlendirilmektedir.',
    },
];

export default function OkbGunlukHayatBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/okb">OKB</Link><span>/</span>
                        <span>Günlük Hayat Etkileri</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>OKB</span>
                        <time dateTime="2026-05-15">15 Mayıs 2026</time>
                        <span>•</span><span>8 dk okuma</span>
                    </div>
                    <h1>OKB Günlük Hayatı Nasıl Etkiler? Zihnin Bizi Esir Alması</h1>
                    <p className={styles.heroDesc}>
                        Aklınızı kemiren o takıntıların "Sadece küçük bir titizlikten" ibaret
                        olmadığı noktadayız. Bir yetişkin olarak işinize odaklanamıyor, kapıdan geriye
                        10 kez dönerek çıkamıyor veya eşinizle "ellerini yine sabunla" kavgaları ediyorsanız;
                        OKB'nin hayat kalitenizi nasıl rehin aldığını saptamanız gerekir.
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
                                Obsesif Kompulsif Bozukluk (<Link href="/hizmetler/okb">OKB</Link>)
                                bireylerin "ben biraz dağınıklığı sevmiyorum" dediği bir karakter
                                gelişimi değil; bireyin uyanık olduğu dakikaların en basit süreçlerini dahi eziyete
                                çeviren, çok büyük bir yorgunluk ve enerji kaçağıdır. Çoğu hasta fiziksel tahlil için
                                dahiliyeci koltuğunda "bütün gün kılımı kıpırdatacak halim kalmıyor,
                                sürekli halsizim" dediğinde zihninde dönen <Link href="/blog/temizlik-takintisi">
                                    dev ritüellerden veya temizlik eforundan</Link> söz etmez.
                            </p>

                            <h2>1. "Zaman Hırsızı": Mesaiye Geç Kalmak</h2>
                            <p>
                                Evden çıkma eylemi normal insanda kapı açılıp kilitlenerek biter. Ancak
                                <Link href="/blog/surekli-kontrol-etme">kontrol takıntısına takılan (Checking OKB)</Link>
                                bir beyin yapısında:
                            </p>
                            <ul>
                                <li>Önce fişler, fırın, doğal gaz defalarca (ve hatta sesli şekilde "kapatıldı... evet") diyerek kontrol edilir.</li>
                                <li>Kapı kapatılır ama kilit tekrar çekilir, yetmez kişi tekrar asansörden geri döner ("Acaba zorlamadım da kilit dili sıyrıldıysa ev yanarsa?").</li>
                                <li>Tüm bu döngü, en sıradan sürece gün asgarisinde 1-2 saati katıksız bir <Link href="/hizmetler/anksiyete">beklenti
                                    kaygısı ve anksiyete atağı (soğuk ecel terleri)</Link> katarak empoze eder. Kişinin toplumda "güvenilmez,
                                    sürekli geciken biri" tablosuna oynaması kaçınılmazdır.</li>
                            </ul>

                            <h2>2. İş Hayatında ve Ofiste Hapsedici Etkisi (Mükemmeliyetçilik Tuzağı)</h2>
                            <p>
                                Sanılanın aksine OKB'nin bir dalı, dağınık masaları toplamaktan fazlasıdır. Beyin
                                "Hata yaparsam rezil olurum, bir felaket kopar" düşüncesi altında boğulur (Zarar Görme
                                Korkusu).
                            </p>
                            <ul>
                                <li>Bir imza atarken veya rapor iletirken 15 defa virgülünü, satır başını denetler.</li>
                                <li>Yöneticiye yollandığında, e-postadan defalarca çıktıktan sonra "Ya son anlık elim başka rapora çarptıysa" diyip "Giden Kutusundan" tekrar ve tekrar kontrol eder. İşi zihinsel teyitle onaylattırarak enerjisini çökertir.</li>
                            </ul>

                            <h2>3. İkili İlişkiler: Eşi "Kurallara" Zorlamak</h2>
                            <p>
                                Dışlanma korkusu veya hastalıktan koruma eylemini tek başına yapması dahi OKB hastası için
                                artık yetmez olur. O görünmez "pislik ya da tehlike bulutunun" partneri tarafından
                                eve getirileceği hissi, onu da kendi ritüeline hapsetmesine yöneltir:
                            </p>
                            <p>
                                Eşi dışarıdan/markadan her adım attığında "Aman halıya basma, hemen banyoya git o kıyafeti dezenfektana
                                at, telefonunu sil." gibi kurallar silsilesiyle karşılarsa; çok derin bir evlilik yıpranması başlar.
                                Eş "Ben mikrop muyum" ya da "Bu senin saçmalığın bana eziyet ediyorsun" diye çıkıştığında hasta kendini
                                tamamen anlaşılmaz hisseder ve çok ağır bir iletişimsizlik bağı kopuşu hasıl olur.
                            </p>

                            <h2>4. Soyutlanma ve Yalnızlaşarak Gelen: Depresyona (Çökkünlüğe) Geçiş</h2>
                            <p>
                                İşte tüm o evde bitmeyen temizlik ve <Link href="/blog/dini-takintilar-okb-mi">dini/zarar obsesyonu</Link>
                                iletişim kopukluğu (kendisiyle hesaplaşmalar); sosyalleşmeyi ezecektir:
                            </p>
                            <p>
                                "Ben o otobüse binersem tutunmak zorundayım, iğrenç.", "Dışarıdaki bardaklardan virüs geçecek, kapı
                                kollarına el sürmemeliyim... En iyisi birilerini görmeyeyim ki bu kâbusla/vesveselerle uğraşmayayım."
                                O güvenli sandığı tek kalesine (odasına/kanepesine) sıkışan beyin nöronlarına eşlik eden o kasvetli
                                hissi: <Link href="/hizmetler/depresyon">Çökkünlük (İkincil Depresyon / Melankoli)'dir</Link>.
                            </p>
                            <p>
                                <Link href="/blog/zarar-verme-dusuncesi-okb-mi">"Sevdiklerime veya bir çocuğa zarar veririm" (Aklımı kaçırır mıyım)</Link>
                                tarzındaki obsesyonları olanlarsa tam aksine sevdiği partnerinden bu sahnelerin korkunçluğu sebebiyle utanarak sırra (gizliye) gömülür ve kendini ondan sakınmaya çalışır (kaçınma tavrı).
                            </p>

                            <h2>Eryaman Kliniği'nde Zihnin Zincirlerini Esnetme Adımları</h2>
                            <p>
                                Saatler boyunca "kurtulacağım", "artık saymayacağım, yıklemayacağım" dediğiniz bu savaşta
                                vücudunuz kendi iradenize kulak asmaz ise; sorunun boyutu sizin inat/istek başarınızda
                                değil biyolojik-psikiyatrik ekseninizin kaymasında demektir.
                            </p>
                            <p>
                                Gündelik yaşamınız size zulme dönüştüyse, ilişkileriniz pamuk ipliğiyle (sizi ve karşıdakini
                                mahvederek) sarssılırsa durumun bilimsel adı Ankara Eryaman (Altay Mh.) daki Uzm. Dr. Abdullah Maraş
                                Psikiyatri Muayenehanesi eşliğindeki birebir değerlendirmede konuşulmasıdır. "Bu durum geçecek mi / nasıl
                                bir ilaç haritası kurgulanacak" (bkz. <Link href="/blog/okb-gecer-mi">OKB Geçebilmesi</Link>)
                                seanslarında atılan kişisel hekim adımlarıyla saptanır. Hastalık seyrinin sonlanması / idare edilmesi
                                şüphesiz ki kişiden kişiye farklı (ama imkanlar dahilinde klinik tabana) oturtulmaktadır.
                            </p>


                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Yetişkin Sağlığı Bilgilendirme Notu</strong>
                                Bu blog kütüphanesi; "%100 garanti tedaviler, son teknoloji çareler" adı altında popüler ve yanlış beyanlar
                                taşımadan tıbbın etik sınırlarınca sizleri bilgilendirmek içindir. Kişinin işlev kaybının derecesine hekim ile ilk görüşmesinde teşhis-teşhisin ekarte süreci başlar. Eryaman bölgesinde
                                bulunan özel Kliniğimizin kabulleri 16 yaş ve üzeri ergen ve yetişkin yaş gruplarından (16 yaş altı çocuk kabulü yoktur) oluşmaktadır.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <h3>Günlük Özgürlüğünüzü Saatlerce Sayarak Hibe Etmeyin</h3>
                                <p>Eryaman kliniğimize başvurup, o takıntı dürtülerinizi kontrolünüzde tutmanıza (klinik hekim sürecinde destek vermenize) ön ayak olacak konsültasyonu hazırlayabilirsiniz.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Randevu Menüsü ve İletişim →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Psikiyatri Randevusu</h3>
                                <p>Mesai saati / sosyal özgürlük prangalarınız için Eryaman'da çözümlenme isteği oluşturun.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Doktor Randevusu Al</Link>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4>Detaylı İlişki Kümeleri</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/hizmetler/okb">Genel Yetişkin OKB Kapsamı</Link></li>
                                    <li><Link href="/hizmetler/depresyon">İzole Yaşamdan Çökkünlüğe</Link></li>
                                    <li><Link href="/blog/okb-gecer-mi">Mümkün mü: İyileşme (Geçer mi)?</Link></li>
                                    <li><Link href="/blog/surekli-kontrol-etme">Geri Dönüp Kapı Yoklaması</Link></li>
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
