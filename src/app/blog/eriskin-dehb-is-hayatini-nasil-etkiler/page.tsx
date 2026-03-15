import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Erişkin DEHB İş Hayatını Nasıl Etkiler? | Mesleki Odaklanma',
    description:
        'DEHB (Dikkat Eksikliği) iş yerinde ve kariyere nasıl yansır? Toplantılarda odaklanamama, iş erteleme ve çalışanlardaki etkileri üzerine Ankara değerlendirmesi.',
    alternates: { canonical: 'https://drabdullahmaras.com/blog/eriskin-dehb-is-hayatini-nasil-etkiler' },
    openGraph: {
        title: 'Yetişkin DEHB\'in Evliliklere ve İş Kariyerine Yansıyan Gerçek Faturası',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'DEHB hastası ofis işi yapabilir mi?',
        answer: 'Evet yapabilir; ancak sıkıcı veya rutin (düşük dopaminli) masa başı evrak işleri hastada çok büyük bir tükenmişlik ve hata döngüsü yaratır, zihin sürekli farklı ve yeni bir heyecan aradığı için çok enerjik pozisyonlara meyledebilir.',
    },
    {
        question: 'İş yerinde her şeyi unutan biri ne yapmalıdır?',
        answer: 'Öncelikle bunun "kafayı yediği" ya da demans başladığı hissiyle değil; DEHB veya anksiyete stresinin yükünden olup olmadığının ayrımı için yetişkin psikiyatrisine (klinisyen hekime) yönelmesi esastır.',
    },
    {
        question: 'DEHB olan kişilerin özel bir çalışma stiline ihtiyacı var mı?',
        answer: 'Kesinlikle; klinik destenin yanı sıra sık kısa molalar veren, görevlerin çok net tanımlandığı ve "son dakika kaoslarının" azaltıldığı açık iletişimli yapılar bu kişilerin potansiyelini fırlatır.',
    },
    {
        question: 'Mesajları veya mailleri hep eksik okumak bir belirti midir?',
        answer: 'Çok bariz bir belirtidir. Zihin bir e-postayı okurken sadece ilk cümleye bakar; sabırsızlık ve dürtüsellik o metni tam okumasına mani olur. Bu yüzden devasa kurumsal felaketler veya geri dönüş iletişim aksaklıkları sıktır.',
    },
    {
        question: 'Patronla sürekli tartışmak da bu hastalığın mıdır?',
        answer: 'Dürtüsel (fren-kontrol zayıflığı) alt yapısı; otoriteyle fikirsel anlaşmazlığa düştüğünde filtre yapmadan (sonuçlarını işini kaybedecek denli hesaba katmadan) bir anda konuşma ve hiddetlenme döngüsü doğurabilir.',
    },
];

export default function IsHayatindaDehbBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/eriskin-dehb">Erişkin DEHB</Link><span>/</span>
                        <span>İş Hayatında Zihin Karmaşası</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Psikiyatri, İş Kariyeri, Toplantı Düzeni</span>
                        <time dateTime="2026-06-05">05 Haziran 2026</time>
                        <span>•</span><span>6 dk okuma</span>
                    </div>
                    <h1>Erişkin DEHB İş Hayatını Nasıl Etkiler? Ofisteki Kaos</h1>
                    <p className={styles.heroDesc}>
                        Yeteneği ve IQ'su çok yüksek olmasına rağmen, basit e-postaları yanıtlamadığı veya
                        toplantılarda hayallere daldığı için kovulan; iş dünyasının potansiyelli ama "erteleme
                        ve odaklanma kurbanı" yetişkinleri üzerine klinik bir derinleşme...
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>(Ankara Ruh Sağlığı Uzmanı)</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            <h2 id="nedir-mesleki">Her Şeyin Bir Tık "Gerisinde" Kalma Hissi</h2>
                            <p>
                                İnsan hayatının en önemli saatlerini kaplayan "iş ve kariyer"; <Link href="/blog/eriskin-dehb-nedir">Erişkin DEHB hastasının</Link>
                                kendi irade zayıflığıyla (!) en sert yüzleştiği ve kan kaybettiği bir meydan muharebesine dönebilmektedir.
                                Özellikle "odaklanma zafiyeti", "zamanın yönetimindeki körlük" ve "fevri dürtüsel kararlar", yetişkinin
                                yıllarca kurduğu birikimleri hiç beklemediği hızla silebilmektedir.
                            </p>

                            <h2 id="odak">1. Toplantılar ve "Sisli Beyin" Sendromu</h2>
                            <p>
                                Hiç dikkatinizi çekmiştir; ofiste 1 saatlik toplantıda bazı kişiler durmaksızın kalemini çevirir,
                                ayaklarını (masanın altında) titretecek ritimler atar veya cama dalarak bedenen orada,
                                ama zihnen bambaşka yerdedir. Beyin eğer uyaranla doymazsa (sıkıcı bir tablo analiziyse); kendi sirkini
                                başlatır. <Link href="/blog/eriskin-dehb-belirtileri-nelerdir">Hastanın o toplantıda anlatılanların ana fikrini dahi alamamasına</Link>
                                neden olan şey sıkılması değil; beyninin o sabitlik (dikkat sürdürme) fonksiyonunu bir türlü regüle edememesidir.
                            </p>

                            <h2 id="surekli-erteleme">2. "Biriken Dağlar" Sendromu ve Hata Payı</h2>
                            <p>
                                Detay körlüğü olarak adlandırabileceğimiz süreçte, iş hayatında DEHB'si süren bir erişkin
                                devasa projelerin konsept boyutunu, ana fikrini süper vizyoner bir zekayla kavrar. Fakat
                                iş o vizyonu ufak tefek kağıtlara dönüştürmeye, detaylı ve
                                <Link href="/blog/surekli-erteleme-davranisi-neden-olur">sıkıcı formlara adım adım işlemeye</Link>
                                gelince zihin kilitlenir.
                            </p>
                            <ul>
                                <li>Son adımda ekipleri veya sözleşme eklerini yollamayı unutmak.</li>
                                <li>Randevuların zaman çizelgesini çakıştırmak.</li>
                                <li>Hesaplamalarda, rakamlarda "acele etmekten" kaynaklı devasa kurumsal hasarlar bırakmak.</li>
                            </ul>

                            <h2 id="durtusellik">3. İş Değiştirme ve Anlaşmazlık (Dürtüsellik)</h2>
                            <p>
                                Dürtüsel alt tipin yansıması ismini "maymun iştahlı" olarak sosyal dile yazdırmıştır.
                                Erişkin bir işe başlar, inanılmaz motivasyonludur; aklı aylarca o işle yanıp tutuşur
                                (hiper-odak). Ancak 6. ayın sonunda dopamin o işte de bitince; kişi bir anda ofisten dahi soğur ve
                                o çok sevdiği iş ortamını dürtüsel bir şekilde bozup (istifa edip), "Sıkıldım,
                                beni yansıtmadığını anladım" yalanıyla tamamen alakasız bir alana savrulur.
                            </p>
                            <p>
                                Tıbbi değerlendirmelere göre, yetişkinin patron veya otorite mekanizmalarıyla "aklından geçeni
                                sonucunu düşünmeden doğrudan söylemesi" de son derece ağır kariyer lekeleri oluşturabilmektedir.
                            </p>

                            <h2 id="tükenmislik-sendromu">4. Sürekli İş Başı Stresi ve Tükenmişlik</h2>
                            <p>
                                Arkadaşları mesai bitiminde bilgisayarlarını kapatıp kahvelerini yudumlarken; Erişkin DEHB kliniği
                                yaşayan hasta "Bugün ne yaptım ki ben, bir sayfa yazı mı yazdım? Zaten beceriksizim..." sorgusuyla
                                bilgisayarını evine taşır. Hafta sonu dahi o vicdan azabıyla "çalışıyormuş gibi" ekran başında
                                oturarak, ailesini veya evliliğini de ihmal eder ama işi yine bitiremez.
                            </p>
                            <ul>
                                <li>Günlük hayatın bu ağır depresif yüzü çalışanı sonunda gerçekten <Link href="/hizmetler/depresyon">klinik bir depresyona (çökkünlüğe)</Link> yönlendirir.</li>
                            </ul>

                            <h2 id="ne-zaman-psikiyatri">Meslekte Sınır Aşıldı: Psikiyatriye Ne Zaman Gidilmeli?</h2>
                            <p>
                                Eğer yöneticilerinizden yıllardır aynı minvalde uyarı mailleri (dikkatsizsiniz evraklar eksik)
                                alıyorsanız; ya da beyninizdeki sürekli dönen <Link href="/blog/dehb-ve-anksiyete-arasindaki-iliski">başarısız olma anksiyetesi</Link> sizi
                                uykularınızdan uyandırıyor ve sırf birilerine eksik rapor verdiğiniz için insan içine
                                bile (iş toplantılarına) artık tahammül edip çıkamıyorsanız; "sadece geçici bir zihin yorgunluğu" diyemeyiz.
                            </p>

                            <p>
                                İşin ciddiyetini kavrayan yetişkinlerin; Ankara, Eryaman, Altay Mahallesi, Etimesgut, Batıkent lokasyonlarında
                                hizmet ifa eden bir psikiyatrist kliniğinden; "Ertelenmeyecek kariyerler ve beyinler için" randevu oluşturması, olası en net stratejidir. Uzm. Dr. Abdullah Maraş, Erişkin Odak Bozukluklarında hastanın omuzlarındaki o
                                tona varan ağırlığı medikal tedavi ve Bilişsel yönlendirmelerle kaldırmayı misyon edinir.
                                Ve unutmamak gerekir ki; her hastanın zihni farklı bir mimaride de olsa belirtilerin kişiden kişiye değişebilen etkileri, uzman bir izlem seansında uygun adımlara dönüştürülebilmektedir.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Bilgilendirme Amaçlıdır</strong>
                                Kariyerinizdeki başarısızlıklar doğrudan klinik bir hastalık kaynaklı olmayabilir, iş tanımınızla da bağdaşmıyor
                                olabilir. Tıbbi ayırıcı teşhişi gerçekleştirmek sadece Uzman Psikiyatr doktorlara ait olup; sitelerde (yazılarda) anlatılanlar bilgilendirme niteliğindedir. İş-odak çözümleri ve süreçler bir "başarı koçluğu" değil, nörolojik ve psikiyatrik bir tıp uygulaması (izlemi) gerektirir.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <p>Sizi patronların yüzünde sürekli mahcup kıldırmayacak klinisyen temelli odak rotasını çizelim. Kariyeriniz hekim görüşmenizle yeniden hayat bulsun.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Ankara (Eryaman) Doktor Görüşmesi →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Hekim Konsültasyonu</h3>
                                <p>Masabaşı işinize her gün dönen beyninizi durdurmak için.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Klinik Üzerinden Randevu</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>Benzer Kütüphane Notları</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/blog/eriskin-dehb-nasil-anlasilir">İşte ve Ailede DEHB Nasıl Ele Verir?</Link></li>
                                    <li><Link href="/blog/dikkat-daginikligi-mi-dehb-mi">Farklı Ayrım Koşulları</Link></li>
                                    <li><Link href="/hizmetler/anksiyete">Anksiyeteniz İşi Baltalıyor Mu?</Link></li>
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
