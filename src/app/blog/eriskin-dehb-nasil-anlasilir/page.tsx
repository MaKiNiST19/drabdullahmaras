import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Erişkin DEHB Nasıl Anlaşılır? | Teşhis Edilme ve Pofesyonel Süreçler',
    description:
        'Yetişkinlerde, kan veya MR testi olmayan DEHB’nin nasıl teşhis edildiği, psikiyatrik öykünün rolü ve Ankara (Eryaman) değerlendirme adımları.',
    alternates: { canonical: 'https://drabdullahmaras.com/blog/eriskin-dehb-nasil-anlasilir' },
    openGraph: {
        title: 'Geçmişi Kazımak: Erişkin DEHB Tanısında Klinik Harita',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'DEHB için beyin MR’ı veya kan testi istenir mi?',
        answer: 'Hayır; dünya genelinde DEHB tespiti sağlayan doğrudan bir biyolojik laboratuvar testi (MR, EEG vb.) yoktur. Tıbbi teşhis; psikiyatrist tarafından yürütülen çok detaylı bir klinik-fonksiyonel öykü ile mümkündür.',
    },
    {
        question: 'İnternetteki DEHB testlerine güvenilir mi?',
        answer: 'Sosyal medyadaki popüler "5 tıkla anla" tarzı testlerin bilimsel bir tıp hekimi karşılığında hiçbir resmi ve teşhis edici değeri yoktur. Sadece kişiye "Bu tablo var, uzmana görün" işaretini çakmaya yarayan araçlardır.',
    },
    {
        question: 'Doktor görüşmesi ne kadar sürer ve neleri içerir?',
        answer: 'Hekimin planladığı bireysel değerlendirme veya psikiyatrik görüşme genellikle kişinin çocukluk okul notlarına, eşu ile olan ilişki kalitesine, çalışma geçmişindeki erteleme öykülerine kadar tüm bir hayat kesitinin taranmasını gerektirir.',
    },
    {
        question: 'Benim yerime eşimden veya ailemden bilgi istenir mi?',
        answer: 'Evet. DEHB tanısında kişinin kendi öz-bildirimi eksik olabilir (hiç hasta olmadığını savunabilir); bu sebeple hekim gerek duyduğunda kişinin çocukluk veya güncel yetişkin dönemini izleyen "üçüncü şahıslardan" da onay talep edebilir.',
    },
    {
        question: 'Geç kalınmış (30 yaşı geçmiş) teşhisin anlamı kalır mı?',
        answer: 'Tanılamanın yaşı olmaz. 45 yaşında DEHB teşhisi alan yüzlerce insan, hayatı boyunca neden boş yere acı çektiğini anladığı (neden başarısız olmadığını anladığı) o an inanılmaz düzeyde rahatlama hisseder.',
    },
];

export default function DehbNasilAnlasilirBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/eriskin-dehb">Erişkin DEHB</Link><span>/</span>
                        <span>Tespit ve Klinik Harita</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Psikiyatri, Tıbbi Değerlendirme, İşlevsellik</span>
                        <time dateTime="2026-05-25">25 Mayıs 2026</time>
                        <span>•</span><span>5 dk okuma</span>
                    </div>
                    <h1>Erişkin DEHB Nasıl Anlaşılır? Modern Tıbbın Gözünden</h1>
                    <p className={styles.heroDesc}>
                        Bir tarafta popüler kültürle kendini etiketleyen on binlerce yetişkin hastası, öte tarafta
                        ise hastalığından bihaber yaşayan, sessiz ve darmadağın kariyerler... Gerçek tespit biliminin ardındaki perde...
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>(Yetişkin Temelli Ruh Sağlığı)</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            <h2 id="nedir-teshis">DEHB Tansiyon Değildir: Test Makinası Beklentisi</h2>
                            <p>
                                İlerleyen modern teknolojiye rağmen, toplumun beklediği o "Bas düğmeye, DEHB ise ekran yeşil
                                yansın" devri; insan ruhsallığı (beyin nörobiyolojisi) söz konusu olduğunda işlemiyor.
                                Nitekim, erişkin hastaları internetteki 2 sayfalık test çözümlerine yönlendiren de
                                somut bir veri eksikliğidir. Oysa Uzman Psikiyatrın beyninizdeki <Link href="/blog/eriskin-dehb-nedir">Erişkin DEHB</Link> gerçeğini
                                ayıklaması yıllarca süzülmüş klinik bir disipline (işlev değerlendirmesine) dayanmak zorundadır.
                            </p>

                            <h2 id="odak-degerlendirmesi">İki Sütunlu Temel Doğrulama Yöntemi</h2>
                            <p>
                                Uzman masasında "toplantılarda odaklanamıyorum" demek asla yeterli değildir. Hastalığın varlığını
                                kanıtlamak için psikiyatri hekimleri çok majör 2 temel zemini sarsar:
                            </p>
                            <ul>
                                <li><strong>1. Süreklilik ve Yaş (Öyküsel Köken):</strong> DEHB, yetişkinin son 1 yılında, iş kurduğunda başlayan bir şey olamaz. Hekim o yetişkinin ilkokul 3. sınıf karnelerine kadar inceler. (Hep yetenekli ama dağınık bir form varsa, bu geçmiş destekler.)</li>
                                <li><strong>2. Yaşamın İki Farklı Alanında da Yıkım Yaratması:</strong> Kişi sadace iş yerinde (<Link href="/blog/eriskin-dehb-is-hayatini-nasil-etkiler">iş yerindeki odak sorunlarına</Link>) sorun yaşıyor, araba sürerken veya evliliğinde hiper-kontrollüyse tıp bunu desteklemez. DEHB evrenseldir; kişi arkadaşlık ilişkisinde de <Link href="/blog/surekli-erteleme-davranisi-neden-olur">erteleme davranışı</Link> yüzünden randevuyu saatlerce geciktirir.</li>
                            </ul>

                            <h2 id="digerlerinden-ayirma">Benzerleriyle Olan "Ayrım Testleri"</h2>
                            <p>
                                Bugün bir kişi, "hiç okuyamıyorum, başladığım işin sonunu getiremiyorum ve kendimden nefret
                                ediyorum" dediğinde; bu şikayetleri duyan tecrübesiz biri (hekim olmayan
                                bir akraba vs.), kişiye <strong>O zaman sen DEHB olmuşsun</strong> teşhisini yapıştırır.
                            </p>
                            <p>
                                Fakat klinik <Link href="/hizmetler/eriskin-dehb">Ankara Eryaman erişkin DEHB değerlendirme süreci</Link> sırasında hekim
                                bilir ki, ağır bir <Link href="/hizmetler/depresyon">çökkünlüğe (depresyona)</Link> girmiş kişi de
                                okuyamaz; veya şiddetli bir yorgunluk ve kaygı taşıyan (<Link href="/blog/dehb-ve-anksiyete-arasindaki-iliski">anksiyetede</Link>); odaklanma namına bir tuğla üstüne
                                koyamaz. Psikiyatrinin o sanat noktası, bu sarmalı dışlamaktır. Eğer uykusuzluk, tiroit, ya da
                                bipolar atak (<Link href="/hizmetler/bipolar-bozukluk">bipolar bozukluk atakları</Link>) devredeyse
                                tedavi rotası %100 oranında yön değiştirecektir.
                            </p>

                            <h2 id="tedavi-faydasi">Peki Teşhisi Doğruladık, Ne Değişecek?</h2>
                            <p>
                                Çoğu erişkin "Ben 45 yaşına geldim, öğrensem ne olacak" bahanesinin (iradesizliğinin) ardına sığınır.
                                Ne var ki teşhisin resmileşmesiyle bireyin yıllardır kendi zekasına hurafe olarak yüklediği
                                "Ben başarısız, tembel, beş para etmez biriyim" ağırlığı, bir nörobiyolojik tıbbi vaka formüllemesinin
                                (biyolojik yetersizliğin) anlaşılmasıyla bir kuş gibi uçup gider. Hastanın kendine duyduğu o şefkatsizlik biter.
                            </p>

                            <h2 id="klinik-tutar">Eryaman (Ankara) - Bireysel Klinik Adımları</h2>
                            <p>
                                Şayet kendi yaşantınızda, daimi olarak geride kalmanızı sağlayan dürtü eksiklikleri ve odaklanma zaafları
                                seziyorsanız, kulaktan dolma anketlerden ibaret olmayan bir "Ruh Sağlığı (Psikiyatrist)" koltuğuna
                                müracaat etmelisiniz. (Ankara/Eryaman Uzm. Dr. Abdullah Maraş, tıp literatürünün belirlediği DSM-5
                                kriterleri ekseninde ve tamamen yetişkin odaklı bir değerlendirme modülü icra etmektedir.
                                Klinik tahlilde kullanılan psikometrik görüşmeler ile kişilerin genetik mirası ele alınarak en sağlam
                                tanı konur ve belirtilerin kişiden kişiye değişebilen potansiyeli uzman ellerle şekillendirilir.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Bilgilendirme Amaçlıdır</strong>
                                Belirtilen tüm süreçler tıbbi makalelerin yetişkin (adult) normlarına uygun özetleri olup; "Bende de şu var ben hastayım" diye gıda takviyelerine ve internet haplarına atılmak hem tehlikeli hem de hiçbir garantili sonuç vermez. Polikliniğimiz (Eryaman Batıkent yönünde) size bizzat birebir hekim muayenesi önerir. Yazılar %100 şifa (kesin) tedavi vaadi içermemekte, hastalığı bilinçlendirme amacı gütmektedir.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <p>Durmadan kendinize etiket yapıştırmaktansa zeka ve potansiyelinizi tıp bilimiyle yönetmeye var mısınız? Kliniğimizde konsültasyon sürecine giriş yapabilirsiniz.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Değerlendirme Başvurunuz →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Testlere Bırakmayın</h3>
                                <p>Beyin hücrelerinizi popüler testlere emanet etmeyin; Ankara muayenenizi klinik takviminden çekin.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Klinik Üzerinden Alınız</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>Psikiyatride Benzer Çizgiler</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/blog/eriskin-dehb-belirtileri-nelerdir">Şüphenizi Kılavuzla İnceleyin.</Link></li>
                                    <li><Link href="/blog/dikkat-daginikligi-mi-dehb-mi">Şu Ara Stresli Misiniz?</Link></li>
                                    <li><Link href="/hizmetler/eriskin-dehb">A'dan Z'ye Ana Temel Konumuz.</Link></li>
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
