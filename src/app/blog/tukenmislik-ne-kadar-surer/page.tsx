import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Tükenmişlik Ne Kadar Sürer? | Burnout İyileşme Süreci',
    description:
        'Yetişkinlerde çalışma stresiyle oluşan tükenmişlik sendromu (burnout) kaç ay sürer, kendi başına geçer mi ve psikiyatrik düzelme faktörleri nelerdir?',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/tukenmislik-ne-kadar-surer' },
    openGraph: {
        title: 'Bu İşkence Ne Zaman Biter: Tükenmişlik Ne Kadar Sürer?',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Tükenmişlik (Burnout) kendi başına geçer mi?',
        answer: 'Şiddeti hafif (isteksizlik) boyutlarında, stres kaynağı (o cehennem işyeri) bırakılırsa 1-2 ayda hafifleyebilir. Lakin o tükenmişlik "Ben hiçbir işe yaramam" diyen hücresel bir depresyona / anksiyeteye dönüşmüşse; hiçbir destek almadan kendi kendine silinmesi aylar hatta (kronik) yıllar süren dev bir yıkıma mal olabilir.',
    },
    {
        question: 'Üç günlük tatil beni eski halime döndürür mü?',
        answer: 'Kesinlikle hayır. Denize girmek, tükenmiş (burnout) vakayı o ortamdan çıkardığı için "sadece bir hafta ağrıyı kesen ağrı kesici (adrenalin/dopamin)" görevi yapar. Tatil bitip aynı o "Hayır diyememe" ya da bitmeyen evrak yığınlarının ortasına dönüldüğünde çöküş eskisinden çok daha sarsıcı bir hızla (depresif reaksiyonla) kapıyı çalar.',
    },
    {
        question: 'Psikiyatri ilaçsız da bu durumu çözebilir mi?',
        answer: 'Tükenmişliğin temeli uyku problemleri, midede kusma / çarpıntı veya majör depresyonla tamamen kararmışsa; tıbbi ilave zaruridir. Fakat daha bilişsel (idare edilemeyen sınırlar, mükemmeliyetçilik) bazlı bir sendrom; terapötik hekim konuşmalarıyla kişiden kişiye değişebilecek hızda revize edilebilir.',
    },
    {
        question: 'Tükenmişlik ne kadar sürer? Hastasından hastaya değişir mi?',
        answer: 'Altından kalkılamayan bu sendrom; yetişkinin kişisel benlik duvarlarına (stresle başa çıkma mekanizmasına) ve destek gördüğü sosyal çevre (aile / klinik) etkenlerine bağlı olarak, haftalar ila aylar (bazen yıllar) arasında tamamen bireysel (kişisel süreç) seyrindedir.',
    },
    {
        question: 'Ev hanımlarında da bu kadar uzun sürer mi?',
        answer: 'Evet. Üstelik çalışma hayatındaki mola (mesai bitimi) evraklardan kaçışı sağlar lakin; ev hanımı ya da özel bir hastaya bakan yetişkin, tükenmişliğini (burnout) o evin içinden asla çıkaramadığı için "molasız" bir cehennemin ortasında çok daha kalıcı ve uzun aylar süren sarmallarla boğuşabilmektedir.',
    },
];

export default function TukenmislikNeKadarSurerBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/tukenmislik-sendromu">Tükenmişlik Kütüphanesi</Link><span>/</span>
                        <span>Burnout Seyri ve Süresi</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Psikiyatri, Burnout Süreci, İyileşme</span>
                        <time dateTime="2026-06-28">28 Haziran 2026</time>
                        <span>•</span><span>5 dk okuma</span>
                    </div>
                    <h1>Tükenmişlik Ne Kadar Sürer? İyileşme Zaman Çizgisi</h1>
                    <p className={styles.heroDesc}>
                        <strong>"Ben ne zaman eski neşeme ve çalışma tempoma döneceğim?"</strong> sorusu,
                        zihnini tamamen kapatmış olan tükenmiş (burnout) hastanın en yakıcı çığlığıdır. Oysa o beynin;
                        kendi sınırlarını, uykusunu ve benlik değerlerini baştan tamir etmesi (klinik destekle) aylar
                        süren hassas bir nörobiyolojik yapılanmayı barındırır.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>(Ankara Eryaman Yetişkin Ruh Sağlığı)</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            <h2 id="nedir-stres">Tükenmişliğin (Burnout) Süresi Neye Bağlıdır?</h2>
                            <p>
                                İnsan zihni, haftalarca aşırı mesai yaparak uykusuz kaldığında bunu bedende bir
                                <Link href="/blog/surekli-yorgun-hissetmek-psikolojik-mi">kasıntı (yorgunluk alarmı)</Link> olarak hissettirir.
                                Ne zaman ki o yorgunluk; <Link href="/blog/motivasyon-kaybi-neden-olur">her şeye karşı umutsuzluğa</Link> ve "Ben yapamıyorum artık" diyen
                                hissizliğe evrilir, işte o zaman <strong>(Tükenmişlik) zihnin tahtına oturmuştur.</strong>
                            </p>

                            <p>
                                Peki ne kadar sürecek? Eğer hasta, sabahları midesi kusarak gittiği o <Link href="/blog/ise-gitmek-istememe-hali">işkenceli iş yerine (ya da evde onu sürekli eleştiren o toksik ortama)</Link> hiçbir sınır veya itiraz koymadan (aynı ritimde)
                                maruz kalmaya devam ederse; o tükenmişlik "YILLARCA" sürerek kişinin hücrelerini
                                (Major rahatsızlıklarla) tamamen parçalayacak, asla sadece günlerle geçmeyecektir.
                            </p>

                            <h2 id="ikincil-bozukluk">Stres Kaynağı Durursa Ne Olur?</h2>
                            <p>
                                İstifa ettiğini ya da boşanma (veya mesai saati kısıtlama) gibi büyük bir "kesici" eylemi
                                gerçekleştirdiğini farz edelim. O gün hasta büyük bir mutluluk duysa da tükenmişlik ertesi gün sıfırlanmaz.
                            </p>
                            <ul>
                                <li>
                                    Beynin aylarca salgıladığı o "stres/kortizol" ve yarattığı
                                    <Link href="/hizmetler/anksiyete">Anksiyeteli kalp çarpıntıları</Link>, zihinde o kadar
                                    kalıcı yollar açmıştır ki; yeni girdiği o en mükemmel işyerinde bile hasta
                                    "Eyvah, burada da bana bağıracaklar" diyerek aylarca (3-6 ay) o zehrin etkisini atmaya çalışır. Mükemmeliyetçilik tamir edilmeden hasta huzur bulamaz.
                                </li>
                            </ul>

                            <h2 id="zihinsel-donma">Depresyona Kaymış Tükenmişlik Kaçınılmazdır</h2>
                            <p>
                                Eğer olay sadece iş sıkıntısını geçmişse, zihin kendisine "Demek ki ben sorunluymuşum,
                                o kadar emek ettim tutunamadım" demişse; işte o noktada tablo çok daha kronik (zamanı uzatıcı)
                                bir hale gelir. Çüknü ortaya çıkan yıkım sadece tükenmişlik değil; bizzat tedavi edilmeyen bir
                                <Link href="/blog/tukenmislik-ve-depresyon-arasindaki-fark">ağır ve yaygın Majör Depresyondur!</Link>
                                Bu noktada <Link href="/hizmetler/uyku-bozukluklari">uykuları saatlerce kaçan (sabah uyanamayan)</Link> kişinin kendi kendine "İyileşmemi" beklemesi büyük bir kumar ve çukurdur.
                            </p>

                            <h2 id="psikiyatrist">Ankara/Eryaman Kliniğinin Zaman Çizgisini Kısaltması</h2>
                            <p>
                                Eğer "Tükenmişlik ne kadar sürer?" diyerek umarsızca ayların yılların geçmesini beklemek
                                istemiyorsanız (ve kariyerinizi/evliliğinizi çöpe atmayacaksanız);
                                tıp dünyasının <Link href="/hizmetler/tukenmislik-sendromu">Ankara Eryaman tükenmişlik değerlendirme ve klinik onarım süreciyle</Link>, doğrudan "hastanın stres mekanizmalarına/şemalarına" Birebir şekilde (psikiyatrik randevu ve medikalizasyonla) müdahale edilmelidir.
                            </p>

                            <p>
                                Uzm. Dr. Abdullah Maraş'ın tahlil edeceği bu yapı; her hastanın (Kişiden kişiye değişebilen) nörobiyolojik kapasitesi ekseninde ele alınmakta, zihnin o tükenmiş pillerinin (serotonin/dopamin vs. regülasyonuyla) bilimin/terapinin desteğiyle çok daha sağlıklı zeminlerde tamamlanması hedeflenmektedir. O tükenmişlik aylarınızı kendi kendinize zindan veya felaket etmezsiniz.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Klinik Uyarısı</strong>
                                Belirtilen zaman ve süre kıstasları; tıp disiplininde (yetişkin değerlendirmesinde) istatistiki ve tahmini veriler içerir. Sendromun bitişini ve "sürekli yorgunluğun / anhedoninin" silinişini
                                "%100 başarıyla ve şu günde geçer" diyerek pazarlayan hiçbir söylem kliniğin rasyonel gerçeğine uymaz. Asıl çözüm "Uzman Poliklinik/Psikiyatrist" eşliğindeki düzenlenmedir.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <p>Süreci boşvererek kendiliğinden silinmesini beklemeniz sizi çok daha çıkılmaz depresif çukurlara hapsedebilir. Zihninizdeki o acıyı, klinik/tıbbi adımlarla bitirin.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Depresif/Burnout Tahlili Kurun (Ankara) →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Zaman, Müdahale Etmediğiniz Sürece Aleyhinizedir.</h3>
                                <p>Onu Eryaman hekim vizyonunuzla (tedaviye) devrederek kısaltın.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Klinik Üzerinden Alınız</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>İçerikteki Zincirler</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/blog/tukenmislik-sendromu-nedir">O Süren İşkencenin Adı Nedir?</Link></li>
                                    <li><Link href="/blog/tukenmislik-sendromu-belirtileri-nelerdir">Hangi Belirtiler Süreyi Hep Uzattı?</Link></li>
                                    <li><Link href="/hizmetler/anksiyete">Kaygısı Sürenin İyileşmesini Engeller.</Link></li>
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
