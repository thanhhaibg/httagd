/**
 * DỮ LIỆU CHƯƠNG TRÌNH HỌC TẬP (LỚP 5 & LỚP 7)
 * ---------------------------------------------------
 * Bạn có thể dễ dàng thêm bài học mới bằng cách copy một object bài học
 * trong mảng `LESSONS` bên dưới và chỉnh sửa nội dung.
 *
 * Các môn học hiện có:
 * - "math": Toán
 * - "van": Văn / Tiếng Việt
 * - "eng": Tiếng Anh
 * - "chem": Hóa học / Khoa học (Nền tảng Hóa)
 */

window.CURRICULUM = {
  subjects: [
    { id: "all", name: "Tất cả môn", icon: "📚" },
    { id: "math", name: "Toán học", icon: "📐" },
    { id: "van", name: "Văn / Tiếng Việt", icon: "✍️" },
    { id: "eng", name: "Tiếng Anh", icon: "🌍" },
    { id: "chem", name: "Hóa học", icon: "⚗️" }
  ],

  gradeInfo: {
    "5": {
      badge: "Chương trình Lớp 5 🌸",
      title: "Góc học tập của Em (Lớp 5)",
      desc: "Học qua hình ảnh sinh động, ví dụ gần gũi và làm trắc nghiệm vui mỗi ngày."
    },
    "7": {
      badge: "Chương trình Lớp 7 🚀",
      title: "Góc học tập của Chị (Lớp 7)",
      desc: "Nắm chắc kiến thức nền tảng Toán, Ngữ Văn, Tiếng Anh và Hóa học (KHTN 7) để bứt phá."
    }
  },

  lessons: [
    // =========================================================
    // LỚP 5 - TOÁN
    // =========================================================
    {
      id: "g5-math-1",
      grade: "5",
      subject: "math",
      title: "Phân số, Hỗn số & Quy đồng mẫu số",
      summary: "Hiểu bản chất phân số qua hình ảnh chia bánh và cách đổi hỗn số cực nhanh.",
      duration: "15 phút",
      sections: [
        {
          icon: "🍕",
          heading: "1. Hiểu phân số bằng hình ảnh",
          text: "Phân số biểu diễn một phần của cái bánh được chia đều. Tử số (ở trên) là số phần lấy đi, Mẫu số (ở dưới) là tổng số phần bằng nhau.",
          fractionBar: {
            label: "Ví dụ minh họa phân số 3/4 (tô màu 3 phần trong 4 phần bằng nhau):",
            filled: 3,
            total: 4
          }
        },
        {
          icon: "🔢",
          heading: "2. Hỗn số là gì?",
          text: "Hỗn số gồm 2 phần: Phần nguyên + Phần phân số (luôn nhỏ hơn 1).",
          formula: "Hỗn số  a b/c  =  (a × c + b) / c",
          grid: [
            { title: "Ví dụ: 2 1/3", detail: "Có 2 cái bánh nguyên và 1/3 cái bánh nữa." },
            { title: "Đổi ra phân số", detail: "(2 × 3 + 1) / 3 = 7/3" }
          ]
        },
        {
          icon: "💡",
          heading: "Mẹo nhớ nhanh khi cộng trừ phân số",
          tip: "Muốn cộng hoặc trừ hai phân số khác mẫu, bước bắt buộc đầu tiên là QUY ĐỒNG MẪU SỐ cho giống nhau rồi mới cộng/trừ tử số (giữ nguyên mẫu số)."
        }
      ],
      parentGuide: {
        goal: "Giúp con không học vẹt công thức mà hình dung được phân số là 'chia đều đồ vật thật'.",
        steps: [
          "Lấy 1 tờ giấy hoặc 1 quả cam, cắt làm 4 phần bằng nhau để con tự tay cầm 3 phần và gọi tên '3/4'.",
          "Khi dạy đổi hỗn số sang phân số, giải thích: '2 cái bánh nguyên, mỗi cái cắt làm 3 miếng thì được 6 miếng, cộng thêm 1 miếng lẻ là 7/3'."
        ],
        mistakes: [
          "Con hay cộng cả tử với tử VÀ mẫu với mẫu (ví dụ: 1/2 + 1/3 = 2/5 là SAI).",
          "Quên rút gọn phân số kết quả cuối cùng."
        ],
        realLife: "Khi ăn pizza hoặc cắt bánh chưng, hãy hỏi con: 'Cả nhà ăn hết 5/8 cái bánh thì còn lại mấy phần?'"
      },
      quiz: [
        {
          question: "Một chiếc bánh chia làm 8 phần bằng nhau, em ăn 3 phần. Phân số chỉ số phần bánh CÒN LẠI là:",
          options: ["3/8", "5/8", "8/5", "3/5"],
          correctIndex: 1,
          explanation: "Cả chiếc bánh là 8/8. Đã ăn 3/8 thì còn lại: 8/8 - 3/8 = 5/8 chiếc bánh."
        },
        {
          question: "Đổi hỗn số 3 2/5 thành phân số ta được:",
          options: ["17/5", "10/5", "13/5", "11/5"],
          correctIndex: 0,
          explanation: "Ta lấy phần nguyên nhân mẫu rồi cộng tử: (3 × 5 + 2) / 5 = 17/5."
        },
        {
          question: "Kết quả của phép tính 1/2 + 1/4 là:",
          options: ["2/6", "1/6", "3/4", "2/4"],
          correctIndex: 2,
          explanation: "Quy đồng 1/2 = 2/4. Sau đó cộng: 2/4 + 1/4 = 3/4."
        },
        {
          question: "Trong các phân số sau, phân số nào lớn hơn 1?",
          options: ["4/5", "7/7", "9/8", "1/2"],
          correctIndex: 2,
          explanation: "Phân số có tử số lớn hơn mẫu số thì lớn hơn 1. Vì 9 > 8 nên 9/8 > 1."
        }
      ]
    },
    {
      id: "g5-math-2",
      grade: "5",
      subject: "math",
      title: "Tỉ số phần trăm (%) trong đời sống",
      summary: "Cách tính phần trăm khi đi siêu thị giảm giá và giải toán có lời văn.",
      duration: "15 phút",
      sections: [
        {
          icon: "💯",
          heading: "1. Tỉ số phần trăm nghĩa là gì?",
          text: "Ký hiệu % đọc là 'phần trăm', nghĩa là chia một thứ ra làm 100 phần bằng nhau. Ví dụ 50% tức là 50/100 = 1/2 (một nửa).",
          fractionBar: {
            label: "Minh họa 50% (một nửa thanh):",
            filled: 5,
            total: 10
          }
        },
        {
          icon: "🧮",
          heading: "2. Ba dạng toán phần trăm hay gặp",
          grid: [
            { title: "Tìm tỉ số % của A và B", detail: "Lấy A : B rồi nhân 100, viết thêm %." },
            { title: "Tìm m% của số A", detail: "Lấy A × m : 100." },
            { title: "Tìm số biết m% là B", detail: "Lấy B × 100 : m." }
          ]
        },
        {
          icon: "🛍️",
          heading: "Ví dụ thực tế",
          tip: "Một chiếc ba lô giá 200.000đ được giảm giá 20%. Số tiền được giảm là: 200.000 × 20 : 100 = 40.000đ. Giá phải trả: 160.000đ."
        }
      ],
      parentGuide: {
        goal: "Giúp con phân biệt rõ khi nào nhân, khi nào chia 100 thông qua tình huống mua sắm.",
        steps: [
          "Cho con xem các bảng giảm giá 10%, 20%, 50% khi đi siêu thị hoặc xem trên web.",
          "Luôn nhắc con quy về '1% là bao nhiêu' trước khi nhân lên nếu con hay quên công thức."
        ],
        mistakes: [
          "Nhầm lẫn giữa số tiền ĐƯỢC GIẢM và số tiền PHẢI TRẢ sau khi giảm.",
          "Quên viết ký hiệu % ở đáp số dạng 1."
        ],
        realLife: "Hỏi con: 'Pin điện thoại của bố còn 25%, nghĩa là đã dùng hết bao nhiêu phần trăm?'"
      },
      quiz: [
        {
          question: "Lớp 5A có 40 học sinh, trong đó có 24 học sinh nữ. Tỉ số phần trăm học sinh nữ là:",
          options: ["40%", "50%", "60%", "24%"],
          correctIndex: 2,
          explanation: "Ta tính: 24 : 40 = 0,6 = 60%."
        },
        {
          question: "Tìm 25% của 80kg:",
          options: ["20kg", "25kg", "40kg", "16kg"],
          correctIndex: 0,
          explanation: "80 × 25 : 100 = 20kg (hoặc nhớ nhanh 25% là 1/4 của 80 = 20kg)."
        },
        {
          question: "Một quyển truyện giá 50.000đ được giảm 10%. Hỏi mua quyển truyện đó hết bao nhiêu tiền?",
          options: ["5.000đ", "40.000đ", "45.000đ", "55.000đ"],
          correctIndex: 2,
          explanation: "Tiền giảm: 50.000 × 10 : 100 = 5.000đ. Giá mua: 50.000 - 5.000 = 45.000đ."
        },
        {
          question: "Biết 30% của một số là 15. Số đó là:",
          options: ["45", "50", "4,5", "30"],
          correctIndex: 1,
          explanation: "Số đó là: 15 × 100 : 30 = 50."
        }
      ]
    },
    {
      id: "g5-math-3",
      grade: "5",
      subject: "math",
      title: "Hình học: Hình thang & Hình tròn",
      summary: "Nhận diện đáy lớn, đáy nhỏ, chiều cao hình thang và tính chu vi, diện tích hình tròn qua hình vẽ.",
      duration: "15 phút",
      sections: [
        {
          icon: "📐",
          heading: "1. Diện tích Hình thang",
          text: "Hình thang có 1 cặp cạnh đối diện song song gọi là đáy lớn (a) và đáy nhỏ (b). Chiều cao (h) là đoạn vuông góc nối hai đáy.",
          diagram: {
            caption: "Hình thang với đáy nhỏ b, đáy lớn a và chiều cao h vuông góc",
            svg: `<svg viewBox="0 0 320 150" width="300" xmlns="http://www.w3.org/2000/svg">
              <polygon points="80,30 220,30 275,120 35,120" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/>
              <line x1="80" y1="30" x2="80" y2="120" stroke="#e11d48" stroke-width="2" stroke-dasharray="5,4"/>
              <rect x="80" y="108" width="12" height="12" fill="none" stroke="#e11d48" stroke-width="1.5"/>
              <text x="145" y="22" font-size="14" font-weight="700" fill="#1e40af">b (đáy nhỏ)</text>
              <text x="140" y="140" font-size="14" font-weight="700" fill="#1e40af">a (đáy lớn)</text>
              <text x="88" y="80" font-size="14" font-weight="700" fill="#e11d48">h</text>
            </svg>`
          },
          formula: "S = (a + b) × h : 2   (Tổng độ dài hai đáy nhân chiều cao rồi chia 2)"
        },
        {
          icon: "⭕",
          heading: "2. Chu vi & Diện tích Hình tròn",
          text: "Bán kính (r) nối từ tâm O ra mép đường tròn. Đường kính (d) đi qua tâm và gấp đôi bán kính (d = 2 × r). Số Pi (π) lấy xấp xỉ 3,14.",
          diagram: {
            caption: "Hình tròn tâm O, bán kính r và đường kính d = 2 × r",
            svg: `<svg viewBox="0 0 260 160" width="240" xmlns="http://www.w3.org/2000/svg">
              <circle cx="130" cy="80" r="62" fill="#f5f3ff" stroke="#7c3aed" stroke-width="2.5"/>
              <line x1="68" y1="80" x2="192" y2="80" stroke="#2563eb" stroke-width="2"/>
              <line x1="130" y1="80" x2="174" y2="36" stroke="#e11d48" stroke-width="2.2"/>
              <circle cx="130" cy="80" r="4" fill="#1e293b"/>
              <text x="124" y="98" font-size="13" font-weight="700" fill="#1e293b">O</text>
              <text x="155" y="54" font-size="13" font-weight="700" fill="#e11d48">r</text>
              <text x="90" y="73" font-size="13" font-weight="700" fill="#2563eb">d = 2 × r</text>
            </svg>`
          },
          formula: "Chu vi: C = d × 3,14 = r × 2 × 3,14   |   Diện tích: S = r × r × 3,14",
          workedExample: {
            title: "Ví dụ giải chi tiết: Tính diện tích hình tròn có đường kính d = 10 cm",
            steps: [
              "Bước 1: Tìm bán kính r = d : 2 = 10 : 2 = 5 (cm).",
              "Bước 2: Áp dụng công thức S = r × r × 3,14 = 5 × 5 × 3,14 = 78,5 (cm²)."
            ]
          }
        }
      ],
      parentGuide: {
        goal: "Giúp con không bị nhầm lẫn giữa bán kính (r) và đường kính (d) khi tính diện tích hình tròn.",
        steps: [
          "Cho con dùng compa hoặc úp ngược cái bát để vẽ hình tròn, đánh dấu tâm O và đo đoạn từ tâm ra mép (bán kính).",
          "Nhắc con mẹo: Đề bài cho đường kính d mà muốn tính DIỆN TÍCH thì bước 1 luôn phải chia 2 để tìm bán kính r."
        ],
        mistakes: [
          "Lấy đường kính nhân đường kính rồi nhân 3,14 (quên chia 2 tìm bán kính).",
          "Quên chia 2 trong công thức diện tích hình thang."
        ],
        realLife: "Đo thử đường kính chiếc đĩa ăn cơm hoặc bánh xe đạp của con rồi cùng tính chu vi (quãng đường lăn được 1 vòng)."
      },
      quiz: [
        {
          question: "Một hình thang có đáy lớn 12 cm, đáy nhỏ 8 cm, chiều cao 5 cm. Diện tích hình thang là:",
          options: ["100 cm²", "50 cm²", "40 cm²", "25 cm²"],
          correctIndex: 1,
          explanation: "S = (12 + 8) × 5 : 2 = 20 × 5 : 2 = 50 cm²."
        },
        {
          question: "Hình tròn có bán kính r = 4 cm. Chu vi của hình tròn đó là:",
          options: ["12,56 cm", "25,12 cm", "50,24 cm", "16 cm"],
          correctIndex: 1,
          explanation: "Chu vi C = r × 2 × 3,14 = 4 × 2 × 3,14 = 25,12 cm."
        },
        {
          question: "Hình tròn có đường kính d = 6 cm. Diện tích của hình tròn là:",
          options: ["113,04 cm²", "18,84 cm²", "28,26 cm²", "9,42 cm²"],
          correctIndex: 2,
          explanation: "Bán kính r = 6 : 2 = 3 cm. Diện tích S = 3 × 3 × 3,14 = 28,26 cm²."
        },
        {
          question: "Nếu bán kính hình tròn tăng gấp đôi thì diện tích hình tròn tăng gấp mấy lần?",
          options: ["2 lần", "3 lần", "4 lần", "8 lần"],
          correctIndex: 2,
          explanation: "Vì S = r × r × 3,14 nên khi r tăng 2 lần thì r × r tăng 2 × 2 = 4 lần."
        }
      ]
    },

    // =========================================================
    // LỚP 5 - TIẾNG VIỆT / VĂN
    // =========================================================
    {
      id: "g5-van-1",
      grade: "5",
      subject: "van",
      title: "Từ đồng nghĩa & Từ trái nghĩa",
      summary: "Mở rộng vốn từ phong phú giúp con viết văn hay và miêu tả sinh động hơn.",
      duration: "12 phút",
      sections: [
        {
          icon: "🤝",
          heading: "1. Từ đồng nghĩa",
          text: "Là những từ có nghĩa giống nhau hoặc gần giống nhau.",
          grid: [
            { title: "Đồng nghĩa hoàn toàn", detail: "Thay thế được cho nhau: ba - bố - cha; quả - trái; heo - lợn." },
            { title: "Đồng nghĩa không hoàn toàn", detail: "Khác sắc thái: ăn - xơi - chén; chết - hi sinh - qua đời." }
          ]
        },
        {
          icon: "⚖️",
          heading: "2. Từ trái nghĩa",
          text: "Là những từ có nghĩa trái ngược nhau, thường dùng để làm nổi bật sự vật trong câu văn.",
          bullets: [
            "Ví dụ: cao ↔ thấp, chăm chỉ ↔ lười biếng, đoàn kết ↔ chia rẽ.",
            "Thành ngữ hay dùng từ trái nghĩa: 'Lá lành đùm lá rách', 'Gần mực thì đen, gần đèn thì sáng'."
          ]
        },
        {
          icon: "✨",
          heading: "Bí quyết dùng từ khi viết văn",
          tip: "Khi tả cảnh hay tả người, tránh lặp lại một từ nhiều lần (ví dụ lặp từ 'đẹp'). Hãy thay bằng: xinh xắn, rực rỡ, lộng lẫy, lung linh!"
        }
      ],
      parentGuide: {
        goal: "Biến việc học từ vựng thành trò chơi nối từ vui nhộn thay vì học thuộc lòng.",
        steps: [
          "Chơi trò 'Đố nhanh': Bố nói 'to lớn', con tìm 3 từ đồng nghĩa (khổng lồ, vĩ đại, đồ sộ) và 2 từ trái nghĩa (bé nhỏ, tí hon).",
          "Nhắc con chú ý ngữ cảnh: Không dùng từ 'hi sinh' cho con vật, không dùng từ 'chén' khi nói với ông bà."
        ],
        mistakes: [
          "Nhầm lẫn từ đồng nghĩa với từ đồng âm (ví dụ: đường đi và đường ăn)."
        ],
        realLife: "Khi đọc truyện cùng con, dừng lại ở một câu hay và hỏi: 'Nếu thay từ này bằng từ khác cùng nghĩa thì có hay hơn không?'"
      },
      quiz: [
        {
          question: "Nhóm từ nào dưới đây gồm toàn các từ ĐỒNG NGHĨA với từ 'chăm chỉ'?",
          options: [
            "siêng năng, cần cù, chịu khó",
            "siêng năng, lười biếng, cần cù",
            "thông minh, nhanh nhẹn, hoạt bát",
            "hiền lành, thật thà, chịu khó"
          ],
          correctIndex: 0,
          explanation: "'Siêng năng, cần cù, chịu khó' đều chỉ thái độ làm việc, học tập tích cực giống 'chăm chỉ'."
        },
        {
          question: "Cặp từ trái nghĩa trong câu tục ngữ 'Lá lành đùm lá rách' là:",
          options: ["lá - đùm", "lành - rách", "lá lành - đùm", "đùm - rách"],
          correctIndex: 1,
          explanation: "'Lành' (nguyên vẹn) trái nghĩa với 'rách' (hư hỏng, thiếu thốn)."
        },
        {
          question: "Từ nào thích hợp nhất để thay cho từ 'ăn' khi mời người lớn tuổi một cách trang trọng?",
          options: ["chén", "nhai", "xơi / dùng bữa", "nuốt"],
          correctIndex: 2,
          explanation: "'Xơi' hoặc 'dùng bữa' thể hiện sắc thái kính trọng, lễ phép với người lớn."
        },
        {
          question: "Tìm từ trái nghĩa với từ 'dũng cảm':",
          options: ["gan dạ", "anh hùng", "hèn nhát", "kiên cường"],
          correctIndex: 2,
          explanation: "'Hèn nhát' trái nghĩa với 'dũng cảm'; các từ còn lại là từ đồng nghĩa."
        }
      ]
    },
    {
      id: "g5-van-2",
      grade: "5",
      subject: "van",
      title: "Câu ghép & Cách nối bằng quan hệ từ",
      summary: "Phân biệt câu đơn, câu ghép và cách dùng cặp quan hệ từ (Vì... nên..., Tuy... nhưng...).",
      duration: "15 phút",
      sections: [
        {
          icon: "🧩",
          heading: "1. Câu ghép là gì?",
          text: "Câu đơn chỉ có 1 cụm Chủ ngữ - Vị ngữ. Câu ghép có từ 2 cụm Chủ ngữ - Vị ngữ trở lên, ghép lại với nhau để diễn đạt ý trọn vẹn.",
          formula: "Câu ghép = [Chủ ngữ 1 - Vị ngữ 1] + (Quan hệ từ) + [Chủ ngữ 2 - Vị ngữ 2]"
        },
        {
          icon: "🔗",
          heading: "2. Các cặp quan hệ từ thường gặp",
          grid: [
            { title: "Nguyên nhân - Kết quả", detail: "Vì... nên... / Do... nên... / Nhờ... mà..." },
            { title: "Tương phản", detail: "Tuy... nhưng... / Mặc dù... nhưng..." },
            { title: "Điều kiện - Kết quả", detail: "Nếu... thì... / Giá như... thì..." },
            { title: "Tăng tiến", detail: "Không những... mà còn... / Chẳng những... mà..." }
          ]
        }
      ],
      parentGuide: {
        goal: "Giúp con nhận diện đúng Chủ ngữ - Vị ngữ của từng vế để không nhầm câu đơn có nhiều bộ phận với câu ghép.",
        steps: [
          "Dùng bút 2 màu: gạch 1 gạch dưới Chủ ngữ, 2 gạch dưới Vị ngữ. Nếu đếm được từ 2 cặp Chủ-Vị không bao chứa nhau thì đó là câu ghép.",
          "Cho con tập đặt câu nói về bản thân bằng cặp 'Tuy... nhưng...' và 'Vì... nên...'."
        ],
        mistakes: [
          "Thấy câu dài có dấu phẩy là tưởng câu ghép (ví dụ: 'Sáng nay, em đi học' vẫn là câu đơn vì chỉ có 1 cụm C-V 'em / đi học')."
        ],
        realLife: "Nhờ con giải thích một việc bằng câu có 'Vì... nên...': 'Vì trời mưa to nên đường bị ngập'."
      },
      quiz: [
        {
          question: "Câu nào dưới đây là CÂU GHÉP?",
          options: [
            "Buổi sáng, mặt trời mọc ở đằng đông.",
            "Em rất thích đọc sách và vẽ tranh.",
            "Trời mưa to nên đường phố rất trơn.",
            "Những chú chim hót líu lo trên cành cây cao."
          ],
          correctIndex: 2,
          explanation: "Câu có 2 cụm C-V: [Trời / mưa to] và [đường phố / rất trơn], nối với nhau bằng quan hệ từ 'nên'."
        },
        {
          question: "Điền cặp quan hệ từ phù hợp: '...... nhà xa ...... bạn Lan luôn đi học đúng giờ.'",
          options: ["Vì ... nên ...", "Nếu ... thì ...", "Tuy ... nhưng ...", "Nhờ ... mà ..."],
          correctIndex: 2,
          explanation: "Hai vế câu mang ý nghĩa tương phản nhau nên dùng 'Tuy ... nhưng ...'."
        },
        {
          question: "Cặp quan hệ từ 'Không những... mà còn...' biểu thị quan hệ gì?",
          options: ["Nguyên nhân - Kết quả", "Tăng tiến", "Giả thiết - Kết quả", "Tương phản"],
          correctIndex: 1,
          explanation: "'Không những... mà còn...' dùng để nhấn mạnh ý sau tăng tiến hơn ý trước."
        },
        {
          question: "Trong câu 'Nếu em chăm chỉ ôn bài thì kết quả sẽ rất tốt', vế câu chỉ điều kiện là:",
          options: ["em chăm chỉ ôn bài", "kết quả sẽ rất tốt", "chăm chỉ ôn bài", "rất tốt"],
          correctIndex: 0,
          explanation: "Vế đi sau từ 'Nếu' là vế nêu điều kiện: 'em chăm chỉ ôn bài'."
        }
      ]
    },

    // =========================================================
    // LỚP 5 - TIẾNG ANH
    // =========================================================
    {
      id: "g5-eng-1",
      grade: "5",
      subject: "eng",
      title: "Thì Hiện tại đơn & Quá khứ đơn (Cơ bản)",
      summary: "Phân biệt thói quen hàng ngày (Present Simple) và việc đã xảy ra (Past Simple) kèm phát âm chuẩn.",
      duration: "15 phút",
      sections: [
        {
          icon: "⏰",
          heading: "1. So sánh 2 thì quan trọng nhất",
          grid: [
            { title: "Hiện tại đơn (Thói quen)", detail: "Dùng với: every day, always, usually. Chủ ngữ He/She/It thêm -s/-es vào động từ." },
            { title: "Quá khứ đơn (Đã qua rồi)", detail: "Dùng với: yesterday, last week, ago. Động từ thêm -ed hoặc dạng cột 2 (went, ate, saw)." }
          ]
        },
        {
          icon: "🔊",
          heading: "2. Luyện nghe & đọc mẫu câu",
          vocab: [
            { word: "I go to school every day.", meaning: "Em đi học mỗi ngày. (Hiện tại đơn)" },
            { word: "She watches TV after dinner.", meaning: "Cô ấy xem TV sau bữa tối. (She + watches)" },
            { word: "Yesterday, we visited our grandparents.", meaning: "Hôm qua chúng em đã thăm ông bà. (Quá khứ đơn)" },
            { word: "I went to the zoo last Sunday.", meaning: "Chủ nhật trước em đã đi sở thú. (go → went)" }
          ]
        }
      ],
      parentGuide: {
        goal: "Giúp con nhận ra 'từ khóa thời gian' (every day vs yesterday) trước khi chia động từ.",
        steps: [
          "Bấm nút 'Nghe' cùng con và cho con đọc to theo 3 lần để quen phản xạ.",
          "Khi làm bài, hỏi con: 'Câu này nói về chuyện hôm nay/hàng ngày hay chuyện đã qua rồi?'"
        ],
        mistakes: [
          "Quên thêm -s/-es sau He/She/It ở thì Hiện tại đơn.",
          "Dùng 'went' nhưng vẫn giữ 'did' trong câu phủ định (đúng phải là: didn't go)."
        ],
        realLife: "Mỗi tối trước khi đi ngủ, hỏi con 1 câu tiếng Anh: 'What did you do today?' để con tập kể bằng quá khứ đơn."
      },
      quiz: [
        {
          question: "She ______ to school by bike every morning.",
          options: ["go", "goes", "went", "going"],
          correctIndex: 1,
          explanation: "Có 'every morning' (Hiện tại đơn) và chủ ngữ là 'She' nên động từ 'go' thêm 'es' thành 'goes'."
        },
        {
          question: "Yesterday, my family ______ a delicious dinner together.",
          options: ["have", "has", "had", "having"],
          correctIndex: 2,
          explanation: "Có 'Yesterday' (Quá khứ đơn) nên 'have' chuyển sang dạng quá khứ là 'had'."
        },
        {
          question: "______ you visit Ha Long Bay last summer?",
          options: ["Do", "Does", "Did", "Are"],
          correctIndex: 2,
          explanation: "'Last summer' là quá khứ đơn, câu hỏi với động từ thường 'visit' dùng trợ động từ 'Did'."
        },
        {
          question: "Chọn câu viết ĐÚNG ngữ pháp:",
          options: [
            "He didn't went to the park.",
            "He didn't go to the park.",
            "He don't go to the park.",
            "He doesn't goes to the park."
          ],
          correctIndex: 1,
          explanation: "Sau 'didn't' hoặc 'doesn't', động từ luôn phải ở dạng nguyên mẫu ('go')."
        }
      ]
    },
    {
      id: "g5-eng-2",
      grade: "5",
      subject: "eng",
      title: "Giới từ IN - ON - AT cực dễ nhớ",
      summary: "Quy tắc Kim tự tháp giúp không bao giờ nhầm lẫn in, on, at khi chỉ thời gian và địa điểm.",
      duration: "10 phút",
      sections: [
        {
          icon: "🔺",
          heading: "1. Quy tắc từ LỚN đến NHỎ (Kim tự tháp)",
          grid: [
            { title: "IN (Lớn / Rộng)", detail: "Năm (in 2026), Tháng (in May), Mùa (in summer), Buổi (in the morning), Thành phố (in Hanoi)." },
            { title: "ON (Vừa / Cụ thể ngày)", detail: "Thứ (on Monday), Ngày tháng (on May 1st), Bề mặt (on the table)." },
            { title: "AT (Rất nhỏ / Chính xác)", detail: "Giờ cụ thể (at 7 o'clock), Địa điểm nhỏ (at home, at school, at night)." }
          ]
        },
        {
          icon: "🔊",
          heading: "2. Luyện đọc cụm từ hay gặp",
          vocab: [
            { word: "in the morning", meaning: "vào buổi sáng" },
            { word: "on Monday", meaning: "vào thứ Hai" },
            { word: "at seven o'clock", meaning: "lúc 7 giờ đúng" },
            { word: "at home", meaning: "ở nhà" }
          ]
        }
      ],
      parentGuide: {
        goal: "Dùng hình ảnh chiếc phễu ngược (Rộng nhất ở trên là IN -> Vừa là ON -> Nhọn nhất là AT) để con nhớ lâu.",
        steps: [
          "Vẽ 1 tam giác chia 3 tầng: Tầng đáy rộng ghi IN, tầng giữa ghi ON, đỉnh nhọn ghi AT.",
          "Đọc nhanh các cụm: '2025' -> con đáp 'IN'; 'Chủ nhật' -> con đáp 'ON'; '6 giờ' -> con đáp 'AT'."
        ],
        mistakes: [
          "Nhầm 'in the morning' với 'at night' (nhớ ngoại lệ: at night, at noon)."
        ],
        realLife: "Dán giấy nhớ nhỏ lên đồng hồ: 'I wake up AT 6:30 AM'."
      },
      quiz: [
        {
          question: "I always get up ______ 6 o'clock.",
          options: ["in", "on", "at", "to"],
          correctIndex: 2,
          explanation: "Giờ giấc cụ thể luôn đi với giới từ 'at'."
        },
        {
          question: "We have English class ______ Tuesday.",
          options: ["in", "on", "at", "by"],
          correctIndex: 1,
          explanation: "Các thứ trong tuần (Monday, Tuesday...) luôn đi với 'on'."
        },
        {
          question: "My birthday is ______ October.",
          options: ["in", "on", "at", "from"],
          correctIndex: 0,
          explanation: "Tháng (không có ngày cụ thể đi kèm) dùng giới từ 'in'."
        },
        {
          question: "The books are ______ the desk.",
          options: ["in", "on", "at", "under"],
          correctIndex: 1,
          explanation: "Sách nằm trên bề mặt bàn dùng 'on the desk'."
        }
      ]
    },

    // =========================================================
    // LỚP 5 - HÓA HỌC (KHOA HỌC NỀN TẢNG HÓA)
    // =========================================================
    {
      id: "g5-chem-1",
      grade: "5",
      subject: "chem",
      title: "3 Thể của chất: Rắn - Lỏng - Khí",
      summary: "Làm quen với Hóa học qua sự chuyển thể của nước và các chất quanh ta.",
      duration: "12 phút",
      sections: [
        {
          icon: "🧊",
          heading: "1. Ba trạng thái của chất",
          diagram: {
            caption: "Các hạt ở thể Rắn xếp khít nhau, thể Lỏng trượt lên nhau, thể Khí bay tự do",
            svg: `<svg viewBox="0 0 360 120" width="340" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="95" height="80" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
              <circle cx="35" cy="35" r="7" fill="#2563eb"/><circle cx="57" cy="35" r="7" fill="#2563eb"/><circle cx="79" cy="35" r="7" fill="#2563eb"/>
              <circle cx="35" cy="57" r="7" fill="#2563eb"/><circle cx="57" cy="57" r="7" fill="#2563eb"/><circle cx="79" cy="57" r="7" fill="#2563eb"/>
              <text x="35" y="110" font-size="13" font-weight="700" fill="#1e40af">Thể Rắn</text>
              <rect x="132" y="10" width="95" height="80" rx="10" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
              <circle cx="152" cy="65" r="7" fill="#059669"/><circle cx="174" cy="70" r="7" fill="#059669"/><circle cx="198" cy="63" r="7" fill="#059669"/>
              <circle cx="164" cy="48" r="7" fill="#059669"/><circle cx="188" cy="45" r="7" fill="#059669"/>
              <text x="152" y="110" font-size="13" font-weight="700" fill="#065f46">Thể Lỏng</text>
              <rect x="254" y="10" width="95" height="80" rx="10" fill="#f5f3ff" stroke="#7c3aed" stroke-width="2"/>
              <circle cx="272" cy="28" r="6" fill="#7c3aed"/><circle cx="325" cy="35" r="6" fill="#7c3aed"/><circle cx="295" cy="58" r="6" fill="#7c3aed"/>
              <circle cx="270" cy="74" r="6" fill="#7c3aed"/><circle cx="330" cy="70" r="6" fill="#7c3aed"/>
              <text x="278" y="110" font-size="13" font-weight="700" fill="#5b21b6">Thể Khí</text>
            </svg>`
          },
          grid: [
            { title: "Thể Rắn (Solid)", detail: "Có hình dạng xác định, không chảy được (viên đá, cái thìa, gỗ)." },
            { title: "Thể Lỏng (Liquid)", detail: "Không có hình dạng cố định, chảy được, lấy theo hình bình chứa (nước, sữa, dầu ăn)." },
            { title: "Thể Khí (Gas)", detail: "Không có hình dạng cố định, lan tỏa khắp mọi hướng (không khí, hơi nước, khí oxi)." }
          ]
        },
        {
          icon: "🔥",
          heading: "2. Sự chuyển thể của nước",
          formula: "Nước đá (Rắn) ──Nóng chảy──▶ Nước (Lỏng) ──Bay hơi──▶ Hơi nước (Khí)",
          tip: "Khi làm lạnh ngược lại: Hơi nước ngưng tụ thành nước lỏng, nước lỏng đông đặc thành nước đá!"
        }
      ],
      parentGuide: {
        goal: "Giúp con yêu thích môn Hóa ngay từ tiểu học bằng thí nghiệm an toàn trong nhà bếp.",
        steps: [
          "Lấy 1 viên đá cho vào cốc để con quan sát đá tan thành nước (nóng chảy).",
          "Đun nước sôi (bố/mẹ làm, con đứng xa quan sát) chỉ cho con thấy hơi nước bay lên và đọng giọt trên nắp vung (bay hơi và ngưng tụ)."
        ],
        mistakes: [
          "Con hay nghĩ không khí không phải là vật chất vì không nhìn thấy được."
        ],
        realLife: "Giải thích cho con tại sao cốc nước đá lại có các giọt nước đọng bên ngoài thành cốc (do hơi nước trong không khí gặp lạnh ngưng tụ lại)."
      },
      quiz: [
        {
          question: "Đặc điểm nào đúng với chất ở thể LỎNG?",
          options: [
            "Có hình dạng nhất định",
            "Không có hình dạng nhất định, có thể chảy và lấy hình dạng của vật chứa",
            "Luôn bay lên trời",
            "Cứng và không nén được"
          ],
          correctIndex: 1,
          explanation: "Chất lỏng như nước, sữa không có hình dạng riêng mà mang hình dạng của cốc/chai chứa nó."
        },
        {
          question: "Quá trình nước đá tan thành nước lỏng được gọi là:",
          options: ["Sự đông đặc", "Sự bay hơi", "Sự nóng chảy", "Sự ngưng tụ"],
          correctIndex: 2,
          explanation: "Chất chuyển từ thể rắn sang thể lỏng khi gặp nhiệt độ cao hơn gọi là sự nóng chảy."
        },
        {
          question: "Hiện tượng giọt nước đọng trên lá cây vào sáng sớm là do:",
          options: ["Sự ngưng tụ của hơi nước", "Sự nóng chảy", "Lá cây tự tiết ra dầu", "Sự đông đặc"],
          correctIndex: 0,
          explanation: "Hơi nước trong không khí ban đêm gặp lạnh ngưng tụ thành giọt sương."
        },
        {
          question: "Chất nào sau đây tồn tại ở thể KHÍ ở điều kiện bình thường?",
          options: ["Muối ăn", "Dầu ăn", "Khí oxygen (oxi)", "Đường cát"],
          correctIndex: 2,
          explanation: "Khí oxygen là chất khí có trong không khí giúp chúng ta hô hấp."
        }
      ]
    },
    {
      id: "g5-chem-2",
      grade: "5",
      subject: "chem",
      title: "Hỗn hợp, Dung dịch & Biến đổi hóa học",
      summary: "Phân biệt trộn cát với nước và hòa tan đường, bước đầu nhận biết phản ứng hóa học.",
      duration: "12 phút",
      sections: [
        {
          icon: "🥤",
          heading: "1. Hỗn hợp và Dung dịch",
          grid: [
            { title: "Hỗn hợp", detail: "2 hay nhiều chất trộn lẫn nhưng vẫn giữ nguyên tính chất riêng (ví dụ: nước + cát, muối + tiêu)." },
            { title: "Dung dịch", detail: "Hỗn hợp đồng nhất khi chất tan hòa tan hoàn toàn vào chất lỏng (ví dụ: nước đường, nước muối)." }
          ]
        },
        {
          icon: "⚗️",
          heading: "2. Biến đổi vật lí vs Biến đổi hóa học",
          bullets: [
            "Biến đổi vật lí: Chất chỉ đổi hình dạng/trạng thái, KHÔNG tạo chất mới (xé giấy, hòa tan đường).",
            "Biến đổi hóa học: Có tạo ra CHẤT MỚI khác hẳn ban đầu (đốt giấy thành tro, sắt bị gỉ, chưng đường thành kẹo đắng)."
          ]
        }
      ],
      parentGuide: {
        goal: "Cho con tự tay pha nước chanh đường để phân biệt dung dịch và cách tách chất đơn giản.",
        steps: [
          "Cho con khuấy 1 thìa đường vào nước (tan hết -> dung dịch) và 1 thìa gạo/cát vào nước (không tan -> hỗn hợp).",
          "Hỏi con: 'Làm sao để lấy lại hạt gạo ra khỏi nước?' (Lọc/gạn). 'Còn lấy lại muối từ nước biển?' (Phơi nắng cho nước bay hơi)."
        ],
        mistakes: [
          "Nhầm lẫn hòa tan đường vào nước là biến đổi hóa học (thực chất đường vẫn là đường, nếm vẫn ngọt)."
        ],
        realLife: "Quan sát chiếc đinh sắt bị gỉ đỏ ngoài trời mưa để con thấy biến đổi hóa học diễn ra chậm trong tự nhiên."
      },
      quiz: [
        {
          question: "Trường hợp nào sau đây tạo thành DUNG DỊCH?",
          options: [
            "Trộn cát vào nước",
            "Khuấy tan hoàn toàn muối vào nước",
            "Trộn gạo với đậu xanh",
            "Đổ dầu ăn vào nước"
          ],
          correctIndex: 1,
          explanation: "Muối tan hoàn toàn vào nước tạo thành hỗn hợp đồng nhất gọi là dung dịch nước muối."
        },
        {
          question: "Hiện tượng nào dưới đây là BIẾN ĐỔI HÓA HỌC (có tạo ra chất mới)?",
          options: [
            "Xé tờ giấy thành nhiều mảnh nhỏ",
            "Nước đá tan chảy thành nước",
            "Đốt cháy tờ giấy thành tro và khói",
            "Bẻ đôi thanh sô-cô-la"
          ],
          correctIndex: 2,
          explanation: "Khi đốt giấy, giấy biến thành tro và khói (chất mới), không còn là giấy nữa."
        },
        {
          question: "Để tách cát ra khỏi nước, cách nào nhanh và đơn giản nhất?",
          options: ["Dùng giấy lọc hoặc phễu lọc", "Dùng nam châm", "Đun sôi cho cát bay hơi", "Cho thêm đường"],
          correctIndex: 0,
          explanation: "Cát không tan trong nước nên dùng lọc sẽ giữ lại cát trên phễu, nước chảy xuống dưới."
        },
        {
          question: "Người dân làm muối từ nước biển bằng cách phơi nước biển dưới ánh nắng mặt trời. Cách này dựa vào hiện tượng gì?",
          options: ["Nước bay hơi, muối kết tinh lại", "Muối bay hơi", "Nước đóng băng", "Sắt bị gỉ"],
          correctIndex: 0,
          explanation: "Dưới nắng gió, nước bay hơi hết để lại các hạt muối trắng kết tinh."
        }
      ]
    },

    // =========================================================
    // LỚP 7 - TOÁN
    // =========================================================
    {
      id: "g7-math-1",
      grade: "7",
      subject: "math",
      title: "Số hữu tỉ & Thứ tự thực hiện phép tính",
      summary: "Mở rộng từ phân số sang số hữu tỉ âm/dương, quy tắc chuyển vế và lũy thừa.",
      duration: "18 phút",
      sections: [
        {
          icon: "🔢",
          heading: "1. Số hữu tỉ (ký hiệu ℚ) là gì?",
          text: "Số hữu tỉ là số viết được dưới dạng phân số a/b với a, b là số nguyên và b ≠ 0. Số nguyên, phân số, số thập phân hữu hạn đều là số hữu tỉ.",
          grid: [
            { title: "Ví dụ số hữu tỉ", detail: "-3 = -3/1 ; 0,5 = 1/2 ; -1,25 = -5/4" },
            { title: "Quy tắc dấu", detail: "Âm × Âm = Dương; Âm × Dương = Âm" }
          ]
        },
        {
          icon: "⚡",
          heading: "2. Lũy thừa và Quy tắc chuyển vế",
          formula: "xᵐ · xⁿ = xᵐ⁺ⁿ   |   xᵐ : xⁿ = xᵐ⁻ⁿ   |   (xᵐ)ⁿ = xᵐ·ⁿ",
          bullets: [
            "Quy tắc chuyển vế: Khi chuyển một số hạng từ vế này sang vế kia của đẳng thức, ta PHẢI ĐỔI DẤU (+ thành -, - thành +).",
            "Thứ tự tính: Trong ngoặc ( ) → [ ] → { } ; Lũy thừa → Nhân, chia → Cộng, trừ."
          ]
        }
      ],
      parentGuide: {
        goal: "Lớp 7 chuyển mạnh sang tính toán có dấu âm (-) và chữ (x). Cần rèn tính cẩn thận từng bước.",
        steps: [
          "Nhắc con luôn viết dấu ngoặc cho số âm khi thay vào phép tính, ví dụ: (-2)² = 4 khác với -2² = -4.",
          "Khi giải bài tìm x, tập cho con thói quen 'chuyển vế nhớ đổi dấu' và thử lại kết quả vào đề bài."
        ],
        mistakes: [
          "Quên đổi dấu tất cả các số hạng bên trong khi bỏ dấu ngoặc có dấu trừ đằng trước.",
          "Nhầm lẫn x² · x³ thành x⁶ (đúng phải là cộng số mũ: x⁵)."
        ],
        realLife: "Ví dụ nhiệt độ buổi trưa là 5°C, ban đêm giảm 7°C thì còn 5 - 7 = -2°C (số âm)."
      },
      quiz: [
        {
          question: "Số nào dưới đây KHÔNG phải là số hữu tỉ dương và cũng không phải số hữu tỉ âm?",
          options: ["1/2", "-0,5", "0", "-3"],
          correctIndex: 2,
          explanation: "Số 0 là số hữu tỉ, nhưng không phải số hữu tỉ dương và cũng không phải số hữu tỉ âm."
        },
        {
          question: "Kết quả của phép tính (-2/3) + (1/6) là:",
          options: ["-1/2", "-3/6", "1/2", "-5/6"],
          correctIndex: 0,
          explanation: "Quy đồng: -2/3 = -4/6. Ta có: -4/6 + 1/6 = -3/6 = -1/2."
        },
        {
          question: "Viết gọn tích 3⁴ · 3² dưới dạng một lũy thừa:",
          options: ["3⁸", "3⁶", "9⁶", "3²"],
          correctIndex: 1,
          explanation: "Khi nhân hai lũy thừa cùng cơ số, ta giữ nguyên cơ số và cộng hai số mũ: 3⁴⁺² = 3⁶."
        },
        {
          question: "Tìm x biết: x - 1/2 = -3/4",
          options: ["x = -5/4", "x = 1/4", "x = -1/4", "x = 5/4"],
          correctIndex: 2,
          explanation: "Chuyển -1/2 sang vế phải đổi thành +1/2: x = -3/4 + 1/2 = -3/4 + 2/4 = -1/4."
        }
      ]
    },
    {
      id: "g7-math-2",
      grade: "7",
      subject: "math",
      title: "Tỉ lệ thức & Dãy tỉ số bằng nhau",
      summary: "Công cụ cực mạnh để giải các bài toán chia phần theo tỉ lệ ở lớp 7.",
      duration: "18 phút",
      sections: [
        {
          icon: "⚖️",
          heading: "1. Tỉ lệ thức là gì?",
          text: "Tỉ lệ thức là đẳng thức của hai tỉ số: a/b = c/d.",
          formula: "Nếu a/b = c/d  thì  a · d = b · c  (Nhân chéo bằng nhau)"
        },
        {
          icon: "🔗",
          heading: "2. Tính chất dãy tỉ số bằng nhau",
          formula: "a/b = c/d = (a + c)/(b + d) = (a - c)/(b - d)",
          tip: "Khi đề bài cho tỉ lệ x : y = 3 : 5 và tổng x + y = 24, ta viết ngay x/3 = y/5 = (x + y)/(3 + 5) = 24/8 = 3. Từ đó x = 9, y = 15!"
        }
      ],
      parentGuide: {
        goal: "Giúp con thấy dạng toán này thực chất chính là bài 'Tìm hai số khi biết tổng và tỉ' ở lớp 4-5 nhưng viết bằng chữ x, y.",
        steps: [
          "Liên hệ lại bài toán 'tổng - tỉ' hồi tiểu học để con không thấy bị ngợp.",
          "Yêu cầu con gạch chân 2 dữ kiện trong đề: (1) Tỉ lệ là gì? (2) Tổng hay hiệu bằng bao nhiêu?"
        ],
        mistakes: [
          "Cộng tử với tử nhưng lại trừ mẫu với mẫu (phải cùng dấu + hoặc cùng dấu -)."
        ],
        realLife: "Pha nước cam theo tỉ lệ 1 phần cốt cam : 3 phần nước. Nếu muốn pha 800ml nước cam thì cần bao nhiêu ml cốt cam?"
      },
      quiz: [
        {
          question: "Từ tỉ lệ thức x/4 = 3/2, giá trị của x là:",
          options: ["6", "8", "1,5", "12"],
          correctIndex: 0,
          explanation: "Nhân chéo: 2 · x = 4 · 3 = 12 ⇒ x = 12 : 2 = 6."
        },
        {
          question: "Biết x/2 = y/3 và x + y = 20. Giá trị của x và y lần lượt là:",
          options: ["x = 8; y = 12", "x = 12; y = 8", "x = 4; y = 6", "x = 10; y = 10"],
          correctIndex: 0,
          explanation: "x/2 = y/3 = (x+y)/(2+3) = 20/5 = 4. Suy ra x = 2·4 = 8; y = 3·4 = 12."
        },
        {
          question: "Biết a/5 = b/3 và a - b = 10. Tính b:",
          options: ["25", "15", "5", "30"],
          correctIndex: 1,
          explanation: "a/5 = b/3 = (a-b)/(5-3) = 10/2 = 5. Vậy b = 3 · 5 = 15."
        },
        {
          question: "Cặp tỉ số nào sau đây lập thành một tỉ lệ thức?",
          options: ["1/2 và 3/4", "2/5 và 4/10", "3/7 và 6/21", "5/2 và 10/6"],
          correctIndex: 1,
          explanation: "Vì 2 · 10 = 5 · 4 (= 20), nên 2/5 = 4/10 lập thành một tỉ lệ thức."
        }
      ]
    },
    {
      id: "g7-math-3",
      grade: "7",
      subject: "math",
      title: "Hình học 1: Góc đối đỉnh, Góc kề bù & Tia phân giác",
      summary: "Lấy lại căn bản Hình học lớp 7 từ con số 0: cách nhìn hình, tính góc và nhận diện tia phân giác.",
      duration: "20 phút",
      sections: [
        {
          icon: "✂️",
          heading: "1. Hai góc đối đỉnh & Hai góc kề bù (Cực kỳ quan trọng)",
          text: "Khi hai đường thẳng cắt nhau như hình cái kéo, ta có các cặp góc đặc biệt sau:",
          diagram: {
            caption: "Ô₁ và Ô₃ đối đỉnh (bằng nhau). Ô₁ và Ô₂ kề bù (tổng bằng 180°).",
            svg: `<svg viewBox="0 0 320 170" width="300" xmlns="http://www.w3.org/2000/svg">
              <line x1="40" y1="130" x2="280" y2="40" stroke="#1e293b" stroke-width="2.5"/>
              <line x1="65" y1="30" x2="255" y2="145" stroke="#1e293b" stroke-width="2.5"/>
              <path d="M 135 95 A 30 30 0 0 1 138 71" fill="none" stroke="#e11d48" stroke-width="3"/>
              <path d="M 185 80 A 30 30 0 0 1 182 104" fill="none" stroke="#e11d48" stroke-width="3"/>
              <path d="M 138 71 A 28 28 0 0 1 185 80" fill="none" stroke="#2563eb" stroke-width="3"/>
              <circle cx="160" cy="87" r="4" fill="#1e293b"/>
              <text x="155" y="110" font-size="13" font-weight="700" fill="#1e293b">O</text>
              <text x="112" y="88" font-size="14" font-weight="800" fill="#e11d48">Ô₁</text>
              <text x="195" y="96" font-size="14" font-weight="800" fill="#e11d48">Ô₃</text>
              <text x="152" y="60" font-size="14" font-weight="800" fill="#2563eb">Ô₂</text>
            </svg>`
          },
          grid: [
            { title: "Góc đối đỉnh (Ô₁ và Ô₃)", detail: "Hai góc nằm đối diện nhau qua đỉnh O → LUÔN BẰNG NHAU (Ô₁ = Ô₃)." },
            { title: "Góc kề bù (Ô₁ và Ô₂)", detail: "Nằm kề nhau và cạnh ngoài tạo thành đường thẳng → TỔNG BẰNG 180° (Ô₁ + Ô₂ = 180°)." }
          ]
        },
        {
          icon: "📐",
          heading: "2. Tia phân giác của một góc",
          text: "Tia phân giác giống như đường chia đôi cái bánh góc thành 2 phần BẰNG NHAU.",
          diagram: {
            caption: "Tia Oz nằm giữa Ox, Oy và chia góc xOy thành hai góc bằng nhau: xÔz = zÔy = xÔy : 2",
            svg: `<svg viewBox="0 0 300 150" width="280" xmlns="http://www.w3.org/2000/svg">
              <line x1="50" y1="120" x2="260" y2="120" stroke="#1e293b" stroke-width="2.5"/>
              <line x1="50" y1="120" x2="200" y2="25" stroke="#1e293b" stroke-width="2.5"/>
              <line x1="50" y1="120" x2="245" y2="68" stroke="#0d9488" stroke-width="2.5" stroke-dasharray="6,3"/>
              <path d="M 95 120 A 45 45 0 0 0 92 103" fill="none" stroke="#0d9488" stroke-width="2.5"/>
              <path d="M 92 103 A 45 45 0 0 0 84 91" fill="none" stroke="#0d9488" stroke-width="2.5"/>
              <text x="35" y="132" font-size="13" font-weight="700">O</text>
              <text x="265" y="124" font-size="13" font-weight="700">x</text>
              <text x="205" y="25" font-size="13" font-weight="700">y</text>
              <text x="250" y="70" font-size="13" font-weight="800" fill="#0d9488">z (phân giác)</text>
            </svg>`
          },
          workedExample: {
            title: "Ví dụ giải từng bước: Cho góc xOy = 120°, Oz là tia phân giác. Tính xÔz?",
            steps: [
              "Bước 1: Đọc đề và vẽ hình phác thảo góc xOy mở rộng (120°), vẽ tia Oz chia đôi ở giữa.",
              "Bước 2: Vì Oz là tia phân giác của góc xOy nên ta có: xÔz = zÔy = xÔy : 2 = 120° : 2 = 60°."
            ]
          }
        }
      ],
      parentGuide: {
        goal: "Với bé đang mất căn bản Hình học, điều quan trọng nhất là ĐỪNG vội làm bài chứng minh dài, mà phải tập NHÌN HÌNH và TÍNH SỐ ĐO GÓC trước.",
        steps: [
          "Cho con dùng thước đo độ đo thử 2 góc kề bù trên một đường thẳng để con tự thấy tổng của chúng đúng bằng 180°.",
          "Khi nhìn hình có 2 đường thẳng cắt nhau, hỏi con 2 câu: 'Góc nào đối diện với góc này?' (bằng nhau) và 'Góc nào nằm cạnh nó tạo thành đường thẳng?' (cộng lại bằng 180°)."
        ],
        mistakes: [
          "Nhầm góc kề bù (180°) với góc phụ nhau (90°).",
          "Không vẽ hình ra nháp mà cố tưởng tượng trong đầu nên bị rối."
        ],
        realLife: "Mở chiếc kéo hoặc nhìn ngã tư đường giao nhau để chỉ cho con thấy 2 cặp góc đối đỉnh luôn bằng nhau."
      },
      quiz: [
        {
          question: "Hai đường thẳng cắt nhau tạo thành góc Ô₁ = 50°. Số đo góc Ô₃ đối đỉnh với Ô₁ là:",
          options: ["130°", "40°", "50°", "180°"],
          correctIndex: 2,
          explanation: "Hai góc đối đỉnh thì luôn bằng nhau, nên Ô₃ = Ô₁ = 50°."
        },
        {
          question: "Hai góc kề bù có tổng số đo bằng bao nhiêu?",
          options: ["90°", "180°", "360°", "100°"],
          correctIndex: 1,
          explanation: "Hai góc kề bù ghép lại tạo thành một góc bẹt (đường thẳng) nên có tổng bằng 180°."
        },
        {
          question: "Cho góc Â và góc B̂ kề bù nhau. Biết góc Â = 70°, số đo góc B̂ là:",
          options: ["20°", "70°", "110°", "120°"],
          correctIndex: 2,
          explanation: "Vì kề bù nên Â + B̂ = 180° ⇒ B̂ = 180° - 70° = 110°."
        },
        {
          question: "Tia Om là tia phân giác của góc xOy. Biết xÔm = 35°, vậy góc xOy bằng:",
          options: ["35°", "70°", "17,5°", "145°"],
          correctIndex: 1,
          explanation: "Tia phân giác chia đôi góc nên xOy = 2 × xÔm = 2 × 35° = 70°."
        }
      ]
    },
    {
      id: "g7-math-4",
      grade: "7",
      subject: "math",
      title: "Hình học 2: Hai đường thẳng song song",
      summary: "Cách nhận diện góc So le trong, Đồng vị, Trong cùng phía cực dễ qua quy tắc chữ Z và chữ F.",
      duration: "20 phút",
      sections: [
        {
          icon: "🛤️",
          heading: "1. Quy tắc nhìn góc: Chữ Z (So le trong) & Chữ F (Đồng vị)",
          text: "Khi đường thẳng c cắt hai đường thẳng a và b song song (a // b), ta chỉ cần nhớ 3 cặp góc vàng sau:",
          diagram: {
            caption: "a // b bị cắt bởi c: Â₁ = B̂₁ (So le trong - chữ Z); Â₂ = B̂₁ (Đồng vị - chữ F); Â₁ + B̂₂ = 180° (Trong cùng phía)",
            svg: `<svg viewBox="0 0 340 185" width="320" xmlns="http://www.w3.org/2000/svg">
              <line x1="30" y1="55" x2="310" y2="55" stroke="#2563eb" stroke-width="2.5"/>
              <line x1="30" y1="130" x2="310" y2="130" stroke="#2563eb" stroke-width="2.5"/>
              <line x1="220" y1="15" x2="115" y2="170" stroke="#1e293b" stroke-width="2.5"/>
              <text x="35" y="48" font-size="13" font-weight="800" fill="#2563eb">a</text>
              <text x="35" y="123" font-size="13" font-weight="800" fill="#2563eb">b</text>
              <text x="225" y="25" font-size="13" font-weight="800" fill="#1e293b">c</text>
              <circle cx="193" cy="55" r="3.5" fill="#1e293b"/>
              <circle cx="142" cy="130" r="3.5" fill="#1e293b"/>
              <text x="163" y="74" font-size="13" font-weight="800" fill="#e11d48">Â₁</text>
              <text x="155" y="122" font-size="13" font-weight="800" fill="#e11d48">B̂₁</text>
              <text x="205" y="46" font-size="13" font-weight="800" fill="#059669">Â₂</text>
              <text x="116" y="122" font-size="13" font-weight="800" fill="#7c3aed">B̂₂</text>
            </svg>`
          },
          grid: [
            { title: "So le trong (hình chữ Z)", detail: "Nằm bên trong hai đường a, b và ở hai phía khác nhau của c → BẰNG NHAU." },
            { title: "Đồng vị (hình chữ F)", detail: "Cùng nằm một phía (cùng trên-phải hoặc cùng dưới-trái) → BẰNG NHAU." },
            { title: "Trong cùng phía (hình chữ U)", detail: "Nằm bên trong và cùng một phía → TỔNG BẰNG 180° (bù nhau)." }
          ]
        },
        {
          icon: "🧭",
          heading: "2. Dấu hiệu nhận biết 2 đường thẳng song song",
          workedExample: {
            title: "Cách chứng minh a // b (Dùng 1 trong 3 cách sau):",
            steps: [
              "Cách 1: Chỉ ra có một cặp góc SO LE TRONG bằng nhau.",
              "Cách 2: Chỉ ra có một cặp góc ĐỒNG VỊ bằng nhau.",
              "Cách 3: Chỉ ra hai đường thẳng cùng vuông góc với đường thẳng thứ 3 (a ⊥ c và b ⊥ c ⇒ a // b)."
            ]
          }
        }
      ],
      parentGuide: {
        goal: "Giúp con không bị 'mù hình' khi nhìn 8 góc tạo bởi 3 đường thẳng.",
        steps: [
          "Lấy bút dạ quang tô lên hình tạo thành chữ Z để con thấy ngay 2 góc ở 2 góc nhọn của chữ Z là 'so le trong'.",
          "Tô chữ F để con thấy 2 góc nằm cùng vị trí dưới 2 thanh ngang của chữ F là 'đồng vị'."
        ],
        mistakes: [
          "Nhầm cặp góc Trong cùng phía (cộng lại = 180°) thành bằng nhau.",
          "Dùng tính chất 'hai góc so le trong bằng nhau' khi đề bài CHƯA cho hai đường thẳng song song."
        ],
        realLife: "Chỉ cho con hai thanh ray đường tàu hoặc hai mép thước kẻ song song, đặt một cây bút cắt ngang qua để đếm các cặp góc."
      },
      quiz: [
        {
          question: "Nếu một đường thẳng cắt hai đường thẳng SONG SONG thì hai góc SO LE TRONG sẽ:",
          options: ["Bù nhau (tổng 180°)", "Bằng nhau", "Phụ nhau (tổng 90°)", "Khác nhau"],
          correctIndex: 1,
          explanation: "Tính chất cơ bản: Khi a // b, hai góc so le trong bằng nhau."
        },
        {
          question: "Cho a // b. Một đường thẳng c cắt a và b tạo ra cặp góc TRONG CÙNG PHÍA. Biết một góc bằng 65°, góc còn lại bằng:",
          options: ["65°", "25°", "115°", "125°"],
          correctIndex: 2,
          explanation: "Hai góc trong cùng phía khi a // b thì bù nhau (tổng bằng 180°): 180° - 65° = 115°."
        },
        {
          question: "Cho hai đường thẳng a và b cùng vuông góc với đường thẳng c (a ⊥ c và b ⊥ c). Kết luận nào đúng?",
          options: ["a cắt b", "a // b", "a vuông góc b", "Không xác định được"],
          correctIndex: 1,
          explanation: "Hai đường thẳng phân biệt cùng vuông góc với đường thẳng thứ ba thì chúng song song với nhau (a // b)."
        },
        {
          question: "Hai đường thẳng song song là hai đường thẳng:",
          options: [
            "Cắt nhau tạo góc 90°",
            "Không có điểm chung nào",
            "Có 1 điểm chung",
            "Trùng nhau hoàn toàn"
          ],
          correctIndex: 1,
          explanation: "Theo định nghĩa, hai đường thẳng song song không bao giờ cắt nhau (không có điểm chung)."
        }
      ]
    },
    {
      id: "g7-math-5",
      grade: "7",
      subject: "math",
      title: "Hình học 3: Tam giác & Hai tam giác bằng nhau",
      summary: "Định lí tổng 3 góc trong tam giác (180°) và 3 trường hợp bằng nhau (c.c.c, c.g.c, g.c.g).",
      duration: "22 phút",
      sections: [
        {
          icon: "🔺",
          heading: "1. Tổng ba góc của một Tam giác luôn bằng 180°",
          text: "Dù tam giác to hay nhỏ, nhọn hay tù, tổng 3 góc bên trong luôn đúng bằng 180°.",
          diagram: {
            caption: "Trong tam giác ABC bất kỳ: Â + B̂ + Ĉ = 180°",
            svg: `<svg viewBox="0 0 300 165" width="280" xmlns="http://www.w3.org/2000/svg">
              <polygon points="150,25 45,140 255,140" fill="#ecfdf5" stroke="#059669" stroke-width="2.5"/>
              <text x="145" y="18" font-size="14" font-weight="800" fill="#065f46">A</text>
              <text x="28" y="148" font-size="14" font-weight="800" fill="#065f46">B</text>
              <text x="262" y="148" font-size="14" font-weight="800" fill="#065f46">C</text>
              <text x="115" y="110" font-size="14" font-weight="800" fill="#059669">Â + B̂ + Ĉ = 180°</text>
            </svg>`
          },
          formula: "Nếu ΔABC vuông tại A (Â = 90°)  ⇒  B̂ + Ĉ = 90°"
        },
        {
          icon: "👯",
          heading: "2. Ba trường hợp Hai tam giác bằng nhau",
          text: "Muốn chứng minh ΔABC = ΔDEF, ta chỉ cần tìm đủ 3 yếu tố bằng nhau theo đúng 1 trong 3 bộ sau:",
          grid: [
            { title: "1. Cạnh - Cạnh - Cạnh (c.c.c)", detail: "3 cạnh của tam giác này lần lượt bằng 3 cạnh của tam giác kia." },
            { title: "2. Cạnh - Góc - Cạnh (c.g.c)", detail: "2 cạnh và góc XEN GIỮA hai cạnh đó bằng nhau." },
            { title: "3. Góc - Cạnh - Góc (g.c.g)", detail: "2 góc và cạnh XEN GIỮA hai góc đó bằng nhau." }
          ],
          workedExample: {
            title: "Mẫu trình bày chứng minh 2 tam giác bằng nhau (Con học thuộc khung này!):",
            steps: [
              "Xét ΔABC và ΔDEF có:",
              "• AB = DE (giả thiết hoặc đã chứng minh)",
              "• B̂ = Ê (giả thiết)",
              "• BC = EF (giả thiết)",
              "⇒ Vậy ΔABC = ΔDEF (c.g.c)."
            ]
          }
        }
      ],
      parentGuide: {
        goal: "Học sinh lớp 7 sợ nhất phần 'chứng minh hai tam giác bằng nhau'. Bí quyết là tập cho con viết đúng 'khung 5 dòng' như mẫu trên.",
        steps: [
          "Cho con cắt 1 tam giác bằng giấy, xé 3 góc ghép lại thành một đường thẳng để con tận mắt thấy tổng 3 góc bằng 180°.",
          "Khi làm bài chứng minh, bảo con dùng ký hiệu gạch 1 gạch, 2 gạch giống nhau lên các cạnh bằng nhau trên hình vẽ trước khi viết lời giải."
        ],
        mistakes: [
          "Góc không nằm XEN GIỮA 2 cạnh nhưng vẫn kết luận theo trường hợp (c.g.c).",
          "Viết sai thứ tự đỉnh tương ứng (ví dụ ΔABC = ΔEDF thay vì ΔDEF)."
        ],
        realLife: "Tam giác là hình vững chắc nhất trong xây dựng (nhìn mái nhà, cầu thép, khung xe đạp đều có hình tam giác)."
      },
      quiz: [
        {
          question: "Trong tam giác ABC có Â = 60°, B̂ = 50°. Số đo góc Ĉ là:",
          options: ["60°", "70°", "80°", "110°"],
          correctIndex: 1,
          explanation: "Tổng 3 góc là 180°, nên Ĉ = 180° - (60° + 50°) = 70°."
        },
        {
          question: "Tam giác DEF vuông tại D có Ê = 35°. Số đo góc F̂ là:",
          options: ["55°", "65°", "45°", "145°"],
          correctIndex: 0,
          explanation: "Trong tam giác vuông, hai góc nhọn phụ nhau: F̂ = 90° - 35° = 55°."
        },
        {
          question: "Trường hợp nào KHÔNG phải là trường hợp bằng nhau của hai tam giác thường?",
          options: ["cạnh - cạnh - cạnh", "cạnh - góc - cạnh", "góc - cạnh - góc", "góc - góc - góc"],
          correctIndex: 3,
          explanation: "Hai tam giác có 3 góc bằng nhau có thể có kích thước to nhỏ khác nhau (chỉ đồng dạng, không chắc bằng nhau)."
        },
        {
          question: "Cho ΔABC và ΔMNP có AB = MN, Â = M̂, AC = MP. Kết luận đúng là:",
          options: [
            "ΔABC = ΔMNP (c.c.c)",
            "ΔABC = ΔMNP (c.g.c)",
            "ΔABC = ΔMNP (g.c.g)",
            "Chưa đủ điều kiện bằng nhau"
          ],
          correctIndex: 1,
          explanation: "Góc Â xen giữa hai cạnh AB, AC và góc M̂ xen giữa hai cạnh MN, MP nên bằng nhau theo trường hợp (c.g.c)."
        }
      ]
    },

    // =========================================================
    // LỚP 7 - NGỮ VĂN
    // =========================================================
    {
      id: "g7-van-1",
      grade: "7",
      subject: "van",
      title: "Biện pháp tu từ: Ẩn dụ, Hoán dụ & Điệp ngữ",
      summary: "Phân biệt rõ ẩn dụ (giống nhau) và hoán dụ (gần gũi) để phân tích thơ văn sắc sảo.",
      duration: "15 phút",
      sections: [
        {
          icon: "🎨",
          heading: "1. Phân biệt Ẩn dụ và Hoán dụ",
          grid: [
            { title: "Ẩn dụ (Quan hệ TƯƠNG ĐỒNG)", detail: "Gọi tên sự vật này bằng tên sự vật khác có nét GIỐNG NHAU. Ví dụ: 'Người Cha mái tóc bạc' (Bác Hồ giống như người cha)." },
            { title: "Hoán dụ (Quan hệ TƯƠNG CẬN)", detail: "Gọi tên sự vật này bằng sự vật khác ĐI LIỀN, GẦN GŨI với nó. Ví dụ: 'Áo nâu liền với áo xanh' (áo nâu chỉ nông dân, áo xanh chỉ công nhân)." }
          ]
        },
        {
          icon: "🔁",
          heading: "2. Điệp ngữ",
          text: "Là lặp đi lặp lại một từ hoặc cụm từ để nhấn mạnh cảm xúc và tạo nhịp điệu cho câu thơ/văn.",
          tip: "Khi phân tích tác dụng biện pháp tu từ, luôn trả lời đủ 2 ý: (1) Giúp câu văn sinh động, giàu hình ảnh/nhịp điệu; (2) Nhấn mạnh nội dung/tình cảm gì?"
        }
      ],
      parentGuide: {
        goal: "Giúp con không bị nhầm giữa Ẩn dụ và Hoán dụ — lỗi sai kinh điển nhất của học sinh THCS.",
        steps: [
          "Dạy con câu thần chú: 'Ẩn dụ là GIỐNG NHAU (so sánh ngầm) — Hoán dụ là GẦN NHAU (dấu hiệu đi kèm)'.",
          "Ví dụ vui: Gọi cô giáo là 'người mẹ hiền' -> Giống nhau (Ẩn dụ). Gọi cả lớp bằng 'mái trường' -> Gần gũi (Hoán dụ)."
        ],
        mistakes: [
          "Chỉ nêu được tên biện pháp tu từ mà quên nêu TÁC DỤNG biểu cảm của nó trong bài kiểm tra."
        ],
        realLife: "Cùng con nghe một bài hát thiếu nhi hoặc nhạc trữ tình và thử tìm xem câu hát nào dùng ẩn dụ."
      },
      quiz: [
        {
          question: "Trong câu 'Ngày ngày mặt trời đi qua trên lăng / Thấy một mặt trời trong lăng rất đỏ', từ 'mặt trời' thứ hai dùng biện pháp gì?",
          options: ["So sánh", "Ẩn dụ", "Hoán dụ", "Nói quá"],
          correctIndex: 1,
          explanation: "'Mặt trời trong lăng' ẩn dụ cho Bác Hồ (có nét tương đồng: tỏa sáng, mang lại sự sống và niềm tin cho dân tộc)."
        },
        {
          question: "Câu 'Cả lớp im lặng lắng nghe cô giảng' dùng biện pháp tu từ nào ở từ 'cả lớp'?",
          options: ["Ẩn dụ", "Hoán dụ", "Nhân hóa", "Điệp ngữ"],
          correctIndex: 1,
          explanation: "'Cả lớp' (vật chứa) dùng để chỉ tất cả học sinh trong lớp (vật bị chứa) → đây là phép Hoán dụ."
        },
        {
          question: "Tác dụng chính của biện pháp Điệp ngữ là gì?",
          options: [
            "Làm câu văn ngắn gọn hơn",
            "Nhấn mạnh ý, tạo nhịp điệu và tăng sức biểu cảm",
            "Thay thế từ bị lỗi",
            "Kể chuyện nhanh hơn"
          ],
          correctIndex: 1,
          explanation: "Lặp lại từ ngữ có chủ đích giúp nhấn mạnh cảm xúc, ý nghĩa và tạo âm hưởng nhịp nhàng."
        },
        {
          question: "Hình ảnh 'Bàn tay ta làm nên tất cả / Có sức người sỏi đá cũng thành cơm' sử dụng hoán dụ ở từ nào?",
          options: ["sỏi đá", "cơm", "bàn tay", "tất cả"],
          correctIndex: 2,
          explanation: "'Bàn tay' (một bộ phận cơ thể) dùng để chỉ người lao động nói chung."
        }
      ]
    },
    {
      id: "g7-van-2",
      grade: "7",
      subject: "van",
      title: "Viết bài văn Nghị luận xã hội (Lớp 7)",
      summary: "Cấu trúc 3 phần rõ ràng để bày tỏ ý kiến thuyết phục về một vấn đề trong đời sống.",
      duration: "15 phút",
      sections: [
        {
          icon: "🏛️",
          heading: "1. Ba yếu tố cốt lõi của văn Nghị luận",
          grid: [
            { title: "Ý kiến (Luận điểm)", detail: "Bạn đồng tình hay phản đối điều gì?" },
            { title: "Lí lẽ", detail: "Giải thích TẠI SAO bạn nghĩ như vậy?" },
            { title: "Bằng chứng", detail: "Ví dụ thực tế nào chứng minh điều đó là đúng?" }
          ]
        },
        {
          icon: "📝",
          heading: "2. Dàn ý chuẩn dễ viết",
          bullets: [
            "Mở bài: Giới thiệu vấn đề + nêu rõ ý kiến của bản thân.",
            "Thân bài: Đoạn 1 giải thích vấn đề; Đoạn 2 nêu 2-3 lí lẽ kèm bằng chứng thực tế; Đoạn 3 phản đề nhẹ (nếu không làm vậy thì sao?) và bài học.",
            "Kết bài: Khẳng định lại ý kiến và lời nhắn nhủ."
          ]
        }
      ],
      parentGuide: {
        goal: "Rèn tư duy logic và khả năng bảo vệ quan điểm cho con ở tuổi dậy thì.",
        steps: [
          "Chọn một chủ đề gần gũi với con như: 'Học sinh có nên dùng điện thoại quá nhiều không?'",
          "Trước khi viết, cho con nói miệng 3 lí do ('Thứ nhất là..., Thứ hai là..., Ví dụ như...') rồi mới viết ra giấy."
        ],
        mistakes: [
          "Viết lan man như kể chuyện, thiếu lí lẽ rõ ràng hoặc nêu ví dụ chung chung kiểu 'có nhiều người...'."
        ],
        realLife: "Trong bữa cơm, thỉnh thoảng hỏi quan điểm của con về một tin tức tích cực và hỏi: 'Vì sao con nghĩ vậy?'"
      },
      quiz: [
        {
          question: "Trong bài văn nghị luận về một vấn đề đời sống, yếu tố nào giúp bài viết có sức thuyết phục nhất?",
          options: [
            "Chỉ kể một câu chuyện dài",
            "Kết hợp chặt chẽ giữa Ý kiến, Lí lẽ và Bằng chứng xác thực",
            "Dùng thật nhiều từ cảm thán",
            "Viết mở bài thật dài"
          ],
          correctIndex: 1,
          explanation: "Văn nghị luận thuyết phục người đọc bằng lập luận logic (lí lẽ) và dẫn chứng thực tế."
        },
        {
          question: "Phần nào trong bài văn nghị luận dùng để giới thiệu vấn đề và nêu quan điểm ban đầu?",
          options: ["Mở bài", "Thân bài", "Kết bài", "Chú thích"],
          correctIndex: 0,
          explanation: "Mở bài có nhiệm vụ dẫn dắt vào vấn đề và nêu rõ ý kiến tán thành hay phản đối."
        },
        {
          question: "Ví dụ nào sau đây là BẰNG CHỨNG tốt cho đề bài 'Ý nghĩa của tinh thần tự học'?",
          options: [
            "Tự học rất tốt cho mọi người.",
            "Chủ tịch Hồ Chí Minh đã tự học nhiều ngoại ngữ trong quá trình bôn ba tìm đường cứu nước.",
            "Ai cũng nên tự học mỗi ngày.",
            "Học là việc suốt đời."
          ],
          correctIndex: 1,
          explanation: "Bằng chứng cần là người thật, việc thật hoặc sự kiện cụ thể để chứng minh cho lí lẽ."
        },
        {
          question: "Khi mở đầu các đoạn lí lẽ trong Thân bài, nên dùng từ nối nào để mạch lạc?",
          options: [
            "Ngày xửa ngày xưa...",
            "Trước hết,... / Bên cạnh đó,... / Hơn thế nữa,...",
            "Thế rồi...",
            "Tóm lại là..."
          ],
          correctIndex: 1,
          explanation: "Các từ chuyển đoạn như 'Trước hết', 'Bên cạnh đó' giúp các luận điểm tách bạch và logic."
        }
      ]
    },

    // =========================================================
    // LỚP 7 - TIẾNG ANH
    // =========================================================
    {
      id: "g7-eng-1",
      grade: "7",
      subject: "eng",
      title: "Quá khứ đơn vs Hiện tại hoàn thành",
      summary: "Phân biệt hành động đã chấm dứt hẳn trong quá khứ với hành động còn liên quan đến hiện tại.",
      duration: "18 phút",
      sections: [
        {
          icon: "🕰️",
          heading: "1. Điểm khác biệt cốt lõi",
          grid: [
            { title: "Past Simple (V2 / V-ed)", detail: "Có mốc thời gian rõ ràng ĐÃ QUA (yesterday, in 2020, 2 days ago)." },
            { title: "Present Perfect (have/has + V3)", detail: "KHÔNG rõ thời gian hoặc kéo dài đến hiện tại (for, since, already, yet, ever)." }
          ]
        },
        {
          icon: "🔊",
          heading: "2. Luyện nghe & phân biệt mẫu câu",
          vocab: [
            { word: "I visited Da Nang in 2023.", meaning: "Tôi đã đi Đà Nẵng năm 2023. (Có mốc 2023 → Quá khứ đơn)" },
            { word: "I have visited Da Nang three times.", meaning: "Tôi đã từng đi Đà Nẵng 3 lần. (Trải nghiệm → Hiện tại hoàn thành)" },
            { word: "She has lived here for five years.", meaning: "Cô ấy sống ở đây được 5 năm rồi. (for + khoảng thời gian)" },
            { word: "We have studied English since 2021.", meaning: "Chúng tôi học tiếng Anh từ năm 2021. (since + mốc thời gian)" }
          ]
        }
      ],
      parentGuide: {
        goal: "Giúp con nắm chắc cặp từ khóa 'since' (mốc thời gian) và 'for' (khoảng thời gian).",
        steps: [
          "Kiểm tra nhanh: '2020' dùng since hay for? (since). '3 years' dùng since hay for? (for).",
          "Nhắc con ôn lại bảng động từ bất quy tắc cột 3 (V3) như: go-went-gone, see-saw-seen, do-did-done."
        ],
        mistakes: [
          "Dùng Hiện tại hoàn thành khi câu đã có 'yesterday' hoặc 'last year'.",
          "Nhầm 'has' (cho He/She/It) với 'have' (cho I/You/We/They)."
        ],
        realLife: "Hỏi con: 'How long have you known your best friend?' (Con chơi với bạn thân được bao lâu rồi?)"
      },
      quiz: [
        {
          question: "My brother ______ in London since 2022.",
          options: ["lived", "lives", "has lived", "is living"],
          correctIndex: 2,
          explanation: "Có 'since 2022' (từ năm 2022 đến nay) → dùng Hiện tại hoàn thành: has lived."
        },
        {
          question: "We ______ that movie last weekend.",
          options: ["have seen", "saw", "see", "has seen"],
          correctIndex: 1,
          explanation: "Có mốc thời gian quá khứ xác định 'last weekend' → dùng Quá khứ đơn: saw."
        },
        {
          question: "Have you ______ eaten sushi?",
          options: ["ever", "yesterday", "ago", "last"],
          correctIndex: 0,
          explanation: "'Have you ever + V3...?' là cấu trúc hỏi về trải nghiệm (Bạn đã bao giờ... chưa?)."
        },
        {
          question: "They haven't finished their homework ______.",
          options: ["already", "just", "yet", "since"],
          correctIndex: 2,
          explanation: "'Yet' (chưa) đứng ở cuối câu phủ định hoặc câu hỏi trong thì Hiện tại hoàn thành."
        }
      ]
    },
    {
      id: "g7-eng-2",
      grade: "7",
      subject: "eng",
      title: "So sánh hơn, So sánh nhất & So sánh bằng",
      summary: "Cách so sánh tính từ ngắn, tính từ dài và cấu trúc 'as... as' trong tiếng Anh lớp 7.",
      duration: "15 phút",
      sections: [
        {
          icon: "📏",
          heading: "1. Công thức so sánh chuẩn",
          grid: [
            { title: "So sánh bằng", detail: "as + adj + as (ví dụ: as tall as, not as expensive as)" },
            { title: "So sánh hơn (2 đối tượng)", detail: "Ngắn: adj-er + than | Dài: more + adj + than" },
            { title: "So sánh nhất (≥ 3 đối tượng)", detail: "Ngắn: the adj-est | Dài: the most + adj" }
          ]
        },
        {
          icon: "🔊",
          heading: "2. Trường hợp bất quy tắc & Câu mẫu",
          vocab: [
            { word: "good - better - the best", meaning: "tốt - tốt hơn - tốt nhất" },
            { word: "bad - worse - the worst", meaning: "tệ - tệ hơn - tệ nhất" },
            { word: "This book is more interesting than that one.", meaning: "Quyển sách này thú vị hơn quyển kia." },
            { word: "She is the tallest girl in her class.", meaning: "Bạn ấy là cô gái cao nhất lớp." }
          ]
        }
      ],
      parentGuide: {
        goal: "Giúp con phân biệt tính từ ngắn (1 âm tiết, như tall, big) và tính từ dài (từ 2 âm tiết trở lên, như beautiful, expensive).",
        steps: [
          "Cho con so sánh các đồ vật trong nhà: cái bàn và cái ghế, hai quyển sách khác nhau.",
          "Nhấn mạnh quy tắc: Đã có 'more' thì KHÔNG thêm '-er'; đã có 'the most' thì KHÔNG thêm '-est'."
        ],
        mistakes: [
          "Viết sai dạng bất quy tắc thành 'gooder' hoặc 'more good' (đúng là 'better')."
        ],
        realLife: "Hỏi con: 'Which subject is more interesting, Math or English?'"
      },
      quiz: [
        {
          question: "Ha Noi is ______ than my hometown.",
          options: ["big", "biger", "bigger", "more big"],
          correctIndex: 2,
          explanation: "'Big' là tính từ ngắn (1 nguyên âm kẹp giữa 2 phụ âm) nên gấp đôi 'g' thành 'bigger'."
        },
        {
          question: "This exercise is ______ than the previous one.",
          options: ["more difficult", "difficulter", "most difficult", "as difficult"],
          correctIndex: 0,
          explanation: "'Difficult' là tính từ dài (3 âm tiết) nên so sánh hơn dùng 'more difficult than'."
        },
        {
          question: "Who is ______ student in your group?",
          options: ["the better", "best", "the best", "better"],
          correctIndex: 2,
          explanation: "So sánh nhất của 'good' là 'the best' (luôn có 'the')."
        },
        {
          question: "My sister is not ______ tall ______ my mother.",
          options: ["so / than", "as / as", "more / as", "as / than"],
          correctIndex: 1,
          explanation: "Cấu trúc so sánh bằng / không bằng là: (not) as + tính từ + as."
        }
      ]
    },

    // =========================================================
    // LỚP 7 - HÓA HỌC (KHTN 7)
    // =========================================================
    {
      id: "g7-chem-1",
      grade: "7",
      subject: "chem",
      title: "Nguyên tử & Mô hình Rutherford–Bohr",
      summary: "Khám phá cấu tạo bên trong của hạt nhỏ bé tạo nên mọi vật chất quanh ta.",
      duration: "16 phút",
      sections: [
        {
          icon: "⚛️",
          heading: "1. Cấu tạo của một Nguyên tử",
          text: "Nguyên tử là hạt vô cùng nhỏ và trung hòa về điện, gồm 2 phần:",
          diagram: {
            caption: "Mô hình Rutherford–Bohr của nguyên tử Carbon (6 proton + ở nhân, 6 electron - ở 2 lớp vỏ)",
            svg: `<svg viewBox="0 0 240 180" width="220" xmlns="http://www.w3.org/2000/svg">
              <circle cx="120" cy="90" r="72" fill="none" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4,3"/>
              <circle cx="120" cy="90" r="42" fill="none" stroke="#94a3b8" stroke-width="1.8"/>
              <circle cx="120" cy="90" r="18" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
              <text x="108" y="95" font-size="12" font-weight="800" fill="#dc2626">+6</text>
              <circle cx="120" cy="48" r="5.5" fill="#2563eb"/><circle cx="120" cy="132" r="5.5" fill="#2563eb"/>
              <circle cx="120" cy="18" r="5.5" fill="#2563eb"/><circle cx="120" cy="162" r="5.5" fill="#2563eb"/>
              <circle cx="48" cy="90" r="5.5" fill="#2563eb"/><circle cx="192" cy="90" r="5.5" fill="#2563eb"/>
            </svg>`
          },
          grid: [
            { title: "Hạt nhân (ở tâm)", detail: "Gồm hạt Proton (mang điện tích dương +) và Neutron (không mang điện)." },
            { title: "Vỏ nguyên tử (xung quanh)", detail: "Gồm các hạt Electron (mang điện tích âm -) chuyển động theo từng lớp." }
          ]
        },
        {
          icon: "🎯",
          heading: "2. Quy tắc vàng để nhớ",
          formula: "Số hạt Proton (p)  =  Số hạt Electron (e)   (nên nguyên tử trung hòa điện)",
          bullets: [
            "Lớp electron trong cùng (lớp 1): chứa tối đa 2 electron.",
            "Lớp thứ 2: chứa tối đa 8 electron.",
            "Khối lượng nguyên tử tập trung hầu hết ở hạt nhân (≈ số p + số n, tính bằng đơn vị amu)."
          ]
        }
      ],
      parentGuide: {
        goal: "Giúp con hình dung nguyên tử giống như Hệ Mặt Trời: Hạt nhân là Mặt Trời ở giữa, các Electron là các hành tinh quay xung quanh.",
        steps: [
          "Vẽ 1 vòng tròn nhỏ ở giữa (ghi +), vẽ các vòng tròn đồng tâm bên ngoài rồi chấm các hạt electron lên.",
          "Ví dụ với Carbon có 6e: lớp trong vẽ 2 chấm, lớp ngoài vẽ 4 chấm. Con tự vẽ sẽ nhớ rất nhanh!"
        ],
        mistakes: [
          "Nhầm lẫn dấu điện tích của Proton (+), Neutron (0) và Electron (-).",
          "Quên mất lớp trong cùng chỉ chứa tối đa 2 electron."
        ],
        realLife: "Giải thích cho con: Mọi thứ từ chiếc bút, giọt nước đến cơ thể chúng ta đều được xếp từ hàng tỉ tỉ nguyên tử."
      },
      quiz: [
        {
          question: "Hạt nhân nguyên tử được tạo thành từ những loại hạt nào?",
          options: [
            "Proton và Electron",
            "Proton và Neutron",
            "Neutron và Electron",
            "Chỉ có Electron"
          ],
          correctIndex: 1,
          explanation: "Hạt nhân nằm ở tâm gồm Proton (+) và Neutron (không mang điện); Electron (-) nằm ở lớp vỏ."
        },
        {
          question: "Vì sao nguyên tử luôn trung hòa về điện?",
          options: [
            "Vì số hạt proton bằng số hạt neutron",
            "Vì số hạt proton (+) luôn bằng số hạt electron (-)",
            "Vì nguyên tử không có hạt mang điện",
            "Vì neutron hút hết điện"
          ],
          correctIndex: 1,
          explanation: "Số điện tích dương (p) bằng số điện tích âm (e) nên tổng điện tích bằng 0."
        },
        {
          question: "Nguyên tử Oxygen có 8 electron. Số electron ở lớp trong cùng và lớp thứ 2 lần lượt là:",
          options: ["4 và 4", "2 và 6", "1 và 7", "8 và 0"],
          correctIndex: 1,
          explanation: "Lớp 1 chứa tối đa 2 electron, 6 electron còn lại xếp vào lớp thứ 2."
        },
        {
          question: "Khối lượng của nguyên tử tập trung chủ yếu ở đâu?",
          options: ["Lớp vỏ electron", "Hạt nhân nguyên tử", "Khoảng trống giữa vỏ và nhân", "Lớp electron ngoài cùng"],
          correctIndex: 1,
          explanation: "Khối lượng của electron rất nhỏ không đáng kể so với proton và neutron ở hạt nhân."
        }
      ]
    },
    {
      id: "g7-chem-2",
      grade: "7",
      subject: "chem",
      title: "Nguyên tố hóa học, Bảng tuần hoàn & Hóa trị",
      summary: "Cách đọc ký hiệu hóa học (H, O, C, Fe...) và lập công thức hóa học bằng quy tắc hóa trị.",
      duration: "18 phút",
      sections: [
        {
          icon: "🧪",
          heading: "1. Ký hiệu hóa học cần thuộc lòng",
          text: "Nguyên tố hóa học là tập hợp những nguyên tử cùng loại có cùng số proton trong hạt nhân. Chữ cái đầu viết HOA, chữ thứ hai (nếu có) viết thường.",
          grid: [
            { title: "H (Hydrogen) • O (Oxygen)", detail: "Khí nhẹ nhất (H) và khí duy trì sự sống (O)" },
            { title: "C (Carbon) • N (Nitrogen)", detail: "Có nhiều trong than, không khí (N₂ chiếm 78%)" },
            { title: "Na (Sodium) • Cl (Chlorine)", detail: "Kết hợp tạo muối ăn (NaCl)" },
            { title: "Fe (Iron) • Cu (Copper)", detail: "Sắt (Fe) và Đồng (Cu)" }
          ]
        },
        {
          icon: "📐",
          heading: "2. Quy tắc Hóa trị (Cực quan trọng)",
          formula: "Hợp chất AₓBᵧ (với hóa trị a, b)  ⇒  x · a  =  y · b",
          tip: "Mẹo lập nhanh công thức: Đổi chéo hóa trị xuống làm chỉ số rồi rút gọn tối giản! Ví dụ: Al (III) và O (II) → Al₂O₃."
        }
      ],
      parentGuide: {
        goal: "Giúp con thuộc các ký hiệu hóa học phổ biến như chơi thẻ bài, không bị sợ công thức hóa học.",
        steps: [
          "Làm 10 tấm thẻ nhỏ: mặt trước ghi 'Fe', mặt sau ghi 'Sắt - Hóa trị II, III'. Mỗi ngày đố con 5 phút.",
          "Luyện quy tắc 'đổi chéo hóa trị': Nếu 2 hóa trị bằng nhau (như Ca II và O II) thì triệt tiêu thành CaO (không viết Ca₂O₂)."
        ],
        mistakes: [
          "Viết sai chữ hoa/thường: ví dụ viết 'CL' hoặc 'co' thay vì 'Cl' (Clo) hoặc 'CO' (khí cacbon oxit).",
          "Quên rút gọn chỉ số khi đổi chéo hóa trị (ví dụ C IV và O II phải rút gọn thành CO₂, không để C₂O₄)."
        ],
        realLife: "Đọc thành phần trên chai nước khoáng hoặc hộp sữa (Canxi Ca, Natri Na, Magie Mg) để con thấy Hóa học ngay quanh mình."
      },
      quiz: [
        {
          question: "Ký hiệu hóa học nào sau đây viết ĐÚNG quy tắc?",
          options: ["na", "CL", "Fe", "cA"],
          correctIndex: 2,
          explanation: "Quy tắc ký hiệu hóa học: Chữ cái đầu viết HOA, chữ cái thứ hai viết thường → Fe (Sắt)."
        },
        {
          question: "Nguyên tố hóa học được đặc trưng bởi yếu tố nào?",
          options: ["Số neutron", "Số proton trong hạt nhân", "Kích thước bên ngoài", "Màu sắc"],
          correctIndex: 1,
          explanation: "Các nguyên tử có cùng số proton trong hạt nhân đều thuộc cùng một nguyên tố hóa học."
        },
        {
          question: "Biết Nhôm (Al) có hóa trị III và Oxygen (O) có hóa trị II. Công thức hóa học đúng của hợp chất tạo bởi Al và O là:",
          options: ["AlO", "Al₃O₂", "Al₂O₃", "Al₂O"],
          correctIndex: 2,
          explanation: "Áp dụng quy tắc đổi chéo hóa trị: Al hóa trị III, O hóa trị II ⇒ công thức là Al₂O₃."
        },
        {
          question: "Trong công thức hóa học của khí Carbon dioxide (CO₂), biết O có hóa trị II. Hóa trị của Carbon (C) là:",
          options: ["I", "II", "III", "IV"],
          correctIndex: 3,
          explanation: "Theo quy tắc hóa trị: 1 · a = 2 · II ⇒ a = IV. Vậy Carbon có hóa trị IV."
        }
      ]
    },

    // =========================================================
    // BÀI HỌC BỔ SUNG MỚI — LỚP 5 (TOÁN, VĂN, ANH, KHOA HỌC)
    // =========================================================
    {
      id: "g5-math-4",
      grade: "5",
      subject: "math",
      title: "Toán Chuyển động đều: Vận tốc, Quãng đường & Thời gian",
      summary: "Thuộc lòng 3 công thức v, s, t chỉ bằng một hình tam giác thần kỳ và cách đổi đơn vị thời gian.",
      duration: "18 phút",
      sections: [
        {
          icon: "🚗",
          heading: "1. Tam giác thần kỳ S - V - T (Không bao giờ quên công thức)",
          text: "Quãng đường (s) luôn nằm trên đỉnh tam giác; Vận tốc (v) và Thời gian (t) nằm ở hai góc đáy. Muốn tìm đại lượng nào, chỉ cần lấy tay che đại lượng đó lại!",
          diagram: {
            caption: "Che s → lấy v × t  |  Che v → lấy s : t  |  Che t → lấy s : v",
            svg: `<svg viewBox="0 0 300 165" width="280" xmlns="http://www.w3.org/2000/svg">
              <polygon points="150,15 45,150 255,150" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/>
              <line x1="98" y1="82" x2="202" y2="82" stroke="#2563eb" stroke-width="2"/>
              <line x1="150" y1="82" x2="150" y2="150" stroke="#2563eb" stroke-width="2"/>
              <text x="142" y="65" font-size="22" font-weight="800" fill="#e11d48">s</text>
              <text x="105" y="130" font-size="22" font-weight="800" fill="#1e40af">v</text>
              <text x="143" y="128" font-size="18" font-weight="800" fill="#64748b">×</text>
              <text x="182" y="130" font-size="22" font-weight="800" fill="#059669">t</text>
            </svg>`
          },
          formula: "Quãng đường: s = v × t   |   Vận tốc: v = s : t   |   Thời gian: t = s : v"
        },
        {
          icon: "⏱️",
          heading: "2. Lưu ý vàng về đổi đơn vị Thời gian",
          text: "Nhiều bạn làm sai vì lấy 1 giờ 30 phút viết thành 1,3 giờ (SAI!). Vì 1 giờ = 60 phút nên phải lấy số phút chia 60:",
          grid: [
            { title: "15 phút = 0,25 giờ", detail: "Vì 15 : 60 = 1/4 = 0,25 giờ" },
            { title: "30 phút = 0,5 giờ", detail: "Vì 30 : 60 = 1/2 = 0,5 giờ (rưỡi)" },
            { title: "45 phút = 0,75 giờ", detail: "Vì 45 : 60 = 3/4 = 0,75 giờ" }
          ],
          workedExample: {
            title: "Ví dụ: Một ô tô đi với vận tốc 50 km/giờ trong 1 giờ 30 phút. Tính quãng đường?",
            steps: [
              "Bước 1: Đổi 1 giờ 30 phút = 1,5 giờ.",
              "Bước 2: Quãng đường ô tô đi được là: s = v × t = 50 × 1,5 = 75 (km)."
            ]
          }
        }
      ],
      parentGuide: {
        goal: "Giúp con nắm chắc mối quan hệ giữa Quãng đường, Vận tốc, Thời gian và không mắc bẫy đổi phút sang giờ.",
        steps: [
          "Vẽ hình tam giác S ở trên, V và T ở dưới lên góc bàn học của con.",
          "Đố nhanh con cách đổi giờ: '1 giờ 15 phút là mấy phẩy mấy giờ?' (1,25 giờ)."
        ],
        mistakes: [
          "Đổi sai 1 giờ 30 phút thành 1,3 giờ thay vì 1,5 giờ.",
          "Không kiểm tra sự tương ứng đơn vị (vận tốc là km/giờ nhưng thời gian lại để là phút)."
        ],
        realLife: "Khi chở con đi học hoặc đi chơi, chỉ vào đồng hồ công-tơ-mét (ví dụ 40 km/giờ) và đố con: 'Đi 30 phút với tốc độ này thì đi được bao nhiêu km?'"
      },
      quiz: [
        {
          question: "Một người đi xe đạp trong 2 giờ được quãng đường 24 km. Vận tốc của người đó là:",
          options: ["48 km/giờ", "12 km/giờ", "22 km/giờ", "14 km/giờ"],
          correctIndex: 1,
          explanation: "Áp dụng công thức v = s : t = 24 : 2 = 12 (km/giờ)."
        },
        {
          question: "Đổi 2 giờ 15 phút ra đơn vị giờ (số thập phân) ta được:",
          options: ["2,15 giờ", "2,25 giờ", "2,5 giờ", "2,45 giờ"],
          correctIndex: 1,
          explanation: "Ta có 15 phút = 15 : 60 = 0,25 giờ. Vậy 2 giờ 15 phút = 2,25 giờ."
        },
        {
          question: "Một ô tô chạy với vận tốc 60 km/giờ trong 1,5 giờ. Quãng đường ô tô đi được là:",
          options: ["40 km", "75 km", "90 km", "120 km"],
          correctIndex: 2,
          explanation: "Quãng đường s = v × t = 60 × 1,5 = 90 (km)."
        },
        {
          question: "Quãng đường từ nhà đến trường dài 6 km. Bạn Nam đi xe đạp với vận tốc 12 km/giờ thì hết bao nhiêu phút?",
          options: ["2 giờ", "30 phút", "20 phút", "50 phút"],
          correctIndex: 1,
          explanation: "Thời gian t = s : v = 6 : 12 = 0,5 giờ = 30 phút."
        }
      ]
    },
    {
      id: "g5-math-5",
      grade: "5",
      subject: "math",
      title: "Hình hộp chữ nhật & Hình lập phương (Diện tích & Thể tích)",
      summary: "Phân biệt diện tích xung quanh, diện tích toàn phần và thể tích qua mô hình chiếc hộp quà.",
      duration: "18 phút",
      sections: [
        {
          icon: "📦",
          heading: "1. Hình hộp chữ nhật (Dài a, Rộng b, Cao c)",
          text: "Hãy tưởng tượng căn phòng học hoặc chiếc hộp sữa: có 4 mặt bên xung quanh và 2 mặt đáy (trên, dưới).",
          diagram: {
            caption: "Hình hộp chữ nhật có chiều dài a, chiều rộng b và chiều cao c",
            svg: `<svg viewBox="0 0 300 160" width="280" xmlns="http://www.w3.org/2000/svg">
              <polygon points="50,55 190,55 240,25 100,25" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
              <rect x="50" y="55" width="140" height="80" fill="#eff6ff" stroke="#2563eb" stroke-width="2.2"/>
              <polygon points="190,55 240,25 240,105 190,135" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
              <text x="110" y="152" font-size="13" font-weight="800" fill="#1e40af">a (dài)</text>
              <text x="218" y="128" font-size="13" font-weight="800" fill="#059669">b (rộng)</text>
              <text x="246" y="70" font-size="13" font-weight="800" fill="#e11d48">c (cao)</text>
            </svg>`
          },
          formula: "S_xq = (a + b) × 2 × c   |   S_tp = S_xq + (a × b × 2)   |   Thể tích V = a × b × c"
        },
        {
          icon: "🎲",
          heading: "2. Hình lập phương (6 mặt đều là hình vuông cạnh a)",
          text: "Hình lập phương giống khối Rubik: 6 mặt là 6 hình vuông bằng nhau.",
          formula: "S_xq = (a × a) × 4   |   S_tp = (a × a) × 6   |   Thể tích V = a × a × a",
          tip: "Chú ý thực tế: Nếu đề bài nói 'cái bể cá không có nắp' hoặc 'quét sơn căn phòng (không sơn sàn)', thì diện tích đáy chỉ cộng 1 lần (a × b) thay vì nhân 2!"
        }
      ],
      parentGuide: {
        goal: "Giúp con hình dung trực quan trên vỏ hộp sữa hoặc hộp bánh để không nhầm diện tích 1 mặt với diện tích xung quanh.",
        steps: [
          "Cầm 1 vỏ hộp bánh hình chữ nhật: chỉ cho con 4 mặt đứng là 'xung quanh', mặt trên và mặt dưới là '2 đáy'.",
          "Đố con: 'Nếu làm cái thùng tôn không nắp thì có mấy mặt đáy?' (Chỉ có 1 mặt đáy dưới)."
        ],
        mistakes: [
          "Tính diện tích toàn phần bể cá KHÔNG NẮP nhưng vẫn nhân 2 diện tích đáy.",
          "Nhầm đơn vị thể tích (cm³, dm³, m³) với đơn vị diện tích (cm², m²). Nhớ: 1 dm³ = 1 lít nước."
        ],
        realLife: "Cùng con đọc thể tích ghi trên hộp sữa tươi (1 lít = 1 dm³) và đo thử kích thước hộp."
      },
      quiz: [
        {
          question: "Thể tích của hình hộp chữ nhật có chiều dài 5 cm, chiều rộng 4 cm, chiều cao 3 cm là:",
          options: ["60 cm²", "60 cm³", "27 cm³", "47 cm³"],
          correctIndex: 1,
          explanation: "Thể tích V = a × b × c = 5 × 4 × 3 = 60 (cm³)."
        },
        {
          question: "Một hình lập phương có cạnh dài 4 cm. Diện tích TOÀN PHẦN của hình lập phương đó là:",
          options: ["64 cm²", "96 cm²", "16 cm²", "24 cm²"],
          correctIndex: 1,
          explanation: "Diện tích 1 mặt là 4 × 4 = 16 cm². Diện tích toàn phần (6 mặt) là: 16 × 6 = 96 cm²."
        },
        {
          question: "Đổi đơn vị: 1 dm³ bằng bao nhiêu lít nước?",
          options: ["10 lít", "100 lít", "1 lít", "0,1 lít"],
          correctIndex: 2,
          explanation: "Trong thực tế, 1 đề-xi-mét khối (1 dm³) chính bằng đúng 1 lít (1L)."
        },
        {
          question: "Một bể cá dạng hình hộp chữ nhật KHÔNG CÓ NẮP có diện tích xung quanh là 50 dm², diện tích mặt đáy là 20 dm². Diện tích kính dùng làm bể cá là:",
          options: ["70 dm²", "90 dm²", "100 dm²", "30 dm²"],
          correctIndex: 0,
          explanation: "Vì bể không có nắp nên chỉ có 1 mặt đáy: S = S_xq + S_đáy = 50 + 20 = 70 dm²."
        }
      ]
    },
    {
      id: "g5-van-3",
      grade: "5",
      subject: "van",
      title: "Liên kết câu (Phép lặp, Phép thế, Phép nối) & Văn tả người",
      summary: "Nhận diện 3 cách liên kết các câu trong đoạn văn và bí quyết tả ngoại hình, hoạt động sinh động.",
      duration: "15 phút",
      sections: [
        {
          icon: "🔗",
          heading: "1. Ba phép liên kết câu trong đoạn văn",
          text: "Để các câu trong đoạn văn gắn bó chặt chẽ với nhau, ta dùng 3 phép liên kết sau:",
          grid: [
            { title: "1. Phép lặp từ ngữ", detail: "Lặp lại ở câu sau từ ngữ đã có ở câu trước để nhấn mạnh chủ đề." },
            { title: "2. Phép thế từ ngữ", detail: "Thay bằng đại từ (nó, họ, bác ấy...) hoặc từ đồng nghĩa để câu văn không bị lặp nhàm chán." },
            { title: "3. Phép nối", detail: "Dùng từ nối ở đầu câu sau: Nhưng, Tuy nhiên, Vì vậy, Hơn nữa, Sau đó..." }
          ]
        },
        {
          icon: "👩‍🏫",
          heading: "2. Bí quyết viết bài văn Tả người (Ông bà, Bố mẹ, Thầy cô, Bạn bè)",
          bullets: [
            "Tả ngoại hình: Chọn 2-3 nét nổi bật nhất (mái tóc, đôi mắt, nụ cười, bàn tay) thay vì liệt kê tất cả.",
            "Tả hoạt động & tính tình: Kết hợp tả người đó đang làm việc quen thuộc (mẹ nấu ăn, cô giáo viết bảng) và 1 kỷ niệm nhỏ đáng nhớ với em."
          ]
        }
      ],
      parentGuide: {
        goal: "Giúp con làm đúng câu hỏi 'Hai câu văn trên liên kết với nhau bằng cách nào?' trong đề thi Tiếng Việt lớp 5.",
        steps: [
          "Hướng dẫn con tìm từ ở câu thứ 2 xem nó giống hệt câu 1 (phép lặp), thay thế cho tên riêng ở câu 1 (phép thế), hay đứng đầu câu 2 để nối (phép nối).",
          "Khi viết văn tả người, khuyến khích con quan sát thật ngoài đời (ví dụ đôi bàn tay của mẹ hay nụ cười của bà)."
        ],
        mistakes: [
          "Nhầm lẫn giữa 'lặp từ do nghèo vốn từ' với 'phép lặp có chủ đích để liên kết câu'."
        ],
        realLife: "Cùng con đọc một đoạn truyện ngắn và đố con tìm các từ 'cậu ấy', 'chú mèo đó' xem chúng thay thế cho từ nào ở câu trước."
      },
      quiz: [
        {
          question: "Trong hai câu: 'Lan rất chăm đọc sách. Bạn ấy thường đến thư viện mỗi chiều.', từ 'Bạn ấy' sử dụng phép liên kết nào?",
          options: ["Phép lặp", "Phép thế", "Phép nối", "Phép so sánh"],
          correctIndex: 1,
          explanation: "Từ 'Bạn ấy' ở câu 2 dùng để thay thế cho danh từ riêng 'Lan' ở câu 1 → đây là phép thế."
        },
        {
          question: "Trong hai câu: 'Trời đã khuya. Nhưng mẹ vẫn miệt mài bên bàn làm việc.', từ 'Nhưng' thuộc phép liên kết nào?",
          options: ["Phép nối", "Phép lặp", "Phép thế", "Phép nhân hóa"],
          correctIndex: 0,
          explanation: "Quan hệ từ 'Nhưng' đứng đầu câu 2 dùng để nối câu 2 với câu 1 → phép nối."
        },
        {
          question: "Khi viết văn tả người, để bài văn sinh động và chân thực, em nên:",
          options: [
            "Chỉ tả ngoại hình, không tả hoạt động",
            "Chọn lọc các chi tiết tiêu biểu về ngoại hình kết hợp tả hoạt động, tính tình và kỷ niệm",
            "Chép nguyên văn bài văn mẫu",
            "Chỉ kể một câu chuyện mà không tả nét nào"
          ],
          correctIndex: 1,
          explanation: "Kết hợp hài hòa giữa ngoại hình tiêu biểu và hoạt động, tính cách sẽ giúp hình ảnh người được tả hiện lên sống động."
        },
        {
          question: "Hai câu: 'Đền Thượng nằm chót vót trên đỉnh núi Nghĩa Lĩnh. Trước đền, những khóm hải đường đâm bông rực đỏ.' liên kết với nhau bằng:",
          options: ["Phép thế", "Phép nối", "Phép lặp từ 'đền'", "Không có liên kết"],
          correctIndex: 2,
          explanation: "Câu 2 lặp lại từ 'đền' đã xuất hiện ở câu 1 → phép lặp từ ngữ."
        }
      ]
    },
    {
      id: "g5-eng-3",
      grade: "5",
      subject: "eng",
      title: "Tương lai đơn (Will) & Hỏi thăm Sức khỏe, Thời tiết",
      summary: "Cách nói về dự đoán tương lai (will / won't) và các mẫu câu giao tiếp chủ đề Health & Weather.",
      duration: "15 phút",
      sections: [
        {
          icon: "🌤️",
          heading: "1. Thì Tương lai đơn (Future Simple với WILL)",
          text: "Dùng để nói về việc sẽ xảy ra trong tương lai (tomorrow, next week, this weekend).",
          formula: "(+) S + will + V (nguyên mẫu)   |   (-) S + won't + V   |   (?) Will + S + V?",
          vocab: [
            { word: "I think we will go to the beach tomorrow.", meaning: "Mình nghĩ ngày mai chúng mình sẽ đi biển." },
            { word: "What will the weather be like tomorrow?", meaning: "Thời tiết ngày mai sẽ như thế nào?" },
            { word: "It will be hot and sunny.", meaning: "Trời sẽ nóng và có nắng." }
          ]
        },
        {
          icon: "🩺",
          heading: "2. Hỏi thăm sức khỏe & Đưa ra lời khuyên (Should / Shouldn't)",
          vocab: [
            { word: "What's the matter with you?", meaning: "Bạn bị làm sao thế?" },
            { word: "I have a headache and a fever.", meaning: "Mình bị đau đầu và sốt." },
            { word: "You should take a rest and drink warm water.", meaning: "Bạn nên nghỉ ngơi và uống nước ấm." },
            { word: "You shouldn't eat too much ice cream.", meaning: "Bạn không nên ăn quá nhiều kem." }
          ]
        }
      ],
      parentGuide: {
        goal: "Giúp con nhớ quy tắc vàng: Sau 'will', 'won't', 'should', 'shouldn't' thì động từ LUÔN GIỮ NGUYÊN (không thêm s, ed hay ing).",
        steps: [
          "Cùng con bấm nút 'Nghe' từng câu mẫu và đóng vai Bác sĩ - Bệnh nhân bằng tiếng Anh.",
          "Hỏi con kế hoạch cuối tuần này: 'Where will we go this Sunday?'"
        ],
        mistakes: [
          "Thêm 'to' sau will hoặc should (ví dụ viết 'will to go' hoặc 'should to rest' là SAI)."
        ],
        realLife: "Mỗi sáng mở cửa sổ, hỏi con: 'What's the weather like today?' (It's sunny / cloudy / rainy / cool)."
      },
      quiz: [
        {
          question: "My family ______ visit Da Lat next month.",
          options: ["will", "went", "goes", "going"],
          correctIndex: 0,
          explanation: "Có 'next month' (tháng tới - tương lai) và động từ nguyên mẫu 'visit' nên điền 'will'."
        },
        {
          question: "A: 'What's the matter with you?' — B: 'I have a toothache.' — A: 'You ______ go to the dentist.'",
          options: ["shouldn't", "should", "did", "are"],
          correctIndex: 1,
          explanation: "Khi bị đau răng (toothache), lời khuyên hợp lý là 'You should go to the dentist' (Bạn nên đi khám nha sĩ)."
        },
        {
          question: "What ______ the weather be like tomorrow?",
          options: ["is", "was", "will", "does"],
          correctIndex: 2,
          explanation: "Hỏi thời tiết ngày mai (tomorrow) dùng cấu trúc: 'What will the weather be like tomorrow?'"
        },
        {
          question: "Chọn câu viết ĐÚNG ngữ pháp:",
          options: [
            "She will goes to the party.",
            "She will to go to the party.",
            "She will go to the party.",
            "She wills go to the party."
          ],
          correctIndex: 2,
          explanation: "Sau 'will', động từ luôn ở dạng nguyên mẫu không chia ('will go')."
        }
      ]
    },
    {
      id: "g5-chem-3",
      grade: "5",
      subject: "chem",
      title: "Sự cháy, Khí Oxygen & Phòng chống cháy nổ",
      summary: "Hiểu vì sao ngọn nến tắt khi úp cốc thủy tinh và 3 điều kiện tạo nên sự cháy.",
      duration: "12 phút",
      sections: [
        {
          icon: "🕯️",
          heading: "1. Thí nghiệm ngọn nến & Vai trò của khí Oxygen",
          text: "Trong không khí có khoảng 78% khí Nitrogen, 21% khí Oxygen và 1% các khí khác. Khí Oxygen là chất duy trì sự hô hấp và sự cháy!",
          grid: [
            { title: "Khi úp cốc kín lên ngọn nến", detail: "Nến cháy yếu dần rồi tắt hẳn vì khí Oxygen bên trong cốc đã bị dùng hết." },
            { title: "Sản phẩm của sự cháy", detail: "Khi gỗ, giấy, xăng dầu cháy sẽ sinh ra khí Carbon dioxide (CO₂), hơi nước và nhiệt." }
          ]
        },
        {
          icon: "🧯",
          heading: "2. Cách dập tắt đám cháy an toàn",
          bullets: [
            "Muốn dập tắt lửa, ta phải: (1) Hạ nhiệt độ xuống, hoặc (2) Ngăn không cho chất cháy tiếp xúc với khí Oxygen (như trùm chăn ướt, phun bọt chữa cháy, phủ cát).",
            "Tuyệt đối KHÔNG tạt nước vào đám cháy xăng dầu hoặc đám cháy đang có điện!"
          ]
        }
      ],
      parentGuide: {
        goal: "Vừa giúp con hiểu kiến thức Khoa học - Hóa học lớp 5, vừa trang bị kỹ năng an toàn phòng cháy chữa cháy trong gia đình.",
        steps: [
          "Giải thích cho con: 'Khi quạt bếp than, ta thổi thêm không khí (Oxygen) vào nên than bùng cháy mạnh hơn'.",
          "Hỏi con số điện thoại cứu hỏa khẩn cấp là số mấy (114) và cách thoát hiểm khi có khói (cúi thấp người, dùng khăn ướt che mũi miệng)."
        ],
        mistakes: [
          "Tưởng rằng khí nhiều nhất trong không khí là Oxygen (thực tế Nitrogen chiếm tới 78%, Oxygen chiếm 21%)."
        ],
        realLife: "Chỉ cho con vị trí bình chữa cháy và cầu dao điện tổng trong nhà."
      },
      quiz: [
        {
          question: "Khí nào trong không khí đóng vai trò quyết định để duy trì sự cháy và sự hô hấp?",
          options: ["Khí Nitrogen (Ni-tơ)", "Khí Oxygen (O-xi)", "Khí Carbon dioxide", "Hơi nước"],
          correctIndex: 1,
          explanation: "Khí Oxygen cần thiết cho sự hô hấp của sinh vật và duy trì sự cháy."
        },
        {
          question: "Vì sao khi úp một chiếc cốc thủy tinh kín lên ngọn nến đang cháy, một lát sau ngọn nến lại bị tắt?",
          options: [
            "Vì cốc thủy tinh làm lạnh ngọn nến",
            "Vì lượng khí Oxygen trong cốc đã bị tiêu thụ hết",
            "Vì ánh sáng không vào được",
            "Vì sáp nến tự biến mất"
          ],
          correctIndex: 1,
          explanation: "Sự cháy cần khí Oxygen; khi úp kín cốc, Oxygen trong cốc cạn hết nên nến tắt."
        },
        {
          question: "Trong không khí sạch, khí nào chiếm tỉ lệ lớn nhất (khoảng 78%)?",
          options: ["Khí Oxygen (21%)", "Khí Nitrogen (78%)", "Khí Carbon dioxide", "Khí Hydrogen"],
          correctIndex: 1,
          explanation: "Không khí gồm khoảng 78% khí Nitrogen, 21% khí Oxygen và 1% các khí khác."
        },
        {
          question: "Khi chẳng may chảo dầu ăn trên bếp bị bốc lửa, cách xử lý nào AN TOÀN và ĐÚNG khoa học nhất?",
          options: [
            "Đổ ngay một ca nước lạnh vào chảo dầu",
            "Tắt bếp và dùng nắp vung đậy kín mặt chảo để ngăn khí Oxygen",
            "Quạt thật mạnh vào chảo",
            "Đổ thêm dầu ăn vào"
          ],
          correctIndex: 1,
          explanation: "Đậy kín nắp vung giúp cắt nguồn cung cấp khí Oxygen làm lửa tắt ngay. Tuyệt đối không đổ nước vào dầu đang cháy vì sẽ làm dầu bắn tung tóe!"
        }
      ]
    },

    // =========================================================
    // BÀI HỌC BỔ SUNG MỚI — LỚP 7 (TOÁN, VĂN, ANH, KHTN HÓA)
    // =========================================================
    {
      id: "g7-math-6",
      grade: "7",
      subject: "math",
      title: "Biểu thức đại số & Đa thức một biến (Bậc, Hệ số, Nghiệm)",
      summary: "Làm chủ đa thức một biến: cách sắp xếp theo lũy thừa giảm dần, tìm bậc, hệ số và nghiệm của đa thức.",
      duration: "20 phút",
      sections: [
        {
          icon: "🧮",
          heading: "1. Đa thức một biến, Bậc và Hệ số",
          text: "Đa thức một biến (thường ký hiệu P(x), Q(x)) là tổng của những đơn thức của cùng một biến x.",
          grid: [
            { title: "Bậc của đa thức (đã thu gọn)", detail: "Là số mũ CAO NHẤT của biến x trong đa thức đó." },
            { title: "Hệ số cao nhất", detail: "Là con số đứng ngay trước lũy thừa có số mũ cao nhất." },
            { title: "Hệ số tự do", detail: "Là số hạng không chứa chữ x (tương ứng x⁰)." }
          ],
          workedExample: {
            title: "Ví dụ: Cho đa thức P(x) = 3x² - 5x³ + 7 + 2x",
            steps: [
              "Bước 1 (Sắp xếp giảm dần): P(x) = -5x³ + 3x² + 2x + 7.",
              "Bước 2 (Xác định): Bậc của P(x) là 3 (vì mũ cao nhất là x³). Hệ số cao nhất là -5. Hệ số tự do là 7."
            ]
          }
        },
        {
          icon: "🎯",
          heading: "2. Nghiệm của đa thức một biến",
          formula: "Nếu tại x = a, đa thức P(x) có giá trị bằng 0 (tức là P(a) = 0) thì a gọi là NGHIỆM của đa thức P(x).",
          tip: "Muốn tìm nghiệm của đa thức P(x), ta chỉ cần cho P(x) = 0 rồi giải bài toán tìm x!"
        }
      ],
      parentGuide: {
        goal: "Giúp con không bị mất điểm ở các câu hỏi lý thuyết rất dễ trong đề thi Học kỳ 2 lớp 7 (tìm bậc, hệ số cao nhất, hệ số tự do).",
        steps: [
          "Nhắc con quy tắc số 1: Trước khi tìm Bậc hay Hệ số cao nhất, BẮT BUỘC phải thu gọn đa thức (cộng trừ các hạng tử cùng số mũ) và sắp xếp từ mũ to xuống mũ nhỏ.",
          "Luyện cho con thay số x vào đa thức để kiểm tra nghiệm."
        ],
        mistakes: [
          "Chưa thu gọn đa thức đã vội kết luận bậc (ví dụ: 2x³ + 5x - 2x³ rút gọn hết x³ nên bậc chỉ là 1, không phải 3).",
          "Quên dấu trừ (-) đứng trước hệ số (ví dụ trong -5x³ thì hệ số là -5 chứ không phải 5)."
        ],
        realLife: "Tính tiền taxi theo quãng đường x (km): Tiền = 15.000 × x + 10.000 chính là một đa thức bậc nhất theo biến x!"
      },
      quiz: [
        {
          question: "Cho đa thức P(x) = 4x³ - 2x² + 5x - 9. Bậc và hệ số tự do của P(x) lần lượt là:",
          options: ["Bậc 4; hệ số tự do 9", "Bậc 3; hệ số tự do -9", "Bậc 3; hệ số tự do 4", "Bậc 2; hệ số tự do -9"],
          correctIndex: 1,
          explanation: "Số mũ cao nhất của x là 3 nên đa thức có bậc 3. Số hạng không chứa x là -9 (nhớ lấy cả dấu trừ)."
        },
        {
          question: "Thu gọn đa thức Q(x) = 2x² + 3x - 5x² + 1 ta được:",
          options: ["7x² + 3x + 1", "-3x² + 3x + 1", "-3x⁴ + 3x + 1", "3x² + 3x + 1"],
          correctIndex: 1,
          explanation: "Nhóm các hạng tử cùng bậc: (2x² - 5x²) + 3x + 1 = -3x² + 3x + 1."
        },
        {
          question: "Nghiệm của đa thức A(x) = 2x - 6 là:",
          options: ["x = 2", "x = -3", "x = 3", "x = 6"],
          correctIndex: 2,
          explanation: "Cho 2x - 6 = 0 ⇒ 2x = 6 ⇒ x = 3. Kiểm tra lại: A(3) = 2·3 - 6 = 0."
        },
        {
          question: "Tính giá trị của biểu thức M(x) = x² - 3x + 2 tại x = 2:",
          options: ["0", "2", "4", "-2"],
          correctIndex: 0,
          explanation: "Thay x = 2 vào M(x): M(2) = 2² - 3·2 + 2 = 4 - 6 + 2 = 0 (Vậy x = 2 cũng là một nghiệm của M(x))."
        }
      ]
    },
    {
      id: "g7-math-7",
      grade: "7",
      subject: "math",
      title: "Hình học 4: Tam giác cân, Tam giác đều & Đường vuông góc, Đường xiên",
      summary: "Nắm trọn tính chất hai góc ở đáy của tam giác cân và quan hệ giữa góc với cạnh đối diện trong tam giác.",
      duration: "20 phút",
      sections: [
        {
          icon: "⛺",
          heading: "1. Tam giác cân & Tam giác đều",
          text: "Tam giác cân là tam giác có 2 cạnh bên bằng nhau. Khi đó, hai góc ở đáy cũng LUÔN BẰNG NHAU!",
          diagram: {
            caption: "ΔABC cân tại A có AB = AC và hai góc ở đáy B̂ = Ĉ",
            svg: `<svg viewBox="0 0 280 165" width="260" xmlns="http://www.w3.org/2000/svg">
              <polygon points="140,20 55,140 225,140" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/>
              <line x1="90" y1="75" x2="104" y2="83" stroke="#e11d48" stroke-width="2.5"/>
              <line x1="190" y1="75" x2="176" y2="83" stroke="#e11d48" stroke-width="2.5"/>
              <text x="135" y="15" font-size="14" font-weight="800" fill="#1e40af">A (đỉnh)</text>
              <text x="38" y="148" font-size="14" font-weight="800" fill="#e11d48">B</text>
              <text x="232" y="148" font-size="14" font-weight="800" fill="#e11d48">C</text>
              <text x="108" y="132" font-size="13" font-weight="700" fill="#1e40af">B̂ = Ĉ</text>
            </svg>`
          },
          formula: "Trong ΔABC cân tại A:   B̂ = Ĉ = (180° - Â) : 2   |   Â = 180° - 2 × B̂",
          grid: [
            { title: "Tam giác đều", detail: "Có 3 cạnh bằng nhau và 3 góc đều bằng 60°." },
            { title: "Tam giác vuông cân", detail: "Có 1 góc vuông 90° và hai góc nhọn ở đáy đều bằng 45°." }
          ]
        },
        {
          icon: "📏",
          heading: "2. Quan hệ giữa Góc và Cạnh đối diện & Bất đẳng thức tam giác",
          bullets: [
            "Trong một tam giác, góc đối diện với cạnh lớn hơn là góc lớn hơn (và ngược lại: cạnh đối diện với góc lớn hơn là cạnh lớn hơn).",
            "Trong tam giác vuông, cạnh huyền (đối diện góc 90°) là cạnh LỚN NHẤT.",
            "Bất đẳng thức tam giác: Tổng độ dài hai cạnh bất kỳ luôn LỚN HƠN độ dài cạnh còn lại (a + b > c)."
          ]
        }
      ],
      parentGuide: {
        goal: "Giúp con tính nhanh các góc trong tam giác cân và kiểm tra xem 3 đoạn thẳng có ghép được thành tam giác hay không.",
        steps: [
          "Dạy con mẹo kiểm tra 3 cạnh có lập thành tam giác không: Chỉ cần lấy 2 cạnh NHỎ NHẤT cộng lại, nếu LỚN HƠN cạnh dài nhất thì lập được tam giác!",
          "Ví dụ: 3cm, 4cm, 5cm → 3 + 4 = 7 > 5 (Lập được tam giác). Còn 2cm, 3cm, 6cm → 2 + 3 = 5 < 6 (Không ghép tới nhau được)."
        ],
        mistakes: [
          "Nhầm đỉnh cân: Đề bài cho 'ΔABC cân tại B' thì hai cạnh bằng nhau phải là BA = BC và hai góc đáy là Â = Ĉ."
        ],
        realLife: "Lấy 3 chiếc đũa hoặc 3 que tính có độ dài khác nhau cho con xếp thử thành hình tam giác."
      },
      quiz: [
        {
          question: "Cho tam giác ABC cân tại A, biết góc ở đỉnh Â = 40°. Số đo góc ở đáy B̂ là:",
          options: ["40°", "140°", "70°", "80°"],
          correctIndex: 2,
          explanation: "Vì ΔABC cân tại A nên B̂ = Ĉ = (180° - Â) : 2 = (180° - 40°) : 2 = 70°."
        },
        {
          question: "Mỗi góc của một TAM GIÁC ĐỀU có số đo bằng bao nhiêu?",
          options: ["45°", "60°", "90°", "180°"],
          correctIndex: 1,
          explanation: "Tam giác đều có 3 góc bằng nhau và tổng bằng 180°, nên mỗi góc bằng 180° : 3 = 60°."
        },
        {
          question: "Bộ ba độ dài nào dưới đây CÓ THỂ là độ dài ba cạnh của một tam giác?",
          options: [
            "2 cm; 3 cm; 6 cm",
            "3 cm; 4 cm; 7 cm",
            "4 cm; 5 cm; 8 cm",
            "1 cm; 2 cm; 4 cm"
          ],
          correctIndex: 2,
          explanation: "Kiểm tra tổng 2 cạnh nhỏ: 4 + 5 = 9 > 8 (thỏa mãn bất đẳng thức tam giác). Ở các câu kia: 2+3 < 6; 3+4 = 7; 1+2 < 4 nên không tạo thành tam giác."
        },
        {
          question: "Trong tam giác ABC có Â = 80°, B̂ = 60°, Ĉ = 40°. Cạnh lớn nhất của tam giác ABC là:",
          options: ["Cạnh AB", "Cạnh BC", "Cạnh AC", "Ba cạnh bằng nhau"],
          correctIndex: 1,
          explanation: "Góc Â = 80° là góc lớn nhất, mà cạnh đối diện với góc Â là cạnh BC, nên BC là cạnh lớn nhất."
        }
      ]
    },
    {
      id: "g7-van-3",
      grade: "7",
      subject: "van",
      title: "Kho tàng Tục ngữ Việt Nam & Cách nêu cảm nghĩ về tác phẩm",
      summary: "Nắm vững đặc điểm hình thức, nội dung của tục ngữ về thiên nhiên, lao động và con người.",
      duration: "15 phút",
      sections: [
        {
          icon: "🌾",
          heading: "1. Đặc điểm của Tục ngữ",
          text: "Tục ngữ là những câu nói dân gian ngắn gọn, ổn định, có nhịp điệu, hình ảnh, đúc kết kinh nghiệm của nhân dân về thiên nhiên, lao động sản xuất và con người.",
          grid: [
            { title: "Về thiên nhiên & lao động", detail: "'Đêm tháng năm chưa nằm đã sáng / Ngày tháng mười chưa cười đã tối', 'Nhất nước, nhì phân, tam cần, tứ giống'." },
            { title: "Về con người & xã hội", detail: "'Học ăn, học nói, học gói, học mở', 'Uống nước nhớ nguồn', 'Một cây làm chẳng nên non...'." }
          ]
        },
        {
          icon: "💡",
          heading: "2. Phân biệt Nghĩa đen và Nghĩa bóng trong Tục ngữ",
          bullets: [
            "Nghĩa đen (nghĩa trực tiếp): Hình ảnh cụ thể được nhắc tới trong câu (nước, nguồn, quả, kẻ trồng cây...).",
            "Nghĩa bóng (nghĩa hàm ẩn): Bài học đạo lý, lời khuyên sâu sắc về lối sống của con người."
          ]
        }
      ],
      parentGuide: {
        goal: "Giúp con hiểu sâu ý nghĩa các câu tục ngữ quen thuộc và biết vận dụng vào bài viết Nghị luận xã hội lớp 7.",
        steps: [
          "Đố con giải thích tại sao tháng 5 (mùa hè) ngày lại dài đêm lại ngắn, còn tháng 10 (mùa đông) trời lại mau tối.",
          "Khuyến khích con trích dẫn 1 câu tục ngữ vào phần Thân bài khi viết văn nghị luận để bài văn được điểm cao."
        ],
        mistakes: [
          "Nhầm lẫn giữa Tục ngữ (câu trọn vẹn nêu kinh nghiệm/đạo lý) với Thành ngữ (cụm từ cố định chỉ mang tính hình tượng như 'mẹ tròn con vuông')."
        ],
        realLife: "Trò chuyện cùng con về câu 'Ăn quả nhớ kẻ trồng cây' trong dịp lễ Tết hoặc ngày Nhà giáo Việt Nam 20/11."
      },
      quiz: [
        {
          question: "Câu tục ngữ 'Đêm tháng năm chưa nằm đã sáng / Ngày tháng mười chưa cười đã tối' sử dụng biện pháp nghệ thuật nổi bật nào?",
          options: [
            "Nhân hóa",
            "Nói quá (phóng đại) kết hợp đối lập",
            "Hoán dụ",
            "Điệp từ"
          ],
          correctIndex: 1,
          explanation: "Cách nói 'chưa nằm đã sáng', 'chưa cười đã tối' là biện pháp nói quá kết hợp phép đối để nhấn mạnh ngày dài vào mùa hạ và đêm dài vào mùa đông."
        },
        {
          question: "Câu tục ngữ 'Nhất nước, nhì phân, tam cần, tứ giống' đúc kết kinh nghiệm về lĩnh vực gì?",
          options: [
            "Dự báo thời tiết",
            "Trồng trọt và lao động sản xuất nông nghiệp",
            "Giao tiếp ứng xử",
            "Đi biển"
          ],
          correctIndex: 1,
          explanation: "Câu tục ngữ nêu 4 yếu tố quan trọng nhất theo thứ tự ưu tiên trong nghề trồng lúa: Nước, Phân bón, Sự cần cù và Giống cây."
        },
        {
          question: "Câu tục ngữ nào dưới đây khuyên chúng ta phải biết kiên trì, bền bỉ thì mới thành công?",
          options: [
            "Có công mài sắt, có ngày nên kim.",
            "Thương người như thể thương thân.",
            "Đói cho sạch, rách cho thơm.",
            "Tấc đất tấc vàng."
          ],
          correctIndex: 0,
          explanation: "Hình ảnh mài thanh sắt to thành chiếc kim nhỏ khuyên con người có lòng kiên trì, nhẫn nại ắt sẽ thành công."
        },
        {
          question: "Trong câu 'Học ăn, học nói, học gói, học mở', việc lặp lại từ 'học' nhằm nhấn mạnh điều gì?",
          options: [
            "Chỉ cần học ăn uống",
            "Con người cần phải học hỏi toàn diện từ những việc nhỏ nhất đến cách giao tiếp, ứng xử khéo léo",
            "Việc học rất vất vả",
            "Không cần học văn hóa"
          ],
          correctIndex: 1,
          explanation: "Điệp từ 'học' khẳng định mọi kỹ năng sống và giao tiếp trong đời đều cần rèn luyện, học hỏi."
        }
      ]
    },
    {
      id: "g7-eng-3",
      grade: "7",
      subject: "eng",
      title: "Câu bị động (Passive Voice) & Từ nối Although / However",
      summary: "Công thức chuyển từ câu chủ động sang bị động cực nhanh và cách dùng Although, Despite, However.",
      duration: "18 phút",
      sections: [
        {
          icon: "🔄",
          heading: "1. Câu bị động (Passive Voice) ở Hiện tại & Quá khứ",
          text: "Câu bị động dùng khi ta muốn nhấn mạnh vào ĐỐI TƯỢNG chịu tác động của hành động. Công thức chung luôn có: BE + V3/V-ed.",
          grid: [
            { title: "Hiện tại đơn bị động", detail: "am / is / are + V3/V-ed (VD: English is spoken all over the world.)" },
            { title: "Quá khứ đơn bị động", detail: "was / were + V3/V-ed (VD: The Temple of Literature was built in 1070.)" }
          ]
        },
        {
          icon: "🔗",
          heading: "2. Liên từ chỉ sự nhượng bộ: Although vs However",
          vocab: [
            { word: "Although it rained heavily, we went to school on time.", meaning: "Mặc dù trời mưa to, chúng tôi vẫn đi học đúng giờ. (Although + Mệnh đề S + V)" },
            { word: "The film was exciting; however, it was too long.", meaning: "Bộ phim rất hấp dẫn; tuy nhiên, nó hơi dài. (However đứng trước dấu phẩy)" },
            { word: "The Imperial Academy was founded in 1076.", meaning: "Quốc Tử Giám được thành lập vào năm 1076." }
          ]
        }
      ],
      parentGuide: {
        goal: "Giúp con nắm chắc dấu hiệu của câu bị động ('by + tác nhân' hoặc chủ ngữ là vật như 'ngôi trường, quyển sách, chiếc bánh') và cách đặt dấu câu với However.",
        steps: [
          "Dạy con mẹo nhận diện nhanh: Nếu chủ ngữ là VẬT (The house, The cake, Temple of Literature) thì 90% động từ phải chia ở dạng BỊ ĐỘNG (be + V3/ed).",
          "Phân biệt nhanh: 'Although' nối 2 vế cách nhau bằng dấu phẩy (KHÔNG có 'but' ở vế sau!)."
        ],
        mistakes: [
          "Lỗi kinh điển của người Việt: Dùng cả 'Although... but...' trong cùng một câu tiếng Anh (đã có Although thì tuyệt đối bỏ but).",
          "Quên chia động từ to be theo số ít/số nhiều ở câu bị động."
        ],
        realLife: "Chỉ vào đồ vật quanh nhà và hỏi con: 'Where was this fan made?' → 'It was made in Vietnam / Japan.'"
      },
      quiz: [
        {
          question: "The Temple of Literature ______ in 1070.",
          options: ["built", "is built", "was built", "builds"],
          correctIndex: 2,
          explanation: "Chủ ngữ là di tích (vật) và có mốc thời gian quá khứ 'in 1070' → dùng bị động Quá khứ đơn: was built."
        },
        {
          question: "______ the weather was bad, they still enjoyed the trip.",
          options: ["However", "Although", "Because", "So"],
          correctIndex: 1,
          explanation: "Đứng đầu câu, đi trực tiếp với mệnh đề 'the weather was bad' và ngăn cách với vế sau bằng dấu phẩy → dùng 'Although'."
        },
        {
          question: "Rice ______ in many Asian countries.",
          options: ["grows", "is grown", "grew", "was grow"],
          correctIndex: 1,
          explanation: "Lúa gạo (Rice - danh từ không đếm được) 'được trồng' ở hiện tại → dùng bị động Hiện tại đơn: is grown."
        },
        {
          question: "Chọn câu viết ĐÚNG ngữ pháp:",
          options: [
            "Although he was tired, but he finished his homework.",
            "Although he was tired, he finished his homework.",
            "However he was tired, he finished his homework.",
            "Although tired, so he went to bed."
          ],
          correctIndex: 1,
          explanation: "Trong tiếng Anh, đã dùng 'Although' ở vế đầu thì KHÔNG dùng 'but' ở vế thứ hai."
        }
      ]
    },
    {
      id: "g7-chem-3",
      grade: "7",
      subject: "chem",
      title: "Đơn chất, Hợp chất & Tính Phân tử khối (KHTN 7)",
      summary: "Phân biệt nhanh đơn chất (O₂, Fe) với hợp chất (H₂O, CO₂) và cách tính khối lượng phân tử siêu dễ.",
      duration: "18 phút",
      sections: [
        {
          icon: "🧬",
          heading: "1. Phân biệt Đơn chất và Hợp chất",
          text: "Chỉ cần đếm xem công thức hóa học được tạo nên từ MẤY NGUYÊN TỐ HÓA HỌC:",
          grid: [
            { title: "Đơn chất (1 nguyên tố)", detail: "Tạo nên từ 1 nguyên tố hóa học. Ví dụ: Kim loại Cu, Fe, Al; Khí H₂, O₂, N₂." },
            { title: "Hợp chất (≥ 2 nguyên tố)", detail: "Tạo nên từ 2 nguyên tố trở lên. Ví dụ: Nước (H₂O), Muối ăn (NaCl), Khí carbonic (CO₂)." }
          ]
        },
        {
          icon: "⚖️",
          heading: "2. Cách tính Khối lượng phân tử (Phân tử khối - đơn vị amu)",
          text: "Khối lượng phân tử bằng tổng khối lượng của tất cả các nguyên tử trong phân tử đó. Ghi nhớ các số vàng: H = 1; C = 12; N = 14; O = 16; Na = 23; Mg = 24; Al = 27; S = 32; Cl = 35,5; Ca = 40; Fe = 56; Cu = 64.",
          formula: "KLPT của AₓBᵧ  =  (x × KLNT của A) + (y × KLNT của B)",
          workedExample: {
            title: "Ví dụ: Tính khối lượng phân tử của Nước (H₂O) và Khí CO₂",
            steps: [
              "• Phân tử H₂O gồm 2 nguyên tử H và 1 nguyên tử O: KLPT = 2 × 1 + 1 × 16 = 18 (amu).",
              "• Phân tử CO₂ gồm 1 nguyên tử C và 2 nguyên tử O: KLPT = 1 × 12 + 2 × 16 = 44 (amu)."
            ]
          }
        }
      ],
      parentGuide: {
        goal: "Giúp con nắm vững phép tính cơ bản nhất của Hóa học THCS là tính Phân tử khối để chuẩn bị lên lớp 8 học tính số mol.",
        steps: [
          "Đố con nhìn công thức và trả lời ngay là Đơn chất hay Hợp chất (mẹo: thấy từ 2 chữ cái viết HOA trở lên chắc chắn là Hợp chất!).",
          "Cho con luyện bấm máy tính hoặc tính nhẩm khối lượng phân tử của H₂O (18), CO₂ (44), NaCl (58,5), CaCO₃ (100)."
        ],
        mistakes: [
          "Nhầm khí Oxygen (O₂) là hợp chất vì có số 2 (thực chất O₂ chỉ gồm 1 nguyên tố là O nên vẫn là ĐƠN CHẤT).",
          "Cộng thay vì nhân chỉ số chân (ví dụ tính H₂O lấy 2 + 1 + 16 thay vì 2 × 1 + 16)."
        ],
        realLife: "Đá vôi, vỏ trứng gà, vỏ sò đều có thành phần chính là hợp chất Calcium carbonate (CaCO₃) có khối lượng phân tử tròn đẹp bằng đúng 100 amu!"
      },
      quiz: [
        {
          question: "Dãy chất nào sau đây chỉ gồm toàn các HỢP CHẤT?",
          options: [
            "O₂, H₂, Fe",
            "H₂O, CO₂, NaCl",
            "Cu, H₂O, N₂",
            "Al, Mg, O₂"
          ],
          correctIndex: 1,
          explanation: "H₂O (gồm H và O), CO₂ (gồm C và O), NaCl (gồm Na và Cl) đều được tạo nên từ 2 nguyên tố hóa học trở lên nên là hợp chất."
        },
        {
          question: "Khí Oxygen có công thức hóa học là O₂. Phát biểu nào sau đây ĐÚNG?",
          options: [
            "O₂ là hợp chất vì có 2 nguyên tử",
            "O₂ là đơn chất vì chỉ được tạo nên từ một nguyên tố Oxygen",
            "O₂ là hỗn hợp",
            "O₂ không có khối lượng"
          ],
          correctIndex: 1,
          explanation: "Dù phân tử có 2 nguyên tử O liên kết với nhau, nhưng chỉ thuộc 1 nguyên tố duy nhất là Oxygen nên O₂ là đơn chất."
        },
        {
          question: "Biết H = 1, O = 16. Khối lượng phân tử của nước (H₂O) là:",
          options: ["17 amu", "18 amu", "33 amu", "34 amu"],
          correctIndex: 1,
          explanation: "KLPT(H₂O) = 2 × 1 + 1 × 16 = 18 (amu)."
        },
        {
          question: "Biết Ca = 40, C = 12, O = 16. Khối lượng phân tử của đá vôi CaCO₃ là:",
          options: ["68 amu", "84 amu", "100 amu", "116 amu"],
          correctIndex: 2,
          explanation: "KLPT(CaCO₃) = 40 + 12 + (3 × 16) = 52 + 48 = 100 (amu)."
        }
      ]
    }
  ]
};
