import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'OKB Geçer mi? Takıntı Hastalığı Kendi Kendine Düzelir mi? | Uzm. Dr. Abdullah Maraş',
    description:
        'OKB geçer mi? Takıntı hastalığının seyri ve kendi kendine düzelme olasılığı. Ankara Eryaman psikiyatrik değerlendirme süreci ve obsesyonların klinik yapısı.',
    alternates: { canonical: 'https://drabdullahmaras.com/blog/okb-gecer-mi' },
    openGraph: {
        title: 'OKB (Takıntılar) Geçer mi? İyileşme Seyri',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'OKB geçer mi?',
        answer: 'OKB belirtilerinin seyri kişiden kişiye değişebilir. Bazı bireylerde dönemsel olarak çok hafifleyip geri çekildiği gözlemlense de, yerleşmiş bir takıntı döngüsünün tamamen tıbbi müdahale (psikiyatrik süreç) olmaksızın kendi kendine sonsuza dek geçmesi oldukça nadirdir.',
    },
    {
        question: 'İlaç kullanmadan sadece irademle OKB’yi yenebilir miyim?',
        answer: 'Takıntıların zayıf olduğu durumlarda bilişsel (terapi) egzersizleri işe yarasa da, beyindeki amigdala alarmı kimyasal olarak çok bozulmuşsa kişi "yapmayacağım" diyerek iradesiyle hastalığı durduramaz. Çoğu kez biyolojik destek (ilaç vb uzman değerlendirmesi) tablonun rahatlatıcı zeminini oluşturur.',
    },
    {
        question: 'Tedavi (psikiyatri süreci) ne kadar sürer?',
        answer: 'Kişiden kişiye ve hastalığın (temizlik, zarar verme, simetri vb) ciddiyetine, bireyin kaç yaşında olduğuna, hayat şartlarına göre aylardan yıllara yayılabilen değişken bir seyir ihtiva etmektedir.',
    },
    {
        question: 'Bir zamanlar geçmişti ama stresten dolayı takıntılarım tekrar başladı, normal mi?',
        answer: 'Evet. OKB, anksiyete (kaygı) ile doğrudan beslenen bir hastalıktır. Hayatınızda boşanma, iş kaybı, vefat gibi stres faktörleri tetiklendiğinde beynin eski zayıf noktası olan "takıntılar" kendini güvende hissetmek için uyum mekanizması olarak alevlenebilir.',
    },
    {
        question: 'Ankara Eryaman’da OKB için kesin bir çözüm var mıdır?',
        answer: 'Tıp biliminde OKB için "%100 kesin çözüm, kökten yok ederiz" gibi vaatler yasal veya etik sınırların dışındadır. Hastalığın hedefi "sıfıra indirmekten ziyade" bireyin o düşünceler gelse bile yaşamını, işini etkilemeyecek seviyede o takıntı ile baş edebilme / önemsememe toleransını yapılandırmaktır.',
    },
];

export default function OkbGecerMiBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/okb">OKB</Link><span>/</span>
                        <span>OKB Geçer mi?</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>OKB</span>
                        <time dateTime="2026-05-24">24 Mayıs 2026</time>
                        <span>•</span><span>6 dk okuma</span>
                    </div>
                    <h1>OKB Geçer mi? Takıntı ve Vesveselerin Klinik Seyri</h1>
                    <p className={styles.heroDesc}>
                        Aklınızı yıllardır esir alan, o zihinsel kilitlenme hali olan takıntıların (OKB); kendi
                        kendine susup susmayacağını, tıbbın bu noktada verebileceği rasyonel yanıtları beraber
                        değerlendiriyoruz.
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
                                <strong>OKB belirtilerinin seyri kişiden kişiye değişebilir.</strong> Kimi bireylerde
                                (<Link href="/blog/okb-belirtileri">obsesyon ve kompulsiyon döngüleri</Link>) yoğun stres
                                altında alevlenirken, yaşam koşullarının sakinleştiği zamanlarda daha yönetilebilir
                                düzeylere inebilmektedir. Lakin tablonun tamamen, kendiliğinden ve profesyonel
                                desteksiz olarak ortadan kalkması (hiç yaşanmamışçasına geçmesi) tıp alanında çok
                                nadir karşılaşılan bir durumdur.
                            </p>

                            <h2>Beynin Hatalı Devresi Neden İnatçıdır?</h2>
                            <p>
                                <Link href="/hizmetler/okb">Obsesif Kompulsif Bozukluk (OKB)</Link> yalnızca beynin
                                geçici bir "kuruntusu" değil; amigdala (korku merkezi) ve frontal lob (muhakeme)
                                arasındaki sinyal gücünün kimyasal olarak "yanlış ateşlenmesi" sorunudur.
                            </p>
                            <ul>
                                <li><strong>Öğrenilmiş Korku Hissi:</strong> Kapıyı kontrol ettiğinizde (kompulsiyon) hissettiğiniz rahatlama, beyne "Evet bu eylem çok işe yaradı, demek ki felaket gerçekti!" kodunu yollar.</li>
                                <li><strong>Anksiyete Kaynağı:</strong> Hasta ritüelini (temizlik / zihinden dua okuma) yapmazsa öylesine <Link href="/hizmetler/anksiyete">ağır bir anksiyete (boğulma ve panik hissi)</Link> basar ki, "İradesiyle yapmayacağım" diyerek direnemez. İpin ucunu kendi kendine bırakması çok güçtür.</li>
                            </ul>

                            <h2>"Kesin Çözüm veya %100 Başarı" Vaatlerinin Gerçekliği</h2>
                            <p>
                                İnternette duyduğunuz "1 ayda takıntılarınıza kesin son", "OKB'ye garanti kür" gibi ifadeler
                                sağlık beyanı dışıdır (ve yasal değildir). Nöropsikiyatrinin gerçekçi vizyonu, OKB'nin "tamamen
                                sıfırlanması" üzerine değil; <strong>düşüncenin gelse dahi, sizin rutininizi (işinizi, gücünüzü) bozmayacak
                                    hissiyatsız bir hal alması (yani sönümlenmesi) üzerine</strong> inşa edilir. Aklınızdan "Kirlendi
                                mi?" hissi o eski dehşet şiddetiyle değil, fısıltı gibi geçer ve siz "Bir şey olmaz" diyip yola
                                devam edebilecek o <Link href="/blog/okb-gunluk-hayati-nasil-etkiler">günlük hayat gücüne</Link> ulaşırsınız.
                            </p>

                            <h2>Kliniğimizde (Psikiyatri Sürecinde) Neler Beklemelisiniz?</h2>
                            <p>
                                Asılsız ("<Link href="/blog/zarar-verme-dusuncesi-okb-mi">Sevdiklerime zarar veririm</Link>" veya
                                "<Link href="/blog/dini-takintilar-okb-mi">istenmeyen dini düşünceler</Link>") şeklindeki sarsıcı utançları tek
                                başına çözmeye çalışmak yel değirmenleriyle savaşmaktır.
                            </p>
                            <p>
                                Ankara Eryaman (ve Altay Mh.) lokasyonunda yetişkin erişkinler (yalnızca yetişkinlik)
                                konusunda hizmet veren Psikiyatri Uzmanı Dr. Abdullah Maraş, bu tablonun eyerinden tutulabilmesi
                                için tıbbiyede geçerliliği olan rasyonel adımları izler:
                            </p>
                            <ul>
                                <li>Hastanın "Bu ben değilim, bu hastalığımın sesi" zihinsel iç görüsüne sahip olması sağlanır.</li>
                                <li>Gerekli görülürse beynin yanan o alarm şalterini (serotonin vb yolakları baz alarak) dengeleyecek farmakoterapi (rutin tıbbi izlem) başlatılır.</li>
                                <li>İzleme süreçlerinde tablonun sönümlenmesi (belirtilerin hafiflemesi) hedeflenerek bireysel değerlendirme kişiye özgü bir "başarı / süre" cetveline yayılır.</li>
                            </ul>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Tıbbi Sınır Yasal Uyarı</strong>
                                Blog sitemiz içerikleri ve "OKB'nin seyri" üzerine olan tahmini senaryolar asla doktorunuzun fiziki değerlendirmesi yerine koyulmamalıdır. İnternet makaleleri; sizi "garanti süreçlere" yönlendirmeksizin sadece bu bozukluğun (yalnız olmadığınızın) bilimsel tarifini paylaşır. Bireyin spesifik (farklı medikal bir arka planı) söz konusu olabileceğinden en kesin izlenim psikiyatri hekimlerince sağlanmalıdır.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <h3>Çemberden Çıkış Adımını Uzmanla Atın</h3>
                                <p>Eryaman kliniğimize ulaşıp, "Acaba geçer mi?" diye yıllarınızı harcadığınız bu tıbbi durumun psikiyatrik uzman değerlendirmesiyle rotasına beraber karar verelim.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Randevu Menüsü →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Psikiyatrist Başvurusu</h3>
                                <p>Bu döngünün tıbbi yüzleşmesi (Eryaman, Ankara)</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Doktor Randevusu Al</Link>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4>Detaylı İlişki Kümeleri</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/hizmetler/okb">Genel Tıbbi OKB Sayfası</Link></li>
                                    <li><Link href="/blog/okb-belirtileri">Obsesyon (Belirti) Çeşitleri</Link></li>
                                    <li><Link href="/hizmetler/depresyon">Evreleri Derinleşmiş (Çökkünlük)</Link></li>
                                    <li><Link href="/hizmetler/panik-atak">Panik Duygularıyla Başa Çıkmak</Link></li>
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
