import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Bipolar Belirtileri Nelerdir? (Mani ve Depresyon Bulguları)',
    description:
        'Yetişkinlerde bipolar belirtileri. Mani ve depresyon arasındaki organik değişimleri öğrenin. Ankara Eryaman’da psikiyatrik değerlendirme süreci.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/bipolar-belirtileri' },
    openGraph: {
        title: 'Bipolar Bozukluk Belirtileri | Yetişkin Psikiyatrisi',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Bipolar belirtileri aniden mi ortaya çıkar?',
        answer: 'Çoğunlukla hasta aylarca veya yıllarca bir duygu durumunda kalabilse de, atak dönemi tetiklendiğinde (özellikle mani fazında) birkaç gün veya hafta içinde hızla değişen radikal belirtiler görülebilir.',
    },
    {
        question: 'Çok para harcamak veya riskli işler yapmak bipolar belirtisi midir?',
        answer: 'Eğer bu durum kişinin normal karakterine tamamen zıt şekillendiyse ve mani (coşkulu/dürtüsel) döneme denk geliyorsa evet, en belirleyici bulgulardan biri abartılı ve ihtiyatsız davranışlardır.',
    },
    {
        question: 'Mani ile depresyon arka arkaya mı gelir?',
        answer: 'Hastadan hastaya seyri değişir. Bazen bir atağın bitiminde kişi bir süre normal (ötimik) döneme geçebilir, kimi zamansa tepeden tırnağa aniden çöküş yaşayabilir.',
    },
    {
        question: 'Kişi bipolar belirtisi gösterdiğinin farkında mıdır?',
        answer: 'Depresyon safhasında çökkünlüğün farkındadır; lakin "mani (coşku)" evresinde beyni kendine aşırı haklılık payı verdiği için birey çoğu kez hasta olduğunu inkar eder ve eleştiriye kapanır.',
    },
    {
        question: 'Bu belirtiler tedavi edilebilir / tamamen geçer mi?',
        answer: 'Bipolar tablosunun kendiliğinden, dış müdahalesiz tamamen sıfırlanması beklenemez. Klinik uzman değerlendirmesi (farmakoterapi vb) ile hastanın belirtilerinin azaltılıp olağan yaşam kalitesinin dengelenmesi amaçlanmaktadır.',
    },
];

export default function BipolarBelirtileriBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/bipolar">Bipolar</Link><span>/</span>
                        <span>Belirtiler</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Bipolar</span>
                        <time dateTime="2026-06-01">1 Haziran 2026</time>
                        <span>•</span><span>6 dk okuma</span>
                    </div>
                    <h1>Bipolar Belirtileri Nelerdir? Duygusal Uçlar</h1>
                    <p className={styles.heroDesc}>
                        Psikiyatrik süreçlerde teşhisi en kritik, ancak dış çevreden en zor algılanan
                        (çoğu kez hasta "çok enerjik ve mutlu" zannedilen) bipolar (iki uçlu) bozukluk
                        tabloları ve her iki ucun spesifik belirtilerini inceliyoruz.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>Psikiyatri Uzmanı (Ankara)</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            <p className={styles.lead}>
                                Toplum arasında "Zaten hepimiz biraz dengesiz değil miyiz?" şeklinde romantize
                                edilen veya "Canım sıkıldı, bipolarım" denilerek hafife alınan duygu oynamaları aslen tıp dilinde apayrı
                                bir ciddiyete sahiptir. Gerçek <Link href="/hizmetler/bipolar-bozukluk">Ankara Eryaman bipolar değerlendirme süreci</Link>
                                söz konusu olduğunda hekim, sıradan bir üzüntü veya sevinci değil; amigdalanın işleyişini
                                bozan "klinik zıtlıkları" arar.
                            </p>

                            <h2>Bipolar Hastalık Hangi İki Uca Sahiptir?</h2>
                            <p>
                                İsmindeki "bi (iki)" kelimesinden anlaşıldığı üzere bu rahatsızlık sadece üzüntüden (depresyon)
                                oluşmaz. Tablonun diğer kefesinde mani (aşırı taşkınlık) evresi vardır. Kişinin hayatı, bu
                                birbirine okyanus kadar uzak iki uca çarparak geçer.
                            </p>

                            <h2>1. Mani (High) Belirtileri </h2>
                            <p>
                                Aklınızda canlandırın; bir birey aniden (genellikle uykusuz geçirdiği birkaç günün
                                ardından) kendini olağanüstü hissetmeye başlar. Bipoların yükselme fazında
                                kişi "Uyumadan günlerce idare edebiliyorum" hissini bir lütuf sanırken
                                beyninin motoru aslında tehlikeli bir hararet eşiğine gelmiştir.
                            </p>
                            <ul>
                                <li><strong>Hızlı Düşünme ve Fikir Uçuşmaları:</strong> Zihnindeki projeler o kadar fazladır ki konuşurken cümleler yetmez. Bir saniye önce "Yurtdışına taşınıp holding kuracağım" derken, diğer saniyesinde bambaşka bir yatırım fikrine geçer (Dürtüsellik).</li>
                                <li><strong>Kendini Abartılı Yüksek/Önemli Görme (Grandiözite):</strong> Normal bir yetişkin iken aniden "Ben seçilmiş kişiyim" inancı yaşanabilir.</li>
                                <li><strong>Risk Alma Hissi:</strong> Hesaptaki tüm parayı anlamsız yerlere harcamak, tehlikeli işlere / ahlaki sınırlara giren hızlı ilişkiler yaşamak. Normalde muhafazakar bir insanın bile dürtülerinin sınırını kaybetmesi gibi durumlar hastada gözlemlenir.</li>
                            </ul>

                            <h2>2. Depresif (Low) Belirtiler</h2>
                            <p>
                                O devasa roket motoru aniden susar. Birkaç hafta önce dünyayı fethedeceğine
                                inanan beyin, bu kez <Link href="/hizmetler/depresyon">klasik depresyon (çökkünlük) tablolarının</Link>
                                esiri olur. Kişinin dünyası anlamsız, enerjisiz ve karanlık bir hapishaneye dönüşür.
                            </p>
                            <ul>
                                <li><strong>Umutsuzluk Uykuları:</strong> Yatağından çıkamama, banyo yapma ihtiyacı dahil hayati eylemleri reddetme isteği. Gündüz uyuyup gece uyanmak.</li>
                                <li><strong>Değersizlik Suçluluğu:</strong> "Sonra haftalarca hiçbir şey yapmak istemiyorum, ben asalağım" hislerinin getirdiği ağır ağlama nöbetleri.</li>
                                <li><strong>Anhedoni (Zevk Alamama):</strong> Daha önce (özellikle manide) coşku duyulan yemeğin, hobinin ve partnerin artık sönük, tatsız ve itici gelmesi.</li>
                            </ul>

                            <h2>İki Uç Arasındaki Gizli Tehlike: Anksiyete</h2>
                            <p>
                                Bu devasa yıkımın içinde kişi dönem dönem öylesine korkuya kapılır ki,
                                bipoların <Link href="/hizmetler/anksiyete">ağır bir kaygı bozukluğu ile ele ele</Link>
                                kol gezdiği dönemler izlenir ("Acaba yine kontrolden çıkacak mıyım?" korkusu). Çoğu
                                vaka mani esnasındaki yaptıklarını çöküş döneminde idrak ettiğinde (örneğin servetini
                                harcadığında) tarifsiz bir <Link href="/hizmetler/panik-atak">panik atağın, bunaltının</Link>
                                eşiğine sürüklenebilir.
                            </p>

                            <h2>Belirtilerin Uzman Değerlendirmesi İle Ayrımı</h2>
                            <p>
                                "Bende de şu ara bir enerji var, ben de bipolar mıyım?" demek sadece yüzeysel bir yaklaşım
                                olacaktır. Tıbbın bu zıtlıkları "hastalık" olarak nitelendirmesi, kişinin işini,
                                mali durumunu, evliliğini ve çevresiyle ilişkisini bariz derecede "zarara uğratıyor veya risk teşkil
                                ediyorsa" söz konusu olur. Ankara'daki kliniğimizde bu belirtilerin günlük bir reaksiyon mu yoksa
                                yapısal bir "duygudurum dalgalanması" dengesizlik hali mi olduğu, derin psikiyatrik görüşme baz alınarak belirlenir.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Yetişkin Sağlığı Notu</strong>
                                Okuduğunuz satırlar yalnızca informatif bir yansımasıdır (Birebir tanı yerine asla geçmez). Bipolar veya ilişkili psikiyatrik seyir; "irade gücü, dua okumak veya boşver demek" suretiyle değil, medikal tıp bilimi (Psikiyatrist gözetimi) aracılığıyla dizginlenir. Tıbbi teşhis için muhakkak bulunduğunuz konumdaki uzmana başvurunuz.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <p>Durumun gidişatını tek başınıza yargılamaya çalışmadan, o zorlu duygusal gel-gitlerin adını doktorla koyun.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Değerlendirme Seansı Talep Et →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Psikiyatri Ön Görüşme (Eryaman)</h3>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Randevu Planı</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>İlişkili Makaleler</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/hizmetler/bipolar-bozukluk">Değerlendirme Süreci İçin: Bipolar (Ana Sayfa)</Link></li>
                                    <li><Link href="/blog/mani-donemi-nedir">Mani Evresi Nedir?</Link></li>
                                    <li><Link href="/blog/bipolar-ile-depresyon-arasindaki-fark">Klasik Depresyondan Farkı</Link></li>
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
