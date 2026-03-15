import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Depresyonda Profesyonel Destek Süreci Nasıl İşler? | Uzm. Dr. Abdullah Maraş',
    description:
        'Depresyonda profesyonel destek süreci nasıl ilerler? İlk görüşmeden izleme kadar psikiyatrik değerlendirme aşamaları. Ankara Eryaman psikiyatri uzmanı.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/depresyonda-profesyonel-destek' },
    openGraph: {
        title: 'Depresyonda Profesyonel Destek Süreci Nasıl İşler?',
        type: 'article', locale: 'tr_TR',
        publishedTime: '2026-04-07T09:00:00+03:00',
        authors: ['Uzm. Dr. Abdullah Maraş'],
    },
};

const faqItems = [
    { question: 'Psikiyatrik değerlendirmede ilk görüşme ne kadar sürer?', answer: 'İlk görüşme genellikle 40-60 dakika sürmektedir. Bu süreçte belirtileriniz, geçmiş sağlık öykünüz ve psikososyal durumunuz kapsamlı olarak değerlendirilir.' },
    { question: 'Psikiyatriste gitmek yalnızca ilaç almak anlamına mı gelir?', answer: 'Hayır. Psikiyatrik değerlendirme sonucunda farmakolojik yaklaşımlar, psikoterapi veya her ikisinin kombinasyonu planlanabilir. Yaklaşım, bireyin ihtiyaçlarına göre belirlenir.' },
    { question: 'Depresyon değerlendirmesi için hazırlık yapmalı mıyım?', answer: 'Özel bir hazırlık gerekmez. Ancak mevcut şikâyetlerinizi, ne zamandır sürdüğünü, varsa kullandığınız ilaçları ve aile sağlık öykünüzü not etmeniz görüşmeyi kolaylaştırabilir.' },
    { question: 'Eryaman\'da psikiyatrik değerlendirme randevusu nasıl alınır?', answer: 'Web sitemizdeki online randevu formu veya iletişim bilgilerimiz aracılığıyla randevu talebi oluşturabilirsiniz. Altay Mahallesi çevresindeki kliniğimizde randevu sistemiyle çalışılmaktadır.' },
    { question: 'Takip görüşmeleri ne sıklıkta yapılır?', answer: 'Takip sıklığı bireyin durumuna göre belirlenir. Başlangıçta daha sık olan görüşmeler, süreç ilerledikçe aralıkları açılarak devam edebilir. Her takip görüşmesinde durum yeniden değerlendirilir.' },
];

export default function DepresyondaProfesyonelDestekBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <span>Profesyonel Destek Süreci</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Depresyon</span>
                        <time dateTime="2026-04-07">7 Nisan 2026</time>
                        <span>•</span><span>9 dk okuma</span>
                    </div>
                    <h1>Depresyonda Profesyonel Destek Süreci Nasıl İşler?</h1>
                    <p className={styles.heroDesc}>
                        Psikiyatriste başvurmak sizi endişelendiriyorsa, bu yazı süreci adım adım
                        anlatmak ve bilinmezliğin yarattığı kaygıyı azaltmak için hazırlandı.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>Ruh Sağlığı ve Hastalıkları Uzmanı</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            <p className={styles.lead}>
                                &ldquo;Psikiyatriste gitmek mi gerekiyor? Peki o zaman ne olacak?&rdquo;
                                Depresyon belirtileri yaşayan birçok birey, profesyonel destek almaktan
                                çekinebilmektedir. Bu duraksamanın başlıca nedenlerinden biri, sürecin nasıl
                                işlediğini bilmemektir. Bu yazıda, psikiyatrik değerlendirme ve destek
                                sürecinin her aşamasını açıklıyoruz.
                            </p>
                            <p>
                                <Link href="/hizmetler/depresyon">Depresyon değerlendirmesi</Link> hakkında
                                detaylı bilgi için hizmet sayfamızı da inceleyebilirsiniz.
                            </p>

                            <h2>Adım 1: Randevu Almak</h2>
                            <p>
                                Profesyonel destek sürecinin ilk adımı, randevu almaktır. Bu adım, birçok kişi
                                için en zor olanıdır — ancak aynı zamanda en önemlisidir. Psikiyatri uzmanına
                                başvurmak, zayıflık ya da &ldquo;çok kötü durumda olma&rdquo; anlamına
                                gelmez; kendi sağlığını ciddiye almanın bir göstergesidir.
                            </p>
                            <p>
                                Ankara Eryaman&apos;da Uzm. Dr. Abdullah Maraş&apos;ın kliniğinde randevu
                                sistemiyle çalışılmaktadır.{' '}
                                <Link href="/randevu">Online randevu formu</Link> üzerinden veya iletişim
                                bilgilerimizi kullanarak randevu talebi oluşturabilirsiniz. Randevu sistemi
                                sayesinde her bireye yeterli süre ayrılmaktadır.
                            </p>

                            <h2>Adım 2: İlk Görüşme — Klinik Değerlendirme</h2>
                            <p>
                                İlk görüşme genellikle 40-60 dakika sürmektedir ve değerlendirme sürecinin
                                en kapsamlı aşamasıdır. Güvenli, gizli ve yargısız bir ortamda gerçekleştirilen
                                bu görüşmede aşağıdaki konular ele alınmaktadır:
                            </p>
                            <ul>
                                <li><strong>Mevcut yakınmalar:</strong> Hangi belirtileri yaşıyorsunuz? Ne zamandır devam ediyor? Şiddeti nedir?</li>
                                <li><strong>Tetikleyici faktörler:</strong> Belirtiler belirli bir olay veya durumla mı başladı?</li>
                                <li><strong>Geçmiş sağlık öyküsü:</strong> Daha önce benzer belirtiler yaşadınız mı? Başka sağlık durumlarınız var mı?</li>
                                <li><strong>Aile geçmişi:</strong> Ailede ruh sağlığı sorunları var mı?</li>
                                <li><strong>Psikososyal değerlendirme:</strong> İş, ilişkiler, yaşam koşulları ve stres kaynakları</li>
                                <li><strong>Günlük işlevsellik:</strong> Belirtiler günlük yaşamınızı nasıl etkiliyor?</li>
                            </ul>
                            <p>
                                Birey bu görüşmede kendini rahatça ifade edebilir. Acele edilmez; her detay
                                önemsenir ve gizlilik ilkeleri sıkı biçimde korunur.
                            </p>

                            <h2>Adım 3: Klinik Formülasyon — Durumun Anlaşılması</h2>
                            <p>
                                İlk görüşmeden elde edilen bilgiler ışığında, uzman hekim bireyin durumuna
                                ilişkin bir klinik formülasyon oluşturur. Bu formülasyon:
                            </p>
                            <ul>
                                <li>Belirtilerin klinik tablosunu değerlendirir</li>
                                <li>Olası ayırıcı tanıları ele alır (örneğin{' '}
                                    <Link href="/hizmetler/anksiyete">anksiyete bozuklukları</Link>,{' '}
                                    <Link href="/hizmetler/bipolar-bozukluk">bipolar bozukluk</Link> gibi
                                    durumlarla ayrım)</li>
                                <li>Biyolojik, psikolojik ve sosyal faktörleri bütüncül olarak değerlendirir</li>
                                <li>Bireyin güçlü yanlarını ve başa çıkma kaynaklarını dikkate alır</li>
                            </ul>
                            <p>
                                Bu aşama, bireysel planlamanın temelini oluşturmaktadır ve her bireye özgü
                                bir yaklaşımın geliştirilmesini sağlar.
                            </p>

                            <h2>Adım 4: Bireysel Planlama</h2>
                            <p>
                                Klinik formülasyon sonucunda, bireyin ihtiyaçlarına uygun bir destek planı
                                oluşturulur. Bu plan, bireyin tercihleri ve yaşam koşulları göz önünde
                                bulundurularak şekillendirilir. Planın içerebileceği yaklaşımlar:
                            </p>
                            <h3>Farmakolojik Yaklaşımlar</h3>
                            <p>
                                Gerekli görüldüğünde, bilimsel kanıta dayalı farmakolojik destek planlanabilir.
                                İlaçların olası etkileri, yan etkileri ve kullanım süresi hakkında birey
                                detaylı olarak bilgilendirilir. Farmakolojik yaklaşım her zaman gerekli değildir;
                                karar, bireysel değerlendirmeye dayanır.
                            </p>
                            <h3>Psikoterapi</h3>
                            <p>
                                Bilişsel davranışçı terapi (BDT), kişilerarası terapi gibi kanıta dayalı
                                psikoterapi yöntemleri depresyonda sıklıkla kullanılan yaklaşımlardandır.
                                Bu yöntemler, bireyin düşünce kalıplarını fark etmesine ve daha uyumlu başa
                                çıkma stratejileri geliştirmesine destek sağlayabilir.
                            </p>
                            <h3>Kombine Yaklaşımlar</h3>
                            <p>
                                Birçok durumda farmakolojik destek ve psikoterapi birlikte uygulanabilir.
                                Kombine yaklaşım, özellikle orta-ağır düzey depresyonda bireysel planlama
                                açısından değerlendirilebilir.
                            </p>

                            <h2>Adım 5: İzlem ve Takip</h2>
                            <p>
                                Destek süreci, ilk görüşmeyle sona ermez. Düzenli takip görüşmeleri,
                                sürecin kritik bir bileşenidir:
                            </p>
                            <ul>
                                <li>Bireyin durumundaki değişimler izlenir</li>
                                <li>Yaklaşım planının etkinliği değerlendirilir</li>
                                <li>Gerektiğinde planda düzenlemeler yapılır</li>
                                <li>Bireyin geri bildirimleri dikkate alınır</li>
                                <li>Bireyin kendini ifade edebileceği düzenli bir alan sağlanır</li>
                            </ul>
                            <p>
                                Takip sıklığı bireyin durumuna göre belirlenir. Başlangıçta daha sık olan
                                görüşmeler, süreç ilerledikçe aralıkları açılarak devam edebilir.
                            </p>

                            <h2>Psikiyatriste Gitmek Hakkında Yaygın Endişeler</h2>
                            <p>
                                Birçok birey psikiyatri uzmanına başvurmadan önce bazı endişeler
                                yaşamaktadır. Bu endişelerin çoğu bilgi eksikliğinden kaynaklanmaktadır:
                            </p>
                            <ul>
                                <li><strong>&ldquo;Yargılanır mıyım?&rdquo;</strong> — Psikiyatrik görüşmeler yargısız, güvenli ve gizli bir ortamda gerçekleştirilir. Uzman hekim, bireyin durumunu anlamak için dinler, yargılamaz.</li>
                                <li><strong>&ldquo;Hemen ilaç yazılır mı?&rdquo;</strong> — Her bireye farmakolojik destek gerekmez. Karar, kapsamlı bir değerlendirme sonucunda bireysel olarak verilir.</li>
                                <li><strong>&ldquo;Bir kez gidersem sürekli gitmem mi gerekir?&rdquo;</strong> — Takip süreci bireyin durumuna ve ihtiyaçlarına göre planlanır. Birey, sürecin her aşamasında bilgilendirilir.</li>
                                <li><strong>&ldquo;Sorunlarım yeterince ciddi mi?&rdquo;</strong> — Ruh sağlığı sorunlarının &ldquo;yeterince ciddi&rdquo; olması gerekmez. Belirtiler yaşam kalitenizi etkiliyorsa, profesyonel değerlendirme bir haktır.</li>
                            </ul>

                            <h2>Eryaman&apos;da Profesyonel Destek</h2>
                            <p>
                                Uzm. Dr. Abdullah Maraş, Ankara Eryaman&apos;da Altay Mahallesi çevresinde
                                bilimsel ve etik çerçevede psikiyatrik değerlendirme sunmaktadır. Anadolu
                                Üniversitesi Tıp Fakültesi mezunu olan Dr. Maraş, her bireye yeterli süre
                                ayırarak kapsamlı bir değerlendirme gerçekleştirmektedir. Kliniğe Etimesgut
                                ve Batıkent bölgelerinden kolay ulaşım sağlanabilir.
                            </p>

                            <div className="info-banner">
                                <strong>📌 Önemli Bilgilendirme</strong>
                                Bu yazıdaki içerikler genel bilgilendirme amaçlıdır ve tıbbi tanı ya da tedavi
                                önerisi niteliği taşımamaktadır. Depresyon belirtileri yaşıyorsanız, bireysel
                                değerlendirme için bir psikiyatri uzmanına başvurunuz.
                            </div>

                            <div className={styles.faqSection}>
                                <h2>Profesyonel Destek Süreci Hakkında Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.relatedBox}>
                                <h3>İlgili Sayfalar</h3>
                                <ul>
                                    <li><Link href="/hizmetler/depresyon">Depresyon Değerlendirmesi →</Link></li>
                                    <li><Link href="/blog/depresyon-belirtileri">Depresyon Belirtileri Nelerdir? →</Link></li>
                                    <li><Link href="/blog/depresyon-mu-uzuntu-mu">Depresyon mu Üzüntü mü? →</Link></li>
                                    <li><Link href="/hizmetler/anksiyete">Anksiyete Bozuklukları →</Link></li>
                                </ul>
                            </div>

                            <div className={styles.articleCta}>
                                <h3>İlk Adımı Atın</h3>
                                <p>Ankara Eryaman&apos;da bilimsel çerçevede psikiyatrik değerlendirme için randevu alabilirsiniz.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Randevu Al →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Değerlendirme İçin</h3>
                                <p>Profesyonel psikiyatrik değerlendirme</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Randevu Al</Link>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>Uzman Hekim</h4>
                                <div className={styles.doctorInfo}><strong>Uzm. Dr. Abdullah Maraş</strong><span>Psikiyatri Uzmanı</span><span>Eryaman, Ankara</span></div>
                            </div>
                            <div className={styles.sidebarCard}>
                                <h4>Depresyon Kümesi</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/blog/depresyon-belirtileri">Depresyon Belirtileri</Link></li>
                                    <li><Link href="/blog/mevsimsel-depresyon">Mevsimsel Depresyon</Link></li>
                                    <li><Link href="/blog/depresyon-mu-uzuntu-mu">Depresyon mu Üzüntü mü?</Link></li>
                                    <li><Link href="/blog/is-yasami-ve-depresyon">İş Yaşamı ve Depresyon</Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Depresyonda Profesyonel Destek Süreci Nasıl İşler?", datePublished: "2026-04-07T09:00:00+03:00", author: { "@id": "https://www.drabdullahmaras.com.tr/#physician" }, publisher: { "@id": "https://www.drabdullahmaras.com.tr/#organization" }, mainEntityOfPage: "https://www.drabdullahmaras.com.tr/blog/depresyonda-profesyonel-destek" }) }} />
        </>
    );
}
