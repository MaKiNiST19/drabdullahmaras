export interface ServiceData {
    slug: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    icon: string;
    shortDesc: string;
    content: {
        intro: string;
        sections: { title: string; text: string; subsections?: { title: string; text: string }[] }[];
        relatedServices: string[];
        faq: { question: string; answer: string }[];
    };
}

export const services: ServiceData[] = [
    {
        slug: 'depresyon',
        title: 'Depresyon',
        metaTitle: 'Depresyon Değerlendirmesi | Eryaman Psikiyatrist - Uzm. Dr. Abdullah Maraş',
        metaDescription: 'Ankara Eryaman\'da depresyon değerlendirmesi. Uzm. Dr. Abdullah Maraş ile bilimsel çerçevede depresyon belirtileri, klinik değerlendirme ve bireysel destek süreçleri.',
        icon: '🌧️',
        shortDesc: 'Süregelen karamsarlık, enerji kaybı ve isteksizlik gibi belirtilerin değerlendirilmesi ve bireysel destek planlaması.',
        content: {
            intro: 'Depresyon, yalnızca geçici bir üzüntü hâli değil; bireyin günlük yaşam fonksiyonlarını, iş performansını, sosyal ilişkilerini ve genel yaşam kalitesini derinden etkileyebilen bir ruh sağlığı durumudur. Dünya Sağlık Örgütü verilerine göre dünya genelinde milyonlarca insan depresyon belirtileri yaşamaktadır. Ankara Eryaman\'da Uzm. Dr. Abdullah Maraş, depresyon belirtilerinin kapsamlı değerlendirmesini bilimsel ve etik çerçevede gerçekleştirmektedir.',
            sections: [
                {
                    title: 'Depresyon Nedir?',
                    text: 'Depresyon, tıbbi olarak "majör depresif bozukluk" olarak da adlandırılan, süreğen bir şekilde çökkün duygudurum, ilgi ve istek kaybı ile karakterize olan bir ruh sağlığı durumudur. Günlük yaşamda herkesin zaman zaman üzüntü, karamsarlık veya motivasyon düşüklüğü hissetmesi doğaldır. Ancak bu belirtiler en az iki hafta boyunca süreklilik gösterdiğinde ve kişinin işlevselliğini olumsuz etkilediğinde, profesyonel bir değerlendirme önem kazanmaktadır. Depresyon, biyolojik, psikolojik ve sosyal faktörlerin karmaşık etkileşimi sonucunda ortaya çıkabilir. Genetik yatkınlık, beyin kimyasındaki değişimler, stresli yaşam olayları, kayıp deneyimleri ve kronik hastalıklar gibi çok sayıda etken bu durumun oluşmasında rol oynayabilir.',
                    subsections: [
                        {
                            title: 'Depresyonun Yaygın Belirtileri',
                            text: 'Depresyonun belirtileri bireyden bireye farklılık gösterebilmektedir. Bununla birlikte, sık karşılaşılan belirtiler arasında şunlar yer almaktadır: Süreğen karamsarlık ve üzüntü hissi, daha önce keyif alınan etkinliklere karşı ilgi ve istek kaybı, enerji azalması ve sürekli yorgunluk hissi, uyku düzeninde değişiklikler (uykusuzluk veya aşırı uyuma), iştah ve kilo değişimleri, dikkat ve konsantrasyonda azalma, değersizlik veya aşırı suçluluk duyguları, kararsızlık ve karar vermede güçlük yaşanması. Bu belirtilerin varlığı, mutlaka depresyon tanısı anlamına gelmemektedir. Kesin değerlendirme, uzman bir psikiyatrist tarafından yapılacak kapsamlı klinik görüşme ile mümkündür.'
                        }
                    ]
                },
                {
                    title: 'Depresyon Değerlendirme Süreci',
                    text: 'Ankara Eryaman\'daki kliniğimizde depresyon değerlendirmesi, kapsamlı bir klinik görüşme ile başlamaktadır. Bu süreçte bireyin mevcut yakınmaları, belirtilerin süresi ve şiddeti, geçmiş sağlık öyküsü, aile geçmişi ve psikososyal faktörler detaylı olarak ele alınmaktadır. Değerlendirme, standartlaştırılmış ölçekler ve klinik gözlem yöntemleri kullanılarak yapılmaktadır. Her birey benzersizdir ve değerlendirme süreci bireyin özgün koşullarına göre şekillenmektedir. Altay Mahallesi çevresindeki kliniğimizde, güvenli ve yargısız bir ortamda detaylı bir görüşme gerçekleştirilmektedir.'
                },
                {
                    title: 'Depresyonda Bireysel Yaklaşımın Önemi',
                    text: 'Depresyon, her bireyde farklı biçimlerde ortaya çıkabilmektedir. Bu nedenle bireysel bir değerlendirme ve planlama süreci büyük önem taşımaktadır. Klinik değerlendirme sonucunda, bireyin ihtiyaçlarına uygun bir yönlendirme planı oluşturulmaktadır. Bu plan; farmakolojik yaklaşımlar, psikoterapi yöntemleri veya her ikisinin birlikte uygulanmasını içerebilir. Dr. Abdullah Maraş, Eryaman\'da bilimsel verilere dayalı ve etik çerçevede bireysel destek süreçleri sunmaktadır. Etimesgut ve Batıkent bölgelerinden de kolay ulaşım sağlanabilen klinikte, her bireye yeterli zaman ve özen ayrılmaktadır.'
                },
                {
                    title: 'Ne Zaman Profesyonel Destek Aranmalıdır?',
                    text: 'Eğer yukarıda belirtilen belirtilerden birkaçını en az iki hafta boyunca yaşıyorsanız, günlük aktivitelerinizi sürdürmekte zorlanıyorsanız veya "bende depresyon olabilir mi?" diye düşünüyorsanız, profesyonel bir değerlendirme almanız önerilmektedir. Erken dönemde alınan uzman desteği, bireyin yaşam kalitesinin korunması açısından önemli bir adımdır. Ankara Eryaman\'da Uzm. Dr. Abdullah Maraş\'ın kliniğinde, depresyon değerlendirmesi için randevu alabilirsiniz.'
                },
                {
                    title: 'Depresyon Hakkında Önemli Bilgiler',
                    text: 'Depresyon, zayıflık veya karakter eksikliği değildir; tıbbi olarak ele alınması gereken bir sağlık durumudur. Profesyonel destek almak, bireyin ruh sağlığını korumak ve yaşam kalitesini artırmak için atılacak önemli bir adımdır. Unutulmamalıdır ki depresyon, sık karşılaşılan bir durum olup, uygun profesyonel değerlendirme ve destek ile bireylerin yaşam kalitesinde olumlu değişimler gözlenebilmektedir.'
                }
            ],
            relatedServices: ['anksiyete', 'uyku-bozukluklari', 'bipolar-bozukluk'],
            faq: [
                { question: 'Depresyon belirtileri nelerdir?', answer: 'Depresyonun belirtileri arasında süreğen üzüntü, ilgi kaybı, enerji azalması, uyku düzeni değişiklikleri, iştah değişimleri, konsantrasyon güçlüğü ve değersizlik duyguları sayılabilir. Bu belirtilerin süresi ve şiddeti bireyden bireye farklılık gösterebilir. Kesin değerlendirme uzman bir psikiyatrist tarafından yapılmalıdır.' },
                { question: 'Eryaman\'da depresyon değerlendirmesi nerede yapılır?', answer: 'Ankara Eryaman, Altay Mahallesi çevresinde Uzm. Dr. Abdullah Maraş\'ın kliniğinde depresyon değerlendirmesi yapılmaktadır. Randevu sistemiyle çalışan klinikte, kapsamlı bir klinik görüşme gerçekleştirilmektedir.' },
                { question: 'Depresyon değerlendirmesi nasıl yapılır?', answer: 'Depresyon değerlendirmesi, detaylı bir klinik görüşme ile başlamaktadır. Bireyin belirtileri, öyküsü ve psikososyal durumu kapsamlı olarak ele alınır. Gerekli görüldüğünde standartlaştırılmış değerlendirme ölçekleri de kullanılabilir.' },
                { question: 'Depresyonda erken değerlendirme neden önemlidir?', answer: 'Erken dönemde profesyonel değerlendirme almak, bireyin yaşam kalitesinin korunmasına ve günlük işlevselliğinin sürdürülmesine katkı sağlayabilir. Belirtilerin uzun süre ihmal edilmesi, durumun daha karmaşık hâle gelmesine yol açabilir.' }
            ]
        }
    },
    {
        slug: 'anksiyete',
        title: 'Anksiyete Bozuklukları',
        metaTitle: 'Anksiyete Değerlendirmesi | Eryaman Psikiyatrist - Uzm. Dr. Abdullah Maraş',
        metaDescription: 'Ankara Eryaman\'da anksiyete bozukluğu değerlendirmesi. Yaygın kaygı, endişe ve huzursuzluk belirtilerine yönelik bilimsel çerçevede uzman psikiyatri değerlendirmesi.',
        icon: '🌀',
        shortDesc: 'Yaygın kaygı, endişe ve huzursuzluk durumlarına yönelik klinik değerlendirme ve yönetim süreçleri.',
        content: {
            intro: 'Anksiyete, yani kaygı bozuklukları, günümüzde en sık karşılaşılan ruh sağlığı durumları arasında yer almaktadır. Belirli düzeyde kaygı yaşamak, insan doğasının bir parçası olup koruyucu bir işlev taşıyabilir. Ancak kaygı aşırı hâle geldiğinde, günlük yaşamı olumsuz etkilediğinde ve kontrol edilemez bir şekilde sürdüğünde, profesyonel bir değerlendirme almanız önerilmektedir. Ankara Eryaman\'da Uzm. Dr. Abdullah Maraş, anksiyete bozukluklarının kapsamlı değerlendirmesini gerçekleştirmektedir.',
            sections: [
                {
                    title: 'Anksiyete Bozuklukları Nedir?',
                    text: 'Anksiyete bozuklukları, belirgin ve süreğen kaygı, endişe, korku ve huzursuzluk ile karakterize olan bir ruh sağlığı durumları grubudur. Yaygın anksiyete bozukluğu, sosyal anksiyete bozukluğu, özgül fobiler ve ayrılık anksiyetesi gibi farklı alt türleri bulunmaktadır. Her alt türün kendine özgü belirtileri ve klinik görünümü vardır. Anksiyete bozukluklarının ortaya çıkışında genetik yatkınlık, beyin kimyasındaki değişimler, kişilik özellikleri, travmatik yaşam deneyimleri ve çevresel stresörler gibi çok sayıda faktör etkili olabilmektedir.',
                    subsections: [
                        {
                            title: 'Anksiyetenin Yaygın Belirtileri',
                            text: 'Anksiyete bozukluklarında hem bedensel hem de ruhsal belirtiler görülebilmektedir. Bedensel belirtiler arasında çarpıntı, terleme, kas gerginliği, baş ağrısı, mide bulantısı ve nefes darlığı hissi yer alabilir. Ruhsal belirtiler ise aşırı endişe, huzursuzluk, irritabilite, odaklanma güçlüğü, uyku problemleri ve kontrol kaybı korkusu şeklinde kendini gösterebilir.'
                        }
                    ]
                },
                {
                    title: 'Anksiyete Değerlendirme Süreci',
                    text: 'Eryaman\'daki kliniğimizde anksiyete değerlendirmesi, bireyin yaşadığı kaygının doğasını, süresini, şiddetini ve tetikleyici faktörlerini anlamaya yönelik kapsamlı bir klinik görüşme ile başlamaktadır. Değerlendirme sürecinde bireyin fiziksel sağlık durumu, kullandığı ilaçlar, geçmiş ruh sağlığı öyküsü ve aile geçmişi de dikkate alınmaktadır. Altay Mahallesi çevresindeki klinikte, güvenli bir ortamda detaylı görüşme yapılmaktadır.'
                },
                {
                    title: 'Kaygı ile Başa Çıkmada Profesyonel Destek',
                    text: 'Anksiyete bozuklukları, uygun profesyonel değerlendirme ve destek ile ele alınabilir durumlar arasındadır. Bireysel değerlendirme sonucunda, bireyin ihtiyaçlarına uygun bir yaklaşım planlanmaktadır. Bu plan farmakolojik yaklaşımlar, bilişsel davranışçı terapi gibi psikoterapi yöntemleri veya birden fazla yöntemin birlikte uygulanmasını içerebilir. Ankara Eryaman, Etimesgut ve Batıkent bölgelerinden kolay ulaşılabilen klinikte, her bireye bireysel yaklaşım sunulmaktadır.'
                },
                {
                    title: '"Bende Kaygı Var, Ne Yapmalıyım?"',
                    text: 'Eğer sık sık aşırı endişe yaşıyorsanız, kaygınızı kontrol edemediğinizi hissediyorsanız veya bedensel belirtiler yaşıyorsanız, bir psikiyatri uzmanından değerlendirme almanız önerilmektedir. Erken dönemde alınan profesyonel destek, yaşam kalitesinin korunmasına önemli katkı sağlayabilir. Uzm. Dr. Abdullah Maraş, Eryaman\'da bilimsel çerçevede anksiyete değerlendirmesi sunmaktadır.'
                },
                {
                    title: 'Anksiyete Hakkında Bilinmesi Gerekenler',
                    text: 'Kaygı yaşamak bir zayıflık değildir ve profesyonel destek almak önemli bir adımdır. Anksiyete bozuklukları, uygun değerlendirme ve destek ile ele alınabilir durumlardır. Belirtilerinizi ihmal etmek yerine, bir uzman hekim ile görüşerek durumunuzun değerlendirilmesini sağlayabilirsiniz.'
                }
            ],
            relatedServices: ['depresyon', 'panik-atak', 'okb'],
            faq: [
                { question: 'Anksiyete ile normal kaygı arasındaki fark nedir?', answer: 'Normal kaygı, belirli bir olay veya duruma karşı doğal bir tepkidir ve genellikle durum ortadan kalktığında azalır. Anksiyete bozukluğunda ise kaygı orantısız şekilde yoğundur, uzun süre devam eder ve günlük yaşamı olumsuz etkiler.' },
                { question: 'Anksiyete bedensel belirtilere neden olur mu?', answer: 'Evet, anksiyete bozuklukları çarpıntı, terleme, kas gerginliği, baş ağrısı, mide problemleri ve nefes darlığı gibi bedensel belirtilere yol açabilir. Bu belirtiler, bireyin durumunu daha da zorlaştırabilir.' },
                { question: 'Eryaman\'da anksiyete değerlendirmesi nerede yapılır?', answer: 'Ankara Eryaman, Altay Mahallesi çevresinde Uzm. Dr. Abdullah Maraş\'ın kliniğinde kapsamlı anksiyete değerlendirmesi yapılmaktadır.' },
                { question: 'Anksiyete değerlendirmesi ne kadar sürer?', answer: 'İlk değerlendirme görüşmesi genellikle 40-60 dakika sürmektedir. Bireyin durumunun kapsamına göre takip görüşmeleri planlanabilir.' }
            ]
        }
    },
    {
        slug: 'panik-atak',
        title: 'Panik Atak',
        metaTitle: 'Panik Atak Değerlendirmesi | Eryaman Psikiyatrist - Uzm. Dr. Abdullah Maraş',
        metaDescription: 'Ankara Eryaman\'da panik atak değerlendirmesi. Ani korku nöbetleri, çarpıntı ve nefes darlığı belirtilerine yönelik uzman psikiyatri değerlendirmesi.',
        icon: '⚡',
        shortDesc: 'Ani korku nöbetleri, çarpıntı ve nefes darlığı gibi belirtilerin değerlendirilmesi.',
        content: {
            intro: 'Panik atak, bireyin ani ve yoğun bir korku veya rahatsızlık hissi yaşadığı, genellikle birkaç dakika içinde doruğa ulaşan ve çeşitli bedensel belirtilerle seyreden bir durumdur. Panik ataklar oldukça korkutucu olabilir ve yaşayan birey sıklıkla kalp krizi geçirdiğini veya kontrolünü kaybedeceğini düşünebilir. Ankara Eryaman\'da Uzm. Dr. Abdullah Maraş, panik atak ve panik bozukluğu değerlendirmesini kapsamlı bir şekilde gerçekleştirmektedir.',
            sections: [
                {
                    title: 'Panik Atak Nedir?',
                    text: 'Panik atak, ani başlangıçlı yoğun korku veya rahatsızlık atağıdır. Dakikalar içinde doruğa ulaşır ve genellikle 10-30 dakika içinde yatışır. Panik ataklar tekrarlayıcı hale geldiğinde ve birey sürekli olarak yeni bir atak yaşama korkusu taşıdığında, panik bozukluğundan söz edilebilir. Panik atağın yaygın belirtileri arasında çarpıntı, terleme, titreme, nefes darlığı hissi, göğüs ağrısı, bulantı, baş dönmesi, uyuşma veya karıncalanma, gerçekdışılık hissi ve kontrol kaybı korkusu sayılabilir.',
                },
                {
                    title: 'Panik Atak Değerlendirme Süreci',
                    text: 'Eryaman\'daki kliniğimizde panik atak değerlendirmesi, bireyin yaşadığı atakların sıklığını, şiddetini, tetikleyici faktörlerini ve yaşam üzerindeki etkisini anlamaya yönelik detaylı bir klinik görüşmeyi içermektedir. Fiziksel hastalıkların dışlanması amacıyla gerektiğinde ek tetkikler de önerilebilir. Altay Mahallesi çevresindeki klinikte, bireyin kendini güvende hissedebileceği bir ortamda değerlendirme yapılmaktadır.'
                },
                {
                    title: 'Panik Bozukluğunda Bireysel Planlama',
                    text: 'Panik atak ve panik bozukluğu, uygun profesyonel değerlendirme ile ele alınabilir durumlardır. Bireysel değerlendirme sonucunda, bireyin ihtiyaçlarına uygun bir destek planı oluşturulmaktadır. Bu plan farmakolojik yaklaşımlar, bilişsel davranışçı terapi veya kombine yaklaşımları içerebilir. Ankara, Etimesgut ve Batıkent bölgelerinden kolay ulaşım sağlanabilir.'
                },
                {
                    title: 'Panik Atak Ne Zaman Ciddiye Alınmalıdır?',
                    text: 'Panik atak yaşamak, görüldüğünden daha yaygındır. Ancak tekrarlayan ataklar, sürekli atak beklentisi veya atak korkusuyla belirli durumlardan kaçınma davranışı geliştiğinde, profesyonel değerlendirme önerilmektedir. Erken dönemde alınan destek, bireyin yaşam kalitesinin korunmasına önemli katkı sağlayabilir.'
                }
            ],
            relatedServices: ['anksiyete', 'depresyon', 'okb'],
            faq: [
                { question: 'Panik atak tehlikeli midir?', answer: 'Panik atak bedensel olarak tehlike arz etmese de, birey için son derece rahatsız edici ve korkutucu olabilir. Tekrarlayan panik ataklar günlük yaşamı olumsuz etkileyebileceğinden, profesyonel değerlendirme önerilmektedir.' },
                { question: 'Panik atak ile kalp krizi nasıl ayırt edilir?', answer: 'Panik atak belirtileri kalp krizi belirtileriyle benzerlik gösterebilir. Bu nedenle özellikle ilk kez böyle belirtiler yaşandığında acil tıbbi değerlendirme yapılması önemlidir. Uzman hekim değerlendirmesi ile bu durumlar ayırt edilebilir.' },
                { question: 'Eryaman\'da panik atak değerlendirmesi yapılıyor mu?', answer: 'Evet, Ankara Eryaman, Altay Mahallesi çevresinde Uzm. Dr. Abdullah Maraş\'ın kliniğinde panik atak ve panik bozukluğu değerlendirmesi yapılmaktadır.' }
            ]
        }
    },
    {
        slug: 'okb',
        title: 'Obsesif Kompulsif Bozukluk (OKB)',
        metaTitle: 'OKB Değerlendirmesi | Eryaman Psikiyatrist - Uzm. Dr. Abdullah Maraş',
        metaDescription: 'Ankara Eryaman\'da obsesif kompulsif bozukluk (OKB) değerlendirmesi. Tekrarlayan düşünce ve davranış kalıplarına yönelik uzman psikiyatri değerlendirmesi.',
        icon: '🔄',
        shortDesc: 'Tekrarlayan düşünce ve davranış kalıplarının klinik değerlendirmesi.',
        content: {
            intro: 'Obsesif kompulsif bozukluk (OKB), tekrarlayan, istenmeyen düşünceler (obsesyonlar) ve bu düşüncelerin yarattığı sıkıntıyı azaltmak için gerçekleştirilen tekrarlayıcı davranışlar (kompulsiyonlar) ile karakterize bir ruh sağlığı durumudur. OKB, bireyin günlük yaşamını ciddi biçimde etkileyebilir. Ankara Eryaman\'da Uzm. Dr. Abdullah Maraş, OKB belirtilerinin kapsamlı değerlendirmesini gerçekleştirmektedir.',
            sections: [
                {
                    title: 'OKB Nedir?',
                    text: 'OKB, obsesyonlar ve kompulsiyonlar olmak üzere iki temel bileşenden oluşur. Obsesyonlar; tekrarlayan, istenmeyen ve rahatsız edici düşünceler, imgeler veya dürtülerdir. Kompulsiyonlar ise obsesyonların yarattığı kaygıyı azaltmak amacıyla gerçekleştirilen tekrarlayıcı davranışlar veya zihinsel eylemlerdir. Yaygın obsesyon temaları arasında kirlenme korkusu, simetri ihtiyacı, zarar verme korkusu ve dinsel/ahlaki takıntılar yer alabilir. Kompulsiyonlar ise aşırı temizlik, kontrol etme, sayma, düzenleme ve zihinsel tekrarlama şeklinde görülebilir.'
                },
                {
                    title: 'OKB Değerlendirme Süreci',
                    text: 'Eryaman\'daki kliniğimizde OKB değerlendirmesi, bireyin yaşadığı obsesyon ve kompulsiyonların içeriğini, sıklığını, şiddetini ve yaşam üzerindeki etkisini anlamaya yönelik kapsamlı bir görüşmeyi içerir. Standardize değerlendirme araçları kullanılarak belirtilerin şiddeti ölçülebilir. Altay Mahallesi çevresindeki klinikte güvenli bir ortamda değerlendirme yapılmaktadır.'
                },
                {
                    title: 'OKB\'de Bireysel Destek Yaklaşımı',
                    text: 'OKB, uygun profesyonel değerlendirme ve destek ile ele alınabilir bir durumdur. Bireysel değerlendirme sonucunda farmakolojik yaklaşımlar, maruz bırakma ve tepki önleme (ERP) gibi psikoterapi yöntemleri veya kombine yaklaşımlar planlanabilir. Dr. Maraş, bilimsel verilere dayalı bireysel bir değerlendirme süreci sunmaktadır.'
                },
                {
                    title: 'OKB Belirtileri Ne Zaman Değerlendirilmelidir?',
                    text: 'Tekrarlayan düşünceler günlük yaşamınızı olumsuz etkiliyorsa, belirli davranışları yapmadan edemiyorsanız veya bu düşünce ve davranışlar önemli zaman kaybına yol açıyorsa, profesyonel bir psikiyatrik değerlendirme önerilmektedir. Ankara Eryaman\'da randevu alarak değerlendirme sürecini başlatabilirsiniz.'
                }
            ],
            relatedServices: ['anksiyete', 'depresyon', 'panik-atak'],
            faq: [
                { question: 'OKB belirtileri nelerdir?', answer: 'OKB\'nin belirtileri tekrarlayan istenmeyen düşünceler (obsesyonlar) ve bu düşüncelerin yarattığı kaygıyı azaltmak için yapılan tekrarlayıcı davranışlardır (kompulsiyonlar). Kirlenme korkusu, kontrol etme ihtiyacı, simetri takıntısı yaygın görülen örneklerdir.' },
                { question: 'OKB yaygın mıdır?', answer: 'OKB, toplumda düşünüldüğünden daha yaygın görülen bir ruh sağlığı durumudur. Birçok birey belirtileri normalleştirerek profesyonel destek aramayı erteleyebilmektedir.' },
                { question: 'Eryaman\'da OKB değerlendirmesi yapılıyor mu?', answer: 'Evet, Ankara Eryaman\'da Uzm. Dr. Abdullah Maraş\'ın kliniğinde OKB değerlendirmesi kapsamlı bir şekilde yapılmaktadır.' }
            ]
        }
    },
    {
        slug: 'dikkat-eksikligi',
        title: 'Dikkat Eksikliği ve Hiperaktivite Bozukluğu (DEHB)',
        metaTitle: 'DEHB Değerlendirmesi | Eryaman Psikiyatrist - Uzm. Dr. Abdullah Maraş',
        metaDescription: 'Ankara Eryaman\'da dikkat eksikliği ve hiperaktivite bozukluğu (DEHB) değerlendirmesi. Odaklanma güçlüğü ve dürtüsellik belirtilerine yönelik uzman psikiyatri değerlendirmesi.',
        icon: '🎯',
        shortDesc: 'Dikkat dağınıklığı, odaklanma güçlüğü ve dürtüsellik belirtilerinin değerlendirmesi.',
        content: {
            intro: 'Dikkat eksikliği ve hiperaktivite bozukluğu (DEHB), dikkat sürdürmede güçlük, dürtüsellik ve bazı bireylerde hiperaktivite ile karakterize bir nöropsikiyatrik durumdur. DEHB yalnızca çocukluk çağına özgü değildir; birçok yetişkin de DEHB belirtileri yaşamaktadır. Ankara Eryaman\'da Uzm. Dr. Abdullah Maraş, DEHB\'nin kapsamlı değerlendirmesini gerçekleştirmektedir.',
            sections: [
                {
                    title: 'DEHB Nedir?',
                    text: 'DEHB, dikkat eksikliği, hiperaktivite ve dürtüsellik belirtileri ile karakterize olan nörogelişimsel bir durumdur. Üç alt tipi bulunmaktadır: dikkat eksikliği baskın tip, hiperaktif-dürtüsel baskın tip ve birleşik tip. Belirtiler arasında bir işi tamamlamakta güçlük, unutkanlık, organizasyon sorunları, yerinde duramama, sabırsızlık ve dürtüsel kararlar sayılabilir. DEHB, akademik, mesleki ve sosyal alanlarda zorluklar yaşanmasına yol açabilir.'
                },
                {
                    title: 'DEHB Değerlendirme Süreci',
                    text: 'Eryaman\'daki kliniğimizde DEHB değerlendirmesi, detaylı bir klinik görüşme, gelişim öyküsü değerlendirmesi ve standardize ölçeklerin kullanılmasını içermektedir. Yetişkinlerde DEHB değerlendirmesi, çocukluk dönemi belirtilerinin de sorgulanmasını gerektirir. Altay Mahallesi çevresindeki klinikte kapsamlı bir değerlendirme süreci sunulmaktadır.'
                },
                {
                    title: 'Yetişkinlerde DEHB',
                    text: 'DEHB\'nin yetişkinlik döneminde de devam edebileceği günümüzde daha iyi anlaşılmaktadır. Yetişkin DEHB belirtileri, çocukluk dönemine göre farklılık gösterebilir. İş hayatında performans sorunları, zaman yönetimi güçlükleri, ilişki problemleri ve dikkat dağınıklığı yetişkin DEHB\'nin yaygın yansımaları arasında yer almaktadır. Etimesgut ve Batıkent bölgelerinden de kolay erişim imkânı sunan kliniğimizde, yetişkin DEHB değerlendirmesi yapılmaktadır.'
                },
                {
                    title: 'DEHB Belirtileri Ne Zaman Değerlendirilmelidir?',
                    text: 'Dikkat dağınıklığı, organizasyon güçlüğü, görevleri tamamlayamama veya dürtüsellik gibi belirtiler günlük yaşamınızı olumsuz etkiliyorsa, profesyonel bir değerlendirme almanız önerilmektedir. DEHB, uygun değerlendirme ile tanımlanabilen ve bireysel planlama ile ele alınabilen bir durumdur.'
                }
            ],
            relatedServices: ['anksiyete', 'depresyon', 'uyku-bozukluklari'],
            faq: [
                { question: 'DEHB sadece çocuklarda mı görülür?', answer: 'Hayır, DEHB yetişkinlerde de görülebilmektedir. Çocukluk döneminde başlayan belirtiler, yetişkinlikte farklı biçimlerde devam edebilir. Yetişkin DEHB değerlendirmesi uzman bir psikiyatrist tarafından yapılmalıdır.' },
                { question: 'DEHB değerlendirmesi nasıl yapılır?', answer: 'DEHB değerlendirmesi kapsamlı bir klinik görüşme, gelişim öyküsü, standardize ölçekler ve gerektiğinde nöropsikolojik testler içermektedir. Çocukluk dönemi belirtileri de sorgulanmaktadır.' },
                { question: 'Eryaman\'da DEHB değerlendirmesi yapılıyor mu?', answer: 'Evet, Ankara Eryaman\'da Uzm. Dr. Abdullah Maraş\'ın kliniğinde hem çocuk hem de yetişkin DEHB değerlendirmesi yapılmaktadır.' }
            ]
        }
    },
    {
        slug: 'bipolar-bozukluk',
        title: 'Bipolar Bozukluk',
        metaTitle: 'Bipolar Bozukluk Değerlendirmesi | Eryaman Psikiyatrist - Uzm. Dr. Abdullah Maraş',
        metaDescription: 'Ankara Eryaman\'da bipolar bozukluk değerlendirmesi. Duygudurum dalgalanmaları ve enerji değişimlerine yönelik uzman psikiyatri değerlendirmesi.',
        icon: '🔃',
        shortDesc: 'Duygudurum dalgalanmaları ve enerji değişimlerinin klinik değerlendirmesi.',
        content: {
            intro: 'Bipolar bozukluk, duygudurum durumunda belirgin dalgalanmalarla seyreden bir ruh sağlığı durumudur. Manik (taşkınlık) dönemleri ve depresif (çökkünlük) dönemleri arasında gidip gelebilen bu durum, bireyin yaşam kalitesini önemli ölçüde etkileyebilir. Ankara Eryaman\'da Uzm. Dr. Abdullah Maraş, bipolar bozukluk değerlendirmesini kapsamlı bir şekilde gerçekleştirmektedir.',
            sections: [
                {
                    title: 'Bipolar Bozukluk Nedir?',
                    text: 'Bipolar bozukluk, enerji düzeyi ve duygudurum durumunda belirgin dalgalanmalarla karakterize olan bir ruh sağlığı durumudur. Manik dönemlerde aşırı enerji, uyku ihtiyacında azalma, hızlı konuşma, grandiöz düşünceler ve risk alma davranışları görülebilir. Depresif dönemlerde ise çökkünlük, enerji kaybı, ilgi azalması ve umutsuzluk belirtileri ön plana çıkabilir. Bipolar bozukluğun farklı tipleri (Tip I, Tip II, siklotimi) bulunmaktadır.'
                },
                {
                    title: 'Bipolar Bozukluk Değerlendirme Süreci',
                    text: 'Eryaman\'daki kliniğimizde bipolar bozukluk değerlendirmesi, bireyin duygudurum öyküsünün detaylı incelenmesini, manik ve depresif dönemlerin tespitini ve ayırıcı tanının yapılmasını içerir. Aile öyküsü, tetikleyici faktörler ve eşlik eden durumlar da değerlendirme kapsamında ele alınmaktadır. Altay Mahallesi çevresindeki klinikte kapsamlı bir görüşme gerçekleştirilmektedir.'
                },
                {
                    title: 'Bipolar Bozuklukta Uzun Süreli İzlem',
                    text: 'Bipolar bozukluk, uzun süreli izlem ve düzenli değerlendirme gerektiren bir durumdur. Bireysel planlama ve düzenli takip, duygudurum dalgalanmalarının yönetilmesinde önemli rol üstlenmektedir. Dr. Maraş, bilimsel verilere dayalı bireysel izlem süreçleri sunmaktadır. Ankara, Etimesgut ve çevre bölgelerden kolay ulaşım sağlanabilir.'
                },
                {
                    title: 'Ne Zaman Değerlendirme Yapılmalıdır?',
                    text: 'Duygudurum durumunuzda belirgin dalgalanmalar yaşıyorsanız, aşırı enerji dönemlerini şiddetli çökkünlük dönemleri takip ediyorsa veya yakınlarınız davranışlarınızda belirgin değişimler fark ediyorsa, profesyonel bir değerlendirme almanız önerilmektedir.'
                }
            ],
            relatedServices: ['depresyon', 'uyku-bozukluklari', 'anksiyete'],
            faq: [
                { question: 'Bipolar bozukluk belirtileri nelerdir?', answer: 'Bipolar bozukluğun belirtileri manik ve depresif dönemlere göre farklılık gösterir. Manik dönemde aşırı enerji, uyku ihtiyacında azalma ve grandiöz düşünceler; depresif dönemde ise çökkünlük, enerji kaybı ve umutsuzluk görülebilir.' },
                { question: 'Bipolar bozukluk ile depresyon farkı nedir?', answer: 'Depresyonda yalnızca depresif dönemler yaşanırken, bipolar bozuklukta hem manik hem de depresif dönemler görülmektedir. Ayırıcı tanı, uzman bir psikiyatrist tarafından yapılmalıdır.' },
                { question: 'Eryaman\'da bipolar bozukluk değerlendirmesi yapılıyor mu?', answer: 'Evet, Ankara Eryaman\'da Uzm. Dr. Abdullah Maraş\'ın kliniğinde bipolar bozukluk kapsamlı değerlendirmesi yapılmaktadır.' }
            ]
        }
    },
    {
        slug: 'uyku-bozukluklari',
        title: 'Uyku Bozuklukları',
        metaTitle: 'Uyku Bozuklukları Değerlendirmesi | Eryaman Psikiyatrist - Uzm. Dr. Abdullah Maraş',
        metaDescription: 'Ankara Eryaman\'da uyku bozuklukları değerlendirmesi. Uykusuzluk, aşırı uyku ve uyku kalitesi sorunlarına yönelik uzman psikiyatri değerlendirmesi.',
        icon: '🌙',
        shortDesc: 'Uykusuzluk, aşırı uyku ve uyku kalitesi sorunlarına yönelik değerlendirme.',
        content: {
            intro: 'Uyku bozuklukları, bireyin uyku kalitesini, süresini veya uyku-uyanıklık döngüsünü olumsuz etkileyen durumları kapsamaktadır. Kaliteli uyku, ruh sağlığının ve genel sağlığın temel yapı taşlarından biridir. Uyku sorunları, birçok ruhsal ve bedensel sağlık durumu ile ilişkili olabilir. Ankara Eryaman\'da Uzm. Dr. Abdullah Maraş, uyku bozukluklarının psikiyatrik açıdan kapsamlı değerlendirmesini gerçekleştirmektedir.',
            sections: [
                {
                    title: 'Uyku Bozuklukları Nedir?',
                    text: 'Uyku bozuklukları, uykuya dalma güçlüğü (insomnia), aşırı uyuma (hipersomnia), uyku-uyanıklık döngüsü bozuklukları ve uyku kalitesini etkileyen diğer durumları kapsar. Uykusuzluk, en sık karşılaşılan uyku şikâyetidir ve birçok farklı nedenden kaynaklanabilir. Stres, kaygı, depresyon, yaşam tarzı faktörleri ve fiziksel sağlık sorunları uyku bozukluklarının ortaya çıkışında rol oynayabilir.'
                },
                {
                    title: 'Uyku ve Ruh Sağlığı İlişkisi',
                    text: 'Uyku bozuklukları ile ruhsal sağlık durumları arasında çift yönlü bir ilişki bulunmaktadır. Depresyon, anksiyete, bipolar bozukluk gibi durumlar uyku bozukluklarına yol açabileceği gibi, kronik uyku sorunları da ruhsal sağlığı olumsuz etkileyebilir. Bu nedenle uyku bozukluklarının psikiyatrik açıdan da değerlendirilmesi büyük önem taşımaktadır. Eryaman\'da bu değerlendirme Uzm. Dr. Abdullah Maraş tarafından gerçekleştirilmektedir.'
                },
                {
                    title: 'Uyku Bozuklukları Değerlendirme Süreci',
                    text: 'Altay Mahallesi çevresindeki kliniğimizde uyku bozuklukları değerlendirmesi, bireyin uyku alışkanlıklarının, uyku hijyeninin, eşlik eden ruhsal ve bedensel durumların detaylı olarak ele alınmasını içerir. Uyku günlüğü tutma, uyku kalitesi ölçekleri ve kapsamlı klinik görüşme değerlendirme sürecinin bileşenleridir.'
                },
                {
                    title: 'Uyku Sorunlarında Profesyonel Değerlendirmenin Önemi',
                    text: 'Kronik uyku sorunları, gün içi işlevselliği, konsantrasyonu, ruh halini ve genel sağlığı olumsuz etkileyebilir. Uyku problemleriniz iki haftadan uzun süredir devam ediyorsa veya günlük yaşamınızı olumsuz etkiliyorsa, profesyonel bir değerlendirme almanız önerilmektedir. Etimesgut ve Batıkent bölgelerinden de kolay ulaşılabilen kliniğimizde randevu alabilirsiniz.'
                }
            ],
            relatedServices: ['depresyon', 'anksiyete', 'bipolar-bozukluk'],
            faq: [
                { question: 'Uyku bozukluğu belirtileri nelerdir?', answer: 'Uykuya dalma güçlüğü, gece sık uyanma, sabah erken uyanma, gündüz aşırı uykuluk, uyandıktan sonra dinlenmemiş hissetme ve uyku kalitesinde düşüş yaygın belirtiler arasındadır.' },
                { question: 'Uykusuzluk depresyon belirtisi olabilir mi?', answer: 'Evet, uykusuzluk depresyonun yaygın bir belirtisi olabilir. Ancak uyku bozukluklarının birçok farklı nedeni olabilir. Uzman değerlendirmesi ile altta yatan nedenler araştırılmalıdır.' },
                { question: 'Eryaman\'da uyku bozukluğu değerlendirmesi yapılıyor mu?', answer: 'Evet, Ankara Eryaman\'da Uzm. Dr. Abdullah Maraş\'ın kliniğinde uyku bozukluklarının psikiyatrik değerlendirmesi yapılmaktadır.' }
            ]
        }
    },
    {
        slug: 'yetiskin-psikiyatrisi',
        title: 'Yetişkin Psikiyatrisi',
        metaTitle: 'Yetişkin Psikiyatrisi | Eryaman Psikiyatrist - Uzm. Dr. Abdullah Maraş',
        metaDescription: 'Ankara Eryaman\'da yetişkin psikiyatrisi değerlendirmesi. Yetişkin dönemine özgü ruh sağlığı sorunlarının kapsamlı psikiyatrik değerlendirmesi.',
        icon: '🧠',
        shortDesc: 'Yetişkin dönemine özgü ruh sağlığı sorunlarının kapsamlı değerlendirmesi.',
        content: {
            intro: 'Yetişkin psikiyatrisi, yetişkinlik dönemindeki bireylerin ruh sağlığı sorunlarının değerlendirmesi, tanılanması ve yönetimini kapsayan psikiyatrinin temel alanlarından biridir. İş hayatı, ilişkiler, ailevi sorumluluklar ve yaşam geçişleri gibi yetişkinliğe özgü stresörler, ruh sağlığını etkileyebilmektedir. Ankara Eryaman\'da Uzm. Dr. Abdullah Maraş, yetişkinlere yönelik kapsamlı psikiyatrik değerlendirme sunmaktadır.',
            sections: [
                {
                    title: 'Yetişkin Psikiyatrisi Kapsamı',
                    text: 'Yetişkin psikiyatrisi, depresyon, anksiyete bozuklukları, bipolar bozukluk, OKB, DEHB, uyku bozuklukları, travma sonrası stres bozukluğu, kişilik bozuklukları ve diğer ruhsal sağlık durumlarını kapsamaktadır. Her bireyin yaşam deneyimi ve ruhsal ihtiyaçları farklıdır, bu nedenle bireysel bir değerlendirme ve planlama süreci büyük önem taşımaktadır.'
                },
                {
                    title: 'Yetişkinlikte Ruh Sağlığının Önemi',
                    text: 'Yetişkinlik dönemi, kariyer, ilişkiler ve ailevi sorumluluklar gibi birçok stresör ile karakterizedir. Bu faktörler ruh sağlığını olumsuz etkileyebilir. Profesyonel psikiyatrik değerlendirme, bireylerin yaşam kalitesini korumalarına ve ruhsal zorluklarla baş etmelerine destek sağlayabilir. Eryaman\'da bilimsel çerçevede hizmet sunulmaktadır.'
                },
                {
                    title: 'Değerlendirme Yaklaşımı',
                    text: 'Altay Mahallesi çevresindeki kliniğimizde yetişkin psikiyatri değerlendirmesi, biyopsikososyal model çerçevesinde gerçekleştirilmektedir. Bireyin biyolojik faktörleri, psikolojik durumu ve sosyal çevresi bir bütün olarak ele alınmaktadır. Her görüşmede yeterli süre ayrılarak detaylı bir değerlendirme yapılmaktadır.'
                },
                {
                    title: 'Ne Zaman Psikiyatri Desteği Aranmalıdır?',
                    text: 'Ruhsal belirtiler günlük yaşamınızı olumsuz etkiliyorsa, iş performansınızda düşüş yaşıyorsanız, ilişkilerinizde sorunlar fark ediyorsanız veya genel yaşam kalitenizde azalma hissediyorsanız, profesyonel bir psikiyatrik değerlendirme almanız önerilmektedir. Ankara, Etimesgut ve Batıkent bölgelerinden kolay ulaşılabilen klinikte randevu alabilirsiniz.'
                }
            ],
            relatedServices: ['depresyon', 'anksiyete', 'dikkat-eksikligi'],
            faq: [
                { question: 'Yetişkin psikiyatrisi hangi durumları kapsar?', answer: 'Yetişkin psikiyatrisi; depresyon, anksiyete, bipolar bozukluk, OKB, DEHB, uyku bozuklukları, travma sonrası stres bozukluğu ve diğer birçok ruhsal sağlık durumunu kapsamaktadır.' },
                { question: 'Psikiyatriste gitmeye karar vermek zor mu?', answer: 'Profesyonel destek almak önemli ve cesaretli bir adımdır. Ruh sağlığı, genel sağlığın ayrılmaz bir parçasıdır. Erken dönemde alınan destek, yaşam kalitesinin korunmasına katkı sağlayabilir.' },
                { question: 'Eryaman\'da yetişkin psikiyatrisi değerlendirmesi yapılıyor mu?', answer: 'Evet, Ankara Eryaman\'da Uzm. Dr. Abdullah Maraş\'ın kliniğinde yetişkinlere yönelik kapsamlı psikiyatrik değerlendirme yapılmaktadır.' }
            ]
        }
    },
    {
        slug: '16-yas-uzeri-ergen-psikiyatrisi',
        title: '16 Yaş Üzeri Ergen Psikiyatri',
        metaTitle: '16 Yaş Üzeri Ergen Psikiyatrisi | Eryaman Psikiyatrist - Uzm. Dr. Abdullah Maraş',
        metaDescription: 'Ankara Eryaman\'da 16 yaş üzeri ergen psikiyatrisi değerlendirmesi. Ergenlik dönemine uygun psikiyatrik değerlendirme ve destek.',
        icon: '🌱',
        shortDesc: '16 yaş ve üzeri ergenlik dönemine uygun psikiyatrik değerlendirme ve destek.',
        content: {
            intro: 'Ergenlik dönemi, bireyin çocukluktan yetişkinliğe geçtiği, kimlik kazanımı ve ruhsal gelişimin yoğun yaşandığı kritik bir süreçtir. Bu dönemde ortaya çıkan ruhsal zorluklar, bireyin ileriki yaşamını derinden etkileyebilir. Ankara Eryaman\'da Uzm. Dr. Abdullah Maraş, 16 yaş ve üzerindeki ergenlere yönelik kapsamlı psikiyatrik değerlendirme sunmaktadır.',
            sections: [
                {
                    title: '16 Yaş Üzeri Ergen Psikiyatrisi Kapsamı',
                    text: 'Bu alanda 16 yaş ve üzeri bireylerin ergenlik dönemine özgü ruhsal sağlık sorunları değerlendirilmektedir. Sınav kaygısı, kimlik arayışı, sosyal ilişki güçlükleri, dikkat eksikliği ve hiperaktivite (DEHB), duygu düzenleme sorunları ve gelecek kaygısı bu dönemin temel odak noktaları arasındadır.'
                },
                {
                    title: 'Ergenlikte Ruhsal Değerlendirme',
                    text: 'Ergenlik dönemi, hormonal değişimlerin ve sosyal baskıların yoğun olarak yaşandığı bir süreçtir. Bu dönemde yaşanan kaygı, depresif belirtiler, öfke kontrolü güçlükleri ve akademik performans düşüklüğü sık görülebilmektedir. Altay Mahallesi çevresindeki kliniğimizde, ergenlerin kendilerini ifade edebilecekleri güvenli ve yargısız bir ortam sunulmaktadır.'
                },
                {
                    title: 'Bireysel Yaklaşım ve Destek',
                    text: 'Her ergenun yaşadığı zorluklar ve aile içindeki konumu benzersizdir. Değerlendirme sürecinde ergenin özerkliğine saygı duyularak, ihtiyaçlarına uygun bir destek planı oluşturulur. Ankara, Etimesgut ve Batıkent bölgelerinden kolay ulaşılabilen kliniğimizde, bilimsel verilere dayalı bir yaklaşım benimsenmektedir.'
                }
            ],
            relatedServices: ['dikkat-eksikligi', 'anksiyete', 'depresyon'],
            faq: [
                { question: 'Kliniğinizde her yaştan çocuk bakılıyor mu?', answer: 'Hayır, kliniğimizde özellikle 16 yaş ve üzerindeki ergen bireylere yönelik psikiyatrik değerlendirme süreçleri yürütülmektedir.' },
                { question: 'Ergenlikte görülen her değişim normal midir?', answer: 'Ergenlikte belirli düzeyde ruhsal dalgalanmalar normal karşılansa da, belirtiler sürekli hale geldiğinde ve gencin günlük yaşamını, akademik başarısını ya da sosyal ilişkilerini bozmaya başladığında profesyonel bir değerlendirme yapılması önerilir.' },
                { question: 'Eryaman\'da ergen psikiyatrisi değerlendirmesi yapılıyor mu?', answer: 'Evet, Ankara Eryaman\'da Uzm. Dr. Abdullah Maraş\'ın kliniğinde 16 yaş üzeri ergenlere yönelik kapsamlı psikiyatrik değerlendirme yapılmaktadır.' }
            ]
        }
    },
    {
        slug: 'cinsel-bozukluklar',
        title: 'Cinsel Bozukluklar',
        metaTitle: 'Cinsel Bozukluklar Değerlendirmesi | Eryaman Psikiyatrist - Uzm. Dr. Abdullah Maraş',
        metaDescription: 'Ankara Eryaman\'da cinsel işlev bozuklukları değerlendirmesi. Sertleşme sorunu, erken boşalma ve cinsel isteksizlik gibi durumlara yönelik uzman psikiyatri değerlendirmesi.',
        icon: '❤️',
        shortDesc: 'Cinsel isteksizlik, sertleşme sorunları ve erken boşalma gibi durumların klinik değerlendirmesi.',
        content: {
            intro: 'Cinsel sağlık, genel iyilik halinin ve yaşam kalitesinin ayrılmaz bir parçasıdır. Cinsel işlev bozuklukları, bireyin veya çiftin cinsel yaşamından doyumu engelleyen fiziksel, psikolojik veya ilişkisel sorunları kapsar. Ankara Eryaman\'da Uzm. Dr. Abdullah Maraş, cinsel bozuklukların kapsamlı klinik değerlendirmesini bilimsel ve etik çerçevede gerçekleştirmektedir.',
            sections: [
                {
                    title: 'Cinsel İşlev Bozuklukları Nedir?',
                    text: 'Cinsel işlev bozuklukları; cinsel istek, uyarılma, haz alma veya boşalma aşamalarında yaşanan aksaklıkları ifade eder. Bu durumlar biyolojik nedenlerden (hormonal, damarsal, ilaç yan etkileri) kaynaklanabileceği gibi, yoğun stres, kaygı, geçmiş travmalar veya ilişki sorunları gibi psikolojik faktörlerden de kaynaklanabilir.'
                },
                {
                    title: 'Yaygın Karşılaşılan Cinsel Sorunlar',
                    text: 'Erkeklerde sertleşme sorunu (erektil disfonksiyon), erken boşalma ve cinsel isteksizlik sık görülürken; kadınlarda cinsel isteksizlik, orgazm bozuklukları, vajinismus ve ağrılı cinsel birleşme (disparoni) sık karşılaşılan durumlar arasındadır.'
                },
                {
                    title: 'Klinik Değerlendirme Süreci',
                    text: 'Kliniğimizde cinsel bozuklukların değerlendirmesi, detaylı bir klinik görüşme ile başlar. Sorunun başlangıcı, seyri, tıbbi geçmiş ve psikososyal etkenler bütüncül bir bakış açısıyla ele alınır. Ayrıcı tanı amacıyla gerekli tıbbi tetkikler için ilgili branşlar ile işbirliği yapılabilir.'
                },
                {
                    title: 'Bireysel ve Çift Odaklı Yaklaşım',
                    text: 'Cinsel sorunlar genellikle sadece bir bireyi değil, ilişkiyi de etkiler. Değerlendirme sonucunda bireysel ihtiyaçlara veya çift dinamiklerine uygun bir destek planı oluşturulur. Cinsel terapiler, farmakolojik yaklaşımlar veya her ikisi birlikte kullanılabilir.'
                }
            ],
            relatedServices: ['anksiyete', 'depresyon', 'uyku-bozukluklari'],
            faq: [
                { question: 'Cinsel bozukluklar tedavi edilebilir mi?', answer: 'Evet, birçok cinsel işlev bozukluğu doğru tanı ve uygun yaklaşımlarla başarılı bir şekilde tedavi edilebilir. Önemli olan sorunun temel nedenlerini doğru saptamaktır.' },
                { question: 'Psikiyatri uzmanı cinsel sorunlara bakar mı?', answer: 'Evet, cinsel işlev bozukluklarının büyük bir kısmı psikolojik kökenlidir veya psikolojik faktörlerle ağırlaşmaktadır. Psikiyatri uzmanları, bu sorunların hem tıbbi hem de psikolojik değerlendirmesinde yetkin tıp doktorlarıdır.' },
                { question: 'Eryaman\'da cinsel terapi değerlendirmesi yapılıyor mu?', answer: 'Ankara Eryaman, Altay Mahallesi çevresinde Uzm. Dr. Abdullah Maraş\'ın kliniğinde cinsel işlev bozukluklarına yönelik kapsamlı klinik değerlendirme gerçekleştirilmektedir.' }
            ]
        }
    }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
    return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): ServiceData[] {
    return services.filter((s) => slugs.includes(s.slug));
}
