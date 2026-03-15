import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon/page.module.css';

export const metadata: Metadata = {
    title: 'Ankara Eryaman Tükenmişlik Sendromu Değerlendirmesi | Uzm. Dr. Abdullah Maraş',
    description:
        'İş hayatında tükenmişlik, motivasyon kaybı ve duygusal yorgunluk hakkında bilgilendirme ve Eryaman’da psikiyatrik değerlendirme süreci.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/hizmetler/tukenmislik-sendromu' },
    openGraph: {
        title: 'Ankara Eryaman’da Tükenmişlik Sendromu Değerlendirmesi',
        description: 'İş hayatında tükenmişlik, motivasyon kaybı ve duygusal yorgunluk hakkında bilgilendirme ve Eryaman’da psikiyatrik değerlendirme süreci.',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Tükenmişlik sendromu nedir?',
        answer: 'Ağır iş temposu veya başa çıkılamayan duygusal yükler altında, zihnin ve bedenin kronik strese bağlı olarak tüm uyum yeteneğini yitirdiği, performansın çöktüğü psikiyatrik bir tablo olup, şiddeti kişiden kişiye değişebilir.',
    },
    {
        question: 'Tükenmişlik depresyon mu?',
        answer: 'Depresyon hayatın geneline yayılan bir çökkünlük iken tükenmişlik (burnout) çoğunlukla mesleki veya yoğun sorumluluk alanlarından tetiklenen bir duygusal iflastır. Ancak her ikisi klinik tabloda örtüşebilir veya birbirine zemin hazırlayabilir.',
    },
    {
        question: 'Tükenmişlik geçer mi?',
        answer: 'Kişinin üzerine yüklenen o kontrol edilemez stres döngüsü yapılandırıldığında ve gerekli psikiyatrik görüşme adımlarıyla kişinin başa çıkma stratejileri revize edildiğinde klinik iyileşme potansiyeli yüksektir.',
    },
    {
        question: 'Tükenmişlik ne kadar sürer?',
        answer: 'Duygusal yorgunluğun seyrine ve yetişkinin yüklerinden arınabilme kapasitesine (bireysel değerlendirme bulgularına) göre haftalar ile aylar arasında değişkenlik (kişiden kişiye değişebilir formüllerle) göstererek seyreder.',
    },
    {
        question: 'Sürekli yorgunluk psikolojik mi?',
        answer: 'Dahili (kansızlık veya vitamin) bir sebep ortada yoksa, 10 saat dahi uyunmasına rağmen geçmeyen o ağır bitkinlik; beynin psikiyatrik stresi taşıyamamasından doğan nörobiyolojik bir enerji tahliyesidir.',
    },
    {
        question: 'Motivasyon kaybı neden olur?',
        answer: 'Kişinin gösterdiği onca emeğin iş veya aile hayatında (ödül/takdir) dengesinde sürekli karşılıksız kalması, sonucunda zihnin "Ne yaparsan yap değişmeyecek" kodlamasını yazmasıyla motivasyon iflas eder.',
    },
    {
        question: 'İşten soğuma normal mi?',
        answer: 'İş yerinde geçici krizler esnasında yaşanacak isteksizlikler olağandır. Fakat iş yerine gitme fikri kişiyi sadece soğutmakla kalmıyor, fiziksel bedende "mide bulantısı veya kalpte çarpıntı" yaratıyorsa orada klinik bir sorun vardır.',
    },
    {
        question: 'Eryaman’da tükenmişlik değerlendirmesi nasıl yapılır?',
        answer: 'Ankara Eryaman\'daki kliniğimizde, hastanın yaşam tarzı, çalıştığı ortamın dinamikleri ve taşıdığı içsel sorumluluklar psikiyatrik görüşme esasıyla haritalandırılarak tükenmişliğin kök neden tespiti (ve terapi/ilaç entegrasyonu) birebir görüşmelerle planlanır.',
    },
];

export default function TukenmislikPillarPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroBg}><div className={styles.heroOrb}></div></div>
                <div className={`container ${styles.heroContent}`}>
                    <Link href="/hizmetler" className={styles.backLink}>← Tüm Değerlendirme Alanları</Link>
                    <span className={styles.heroIcon}>🔋</span>
                    <h1>Ankara Eryaman’da Tükenmişlik Sendromu Değerlendirmesi</h1>
                    <p className={styles.heroDesc}>
                        "Hiçbir şeye enerjim yok", "İşe gitmek istemiyorum" ya da "Artık hiçbir şey keyif vermiyor"
                        şeklindeki cümleler, basit bir yorgunluğun ötesinde; zihnin yıllardır taşıdığı yükler altında iflas
                        bayrağını çektiğinin kanıtıdır. Bireysel değerlendirme ile yeniden enerji regülasyonunu sağlayacak adımlara zemin hazırlıyoruz.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>(Ankara Psikiyatrist Uzmanı)</span></div>
                    </div>

                    <div className="info-banner" style={{ marginTop: 'var(--space-6)' }}>
                        <strong>📌 Klinik Bildirim</strong>
                        Tükenmişlik (Burnout) olgusu sadece yetişkin çalışma/iş ve özel yaşam pratikleri çerçevesinde ele alınır.
                        Bu sayfa üzerindeki tıbbi bilgilendirmeler 16 yaş altı çocukları kapsamaz. Kliniğimizde <strong>16 yaş ve üzeri ergenlere yönelik</strong> psikiyatrik değerlendirme hizmeti sunulmaktadır. Kesin tedavi vaadinde
                        bulunulmaz, seyrin gidişatı yalnızca birebir hekim muayenesi sonrasında yapılandırılabilir.
                    </div>
                </div>
            </section>

            <section className="section">
                <div className={`container ${styles.contentGrid}`}>
                    <article className={styles.article}>

                        <p className={styles.lead}>
                            İş dünyasının yüksek beklentileri, ağırlaşan ekonomik gerçeklikler veya hayat içerisindeki
                            sürekli "verici" (idare edici) rolde olmak, bir yetişkinin ruhsal depodaki son kırıntıları dahi tüketmesiyle
                            sonuçlanabilir. Tükenmişlik; aniden çıkan bir öfke veya hüzünden ziyade, yıllardır içinizde usul usul yanan
                            bir ateşin (stresin), artık sizi sadece <Link href="/blog/surekli-yorgun-hissetmek-psikolojik-mi">sürekli yorgunum</Link> dedirtecek
                            seviyede tamamen küle çevirmesi halidir.
                        </p>

                        <h2 id="tukenmislik-nedir">Tükenmişlik Sendromu Nedir?</h2>
                        <p>
                            Sıklıkla "Burnout" olarak isimlendirilen <Link href="/blog/tukenmislik-sendromu-nedir">Tükenmişlik Sendromu</Link>, erişkinin mesleki
                            veya aşırı stresli yaşam koşulları karşısında (özellikle emek/ödül dengesinin çökmesiyle birlikte) organizmanın
                            tüm uyum becerilerini yitirmesidir. Hastada hiçbir şey için ayağa kalkacak, hatta o sorunu
                            tartışacak dahi "pil", yani yaşam gücü kalmamıştır. Belirtiler kişiden kişiye değişebilir nitelik taşısa da,
                            ortak olan tablo ağır bir duyarsızlaşmadır.
                        </p>

                        <h2 id="is-hayati">İş Hayatında Tükenmişlik Nedir?</h2>
                        <p>
                            Evde görece daha rahat hissedip, ofis binasını veya üniformayı gördüğü an midede kramplar başlayan kişi;
                            bu tabloyu mesleğine kodlamıştır. Fazla mesailer, değer görmeme, çalışanın yaptığı iyi işin hiçbir zaman
                            görülmeyip hep eksiklerin yüzüne vurulması; onu iş yerine karşı sadece <Link href="/blog/ise-gitmek-istememe-hali">işe gitmek istemiyorum</Link>
                            diyecek noktaya değil, mesleğine tamamen "duyarsız" (ne yaparsanız yapın umurumda değil) diyecek bir kayıtsızlığa iter.
                        </p>

                        <h2 id="surekli-yorgunluk">Sürekli Yorgun Hissetmek Ne Anlama Gelir?</h2>
                        <p>
                            Fiziksel tahlillerinde ne D vitamini eksikliği ne de kansızlığı bulunmayan bir hasta, sabahtan akşama
                            kadar "Ben adım atamıyorum, kemiklerim ağrıyor" diyorsa; orada bedeni felç eden duygu yorgunluğudur.
                            Stres hormonu olan kortizolün arızalanması ile kaslarda biriken kronik gerginlikler; fiziksel değil,
                            tamamıyla <Link href="/blog/tukenmislik-sendromu-belirtileri-nelerdir">psikolojik yorgunluğun sendromsal belirtisidir</Link>.
                        </p>

                        <h2 id="motivasyon-kaybi">Motivasyon Kaybı Neden Olur?</h2>
                        <p>
                            "Artık hiçbir şey keyif vermiyor, ne yapsam sonucunda ne değişecek ki?" cümlesi, tükenmiş bir zihnin
                            imdat sinyalidir. Beyindeki ödül merkezi (dopamin üretimi) tamamen bozulmuştur. Kişi evindeki hobisine, eşiyle yediği
                            yemeğe, eskiden tutkuyla bağlı olduğu projelerine sadece bir "zorunluluk ve yüktür" gözüyle bakar. Bu hissin arkasındaki
                            <Link href="/blog/motivasyon-kaybi-neden-olur">motivasyon kaybı mekanizmasının</Link> tamiri psikiyatrik vizyonla değerlendirilebilir.
                        </p>

                        <h2 id="sabah-ise-gitme">Sabah İşe Gitmek İstememe Hali</h2>
                        <p>
                            Pazartesi sendromundan tamamen farklı bir klinik tablodur. Kişi sadece pazartesi değil; haftanın
                            hergünü uyandığında yüzünde kocaman bir umutsuzluk taşır. Arabasına bindiğinde ayağı iş yerine gitmek
                            istemez. Zihin o kadar çok "beklenti ve tehlike (mobbing) tehdidi" algılar ki
                            zaten baştan kapatır kendini. "İstifa edemem kredim var" ile "Gidersem daha fazla dayanamayacağım"
                            arasında bedeni sıkar.
                        </p>

                        <h2 id="duygusal-tukenme">Duygusal Tükenme Nedir?</h2>
                        <p>
                            Fiziksel olarak yorulmanın bir istirahati vardır. Fakat <Link href="/blog/tukenmislik-sendromu-nedir">duygusal tükenme</Link>;
                            şefkat, idare etme, öfke gibi tüm his barajlarının yıkılmasıdır. Evde çocuğunun en ufak
                            bir sorusuna bağıran, trafikte önünden geçen adama terörist muamelesi yapan yetişkinin asıl sorunu o
                            kişiler değildir; onun duygusal kapasitesinde "hoşgörü ve idare (tolerans)" edecek bir santimlik yer kalmamıştır.
                        </p>

                        <h2 id="zihinsel-yorgunluk">Zihinsel Yorgunluk Belirtileri</h2>
                        <p>
                            Duyguların akabinde beyin de sarsıntıya girerek "Brain Fog" denen sisli bir kafa yaşatır. Toplantıda
                            konuşulanların onda birini anlamama, raporu beş defa yanlış okuma, evin doğalgazını açık unutup çıkma gibi
                            durumların temelinde zihinsel yıpranma yatar. Bu tablo bazen <Link href="/hizmetler/eriskin-dehb">Erişkin DEHB</Link> uyarımına ve unutkanlığına (gizlenmiş) zemin de olabilir.
                        </p>

                        <h2 id="depresyon-farki">Tükenmişlik ve Depresyon Farkı</h2>
                        <p>
                            Dışarıdan birbirine çok karışırlar. Ancak <Link href="/blog/tukenmislik-ve-depresyon-arasindaki-fark">Tükenmişliğin depresyondan temel farkı</Link>;
                            tükenmişliğin genellikle aşırı mesai, "hedef, KPI baskısı, tükenmez çalışma listeleri" gibi bir dış etkenin (ortamın)
                            aşındırmasıyla (önce işle) başlamasıdır. <Link href="/hizmetler/depresyon">Majör depresyon ise</Link> çalışma
                            hayatı olmasa bile veya en mutlu anında dahi kişiyi ezecek dipsiz bir keder veya benlik değersizliğidir. Lakin uzayan bir tükenmişlik depresyonu (majör tabloyu) kolayca doğurabilir.
                        </p>

                        <h2 id="anksiyete-iliskisi">Tükenmişlik ve Anksiyete İlişkisi</h2>
                        <p>
                            Günde 16 saat çalıştırılan ve her hata yaptığında aşağılanan bir bireyin sistemi, belli bir aşamada
                            sürekli diken üzerinde (nöbet yerinde) olmasıyla
                            <Link href="/hizmetler/anksiyete">Anksiyete bozukluğunu (Korku ve panik)</Link> yaratır. Başlangıçta panik olarak
                            çıkan bu tablo, yıllarca devam ettikçe artık "Hiçbir şeye yetemiyorum, ne olacaksa olsun" noktasına kayıp kişiyi "tükenmişlik uyuşukluğuna" kilitler.
                        </p>

                        <h2 id="performans-odak">Performans Düşüşü ve Odak Sorunu</h2>
                        <p>
                            Bir ay öncesine dek dört saatte bitirdiği projeyi; tükenmişlik tablosuna giren yetişkin bir hasta artık dört günde zor bitirir.
                            Zihnin odağı, yapılan işe değil "Ben ne zaman bu işkenceden kurtulacağım" feryadına takılı kalmıştır. Bu yüzden mesleki
                            hatalar katlanır, hatalar da eleştiriyi ve özgüven çöküşünü tekrar perçinler.
                        </p>

                        <h2 id="sosyal-geri">Sosyal Geri Çekilme</h2>
                        <p>
                            Arkadaş grubunun mesajlarına cevap veremez hale gelme, akraba düğününden veya telefon aramasından ("Yine ne istiyorlar"
                            diyerek) kaçma; sistemin korunma ve savunmaya geçmesinin klinik fotoğrafıdır. Birey tek bir saniyesini
                            bile başkalarına ayırmak istemez çünkü kendine de ayıracak takati yoktur.
                        </p>

                        <h2 id="denge-yasami">İş-Özel Hayat Dengesi Yıkımı</h2>
                        <p>
                            Kurumsalda veya esnaflıktaki aşırı baskılar mesai saatinde şirkette kalmaz. Akşam sofrasına, yatağın içine, hafta sonundaki
                            pikniğe gelir. Ailesinin yanında bedenen dursa da zihnen o bitmeyen projelerin ızdırabında kalan hasta, bu dengesizlik neticesinde eşiyle de (Tükenmişliğin yansıması yüzünden) en asgari muhabbeti yapamayarak boşanma eşiklerine gelir.
                            Bu noktada <Link href="/hizmetler/uyku-bozukluklari">Uyku bozukluklarındaki o gece çarpıntıları</Link> kaçınılmaz bir sondur.
                        </p>

                        <h2 id="belirtiler-genel">Tükenmişlik Belirtileri Nelerdir?</h2>
                        <p>
                            Güne bitkin doğmak, aşırı sinirlilik hali (toleranssızlık), midede geçmeyen bulantı, baş ve boyun
                            ağrıları, işi ve mesleği değersiz hissetme, hastalıklara çok sık yakalanma (çöken bağışıklık).
                            Tüm bu <Link href="/blog/tukenmislik-sendromu-belirtileri-nelerdir">duygusal tükenme belirtileri</Link> erişkini tamamen işlevden alıkoyar.
                        </p>

                        <h2 id="ne-kadar-surer">Tükenmişlik Ne Kadar Sürer?</h2>
                        <p>
                            Burnout; ne yazık ki üç günlük bir izin ya da deniz tatiliyle bir anda geçmez. Kronikleşmiş
                            (Yıllanmış) bir inatlaşmanın eseri ise; eğer profesyonel (hekim) yönlendirmesi veya terapi konsültasyonu
                            olmazsa, zihin kendi kendine sadece aylar sonrasında <Link href="/blog/tukenmislik-ne-kadar-surer">tükenmişlik sürecini</Link> kronik umutsuzluğa evirecektir.
                        </p>

                        <h2 id="psikiyatri-ne-zaman">Ne Zaman Psikiyatri Değerlendirmesi Düşünülmeli?</h2>
                        <p>
                            Hayatınıza giren iş stresi veya aile yükü nedeniyle <strong>haftalardır iştahınız, uyku ve tahammül kaliteniz koptuysa;</strong> işe gitmekte fiziksel bir zorlantı çekiyorsanız, zihninizin bu alarmına kulak vermeniz şarttır. Reçetesiz ve kendi başına atlatılır ümidi, sizi telafisi çok zor majör krizlere ya da istifaya zorlar.
                            "Bireysel değerlendirme" ve gerçekçi medikal / bilişsel adımlar tek koruyucu perdedir.
                        </p>

                        <h2 id="eryaman-sureci">Ankara Eryaman’da Tükenmişlik Değerlendirme Süreci</h2>
                        <p>
                            Uzm. Dr. Abdullah Maraş gözetimindeki (Ankara Batıkent, Etimesgut, Altay Mahallesi rotasında yer alan)
                            <Link href="/randevu">Ankara Eryaman tükenmişlik değerlendirme süreci</Link>; sadece "Aman biraz dinlenin" diyen boş tesellilerle kalmaz. Omuzlarınıza bindirilmiş "hayır diyememe" kilitlerinizi açarak, işte veya hayatta motivasyonunuzu kemiren "özgüven çukurlarını" ve uyaramadığınız beyninizi regüle etmek üzere psikiyatrik görüşme ile işlenen yapılandırılmış (hastaya özel) medikal-terapötik analizleri yönetmektedir.
                        </p>

                        <div className={styles.faqSection} id="sss">
                            <h2>Sık Sorulan Sorular</h2>
                            <FAQSection items={faqItems} />
                        </div>

                        <div className={styles.articleCta}>
                            <h3>Kendinizi İş İçin Yakmayın</h3>
                            <p>Omuzlarınızdaki devasa yükler, bir psikiyatri muayenesinde (bireysel klinik) incelendiğinde asıl çıkış kapısını rahatlıkla gösterecektir.</p>
                            <Link href="/randevu" className="btn btn--primary btn--lg" style={{ marginTop: 'var(--space-4)' }}>
                                Psikiyatrik Değerlendirmeyi Planla →
                            </Link>
                        </div>
                    </article>

                    <aside className={styles.sidebar}>
                        <nav className={styles.sidebarCard}>
                            <h4>Sayfa Rehberi</h4>
                            <ul className={styles.tocList}>
                                <li><a href="#tukenmislik-nedir">Tükenmişlik Nedir?</a></li>
                                <li><a href="#is-hayati">Mesleki (İş) Tükenmişliği</a></li>
                                <li><a href="#surekli-yorgunluk">Sürekli Yorgunluk Durumu</a></li>
                                <li><a href="#motivasyon-kaybi">Motivasyonun İflası</a></li>
                                <li><a href="#sabah-ise-gitme">Gidilmek İstenmeyen Sabahlar</a></li>
                                <li><a href="#duygusal-tukenme">Duyguların Tükenmesi</a></li>
                                <li><a href="#zihinsel-yorgunluk">Brain Fog (Sisli Zihin)</a></li>
                                <li><a href="#depresyon-farki">Burnout ve Depresyon Kıyası</a></li>
                                <li><a href="#anksiyete-iliskisi">Kaygı ve Korku (Anksiyete)</a></li>
                                <li><a href="#performans-odak">İş Aksaklıkları</a></li>
                                <li><a href="#sosyal-geri">Toplumdan (Sosyal) Çekilme</a></li>
                                <li><a href="#denge-yasami">İş-Özel Yaşam Erozyonu</a></li>
                                <li><a href="#belirtiler-genel">Burnout Belirtileri</a></li>
                                <li><a href="#ne-kadar-surer">Şikayetlerin Süresi</a></li>
                                <li><a href="#psikiyatri-ne-zaman">Başa Çıkılamayan Durumlar</a></li>
                                <li><a href="#eryaman-sureci">Hekim (Eryaman) Yaklaşımı</a></li>
                            </ul>
                        </nav>

                        <div className={styles.sidebarCta}>
                            <h3>Tükenmişlik Polikliniği</h3>
                            <p>Siz bitmediniz, sadece yanlış enerjiyi harcadınız. Onarmaya başlayın. Ankara/Eryaman.</p>
                            <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Randevu Modülü</Link>
                        </div>

                        <div className={styles.sidebarCard}>
                            <h4>Klinik Müracaat</h4>
                            <div className={styles.doctorCard}>
                                <div className={styles.doctorIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                </div>
                                <strong>Uzm. Dr. Abdullah Maraş</strong>
                                <span>Ruh Sağlığı (Psikiyatrist) Uzmanı</span>
                                <span>Ankara, Eryaman</span>
                            </div>
                        </div>

                        <div className={styles.sidebarCard}>
                            <h4>İlgili Kütüphane</h4>
                            <ul className={styles.sidebarLinks}>
                                <li><Link href="/blog/tukenmislik-sendromu-nedir">Sonsuz İsteksizlik Nedir?</Link></li>
                                <li><Link href="/blog/motivasyon-kaybi-neden-olur">Hayata Neden Küsülüyoruz?</Link></li>
                                <li><Link href="/blog/tukenmislik-sendromu-belirtileri-nelerdir">Burnout Genel Analizi</Link></li>
                                <li><Link href="/blog/surekli-yorgun-hissetmek-psikolojik-mi">Kemiklerinize Kadar Acıtan Acı</Link></li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>

            {/* Schema Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "MedicalWebPage",
                            "name": "Ankara Eryaman Tükenmişlik Sendromu Değerlendirmesi",
                            "url": "https://www.drabdullahmaras.com.tr/hizmetler/tukenmislik-sendromu",
                            "about": {
                                "@type": "MedicalCondition",
                                "name": "Burnout Syndrome",
                                "alternateName": "Tükenmişlik Sendromu, Duygusal ve Mesleki Yorgunluk"
                            },
                            "author": { "@id": "https://www.drabdullahmaras.com.tr/#physician" },
"isPartOf": { "@id": "https://www.drabdullahmaras.com.tr/#website" }
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": faqItems.map(item => ({
                                "@type": "Question",
                                "name": item.question,
                                "acceptedAnswer": { "@type": "Answer", "text": item.answer }
                            }))
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://www.drabdullahmaras.com.tr/" },
                                { "@type": "ListItem", "position": 2, "name": "Hizmetler", "item": "https://www.drabdullahmaras.com.tr/hizmetler" },
                                { "@type": "ListItem", "position": 3, "name": "Tükenmişlik Sendromu", "item": "https://www.drabdullahmaras.com.tr/hizmetler/tukenmislik-sendromu" }
                            ]
                        }
                    ]
                })
            }} />
        </>
    );
}
