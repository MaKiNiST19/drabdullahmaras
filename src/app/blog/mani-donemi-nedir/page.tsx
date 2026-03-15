import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Mani Dönemi Nedir? (Manik Atak ve Taşkınlık) | Psikiyatri Uzmanı',
    description:
        'Bipolar mani dönemi nedir? Riskli kararlar, yüksek enerji ve uyku ihtiyacındaki azalmanın klinik boyutu. Ankara Eryaman bipolar değerlendirme süreci.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/mani-donemi-nedir' },
    openGraph: {
        title: 'Mani (Taşkınlık) Dönemi - Bipolar Ataklar | Eryaman',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Mani atağı geçirdiğimi nasıl anlarım?',
        answer: 'Normalde olduğunuzdan çok daha hızlı konuştuğunuzu, günlerce çok az (1-2 saat) uyuyup enerjik kalktığınızı, zihninizde sürekli yüzlerce plan döndüğünü fark etmek en temel klinik belirteçlerdir.',
    },
    {
        question: 'Manideyken kişi kendini çok zeki mi sanır?',
        answer: 'Evet, buna "grandiözite" denir. Birey normal yeteneklerinin ötesinde yetilere sahip olduğunu düşünür (seçilmiş/mükemmel olma inancı). Bu nedenle de riskleri görmez, tüm birikimini hesapsızca harcayabilir.',
    },
    {
        question: 'Başkaları mani dönemimi anlar mı?',
        answer: 'Hasta için o an bir "coşku veya mutluluk" olsa da, çevresindeki yetişkinler kişinin "normalden tamamen farklı, garip, dürtüsel veya çok kavgacı" davrandığını net hisseder.',
    },
    {
        question: 'Bu ucuza ve hızlıca geçirmek mümkün mü?',
        answer: 'Psikiyatri alanında en çok acil tıbbi müdahale (bireysel değerlendirme) gerektiren dönemdir çünkü maninin tahribatı büyüktür. Zamanla kendiliğinden çöküşe geçse bile o esnada yaratılacak sosyal ve maddi zarar çok büyük olabilir.',
    },
    {
        question: 'Depresyona bağlar mı?',
        answer: 'Mani ucu, beynin tüm yakıtını kontrolsüz harcamasıdır. Bipolar hastasında çoğunlukla enerjinin sıfırlandığı bir dibe vurma (çökkünlük/depresyon) tablosu bu enerjiyi takip eder.',
    },
];

export default function ManiDonemiBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/bipolar">Bipolar</Link><span>/</span>
                        <span>Mani Evresi</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Bipolar / Mani</span>
                        <time dateTime="2026-06-08">8 Haziran 2026</time>
                        <span>•</span><span>5 dk okuma</span>
                    </div>
                    <h1>Mani Dönemi Nedir? Hızlı ve Riskli Boyut</h1>
                    <p className={styles.heroDesc}>
                        Filmlerde "sınırsız bir neşe" olarak gösterilen, ancak gerçeğinde hastanın kendisini ve
                        yaşamını, zapt edilemez bir hıza (dürtüsellikle birlikte) soktuğu manik evrenin klinik yapısını ele alıyoruz.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>Psikiyatrist (Ankara / Eryaman)</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            <p className={styles.lead}>
                                "Bir anda her şeyi yapabileceğimi düşünüyorum..." Bu cümle, sıradan bir
                                pazartesi motivasyonu değil. Tıpta, <Link href="/hizmetler/bipolar-bozukluk">bipolar bozukluk spektrumunun</Link>
                                tepe noktası olan "Mani" evresinin en somut özetidir. Kişi o döneme
                                öylesine yüksek bir sarsıntıyla girer ki; beyin sınırları, uyarıları
                                ve risk faktörünü adeta görmezden gelerek otonomisini devreden çıkarır.
                            </p>

                            <h2>1. Maninin Temel Karakteri: Coşku ya da Öfke</h2>
                            <p>
                                Sanılanın aksine mani her vakada "bol kahkaha atan, partiden partiye koçan neşeli adam"
                                resmi demez. Kimi zaman bu evre çok ciddi, geçimsiz ve kavgacı bir "yüksek"
                                duruş içerir. Eğer hastanın dürtüleri reddedilirse aşırı tepkili ve inatçı / hırçın
                                bir hale yönelebilir. İhtiyaç duymadığı halde (logore) sürekli yüksek tonajlarda, daldan
                                dala atlayarak konuşur.
                            </p>

                            <h2>2. Risk Faktörlerini Reddediş (Dürtüsellik)</h2>
                            <p>
                                Klasik yetişkin hayatında insan; evliliğinde, cebindeki parasıyla (bütçesinde) belli bir sınır dahilindedir.
                                Oysa mani, beynin "dur, düşün" (frontal sistemin filtreleme işini) durdurur.
                                Hasta normal halinde asla tasvip etmeyeceği ilişkiler yaşayabilir, kumar oynayabilir, "asla"
                                diyebileceği paralar harcayarak hayatını birkaç hafta içinde iflas ettirebilir. Dışarıdan en ufak bir uyarı
                                onu öfkelendirir çünkü kendisinin hasta olduğunu değil, <Link href="/blog/bipolar-ile-depresyon-arasindaki-fark">sadece dünyanın
                                    en başarılı insanı olduğunu düşünür</Link>.
                            </p>

                            <h2>3. Biyolojik İflasa Süren Uykusuzluk</h2>
                            <p>
                                İnsanın uyumaması normal fizyopatolojide bitkinliğe sebep olur. Lakin mani hastasına sorduğunuzda
                                genellikle, "Uyumadan günlerce idare edebiliyorum ve yorulmuyorum" cevabını alırsınız. Bu sahte bir
                                dirençtir. Beynin içten içe (fiziksel bazda) aşırı çalışmaktan alev aldığı, kalbin sürekli
                                devir yaptığı bir gerçektir.
                            </p>
                            <p>
                                Aslında o an <Link href="/hizmetler/anksiyete">kaygılarını aşmış gibi</Link> görünse de zemin
                                pamuk ipliğine bağlıdır. Çoğu kez (hatta bazılarında tehlikeli boyutta agresyona dönüştüğü için)
                                kişinin kendi kendisine mani döngüsünü tedavi edemediği kesindir. Tıbbiyede
                                yatan bu yapısına kesinlikle klinik manada müdahale (bireysel uzman değerlendirmesi)
                                ile çöküşü durdurucu / dengeleyici ilaç desteği sağlanmalıdır.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Bilgilendirme Notu</strong>
                                Hastanın "hayatının en eğlenceli, en dinç dönemi" gibi atıflarda bulunduğu mani (psikiyatrist penceresinden bakınca), aslında yorucu dürtüsel kararların geleceğini ipotek altına aldığı ve tahribatı büyük yıkıcı bir afettir. Bu bozukluk şüphesinde, Ankara Eryaman muayenehanemize (Altay Mah.) tıbbi olarak muayene için yetişkin profil başvurusu yapmanız (özellikle hastanın eşi/yakını iseniz sürece katılımınız) kilit role sahiptir.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <h3>Bu Enerji Tehlikesiz Değil</h3>
                                <p>Hastanın durmak bilmeyen hızının beyni deşarj etmeden (yokuş aşağı) frenleyebilmesi hususunda doktor takibi şarttır.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Psikiyatri Ön Görüşmesi Al →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Kliniğimize Ulaşın</h3>
                                <p>Söz konusu atağın uzman hekim denetimine alınması (Eryaman) gerekir.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Değerlendirme</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>Benzer Başlıklar</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/hizmetler/bipolar-bozukluk">Bipolar Bozukluk - Genel</Link></li>
                                    <li><Link href="/blog/hipomani-nedir">Mani'nin Bir Alt Formu (Hipomani)</Link></li>
                                    <li><Link href="/blog/bipolar-belirtileri">Diğer Uçlarına Bakış</Link></li>
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
