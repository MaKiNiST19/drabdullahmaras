import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Sürekli Kontrol Etme İsteği Neden Olur? Evden Çıkamama | Uzm. Dr. Abdullah Maraş',
    description:
        'Sürekli ocak, kapı ve ütü kontrol etme davranışı nedir? "Acaba kilitledim mi" şüphesinin ardındaki obsesif kompulsif döngü (OKB) ve Eryaman’daki değerlendirme süreci.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/surekli-kontrol-etme' },
    openGraph: {
        title: 'Sürekli Kontrol Etme İsteği Neden Olur? (Kapı, Ocak, Kilit)',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Kapıyı kilitlediğimi biliyorum ama neden dönüp dönüp tekrar bakıyorum?',
        answer: 'OKB aslen bir "görme" sorunu değil, "şüphe ve emin olamama" sorunudur (Şüphe hastalığı). Gözleriniz kilidi görse de beyninizdeki güvenlik alarmı tatmin olmadığı (anksiyete sönmediği) için sürekli kontrol etme davranışını yenilemek zorunda kalırsınız.',
    },
    {
        question: 'Sadece gazı veya ütüyü mü kontrol ederim?',
        answer: 'Hayır, felaket senaryosu her şeye uyarlanabilir. "Acaba arabama park ederken bir çocuğa mı çarptım da fark etmedim?" deyip aynı sokaktan saatlerce aracıyla geçen (kontrol kompulsiyonu) OKB hastaları yaygındır.',
    },
    {
        question: 'Bunu yapmazsam gerçekten kötü bir şey olacağına inanıyorum, bu delilik mi?',
        answer: 'Hayır, bu bir "delilik" (şizofreni vb.) değil; beynin korku merkezi (amigdala) ile muhakeme merkezi (frontal lob) arasındaki elektriksel iletimin sizi sahte ama çok güçlü bir tehditle yanıltmasıdır (OKB).',
    },
    {
        question: 'Evden çıkamıyorum veya işe hep geç kalıyorum, sürekli kontrol etme düzelir mi?',
        answer: 'Kişiden kişiye değişebilir bir grafik çizse de; bu tablo kişinin kaderi değildir. Uzman bir psikiyatristin değerlendirmesiyle (ilaç desteği veya maruz bırakma terapileri ile) o şüphe hissine rağmen kapıdan çıkabilecek tolerans gücü kazanılabilmektedir.',
    },
    {
        question: 'Ankara Eryaman’da "kontrol etme takıntıları" için psikiyatrist görüşmesi planlanabilir mi?',
        answer: 'Evet. Eryaman (Altay Mh.)’de hizmet yürüten Uzm. Dr. Abdullah Maraş’ın muayenehanesinde; evden çıkmanızı ya da uyumanızı imkansız kılan kontrol/şüphe takıntılarınız yetişkinler özelinde klinik olarak değerlendirilmektedir.',
    },
];

export default function SurekliKontrolEtmeBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/okb">OKB</Link><span>/</span>
                        <span>Kontrol Etme İsteği</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>OKB</span>
                        <time dateTime="2026-04-18">18 Nisan 2026</time>
                        <span>•</span><span>8 dk okuma</span>
                    </div>
                    <h1>Sürekli Kontrol Etme İsteği Neden Olur? "Acaba Kilitledim mi?" Şüphesi</h1>
                    <p className={styles.heroDesc}>
                        Sabah işe gitmek üzere evden çıktınız, kapıyı kilitlediğinizden eminsiniz.
                        Ancak asansöre bindiğiniz an o ezici şüphe beyninize çöker: "Acaba kilitledim mi
                        diye tekrar tekrar bakıyorum, emin olmalıyım."
                        Günlük hayatı kilitleyen "Kontrol (Checking) OKB" tablosunu inceliyoruz.
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
                                Aslında insan zihninin "Acaba fırını açık mı unuttum?" diyerek geriye dönüp bir kez bakması
                                oldukça sıradan ve sağlıklı bir güvenlik mekanizmasıdır. Lakin ocağın tamamen sönmüş
                                olduğunu, 3 kez gözlerinizle görmenize hatta elinizle hissetmenize rağmen içinizde bir
                                boşluk/korku (anksiyete) barınıyorsa; sorun ocakta değil, <Link href="/hizmetler/okb">
                                    Obsesif Kompulsif Bozukluğun (OKB)</Link> "Şüphe" devresindedir.
                            </p>

                            <h2>1. "Şüphe Hastalığı" ve Amigdalanın Bozulması</h2>
                            <p>
                                Sürekli kontrol etme eylemi, nam-ı diğer "Checking OCD", temelini <strong>güvensizlik ve felaket uyarısından</strong>
                                alır. Beyin, kontrol etmediği takdirde "Ev yanacak, hırsız girecek, birileri ölecek" gibi
                                görkemi çok yüksek bir felaket senaryosu ("obsesyon") üretir. Hasta bu senaryonun acı verici
                                suçluluğunu/korkusunu dindirmek için (<Link href="/hizmetler/anksiyete">kaygıyı azaltma arayışıyla</Link>)
                                fiziğini yorarak o ritüeli tekrar uygular ("kompulsiyon").
                            </p>
                            <ul>
                                <li><strong>Göremediği İçin Değil, Hissedemediği İçin Yapar:</strong> Hasta gözleri kör olduğu için değil, beynindeki "Tamam, artık güvendesin" diyen o his düğmesi bozuk olduğu için 8 kez kapı kolunu zorlar.</li>
                                <li><strong>Sayılar ve Ritüeller Eklenir:</strong> Bazen bu kontrol masum bir bakış değildir. "Kilide 3 kez sağa, 2 kez sola vurarak çekmeliyim, yoksa kilitlenmiş sayılmaz" gibi ritüel sarmalına bürünerek <Link href="/blog/okb-belirtileri">başlı başına bir OKB belirtisi</Link> haline getirilir.</li>
                            </ul>

                            <h2>2. Kontrol Etmenin Gizli Yüzü: Sosyal ve Zihinsel Yoklama</h2>
                            <p>
                                Hepimizin aklına kapı ya da doğal gaz gelir. Oysaki yetişkinlerde (özellikle iş
                                ile iletişim mekanizmalarında) farklı maskelerle gizlenir:
                            </p>
                            <ul>
                                <li><strong>Mesaj / E-posta Kontrolü:</strong> "Acaba e-postanın son cümlesinde yanlış bir şey yazıp patronuma küfür mü ettim?" diye gönderdiği e-postayı defalarca baştan okuyanlar (Mükemmeliyetçi zarar görme endişesi).</li>
                                <li><strong>Hafıza Kontrolü:</strong> Kendi geçmişini ("Dün o kişiye kötü bir şey demedim değil mi, yanlış bir şey yapmadım dimi?") diye sürekli beyninden check eden ve çevresinden "Emin misin demedin değil mi?" diyerek güvence onaylaması isteyen danışanlar.</li>
                            </ul>

                            <h2>3. İşe Ya da Hayata Gidememek (Zaman ve Enerji Kaybı)</h2>
                            <p>
                                Yetişkin psikiyatrisinde "kontrol kompulsiyonları", <Link href="/blog/temizlik-takintisi">
                                    bulaş/temizlik obsesyonlarından</Link> daha sessiz ancak daha mesai katilidir.
                                Asansöre biner, geri çıkar kapıya bakar. Arabaya biner eve bakar, "acaba camı kapattım mı". Yola çıkar
                                döner (acaba bir taşa çarptım ama o taş değil de insan mıydı?).
                            </p>
                            <p>
                                Ortaya çıkan <Link href="/blog/okb-gunluk-hayati-nasil-etkiler">sosyal izolasyon</Link> kişiyi eve bağlar. "Eğer dışarı çıkarsam yine arabayı
                                durdurup o çukuru kontrol edeceğim saatlerce" der ve hayattan soyutlanır. Tüm bu bunaltı birey üzerinde
                                sessiz bir <Link href="/hizmetler/depresyon">çökkünlük ya da ağır depresyon</Link> inşa eder.
                            </p>

                            <h2>4. "Yapmasam Olmaz Mı?" Savaşının Psikiyatrisi</h2>
                            <p>
                                Halk diliyle hasta kendine binlerce kez "Yapma, yeter!" dese dahi bedeni onu fiziksel bir sıkıtıya,
                                adeta göğsü daralan bir korkuya sokar. Bu nedenle kontrol etme davranışı tek başına
                                "irade / söz dinleme" meselesi değil, açıkça farmakolojik yahut psikiyatrik yöntemler (Bilişsel Davranışçı Terapi
                                / Maruz Bırakma) ile zayıflatılması gereken <strong>klinik bir değerlendirme boyutudur</strong>.
                            </p>

                            <h2>Eryaman'da Uzman Değerlendirmesiyle Döngüyü Kırmak</h2>
                            <p>
                                Evinize ya da eşyalarınıza olan güvensizliğiniz yüzünden dış dünyadaki güneşten mahrum kaldığınız
                                "bir şeyi eksik yaptım mı diye içim rahat etmiyor" fısıltısı, beynin düzeltilebilir (veya makul
                                hizaya sokulabilir) kimyasının bir parçasıdır. Gidişatın başarısı kişiden kişiye değişebilir
                                ancak adımı atmadan karanlık sonlanmaz.
                            </p>
                            <p>
                                Ankara Eryaman (Etimesgut ve Batıkent lokasyonlarında) muayenehanesinde yetişkin erişkinler için
                                Ruh Sağlığı (Psikiyatrik) desteği sunan Uzm. Dr. Abdullah Maraş eşliğinde bireysel görüşme şemanızı
                                başlatabilirsiniz. Takıntıya, yani kontrol etmenin doğurduğu o yoğun anksiyete acısına karşı
                                vücudunuzu sağırlaştırmanın / tepkisizleştirmesinin tıbbi yolu kliniğimizle görüşmenizi beklemektedir.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Genel Bilgilendirme Notu</strong>
                                Burada belirtilen örneklemeler ve hastalık işleyiş prensipleri; kişiye "kesinlik / garanti" vermek yahut kendisini
                                internet üstünden tedavi etmeye teşvik amacı ASLA gütmez. OKB tablolarının yapısında tam düzelme vaatleri yerine (tedavinin süreci ve
                                başarı ölçütü kişiden kişiye değişkendir) tıbbi uzmanlık alanındaki doktor müdahalelerinin birebir fiziken
                                uygulanması (muayene) önem taşır.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <h3>Asansörden Geri Dönmeden İşe Gidebilmek Mümkün</h3>
                                <p>Eryaman Altay Mahallesi kliniğimizdeki psikiyatrist değerlendirme görüşmesiyle "kontrol etme OKB'nize" artık dur diyen profesyonel yaklaşıma sahip olun.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Klinik Randevu Al →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Eryaman Uzman Randevusu</h3>
                                <p>Zihni kemiren şüpheleri yalnız çekmeyin. (Psikiyatri, Ankara)</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Değerlendirme</Link>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4>Konuya İlişkili Başlıklar</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/hizmetler/okb">OKB (Takıntı) Konsültasyonu</Link></li>
                                    <li><Link href="/blog/okb-belirtileri">Obsesyonların Döngüsü</Link></li>
                                    <li><Link href="/blog/okb-gunluk-hayati-nasil-etkiler">Sürekli Kontrol İş Hayatını Vurursa</Link></li>
                                    <li><Link href="/blog/okb-gecer-mi">Takıntı ve Şüphe Geçer mi?</Link></li>
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
