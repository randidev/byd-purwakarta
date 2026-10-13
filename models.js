// Data model BYD. Harga: juta rupiah OTR Jakarta (null = hubungi sales). Nilai array = per varian (urut sesuai v).
// Sumber spesifikasi: brosur resmi BYD Indonesia (Seal, Sealion 7), halaman produk byd.com/id, dan media otomotif.
// Baris yang tidak ada datanya sengaja dikosongkan; kelengkapan fitur dapat berbeda per varian.
const M = [
 {id:'atto1',page:'atto1',n:'Atto 1',type:'Hatchback',img:'atto1.jpg',seat:4,tag:'City car listrik lincah dengan layar putar dan harga paling terjangkau.',
  v:[{n:'Standard',p:199,bat:30.08,r:300,kw:55,nm:135},{n:'Dynamic',p:210,bat:30.08,r:300,kw:55,nm:135},{n:'Premium',p:245,bat:38.88,r:380,kw:55,nm:135}],
  g:[
   {t:'Performa & Baterai',rows:[['Penggerak','Roda depan (FWD)'],['Motor','Permanent Magnet Synchronous Motor (PMSM)'],['Daya maksimum','± 55 kW'],['Torsi maksimum','135 Nm'],['Akselerasi 0–50 km/j','4,9 detik'],['Baterai','BYD Blade Battery (LFP)'],['Kapasitas baterai',['30,08 kWh','30,08 kWh','38,88 kWh']],['Jarak tempuh (NEDC)',['300 km','300 km','380 km']],['Pengisian DC cepat',['–','30 kW','40 kW']],['Vehicle-to-Load (V2L)','Hingga 2,2 kW']]},
   {t:'Dimensi & Kapasitas',rows:[['Panjang × Lebar × Tinggi','3.925 × 1.720 × 1.590 mm'],['Wheelbase','2.500 mm'],['Ground clearance','155 mm'],['Bagasi','230 L (930 L jok dilipat)'],['Kapasitas penumpang','4 orang']]},
   {t:'Eksterior',rows:[['Velg',['15" (kaleng)','16" alloy','16" alloy']],['Lampu depan','LED "Double Slash" + automatic headlamp'],['Lampu rem tinggi','LED High Mounted Brake Light']],chips:['Spoiler belakang','Desain Ocean Aesthetics','Siluet belakang tegas']},
   {t:'Interior & Kenyamanan',rows:[['Layar infotainment','10,1" putar'],['Panel instrumen',['–','–','Digital 7" (Premium)']],['Wireless charger','Ya (varian tertentu)'],['Konektivitas','Apple CarPlay & Android Auto'],['Jok','Kulit sintetis']],chips:['Konsol dengan AC vent','Kabin kompak & lega']},
   {t:'Keselamatan',rows:[['Airbag',['Hubungi sales','4 airbag','6 airbag']]],chips:['Blade Battery aman','Struktur bodi e-Platform 3.0']}
  ]},
 {id:'dolphin',page:'dolphin',pdf:'brochure/DOLPHIN-BROCHURE.pdf',n:'Dolphin',type:'Hatchback',img:'dolphin.jpg',seat:5,tag:'Hatchback listrik serbaguna: desain muda, kabin lega, jarak tempuh nyaman.',
  v:[{n:'Dynamic',p:369,bat:44.9,r:410,kw:70,nm:180,acc:12.3},{n:'Premium',p:429,bat:60.48,r:490,kw:150,nm:310,acc:7}],
  g:[
   {t:'Performa & Baterai',rows:[['Penggerak','Roda depan (FWD)'],['Motor','Permanent Magnet Synchronous Motor (PMSM)'],['Daya maksimum',['70 kW','150 kW (± 204 PS)']],['Torsi maksimum',['180 Nm','310 Nm']],['Akselerasi 0–100 km/j',['12,3 detik','± 7,0 detik']],['Baterai','BYD Blade Battery (LFP)'],['Kapasitas baterai',['44,9 kWh','60,48 kWh']],['Jarak tempuh (NEDC)',['410 km','490 km']]]},
   {t:'Dimensi & Kapasitas',rows:[['Panjang × Lebar × Tinggi','4.290 × 1.770 × 1.570 mm'],['Wheelbase','2.700 mm'],['Ground clearance','130 mm'],['Bagasi','345 L (1.310 L jok dilipat)'],['Kapasitas penumpang','5 orang']]},
   {t:'Eksterior',rows:[['Gaya desain','Ocean Aesthetics']],chips:['Tersedia dalam beberapa warna','Lampu LED']},
   {t:'Interior & Kenyamanan',rows:[['Layar infotainment','12,8" putar'],['Material kabin','Perpaduan jok & trim dua warna']],chips:['Armrest tengah','Kabin lega 5 penumpang','V2L']},
   {t:'Teknologi',rows:[['Platform','e-Platform 3.0'],['Baterai','Blade Battery – aman & awet']]}
  ]},
 {id:'atto3',page:'atto3',pdf:'brochure/ATTO3-BROCHURE.pdf',n:'Atto 3',type:'SUV',img:'atto3.jpg',seat:5,tag:'SUV kompak listrik dengan kabin bergaya sporty dan kenyamanan sehari-hari.',
  v:[{n:'Advanced STD',p:390,bat:49.92,r:410},{n:'Superior',p:415,bat:60.48,r:480,kw:150,nm:310,acc:7.3}],
  g:[
   {t:'Performa & Baterai',rows:[['Penggerak','Roda depan (FWD)'],['Daya maksimum',['Hubungi sales','150 kW (± 201 PS)']],['Torsi maksimum',['Hubungi sales','310 Nm']],['Akselerasi 0–100 km/j',['Hubungi sales','7,3 detik']],['Baterai','BYD Blade Battery (LFP)'],['Kapasitas baterai',['49,92 kWh','60,48 kWh']],['Jarak tempuh (NEDC)',['410 km','480 km']],['V2L / mobile power','Ya (VTOL), hingga 3,3 kW']]},
   {t:'Dimensi & Kapasitas',rows:[['Panjang × Lebar × Tinggi','4.455 × 1.875 × 1.615 mm'],['Wheelbase','2.720 mm'],['Ground clearance','175 mm'],['Bagasi','± 440 L'],['Kapasitas penumpang','5 orang']]},
   {t:'Eksterior',rows:[['Ukuran ban / velg',['R17','R18']],['Lampu depan','LED kombinasi Crystal Dragon Feather'],['Atap','Panoramic double layer anti-pinch (Superior)']],chips:['Pegangan pintu gaya cengkeraman (Superior)','Desain Dragon Face','Dirancang tim Wolfgang Egger']},
   {t:'Interior & Kenyamanan',rows:[['Layar infotainment','12,8" putar'],['Jok','Sport, kombinasi aksen biru'],['Wireless charger','Ya (Superior)']],chips:['Trim pintu bertema "gitar" (Superior)','Kabin lega','Bagasi 440 L + ruang tersembunyi']},
   {t:'Keselamatan',rows:[['Airbag',['6 airbag','7 airbag']]],chips:['Blade Battery','ADAS']}
  ]},
 {id:'m6',page:'m6',n:'M6',type:'MPV',img:'m6.jpg',seat:7,tag:'MPV listrik keluarga: lapang, senyap, pilihan 7 atau 6 penumpang.',
  v:[{n:'Standard',p:395,bat:55.4,r:420,kw:150,nm:310},{n:'Superior',p:423,bat:71.8,r:530,kw:150,nm:310},{n:'Superior Captain',p:445,bat:71.8,r:530,kw:150,nm:310,seat:6}],
  g:[
   {t:'Performa & Baterai',rows:[['Penggerak','Roda depan (FWD)'],['Daya maksimum','± 150 kW (204 PS) – data media'],['Torsi maksimum','310 Nm'],['Baterai','BYD Blade Battery (LFP)'],['Kapasitas baterai',['55,4 kWh','71,8 kWh','71,8 kWh']],['Jarak tempuh (NEDC)',['420 km','530 km','530 km']],['Pengisian AC','± 7 kW (7–8 jam)'],['Pengisian DC puncak',['89 kW','115 kW','115 kW']],['Waktu isi 30→80%','± 30 menit']]},
   {t:'Dimensi & Kapasitas',rows:[['Panjang × Lebar × Tinggi','4.710 × 1.810 × 1.690 mm'],['Wheelbase','2.800 mm'],['Ground clearance','170 mm'],['Kapasitas penumpang',['7 orang','7 orang','6 orang (captain seat)']]]},
   {t:'Eksterior',rows:[['Lampu','LED']],chips:['Pilihan 4 warna','Velg alloy','Pintu bagasi lebar']},
   {t:'Interior & Kenyamanan',rows:[['Layar infotainment','12,8" putar'],['Interior','Hitam–cokelat']],chips:['Panoramic sunroof','Kabin keluarga lapang','Jok baris kedua nyaman','Banyak ruang penyimpanan']},
   {t:'Teknologi',rows:[['Baterai','Blade Battery – aman & awet']]}
  ]},
 {id:'m6dm',page:'m6-dm',n:'M6 DM',type:'MPV',img:'m6dm.jpg',seat:7,tag:'MPV plug-in hybrid DM: bensin bisa, listrik bisa. Ikon baru keluarga Indonesia.',
  v:[{n:'DM (mulai)',p:298}],
  g:[
   {t:'Performa & Penggerak',rows:[['Teknologi','Plug-in Hybrid DM (Dual Mode)'],['Mesin','1.5 L bensin (1.498 cc)'],['Baterai','BYD Blade Battery (LFP)'],['Kapasitas baterai','7,4 kWh / 18,3 kWh (sesuai varian)'],['Jarak mode EV','± 40 km / ± 110 km'],['Konsumsi BBM','Hingga 65 km/L (klaim BYD, uji 150 km)']]},
   {t:'Dimensi & Kapasitas',rows:[['Panjang','4.710 mm'],['Kapasitas penumpang','7 orang (varian Captain Seat: 6)']]},
   {t:'Interior & Kenyamanan',rows:[['Panel instrumen','Full LCD 10,25"'],['Layar infotainment','Layar besar di tengah dashboard']],chips:['Electric column shifter','Panoramic glass roof','Cross Over Fender','Jok kulit sintetis cokelat']},
   {t:'Catatan',rows:[['Harga','Rp 298 jt – 390 jt tergantung varian'],['Data spesifikasi','Antar sumber media berbeda; konfirmasi detail ke sales']]}
  ]},
 {id:'seal',page:'seal',pdf:'brochure/SEAL-BROCHURE.pdf',n:'Seal',type:'Sedan',img:'seal.jpg',seat:5,tag:'Sedan listrik performa tinggi dengan desain Ocean Aesthetics.',
  v:[{n:'Premium Extended',p:639,bat:82.56,r:650,kw:230,nm:360,acc:5.9},{n:'Performance AWD',p:750,bat:82.56,r:580,kw:390,nm:670,acc:3.8}],
  g:[
   {t:'Performa & Baterai',rows:[['Penggerak',['Roda belakang (RWD)','All-wheel drive (AWD)']],['Motor',['Permanent Magnet Synchronous Motor','Depan induksi 160 kW/310 Nm + belakang PMSM 230 kW/360 Nm']],['Daya maksimum',['230 kW','390 kW']],['Torsi maksimum',['360 Nm','670 Nm']],['Akselerasi 0–100 km/j',['5,9 detik','3,8 detik']],['Baterai','BYD Blade Battery (LFP)'],['Kapasitas baterai','82,56 kWh'],['Jarak tempuh (NEDC)',['650 km','580 km']],['Pengisian','AC Type 2 7 kW · DC CCS2 hingga 150 kW (30→80% ± 26 menit)'],['V2L','Ya']]},
   {t:'Dimensi & Kapasitas',rows:[['Panjang × Lebar × Tinggi','4.800 × 1.875 × 1.460 mm'],['Wheelbase','2.920 mm'],['Track depan / belakang','1.620 / 1.625 mm'],['Radius putar minimum','5,7 m'],['Bagasi','400 L + bagasi depan ± 50 L'],['Bobot kosong',['2.055 kg','2.185 kg']],['Kapasitas penumpang','5 orang']]},
   {t:'Sasis & Roda',rows:[['Suspensi depan','Double wishbone'],['Suspensi belakang','Multi-link'],['Rem depan','Cakram ventilated & drilled'],['Rem belakang','Cakram ventilated'],['Velg & ban','Alloy 19" · 235/45 R19']]},
   {t:'Eksterior',rows:[['Atap','Panoramic glass roof'],['Gagang pintu','Elektrik tersembunyi'],['Pintu bagasi','One-touch elektrik'],['Kaca','Double glazed (kaca depan & pintu depan)']],chips:['Spion elektrik lipat & heated','Wiper rain sensing','Defogger kaca belakang']},
   {t:'Interior & Kenyamanan',rows:[['Layar infotainment','15,6" putar'],['Panel instrumen','LCD 10,25"'],['Audio','Dynaudio Premium HiFi'],['Jok','Kulit asli'],['Jok pengemudi','8-way elektrik + lumbar 4-way + memori'],['Jok penumpang','6-way elektrik'],['Jok depan','Ventilated & heated']],chips:['Head-up display (W-HUD)','Ambient light','Armrest belakang + cup holder','Spion dalam anti silau otomatis']},
   {t:'Keselamatan & ADAS',rows:[['Kamera','360°'],['Sensor parkir','Depan 2 zona · belakang 4 zona'],['Child seat','ISOFIX']],chips:['Airbag depan, samping & tirai','Far-side airbag','Adaptive Cruise Control','Auto Emergency Braking','Blind Spot Detection','Door Open Warning','Rear Cross Traffic Alert/Brake','Lane Keeping Assist','Traffic Sign Recognition','Driver Attention Warning','iTAC (Performance)']}
  ]},
 {id:'sealion7',page:'sealion7',pdf:'product/sealion7/BROCHURE_SEALION7.pdf',n:'Sealion 7',type:'SUV',img:'sealion7.jpg',seat:5,tag:'SUV coupé listrik: mewah, bertenaga, dan jarak tempuh jauh.',
  v:[{n:'Premium',p:629,bat:82.56,r:567,kw:230,nm:380,acc:6.7},{n:'Performance AWD',p:719,bat:82.56,r:542,kw:390,nm:690,acc:4.5}],
  g:[
   {t:'Performa & Baterai',rows:[['Penggerak',['Roda belakang (RWD)','All-wheel drive (AWD)']],['Motor',['Permanent Magnet Synchronous Motor','Depan induksi 160 kW/310 Nm + belakang PMSM 230 kW/380 Nm']],['Daya maksimum',['230 kW','390 kW']],['Torsi maksimum',['380 Nm','690 Nm']],['Akselerasi 0–100 km/j',['6,7 detik','4,5 detik']],['Kecepatan maksimum',['–','215 km/j']],['Baterai','BYD Blade Battery (LFP)'],['Kapasitas baterai','82,56 kWh'],['Jarak tempuh (NEDC)',['567 km','542 km']],['Pengisian','AC Type 2 11 kW · DC CCS2 hingga 150 kW'],['V2L','Hingga 3,3 kW']]},
   {t:'Dimensi & Kapasitas',rows:[['Panjang × Lebar × Tinggi','4.830 × 1.925 × 1.620 mm'],['Wheelbase','2.930 mm'],['Track depan / belakang','1.660 / 1.660 mm'],['Radius putar minimum','5,85 m'],['Ground clearance',['157 mm','163 mm']],['Bagasi belakang','500 L (1.769 L jok dilipat)'],['Bagasi depan','58 L'],['Bobot kosong',['2.225 kg','2.340 kg']],['Kapasitas penumpang','5 orang']]},
   {t:'Sasis & Roda',rows:[['Suspensi depan','Double wishbone'],['Suspensi belakang','Multi-link + FSD shock absorber'],['Rem depan','Cakram ventilated & drilled'],['Rem belakang','Cakram ventilated'],['Kaliper rem',['Standar','Warna merah']],['Velg & ban',['19" · 235/50 R19 (D) / 255/45 R19 (B)','20" · 245/45 R20']]]},
   {t:'Eksterior',rows:[['Lampu depan','Dual U-LED floating'],['Atap','Panoramic glass roof + sunshade elektrik'],['Gagang pintu','Elektrik tersembunyi'],['Pintu bagasi','Elektrik hands-free (gestur kaki)'],['Kaca','Double glazed depan · privacy glass belakang']],chips:['Spion elektrik lipat & heated','Wiper rain sensing','Lampu belakang full-width']},
   {t:'Interior & Kenyamanan',rows:[['Layar infotainment','15,6" putar'],['Panel instrumen','LCD 10,25"'],['Head-up display','W-HUD'],['Audio','12 speaker Dynaudio'],['Wireless charger','50 W + ventilasi pendingin'],['Ambient light','128 warna, sinkron dengan audio'],['Jok','Kulit asli quilted'],['Jok pengemudi','8-way elektrik + lumbar + leg rest + memori'],['Jok penumpang','6-way elektrik'],['Jok depan','Ventilated']],chips:['Wireless Android Auto & Apple CarPlay','Voice control "Hi BYD"','Armrest belakang + cup holder']},
   {t:'Keselamatan & ADAS',rows:[['Kamera','360°'],['Sensor parkir','Depan 2 zona · belakang 4 zona'],['Child seat','ISOFIX']],chips:['Airbag depan, samping & tirai','Far-side airbag','Adaptive Cruise Control','Auto Emergency Braking','Forward Collision Warning','Blind Spot Detection','Lane Departure Warning','Lane Keeping','Traffic Sign Recognition','Driver Fatigue Monitoring','Rear Cross Traffic Brake','iTAC (Performance)']}
  ]}
];
