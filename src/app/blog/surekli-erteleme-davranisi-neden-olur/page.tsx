import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Sürekli Erteleme Davranışı Neden Olur? | Procrastination ve DEHB',
    description:
        'Görevleri daimi olarak son dakikaya bırakma (procrastination) döngüsünün beynin dopamin sistemindeki ve yürütücü işlevlerindeki biyolojik teşhis ve yansıması.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/surekli-erteleme-davranisi-neden-olur' },
    openGraph: {
        title: 'Hiçbir İşe Başlayamama Korkusu, Erteleme ve DEHB Bağlantısı',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Ertelemek bir tembellik midir?',
        answer: 'Kesinlikle hayır. Tembel bir kişi görevini yapmamaktan rahatsız olmaz veya umursamaz; ancak klinik erteleme (procrastination) yaşayan hasta o işi ertelediği her saniye içinde ağır bir pişmanlık ve tükenmişlik yaşar.',
    },
    {
        question: 'DEHB ile ertelemenin ilgisi nedir?',
        answer: 'Erişkin DEHB beyindeki dopamin temelli "ödül ve motivasyon" yollarının eksikliğidir. Beyin, ancak kriz anında (teslime 1 saat kala) ortaya çıkan adrenalin ile o göreve başlayacak aktivasyonu kendi kendine yaratabilmektedir.',
    },
    {
        question: 'Erteleme huyu psikiyatrik tedaviyle kırılır mı?',
        answer: 'Hedefli farmakolojik destenin dopamin regülasyonunu sağlaması ve Bilişsel Terapi ile "zamanı basamaklara bölme" eğitimi, bu kısır döngü üzerindeki yapısal yükü büyük ölçüde kişiden kişiye değişebilen faydalarla sarsabilir.',
    },
    {
        question: 'Erteliyorum ama son dakikada hep başarıyorum. Bu da sorun mu?',
        answer: 'Zeka veya yüksek IQ sayesinde son dakika krizleriyle işi kotarabilirsiniz; fakat "her işi son saat stresine yüklemek" bedeninizin kortizol (stres) kapasitesini çürütür ve bu başarı, 40 yaşına depresyon veya anksiyete olarak geri döner.',
    },
    {
        question: 'İşleri bölmek çözüm olur mu?',
        answer: 'Hastanın klinik durumu yapısal (DEHB) bir zeminde ise işleri "kendi iradesiyle" listelemesi yetmeyebilir. Zira o bitmek bilmeyen "zamanı yönetememe" (time blindness) hali, her halükarda doktor gözetimi gerektirir.',
    },
];

export default function ErtelemeDavranisiBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/eriskin-dehb">Erişkin DEHB</Link><span>/</span>
                        <span>Erteleme Döngüleri</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Psikiyatri, DEHB, Sosyal Yaşam</span>
                        <time dateTime="2026-06-10">10 Haziran 2026</time>
                        <span>•</span><span>6 dk okuma</span>
                    </div>
                    <h1>Sürekli Erteleme Davranışı Neden Olur? Biyolojik Tembellik Yanılgısı</h1>
                    <p className={styles.heroDesc}>
                        "Ben neden kalkıp 10 dakikalık işimi yapamıyorum?" diyerek girdiğiniz öz nefret,
                        iradenizin zayıflığı değil, beyninizin "ödül sistemini" harekete geçirmedeki
                        kronik (dopaminerjik) yetersizliğinin feryadıdır.
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

                            <h2 id="nedir">Sürekli Erteleyen Beynin Döngüsü</h2>
                            <p>
                                İlerleyen yetişkinlik dönemindeki danışanların en sık söylediği şudur: "Aylardır beklettiğim o devasa
                                evrak yığınını; teslime 2 saat kala ölüm korkusuyla yarım saatte bitirdim." Buna tıp litertüründe veya
                                popüler kültürde "Procrastination" (sürekli erteleme) denmektedir. Bu erteleme davranışının, kişinin karakterinin
                                "umursamaz" tarafı ile veya irade meselesi ile klinik açıdan çok büyük bir ayrımı vardır.
                            </p>

                            <h2 id="tembellik">Neden Tembel Değilsiniz?</h2>
                            <p>
                                Eğer tembel bir insan olsaydınız, o görevi masanıza hiç getirmez veya o evrakların birikmesinden,
                                faturaların zamanında ödenmemesinden en ufak zihinsel rahatsızlık duymazdınız.
                                Ancak <Link href="/blog/eriskin-dehb-nedir">Erişkin DEHB</Link> olan ve sırf biriken
                                işler gözünde büyüdüğü için yapamayan (başlayamayan) birey; bütün bir hafta sonunu dışarıda
                                kahvesini içerken bile "Orada bir iş var, Allah kahretsin ki bunu yapmam lazım, neden yapmıyorum,
                                saniyeler akıyor" stresiyle (kortizol seli) yaşar. O işten, hiç başlamamış olması beyninde
                                duruma son derece hakim, muazzam bir içsel ıstırap barındırır.
                            </p>

                            <h2 id="motor">"Başlama Şalteri" Biyolojik Olarak Nasıl Bozulur?</h2>
                            <p>
                                Normal çalışan bir erişkin beyninde (Frontal korteks), o iş bittiğinde yaşanacak ferahlanma veya
                                gelecek takdir gibi uzun vadeli hedefler; bir dopamin ödülü sağlayarak vücudu "başlatma" görevine
                                ikna eder.
                            </p>
                            <p>
                                <Link href="/blog/eriskin-dehb-belirtileri-nelerdir">DEHB belirtileri</Link> çerçevesinde, yani dopaminin uyanış sisteminde bozukluk
                                yaşanan o hastanın zihninde ise şu kurgu vardır: "O işi yapsam da o kadar uzak ki ödülü,
                                bana o tatmini şu an vermiyor." Bu yüzden zihin başlama motoruna bir damla dahi
                                yakıt akıtmaz.
                            </p>
                            <ul>
                                <li>Sonrasındaki pişmanlık "Ah keşke yapsaydım" demez.</li>
                                <li>Beyin dopamin arar; dolayısıyla hemen anlık tatmin verecek olan "Telefonda Youtube izleme" ya da "Mutfağı dip köşe (ihtiyaç yokken) temizleme"ye kaçar.</li>
                                <li>Bu eylemlere de "Zaten ben hep bahaneyle yapıyorum" teşhisini kendisi koyar ve hastaya <Link href="/hizmetler/depresyon">çökkünlük (depresyon)</Link> tohumları eker.</li>
                            </ul>

                            <h2 id="kriz-adrenalini">Son Saat Zirvesi: Neden Hep Başarıyorsunuz?</h2>
                            <p>
                                Yetişkin hastanın DEHB alt perdesinde "Sürekli Erteliyorum ama yine de yetiştiriyorum ve işe yarıyor"
                                fikri tamamen bir zehirlenmedir. Nörobiyolojik olarak hasta; 1 hafta sonra teslim edilecek bir işin
                                stresini, son bir gün kalıncaya dek (beyin için bu süre tehlikeli değildir) ertelemeye iter.
                            </p>
                            <p>
                                Son 24 saatte ise beynin panik merkezi (amigdala), adrenalin (korku) basarak durumu adeta
                                "araba çarpmasına saniyeler kalmışçasına" biyolojik bir felaket veya mesleki kovulma hissi yaratır. O adrenalin
                                ile dopaminerjik reseptörler de birleşince kişi aylar boyunca gösteremediği o "mucizevi
                                çalışma motorunu" son 4 saatte sergiler ve işlenmesi bir efsane olacak derecede projeyi bitirir.
                            </p>

                            <h2 id="bedeli">Bu Kısa Dönemli Başarının Klinik Bedeli Nedir?</h2>
                            <p>
                                Vücudunuz mesleğinizdeki tüm evraklara bir "Ayı saldırısı" gibi adrenalinle yanıt veriyorsa
                                bunun bir yerde biyolojik ve fizyolojik hesabı keseceği kesindir:
                            </p>
                            <ul>
                                <li>Çok yoğun bir kalp yükü (aşırı kahve içmek ve panik hali),</li>
                                <li>Aklın sürekli "bir şeyler kaçırdığı" zannıyla, durduk yere gelen <Link href="/hizmetler/panik-atak">panik atak (krizleri)</Link></li>
                                <li>Bireyin her defasında partnerine verdiği sözleri "büyüklüğü yüzünden erteleyip" evliliğini (boşanmaya dek) sabote etmesi,</li>
                                <li>Sosyal çevresini, arkadaşlarını ve güvenilirliğini zedelemesi (Hep iptal eden adam).</li>
                            </ul>

                            <h2 id="anksiyete-baglantisi">Kaçınılmaz Anksiyete Düğümü</h2>
                            <p>
                                Bir işe her başladığınızda o iradesizlikle boğuşup "Yine son ana kaldı, ben iflah olmam" demeye
                                başlamak, <Link href="/hizmetler/anksiyete">klinik anksiyete (kaygı bozukluğu)</Link> havuzunun
                                en geniş damlasıdır. Zamanla "Zaten başaramayacağım" deyip hasta o projeden kaçınmaya (hiç başlamamaya)
                                yani terfisinden (geleceğinden) veya ikili ilişki randevusundan tamamen geri çekilmeye döner.
                            </p>

                            <h2 id="tedavi-klinik">Ankara Eryaman’da Çözüm Ne Değildir?</h2>
                            <p>
                                Size hekimliğin ötesindeki koçluk seanslarında, popüler kitaplarda verilen "Zamanınızı
                                beşe bölün, ufak ufak tik atın, renkli post-it kağıtları alın" öğütleri aslında sizlerin bir
                                Erişkin DEHB bireyi olabileceğiniz için "Hiçbir zaman asla tutmayacaktır." Zaten o renkli kağıtlara onu yazıp
                                uygulamaya koyacak olan ön kontrol yetiniz bozuktur.
                            </p>
                            <p>
                                Olayın çözümü beynin o nörobiyolojisine (yapısal tablosuna) profesyonelce girmekle (kısacası tıp ile)
                                başlar. Ankara, Eryaman’da, yetişkin hastalarla bireysel <Link href="/randevu">psikiyatrik görüşme</Link> süreçleri
                                yürüten Uzm. Dr. Abdullah Maraş; o "iradesiz" denen tabloları farmakolojik ve medikal strateji planlarıyla bertaraf
                                etmeyi misyon edinmiştir. "Bireysel değerlendirme" olmaksızın alınacak internet taktikleri ve tavsiye telkinleri sizi
                                son buluma değil, başarısız denemeler zincirine sürükler. Unutmayın, bu tablo tembellikten ziyade tıbbiyede
                                "DEHB Erteleme (Organize olamama) döngüsüdür" ve tedavilere/müdahalelere olan klinik yanıt kişinin durumuna göre,
                                belirtilerin kişiden kişiye değişebilen seyri gereği değişiklik arz edecektir.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Online Ölçeklere Dair Uyarı</strong>
                                Bu tıbbi bir tablodur; garantili, sihirli değnek gibi çalışan bir "erteleme ilacı veya bitkiniz" yoktur. Belirtiler yetişkinleri
                                etkileme dozu ve sürelerinde kişiden kişiye değişebilmektedir; tam da bu yüzden doğru, yapılandırılmış hekim değerlendirmesi çok hayati ve özeldir. Tanıyı koyacak makamlar
                                internet siteleri değil; klinikte başvurduğunuz Tıp Hekimi diplomasına sahip "Psikiyatristlerdir".
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <p>Sizi potansiyelinizin ve mesleğinizin son saniyelerine kadar süründüren "hemen her işi kaçırma" döngüsünden kurtulmak için Ankara (Eryaman) ruh sağlığı ofisimizde hekiminize erişim şansınız mevcut.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Klinik Değerlendirme Adımları →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Ertelemeden Görüşün</h3>
                                <p>Erteleme hastalığınız bu sefer sağlığınızı ertelemesin; Ankara içi klinik randevunuzu yüz yüze şekilde planlayın.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Randevu Planlayıcı</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>İlgili Destek İçerikler</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/blog/eriskin-dehb">Bu Belirtiler Bende Dehb mi?</Link></li>
                                    <li><Link href="/hizmetler/eriskin-dehb">Yetişkinlerde Nörobiyolojik Farklar</Link></li>
                                    <li><Link href="/blog/dikkat-daginikligi-mi-dehb-mi">Stres Kaynaklı Bir Durum Mu?</Link></li>
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
