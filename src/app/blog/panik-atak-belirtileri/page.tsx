import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Panik Atak Belirtileri Nelerdir? Bedensel, Düşünsel Hisler | Uzm. Dr. Abdullah Maraş',
    description:
        'Panik atak belirtileri nelerdir? Ani kalp çarpıntısı, nefes alamama hissi ve terleme. Ankara Eryaman panik atak belirtisi değerlendirmesi ve ayırıcı tanı.',
    alternates: { canonical: 'https://drabdullahmaras.com/blog/panik-atak-belirtileri' },
    openGraph: {
        title: 'Panik Atak Belirtileri Nelerdir? Vücutta Nasıl Hissedilir?',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Panik atak kendisini en net hangi fiziksel belirtiyle gösterir?',
        answer: 'En keskin ve hasta tarafından en çok dile getirilen belirti, kalbin hızlı atması ve sanki "göğüsten dışarı fırlayacak gibi" hissedilmesidir (taşikardi).',
    },
    {
        question: 'Sol kol uyuşması her zaman kalp krizi midir?',
        answer: 'Hayır, aşırı adrenalin salınımında dolaşım sistemi etkilendiğinden panik atakta da bazen elde, sol kolda, ayakta şiddetli uyuşma ve karıncalanmalar yaşanabilir. Ancak ilk kez yaşanıyorsa tetkikler için kesinlikle acil kardiyoloji önerilir.',
    },
    {
        question: 'Neden "Nefes alamıyorum sanıyorum" durumu olur?',
        answer: 'Kişi aslında oksijensiz kalmamıştır; korku anında aldığı o hızlı soluklar yüzünden (hiperventilasyon) göğüs kafesinde bir bası oluşur ve bu durum paradoksal biçimde "hava açlığı" ya da boğulma hissine yol açar.',
    },
    {
        question: 'Aklımı kaçırıyor muyum hissi panik atak mıdır?',
        answer: 'Evet. Bedendeki bu denli şiddetli "bilinmeyen" alarm durumu esnasında, merkezi sinir sistemi aşırı yüklendiği için "kontrolü dış dünyadan kaybediyorum", "çıldıracağım" gibi bilişsel hisler oluşturabilir.',
    },
    {
        question: 'Panik ataktan şüpheleniyorsam Ankara Eryaman’da ne yapmalıyım?',
        answer: 'Acilde ve tahlillerde fiziksel durum (kalp vb.) dışlandıktan sonra "size hiçbir şeyiniz yok hastasınız falan değilsiniz" denildiğinde (psikiyatrik süreç kastedilmiştir), süreci değerlendirmek üzere Altay Mh., Eryaman’daki Uzm. Dr. Abdullah Maraş ile ilk konsültasyon planlanabilir.',
    },
];

export default function PanikAtakBelirtileriBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/panik-atak">Panik Atak</Link><span>/</span>
                        <span>Belirtiler</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Panik Atak</span>
                        <time dateTime="2026-02-12">12 Şubat 2026</time>
                        <span>•</span><span>9 dk okuma</span>
                    </div>
                    <h1>Panik Atak Belirtileri Nelerdir? Vücutta Nasıl Hissedilir?</h1>
                    <p className={styles.heroDesc}>
                        Düzenli kalp atışlarınızın saniyeler içinde aniden hızlanması, göğsünüzde taş gibi bir ağırlık ve
                        midenizde o amansız burkulma... Bedenin verdiği sahte bir hayatta kalma alarmlarının dışa vurumunu
                        olan Panik Atak Belirtilerini yakından inceliyoruz.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>Psikiyatri Uzmanı (Ankara Eryaman)</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            <p className={styles.lead}>
                                "Kalbim bir anda fırlayacak gibi oluyor, göğsüm sıkışıyor ve sanki nefes alamıyorum
                                sanıyorum."
                                Psikiyatri muayenehanelerinin <Link href="/hizmetler/panik-atak">panik atak değerlendirme</Link>
                                odalarında, atağı geçiren bir kişiden en sık duyduğumuz tasvir budur. Bedensel sinyaller,
                                kişiye öylesine inandırıcı bir "hayatta kalma" oyunu oynar ki hastalar
                                önce acil servis koridorlarında defalarca tahlil yaptırmadan psikiyatrist hekimine
                                nadiren gelirler.
                            </p>

                            <h2>Öncesinde Bir Tehlike Olmalı mıdır?</h2>
                            <p>
                                Aslında Panik atak (Panic Attack) klinik anlamda ortada hiçbir nesnel tetikleyici ya da büyük, can
                                tehlikesi yaratacak bir "tehdit" unsuru yokken <strong>aniden (out of nowhere / birden bire)</strong>
                                patlak vermesi ile bilinir.
                                Örneğin köpekten korkan birinin karşısına köpek çıktığında yaşadığı yoğun
                                histerik korku tablosu spesifik fobidir; panik atak belirtisi ise kişi tamamen sakinken (hatta
                                bazen <Link href="/blog/gece-panik-atak">uykudan çarpıntıyla uyanma durumu</Link> biçiminde
                                veya televizyon izlerken kanepede) gelişebilir.
                            </p>

                            <h2>1. Bedensel (Fiziksel) Belirtiler</h2>
                            <p>
                                İlkel beynimiz "amigdala", hayali bir tehdidi gerçek sanınca savaşması ya da kaçması adına
                                kaslara hızla dev miktarda adrenalin bırakır, kalbi son sürat çalıştırır ve
                                nefes alımını otomatik değiştirir. Beden şu bulguları verir:
                            </p>
                            <ul>
                                <li><strong>Kalp Atışının Hızlanması:</strong> En yaygın bulgudur. Güm güm atmaya başlayan kalp ya da tekleme biçiminde vurması.</li>
                                <li><strong>Göğüs Ağrısı:</strong> Özellikle ön göğüs kemiğinin altında bir bası, ağrı. "Kalbim sıkışıyor öleceğim" dedirtir.</li>
                                <li><strong>Terleme ve Solunum Güçlüğü:</strong> Bedande sırılsıklam olan ani ter boşalmaları, nefesin kısa kısa boğazda tıkanması, oksijen alamama hissi (Boğulma).</li>
                                <li><strong>Titreme, Uyuşma ve Ateş / Üşüme:</strong> Beden bazen buz gibi bazense alev alev gelir. Ellerde, sol kolda ya da midede, dizlerde iğne batması (karıncalanma).</li>
                                <li><strong>Gastrointestinal Belirtisi:</strong> Bir anda başlayan ani karın ağrısı veya ishal - midede burkulma ve bulantılar (Kelebek uçuşması denen anksiyete uyarımı).</li>
                            </ul>

                            <h2>2. Zihinsel / Bilişsel Belirtiler (Ölüm Korkusu)</h2>
                            <p>
                                Kişi bedensel olarak tırmanan ve 10 dakikada zirveye ulaşan (<Link href="/blog/panik-atak-kac-dakika-surer">
                                    atağın süresinde</Link>) bu tabloya bir anlam yüklemeye başladığında bilişsel
                                belirtiler o an kilitlenir kalır:
                            </p>
                            <ul>
                                <li><strong>"Ölecekmişim gibi hissediyorum":</strong> Çoğu hasta ilk atakta bir vasiyet dahi yazma, vedalaşma arzusuna girebilir çünkü kalp krizine eşdeğer bir ölüm korkusu yüklenmiştir (Panik bozukluğu olarak).</li>
                                <li><strong>"Kontrolümü Kaybedeceğim/Çıldıracağım":</strong> Dünyaya olan his iptal olduysa kişi, mantıklı davranamayacağını, bağırarak çıldırıp etraftaki insanlara (özellikle sokakta ise veya iş asansöründe) tamamen tüm saygınlığını ezip rezil olacağını zanneder.</li>
                            </ul>

                            <h2>3. Algısal (Dissosiyatif) Belirtiler</h2>
                            <p>
                                "Panik anında dünyaya uzaktan, bulanık ya da bir film karesi içinden seyredermiş gibi
                                bakanlar" derealizasyon denilen ve çok korkutucu olan o yabancılaşma hissini yaşarlar.
                                Birey (Depersonalizasyon) bazen de "bu beden bana ait değil" hissi ile kendisine dahi
                                yabancılaşır. Tüm fırtına beynin yarattığı sanal ama bedenin yaşadığı epey gerçeğe yakın
                                bir panik (tehdit) algısı savruluşudur.
                            </p>

                            <h2>Neden Bu Belirtileri Bir Profesyonelle Paylaşmalısınız?</h2>
                            <p>
                                Sıklıkla panik atağın sadece fiziksel bir korku olduğu sanılıp yalnız atlatılmaya çalışılır. Ancak
                                kişi bedeninde kopan bu belirtileri anlamadıkça sürekli <Link href="/blog/panik-atak-kalp-krizi-mi">
                                    kalp krizi ekarte süreci arayışlarıyla Acilleri gezerek</Link> hayat enerjisini bırakır.
                                Ataklar sönümlense bile ardından o kapıları çalan (yeni bir atak ne zaman gelir)
                                <Link href="/hizmetler/anksiyete">beklenti anksiyetesi</Link> hayatı esir alacak; asansör, avm ve dahi
                                yalnız banyo yapamama fobilerine, zaman içinde enerjisizliğe - <Link href="/hizmetler/depresyon">çökkün
                                    depresyona</Link> yol verebilecektir.
                            </p>

                            <h2>Ankara Eryaman Panik Atak Değerlendirme Süreci</h2>
                            <p>
                                Uzm. Dr. Abdullah Maraş, Ankara Eryaman (Altay Mh.) kliniğinde, hasta öykülerindeki bu belirtilerin
                                (kalp, solunum, sindirim uyarılarının) panik atak ile ilişkilendirilmesi ve bedensel diğer (endokrin/kalp vb)
                                şartlarla ayrıştırılmasını temel alır. Böyle bir süreci Ankara veya Etimesgut sınırlarında tek
                                başınıza yenmek yerine uzman hekim nezaretinde yürütmek kalıcı başarı ve rahatlığın en etik kanıtsal
                                kapısıdır. Hastalara uygulanabilecek rasyonel zihinsel yaklaşımlar (farmakoterapi yahut terapik adımlar)
                                bu silsileyi güvenli ellerde sonlandırır.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Genel Yasal Uyarı</strong>
                                Göğüs hizasındaki hiçbir ağrılı durumu hasta kendisi (İnternetten / yazılardan) yorumlayarak "Bu paniktir" dememeli;
                                ilk kez oluyorsa (veya organik kalp riski yüksekse) fiziksel acil hizmetlerine mutlaka 112 aracılığı ile veya yakınıyla
                                yetişmelidir. Belirtilen bu semptomlar tıbbi hekimlerle yapılan klinik değerleme dışlamasından (kalp temiz raporundan)
                                sonra psikiyatrik ayakta uzman süreç boyutuna varır.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <h3>Şiddetli Çarpıntıların Gerçek Yüzünü Birlikte İnceleyelim </h3>
                                <p>Bu korkularla savaşınızı bir doktor kliniğine taşıyıp Ankara Eryaman'da çözüm sürecinin psikiyatrik değerlendirme adımlarını dinlemek için irtibata geçin.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Randevu Menüsü ve İletişim →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Psikiyatrist Başvuru</h3>
                                <p>Panik ataklarınız için uzman psikiyatriye, Ankara Eryaman.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Değerlendirme Al</Link>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4>Konuya İlişkili Başlıklar</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/hizmetler/panik-atak">Panik Atak (Ana Sayfa)</Link></li>
                                    <li><Link href="/hizmetler/anksiyete">Sürekli Anksiyete İlişkileri</Link></li>
                                    <li><Link href="/blog/panik-atak-oldurur-mu">Atak Sırasında Ölür müyüm?</Link></li>
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
