// The nine chaupais of Shri Ram Prashnavali (Ramshalaka) — texts, locations (स्थान),
// and results (फल) match the canonical Gita Press Ramcharitmanas edition.
// Grid ordering follows Gita Press: row 1 reads सु प्र उ बि हो मु ग ब सु — the first
// akshara of each chaupai 1 → 9 in grid order (position 5 holds होइहि, the "intro" chaupai
// that the Gita Press text marks with an asterisk to demonstrate the method).
// The grid is built so cell_index % 9 maps to the chaupai index — classical Ramshalaka algorithm.

const CHAUPAIS = [
  {
    id: 1,
    chaupai: "सुनु सिय सत्य असीस हमारी।\nपूजिहि मन कामना तुम्हारी॥",
    meaning_hi: "हे सीते, हमारा यह आशीर्वाद सत्य है — तुम्हारे मन की समस्त कामनाएँ अवश्य पूर्ण होंगी।",
    meaning_en: "O Sita, this blessing of ours is true — every desire of your heart shall surely be fulfilled.",
    reference: "श्रीरामचरितमानस · बालकाण्ड",
    context_hi: "यह चौपाई बालकाण्ड में श्रीसीताजी के गौरीपूजन के प्रसंग में है — गौरीजी ने श्रीसीताजी को यह आशीर्वाद दिया।",
    context_en: "Spoken in Balkand at the moment of Sita's worship of Gauri (Parvati), who blesses her before she meets Lord Ram.",
    inference_hi: "प्रश्नकर्ता का प्रश्न उत्तम है। कार्य सिद्ध होगा।",
    inference_en: "The question is auspicious. The matter shall be accomplished.",
    sentiment: "auspicious",
    sentiment_label_hi: "शुभ",
    sentiment_label_en: "Auspicious",
  },
  {
    id: 2,
    chaupai: "प्रबिसि नगर कीजे सब काजा।\nहृदयँ राखि कोसलपुर राजा॥",
    meaning_hi: "नगर में प्रवेश करके अपने समस्त कार्य पूर्ण करो — कोसलपुर के राजा श्रीराम को निरंतर हृदय में धारण करते हुए।",
    meaning_en: "Enter the city and accomplish all your tasks — keeping the King of Kosala, Shri Ram, ever in your heart.",
    reference: "श्रीरामचरितमानस · सुन्दरकाण्ड",
    context_hi: "यह चौपाई सुन्दरकाण्ड में हनुमान्‌जी के लंका में प्रवेश करने के समय की है।",
    context_en: "Spoken in Sundarkand at the moment Hanuman enters Lanka in search of Sita — a verse of focused, faith-driven action.",
    inference_hi: "भगवान्‌ का स्मरण करके कार्यारम्भ करें। सफलता मिलेगी।",
    inference_en: "Begin your endeavour with remembrance of the Lord. Success will follow.",
    sentiment: "auspicious",
    sentiment_label_hi: "सिद्धि",
    sentiment_label_en: "Success",
  },
  {
    id: 3,
    chaupai: "उघरहिं अंत न होइ निबाहू।\nकालनेमि जिमि रावन राहू॥",
    meaning_hi: "जो कपट से कार्य आरम्भ करते हैं, अन्त में उनका भेद खुल जाता है और निर्वाह नहीं होता — जैसे कालनेमि, रावण और राहु का हुआ।",
    meaning_en: "Deceit may run a course, but in the end it cannot be sustained — as it was with Kalanemi, Ravan, and Rahu, all of whom were exposed.",
    reference: "श्रीरामचरितमानस · बालकाण्ड",
    context_hi: "यह चौपाई बालकाण्ड के आरम्भ में सत्संग-वर्णन के प्रसंग में है।",
    context_en: "Found in Balkand in the section extolling the company of saints — warning that endeavours rooted in pretence cannot endure.",
    inference_hi: "इस कार्य में भलाई नहीं है। कार्य की सफलता में सन्देह है।",
    inference_en: "There is no good in this undertaking. Its success is doubtful — reconsider your intent.",
    sentiment: "inauspicious",
    sentiment_label_hi: "अशुभ",
    sentiment_label_en: "Unfavourable",
  },
  {
    id: 4,
    chaupai: "बिधि बस सुजन कुसंगत परहीं।\nफनि मनि सम निज गुन अनुसरहीं॥",
    meaning_hi: "विधि के वश से कभी सज्जन भी कुसंगति में पड़ जाते हैं, परन्तु वे सर्प के मस्तक की मणि के समान अपने गुणों का त्याग नहीं करते।",
    meaning_en: "By fate, even the virtuous sometimes fall into ill company — yet, like the jewel on a serpent's hood, they never abandon their own qualities.",
    reference: "श्रीरामचरितमानस · बालकाण्ड",
    context_hi: "यह चौपाई भी बालकाण्ड के आरम्भ में ही सत्संग-वर्णन के प्रसंग की है।",
    context_en: "Also found in Balkand's praise of saintly company — honouring steadfast virtue even under adverse circumstances.",
    inference_hi: "खोटे मनुष्यों का संग छोड़ दें। कार्य पूर्ण होने में सन्देह है।",
    inference_en: "Let go of low company. The matter's completion is in doubt.",
    sentiment: "mixed",
    sentiment_label_hi: "सन्देह",
    sentiment_label_en: "Doubtful",
  },
  {
    id: 5,
    chaupai: "होइहि सोइ जो राम रचि राखा।\nको करि तर्क बढ़ावै साखा॥",
    meaning_hi: "वही होगा जो श्रीराम ने रच रखा है — कौन तर्क करके इस विषय की शाखाओं को बढ़ाए?",
    meaning_en: "Only that shall come to pass which Ram has already ordained — who, then, by argument can multiply the branches of doubt?",
    reference: "श्रीरामचरितमानस · बालकाण्ड",
    context_hi: "यह चौपाई बालकाण्डान्तर्गत शिव और पार्वती के संवाद में है। प्रश्नकर्ता को इस उत्तरस्वरूप चौपाई से यह आशय निकालना चाहिये कि कार्य होने में सन्देह है, अत: उसे भगवान्‌ पर छोड़ देना श्रेयस्कर है।",
    context_en: "From Balkand, in the dialogue between Shiva and Parvati. The seeker should infer that the outcome is uncertain — it is better to leave the matter to the Lord.",
    inference_hi: "फल ईश्वर के अधीन है। कार्य होने में सन्देह है — उसे भगवान्‌ पर छोड़ देना श्रेयस्कर है।",
    inference_en: "The outcome rests with the divine. There is doubt about its completion — it is best to leave the matter in the Lord's hands.",
    sentiment: "neutral",
    sentiment_label_hi: "समर्पण",
    sentiment_label_en: "Surrender",
  },
  {
    id: 6,
    chaupai: "मुद मंगलमय संत समाजू।\nजो जग जंगम तीरथराजू॥",
    meaning_hi: "संतों का समाज आनन्द और मंगल से परिपूर्ण है — जो इस संसार में चलता-फिरता तीर्थराज प्रयाग के समान है।",
    meaning_en: "The assembly of saints is full of joy and auspiciousness — it is, in this world, the moving Tirthraj, the king of pilgrimages.",
    reference: "श्रीरामचरितमानस · बालकाण्ड",
    context_hi: "यह चौपाई बालकाण्ड में संत-समाजरूपी तीर्थ के वर्णन में है।",
    context_en: "From Balkand's description of the saintly assembly as a living place of pilgrimage.",
    inference_hi: "प्रश्न उत्तम है। कार्य सिद्ध होगा।",
    inference_en: "The question is auspicious. The matter shall be accomplished.",
    sentiment: "auspicious",
    sentiment_label_hi: "मंगल",
    sentiment_label_en: "Blessed",
  },
  {
    id: 7,
    chaupai: "गरल सुधा रिपु करहिं मिताई।\nगोपद सिंधु अनल सितलाई॥",
    meaning_hi: "(संत-कृपा से) विष अमृत बन जाता है, शत्रु मित्रता करने लगते हैं, समुद्र गोपद के समान छोटा हो जाता है और अग्नि शीतल हो जाती है।",
    meaning_en: "By the grace of the saints poison turns to nectar, enemies make friends, the ocean shrinks to a cow's hoof-print, and fire itself grows cool.",
    reference: "श्रीरामचरितमानस · सुन्दरकाण्ड",
    context_hi: "यह चौपाई श्रीहनुमान्‌जी के लंका में प्रवेश करने के समय की है।",
    context_en: "Found in Sundarkand at the time of Hanuman's entry into Lanka — when the impossible becomes possible by grace.",
    inference_hi: "प्रश्न बहुत श्रेष्ठ है। कार्य सफल होगा।",
    inference_en: "An excellent question. The matter shall succeed.",
    sentiment: "auspicious",
    sentiment_label_hi: "अनुग्रह",
    sentiment_label_en: "Grace",
  },
  {
    id: 8,
    chaupai: "बरुन कुबेर सुरेस समीरा।\nरन सन्मुख धरि काहूँ न धीरा॥",
    meaning_hi: "वरुण, कुबेर, इन्द्र और वायु — कोई भी देवता उसके सम्मुख रणभूमि में धैर्य नहीं रख सका।",
    meaning_en: "Varuna, Kubera, Indra, Vayu — not one of the great gods could hold their ground before him on the battlefield.",
    reference: "श्रीरामचरितमानस · लंकाकाण्ड",
    context_hi: "यह चौपाई लंकाकाण्ड में रावण की मृत्यु के पश्चात्‌ मन्दोदरी के विलाप के प्रसंग में है।",
    context_en: "From Lankakand, during Mandodari's lament after Ravan's death — a recollection of the fearsome power he once held.",
    inference_hi: "कार्य पूर्ण होने में सन्देह है। सावधानी आवश्यक है।",
    inference_en: "The matter's completion is in doubt. Caution is needed.",
    sentiment: "caution",
    sentiment_label_hi: "सावधानी",
    sentiment_label_en: "Caution",
  },
  {
    id: 9,
    chaupai: "सुफल मनोरथ होहुँ तुम्हारे।\nरामु लखनु सुनि भए सुखारे॥",
    meaning_hi: "तुम्हारे सब मनोरथ सफल हों — यह आशीर्वाद सुनकर श्रीराम और लक्ष्मण अत्यन्त प्रसन्न हुए।",
    meaning_en: "May all your wishes bear sweet fruit — hearing this blessing, Ram and Lakshman were filled with joy.",
    reference: "श्रीरामचरितमानस · बालकाण्ड",
    context_hi: "यह चौपाई बालकाण्ड में पुष्पवाटिका से पुष्प लाने पर विश्वामित्र‌जी का आशीर्वाद है।",
    context_en: "From Balkand — Vishwamitra's blessing to Ram and Lakshman after their visit to the flower-garden (Pushpvatika).",
    inference_hi: "प्रश्न बहुत उत्तम है। कार्य सिद्ध होगा।",
    inference_en: "A most auspicious question. The matter shall be accomplished.",
    sentiment: "auspicious",
    sentiment_label_hi: "मनोरथ सिद्धि",
    sentiment_label_en: "Wish fulfilled",
  },
];

// The 225 cells of the Gita Press Ramshalaka grid, transcribed row by row from the
// Gita Press Ramcharitmanas e-book. cell_index % 9 maps to the chaupai index; reading
// every 9th cell yields that chaupai's 25 aksharas (Gita Press uses matra-splitting —
// e.g. हमारी → ह|म|ा|री — to reach 25 aksharas per chaupai).
const GRID_LETTERS = [
  // Row 1 (cells 0-14)
  "सु", "प्र", "उ", "बि", "हो", "मु", "ग", "ब", "सु", "नु", "बि", "घ", "धि", "इ", "द",
  // Row 2 (15-29)
  "र", "रु", "फ", "सि", "सि", "रहिं", "बस", "हि", "मं", "ल", "न", "ल", "य", "न", "अं",
  // Row 3 (30-44)
  "सुज", "सो", "ग", "सु", "कु", "म", "स", "ग", "त", "न", "इ", "ल", "धा", "बे", "नो",
  // Row 4 (45-59)
  "त्य", "र", "न", "कु", "जो", "म", "रि", "र", "र", "अ", "की", "हो", "सं", "रा", "य",
  // Row 5 (60-74)
  "पु", "सु", "थ", "सी", "जे", "इ", "ग", "म", "सं", "क", "रे", "हो", "स", "स", "नि",
  // Row 6 (75-89)
  "त", "र", "त", "र", "स", "हुँ", "ह", "ब", "ब", "प", "चि", "स", "हिं", "स", "तु",
  // Row 7 (90-104)
  "म", "का", "ा", "र", "र", "म", "मि", "मी", "म्हा", "ा", "जा", "हू", "हीं", "ा", "ा",
  // Row 8 (105-119)
  "ता", "रा", "रे", "री", "ह", "का", "फ", "खा", "जू", "ई", "र", "रा", "पू", "द", "ल",
  // Row 9 (120-134)
  "नि", "को", "जो", "गो", "न", "मु", "जि", "यँ", "ने", "मनि", "क", "ज", "प", "स", "ल",
  // Row 10 (135-149)
  "हि", "रा", "मि", "स", "रिं", "ग", "द", "न्मु", "ख", "म", "खि", "जि", "म", "त", "जं",
  // Row 11 (150-164)
  "सिं", "ख", "नु", "न", "को", "मि", "निज", "क", "ग", "धु", "ध", "सु", "का", "स", "र",
  // Row 12 (165-179)
  "गु", "ब", "म", "अ", "रि", "नि", "म", "ल", "ा", "न", "ढ़", "ती", "न", "क", "भ",
  // Row 13 (180-194)
  "ना", "पु", "व", "अ", "ा", "र", "ल", "ा", "ए", "तु", "र", "न", "नु", "वै", "थ",
  // Row 14 (195-209)
  "सि", "हुँ", "सु", "म्ह", "रा", "र", "स", "र", "त", "न", "ख", "ा", "ज", "ा", "र",
  // Row 15 (210-224)
  "र", "रा", "ा", "ला", "धी", "ा", "री", "ा", "हू", "हीं", "खा", "जू", "ई", "रा", "रे",
];

function buildGridLetters() {
  return GRID_LETTERS;
}
