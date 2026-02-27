import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Anksiyete Krizi Sırasında Ne Olur? Belirtiler ve Destek | Uzm. Dr. Abdullah Maraş',
    description:
        'Anksiyete krizi nasıl başlar, zihinsel ve bedensel belirtileri nelerdir? Kriz anında sakinleşmeye yardımcı adımlar ve Eryaman panik değerlendirmesi.',
    alternates: { canonical: 'https://drabdullahmaras.com/blog/anksiyete-krizi' },
    openGraph: {
        title: 'Anksiyete Krizi Sırasında Neler Yaşanır?',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Anksiyete krizi tehlikeli midir?',
        answer: 'Anksiyete krizinin kendisi hayati bir tıbbi tehlike oluşturmaz, kalbinize veya diğer organlarınıza fiziksel olarak zarar vermez. Ancak yarattığı his son derece rahatsız edici ve korkutucudur.',
    },
    {
        question: 'Anksiyete krizi ile panik atak arasında fark var mı?',
        answer: 'Çoğu zaman aynı kavram gibi kullanılsalar da panik atak aniden ve beklenmedik şekilde gelirken, anksiyete krizi genellikle bilinen bir stres kaynağının zamanla birikmesi sonucu kademeli olarak zirveye ulaşır.',
    },
    {
        question: 'Anksiyete krizi anında kalp krizi geçirdiğimi nasıl anlarım?',
        answer: 'Özellikle ilk kez yaşandığında belirtiler karışabilir. Şiddetli göğüs ağrısı, sol kola yayılan ağrı gibi belirtilerde mutlaka önce bir acil servis doktoruna başvurularak fiziksel durum dışlanmalıdır.',
    },
    {
        question: 'Kriz anında ne yapabilirim?',
        answer: 'Güvenli bir ortama geçerek dikkatinizi "beş duyu" (etraftaki eşyaların isimlerini içinden saymak vb.) gibi dış çevresel unsurlara çekecek aktiviteler (grounding) fayda sağlayabilir.',
    },
    {
        question: 'Ankara Eryaman (Altay Mh.) bölgesinde bu değerlendirmeyi uyguluyor musunuz?',
        answer: 'Evet, Uzm. Dr. Abdullah Maraş kliniğinde bu ve benzeri anksiyete/panik tablolarının kapsamlı psikiyatrik değerlendirmesi yapılmaktadır.',
    },
];

export default function AnksiyeteKriziBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/anksiyete">Anksiyete</Link><span>/</span>
                        <span>Anksiyete Krizi</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Anksiyete</span>
                        <time dateTime="2026-03-24">24 Mart 2026</time>
                        <span>•</span><span>8 dk okuma</span>
                    </div>
                    <h1>Anksiyete Krizi Sırasında Ne Olur?</h1>
                    <p className={styles.heroDesc}>
                        Kontrol edemediğiniz bir korku dalgası, boğuluyor gibi hissetmek ve "çıldıracağım" düşüncesi...
                        Sıklıkla panik atak ile karıştırılan anksiyete krizinin belirtilerini yakından inceliyoruz.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>Psikiyatri Uzmanı</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            <p className={styles.lead}>
                                "Her an kötü bir şey olacak, kontrolümü kaybedeceğim ve ne yapacağımı bilmiyorum..."
                                Anksiyete krizinin (ya da anksiyete atağının) ortasındayken, akıldan geçen düşünceler genellikle bunlardır.
                            </p>
                            <p>
                                Aslında anksiyete krizini daha iyi anlamak, <Link href="/hizmetler/anksiyete">anksiyete ile
                                    başa çıkma yolculuğunda</Link> atılacak güçlü adımlardan biridir. Bir kriz esnasında vücudumuzda ve
                                zihnimizde neler olduğunu ayrıntılı biçimde inceleyelim.
                            </p>

                            <h2>Anksiyete Krizi Nasıl Hissedilir?</h2>
                            <p>
                                Anksiyete krizleri, stresin azar azar biriktiği ve sonunda bardağı taşırdığı bir kaygı tırmanışıdır.
                                Bu dönemde kişi yoğun miktarda huzursuzluk ve korku hisseder. Dışarıdan olaylar oldukça
                                sessiz, sakin görünse de zihin adeta yangın alarmı verir gibidir. Vücutta yükselen adrenalin seviyesi,
                                fiziksel bir tehdit olmaksızın kişiyi "Savaş ya da Kaç" (Fight or Flight) durumuna iter.
                            </p>

                            <h2>Zihin ve Düşünce Dünyasında Neler Yaşanır?</h2>
                            <p>
                                Bir kriz sırasında beynin tehlike merkezi (amigdala) devralır ve mantıklı düşünme kapasitesini
                                (prefrontal korteks) geçici olarak zayıflatır.
                            </p>
                            <ul>
                                <li><strong>Geleceğe Dair Korkular:</strong> Zihin sadece gelecekte olabilecek en kötü senaryolara odaklanır. "Ya işimi kaybedersem", "Ya bana bir şey olursa" döngüsü sürekli tekrarlanır.</li>
                                <li><strong>Kontrol Kaybı Korkusu:</strong> Aklımı kaçırıyor muyum, kontrolümü kaybedip herkese rezil olacak mıyım gibi endişeler, krizin süresini daha da uzatır.</li>
                                <li><strong>Sıyrılma / Uzaklaşma İsteği:</strong> Kriz esnasında en belirgin duygu, o anki duygu durumundan
                                    ne pahasına olursa olsun bir an önce &ldquo;kurtulma&rdquo; isteğidir.</li>
                            </ul>

                            <h2>Bedensel Belirtiler Nelerdir?</h2>
                            <p>
                                Düşüncelerde başlayan yangın alarmı tüm vücuda yayılır:
                            </p>
                            <ul>
                                <li>Hızlı kalp atışı (taşikardi) ve çarpıntı.</li>
                                <li>Nefes alamama, boğulma hissi (hiperventilasyon).</li>
                                <li>Mide bulantısı, ishal ya da karın ağrısı.</li>
                                <li>Ani titreme krizleri, terleme, sımsıcak / buz gibi olma hissiyatı.</li>
                                <li>Göğüs kafesinde bir ağırlık ve bası hissi.</li>
                            </ul>

                            <h2>Panik Atak ile Karışma İhtimali</h2>
                            <p>
                                Yukarıda yazılan bedensel semptomların önemli bir bölümü aynı anda
                                <Link href="/hizmetler/panik-atak">panik atak rahatsızlığında</Link> da görülür. Aslında
                                Klinik psikiyatride &ldquo;anksiyete atağı&rdquo; şeklinde resmi bir DSM-5 tabiri yoktur, bu genellikle
                                günlük dilde yaşanan aşırı kaygının zirve yapması durumunu tanımlar.
                                Panik ataklar dakikalar içerisinde hiçbir belirgin stresör olmaksızın şiddetle aniden gelen fırtınalardır;
                                anksiyete krizleri ise bir süredir devam eden endişe sürecinin zirvesinde görülürler.
                                <Link href="/blog/anksiyete-ve-panik-atak-farki">Anksiyete ile panik atağı farklı kılan unsurları</Link>
                                ayrıca okuyabilirsiniz.
                            </p>

                            <h2>Kriz Anında Neler Yardımcı Olabilir?</h2>
                            <p>
                                Tıbbi bir iyileşme taahhüdü olmayan, yalnızca kriz sürecini daha "tolere edilebilir" hale
                                getirmeye yardımcı bazı grounding (topraklanma) önerileri sıklıkla uygulanır:
                            </p>
                            <ul>
                                <li><strong>Nefes Odaklılık:</strong> Hızlı ve kısa nefesler karbon dioksit dengesini bozar. Yavaşça burundan nefes alıp (mümkünse karın bölgesine – diyaframa) ağızdan yavaşça vermek parasempatik (sakinleştirici) sinir sistemini devreye sokabilir.</li>
                                <li><strong>"5-4-3-2-1" Farkındalık Kuralı:</strong> Zihnin kontrolünü amigdaladan kortekse almak için görmeye (5 nesne), dokunmaya (4 nesne), duymaya (3 ses), koklamaya (2 koku) ve tatmaya (1 tat) odaklanabilirsiniz.</li>
                                <li><strong>Durumu Kabul Etmek:</strong> "Şu an güvendeyim, yaşadığım bir kaygı krizi, bunlar gelip geçici bedensel hisler" hatırlatması yapmak krize karşı savaşmayı engelleyerek hızını kesebilir.</li>
                            </ul>

                            <h2>Ne Zaman Acil veya Uzman Desteği Düşünülmeli?</h2>
                            <p>
                                Kriz anlarında göğüsteki sıkışma hissi, terleme ve nefes darlığı yoğunlaştığında kişiler çoğunlukla
                                soluğu hastanelerin "Acil Servis" bölümlerinde alırlar. Aslında özellikle söz konusu kalple ilgili
                                olduğunda (sol kola vuran ağrı, şiddetli göğüs ağrısı) tıbbi, fiziksel hastalık riskleri mutlaka acilen,
                                psikiyatri doktorlarından ziyade <strong>acillerdeki hekimlerce ekarte edilmelidir (dışlanmalıdır).</strong>
                            </p>
                            <p>
                                Birkaç kez acil servise gittikten ve tüm sonuçlar tamamen temiz çıktıktan sonra
                                işte o zaman klinik anlamda psikiyatrik süreç devralır. Aksi takdirde hayat kaliteniz düşecek ve
                                bu krizler <Link href="/blog/surekli-kaygi-hali">sürekli yaşanan yorucu bir anksiyeteye</Link>,
                                uyku düzenini de bozarak (<Link href="/hizmetler/uyku-bozukluklari">uyku bozukluklarına</Link>)
                                hatta depresyona dönüşebilir.
                            </p>

                            <h2>Ankara Eryaman'da Anksiyete İçin Psikiyatrik Değerlendirme</h2>
                            <p>
                                Kriz anında bir hekim bulmak zordur ancak krizler arası dönemde <strong>değerlendirme yapılması
                                    en doğru andır.</strong> Ankara, Etimesgut, Batıkent ve Eryaman (Altay Mh.) sakinleri kliniğimizde, modern,
                                kanıta dayalı ve yargılayıcı olmayan bir ortamda kaygı bozuklukları açısından Uzm. Dr. Abdullah Maraş ile
                                görüşebilirsiniz. Unutmayın, ne yapacağınızı bilmediğiniz kriz asıl endişedir; profesyonel yardım
                                sürecini anlamak ise konforu artıran somut adımların başında gelir.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Bilgilendirme Uyarı Metni</strong>
                                Buradaki teknikler yalnızca geçici bir rahatlama veya kriz sırasında yardımcı bir yaklaşımdır. Tıbbi teşhis/tedavi
                                amacını taşımazlar. Eğer kriz ve panik benzeri belirtiler sık ve sürekli hale gelmişse bir tıp doktoruyla (psikiyatri uzmanı) birebir görüşülmelidir.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <h3>Profesyonel Desteğe İhtiyacınız Varsa</h3>
                                <p>Anksiyete krizleriniz işlevselliğinizi etkiliyorsa, Ankara Eryaman'da bulunan muayenehanemizde profesyonel değerlendirme randevusu alabilirsiniz.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Randevu Bilgisi →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Danışma Randevusu</h3>
                                <p>Sorunlarınız için birlikte değerlendirme yapalım</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Randevu Al</Link>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4>Konuya Yakın Yazılar</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/hizmetler/anksiyete">Anksiyete (Hizmet)</Link></li>
                                    <li><Link href="/blog/anksiyete-belirtileri">Anksiyete Belirtileri Nelerdir?</Link></li>
                                    <li><Link href="/hizmetler/panik-atak">Panik Atak Nedenleri</Link></li>
                                    <li><Link href="/blog/anksiyete-ve-panik-atak-farki">Panik Atak Nasıl Anlaşılır?</Link></li>
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
