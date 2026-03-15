import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Hipomani Nedir? (Gizli Enerji Artışı) | Uzm. Dr. Abdullah Maraş',
    description:
        'Hipomani evresi mani kadar yıkıcı görünmese de aldatıcı bir bipolar belirtisidir. Yetişkinlerde enerji yüksekliği ve Ankara psikiyatrik değerlendirme süreci.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/hipomani-nedir' },
    openGraph: {
        title: 'Hipomani (Ilımlı Mani) Belirtileri | Psikiyatri Kliniği',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Hipomani nedir, maniden farkı ne?',
        answer: 'Hipomani "ılımlı" veya "hafif şiddetteki" mani evresidir. Birey enerjik ve coşkuludur ancak manideki gibi tam bir gerçeklik kaybı yaşamaz. Kişinin günlük işlevselliği tamamen durmaz (Hastaneye yatış gerektiren bir kopuş genelde görülmez).',
    },
    {
        question: 'Hipomani tehlikeli midir?',
        answer: 'Hipomani anlık olarak hastaya çok "iyi" bir hal olarak gelse de, altında sinsice ilerleyen bir çöküş (depresyon) evresi barındırır. Kişi o an hayatının en başarılı insanı olduğunu zannederken sonrasında tükenmişliği yaşar.',
    },
    {
        question: 'Dışarıdan belli olur mu?',
        answer: 'Evet, hasta çevresi tarafından eskiye nazaran "çok daha neşeli, dışadönük ve az uyusa bile enerjik" olarak gözlemlenir. Aile ve iş arkadaşları bu ani yapısal değişimin farkındadır.',
    },
    {
        question: 'Kendim tedavi edebilir miyim?',
        answer: 'Hipomani evresi o kadar keyiflidir ki, birey bunu bırakmak istemez, bu yüzden iradesiyle hastalığı kabullenip "kendini sakinleştirmek" söz konusu değildir. Ancak durum beynin kimyasının uyarılması olduğu için tıbbi psikiyatri planlaması yapılmalıdır.',
    },
    {
        question: 'Yalnızca hipomani geçiren biri de bipolar mıdır?',
        answer: 'Hipomani geçiren ve hiç tam mani evresine ulaşmayan, ardından majör depresyon evresine düşen kişiler "Bipolar Tip-II" şeklinde adlandırılan ve uzman değerlendirmesi gerektiren spektrum grubunda yer alırlar.',
    },
];

export default function HipomaniDonemiBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/bipolar">Bipolar</Link><span>/</span>
                        <span>Hipomani Nedir</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Bipolar / Evre</span>
                        <time dateTime="2026-06-15">15 Haziran 2026</time>
                        <span>•</span><span>5 dk okuma</span>
                    </div>
                    <h1>Hipomani Nedir? Enerjinin Aldatıcı Boyutu</h1>
                    <p className={styles.heroDesc}>
                        Sıklıkla olağanüstü bir ilham, yüksek çalışma azmi veya sosyal enerji patlaması zannedilip
                        psikiyatrik süreçlerle bağdaştırılmayan "Hipomani" döngüsünün arka planında beynin neler yaşadığı.
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
                                Toplum arasında "Şu ara müthiş formundayım, enerjim tavan" denildiği günlerin bazılarında
                                gizlenen bir psikiyatrik kod yatar: Hipomani. Diğer ucunda
                                karanlık <Link href="/blog/bipolar-ile-depresyon-arasindaki-fark">bipolar-depresyon çöküşü</Link> bekleyen
                                bir hız tümseği gibidir. <Link href="/blog/mani-donemi-nedir">Mani atağı (tam taşkınlık)</Link> kadar
                                hayatı yıpratan ve hezeyanlı boyutlara ulaşmasa da, hipomani beynin motorunu sinsice yakan tıbbi bir devirdir.
                            </p>

                            <h2>1. Belirtilerin Maniden Farkı Nelerdir?</h2>
                            <p>
                                Manik hasta, "Ben seçilmiş yüce liderim" noktasına dek uç noktada kuruntular
                                (grandiöz hezeyan) geliştirebilir. Oysa hipomanideki bir birey, hastaneye
                                kaldırılacak kadar kopmuş değildir; sadece çok coşkulu, iş bitirici ve biraz dürtüseldir.
                            </p>
                            <ul>
                                <li>Az uyumasına (günlerce uykusuz geçirmesine) rağmen dinç uyanmasına (Uykusuz bir dönemde "idare edebiliyorum") rağmen mesaisine devam edebilir.</li>
                                <li>Fikir uçuşmaları mantıklı gözükebilir ama çok sık değiştiği için başladığı herhagi bir projeyi bitiremez.</li>
                                <li>Arkadaşlarıyla sabahlara dek kahkahalar atar, <Link href="/hizmetler/anksiyete">kaygılarından arınmış özgüveni</Link> yüksektir.</li>
                            </ul>

                            <h2>2. Bipolar Tabloda Neden Aldatıcı Gelir?</h2>
                            <p>
                                Hipomani, yetişkin hastanın kendisi tarafından "Ah keşke hep böyle kalsaydım" diye
                                anılan bir evredir. Kişi hayatında hiç tatmadığı bir yaratıcılığa ve motivasyona
                                ulaşmıştır. Fakat tehlike şurada başlar: Yıllarca bir "depresyon ve çökkünlük" (düşük ruh hali)
                                yaşayan birey birdenbire hipomani evresine çıkarsa; durumu hiç <Link href="/hizmetler/bipolar-bozukluk">Bipolar
                                    olarak doktoruyla değerlendirmez</Link>, aksine "Sonunda iyileştim!" diye kutlar.
                            </p>
                            <p>
                                Oysa bedenin ve beyin kimyasındaki (serotonin/dopamin vb.) amigdala sisteminin bu suni
                                ateşi en fazla birkaç hafta/ay devam edebilir. Sonrasında kişi, motoru yanar bir araba misali
                                "Sonra haftalarca hiçbir şey yapmak istemiyorum" dediği <Link href="/hizmetler/depresyon">şiddetli
                                    yıkım/çökkünlüğe</Link> çok daha hızlı geri yuvarlanır.
                            </p>

                            <h2>3. Kliniğin Amacı Hipomaniyi Susturmak mı?</h2>
                            <p>
                                Ankara Eryaman'da (Etimesgut ve bağlı arterlerde) hastalarla süreci takip eden uzman kliniğimizdeki
                                temel şema (psikiyatrist değerlendirmesi), bireyin bu tatlı zehrindeki enerjiyi tamamen bitirici,
                                onu sönük hissiz bir duruma itmek DEĞİLDİR. Tam aksine hipomininin beyni yıpratma payı
                                biyolojik ve farmakoterapi yolu ile durdurulur ve ardından çıkılacak olan o devasa depresyon asansörünün
                                şalteri daha baştan kapatılması istenir.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Yetişkin Sağlığına Dair Uyarı</strong>
                                Hipomani tablosu dışarıdan izlendiğinde "hastalık" gibi görünmese de tıbbın (Ruh Sağlığı alanı) tedavi yelpazesinde çok net ayrıştırılmış nörobiyolojik bir dalgalanma gerçeğidir. Eğer kendinizde ya da eşinizde / çocuğunuzda (yetişkin olanlarda) aniden oluşan "sınır tanımaz aşırı özgüven" ve "dünya umurumda değil coşkusu" varsa birebir hekim muayenesi (değerlendirme seansı) şarttır.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <h3>Bu Enerji Bir Tuzak Olabilir</h3>
                                <p>Kendinizi sahte ve sınır tanımaz bir coşkuya hapsedip, sonrasındaki çöküşe zemin hazırlamadan uzman destek alın.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Hipomani Ön Görüşmesi Al →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Klinik (Muayene) Rotası</h3>
                                <p>Durduğunuzda yaşayacağınız şok (depresyon) öncesinde bir Ankara/Eryaman hekim desteği bulun.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Doktor Randevusu Al</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>İçerik İlgisi</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/hizmetler/bipolar-bozukluk">Bipolar Atak Değerlendirme</Link></li>
                                    <li><Link href="/blog/mani-donemi-nedir">Maninin Kontrolü</Link></li>
                                    <li><Link href="/blog/bipolar-atak-ne-kadar-surer">Bipolar Atakların Süreleri</Link></li>
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
