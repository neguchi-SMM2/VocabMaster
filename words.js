const words = [
  {
    word: "weather",
    meaning: "天気",
    page: 14,
    section: 1
  },
  {
    word: "temperature",
    meaning: "温度",
    page: 14,
    section: 1
  },
  {
    word: "wind",
    meaning: "風",
    page: 14,
    section: 1
  },
  {
    word: "ray",
    meaning: "光線",
    page: 14,
    section: 1
  },
  {
    word: "view",
    meaning: "景色",
    page: 14,
    section: 1
  },
  {
    word: "fine",
    meaning: "晴れた",
    page: 14,
    section: 1
  },
  {
    word: "calm",
    meaning: "おだやかな",
    page: 14,
    section: 1
  },
  {
    word: "answer",
    meaning: "に答える",
    page: 14,
    section: 2
  },
  {
    word: "approach",
    meaning: "に近づく",
    page: 14,
    section: 2
  },
  {
    word: "attend",
    meaning: "に出席する",
    page: 14,
    section: 2
  },
  {
    word: "discuss",
    meaning: "について議論する",
    page: 14,
    section: 2
  },
  {
    word: "enter",
    meaning: "に入る",
    page: 14,
    section: 2
  },
  {
    word: "plant",
    meaning: "植物",
    page: 16,
    section: 3
  },
  {
    word: "blossom",
    meaning: "(果物の)花",
    page: 16,
    section: 3
  },
  {
    word: "bloom",
    meaning: "(観賞用の)花",
    page: 16,
    section: 3
  },
  {
    word: "leaf",
    meaning: "葉",
    page: 16,
    section: 3
  },
  {
    word: "fruit",
    meaning: "果物",
    page: 16,
    section: 3
  },
  {
    word: "pick",
    meaning: "を摘む",
    page: 16,
    section: 3
  },
  {
    word: "grow",
    meaning: "成長する",
    page: 16,
    section: 3
  },
  {
    word: "marry",
    meaning: "と結婚する",
    page: 16,
    section: 4
  },
  {
    word: "mention",
    meaning: "と述べる",
    page: 16,
    section: 4
  },
  {
    word: "obey",
    meaning: "に従う",
    page: 16,
    section: 4
  },
  {
    word: "reach",
    meaning: "に達する",
    page: 16,
    section: 4
  },
  {
    word: "resemble",
    meaning: "に似ている",
    page: 16,
    section: 4
  },
  {
    word: "survive",
    meaning: "を生き延びる",
    page: 16,
    section: 4
  },
  {
    word: "continent",
    meaning: "大陸",
    page: 18,
    section: 5
  },
  {
    word: "area",
    meaning: "地域",
    page: 18,
    section: 5
  },
  {
    word: "part",
    meaning: "部分",
    page: 18,
    section: 5
  },
  {
    word: "horizen",
    meaning: "国境",
    page: 18,
    section: 5
  },
  {
    word: "border",
    meaning: "国境",
    page: 18,
    section: 5
  },
  {
    word: "foreign",
    meaning: "外国の",
    page: 18,
    section: 5
  },
  {
    word: "apologize",
    meaning: "謝る",
    page: 18,
    section: 6
  },
  {
    word: "argue",
    meaning: "議論する",
    page: 18,
    section: 6
  },
  {
    word: "complain",
    meaning: "不平を言う",
    page: 18,
    section: 6
  },
  {
    word: "graduate",
    meaning: "卒業する",
    page: 18,
    section: 6
  },
  {
    word: "agree",
    meaning: "意見が一致する",
    page: 18,
    section: 6
  },
  {
    word: "creature",
    meaning: "生き物",
    page: 20,
    section: 7
  },
  {
    word: "tail",
    meaning: "尾",
    page: 20,
    section: 7
  },
  {
    word: "alive",
    meaning: "生きている",
    page: 20,
    section: 7
  },
  {
    word: "bite",
    meaning: "をかむ",
    page: 20,
    section: 7
  },
  {
    word: "dig",
    meaning: "を掘る",
    page: 20,
    section: 7
  },
  {
    word: "feel",
    meaning: "〜の感じがする",
    page: 20,
    section: 8
  },
  {
    word: "smell",
    meaning: "〜のにおいがする",
    page: 20,
    section: 8
  },
  {
    word: "taste",
    meaning: "〜の味がする",
    page: 20,
    section: 8
  },
  {
    word: "seem",
    meaning: "〜のように思われる",
    page: 20,
    section: 8
  },
  {
    word: "look",
    meaning: "〜のように見える",
    page: 20,
    section: 8
  },
  {
    word: "appear",
    meaning: "〜のように見える",
    page: 20,
    section: 8
  },
  {
    word: "relationship",
    meaning: "関係",
    page: 22,
    section: 9
  },
  {
    word: "population",
    meaning: "人口",
    page: 22,
    section: 9
  },
  {
    word: "generation",
    meaning: "世代",
    page: 22,
    section: 9
  },
  {
    word: "hero",
    meaning: "英雄",
    page: 22,
    section: 9
  },
  {
    word: "trust",
    meaning: "を信頼する",
    page: 22,
    section: 9
  },
  {
    word: "village",
    meaning: "村",
    page: 22,
    section: 9
  },
  {
    word: "common",
    meaning: "共通の",
    page: 22,
    section: 9
  },
  {
    word: "public",
    meaning: "公共の",
    page: 22,
    section: 9
  },
  {
    word: "give",
    meaning: "を与える",
    page: 22,
    section: 10
  },
  {
    word: "send",
    meaning: "を送る",
    page: 22,
    section: 10
  },
  {
    word: "show",
    meaning: "を見せる",
    page: 22,
    section: 10
  },
  {
    word: "pass",
    meaning: "を手放す",
    page: 22,
    section: 10
  },
  {
    word: "society",
    meaning: "社会",
    page: 24,
    section: 11
  },
  {
    word: "culture",
    meaning: "文化",
    page: 24,
    section: 11
  },
  {
    word: "custom",
    meaning: "(社会的な)習慣",
    page: 24,
    section: 11
  },
  {
    word: "tradition",
    meaning: "伝統",
    page: 24,
    section: 11
  },
  {
    word: "rule",
    meaning: "規則",
    page: 24,
    section: 11
  },
  {
    word: "role",
    meaning: "役割",
    page: 24,
    section: 11
  },
  {
    word: "address",
    meaning: "住所",
    page: 24,
    section: 11
  },
  {
    word: "ceremony",
    meaning: "式",
    page: 24,
    section: 11
  },
  {
    word: "cash",
    meaning: "現金",
    page: 24,
    section: 11
  },
  {
    word: "buy",
    meaning: "を買う",
    page: 24,
    section: 12
  },
  {
    word: "cook",
    meaning: "(を)料理する",
    page: 24,
    section: 12
  },
  {
    word: "choose",
    meaning: "を選ぶ",
    page: 24,
    section: 12
  },
  {
    word: "get",
    meaning: "を得る",
    page: 24,
    section: 12
  },
  {
    word: "proud",
    meaning: "誇りに思って",
    page: 26,
    section: 13
  },
  {
    word: "grateful",
    meaning: "感謝して",
    page: 26,
    section: 13
  },
  {
    word: "afraid",
    meaning: "恐れて",
    page: 26,
    section: 13
  },
  {
    word: "anxious",
    meaning: "心配して",
    page: 26,
    section: 13
  },
  {
    word: "ashamed",
    meaning: "恥じて",
    page: 26,
    section: 13
  },
  {
    word: "angry",
    meaning: "起こって",
    page: 26,
    section: 13
  },
  {
    word: "miserable",
    meaning: "みじめな",
    page: 26,
    section: 13
  },
  {
    word: "ask",
    meaning: "を尋ねる",
    page: 26,
    section: 14
  },
  {
    word: "cost",
    meaning: "(費用)がかかる",
    page: 26,
    section: 14
  },
  {
    word: "save",
    meaning: "を省く",
    page: 26,
    section: 14
  },
  {
    word: "envy",
    meaning: "をうらやむ",
    page: 26,
    section: 14
  },
  {
    word: "spare",
    meaning: "(時間)をさく",
    page: 26,
    section: 14
  },
  {
    word: "age",
    meaning: "年齢",
    page: 28,
    section: 15
  },
  {
    word: "kid",
    meaning: "子ども",
    page: 28,
    section: 15
  },
  {
    word: "cousin",
    meaning: "いとこ",
    page: 28,
    section: 15
  },
  {
    word: "host",
    meaning: "(男の)主人(役)",
    page: 28,
    section: 15
  },
  {
    word: "female",
    meaning: "女性",
    page: 28,
    section: 15
  },
  {
    word: "male",
    meaning: "男性",
    page: 28,
    section: 15
  },
  {
    word: "human",
    meaning: "人間",
    page: 28,
    section: 15
  },
  {
    word: "owe",
    meaning: "(お金)を借りている",
    page: 28,
    section: 16
  },
  {
    word: "allow",
    meaning: "を許す",
    page: 28,
    section: 16
  },
  {
    word: "cause",
    meaning: "(苦痛・被害)をもたらす",
    page: 28,
    section: 16
  },
  {
    word: "charge",
    meaning: "(代金)を請求する",
    page: 28,
    section: 16
  },
  {
    word: "loan",
    meaning: "(お金)を貸し付ける",
    page: 28,
    section: 16
  },
  {
    word: "false",
    meaning: "誤った",
    page: 30,
    section: 17
  },
  {
    word: "bitter",
    meaning: "つらい",
    page: 30,
    section: 17
  },
  {
    word: "empty",
    meaning: "空の",
    page: 30,
    section: 17
  },
  {
    word: "short",
    meaning: "不足した",
    page: 30,
    section: 17
  },
  {
    word: "absent",
    meaning: "不在で",
    page: 30,
    section: 17
  },
  {
    word: "waste",
    meaning: "(お金・時間)をむだに使う",
    page: 30,
    section: 17
  },
  {
    word: "trouble",
    meaning: "を悩ませる",
    page: 30,
    section: 17
  },
  {
    word: "leave",
    meaning: "を〜のままにしておく",
    page: 30,
    section: 18
  },
  {
    word: "find",
    meaning: "が〜だとわかる",
    page: 30,
    section: 18
  },
  {
    word: "elect",
    meaning: "を〜に選出する",
    page: 30,
    section: 18
  },
  {
    word: "believe",
    meaning: "が〜だと思う",
    page: 30,
    section: 18
  },
  {
    word: "tourist",
    meaning: "観光客",
    page: 32,
    section: 19
  },
  {
    word: "travel",
    meaning: "(周遊・観光)旅行",
    page: 32,
    section: 19
  },
  {
    word: "voyage",
    meaning: "航海",
    page: 32,
    section: 19
  },
  {
    word: "rest",
    meaning: "休息",
    page: 32,
    section: 19
  },
  {
    word: "leisure",
    meaning: "余暇",
    page: 32,
    section: 19
  },
  {
    word: "airport",
    meaning: "空港",
    page: 32,
    section: 19
  },
  {
    word: "abroad",
    meaning: "外国へ",
    page: 32,
    section: 19
  },
  {
    word: "sightseeing",
    meaning: "観光",
    page: 32,
    section: 19
  },
  {
    word: "rise",
    meaning: "上がる",
    page: 32,
    section: 20
  },
  {
    word: "raise",
    meaning: "を上げる",
    page: 32,
    section: 20
  },
  {
    word: "lie",
    meaning: "横たわる",
    page: 32,
    section: 20
  },
  {
    word: "lay",
    meaning: "を横たえる",
    page: 32,
    section: 20
  },
  {
    word: "conversation",
    meaning: "会話",
    page: 34,
    section: 21
  },
  {
    word: "speech",
    meaning: "演説",
    page: 34,
    section: 21
  },
  {
    word: "attention",
    meaning: "注意",
    page: 34,
    section: 21
  },
  {
    word: "contact",
    meaning: "接触",
    page: 34,
    section: 21
  },
  {
    word: "remain",
    meaning: "〜のままである",
    page: 34,
    section: 22
  },
  {
    word: "own",
    meaning: "を所有している",
    page: 34,
    section: 22
  },
  {
    word: "belong (belong to...で)",
    meaning: "に所属している",
    page: 34,
    section: 22
  },
  {
    word: "contain",
    meaning: "を含む",
    page: 34,
    section: 22
  },
  {
    word: "exist",
    meaning: "存在する",
    page: 34,
    section: 22
  },
  {
    word: "hate",
    meaning: "を憎む",
    page: 34,
    section: 22
  },
  {
    word: "understand",
    meaning: "を理解する",
    page: 34,
    section: 22
  },
  {
    word: "subject",
    meaning: "話題",
    page: 36,
    section: 23
  },
  {
    word: "fake",
    meaning: "にせの",
    page: 36,
    section: 23
  },
  {
    word: "opinion",
    meaning: "意見",
    page: 36,
    section: 23
  },
  {
    word: "fact",
    meaning: "事実",
    page: 36,
    section: 23
  },
  {
    word: "example",
    meaning: "例",
    page: 36,
    section: 23
  },
  {
    word: "reason",
    meaning: "理由",
    page: 36,
    section: 23
  },
  {
    word: "knowledge",
    meaning: "知識",
    page: 36,
    section: 23
  },
  {
    word: "make (make ... doで)",
    meaning: "...に〜させる",
    page: 36,
    section: 24
  },
  {
    word: "let(let ... doで)",
    meaning: "...に〜させる",
    page: 36,
    section: 24
  },
  {
    word: "have (have ... doで)",
    meaning: "...に〜させる",
    page: 36,
    section: 24
  },
  {
    word: "stranger",
    meaning: "見知らぬ人",
    page: 38,
    section: 25
  },
  {
    word: "safe",
    meaning: "金庫",
    page: 38,
    section: 25
  },
  {
    word: "copy",
    meaning: "(本や印刷物の)〜部",
    page: 38,
    section: 25
  },
  {
    word: "line",
    meaning: "職業",
    page: 38,
    section: 25
  },
  {
    word: "word",
    meaning: "約束",
    page: 38,
    section: 25
  },
  {
    word: "ring",
    meaning: "(ベル・電話などが)鳴ること",
    page: 38,
    section: 25
  },
  {
    word: "hear",
    meaning: "が聞こえる",
    page: 38,
    section: 26
  },
  {
    word: "listen to...",
    meaning: "(注意して)...を聴く(聞く)",
    page: 38,
    section: 26
  },
  {
    word: "see",
    meaning: "(が)見える",
    page: 38,
    section: 26
  },
  {
    word: "watch",
    meaning: "(を)よく見る",
    page: 38,
    section: 26
  },
  {
    word: "situation",
    meaning: "状況",
    page: 40,
    section: 27
  },
  {
    word: "position",
    meaning: "位置",
    page: 40,
    section: 27
  },
  {
    word: "front (the 〜で)",
    meaning: "前部",
    page: 40,
    section: 27
  },
  {
    word: "bottom (the 〜で)",
    meaning: "(最)下部",
    page: 40,
    section: 27
  },
  {
    word: "neighborhood",
    meaning: "近所",
    page: 40,
    section: 27
  },
  {
    word: "point",
    meaning: "点",
    page: 40,
    section: 27
  },
  {
    word: "want ... to do",
    meaning: "...に〜してほしいと思っている",
    page: 40,
    section: 28
  },
  {
    word: "enable ... to do",
    meaning: "...に〜することを可能にする",
    page: 40,
    section: 28
  },
  {
    word: "persuade ... to do",
    meaning: "...を説得して〜させる",
    page: 40,
    section: 28
  },
  {
    word: "encourage ... to do",
    meaning: "...に〜するように励ます",
    page: 40,
    section: 28
  },
  {
    word: "expect ... to do",
    meaning: "...が〜するだろうと思う",
    page: 40,
    section: 28
  },
  {
    word: "invite ... to do",
    meaning: "...に〜するように依頼する(誘う)",
    page: 40,
    section: 28
  },
  {
    word: "clothes",
    meaning: "服",
    page: 42,
    section: 29
  },
  {
    word: "comb",
    meaning: "くし",
    page: 42,
    section: 29
  },
  {
    word: "grocery",
    meaning: "食料品店",
    page: 42,
    section: 29
  },
  {
    word: "gift",
    meaning: "贈り物",
    page: 42,
    section: 29
  },
  {
    word: "seat",
    meaning: "座席",
    page: 42,
    section: 29
  },
  {
    word: "cover",
    meaning: "カバー",
    page: 42,
    section: 29
  },
  {
    word: "force ... to do",
    meaning: "...に〜することを強制する",
    page: 42,
    section: 30
  },
  {
    word: "compel ... to do",
    meaning: "...に〜することを強いる",
    page: 42,
    section: 30
  },
  {
    word: "oblige ... to do",
    meaning: "...に〜することを義務付ける",
    page: 42,
    section: 30
  },
  {
    word: "require ... to do",
    meaning: "...に〜するように要求する(義務づける)",
    page: 42,
    section: 30
  },
  {
    word: "permit ... to do",
    meaning: "...が〜することを許す(可能にする)",
    page: 42,
    section: 30
  },
  {
    word: "factory",
    meaning: "工場",
    page: 44,
    section: 31
  },
  {
    word: "museum",
    meaning: "博物館",
    page: 44,
    section: 31
  },
  {
    word: "store",
    meaning: "店",
    page: 44,
    section: 31
  },
  {
    word: "office",
    meaning: "事務所",
    page: 44,
    section: 31
  },
  {
    word: "story",
    meaning: "(建物の)階",
    page: 44,
    section: 31
  },
  {
    word: "frame",
    meaning: "骨組み",
    page: 44,
    section: 31
  },
  {
    word: "afford (can afford to doで)",
    meaning: "〜する余裕がある",
    page: 44,
    section: 32
  },
  {
    word: "attempt to do",
    meaning: "〜することを試みる",
    page: 44,
    section: 32
  },
  {
    word: "fail to do",
    meaning: "〜しそこなう",
    page: 44,
    section: 32
  },
  {
    word: "hope to do",
    meaning: "〜したいと思う",
    page: 44,
    section: 32
  },
  {
    word: "intend to do",
    meaning: "〜するつもりである",
    page: 44,
    section: 32
  },
  {
    word: "manage to do",
    meaning: "どうにかして〜する",
    page: 44,
    section: 32
  },
  {
    word: "nature",
    meaning: "自然",
    page: 46,
    section: 33
  },
  {
    word: "source",
    meaning: "水源",
    page: 46,
    section: 33
  },
  {
    word: "desert",
    meaning: "砂漠",
    page: 46,
    section: 33
  },
  {
    word: "space",
    meaning: "宇宙",
    page: 46,
    section: 33
  },
  {
    word: "even",
    meaning: "(表面などが)平らな",
    page: 46,
    section: 33
  },
  {
    word: "pretend to do",
    meaning: "〜するふりをする",
    page: 46,
    section: 34
  },
  {
    word: "refuse to do",
    meaning: "〜することを拒む",
    page: 46,
    section: 34
  },
  {
    word: "promise to do",
    meaning: "〜することを約束する",
    page: 46,
    section: 34
  },
  {
    word: "offer to do",
    meaning: "〜することを申し出る",
    page: 46,
    section: 34
  },
  {
    word: "desire to do",
    meaning: "〜することを強く望む",
    page: 46,
    section: 34
  },
  {
    word: "plan to do",
    meaning: "〜することを計画する",
    page: 46,
    section: 34
  },
  {
    word: "chance",
    meaning: "(偶然の)機会",
    page: 48,
    section: 35
  },
  {
    word: "courage",
    meaning: "勇気",
    page: 48,
    section: 35
  },
  {
    word: "familiar",
    meaning: "よく知られた",
    page: 48,
    section: 35
  },
  {
    word: "sure",
    meaning: "確信して",
    page: 48,
    section: 35
  },
  {
    word: "true",
    meaning: "本当の",
    page: 48,
    section: 35
  },
  {
    word: "enjoy -ing",
    meaning: "〜して楽しむ",
    page: 48,
    section: 36
  },
  {
    word: "avoid -ing",
    meaning: "〜するのを避ける",
    page: 48,
    section: 36
  },
  {
    word: "finish -ing",
    meaning: "〜し終える",
    page: 48,
    section: 36
  },
  {
    word: "mind -ing",
    meaning: "(を)いやだと思う",
    page: 48,
    section: 36
  },
  {
    word: "stop -ing",
    meaning: "〜するのをやめる",
    page: 48,
    section: 36
  },
  {
    word: "close",
    meaning: "近い",
    page: 50,
    section: 37
  },
  {
    word: "far",
    meaning: "遠い",
    page: 50,
    section: 37
  },
  {
    word: "distant",
    meaning: "遠い",
    page: 50,
    section: 37
  },
  {
    word: "upstairs",
    meaning: "階上に",
    page: 50,
    section: 37
  },
  {
    word: "forgive",
    meaning: "(を)許す",
    page: 50,
    section: 38
  },
  {
    word: "practice -ing",
    meaning: "〜する練習をする",
    page: 50,
    section: 38
  },
  {
    word: "consider -ing",
    meaning: "〜するのをよく考える",
    page: 50,
    section: 38
  },
  {
    word: "escape -ing",
    meaning: "〜するのをまぬがれる",
    page: 50,
    section: 38
  },
  {
    word: "admit -ing",
    meaning: "〜したのを認める",
    page: 50,
    section: 38
  },
  {
    word: "deny -ing",
    meaning: "〜したのを否定する",
    page: 50,
    section: 38
  },
  {
    word: "miss -ing",
    meaning: "〜しそこなう",
    page: 50,
    section: 38
  },
  {
    word: "important",
    meaning: "重要な",
    page: 52,
    section: 39
  },
  {
    word: "precious",
    meaning: "貴重な",
    page: 52,
    section: 39
  },
  {
    word: "main",
    meaning: "おもな",
    page: 52,
    section: 39
  },
  {
    word: "perfect",
    meaning: "完全な",
    page: 52,
    section: 39
  },
  {
    word: "need",
    meaning: "を必要とする",
    page: 52,
    section: 40
  },
  {
    word: "remember",
    meaning: "を覚えている",
    page: 52,
    section: 40
  },
  {
    word: "forget",
    meaning: "を忘れる",
    page: 52,
    section: 40
  },
  {
    word: "try",
    meaning: "を試みる",
    page: 52,
    section: 40
  },
  {
    word: "regret",
    meaning: "を後悔する",
    page: 52,
    section: 40
  },
  {
    word: "certain",
    meaning: "確実な",
    page: 54,
    section: 41
  },
  {
    word: "likely",
    meaning: "ありそうな",
    page: 54,
    section: 41
  },
  {
    word: "almost",
    meaning: "ほとんど",
    page: 54,
    section: 41
  },
  {
    word: "become",
    meaning: "に似合う",
    page: 54,
    section: 42
  },
  {
    word: "count",
    meaning: "重要である",
    page: 54,
    section: 42
  },
  {
    word: "face",
    meaning: "(困難など)に直面する",
    page: 54,
    section: 42
  },
  {
    word: "follow (it follows that...で)",
    meaning: "...ということになる",
    page: 54,
    section: 42
  },
  {
    word: "last",
    meaning: "続く",
    page: 54,
    section: 42
  },
  {
    word: "run",
    meaning: "を経営する",
    page: 54,
    section: 42
  },
  {
    word: "stand (疑問・否定文で)",
    meaning: "を我慢する",
    page: 54,
    section: 42
  },
  {
    word: "cast",
    meaning: "投げる",
    page: 54,
    section: 42
  },
  {
    word: "pay",
    meaning: "特になる",
    page: 54,
    section: 42
  },
  {
    word: "read",
    meaning: "解釈される",
    page: 54,
    section: 42
  },
  {
    word: "sell (自動詞で)",
    meaning: "売れる",
    page: 54,
    section: 42
  },
  {
    word: "change",
    meaning: "釣り銭",
    page: 56,
    section: 43
  },
  {
    word: "mine",
    meaning: "鉱山",
    page: 56,
    section: 43
  },
  {
    word: "fire",
    meaning: "を解雇する",
    page: 56,
    section: 43
  },
  {
    word: "book",
    meaning: "(を)予約する",
    page: 56,
    section: 43
  },
  {
    word: "charm",
    meaning: "お守り",
    page: 56,
    section: 43
  },
  {
    word: "break",
    meaning: "休憩",
    page: 56,
    section: 43
  },
  {
    word: "hand",
    meaning: "手渡す",
    page: 56,
    section: 43
  },
  {
    word: "place",
    meaning: "地位",
    page: 56,
    section: 43
  },
  {
    word: "flat",
    meaning: "パンクした",
    page: 56,
    section: 43
  },
  {
    word: "lot",
    meaning: "運命",
    page: 56,
    section: 43
  },
  {
    word: "will",
    meaning: "遺言(書)",
    page: 56,
    section: 43
  },
  {
    word: "well",
    meaning: "井戸",
    page: 58,
    section: 44
  },
  {
    word: "end",
    meaning: "目的",
    page: 58,
    section: 44
  },
  {
    word: "edge",
    meaning: "有利な状況",
    page: 58,
    section: 44
  },
  {
    word: "table",
    meaning: "表",
    page: 58,
    section: 44
  },
  {
    word: "spell",
    meaning: "期間",
    page: 58,
    section: 44
  },
  {
    word: "touch",
    meaning: "少量",
    page: 58,
    section: 44
  },
  {
    word: "game",
    meaning: "獲物",
    page: 58,
    section: 44
  },
  {
    word: "room",
    meaning: "場所",
    page: 58,
    section: 44
  },
  {
    word: "match",
    meaning: "(と)調和する",
    page: 58,
    section: 44
  },
  {
    word: "fall",
    meaning: "秋",
    page: 58,
    section: 44
  },
  {
    word: "park",
    meaning: "駐車する",
    page: 58,
    section: 44
  },
  {
    word: "be made from ...",
    meaning: "(原料)から作られている",
    page: 60,
    section: 45
  },
  {
    word: "be made of ...",
    meaning: "(材料)でできている",
    page: 60,
    section: 45
  },
  {
    word: "be made up of ...",
    meaning: "...で構成されている",
    page: 60,
    section: 45
  },
  {
    word: "make ... into 〜",
    meaning: "...を(製品)に加工する",
    page: 60,
    section: 45
  },
  {
    word: "make up one's mind to do",
    meaning: "〜しようと決心する",
    page: 60,
    section: 45
  },
  {
    word: "make a point of -ing",
    meaning: "〜することにしている",
    page: 60,
    section: 45
  },
  {
    word: "make progress in ...",
    meaning: "...において進歩を遂げる",
    page: 60,
    section: 45
  },
  {
    word: "come across ...",
    meaning: "...に出くわす",
    page: 60,
    section: 46
  },
  {
    word: "come true",
    meaning: "実現する",
    page: 60,
    section: 46
  },
  {
    word: "come to (oneself)",
    meaning: "意識を取り戻す",
    page: 60,
    section: 46
  },
  {
    word: "come to do",
    meaning: "〜するようになる",
    page: 60,
    section: 46
  },
  {
    word: "come off",
    meaning: "行われる",
    page: 60,
    section: 46
  },
  {
    word: "come to think of it",
    meaning: "考えてみると",
    page: 60,
    section: 46
  },
  {
    word: "come by (...)",
    meaning: "...を手に入れる",
    page: 60,
    section: 46
  },
  {
    word: "go on -ing",
    meaning: "〜し続ける",
    page: 62,
    section: 47
  },
  {
    word: "go on to do",
    meaning: "更に続けて〜する",
    page: 62,
    section: 47
  },
  {
    word: "go on with ...",
    meaning: "...を続ける",
    page: 62,
    section: 47
  },
  {
    word: "go -ing at[in, on] <場所>",
    meaning: "<場所>に〜しに行く",
    page: 62,
    section: 47
  },
  {
    word: "go through ...",
    meaning: "...を経験する",
    page: 62,
    section: 47
  },
  {
    word: "go bad",
    meaning: "(食べ物などが)腐る",
    page: 62,
    section: 47
  },
  {
    word: "go wild",
    meaning: "荒っぽくなる",
    page: 62,
    section: 47
  },
  {
    word: "go from bad to worse",
    meaning: "更に悪い方向に向かう",
    page: 62,
    section: 47
  },
  {
    word: "go ahead with ...",
    meaning: "...を始める",
    page: 62,
    section: 47
  },
  {
    word: "go over ...",
    meaning: "...をよく調べる",
    page: 62,
    section: 47
  },
  {
    word: "go with ...",
    meaning: "...に似合う",
    page: 62,
    section: 47
  },
  {
    word: "go out of one's way to do",
    meaning: "(必要がないのに)わざわざ〜する",
    page: 62,
    section: 47
  },
  {
    word: "be on the go",
    meaning: "仕事に追われている",
    page: 62,
    section: 47
  },
  {
    word: "give <人> a hand",
    meaning: "<人>に手を貸す",
    page: 64,
    section: 48
  },
  {
    word: "give <人> a call[ring]",
    meaning: "<人>に電話をする",
    page: 64,
    section: 48
  },
  {
    word: "give birth to ...",
    meaning: "...を産む",
    page: 64,
    section: 48
  },
  {
    word: "give up (...)",
    meaning: "(...を)諦める",
    page: 64,
    section: 48
  },
  {
    word: "give in (...)",
    meaning: "譲る",
    page: 64,
    section: 48
  },
  {
    word: "give way to ...",
    meaning: "...に譲歩する",
    page: 64,
    section: 48
  },
  {
    word: "given ...",
    meaning: "...を考慮にいれれば",
    page: 64,
    section: 48
  },
  {
    word: "give out ...",
    meaning: "...を配る",
    page: 64,
    section: 48
  },
  {
    word: "give away ...",
    meaning: "(秘密など)を明かす",
    page: 64,
    section: 48
  },
  {
    word: "give rise to ...",
    meaning: "...を引き起こす",
    page: 64,
    section: 48
  },
  {
    word: "give off ...",
    meaning: "(匂い・熱など)を発する",
    page: 64,
    section: 48
  },
  {
    word: "take care of ...",
    meaning: "...の世話をする",
    page: 66,
    section: 49
  },
  {
    word: "take over (...)",
    meaning: "(...を)引き継ぐ",
    page: 66,
    section: 49
  },
  {
    word: "take part in ...",
    meaning: "...に参加する",
    page: 66,
    section: 49
  },
  {
    word: "it takes <人> <時間> to do",
    meaning: "<人>が〜するのに<時間>がかかる",
    page: 66,
    section: 49
  },
  {
    word: "take ... for granted",
    meaning: "...を当たり前に思う",
    page: 66,
    section: 49
  },
  {
    word: "take it easy",
    meaning: "気楽にする",
    page: 66,
    section: 49
  },
  {
    word: "take ... for",
    meaning: "(誤って)...を〜だと思い込む",
    page: 66,
    section: 49
  },
  {
    word: "leave ... behind",
    meaning: "...を置き忘れる",
    page: 66,
    section: 50
  },
  {
    word: "leave much [a lot] to be desired",
    meaning: "問題が多い",
    page: 66,
    section: 50
  },
  {
    word: "leave ... alone",
    meaning: "...を1人にしておく",
    page: 66,
    section: 50
  },
  {
    word: "leave ... out",
    meaning: "...を省く",
    page: 66,
    section: 50
  },
  {
    word: "keep good [early] hours",
    meaning: "早寝早起きをする",
    page: 68,
    section: 51
  },
  {
    word: "keep a diary",
    meaning: "日記をつける",
    page: 68,
    section: 51
  },
  {
    word: "keep good time",
    meaning: "(時計の)時間が正確である",
    page: 68,
    section: 51
  },
  {
    word: "keep (on) -ing",
    meaning: "〜し続ける",
    page: 68,
    section: 51
  },
  {
    word: "keep ... -ing",
    meaning: "...を〜するままにしておく",
    page: 68,
    section: 51
  },
  {
    word: "keep <人> company",
    meaning: "<人>に同行する",
    page: 68,
    section: 51
  },
  {
    word: "keep 〜 in mind",
    meaning: "〜を心に留めておく",
    page: 68,
    section: 51
  },
  {
    word: "keep up with 〜",
    meaning: "に遅れずについていく",
    page: 68,
    section: 51
  },
  {
    word: "set out (...)",
    meaning: "(...に)出発する",
    page: 68,
    section: 52
  },
  {
    word: "set in",
    meaning: "(季節・天気が)始まる",
    page: 68,
    section: 52
  },
  {
    word: "set about ...",
    meaning: "...に取り掛かる",
    page: 68,
    section: 52
  },
  {
    word: "have a good time -ing",
    meaning: "〜して楽しむ",
    page: 70,
    section: 53
  },
  {
    word: "have no idea",
    meaning: "わからない",
    page: 70,
    section: 53
  },
  {
    word: "have an eye for ...",
    meaning: "...を見る目がある",
    page: 70,
    section: 53
  },
  {
    word: "have only to do",
    meaning: "〜しさえすればよい",
    page: 70,
    section: 53
  },
  {
    word: "have ... done",
    meaning: "...を〜してもらう",
    page: 70,
    section: 53
  },
  {
    word: "have words with ...",
    meaning: "...と口論する",
    page: 70,
    section: 53
  },
  {
    word: "have an effect on ...",
    meaning: "...に影響を与える",
    page: 70,
    section: 53
  },
  {
    word: "have [take, go] one's own way",
    meaning: "自分の思い通りにする",
    page: 70,
    section: 53
  },
  {
    word: "have a good command of ...",
    meaning: "...を自由に操る",
    page: 70,
    section: 53
  },
  {
    word: "have no choice but to do",
    meaning: "〜せざるをえない",
    page: 70,
    section: 53
  },
  {
    word: "get to do",
    meaning: "〜するようになる",
    page: 72,
    section: 54
  },
  {
    word: "get ... to do",
    meaning: "...に〜させる",
    page: 72,
    section: 54
  },
  {
    word: "get ... done",
    meaning: "...を〜してしまう",
    page: 72,
    section: 54
  },
  {
    word: "get in touch with ...",
    meaning: "---と連絡を取る",
    page: 72,
    section: 54
  },
  {
    word: "get on [along] with ...",
    meaning: "...と仲良くやっていく",
    page: 72,
    section: 54
  },
  {
    word: "get nowhere",
    meaning: "進展しない",
    page: 72,
    section: 54
  },
  {
    word: "get on one's nerves",
    meaning: "〜をいらつかせる",
    page: 72,
    section: 54
  },
  {
    word: "get [stand] in one's way",
    meaning: "〜のじゃまをする",
    page: 72,
    section: 54
  },
  {
    word: "get around",
    meaning: "あちこち移動する",
    page: 72,
    section: 54
  },
  {
    word: "get back to 〜",
    meaning: "〜に戻る",
    page: 72,
    section: 54
  },
  {
    word: "accident",
    meaning: "(交通)事故",
    page: 82,
    section: 55
  },
  {
    word: "pain",
    meaning: "痛み",
    page: 82,
    section: 55
  },
  {
    word: "ill",
    meaning: "病気で",
    page: 82,
    section: 55
  },
  {
    word: "die",
    meaning: "死ぬ",
    page: 82,
    section: 55
  },
  {
    word: "remind",
    meaning: "に思い出させる",
    page: 82,
    section: 56
  },
  {
    word: "inform",
    meaning: "に知らせる",
    page: 82,
    section: 56
  },
  {
    word: "convince",
    meaning: "に納得させる",
    page: 82,
    section: 56
  },
  {
    word: "warn",
    meaning: "に警告する",
    page: 82,
    section: 56
  },
  {
    word: "suspect",
    meaning: "を疑う",
    page: 82,
    section: 56
  },
  {
    word: "company",
    meaning: "会社",
    page: 84,
    section: 57
  },
  {
    word: "project",
    meaning: "計画",
    page: 84,
    section: 57
  },
  {
    word: "career",
    meaning: "(生涯の)仕事",
    page: 84,
    section: 57
  },
  {
    word: "clerk",
    meaning: "店員",
    page: 84,
    section: 57
  },
  {
    word: "document",
    meaning: "文書",
    page: 84,
    section: 57
  },
  {
    word: "envelope",
    meaning: "封筒",
    page: 84,
    section: 57
  },
  {
    word: "rob",
    meaning: "を奪う",
    page: 84,
    section: 58
  },
  {
    word: "deprive",
    meaning: "(能力・権利など)を奪う",
    page: 84,
    section: 58
  },
  {
    word: "cure",
    meaning: "を治す",
    page: 84,
    section: 58
  },
  {
    word: "cheat",
    meaning: "をだます",
    page: 84,
    section: 58
  },
  {
    word: "clear",
    meaning: "を片付ける",
    page: 84,
    section: 58
  },
  {
    word: "relieve",
    meaning: "を和らげる",
    page: 84,
    section: 58
  },
  {
    word: "rid",
    meaning: "を取り除く",
    page: 84,
    section: 58
  },
  {
    word: "act",
    meaning: "行動する",
    page: 86,
    section: 59
  },
  {
    word: "consume",
    meaning: "を消費する",
    page: 86,
    section: 59
  },
  {
    word: "burn",
    meaning: "燃える",
    page: 86,
    section: 59
  },
  {
    word: "continue",
    meaning: "続く",
    page: 86,
    section: 59
  },
  {
    word: "gather",
    meaning: "集まる",
    page: 86,
    section: 59
  },
  {
    word: "include",
    meaning: "を含む",
    page: 86,
    section: 59
  },
  {
    word: "spend",
    meaning: "(お金)を費やす",
    page: 86,
    section: 59
  },
  {
    word: "wake",
    meaning: "を起こす",
    page: 86,
    section: 59
  },
  {
    word: "prevent",
    meaning: "を妨げる",
    page: 86,
    section: 60
  },
  {
    word: "keep",
    meaning: "を妨げる",
    page: 86,
    section: 60
  },
  {
    word: "prohibit",
    meaning: "を禁止する",
    page: 86,
    section: 60
  },
  {
    word: "discourage",
    meaning: "にやる気を無くさせる",
    page: 86,
    section: 60
  },
  {
    word: "personality",
    meaning: "個性",
    page: 86,
    section: 61
  },
  {
    word: "shy",
    meaning: "恥ずかしがりの",
    page: 86,
    section: 61
  },
  {
    word: "brave",
    meaning: "勇敢な",
    page: 86,
    section: 61
  },
  {
    word: "smart",
    meaning: "頭の良い",
    page: 86,
    section: 61
  },
  {
    word: "lazy",
    meaning: "怠惰な",
    page: 86,
    section: 61
  },
  {
    word: "independent",
    meaning: "独立した",
    page: 86,
    section: 61
  },
  {
    word: "serve",
    meaning: "(に)仕える",
    page: 88,
    section: 62
  },
  {
    word: "provide",
    meaning: "を供給する",
    page: 88,
    section: 62
  },
  {
    word: "supply",
    meaning: "を供給する",
    page: 88,
    section: 62
  },
  {
    word: "central",
    meaning: "中央の",
    page: 90,
    section: 63
  },
  {
    word: "shape",
    meaning: "形",
    page: 90,
    section: 63
  },
  {
    word: "surface",
    meaning: "表面",
    page: 90,
    section: 63
  },
  {
    word: "spot",
    meaning: "場所",
    page: 90,
    section: 63
  },
  {
    word: "thick",
    meaning: "厚い",
    page: 90,
    section: 63
  },
  {
    word: "tight",
    meaning: "きつい",
    page: 90,
    section: 63
  },
  {
    word: "rough",
    meaning: "(表面が)でこぼこした",
    page: 90,
    section: 63
  },
  {
    word: "dull",
    meaning: "(色・光・感覚などが)鈍い",
    page: 90,
    section: 63
  },
  {
    word: "blame",
    meaning: "を非難する",
    page: 90,
    section: 64
  },
  {
    word: "praise",
    meaning: "を賞賛する",
    page: 90,
    section: 64
  },
  {
    word: "criticize",
    meaning: "を批判する",
    page: 90,
    section: 64
  },
  {
    word: "punish",
    meaning: "を罰する",
    page: 90,
    section: 64
  },
  {
    word: "thank",
    meaning: "に感謝する",
    page: 90,
    section: 64
  },
  {
    word: "alone",
    meaning: "ひとりで",
    page: 92,
    section: 65
  },
  {
    word: "liable",
    meaning: "しやすい",
    page: 92,
    section: 65
  },
  {
    word: "home",
    meaning: "我が家へ(に)",
    page: 92,
    section: 65
  },
  {
    word: "indeed",
    meaning: "たしかに",
    page: 92,
    section: 65
  },
  {
    word: "relatively",
    meaning: "比較的",
    page: 92,
    section: 65
  },
  {
    word: "respectively",
    meaning: "それぞれに",
    page: 92,
    section: 65
  },
  {
    word: "ever",
    meaning: "かつて",
    page: 92,
    section: 65
  },
  {
    word: "badly",
    meaning: "ひどく",
    page: 92,
    section: 65
  },
  {
    word: "first",
    meaning: "まず最初に",
    page: 92,
    section: 65
  },
  {
    word: "take",
    meaning: "を取る",
    page: 92,
    section: 66
  },
  {
    word: "bring",
    meaning: "を持ってくる",
    page: 92,
    section: 66
  },
  {
    word: "traffic",
    meaning: "交通",
    page: 94,
    section: 67
  },
  {
    word: "transportation",
    meaning: "輸送機関",
    page: 94,
    section: 67
  },
  {
    word: "path",
    meaning: "小道",
    page: 94,
    section: 67
  },
  {
    word: "fuel",
    meaning: "燃料",
    page: 94,
    section: 67
  },
  {
    word: "move",
    meaning: "動く",
    page: 94,
    section: 68
  },
  {
    word: "cross",
    meaning: "(を)横切る",
    page: 94,
    section: 68
  },
  {
    word: "return",
    meaning: "戻る",
    page: 94,
    section: 68
  },
  {
    word: "turn",
    meaning: "回る",
    page: 94,
    section: 68
  },
  {
    word: "spread",
    meaning: "広がる",
    page: 94,
    section: 68
  },
  {
    word: "hurry",
    meaning: "急ぐ",
    page: 94,
    section: 68
  },
  {
    word: "ride",
    meaning: "(車など)(に)乗る",
    page: 94,
    section: 68
  },
  {
    word: "impression",
    meaning: "印象",
    page: 96,
    section: 69
  },
  {
    word: "image",
    meaning: "イメージ",
    page: 96,
    section: 69
  },
  {
    word: "personal",
    meaning: "個人的な",
    page: 96,
    section: 69
  },
  {
    word: "private",
    meaning: "私用の",
    page: 96,
    section: 69
  },
  {
    word: "individual",
    meaning: "個々の",
    page: 96,
    section: 69
  },
  {
    word: "celebrate",
    meaning: "(を)祝う",
    page: 96,
    section: 70
  },
  {
    word: "nod",
    meaning: "うなずく",
    page: 96,
    section: 70
  },
  {
    word: "pardon",
    meaning: "を許す",
    page: 96,
    section: 70
  },
  {
    word: "please",
    meaning: "を喜ばせる",
    page: 96,
    section: 70
  },
  {
    word: "worry",
    meaning: "心配する",
    page: 96,
    section: 70
  },
  {
    word: "wish",
    meaning: "(を)望む",
    page: 96,
    section: 70
  },
  {
    word: "depend (depend on [upon] ...で)",
    meaning: "...に頼る",
    page: 96,
    section: 70
  },
  {
    word: "rely (rely on [upon] ...で)",
    meaning: "...に頼る",
    page: 96,
    section: 70
  },
  {
    word: "minute",
    meaning: "分",
    page: 98,
    section: 71
  },
  {
    word: "moment",
    meaning: "瞬間",
    page: 98,
    section: 71
  },
  {
    word: "rapid",
    meaning: "速い",
    page: 98,
    section: 71
  },
  {
    word: "brief",
    meaning: "短期間の",
    page: 98,
    section: 71
  },
  {
    word: "immediately",
    meaning: "ただちに",
    page: 98,
    section: 71
  },
  {
    word: "current",
    meaning: "現在の",
    page: 98,
    section: 71
  },
  {
    word: "instantly",
    meaning: "すぐに",
    page: 98,
    section: 71
  },
  {
    word: "repeat",
    meaning: "(を)繰り返す",
    page: 98,
    section: 72
  },
  {
    word: "whisper",
    meaning: "(を)ささやく",
    page: 98,
    section: 72
  },
  {
    word: "pronounce",
    meaning: "(を)発音する",
    page: 98,
    section: 72
  },
  {
    word: "excuse",
    meaning: "を許す",
    page: 98,
    section: 72
  },
  {
    word: "literature",
    meaning: "文学(作品)",
    page: 100,
    section: 73
  },
  {
    word: "novel",
    meaning: "小説",
    page: 100,
    section: 73
  },
  {
    word: "sentence",
    meaning: "文",
    page: 100,
    section: 73
  },
  {
    word: "content",
    meaning: "内容",
    page: 100,
    section: 73
  },
  {
    word: "author",
    meaning: "著書",
    page: 100,
    section: 73
  },
  {
    word: "judge",
    meaning: "(を)判断する",
    page: 100,
    section: 74
  },
  {
    word: "solve",
    meaning: "(問題)を解く",
    page: 100,
    section: 74
  },
  {
    word: "prove",
    meaning: "を証明する",
    page: 100,
    section: 74
  },
  {
    word: "notice",
    meaning: "(に)気づく",
    page: 100,
    section: 74
  },
  {
    word: "realize",
    meaning: "に気づく",
    page: 100,
    section: 74
  },
  {
    word: "check",
    meaning: "(を)調べる",
    page: 100,
    section: 74
  },
  {
    word: "explain",
    meaning: "(を)説明する",
    page: 100,
    section: 74
  },
  {
    word: "imagine",
    meaning: "(を)想像する",
    page: 100,
    section: 74
  },
  {
    word: "adjust",
    meaning: "を調整(調節)する",
    page: 100,
    section: 74
  },
  {
    word: "expert",
    meaning: "専門家",
    page: 102,
    section: 75
  },
  {
    word: "professor",
    meaning: "教授",
    page: 102,
    section: 75
  },
  {
    word: "instruction",
    meaning: "指導",
    page: 102,
    section: 75
  },
  {
    word: "survey",
    meaning: "調査",
    page: 102,
    section: 75
  },
  {
    word: "grade",
    meaning: "成績",
    page: 102,
    section: 75
  },
  {
    word: "major",
    meaning: "先行する",
    page: 102,
    section: 75
  },
  {
    word: "appeal",
    meaning: "(世論・武力などに)訴える",
    page: 102,
    section: 76
  },
  {
    word: "communicate",
    meaning: "を伝える",
    page: 102,
    section: 76
  },
  {
    word: "introduce",
    meaning: "を紹介する",
    page: 102,
    section: 76
  },
  {
    word: "react",
    meaning: "反応する",
    page: 102,
    section: 76
  },
  {
    word: "respond",
    meaning: "(に)対応する",
    page: 102,
    section: 76
  },
  {
    word: "support",
    meaning: "を支える",
    page: 102,
    section: 76
  },
  {
    word: "treat",
    meaning: "を扱う",
    page: 102,
    section: 76
  },
  {
    word: "size",
    meaning: "大きさ",
    page: 104,
    section: 77
  },
  {
    word: "fat",
    meaning: "太った",
    page: 104,
    section: 77
  },
  {
    word: "bare",
    meaning: "裸の",
    page: 104,
    section: 77
  },
  {
    word: "advise",
    meaning: "(に)忠告する",
    page: 104,
    section: 78
  },
  {
    word: "decide",
    meaning: "を決める",
    page: 104,
    section: 78
  },
  {
    word: "demand",
    meaning: "を要求する",
    page: 104,
    section: 78
  },
  {
    word: "insist",
    meaning: "(と)主張する",
    page: 104,
    section: 78
  },
  {
    word: "forbid",
    meaning: "を禁止する",
    page: 104,
    section: 78
  },
  {
    word: "propose",
    meaning: "を提案する",
    page: 104,
    section: 78
  },
  {
    word: "request",
    meaning: "を要請する",
    page: 104,
    section: 78
  },
  {
    word: "suggest",
    meaning: "を提案する",
    page: 104,
    section: 78
  },
  {
    word: "origin",
    meaning: "起源",
    page: 106,
    section: 79
  },
  {
    word: "civilization",
    meaning: "文明",
    page: 106,
    section: 79
  },
  {
    word: "race",
    meaning: "人種",
    page: 106,
    section: 79
  },
  {
    word: "progress",
    meaning: "進歩",
    page: 106,
    section: 79
  },
  {
    word: "event",
    meaning: "できごと",
    page: 106,
    section: 79
  },
  {
    word: "adventure",
    meaning: "冒険",
    page: 106,
    section: 79
  },
  {
    word: "treasure",
    meaning: "宝物",
    page: 106,
    section: 79
  },
  {
    word: "crop",
    meaning: "農作物",
    page: 106,
    section: 79
  },
  {
    word: "harvest",
    meaning: "収穫",
    page: 106,
    section: 79
  },
  {
    word: "sew",
    meaning: "を縫う",
    page: 106,
    section: 80
  },
  {
    word: "receive",
    meaning: "を受け取る",
    page: 106,
    section: 80
  },
  {
    word: "bend",
    meaning: "を曲げる",
    page: 106,
    section: 80
  },
  {
    word: "collect",
    meaning: "を集める",
    page: 106,
    section: 80
  },
  {
    word: "fix",
    meaning: "を修理する",
    page: 106,
    section: 80
  },
  {
    word: "grab",
    meaning: "をつかむ",
    page: 106,
    section: 80
  },
  {
    word: "excellent",
    meaning: "優れた",
    page: 108,
    section: 81
  },
  {
    word: "essential",
    meaning: "不可欠の",
    page: 108,
    section: 81
  },
  {
    word: "proper",
    meaning: "適切な",
    page: 108,
    section: 81
  },
  {
    word: "worth",
    meaning: "〜の価値がある",
    page: 108,
    section: 81
  },
  {
    word: "severe",
    meaning: "(人・規律が)厳しい",
    page: 108,
    section: 81
  },
  {
    word: "awful",
    meaning: "ひどい",
    page: 108,
    section: 81
  },
  {
    word: "evil",
    meaning: "邪悪な",
    page: 108,
    section: 81
  },
  {
    word: "ugly",
    meaning: "みにくい",
    page: 108,
    section: 81
  },
  {
    word: "increase",
    meaning: "増える",
    page: 108,
    section: 82
  },
  {
    word: "reduce",
    meaning: "を減らす",
    page: 108,
    section: 82
  },
  {
    word: "lose",
    meaning: "を失う",
    page: 108,
    section: 82
  },
  {
    word: "produce",
    meaning: "を生産する",
    page: 108,
    section: 82
  },
  {
    word: "period",
    meaning: "期間",
    page: 110,
    section: 83
  },
  {
    word: "former",
    meaning: "前の",
    page: 110,
    section: 83
  },
  {
    word: "latter (通常 the 〜で)",
    meaning: "あとの",
    page: 110,
    section: 83
  },
  {
    word: "modern",
    meaning: "現代(近代)の",
    page: 110,
    section: 83
  },
  {
    word: "ancient",
    meaning: "古代の",
    page: 110,
    section: 83
  },
  {
    word: "afterward(s)",
    meaning: "あとで",
    page: 110,
    section: 83
  },
  {
    word: "tell",
    meaning: "(を)話す",
    page: 110,
    section: 84
  },
  {
    word: "say (say that ...で)",
    meaning: "...と言う",
    page: 110,
    section: 84
  },
  {
    word: "speak",
    meaning: "話す",
    page: 110,
    section: 84
  },
  {
    word: "talk",
    meaning: "話す",
    page: 110,
    section: 84
  },
  {
    word: "complete",
    meaning: "完全な",
    page: 112,
    section: 85
  },
  {
    word: "ideal",
    meaning: "理想的な",
    page: 112,
    section: 85
  },
  {
    word: "complex",
    meaning: "複雑な",
    page: 112,
    section: 85
  },
  {
    word: "general",
    meaning: "概略の",
    page: 112,
    section: 85
  },
  {
    word: "plain",
    meaning: "明らかな",
    page: 112,
    section: 85
  },
  {
    word: "available",
    meaning: "利用できる",
    page: 112,
    section: 85
  },
  {
    word: "fortunately",
    meaning: "幸運にも",
    page: 112,
    section: 85
  },
  {
    word: "borrow",
    meaning: "(無料で)を借りる",
    page: 112,
    section: 86
  },
  {
    word: "rent",
    meaning: "(土地・家など)を賃借りする",
    page: 112,
    section: 86
  },
  {
    word: "exchange",
    meaning: "を交換する",
    page: 112,
    section: 86
  },
  {
    word: "lend",
    meaning: "を貸す",
    page: 112,
    section: 86
  },
  {
    word: "fashion",
    meaning: "流行",
    page: 114,
    section: 87
  },
  {
    word: "crowd",
    meaning: "群衆",
    page: 114,
    section: 87
  },
  {
    word: "avenue",
    meaning: "大通り",
    page: 114,
    section: 87
  },
  {
    word: "suburb",
    meaning: "郊外",
    page: 114,
    section: 87
  },
  {
    word: "local",
    meaning: "地元の",
    page: 114,
    section: 87
  },
  {
    word: "suppose (suppose that ...で)",
    meaning: "...と思う",
    page: 114,
    section: 88
  },
  {
    word: "associate",
    meaning: "...で〜を連想する",
    page: 114,
    section: 88
  },
  {
    word: "regard (regard ... as 〜で)",
    meaning: "...を〜とみなす",
    page: 114,
    section: 88
  },
  {
    word: "wonder",
    meaning: "〜だろうかと思う",
    page: 114,
    section: 88
  },
  {
    word: "determine",
    meaning: "を決心する",
    page: 114,
    section: 88
  },
  {
    word: "identify",
    meaning: "が誰(何)だかわかる",
    page: 114,
    section: 88
  },
  {
    word: "wrap",
    meaning: "を包む",
    page: 116,
    section: 89
  },
  {
    word: "press",
    meaning: "(を)押す",
    page: 116,
    section: 89
  },
  {
    word: "polish",
    meaning: "をみがく",
    page: 116,
    section: 89
  },
  {
    word: "pack",
    meaning: "を詰め込む",
    page: 116,
    section: 89
  },
  {
    word: "mend",
    meaning: "を修繕する",
    page: 116,
    section: 89
  },
  {
    word: "hang",
    meaning: "を掛ける",
    page: 116,
    section: 89
  },
  {
    word: "excite",
    meaning: "を興奮させる",
    page: 116,
    section: 90
  },
  {
    word: "exciting",
    meaning: "興奮させる",
    page: 116,
    section: 90
  },
  {
    word: "excited",
    meaning: "(人が)興奮した",
    page: 116,
    section: 90
  },
  {
    word: "fasten",
    meaning: "を固定する",
    page: 118,
    section: 91
  },
  {
    word: "fold",
    meaning: "を折りたたむ",
    page: 118,
    section: 91
  },
  {
    word: "pour",
    meaning: "(液体など)を注ぐ",
    page: 118,
    section: 91
  },
  {
    word: "fit",
    meaning: "(に)合う",
    page: 118,
    section: 91
  },
  {
    word: "care",
    meaning: "を気にかける",
    page: 118,
    section: 91
  },
  {
    word: "interest",
    meaning: "に興味をもたせる",
    page: 118,
    section: 92
  },
  {
    word: "interesting",
    meaning: "興味深い",
    page: 118,
    section: 92
  },
  {
    word: "interested",
    meaning: "(人が)興味を持った",
    page: 118,
    section: 92
  },
  {
    word: "satisfy",
    meaning: "を満足させる",
    page: 118,
    section: 92
  },
  {
    word: "satisfying",
    meaning: "満足のいく",
    page: 118,
    section: 92
  },
  {
    word: "satisfied",
    meaning: "(人が)満足した",
    page: 118,
    section: 92
  },
  {
    word: "tire",
    meaning: "を疲れさせる",
    page: 118,
    section: 92
  },
  {
    word: "tiring",
    meaning: "疲れる",
    page: 118,
    section: 92
  },
  {
    word: "tired",
    meaning: "(人が)疲れた",
    page: 118,
    section: 92
  },
  {
    word: "occur",
    meaning: "起こる",
    page: 120,
    section: 93
  },
  {
    word: "quit",
    meaning: "(を)やめる",
    page: 120,
    section: 93
  },
  {
    word: "retire",
    meaning: "退職する",
    page: 120,
    section: 93
  },
  {
    word: "settle",
    meaning: "(紛争・問題など)を解決する",
    page: 120,
    section: 93
  },
  {
    word: "amaze",
    meaning: "をびっくりさせる",
    page: 120,
    section: 94
  },
  {
    word: "amazing",
    meaning: "びっくりするような",
    page: 120,
    section: 94
  },
  {
    word: "amazed",
    meaning: "(人が)びっくりした",
    page: 120,
    section: 94
  },
  {
    word: "amuse",
    meaning: "をおもしろがらせる",
    page: 120,
    section: 94
  },
  {
    word: "amusing",
    meaning: "おもしろい",
    page: 120,
    section: 94
  },
  {
    word: "amused",
    meaning: "(人が)おもしろがって",
    page: 120,
    section: 94
  },
  {
    word: "bore",
    meaning: "を退屈させる",
    page: 120,
    section: 94
  },
  {
    word: "boring",
    meaning: "退屈な",
    page: 120,
    section: 94
  },
  {
    word: "bored",
    meaning: "(人が)退屈した",
    page: 120,
    section: 94
  },
  {
    word: "religion",
    meaning: "宗教",
    page: 122,
    section: 95
  },
  {
    word: "soul",
    meaning: "魂",
    page: 122,
    section: 95
  },
  {
    word: "miracle",
    meaning: "奇跡",
    page: 122,
    section: 95
  },
  {
    word: "ghost",
    meaning: "幽霊",
    page: 122,
    section: 95
  },
  {
    word: "spirit",
    meaning: "精神",
    page: 122,
    section: 95
  },
  {
    word: "annoy",
    meaning: "をいらいらさせる",
    page: 122,
    section: 96
  },
  {
    word: "annoying",
    meaning: "いらいらさせる",
    page: 122,
    section: 96
  },
  {
    word: "annoyed",
    meaning: "(人が)いらいらした",
    page: 122,
    section: 96
  },
  {
    word: "confuse",
    meaning: "を混乱させる",
    page: 122,
    section: 96
  },
  {
    word: "confusing",
    meaning: "混乱させる(ような)",
    page: 122,
    section: 96
  },
  {
    word: "confused",
    meaning: "(人が)混乱した",
    page: 122,
    section: 96
  },
  {
    word: "disappoint",
    meaning: "を失望させる",
    page: 122,
    section: 96
  },
  {
    word: "disappointing",
    meaning: "失望させる",
    page: 122,
    section: 96
  },
  {
    word: "disappointed",
    meaning: "(人が)失望した",
    page: 122,
    section: 96
  },
  {
    word: "furious",
    meaning: "激怒した",
    page: 124,
    section: 97
  },
  {
    word: "glad",
    meaning: "うれしい",
    page: 124,
    section: 97
  },
  {
    word: "happy",
    meaning: "幸福な",
    page: 124,
    section: 97
  },
  {
    word: "sorry",
    meaning: "気の毒で",
    page: 124,
    section: 97
  },
  {
    word: "thankful",
    meaning: "感謝して",
    page: 124,
    section: 97
  },
  {
    word: "shock",
    meaning: "に衝撃(ショック)を与える",
    page: 124,
    section: 98
  },
  {
    word: "shocking",
    meaning: "ぞっとするような",
    page: 124,
    section: 98
  },
  {
    word: "shocked",
    meaning: "衝撃を受けた",
    page: 124,
    section: 98
  },
  {
    word: "surprise",
    meaning: "を驚かせる",
    page: 124,
    section: 98
  },
  {
    word: "surprising",
    meaning: "驚くべき",
    page: 124,
    section: 98
  },
  {
    word: "surprised",
    meaning: "驚いて",
    page: 124,
    section: 98
  },
  {
    word: "ocean",
    meaning: "海",
    page: 126,
    section: 99
  },
  {
    word: "palm",
    meaning: "ヤシ",
    page: 126,
    section: 99
  },
  {
    word: "coral",
    meaning: "サンゴ",
    page: 126,
    section: 99
  },
  {
    word: "reef",
    meaning: "磯",
    page: 126,
    section: 99
  },
  {
    word: "cave",
    meaning: "洞くつ",
    page: 126,
    section: 99
  },
  {
    word: "advantage",
    meaning: "利点",
    page: 126,
    section: 100
  },
  {
    word: "bond",
    meaning: "きずな",
    page: 126,
    section: 100
  },
  {
    word: "identity",
    meaning: "身元",
    page: 126,
    section: 100
  },
  {
    word: "impact",
    meaning: "強い影響",
    page: 126,
    section: 100
  },
  {
    word: "sight",
    meaning: "光景",
    page: 126,
    section: 100
  },
  {
    word: "site",
    meaning: "場所",
    page: 126,
    section: 100
  },
  {
    word: "sort",
    meaning: "種類",
    page: 126,
    section: 100
  },
  {
    word: "tip",
    meaning: "秘訣",
    page: 126,
    section: 100
  },
  {
    word: "version",
    meaning: "版",
    page: 126,
    section: 100
  },
  {
    word: "make a difference",
    meaning: "変化をもたらす",
    page: 128,
    section: 101
  },
  {
    word: "make the best of ...",
    meaning: "(悪い状況・条件など)を最大限に活用する",
    page: 128,
    section: 101
  },
  {
    word: "make use of ...",
    meaning: "...を利用する",
    page: 128,
    section: 101
  },
  {
    word: "make sure (of) ...",
    meaning: "...を確かめる",
    page: 128,
    section: 101
  },
  {
    word: "make up with ...",
    meaning: "...と仲直りをする",
    page: 128,
    section: 101
  },
  {
    word: "make out ...",
    meaning: "...を理解する",
    page: 128,
    section: 101
  },
  {
    word: "make it impossible for <人> to do",
    meaning: "<人>が〜するのを不可能にする",
    page: 128,
    section: 101
  },
  {
    word: "help <人> with ...",
    meaning: "<人>の...を手伝う",
    page: 128,
    section: 102
  },
  {
    word: "help ... (to) do",
    meaning: "...が〜するのを手伝う",
    page: 128,
    section: 102
  },
  {
    word: "cannot help -ing",
    meaning: "〜せずにはいられない",
    page: 128,
    section: 102
  },
  {
    word: "help (...) out",
    meaning: "(...を)手伝う",
    page: 128,
    section: 102
  },
  {
    word: "come up with ...",
    meaning: "(考えなど)を思いつく",
    page: 130,
    section: 103
  },
  {
    word: "come into being",
    meaning: "(ものが)誕生する",
    page: 130,
    section: 103
  },
  {
    word: "come about",
    meaning: "(ことが)起こる",
    page: 130,
    section: 103
  },
  {
    word: "come up",
    meaning: "(問題などが)生じる",
    page: 130,
    section: 103
  },
  {
    word: "come out",
    meaning: "(太陽・月など天体が)現れる",
    page: 130,
    section: 103
  },
  {
    word: "come [go] into effect",
    meaning: "(法律などが)施行される",
    page: 130,
    section: 103
  },
  {
    word: "stand by (...)",
    meaning: "...を支える",
    page: 130,
    section: 104
  },
  {
    word: "stand up for ...",
    meaning: "...を支持する",
    page: 130,
    section: 104
  },
  {
    word: "stand for ...",
    meaning: "...を表す",
    page: 130,
    section: 104
  },
  {
    word: "stand out",
    meaning: "目立つ",
    page: 130,
    section: 104
  },
  {
    word: "take after ...",
    meaning: "...に似ている",
    page: 132,
    section: 105
  },
  {
    word: "take up ...",
    meaning: "(趣味など)を始める",
    page: 132,
    section: 105
  },
  {
    word: "take place",
    meaning: "(式・行事などが)行われる",
    page: 132,
    section: 105
  },
  {
    word: "take one's time on [at] ...",
    meaning: "...をゆっくりやる",
    page: 132,
    section: 105
  },
  {
    word: "take in ...",
    meaning: "(客など)を受け入れる",
    page: 132,
    section: 105
  },
  {
    word: "take ... into account",
    meaning: "...を考慮(計算)に入れる",
    page: 132,
    section: 105
  },
  {
    word: "take into consideration",
    meaning: "...を考慮に入れる",
    page: 132,
    section: 105
  },
  {
    word: "take on ...",
    meaning: "...を引き受ける",
    page: 132,
    section: 105
  },
  {
    word: "bring out ...",
    meaning: "(製品など)を出す",
    page: 132,
    section: 106
  },
  {
    word: "bring oneself to do",
    meaning: "〜する気になる",
    page: 132,
    section: 106
  },
  {
    word: "bring ... to light",
    meaning: "(証拠など)を明るみに出す",
    page: 132,
    section: 106
  },
  {
    word: "bring ... home to <人>",
    meaning: "<人>に...を痛感させる",
    page: 132,
    section: 106
  },
  {
    word: "bring ... up",
    meaning: "...を育てる",
    page: 132,
    section: 106
  },
  {
    word: "keep ... from -ing",
    meaning: "...が〜するのを妨げる(防ぐ)",
    page: 134,
    section: 107
  },
  {
    word: "keep away from ...",
    meaning: "に近づかない",
    page: 134,
    section: 107
  },
  {
    word: "keep in touch with ...",
    meaning: "...と連絡を取り合う",
    page: 134,
    section: 107
  },
  {
    word: "keep ... to oneself",
    meaning: "...を人に話さないでおく",
    page: 134,
    section: 107
  },
  {
    word: "keep off ..,.",
    meaning: "...に立ち入らない",
    page: 134,
    section: 107
  },
  {
    word: "keep to ...",
    meaning: "(規則など)に従う",
    page: 134,
    section: 107
  },
  {
    word: "keep one's word [promise]",
    meaning: "約束を守る",
    page: 134,
    section: 107
  },
  {
    word: "keep an eye [one's eye(s)] on ...",
    meaning: "...を見張る",
    page: 134,
    section: 107
  },
  {
    word: "turn up",
    meaning: "現れる",
    page: 134,
    section: 108
  },
  {
    word: "turn out (to be) ...",
    meaning: "...だとわかる",
    page: 134,
    section: 108
  },
  {
    word: "turn down ...",
    meaning: "...を断る",
    page: 134,
    section: 108
  },
  {
    word: "by turns",
    meaning: "代わる代わるに",
    page: 134,
    section: 108
  },
  {
    word: "in turn",
    meaning: "順番に",
    page: 134,
    section: 108
  },
  {
    word: "get down to ...",
    meaning: "...に(真剣に)取り掛かる",
    page: 136,
    section: 109
  },
  {
    word: "get over ...",
    meaning: "...を乗り越える",
    page: 136,
    section: 109
  },
  {
    word: "get the better of ...",
    meaning: "...に勝つ",
    page: 136,
    section: 109
  },
  {
    word: "get rid of ...",
    meaning: "...を取り除く",
    page: 136,
    section: 109
  },
  {
    word: "get through ...",
    meaning: "...を終える",
    page: 136,
    section: 109
  },
  {
    word: "get at ...",
    meaning: "...を言おうとする",
    page: 136,
    section: 109
  },
  {
    word: "hold the line",
    meaning: "電話を切らないでおく",
    page: 136,
    section: 110
  },
  {
    word: "hold one's breath",
    meaning: "息を止める",
    page: 136,
    section: 110
  },
  {
    word: "hold one's tongue",
    meaning: "黙っている",
    page: 136,
    section: 110
  },
  {
    word: "hold good [true]",
    meaning: "(法律などが)有効である",
    page: 136,
    section: 110
  },
  {
    word: "hold out (...)",
    meaning: "(攻撃などに)耐える",
    page: 136,
    section: 110
  },
  {
    word: "hold back ...",
    meaning: "...を押しとどめる",
    page: 136,
    section: 110
  },
  {
    word: "let ... alone",
    meaning: "...をそのままにしておく",
    page: 138,
    section: 111
  },
  {
    word: "let alone ...",
    meaning: "...は言うまでもなく",
    page: 138,
    section: 111
  },
  {
    word: "let ... down",
    meaning: "...をがっかりさせる",
    page: 138,
    section: 111
  },
  {
    word: "let ... out",
    meaning: "(秘密など)をもらす",
    page: 138,
    section: 111
  },
  {
    word: "let go of one's hand",
    meaning: "〜の手を放す",
    page: 138,
    section: 111
  },
  {
    word: "do over ...",
    meaning: "...をやり直す",
    page: 138,
    section: 112
  },
  {
    word: "do nothing but",
    meaning: "〜してばかりいる",
    page: 138,
    section: 112
  },
  {
    word: "do with ...",
    meaning: "...で間に合わせる",
    page: 138,
    section: 112
  },
  {
    word: "do without ...",
    meaning: "...無しで済ます",
    page: 138,
    section: 112
  },
  {
    word: "do ... good",
    meaning: "...に益をもたらす",
    page: 138,
    section: 112
  },
  {
    word: "any ... will do",
    meaning: "どんな...でも役に立つ",
    page: 138,
    section: 112
  },
  {
    word: "do away with ...",
    meaning: "...を廃止する",
    page: 138,
    section: 112
  },
  {
    word: "call (...) up",
    meaning: "(...に)電話をする",
    page: 140,
    section: 113
  },
  {
    word: "call for ...",
    meaning: "...を強く求める",
    page: 140,
    section: 113
  },
  {
    word: "call on <人>",
    meaning: "<人>を訪問する",
    page: 140,
    section: 113
  },
  {
    word: "call it a day",
    meaning: "(その日の)仕事を切り上げる",
    page: 140,
    section: 113
  },
  {
    word: "call (...) back",
    meaning: "(...に)折り返し電話する",
    page: 140,
    section: 113
  },
  {
    word: "call ... off",
    meaning: "...を中止する",
    page: 140,
    section: 113
  },
  {
    word: "call in",
    meaning: "...を中止する",
    page: 140,
    section: 113
  },
  {
    word: "put an end to ...",
    meaning: "...を終わらせる",
    page: 140,
    section: 114
  },
  {
    word: "put up with ...",
    meaning: "...を我慢する",
    page: 140,
    section: 114
  },
  {
    word: "put on ...",
    meaning: "(服など)を着る",
    page: 140,
    section: 114
  },
  {
    word: "put off ...",
    meaning: "...を延期する",
    page: 140,
    section: 114
  },
  {
    word: "put forward ...",
    meaning: "(意見・提案など)を出す",
    page: 140,
    section: 114
  },
  {
    word: "technique",
    meaning: "(専門)技術",
    page: 150,
    section: 115
  },
  {
    word: "method",
    meaning: "方法",
    page: 150,
    section: 115
  },
  {
    word: "manufacture",
    meaning: "製造",
    page: 150,
    section: 115
  },
  {
    word: "harm",
    meaning: "に害を与える",
    page: 150,
    section: 116
  },
  {
    word: "suffer",
    meaning: "苦しむ",
    page: 150,
    section: 116
  },
  {
    word: "hurt",
    meaning: "を傷つける",
    page: 150,
    section: 116
  },
  {
    word: "injure",
    meaning: "にけがをさせる",
    page: 150,
    section: 116
  },
  {
    word: "crash",
    meaning: "(車が)衝突する",
    page: 150,
    section: 116
  },
  {
    word: "destroy",
    meaning: "を破壊する",
    page: 150,
    section: 116
  },
  {
    word: "ruin",
    meaning: "を台無しにする",
    page: 150,
    section: 116
  },
  {
    word: "explode",
    meaning: "爆発する",
    page: 150,
    section: 116
  },
  {
    word: "shoot",
    meaning: "(を)撃つ",
    page: 150,
    section: 116
  },
  {
    word: "recover",
    meaning: "回復する",
    page: 150,
    section: 116
  },
  {
    word: "volcano",
    meaning: "火山",
    page: 152,
    section: 117
  },
  {
    word: "dust",
    meaning: "ほこり",
    page: 152,
    section: 117
  },
  {
    word: "soil",
    meaning: "土",
    page: 152,
    section: 117
  },
  {
    word: "solar",
    meaning: "太陽の",
    page: 152,
    section: 117
  },
  {
    word: "jewel",
    meaning: "宝石",
    page: 152,
    section: 117
  },
  {
    word: "agriculture",
    meaning: "農業",
    page: 152,
    section: 118
  },
  {
    word: "grain",
    meaning: "穀物",
    page: 152,
    section: 118
  },
  {
    word: "dessert",
    meaning: "デザート",
    page: 152,
    section: 118
  },
  {
    word: "raw",
    meaning: "(食べ物が)生の",
    page: 152,
    section: 118
  },
  {
    word: "shrimp",
    meaning: "(小)エビ",
    page: 152,
    section: 118
  },
  {
    word: "bake",
    meaning: "(パンなど)を焼く",
    page: 152,
    section: 118
  },
  {
    word: "boil",
    meaning: "を沸騰させる",
    page: 152,
    section: 118
  },
  {
    word: "melt",
    meaning: "を溶かす",
    page: 152,
    section: 118
  },
  {
    word: "feed",
    meaning: "に餌をあげる",
    page: 152,
    section: 118
  },
  {
    word: "blood",
    meaning: "血",
    page: 154,
    section: 119
  },
  {
    word: "breath",
    meaning: "息",
    page: 154,
    section: 119
  },
  {
    word: "birth",
    meaning: "誕生",
    page: 154,
    section: 119
  },
  {
    word: "disease",
    meaning: "(重大な疾患や感染症などの)病気",
    page: 154,
    section: 119
  },
  {
    word: "fever",
    meaning: "(病気の)熱",
    page: 154,
    section: 119
  },
  {
    word: "cough",
    meaning: "せき",
    page: 154,
    section: 119
  },
  {
    word: "aid",
    meaning: "手当",
    page: 154,
    section: 119
  },
  {
    word: "pale",
    meaning: "青ざめた",
    page: 154,
    section: 119
  },
  {
    word: "comfortable",
    meaning: "快適な",
    page: 154,
    section: 119
  },
  {
    word: "asleep",
    meaning: "眠って",
    page: 154,
    section: 119
  },
  {
    word: "hardly",
    meaning: "ほとんど〜ない",
    page: 154,
    section: 120
  },
  {
    word: "scarcely",
    meaning: "ほとんど〜ない",
    page: 154,
    section: 120
  },
  {
    word: "rarely",
    meaning: "ほとんど〜ない",
    page: 154,
    section: 120
  },
  {
    word: "seldom",
    meaning: "ほとんど〜ない",
    page: 154,
    section: 120
  },
  {
    word: "government",
    meaning: "政府",
    page: 156,
    section: 121
  },
  {
    word: "politics",
    meaning: "政治(学)",
    page: 156,
    section: 121
  },
  {
    word: "policy",
    meaning: "政策",
    page: 156,
    section: 121
  },
  {
    word: "democracy",
    meaning: "民主主義",
    page: 156,
    section: 121
  },
  {
    word: "system",
    meaning: "制度",
    page: 156,
    section: 121
  },
  {
    word: "president",
    meaning: "大統領",
    page: 156,
    section: 121
  },
  {
    word: "citizen",
    meaning: "市民",
    page: 156,
    section: 121
  },
  {
    word: "official",
    meaning: "公式の",
    page: 156,
    section: 121
  },
  {
    word: "doubt (doubt that [if, whether] ...で)",
    meaning: "(好ましく内容を否定的に)...ではないと思う",
    page: 156,
    section: 122
  },
  {
    word: "write",
    meaning: "(文字など)を書く",
    page: 156,
    section: 122
  },
  {
    word: "draw",
    meaning: "(線で絵や図形など)を描く",
    page: 156,
    section: 122
  },
  {
    word: "challenge",
    meaning: "に異議を唱える",
    page: 158,
    section: 123
  },
  {
    word: "achieve",
    meaning: "を達成する",
    page: 158,
    section: 123
  },
  {
    word: "struggle",
    meaning: "闘う",
    page: 158,
    section: 123
  },
  {
    word: "chase",
    meaning: "を追跡する",
    page: 158,
    section: 123
  },
  {
    word: "careless",
    meaning: "不注意な",
    page: 158,
    section: 124
  },
  {
    word: "wise",
    meaning: "懸命な",
    page: 158,
    section: 124
  },
  {
    word: "foolish",
    meaning: "愚かな",
    page: 158,
    section: 124
  },
  {
    word: "clever",
    meaning: "利口な",
    page: 158,
    section: 124
  },
  {
    word: "stupid",
    meaning: "ばかな",
    page: 158,
    section: 124
  },
  {
    word: "kind",
    meaning: "親切な",
    page: 158,
    section: 124
  },
  {
    word: "considerate",
    meaning: "思いやりがある",
    page: 158,
    section: 124
  },
  {
    word: "polite",
    meaning: "礼儀正しい",
    page: 158,
    section: 124
  },
  {
    word: "rude",
    meaning: "失礼な",
    page: 158,
    section: 124
  },
  {
    word: "cruel",
    meaning: "残酷な",
    page: 158,
    section: 124
  },
  {
    word: "frequently",
    meaning: "頻繁に",
    page: 160,
    section: 125
  },
  {
    word: "occasionally",
    meaning: "たまに",
    page: 160,
    section: 125
  },
  {
    word: "gradually",
    meaning: "だんだんと",
    page: 160,
    section: 125
  },
  {
    word: "finally",
    meaning: "ようやく",
    page: 160,
    section: 125
  },
  {
    word: "exercise",
    meaning: "運動する",
    page: 160,
    section: 126
  },
  {
    word: "operate",
    meaning: "(機械など)を操作する",
    page: 160,
    section: 126
  },
  {
    word: "bow",
    meaning: "おじぎをする",
    page: 160,
    section: 126
  },
  {
    word: "lift",
    meaning: "を持ち上げる",
    page: 160,
    section: 126
  },
  {
    word: "row",
    meaning: "ボートを漕ぐ",
    page: 160,
    section: 126
  },
  {
    word: "roll",
    meaning: "転がる",
    page: 160,
    section: 126
  },
  {
    word: "float",
    meaning: "浮かぶ",
    page: 160,
    section: 126
  },
  {
    word: "eliminate",
    meaning: "を削除する",
    page: 160,
    section: 126
  },
  {
    word: "perform",
    meaning: "演じる",
    page: 160,
    section: 126
  },
  {
    word: "confidence",
    meaning: "信頼",
    page: 162,
    section: 127
  },
  {
    word: "effort",
    meaning: "努力",
    page: 162,
    section: 127
  },
  {
    word: "favor",
    meaning: "好意",
    page: 162,
    section: 127
  },
  {
    word: "responsible",
    meaning: "責任のある",
    page: 162,
    section: 127
  },
  {
    word: "serious",
    meaning: "真剣な",
    page: 162,
    section: 127
  },
  {
    word: "curious",
    meaning: "好奇心の強い",
    page: 162,
    section: 127
  },
  {
    word: "aggressive",
    meaning: "攻撃的な",
    page: 162,
    section: 127
  },
  {
    word: "fear",
    meaning: "恐怖",
    page: 162,
    section: 127
  },
  {
    word: "superior",
    meaning: "優れた",
    page: 162,
    section: 128
  },
  {
    word: "inferior",
    meaning: "劣った",
    page: 162,
    section: 128
  },
  {
    word: "senior",
    meaning: "年上の",
    page: 162,
    section: 128
  },
  {
    word: "junior",
    meaning: "年下の",
    page: 162,
    section: 128
  },
  {
    word: "prefer",
    meaning: "を好む",
    page: 162,
    section: 128
  },
  {
    word: "thief",
    meaning: "どろぼう",
    page: 164,
    section: 129
  },
  {
    word: "crime",
    meaning: "(法律上の)罪",
    page: 164,
    section: 129
  },
  {
    word: "battle",
    meaning: "(局地的な)戦闘",
    page: 164,
    section: 129
  },
  {
    word: "weapon",
    meaning: "武器",
    page: 164,
    section: 129
  },
  {
    word: "enemy",
    meaning: "敵",
    page: 164,
    section: 129
  },
  {
    word: "alarm",
    meaning: "警報(器)",
    page: 164,
    section: 129
  },
  {
    word: "guilty",
    meaning: "有罪の",
    page: 164,
    section: 129
  },
  {
    word: "outbreak",
    meaning: "発生",
    page: 164,
    section: 129
  },
  {
    word: "rush",
    meaning: "に突撃する",
    page: 164,
    section: 129
  },
  {
    word: "pity",
    meaning: "あわれみ",
    page: 164,
    section: 130
  },
  {
    word: "dislike",
    meaning: "を嫌がる",
    page: 164,
    section: 130
  },
  {
    word: "hesitate",
    meaning: "をためらう",
    page: 164,
    section: 130
  },
  {
    word: "lead",
    meaning: "を導く",
    page: 166,
    section: 131
  },
  {
    word: "conduct",
    meaning: "を行う",
    page: 166,
    section: 131
  },
  {
    word: "direct",
    meaning: "を向ける",
    page: 166,
    section: 131
  },
  {
    word: "influence",
    meaning: "に(間接的な)影響を与える",
    page: 166,
    section: 131
  },
  {
    word: "affect",
    meaning: "に(直接的な)影響を与える",
    page: 166,
    section: 131
  },
  {
    word: "exert",
    meaning: "(力・影響力など)を使う",
    page: 166,
    section: 131
  },
  {
    word: "favorite",
    meaning: "お気に入りの",
    page: 166,
    section: 131
  },
  {
    word: "favorable",
    meaning: "(返事などが)好意的な",
    page: 166,
    section: 132
  },
  {
    word: "industrial",
    meaning: "産業の",
    page: 166,
    section: 132
  },
  {
    word: "industrious",
    meaning: "勤勉な",
    page: 166,
    section: 132
  },
  {
    word: "sensitive",
    meaning: "敏感な",
    page: 166,
    section: 132
  },
  {
    word: "sensible",
    meaning: "分別のある",
    page: 166,
    section: 132
  },
  {
    word: "display",
    meaning: "を陳列する",
    page: 168,
    section: 133
  },
  {
    word: "arrange",
    meaning: "を手配する",
    page: 168,
    section: 133
  },
  {
    word: "imitate",
    meaning: "をまねる",
    page: 168,
    section: 133
  },
  {
    word: "indicate",
    meaning: "を示す",
    page: 168,
    section: 133
  },
  {
    word: "behave",
    meaning: "ふるまう",
    page: 168,
    section: 133
  },
  {
    word: "attract",
    meaning: "を引き付ける",
    page: 168,
    section: 133
  },
  {
    word: "entertain",
    meaning: "を楽しませる",
    page: 168,
    section: 133
  },
  {
    word: "successful",
    meaning: "成功した",
    page: 168,
    section: 134
  },
  {
    word: "successive",
    meaning: "連続の",
    page: 168,
    section: 134
  },
  {
    word: "literate",
    meaning: "(人が)読み書きができる",
    page: 168,
    section: 134
  },
  {
    word: "literal",
    meaning: "文字通りの",
    page: 168,
    section: 134
  },
  {
    word: "literary",
    meaning: "文学の",
    page: 168,
    section: 134
  },
  {
    word: "healthful",
    meaning: "健康に良い",
    page: 170,
    section: 135
  },
  {
    word: "healthy",
    meaning: "健康な",
    page: 170,
    section: 135
  },
  {
    word: "invaluable",
    meaning: "非常に価値のある",
    page: 170,
    section: 135
  },
  {
    word: "valueless",
    meaning: "価値のない",
    page: 170,
    section: 135
  },
  {
    word: "social",
    meaning: "社会の",
    page: 170,
    section: 135
  },
  {
    word: "sociable",
    meaning: "社交的な",
    page: 170,
    section: 135
  },
  {
    word: "minor",
    meaning: "重要でない",
    page: 170,
    section: 136
  },
  {
    word: "collective",
    meaning: "集合的な",
    page: 170,
    section: 136
  },
  {
    word: "overall",
    meaning: "全体の",
    page: 170,
    section: 136
  },
  {
    word: "internal",
    meaning: "内(部)の",
    page: 170,
    section: 136
  },
  {
    word: "commonly",
    meaning: "一般に",
    page: 170,
    section: 136
  },
  {
    word: "totally",
    meaning: "まったく",
    page: 170,
    section: 136
  },
  {
    word: "eventually",
    meaning: "結局は",
    page: 170,
    section: 136
  },
  {
    word: "primarily",
    meaning: "おもに",
    page: 170,
    section: 136
  },
  {
    word: "alike",
    meaning: "似ている",
    page: 172,
    section: 137
  },
  {
    word: "similar",
    meaning: "同類の",
    page: 172,
    section: 137
  },
  {
    word: "equal",
    meaning: "等しい",
    page: 172,
    section: 137
  },
  {
    word: "variety",
    meaning: "種類",
    page: 172,
    section: 137
  },
  {
    word: "state",
    meaning: "を(はっきり)述べる",
    page: 172,
    section: 138
  },
  {
    word: "refer",
    meaning: "言及する",
    page: 172,
    section: 138
  },
  {
    word: "claim",
    meaning: "を主張する",
    page: 172,
    section: 138
  },
  {
    word: "approve",
    meaning: "(に)賛成する",
    page: 172,
    section: 138
  },
  {
    word: "reccomend",
    meaning: "を勧める",
    page: 172,
    section: 138
  },
  {
    word: "reply",
    meaning: "返事をする",
    page: 172,
    section: 138
  },
  {
    word: "correct",
    meaning: "を訂正する",
    page: 172,
    section: 138
  },
  {
    word: "accept",
    meaning: "を受け入れる",
    page: 172,
    section: 138
  },
  {
    word: "debate",
    meaning: "を討論する",
    page: 172,
    section: 138
  },
  {
    word: "despite",
    meaning: "〜にもかかわらず",
    page: 174,
    section: 139
  },
  {
    word: "beyond",
    meaning: "〜を越えて",
    page: 174,
    section: 139
  },
  {
    word: "beneath",
    meaning: "〜の下に",
    page: 174,
    section: 139
  },
  {
    word: "besides",
    meaning: "〜のほかに",
    page: 174,
    section: 139
  },
  {
    word: "throughout",
    meaning: "〜のいたるところに",
    page: 174,
    section: 139
  },
  {
    word: "therefore",
    meaning: "したがって",
    page: 174,
    section: 139
  },
  {
    word: "anyway",
    meaning: "とにかく",
    page: 174,
    section: 139
  },
  {
    word: "high",
    meaning: "(高さ・位置が)高い",
    page: 174,
    section: 140
  },
  {
    word: "low",
    meaning: "(高さ・位置が)低い",
    page: 174,
    section: 140
  },
  {
    word: "expensive",
    meaning: "(品物が)高価な",
    page: 174,
    section: 140
  },
  {
    word: "cheap",
    meaning: "(品物が)安い",
    page: 174,
    section: 140
  },
  {
    word: "large",
    meaning: "(数・量が)多い",
    page: 174,
    section: 140
  },
  {
    word: "small",
    meaning: "(数・量が)少ない",
    page: 174,
    section: 140
  },
  {
    word: "majority",
    meaning: "多数派",
    page: 174,
    section: 140
  },
  {
    word: "minority",
    meaning: "少数派",
    page: 174,
    section: 140
  },
  {
    word: "estimate",
    meaning: "(を)見積もる",
    page: 176,
    section: 141
  },
  {
    word: "measure",
    meaning: "(を)測定する",
    page: 176,
    section: 141
  },
  {
    word: "divide",
    meaning: "を分ける",
    page: 176,
    section: 141
  },
  {
    word: "add",
    meaning: "(を)足す",
    page: 176,
    section: 141
  },
  {
    word: "amount (amount to ...で)",
    meaning: "(合計して)...に達する",
    page: 176,
    section: 141
  },
  {
    word: "dimension",
    meaning: "面積",
    page: 176,
    section: 141
  },
  {
    word: "able",
    meaning: "できる",
    page: 176,
    section: 142
  },
  {
    word: "capable",
    meaning: "能力がある",
    page: 176,
    section: 142
  },
  {
    word: "possible",
    meaning: "可能な",
    page: 176,
    section: 142
  },
  {
    word: "attitude",
    meaning: "態度",
    page: 178,
    section: 143
  },
  {
    word: "manner",
    meaning: "方法",
    page: 178,
    section: 143
  },
  {
    word: "habit",
    meaning: "(個人の)習慣",
    page: 178,
    section: 143
  },
  {
    word: "appointment",
    meaning: "(面会の)約束",
    page: 178,
    section: 143
  },
  {
    word: "concern",
    meaning: "関心",
    page: 178,
    section: 143
  },
  {
    word: "affair",
    meaning: "情勢",
    page: 178,
    section: 143
  },
  {
    word: "consensus",
    meaning: "意見の一致",
    page: 178,
    section: 143
  },
  {
    word: "announce",
    meaning: "を公表する",
    page: 178,
    section: 144
  },
  {
    word: "greet",
    meaning: "にあいさつをする",
    page: 178,
    section: 144
  },
  {
    word: "scold",
    meaning: "(を)しかる",
    page: 178,
    section: 144
  },
  {
    word: "scream",
    meaning: "悲鳴を上げる",
    page: 178,
    section: 144
  },
  {
    word: "quarrel",
    meaning: "口論する",
    page: 178,
    section: 144
  },
  {
    word: "breathe",
    meaning: "呼吸する",
    page: 178,
    section: 144
  },
  {
    word: "sigh",
    meaning: "ため息をつく",
    page: 178,
    section: 144
  },
  {
    word: "normal",
    meaning: "標準的な",
    page: 180,
    section: 145
  },
  {
    word: "ordinary",
    meaning: "ふつうの",
    page: 180,
    section: 145
  },
  {
    word: "average",
    meaning: "平均的な",
    page: 180,
    section: 145
  },
  {
    word: "regular",
    meaning: "規則的な",
    page: 180,
    section: 145
  },
  {
    word: "rare",
    meaning: "まれな",
    page: 180,
    section: 145
  },
  {
    word: "particular",
    meaning: "特定の",
    page: 180,
    section: 145
  },
  {
    word: "relative",
    meaning: "相対的な",
    page: 180,
    section: 145
  },
  {
    word: "publish",
    meaning: "(を)出版する",
    page: 180,
    section: 146
  },
  {
    word: "print",
    meaning: "(を)印刷する",
    page: 180,
    section: 146
  },
  {
    word: "broadcast",
    meaning: "を放送する",
    page: 180,
    section: 146
  },
  {
    word: "create",
    meaning: "を創造する",
    page: 180,
    section: 146
  },
  {
    word: "design",
    meaning: "を設計する",
    page: 180,
    section: 146
  },
  {
    word: "media",
    meaning: "(マス)メディア",
    page: 180,
    section: 146
  },
  {
    word: "murder",
    meaning: "(人)を殺す",
    page: 182,
    section: 147
  },
  {
    word: "arrest",
    meaning: "を逮捕する",
    page: 182,
    section: 147
  },
  {
    word: "seize",
    meaning: "を押収する",
    page: 182,
    section: 147
  },
  {
    word: "surround",
    meaning: "を囲む",
    page: 182,
    section: 147
  },
  {
    word: "oppress",
    meaning: "(権力などで)をしいたげる",
    page: 182,
    section: 147
  },
  {
    word: "trigger",
    meaning: "引き金",
    page: 182,
    section: 147
  },
  {
    word: "dangerous",
    meaning: "危険な",
    page: 182,
    section: 148
  },
  {
    word: "useless",
    meaning: "むだな",
    page: 182,
    section: 148
  },
  {
    word: "impossible",
    meaning: "不可能な",
    page: 182,
    section: 148
  },
  {
    word: "convenient",
    meaning: "便利な",
    page: 182,
    section: 148
  },
  {
    word: "necessary",
    meaning: "必要な",
    page: 182,
    section: 148
  },
  {
    word: "topic",
    meaning: "話題",
    page: 184,
    section: 149
  },
  {
    word: "direction",
    meaning: "指揮",
    page: 184,
    section: 149
  },
  {
    word: "result",
    meaning: "結果",
    page: 184,
    section: 149
  },
  {
    word: "conclusion",
    meaning: "結論",
    page: 184,
    section: 149
  },
  {
    word: "opportunity",
    meaning: "機会",
    page: 184,
    section: 149
  },
  {
    word: "principal",
    meaning: "おもな",
    page: 184,
    section: 149
  },
  {
    word: "opposite",
    meaning: "(性質・立場が)正反対の",
    page: 184,
    section: 149
  },
  {
    word: "poll",
    meaning: "世論調査",
    page: 184,
    section: 149
  },
  {
    word: "admire",
    meaning: "に感心する",
    page: 184,
    section: 150
  },
  {
    word: "anticipate",
    meaning: "を期待する",
    page: 184,
    section: 150
  },
  {
    word: "contradict",
    meaning: "と矛盾する",
    page: 184,
    section: 150
  },
  {
    word: "distract",
    meaning: "気を散らす",
    page: 184,
    section: 150
  },
  {
    word: "board",
    meaning: "委員会",
    page: 186,
    section: 151
  },
  {
    word: "committee",
    meaning: "委員会",
    page: 186,
    section: 151
  },
  {
    word: "statement",
    meaning: "声明",
    page: 186,
    section: 151
  },
  {
    word: "strategy",
    meaning: "戦略",
    page: 186,
    section: 151
  },
  {
    word: "gain",
    meaning: "を得る",
    page: 186,
    section: 152
  },
  {
    word: "obtain",
    meaning: "を手に入れる",
    page: 186,
    section: 152
  },
  {
    word: "score",
    meaning: "(得点・点数)を取る",
    page: 186,
    section: 152
  },
  {
    word: "lack",
    meaning: "を欠く",
    page: 186,
    section: 152
  },
  {
    word: "decrease",
    meaning: "減る",
    page: 186,
    section: 152
  },
  {
    word: "replace",
    meaning: "に取って代わる",
    page: 186,
    section: 152
  },
  {
    word: "remove",
    meaning: "を取り除く",
    page: 186,
    section: 152
  },
  {
    word: "adopt",
    meaning: "を採用する",
    page: 186,
    section: 152
  },
  {
    word: "stare",
    meaning: "(を)じっと見る",
    page: 188,
    section: 153
  },
  {
    word: "discover",
    meaning: "を発見する",
    page: 188,
    section: 153
  },
  {
    word: "seek",
    meaning: "(を)捜す",
    page: 188,
    section: 153
  },
  {
    word: "search",
    meaning: "(場所)を捜す",
    page: 188,
    section: 153
  },
  {
    word: "recognize",
    meaning: "が誰(何)だかわかる",
    page: 188,
    section: 153
  },
  {
    word: "advice",
    meaning: "忠告",
    page: 188,
    section: 154
  },
  {
    word: "baggage",
    meaning: "(旅行の)手荷物",
    page: 188,
    section: 154
  },
  {
    word: "furniture",
    meaning: "家具",
    page: 188,
    section: 154
  },
  {
    word: "information",
    meaning: "情報",
    page: 188,
    section: 154
  },
  {
    word: "machinery",
    meaning: "機械装置",
    page: 188,
    section: 154
  },
  {
    word: "news",
    meaning: "報道",
    page: 188,
    section: 154
  },
  {
    word: "access",
    meaning: "接近",
    page: 188,
    section: 154
  },
  {
    word: "flock",
    meaning: "(鳥や羊の)群れ",
    page: 190,
    section: 155
  },
  {
    word: "herd",
    meaning: "(牛や馬の)群れ",
    page: 190,
    section: 155
  },
  {
    word: "school",
    meaning: "(魚の)群れ",
    page: 190,
    section: 155
  },
  {
    word: "shade",
    meaning: "(日)陰",
    page: 190,
    section: 155
  },
  {
    word: "shadow",
    meaning: "影",
    page: 190,
    section: 155
  },
  {
    word: "dentist",
    meaning: "歯医者",
    page: 190,
    section: 155
  },
  {
    word: "surgeon",
    meaning: "外界",
    page: 190,
    section: 155
  },
  {
    word: "physician",
    meaning: "医者",
    page: 190,
    section: 155
  },
  {
    word: "repair",
    meaning: "を修理する",
    page: 190,
    section: 155
  },
  {
    word: "restore",
    meaning: "を修復する",
    page: 190,
    section: 155
  },
  {
    word: "homework",
    meaning: "宿題",
    page: 190,
    section: 156
  },
  {
    word: "housework",
    meaning: "家事",
    page: 190,
    section: 156
  },
  {
    word: "poetry",
    meaning: "(集合的に)詩",
    page: 190,
    section: 156
  },
  {
    word: "scenery",
    meaning: "風景",
    page: 190,
    section: 156
  },
  {
    word: "fun",
    meaning: "楽しみ",
    page: 190,
    section: 156
  },
  {
    word: "economy",
    meaning: "経済(活動)",
    page: 192,
    section: 157
  },
  {
    word: "price",
    meaning: "価格",
    page: 192,
    section: 157
  },
  {
    word: "trade",
    meaning: "貿易",
    page: 192,
    section: 157
  },
  {
    word: "industry",
    meaning: "産業",
    page: 192,
    section: 157
  },
  {
    word: "loss",
    meaning: "損失",
    page: 192,
    section: 157
  },
  {
    word: "consumer",
    meaning: "消費者",
    page: 192,
    section: 157
  },
  {
    word: "duty",
    meaning: "関税",
    page: 192,
    section: 157
  },
  {
    word: "balance",
    meaning: "(預金などの)残高",
    page: 192,
    section: 157
  },
  {
    word: "guarantee",
    meaning: "を保証する",
    page: 192,
    section: 157
  },
  {
    word: "join",
    meaning: "(人や団体)に加わる",
    page: 192,
    section: 158
  },
  {
    word: "participate (participate in ...で)",
    meaning: "(活動)に参加する",
    page: 192,
    section: 158
  },
  {
    word: "organize",
    meaning: "(行事・活動など)を準備をする",
    page: 192,
    section: 158
  },
  {
    word: "unite",
    meaning: "団結(協力)する",
    page: 192,
    section: 158
  },
  {
    word: "make oneself understood",
    meaning: "自分の意志を伝える",
    page: 194,
    section: 159
  },
  {
    word: "make a [one's living]",
    meaning: "生計を立てる",
    page: 194,
    section: 159
  },
  {
    word: "make way for ...",
    meaning: "...に道を譲る",
    page: 194,
    section: 159
  },
  {
    word: "make one's way",
    meaning: "(やっとのことで)進む",
    page: 194,
    section: 159
  },
  {
    word: "make for ...",
    meaning: "...の方へ向かう",
    page: 194,
    section: 159
  },
  {
    word: "make oneself at home",
    meaning: "気楽にする",
    page: 194,
    section: 159
  },
  {
    word: "make friends with ...",
    meaning: "...と友だちになる",
    page: 194,
    section: 159
  },
  {
    word: "make fun of ...",
    meaning: "...をからかう",
    page: 194,
    section: 159
  },
  {
    word: "make up ...",
    meaning: "(話・嘘など)をでっちあげる",
    page: 194,
    section: 159
  },
  {
    word: "make up for ...",
    meaning: "...の埋め合わせをする",
    page: 194,
    section: 159
  },
  {
    word: "make allowance(s) for ...",
    meaning: "...を考慮に入れる",
    page: 194,
    section: 159
  },
  {
    word: "make it a rule to do",
    meaning: "〜することにしている",
    page: 194,
    section: 159
  },
  {
    word: "look <人> in the face",
    meaning: "<人>の顔をじっと見る",
    page: 196,
    section: 160
  },
  {
    word: "look like ...",
    meaning: "...に似ている",
    page: 196,
    section: 160
  },
  {
    word: "look ... up in 〜",
    meaning: "...を〜で調べる",
    page: 196,
    section: 160
  },
  {
    word: "look into ...",
    meaning: "...を調査する",
    page: 196,
    section: 160
  },
  {
    word: "look ... over",
    meaning: "...にざっと目を通す",
    page: 196,
    section: 160
  },
  {
    word: "look up to ...",
    meaning: "...を尊敬する",
    page: 196,
    section: 160
  },
  {
    word: "look down on [upon] ...",
    meaning: "...を見下す",
    page: 196,
    section: 160
  },
  {
    word: "look on [upon] ... as 〜",
    meaning: "...を〜とみなす",
    page: 196,
    section: 160
  },
  {
    word: "look [watch] out for ...",
    meaning: "...に気をつける",
    page: 196,
    section: 160
  },
  {
    word: "look back on [upon] ...",
    meaning: "...を回想する",
    page: 196,
    section: 160
  },
  {
    word: "based on 〜",
    meaning: "〜に基づいて",
    page: 198,
    section: 161
  },
  {
    word: "break out",
    meaning: "発生する",
    page: 198,
    section: 161
  },
  {
    word: "carry on (〜)",
    meaning: "(〜を)続ける",
    page: 198,
    section: 161
  },
  {
    word: "carry out ...",
    meaning: "〜を実行する",
    page: 198,
    section: 161
  },
  {
    word: "catch up with 〜",
    meaning: "〜に追いつく",
    page: 198,
    section: 161
  },
  {
    word: "fill out ...",
    meaning: "〜に記入する",
    page: 198,
    section: 161
  },
  {
    word: "tell ... from 〜",
    meaning: "...を〜と見分ける",
    page: 198,
    section: 161
  },
  {
    word: "tell ... off",
    meaning: "...をしかる",
    page: 198,
    section: 161
  },
  {
    word: "feel free to do",
    meaning: "自由に〜する",
    page: 198,
    section: 161
  },
  {
    word: "feel ill at ease",
    meaning: "落ち着かない感じがする",
    page: 198,
    section: 161
  },
  {
    word: "show up",
    meaning: "現れる",
    page: 198,
    section: 161
  },
  {
    word: "hand in ...",
    meaning: "...を提出する",
    page: 198,
    section: 161
  },
  {
    word: "learn to do",
    meaning: "〜ができるようになる",
    page: 198,
    section: 161
  },
  {
    word: "think over ...",
    meaning: "...をじっくり考える",
    page: 198,
    section: 161
  },
  {
    word: "every time ...",
    meaning: "...するときはいつも",
    page: 200,
    section: 162
  },
  {
    word: "one after another",
    meaning: "次々と",
    page: 200,
    section: 162
  },
  {
    word: "on end",
    meaning: "連続して",
    page: 200,
    section: 162
  },
  {
    word: "more often than not",
    meaning: "たいてい",
    page: 200,
    section: 162
  },
  {
    word: "on and off",
    meaning: "断続的に",
    page: 200,
    section: 162
  },
  {
    word: "once in a while",
    meaning: "ときどき",
    page: 200,
    section: 162
  },
  {
    word: "once (and) for all",
    meaning: "きっぱりと",
    page: 200,
    section: 162
  },
  {
    word: "in the long run",
    meaning: "長い目で見れば",
    page: 200,
    section: 162
  },
  {
    word: "as soon as ...",
    meaning: "...するとすぐに",
    page: 200,
    section: 163
  },
  {
    word: "the moment ...",
    meaning: "...するとすぐに",
    page: 200,
    section: 163
  },
  {
    word: "no sooner ... than 〜",
    meaning: "...すると同時に〜",
    page: 200,
    section: 163
  },
  {
    word: "hardly [scarcely] ... when [before] 〜",
    meaning: "...すると同時に〜",
    page: 200,
    section: 163
  },
  {
    word: "directly ...",
    meaning: "...するとすぐに",
    page: 200,
    section: 163
  },
  {
    word: "both A and B",
    meaning: "AもBも",
    page: 202,
    section: 164
  },
  {
    word: "not A but B",
    meaning: "AでなくB",
    page: 202,
    section: 164
  },
  {
    word: "not only A but (also) B",
    meaning: "AだけでなくBもまた",
    page: 202,
    section: 164
  },
  {
    word: "either A or B",
    meaning: "AがBのどちらか",
    page: 202,
    section: 164
  },
  {
    word: "neither A nor B",
    meaning: "AもBも〜ない",
    page: 202,
    section: 164
  },
  {
    word: "so that ...",
    meaning: "...するために",
    page: 202,
    section: 165
  },
  {
    word: "in order that ...",
    meaning: "...するために",
    page: 202,
    section: 165
  },
  {
    word: "for fear (that) ...",
    meaning: "...しないように",
    page: 202,
    section: 165
  },
  {
    word: "in case ...",
    meaning: "...するといけないから",
    page: 202,
    section: 165
  },
  {
    word: "have nothing to do with ...",
    meaning: "...とは関係がない",
    page: 202,
    section: 166
  },
  {
    word: "for nothing",
    meaning: "むだに",
    page: 202,
    section: 166
  },
  {
    word: "nothing but ...",
    meaning: "...しかない",
    page: 202,
    section: 166
  },
  {
    word: "something is wrong with ...",
    meaning: "...の調子(具合)が悪い",
    page: 202,
    section: 166
  },
  {
    word: "think nothing of ...",
    meaning: "...をなんとも思わない",
    page: 202,
    section: 166
  },
  {
    word: "too ... (for -) to do",
    meaning: "(-が)〜するには...すぎる",
    page: 204,
    section: 167
  },
  {
    word: "... enough to do",
    meaning: "〜するのに十分...",
    page: 204,
    section: 167
  },
  {
    word: "so ... as to do",
    meaning: "〜するほどに...",
    page: 204,
    section: 167
  },
  {
    word: "in order to do",
    meaning: "〜するために",
    page: 204,
    section: 167
  },
  {
    word: "in order not to do",
    meaning: "〜しないように",
    page: 204,
    section: 167
  },
  {
    word: "so as to do",
    meaning: "〜するために",
    page: 204,
    section: 167
  },
  {
    word: "so as not to do",
    meaning: "〜しないように",
    page: 204,
    section: 167
  },
  {
    word: "be to do",
    meaning: "〜することになっている",
    page: 204,
    section: 167
  },
  {
    word: "for the life of me (否定文で)",
    meaning: "どうしても〜ない",
    page: 206,
    section: 168
  },
  {
    word: "under [in] no circumstances",
    meaning: "どんな状況でも〜ない",
    page: 206,
    section: 168
  },
  {
    word: "seldom, if ever",
    meaning: "(たとえあったとしても)めったに〜ない",
    page: 206,
    section: 168
  },
  {
    word: "out of the question",
    meaning: "論外で",
    page: 206,
    section: 168
  },
  {
    word: "if one can help it",
    meaning: "できることなら",
    page: 206,
    section: 168
  },
  {
    word: "generally speaking",
    meaning: "一般的に言えば",
    page: 206,
    section: 169
  },
  {
    word: "speaking of ...",
    meaning: "...といえば",
    page: 206,
    section: 169
  },
  {
    word: "judging from ...",
    meaning: "...から判断すると",
    page: 206,
    section: 169
  },
  {
    word: "considering ...",
    meaning: "...を考慮すると",
    page: 206,
    section: 169
  },
  {
    word: "weather permitting",
    meaning: "天気が良ければ",
    page: 206,
    section: 169
  },
  {
    word: "with one's arms folded",
    meaning: "腕を組んで",
    page: 206,
    section: 169
  },
  {
    word: "had better do",
    meaning: "(〜しないと困ったことに鳴るので)〜しなさい",
    page: 208,
    section: 170
  },
  {
    word: "ought to do",
    meaning: "〜するべきだ",
    page: 208,
    section: 170
  },
  {
    word: "need not do",
    meaning: "〜する必要がない",
    page: 208,
    section: 170
  },
  {
    word: "there is no -ing",
    meaning: "〜できない",
    page: 208,
    section: 171
  },
  {
    word: "feel like -ing",
    meaning: "〜したい気がする",
    page: 208,
    section: 171
  },
  {
    word: "How about -ing?",
    meaning: "〜するのはどうですか",
    page: 208,
    section: 171
  },
  {
    word: "look forward to -ing",
    meaning: "〜するのを楽しみに待つ",
    page: 208,
    section: 171
  },
  {
    word: "be used to -ing",
    meaning: "〜するのに慣れている",
    page: 208,
    section: 171
  },
  {
    word: "object to -ing",
    meaning: "〜するのに反対する",
    page: 208,
    section: 171
  },
  {
    word: "when it comes to -ing",
    meaning: "〜するということになると",
    page: 208,
    section: 171
  },
  {
    word: "need -ing",
    meaning: "〜される必要がある",
    page: 208,
    section: 171
  },
  {
    word: "it goes without saying that ...",
    meaning: "...ということは言うまでもない",
    page: 208,
    section: 171
  },
  {
    word: "profit",
    meaning: "(金銭的な)利益",
    page: 218,
    section: 172
  },
  {
    word: "benefit",
    meaning: "利益",
    page: 218,
    section: 172
  },
  {
    word: "wealth",
    meaning: "富",
    page: 218,
    section: 172
  },
  {
    word: "value",
    meaning: "価値",
    page: 218,
    section: 172
  },
  {
    word: "capital",
    meaning: "資本(金)",
    page: 218,
    section: 172
  },
  {
    word: "share",
    meaning: "分前",
    page: 218,
    section: 172
  },
  {
    word: "bet",
    meaning: "賭ける",
    page: 218,
    section: 172
  },
  {
    word: "arms",
    meaning: "武器",
    page: 218,
    section: 173
  },
  {
    word: "forces (the 〜で)",
    meaning: "軍隊",
    page: 218,
    section: 173
  },
  {
    word: "goods",
    meaning: "商品",
    page: 218,
    section: 173
  },
  {
    word: "means",
    meaning: "手段",
    page: 218,
    section: 173
  },
  {
    word: "spirits",
    meaning: "気分",
    page: 218,
    section: 173
  },
  {
    word: "height",
    meaning: "高さ",
    page: 220,
    section: 174
  },
  {
    word: "broad",
    meaning: "広い",
    page: 220,
    section: 174
  },
  {
    word: "huge",
    meaning: "巨大な",
    page: 220,
    section: 174
  },
  {
    word: "tiny",
    meaning: "とても小さい",
    page: 220,
    section: 174
  },
  {
    word: "single",
    meaning: "たった1つの",
    page: 220,
    section: 174
  },
  {
    word: "depth",
    meaning: "深さ",
    page: 220,
    section: 174
  },
  {
    word: "widespread",
    meaning: "広く行き渡った",
    page: 220,
    section: 174
  },
  {
    word: "fare",
    meaning: "(鉄道などの)運賃",
    page: 220,
    section: 175
  },
  {
    word: "fee",
    meaning: "(入学や入会などの)料金",
    page: 220,
    section: 175
  },
  {
    word: "bill",
    meaning: "請求書",
    page: 220,
    section: 175
  },
  {
    word: "admission",
    meaning: "入場料",
    page: 220,
    section: 175
  },
  {
    word: "tax",
    meaning: "税金",
    page: 220,
    section: 175
  },
  {
    word: "vote",
    meaning: "投票する",
    page: 222,
    section: 176
  },
  {
    word: "earn",
    meaning: "を稼ぐ",
    page: 222,
    section: 176
  },
  {
    word: "employ",
    meaning: "を雇う",
    page: 222,
    section: 176
  },
  {
    word: "hire",
    meaning: "(一時的に)を雇う",
    page: 222,
    section: 176
  },
  {
    word: "export",
    meaning: "を輸出する",
    page: 222,
    section: 176
  },
  {
    word: "import",
    meaning: "を輸入する",
    page: 222,
    section: 176
  },
  {
    word: "protect",
    meaning: "を保護する",
    page: 222,
    section: 176
  },
  {
    word: "deliver",
    meaning: "(演説・演技など)をする",
    page: 222,
    section: 176
  },
  {
    word: "retail",
    meaning: "小売り",
    page: 222,
    section: 176
  },
  {
    word: "income",
    meaning: "(給与・年金などの)収入",
    page: 222,
    section: 177
  },
  {
    word: "salary",
    meaning: "(知的労働に対する)給与",
    page: 222,
    section: 177
  },
  {
    word: "wage",
    meaning: "(肉体労働に対する)賃金",
    page: 222,
    section: 177
  },
  {
    word: "commission",
    meaning: "報酬",
    page: 222,
    section: 177
  },
  {
    word: "delay",
    meaning: "を遅らせる",
    page: 224,
    section: 178
  },
  {
    word: "disturb",
    meaning: "のじゃまをする",
    page: 224,
    section: 178
  },
  {
    word: "bother",
    meaning: "のじゃまをする",
    page: 224,
    section: 178
  },
  {
    word: "ignore",
    meaning: "を無視する",
    page: 224,
    section: 178
  },
  {
    word: "trick",
    meaning: "をだます",
    page: 224,
    section: 178
  },
  {
    word: "beg",
    meaning: "(を)請う",
    page: 224,
    section: 178
  },
  {
    word: "client",
    meaning: "(弁護士など専門職への)依頼人",
    page: 224,
    section: 179
  },
  {
    word: "audience",
    meaning: "観客",
    page: 224,
    section: 179
  },
  {
    word: "spectator",
    meaning: "(試合やイベントの)観客",
    page: 224,
    section: 179
  },
  {
    word: "passenger",
    meaning: "(乗り物の)乗客",
    page: 224,
    section: 179
  },
  {
    word: "customer",
    meaning: "(商店などの)顧客",
    page: 224,
    section: 179
  },
  {
    word: "guest",
    meaning: "(ホテルなどの)宿泊客",
    page: 224,
    section: 179
  },
  {
    word: "hospitality",
    meaning: "親切なもてなし",
    page: 224,
    section: 179
  },
  {
    word: "separate",
    meaning: "を分ける",
    page: 226,
    section: 180
  },
  {
    word: "connect",
    meaning: "をつなぐ",
    page: 226,
    section: 180
  },
  {
    word: "consist (consist of ...で)",
    meaning: "...から成る(構成される)",
    page: 226,
    section: 180
  },
  {
    word: "compare",
    meaning: "を比較する",
    page: 226,
    section: 180
  },
  {
    word: "reserve",
    meaning: "を取っておく",
    page: 226,
    section: 180
  },
  {
    word: "assess",
    meaning: "を評価する",
    page: 226,
    section: 180
  },
  {
    word: "work",
    meaning: "仕事",
    page: 226,
    section: 181
  },
  {
    word: "labor",
    meaning: "(苦痛を伴う)労働",
    page: 226,
    section: 181
  },
  {
    word: "job",
    meaning: "(具体的な内容の)仕事",
    page: 226,
    section: 181
  },
  {
    word: "task",
    meaning: "(一定期間ですべき)仕事",
    page: 226,
    section: 181
  },
  {
    word: "profession",
    meaning: "(知的・専門的な)職業",
    page: 226,
    section: 181
  },
  {
    word: "occupation",
    meaning: "職業",
    page: 226,
    section: 181
  },
  {
    word: "carriage",
    meaning: "馬車",
    page: 228,
    section: 182
  },
  {
    word: "load",
    meaning: "積み荷",
    page: 228,
    section: 182
  },
  {
    word: "wheel",
    meaning: "(the 〜で)ハンドル",
    page: 228,
    section: 182
  },
  {
    word: "commute",
    meaning: "通学する",
    page: 228,
    section: 182
  },
  {
    word: "migration",
    meaning: "移住",
    page: 228,
    section: 182
  },
  {
    word: "hard",
    meaning: "激しく",
    page: 228,
    section: 183
  },
  {
    word: "shortly",
    meaning: "まもなく",
    page: 228,
    section: 183
  },
  {
    word: "just",
    meaning: "ちょうど",
    page: 228,
    section: 183
  },
  {
    word: "justly",
    meaning: "公正に",
    page: 228,
    section: 183
  },
  {
    word: "late",
    meaning: "(時刻・時間が)遅れて",
    page: 228,
    section: 183
  },
  {
    word: "lately",
    meaning: "最近",
    page: 228,
    section: 183
  },
  {
    word: "near",
    meaning: "〜の近くに",
    page: 228,
    section: 183
  },
  {
    word: "nearly",
    meaning: "ほとんど",
    page: 228,
    section: 183
  },
  {
    word: "living",
    meaning: "生きている",
    page: 230,
    section: 184
  },
  {
    word: "priceless",
    meaning: "大変貴重な",
    page: 230,
    section: 184
  },
  {
    word: "worthless",
    meaning: "価値のない",
    page: 230,
    section: 184
  },
  {
    word: "very (the very ...で)",
    meaning: "まさにその...",
    page: 230,
    section: 184
  },
  {
    word: "constant",
    meaning: "不変の",
    page: 230,
    section: 184
  },
  {
    word: "strict",
    meaning: "厳格な",
    page: 230,
    section: 184
  },
  {
    word: "most",
    meaning: "もっとも",
    page: 230,
    section: 185
  },
  {
    word: "mostly",
    meaning: "たいていは",
    page: 230,
    section: 185
  },
  {
    word: "pretty",
    meaning: "かなり",
    page: 230,
    section: 185
  },
  {
    word: "prettily",
    meaning: "かわいらしく",
    page: 230,
    section: 185
  },
  {
    word: "sharp",
    meaning: "きっかりと",
    page: 230,
    section: 185
  },
  {
    word: "sharply",
    meaning: "鋭く",
    page: 230,
    section: 185
  },
  {
    word: "figure",
    meaning: "数字",
    page: 232,
    section: 186
  },
  {
    word: "sum (the 〜で)",
    meaning: "合計",
    page: 232,
    section: 186
  },
  {
    word: "quantity",
    meaning: "量",
    page: 232,
    section: 186
  },
  {
    word: "quarter",
    meaning: "4分の1",
    page: 232,
    section: 186
  },
  {
    word: "double",
    meaning: "2倍になる",
    page: 232,
    section: 186
  },
  {
    word: "transport",
    meaning: "を輸送する",
    page: 232,
    section: 187
  },
  {
    word: "transfer",
    meaning: "転勤する",
    page: 232,
    section: 187
  },
  {
    word: "wander",
    meaning: "歩き回る",
    page: 232,
    section: 187
  },
  {
    word: "shift",
    meaning: "少し動く",
    page: 232,
    section: 187
  },
  {
    word: "depart",
    meaning: "出発する",
    page: 232,
    section: 187
  },
  {
    word: "convey",
    meaning: "(思想・意味など)を伝える",
    page: 232,
    section: 187
  },
  {
    word: "descend",
    meaning: "(を)降りる",
    page: 232,
    section: 187
  },
  {
    word: "immigrate",
    meaning: "(外国から)移住する",
    page: 232,
    section: 187
  },
  {
    word: "chairperson",
    meaning: "議長",
    page: 234,
    section: 188
  },
  {
    word: "conference",
    meaning: "会議",
    page: 234,
    section: 188
  },
  {
    word: "financial",
    meaning: "財政上の",
    page: 234,
    section: 188
  },
  {
    word: "firm",
    meaning: "会社",
    page: 234,
    section: 188
  },
  {
    word: "item",
    meaning: "(新聞)記事",
    page: 234,
    section: 188
  },
  {
    word: "manager",
    meaning: "経営者",
    page: 234,
    section: 188
  },
  {
    word: "secretary",
    meaning: "秘書",
    page: 234,
    section: 188
  },
  {
    word: "signature",
    meaning: "署名",
    page: 234,
    section: 188
  },
  {
    word: "undertake",
    meaning: "を引き受ける",
    page: 234,
    section: 189
  },
  {
    word: "fulfill",
    meaning: "(義務・約束)を果たす",
    page: 234,
    section: 189
  },
  {
    word: "establish",
    meaning: "を設立する",
    page: 234,
    section: 189
  },
  {
    word: "construct",
    meaning: "を建設する",
    page: 234,
    section: 189
  },
  {
    word: "maintain",
    meaning: "を維持する",
    page: 234,
    section: 189
  },
  {
    word: "engage (be engaged in ...で)",
    meaning: "...に従事している",
    page: 234,
    section: 189
  },
  {
    word: "slip",
    meaning: "紙片",
    page: 236,
    section: 190
  },
  {
    word: "staff",
    meaning: "職員",
    page: 236,
    section: 190
  },
  {
    word: "suit",
    meaning: "スーツ",
    page: 236,
    section: 190
  },
  {
    word: "manual",
    meaning: "手で行う",
    page: 236,
    section: 190
  },
  {
    word: "deal (deal with ...で)",
    meaning: "...を扱う",
    page: 236,
    section: 190
  },
  {
    word: "brand",
    meaning: "銘柄",
    page: 236,
    section: 190
  },
  {
    word: "congratulate",
    meaning: "を祝う",
    page: 236,
    section: 191
  },
  {
    word: "assure",
    meaning: "に確信させる",
    page: 236,
    section: 191
  },
  {
    word: "declare",
    meaning: "を宣言する",
    page: 236,
    section: 191
  },
  {
    word: "illustrate",
    meaning: "(実例・図により)を説明する",
    page: 236,
    section: 191
  },
  {
    word: "demonstrate",
    meaning: "を明確に示す",
    page: 236,
    section: 191
  },
  {
    word: "exhibit",
    meaning: "(大規模に)を展示する",
    page: 236,
    section: 191
  },
  {
    word: "holy",
    meaning: "信心深い",
    page: 238,
    section: 192
  },
  {
    word: "mercy",
    meaning: "慈悲",
    page: 238,
    section: 192
  },
  {
    word: "religious",
    meaning: "宗教の",
    page: 238,
    section: 192
  },
  {
    word: "sin",
    meaning: "(宗教・道徳上の)罪",
    page: 238,
    section: 192
  },
  {
    word: "faith",
    meaning: "信頼",
    page: 238,
    section: 192
  },
  {
    word: "belief",
    meaning: "信念",
    page: 238,
    section: 192
  },
  {
    word: "glory",
    meaning: "栄光",
    page: 238,
    section: 192
  },
  {
    word: "sacred",
    meaning: "神聖な",
    page: 238,
    section: 192
  },
  {
    word: "eternal",
    meaning: "永遠の",
    page: 238,
    section: 192
  },
  {
    word: "worship",
    meaning: "を拝む",
    page: 238,
    section: 192
  },
  {
    word: "pray",
    meaning: "(を)祈る",
    page: 238,
    section: 192
  },
  {
    word: "bless",
    meaning: "を祝福する",
    page: 238,
    section: 192
  },
  {
    word: "confess",
    meaning: "(罪など)を告白する",
    page: 238,
    section: 192
  },
  {
    word: "sacrifice",
    meaning: "を犠牲にする",
    page: 238,
    section: 192
  },
  {
    word: "ritual",
    meaning: "儀式",
    page: 238,
    section: 192
  },
  {
    word: "court",
    meaning: "法廷",
    page: 240,
    section: 193
  },
  {
    word: "lawyer",
    meaning: "弁護士",
    page: 240,
    section: 193
  },
  {
    word: "proof",
    meaning: "証拠(品)",
    page: 240,
    section: 193
  },
  {
    word: "victim",
    meaning: "(事故などの)犠牲者",
    page: 240,
    section: 193
  },
  {
    word: "witness",
    meaning: "目撃者",
    page: 240,
    section: 193
  },
  {
    word: "trial",
    meaning: "裁判",
    page: 240,
    section: 193
  },
  {
    word: "fog",
    meaning: "霧",
    page: 240,
    section: 194
  },
  {
    word: "flood",
    meaning: "洪水",
    page: 240,
    section: 194
  },
  {
    word: "typical",
    meaning: "典型的な",
    page: 240,
    section: 194
  },
  {
    word: "breeze",
    meaning: "そよ風",
    page: 240,
    section: 194
  },
  {
    word: "frost",
    meaning: "霜",
    page: 240,
    section: 194
  },
  {
    word: "moist",
    meaning: "湿った",
    page: 240,
    section: 194
  },
  {
    word: "humid",
    meaning: "湿気の多い",
    page: 240,
    section: 194
  },
  {
    word: "thermometer",
    meaning: "温度計",
    page: 240,
    section: 194
  },
  {
    word: "thunder",
    meaning: "雷(鳴)",
    page: 240,
    section: 194
  },
  {
    word: "contract",
    meaning: "契約(書)",
    page: 242,
    section: 195
  },
  {
    word: "innocent",
    meaning: "無実の",
    page: 242,
    section: 195
  },
  {
    word: "justice",
    meaning: "公正",
    page: 242,
    section: 195
  },
  {
    word: "legal",
    meaning: "合法的な",
    page: 242,
    section: 195
  },
  {
    word: "prison",
    meaning: "刑務所",
    page: 242,
    section: 195
  },
  {
    word: "advocate",
    meaning: "を主張する",
    page: 242,
    section: 195
  },
  {
    word: "expose",
    meaning: "を(危険や光などに)さらす",
    page: 242,
    section: 196
  },
  {
    word: "emerge",
    meaning: "現れる",
    page: 242,
    section: 196
  },
  {
    word: "reveal",
    meaning: "を明らかにする",
    page: 242,
    section: 196
  },
  {
    word: "imply",
    meaning: "を示唆する",
    page: 242,
    section: 196
  },
  {
    word: "arise",
    meaning: "(問題などが)生まれる",
    page: 242,
    section: 196
  },
  {
    word: "generate",
    meaning: "を生み出す",
    page: 242,
    section: 196
  },
  {
    word: "locate",
    meaning: "〜の位置を突き止める",
    page: 242,
    section: 196
  },
  {
    word: "ache",
    meaning: "(心身の鋭い)痛み",
    page: 244,
    section: 197
  },
  {
    word: "ambulance",
    meaning: "救急車",
    page: 244,
    section: 197
  },
  {
    word: "comfort",
    meaning: "を慰める",
    page: 244,
    section: 197
  },
  {
    word: "deaf",
    meaning: "耳が聞こえない",
    page: 244,
    section: 197
  },
  {
    word: "drug",
    meaning: "薬",
    page: 244,
    section: 197
  },
  {
    word: "fatigue",
    meaning: "疲労",
    page: 244,
    section: 197
  },
  {
    word: "muscle",
    meaning: "筋肉",
    page: 244,
    section: 197
  },
  {
    word: "remedy",
    meaning: "治療(法)",
    page: 244,
    section: 197
  },
  {
    word: "symptom",
    meaning: "症状",
    page: 244,
    section: 197
  },
  {
    word: "sweat",
    meaning: "汗",
    page: 244,
    section: 197
  },
  {
    word: "bacteria",
    meaning: "バクテリア",
    page: 244,
    section: 197
  },
  {
    word: "prepare",
    meaning: "を用意する",
    page: 244,
    section: 198
  },
  {
    word: "equip",
    meaning: "を備え付ける",
    page: 244,
    section: 198
  },
  {
    word: "furnish",
    meaning: "に家具を備え付ける",
    page: 244,
    section: 198
  },
  {
    word: "beast",
    meaning: "(人間に対して)けだもの",
    page: 246,
    section: 199
  },
  {
    word: "biology",
    meaning: "生物学",
    page: 246,
    section: 199
  },
  {
    word: "botany",
    meaning: "植物学",
    page: 246,
    section: 199
  },
  {
    word: "cell",
    meaning: "細胞",
    page: 246,
    section: 199
  },
  {
    word: "ecology",
    meaning: "生態(学)",
    page: 246,
    section: 199
  },
  {
    word: "feather",
    meaning: "羽毛",
    page: 246,
    section: 199
  },
  {
    word: "fur",
    meaning: "毛皮",
    page: 246,
    section: 199
  },
  {
    word: "insect",
    meaning: "昆虫",
    page: 246,
    section: 199
  },
  {
    word: "instinct",
    meaning: "本能",
    page: 246,
    section: 199
  },
  {
    word: "evolution",
    meaning: "(生物の)進化",
    page: 246,
    section: 199
  },
  {
    word: "educate",
    meaning: "を教育する",
    page: 246,
    section: 200
  },
  {
    word: "comprehend",
    meaning: "を理解する",
    page: 246,
    section: 200
  },
  {
    word: "examine",
    meaning: "を調査する",
    page: 246,
    section: 200
  },
  {
    word: "cultural",
    meaning: "文化的な",
    page: 248,
    section: 201
  },
  {
    word: "folk",
    meaning: "民族",
    page: 248,
    section: 201
  },
  {
    word: "humanity",
    meaning: "人類",
    page: 248,
    section: 201
  },
  {
    word: "inhabitant",
    meaning: "住民",
    page: 248,
    section: 201
  },
  {
    word: "primitive",
    meaning: "原始(時代)の",
    page: 248,
    section: 201
  },
  {
    word: "savage",
    meaning: "野蛮な",
    page: 248,
    section: 201
  },
  {
    word: "slave",
    meaning: "奴隷",
    page: 248,
    section: 201
  },
  {
    word: "tribe",
    meaning: "種族",
    page: 248,
    section: 201
  },
  {
    word: "ethnic",
    meaning: "民族の",
    page: 248,
    section: 201
  },
  {
    word: "migrant",
    meaning: "出稼ぎの",
    page: 248,
    section: 201
  },
  {
    word: "distinguish",
    meaning: "を区別する",
    page: 248,
    section: 202
  },
  {
    word: "review",
    meaning: "を再検討する",
    page: 248,
    section: 202
  },
  {
    word: "absorb",
    meaning: "(知識など)を吸収する",
    page: 248,
    section: 202
  },
  {
    word: "cattle",
    meaning: "(飼育している)ウシ",
    page: 250,
    section: 203
  },
  {
    word: "ferile",
    meaning: "(土地が)肥えた",
    page: 250,
    section: 203
  },
  {
    word: "plague",
    meaning: "ペスト",
    page: 250,
    section: 203
  },
  {
    word: "rural",
    meaning: "いなかの",
    page: 250,
    section: 203
  },
  {
    word: "weed",
    meaning: "雑草",
    page: 250,
    section: 203
  },
  {
    word: "wheat",
    meaning: "小麦",
    page: 250,
    section: 203
  },
  {
    word: "flour",
    meaning: "小麦粉",
    page: 250,
    section: 203
  },
  {
    word: "yield",
    meaning: "産出(高)",
    page: 250,
    section: 203
  },
  {
    word: "organic",
    meaning: "有機の",
    page: 250,
    section: 203
  },
  {
    word: "bind",
    meaning: "を縛る",
    page: 250,
    section: 204
  },
  {
    word: "grasp",
    meaning: "をしっかりと握る",
    page: 250,
    section: 204
  },
  {
    word: "handle",
    meaning: "(人・モノ)を取り扱う",
    page: 250,
    section: 204
  },
  {
    word: "squeeze",
    meaning: "をしぼる",
    page: 250,
    section: 204
  },
  {
    word: "candidate",
    meaning: "候補者",
    page: 252,
    section: 205
  },
  {
    word: "civil",
    meaning: "市民の",
    page: 252,
    section: 205
  },
  {
    word: "congress (Congress で)",
    meaning: "(米国の)連邦議会",
    page: 252,
    section: 205
  },
  {
    word: "constitution",
    meaning: "憲法",
    page: 252,
    section: 205
  },
  {
    word: "kingdom",
    meaning: "王国",
    page: 252,
    section: 205
  },
  {
    word: "liberty",
    meaning: "自由の",
    page: 252,
    section: 205
  },
  {
    word: "military",
    meaning: "軍隊の",
    page: 252,
    section: 205
  },
  {
    word: "stir",
    meaning: "をかき回す",
    page: 252,
    section: 206
  },
  {
    word: "tear",
    meaning: "を裂く",
    page: 252,
    section: 206
  },
  {
    word: "wipe",
    meaning: "をふきとる",
    page: 252,
    section: 206
  },
  {
    word: "stuff",
    meaning: "を詰め込む",
    page: 252,
    section: 206
  },
  {
    word: "parliament (Parliament で)",
    meaning: "(英国の)国会",
    page: 254,
    section: 207
  },
  {
    word: "political",
    meaning: "政治(上)の",
    page: 254,
    section: 207
  },
  {
    word: "republic",
    meaning: "共和国",
    page: 254,
    section: 207
  },
  {
    word: "minister",
    meaning: "大臣",
    page: 254,
    section: 207
  },
  {
    word: "revolution",
    meaning: "大変革",
    page: 254,
    section: 207
  },
  {
    word: "treaty",
    meaning: "条約",
    page: 254,
    section: 207
  },
  {
    word: "governor",
    meaning: "(州)知事",
    page: 254,
    section: 207
  },
  {
    word: "convention",
    meaning: "(政治や宗教の)代表者会議",
    page: 254,
    section: 207
  },
  {
    word: "abolish",
    meaning: "(法・制度・習慣など)を廃止する",
    page: 254,
    section: 208
  },
  {
    word: "accuse",
    meaning: "を告発(告訴)する",
    page: 254,
    section: 208
  },
  {
    word: "commit",
    meaning: "(罪・過ちなど)を犯す",
    page: 254,
    section: 208
  },
  {
    word: "inherit",
    meaning: "を相続する",
    page: 254,
    section: 208
  },
  {
    word: "atom",
    meaning: "原子",
    page: 256,
    section: 209
  },
  {
    word: "mass",
    meaning: "大きな塊",
    page: 256,
    section: 209
  },
  {
    word: "nuclear",
    meaning: "核の",
    page: 256,
    section: 209
  },
  {
    word: "oxygen",
    meaning: "酸素",
    page: 256,
    section: 209
  },
  {
    word: "hydrogen",
    meaning: "水素",
    page: 256,
    section: 209
  },
  {
    word: "sphere",
    meaning: "球",
    page: 256,
    section: 209
  },
  {
    word: "microscope",
    meaning: "顕微鏡",
    page: 256,
    section: 209
  },
  {
    word: "chloride",
    meaning: "塩化物の",
    page: 256,
    section: 209
  },
  {
    word: "acid",
    meaning: "酸性の",
    page: 256,
    section: 209
  },
  {
    word: "compound",
    meaning: "化合物",
    page: 256,
    section: 209
  },
  {
    word: "appoint",
    meaning: "(役職に)を任命する",
    page: 256,
    section: 210
  },
  {
    word: "govern",
    meaning: "を統治する",
    page: 256,
    section: 210
  },
  {
    word: "impose (impose ... on 〜で)",
    meaning: "〜に...を課す",
    page: 256,
    section: 210
  },
  {
    word: "district",
    meaning: "(特色・機能を持った)地域",
    page: 258,
    section: 211
  },
  {
    word: "geography",
    meaning: "地理(学)",
    page: 258,
    section: 211
  },
  {
    word: "globe (the 〜で)",
    meaning: "地球",
    page: 258,
    section: 211
  },
  {
    word: "harbor",
    meaning: "港",
    page: 258,
    section: 211
  },
  {
    word: "region",
    meaning: "地方",
    page: 258,
    section: 211
  },
  {
    word: "route",
    meaning: "道(筋)",
    page: 258,
    section: 211
  },
  {
    word: "territory",
    meaning: "領土",
    page: 258,
    section: 211
  },
  {
    word: "urban",
    meaning: "都市の",
    page: 258,
    section: 211
  },
  {
    word: "range",
    meaning: "範囲",
    page: 258,
    section: 211
  },
  {
    word: "protest",
    meaning: "抗議する",
    page: 258,
    section: 212
  },
  {
    word: "oppose",
    meaning: "に反対する",
    page: 258,
    section: 212
  },
  {
    word: "inetrrupt",
    meaning: "に口を挟む",
    page: 258,
    section: 212
  },
  {
    word: "interfere (interfere with ...で)",
    meaning: "...に支障をきたす",
    page: 258,
    section: 212
  },
  {
    word: "diverse",
    meaning: "多様な",
    page: 260,
    section: 213
  },
  {
    word: "density",
    meaning: "密度",
    page: 260,
    section: 213
  },
  {
    word: "empire",
    meaning: "帝国",
    page: 260,
    section: 213
  },
  {
    word: "journal",
    meaning: "定期刊行物",
    page: 260,
    section: 213
  },
  {
    word: "racial",
    meaning: "人種の",
    page: 260,
    section: 213
  },
  {
    word: "basis",
    meaning: "根拠",
    page: 260,
    section: 214
  },
  {
    word: "bump",
    meaning: "衝突",
    page: 260,
    section: 214
  },
  {
    word: "council",
    meaning: "評議会",
    page: 260,
    section: 214
  },
  {
    word: "outcome",
    meaning: "結果",
    page: 260,
    section: 214
  },
  {
    word: "platform",
    meaning: "教壇",
    page: 260,
    section: 214
  },
  {
    word: "priority",
    meaning: "優先",
    page: 260,
    section: 214
  },
  {
    word: "prize",
    meaning: "賞",
    page: 260,
    section: 214
  },
  {
    word: "storage",
    meaning: "貯蔵",
    page: 260,
    section: 214
  },
  {
    word: "uncertainty",
    meaning: "不確実",
    page: 260,
    section: 214
  },
  {
    word: "figure out ...",
    meaning: "...を理解する",
    page: 262,
    section: 215
  },
  {
    word: "pass on 〜 to ...",
    meaning: "〜を...に伝える",
    page: 262,
    section: 215
  },
  {
    word: "pay off (...)",
    meaning: "うまくいく",
    page: 262,
    section: 215
  },
  {
    word: "work out (...)",
    meaning: "(計画など)を考え出す",
    page: 262,
    section: 215
  },
  {
    word: "cut in",
    meaning: "邪魔をする",
    page: 262,
    section: 215
  },
  {
    word: "pull up (...)",
    meaning: "車を止める",
    page: 262,
    section: 215
  },
  {
    word: "pull one's leg",
    meaning: "〜をからかう",
    page: 262,
    section: 215
  },
  {
    word: "hit on [upon]",
    meaning: "...を思いつく",
    page: 262,
    section: 215
  },
  {
    word: "fall out",
    meaning: "口論する",
    page: 262,
    section: 215
  },
  {
    word: "live up to ...",
    meaning: "(評判・期待など)に応える",
    page: 262,
    section: 215
  },
  {
    word: "answer for ...",
    meaning: "...の責任を負う",
    page: 262,
    section: 215
  },
  {
    word: "change shirts [one's shirt]",
    meaning: "シャツを着替える",
    page: 262,
    section: 215
  },
  {
    word: "change trains",
    meaning: "列車を乗り換える",
    page: 262,
    section: 215
  },
  {
    word: "shake hands",
    meaning: "握手をする",
    page: 262,
    section: 215
  },
  {
    word: "behind the times",
    meaning: "時代遅れの",
    page: 264,
    section: 216
  },
  {
    word: "as (of) yet",
    meaning: "(否定文で)(その時は)まだ〜(ない)",
    page: 264,
    section: 216
  },
  {
    word: "in advance",
    meaning: "前もって",
    page: 264,
    section: 216
  },
  {
    word: "in no time",
    meaning: "すぐに",
    page: 264,
    section: 216
  },
  {
    word: "before long",
    meaning: "まもなく",
    page: 264,
    section: 216
  },
  {
    word: "for good (and all)",
    meaning: "永久に",
    page: 264,
    section: 216
  },
  {
    word: "would (often) do",
    meaning: "(よく)〜したものだった",
    page: 264,
    section: 217
  },
  {
    word: "would like to do",
    meaning: "〜したいと思う",
    page: 264,
    section: 217
  },
  {
    word: "cannot be  too ...",
    meaning: "いくら...してもしすぎではない",
    page: 264,
    section: 217
  },
  {
    word: "cannot ... enough",
    meaning: "いくら...してもし足りない",
    page: 264,
    section: 217
  },
  {
    word: "may well do",
    meaning: "〜するのももっともだ",
    page: 264,
    section: 217
  },
  {
    word: "may [might] as well do",
    meaning: "〜したほうがよい",
    page: 264,
    section: 217
  },
  {
    word: "may [might] as well ... as 〜",
    meaning: "〜するくらいなら...するほうがましだ",
    page: 264,
    section: 217
  },
  {
    word: "How dare ... (?)",
    meaning: "よくもずうずうしく...できるね",
    page: 264,
    section: 217
  },
  {
    word: "be in charge of ...",
    meaning: "...の担当(担任)である",
    page: 266,
    section: 218
  },
  {
    word: "be up to ...",
    meaning: "...の責任である",
    page: 266,
    section: 218
  },
  {
    word: "be yet to do",
    meaning: "まだ〜していない",
    page: 266,
    section: 218
  },
  {
    word: "be well of",
    meaning: "裕福である",
    page: 266,
    section: 218
  },
  {
    word: "be through with ...",
    meaning: "...を終える",
    page: 266,
    section: 218
  },
  {
    word: "be under way",
    meaning: "(ことが)進行中である",
    page: 266,
    section: 218
  },
  {
    word: "be at home in [with] ...",
    meaning: "...に慣れている",
    page: 266,
    section: 218
  },
  {
    word: "be on good / bad terms with ...",
    meaning: "...と仲が良い",
    page: 266,
    section: 218
  },
  {
    word: "be as good as one's word [promise]",
    meaning: "約束を果たす",
    page: 266,
    section: 218
  },
  {
    word: "be beside the point",
    meaning: "的外れである",
    page: 266,
    section: 218
  },
  {
    word: "not so much A as B",
    meaning: "AというよりはむしろB",
    page: 266,
    section: 219
  },
  {
    word: "not so much as do",
    meaning: "〜さえしない",
    page: 266,
    section: 219
  },
  {
    word: "as ... as any 〜",
    meaning: "どの〜にも劣らず...",
    page: 266,
    section: 219
  },
  {
    word: "as many [much] as ...",
    meaning: "...も(の)",
    page: 266,
    section: 219
  },
  {
    word: "provided (that) ...",
    meaning: "もし...ならば",
    page: 268,
    section: 220
  },
  {
    word: "on [under] condition that ...",
    meaning: "...という条件で",
    page: 268,
    section: 220
  },
  {
    word: "even if ...",
    meaning: "たとえ...だとしても",
    page: 268,
    section: 220
  },
  {
    word: "although [though]",
    meaning: "...だけれども",
    page: 268,
    section: 220
  },
  {
    word: "unless ...",
    meaning: "...しない限り",
    page: 268,
    section: 220
  },
  {
    word: "形容詞+as ...",
    meaning: "〜ではあるが",
    page: 268,
    section: 220
  },
  {
    word: "whereas ...",
    meaning: "ところが(それに対して)",
    page: 268,
    section: 220
  },
  {
    word: "whether ... or not",
    meaning: "...しようがしまいが",
    page: 268,
    section: 220
  },
  {
    word: "no more than ...",
    meaning: "...しか〜ない",
    page: 268,
    section: 221
  },
  {
    word: "not more than ...",
    meaning: "せいぜい...しか〜ない",
    page: 268,
    section: 221
  },
  {
    word: "no less than ...",
    meaning: "...も",
    page: 268,
    section: 221
  },
  {
    word: "not less than ...",
    meaning: "少なくとも...",
    page: 268,
    section: 221
  },
  {
    word: "A is no more B than C (is) (D)",
    meaning: "C(がDでないの)と同様にAはBではない",
    page: 268,
    section: 221
  },
  {
    word: "A is no less B than C (is) (D)",
    meaning: "C(がDであるの)と同様にAはBである",
    page: 268,
    section: 221
  },
  {
    word: "by way of ...",
    meaning: "...経由で",
    page: 270,
    section: 222
  },
  {
    word: "without fail",
    meaning: "必ず",
    page: 270,
    section: 222
  },
  {
    word: "apart from ...",
    meaning: "...を除いては",
    page: 270,
    section: 222
  },
  {
    word: "to one's taste",
    meaning: "〜の好みに合った",
    page: 270,
    section: 222
  },
  {
    word: "on second thought(s)",
    meaning: "考え直して",
    page: 270,
    section: 222
  },
  {
    word: "at large",
    meaning: "つかまっていない",
    page: 270,
    section: 222
  },
  {
    word: "behind one's back",
    meaning: "〜のいないところで",
    page: 270,
    section: 222
  },
  {
    word: "the+比較級..., the+比較級〜",
    meaning: "...すればするほど、ますます〜",
    page: 270,
    section: 223
  },
  {
    word: "all the + 比較級(+ for [because] ...)",
    meaning: "(...なので)ますます〜",
    page: 270,
    section: 223
  },
  {
    word: "none the + 比較級(+for [because] ...)",
    meaning: "(...だからといって)〜というわけではない",
    page: 270,
    section: 223
  },
  {
    word: "know better than to do",
    meaning: "〜するほど愚かではない",
    page: 270,
    section: 223
  },
  {
    word: "be interented in ...",
    meaning: "...に興味がある",
    page: 272,
    section: 224
  },
  {
    word: "be known to ...",
    meaning: "...に知られている",
    page: 272,
    section: 224
  },
  {
    word: "be covered with ...",
    meaning: "...で覆われている",
    page: 272,
    section: 224
  },
  {
    word: "be caught in ...",
    meaning: "(雨など)にあう",
    page: 272,
    section: 224
  },
  {
    word: "be satisfied with ...",
    meaning: "...に満足している",
    page: 272,
    section: 224
  },
  {
    word: "be injured in ...",
    meaning: "(事故など)で怪我をする",
    page: 272,
    section: 224
  },
  {
    word: "be killed in ...",
    meaning: "(事故・戦争など)で死ぬ",
    page: 272,
    section: 224
  },
  {
    word: "what [who] one is (today)",
    meaning: "現在の〜",
    page: 272,
    section: 225
  },
  {
    word: "what [who] one was [used to be]",
    meaning: "以前の〜",
    page: 272,
    section: 225
  },
  {
    word: "A is to B what C is to B",
    meaning: "AのBにたいする関係はCのDに対する関係に等しい",
    page: 272,
    section: 225
  },
  {
    word: "what is called ...",
    meaning: "いわゆる...",
    page: 272,
    section: 225
  },
  {
    word: "what is worse",
    meaning: "更に悪いことに",
    page: 272,
    section: 225
  },
  {
    word: "what one has",
    meaning: "〜の財産",
    page: 272,
    section: 225
  },
  {
    word: "what with ... and (what with) 〜",
    meaning: "...やら〜やらで",
    page: 272,
    section: 225
  },
  {
    word: "I wish +仮定法",
    meaning: "〜ならいいと思う",
    page: 274,
    section: 226
  },
  {
    word: "if S were to do",
    meaning: "もしSが〜するようなことがあれば",
    page: 274,
    section: 226
  },
  {
    word: "if S should do",
    meaning: "万が一Sが〜すれば",
    page: 274,
    section: 226
  },
  {
    word: "but for ...",
    meaning: "...がなければ",
    page: 274,
    section: 226
  },
  {
    word: "with ...",
    meaning: "...があれば",
    page: 274,
    section: 226
  },
  {
    word: "if it were not for ...",
    meaning: "もし...がなければ",
    page: 274,
    section: 226
  },
  {
    word: "if it had not been for ...",
    meaning: "もし...がなかったら",
    page: 274,
    section: 226
  },
  {
    word: "it's time +仮定法過去",
    meaning: "もう〜してもよいころだ",
    page: 274,
    section: 226
  },
  {
    word: "if only +仮定法(!)",
    meaning: "(せめて)〜ならいいと思う",
    page: 274,
    section: 226
  },
  {
    word: "as if +仮定法",
    meaning: "まるで〜である(あった)かのように",
    page: 274,
    section: 226
  },
  {
    word: "apply to ...",
    meaning: "(規則・法律などが)に適応される(あてはまる)",
    page: 276,
    section: 227
  },
  {
    word: "apply for ...",
    meaning: "(職など)に応募する",
    page: 276,
    section: 227
  },
  {
    word: "ask <人> for ...",
    meaning: "<人>に...を求める",
    page: 276,
    section: 227
  },
  {
    word: "care for ...",
    meaning: "...を望む",
    page: 276,
    section: 227
  },
  {
    word: "attend to ...",
    meaning: "...に注意を払う",
    page: 276,
    section: 227
  },
  {
    word: "cope with ...",
    meaning: "...にうまく対処する",
    page: 276,
    section: 227
  },
  {
    word: "attribute ... to 〜",
    meaning: "...を〜に起因すると考える",
    page: 276,
    section: 227
  },
  {
    word: "think better of ...",
    meaning: "...を考え直して辞める",
    page: 276,
    section: 227
  },
  {
    word: "refrain from -ing",
    meaning: "〜するのを差し控える",
    page: 276,
    section: 227
  },
  {
    word: "prohibit <人> from -ing",
    meaning: "<人>が〜するのを禁止する",
    page: 276,
    section: 227
  },
  {
    word: "see to it that ...",
    meaning: "...するよう気をつける",
    page: 276,
    section: 227
  },
  {
    word: "persuade <人> into -ing",
    meaning: "<人>を説得して〜させる",
    page: 276,
    section: 227
  },
  {
    word: "lay off ...",
    meaning: "...を解雇する",
    page: 276,
    section: 227
  },
  {
    word: "overtake",
    meaning: "を追い越す",
    page: 286,
    section: 228
  },
  {
    word: "pursue",
    meaning: "を追求する",
    page: 286,
    section: 228
  },
  {
    word: "trace",
    meaning: "を探し出す",
    page: 286,
    section: 228
  },
  {
    word: "track",
    meaning: "を追跡(記録)する",
    page: 286,
    section: 228
  },
  {
    word: "bilingual",
    meaning: "2言語仕様の",
    page: 286,
    section: 229
  },
  {
    word: "interpret",
    meaning: "(を)通訳する",
    page: 286,
    section: 229
  },
  {
    word: "fluent",
    meaning: "流暢な",
    page: 286,
    section: 229
  },
  {
    word: "acquire",
    meaning: "(努力して)を獲得する",
    page: 286,
    section: 229
  },
  {
    word: "describe",
    meaning: "を詳しく説明する",
    page: 286,
    section: 229
  },
  {
    word: "transmit",
    meaning: "を送信する",
    page: 286,
    section: 229
  },
  {
    word: "gesture",
    meaning: "身振り",
    page: 286,
    section: 229
  },
  {
    word: "verbal",
    meaning: "口頭の",
    page: 286,
    section: 229
  },
  {
    word: "weigh",
    meaning: "の重さ(体重)を量る",
    page: 288,
    section: 230
  },
  {
    word: "calculate",
    meaning: "(を)計算する",
    page: 288,
    section: 230
  },
  {
    word: "multiply",
    meaning: "(数)を掛ける",
    page: 288,
    section: 230
  },
  {
    word: "lower",
    meaning: "を下げる",
    page: 288,
    section: 230
  },
  {
    word: "ratio",
    meaning: "比率",
    page: 288,
    section: 230
  },
  {
    word: "dialect",
    meaning: "方言",
    page: 288,
    section: 231
  },
  {
    word: "accent",
    meaning: "なまり",
    page: 288,
    section: 231
  },
  {
    word: "tongue",
    meaning: "言語",
    page: 288,
    section: 231
  },
  {
    word: "command",
    meaning: "(言語などを)自由に操る能力",
    page: 288,
    section: 231
  },
  {
    word: "character",
    meaning: "(文)字",
    page: 288,
    section: 231
  },
  {
    word: "letter",
    meaning: "(文)字",
    page: 288,
    section: 231
  },
  {
    word: "retain",
    meaning: "を保持する",
    page: 290,
    section: 232
  },
  {
    word: "assume (assume that ...で)",
    meaning: "...と思い込む",
    page: 290,
    section: 232
  },
  {
    word: "acknowledge",
    meaning: "を認める",
    page: 290,
    section: 232
  },
  {
    word: "contrast",
    meaning: "を対比する",
    page: 290,
    section: 232
  },
  {
    word: "derive",
    meaning: "を得る",
    page: 290,
    section: 232
  },
  {
    word: "recall",
    meaning: "を思い出す",
    page: 290,
    section: 232
  },
  {
    word: "detect",
    meaning: "を発見する",
    page: 290,
    section: 232
  },
  {
    word: "classify",
    meaning: "分類する",
    page: 290,
    section: 232
  },
  {
    word: "vocabulary",
    meaning: "語彙力",
    page: 290,
    section: 233
  },
  {
    word: "usage",
    meaning: "語法",
    page: 290,
    section: 233
  },
  {
    word: "translate",
    meaning: "(を)翻訳する",
    page: 290,
    section: 233
  },
  {
    word: "code",
    meaning: "法",
    page: 290,
    section: 233
  },
  {
    word: "represent",
    meaning: "を表現する",
    page: 290,
    section: 233
  },
  {
    word: "accustom",
    meaning: "に慣らす",
    page: 292,
    section: 234
  },
  {
    word: "adapt (adapt ... to 〜で)",
    meaning: "...を〜に適合させる",
    page: 292,
    section: 234
  },
  {
    word: "attach",
    meaning: "をくっつける",
    page: 292,
    section: 234
  },
  {
    word: "differ",
    meaning: "異なる",
    page: 292,
    section: 234
  },
  {
    word: "vary",
    meaning: "異なる",
    page: 292,
    section: 234
  },
  {
    word: "linguistic",
    meaning: "言語の",
    page: 292,
    section: 235
  },
  {
    word: "context",
    meaning: "文脈",
    page: 292,
    section: 235
  },
  {
    word: "bias",
    meaning: "先入観",
    page: 292,
    section: 235
  },
  {
    word: "communication",
    meaning: "伝達",
    page: 292,
    section: 235
  },
  {
    word: "define",
    meaning: "を定義する",
    page: 292,
    section: 235
  },
  {
    word: "express",
    meaning: "(意見・感情など)を表現する",
    page: 292,
    section: 235
  },
  {
    word: "native",
    meaning: "自国の",
    page: 292,
    section: 235
  },
  {
    word: "compete",
    meaning: "に競争する",
    page: 294,
    section: 236
  },
  {
    word: "confront",
    meaning: "に立ちはだかる",
    page: 294,
    section: 236
  },
  {
    word: "defeat",
    meaning: "(敵・相手)を破る",
    page: 294,
    section: 236
  },
  {
    word: "defend",
    meaning: "を防御する",
    page: 294,
    section: 236
  },
  {
    word: "intellect",
    meaning: "知性",
    page: 294,
    section: 237
  },
  {
    word: "intelligent",
    meaning: "頭の良い",
    page: 294,
    section: 237
  },
  {
    word: "skill",
    meaning: "技術",
    page: 294,
    section: 237
  },
  {
    word: "qualify",
    meaning: "資格がある",
    page: 294,
    section: 237
  },
  {
    word: "ability",
    meaning: "能力",
    page: 294,
    section: 237
  },
  {
    word: "potential",
    meaning: "可能性",
    page: 294,
    section: 237
  },
  {
    word: "award",
    meaning: "賞",
    page: 294,
    section: 237
  },
  {
    word: "honor",
    meaning: "名誉",
    page: 294,
    section: 237
  },
  {
    word: "extend",
    meaning: "伸びる",
    page: 296,
    section: 238
  },
  {
    word: "strain",
    meaning: "(無理をして)を痛める",
    page: 296,
    section: 238
  },
  {
    word: "stretch",
    meaning: "を伸ばす",
    page: 296,
    section: 238
  },
  {
    word: "proceed (proceed with ...で)",
    meaning: "...を続ける",
    page: 296,
    section: 238
  },
  {
    word: "promote",
    meaning: "を促進する",
    page: 296,
    section: 238
  },
  {
    word: "prevail (prevail in [among] ...で)",
    meaning: "...に広まる",
    page: 296,
    section: 238
  },
  {
    word: "discipline",
    meaning: "訓練",
    page: 296,
    section: 239
  },
  {
    word: "concentrate (concentrate (...) on 〜で)",
    meaning: "(...を)〜に集中する",
    page: 296,
    section: 239
  },
  {
    word: "stimulate",
    meaning: "を刺激する",
    page: 296,
    section: 239
  },
  {
    word: "evaluate",
    meaning: "(価値・能力など)を評価する",
    page: 296,
    section: 239
  },
  {
    word: "neglect",
    meaning: "の管理(世話)をおろそかにする",
    page: 296,
    section: 239
  },
  {
    word: "voluntary",
    meaning: "自発的な",
    page: 296,
    section: 239
  },
  {
    word: "insult",
    meaning: "を侮辱する",
    page: 298,
    section: 240
  },
  {
    word: "despise",
    meaning: "を軽蔑する",
    page: 298,
    section: 240
  },
  {
    word: "dispute",
    meaning: "に反論する",
    page: 298,
    section: 240
  },
  {
    word: "dominate",
    meaning: "(で)優勢である",
    page: 298,
    section: 240
  },
  {
    word: "offend",
    meaning: "の感情を害する",
    page: 298,
    section: 240
  },
  {
    word: "bully",
    meaning: "をいじめる",
    page: 298,
    section: 240
  },
  {
    word: "betray",
    meaning: "を裏切る",
    page: 298,
    section: 240
  },
  {
    word: "deceive",
    meaning: "をだます",
    page: 298,
    section: 240
  },
  {
    word: "frustrate",
    meaning: "を挫折させる",
    page: 298,
    section: 240
  },
  {
    word: "research",
    meaning: "(学術)調査",
    page: 298,
    section: 241
  },
  {
    word: "theory",
    meaning: "理論",
    page: 298,
    section: 241
  },
  {
    word: "perspective",
    meaning: "考え方",
    page: 298,
    section: 241
  },
  {
    word: "practical",
    meaning: "実践的な",
    page: 298,
    section: 241
  },
  {
    word: "academic",
    meaning: "学問的な",
    page: 298,
    section: 241
  },
  {
    word: "astonish",
    meaning: "を驚かせる",
    page: 300,
    section: 242
  },
  {
    word: "embarrass",
    meaning: "に恥ずかしい思いをさせる",
    page: 300,
    section: 242
  },
  {
    word: "fascinate",
    meaning: "を魅了する",
    page: 300,
    section: 242
  },
  {
    word: "frighten",
    meaning: "を怖がらせる",
    page: 300,
    section: 242
  },
  {
    word: "scare",
    meaning: "を怖がらせる",
    page: 300,
    section: 242
  },
  {
    word: "impress",
    meaning: "に感銘を与える",
    page: 300,
    section: 242
  },
  {
    word: "boast",
    meaning: "(を)自慢する",
    page: 300,
    section: 242
  },
  {
    word: "resolve",
    meaning: "を解決する",
    page: 300,
    section: 242
  },
  {
    word: "accomplish",
    meaning: "を成し遂げる",
    page: 300,
    section: 243
  },
  {
    word: "achievement",
    meaning: "業績",
    page: 300,
    section: 243
  },
  {
    word: "emphasize",
    meaning: "を強調する",
    page: 300,
    section: 243
  },
  {
    word: "institution",
    meaning: "施設",
    page: 300,
    section: 243
  },
  {
    word: "statistics",
    meaning: "統計",
    page: 300,
    section: 243
  },
  {
    word: "capture",
    meaning: "を捕まえる",
    page: 302,
    section: 244
  },
  {
    word: "conquer",
    meaning: "を克服する",
    page: 302,
    section: 244
  },
  {
    word: "invade",
    meaning: "(攻撃して)を侵略する",
    page: 302,
    section: 244
  },
  {
    word: "occupy",
    meaning: "を占める",
    page: 302,
    section: 244
  },
  {
    word: "release",
    meaning: "を解決する",
    page: 302,
    section: 244
  },
  {
    word: "colony",
    meaning: "植民地",
    page: 302,
    section: 244
  },
  {
    word: "faculty",
    meaning: "(特殊な)能力",
    page: 302,
    section: 245
  },
  {
    word: "genius",
    meaning: "天才性",
    page: 302,
    section: 245
  },
  {
    word: "intellectual",
    meaning: "知的な",
    page: 302,
    section: 245
  },
  {
    word: "lecture",
    meaning: "抗議",
    page: 302,
    section: 245
  },
  {
    word: "scholar",
    meaning: "学者",
    page: 302,
    section: 245
  },
  {
    word: "laboratory",
    meaning: "研究所(室)",
    page: 302,
    section: 245
  },
  {
    word: "specialize (specialize in ...で)",
    meaning: "...を専門にする",
    page: 302,
    section: 245
  },
  {
    word: "resist",
    meaning: "に抵抗する",
    page: 304,
    section: 246
  },
  {
    word: "persist (persist in ...で)",
    meaning: "...に固執する",
    page: 304,
    section: 246
  },
  {
    word: "endure",
    meaning: "を耐える",
    page: 304,
    section: 246
  },
  {
    word: "invest",
    meaning: "(金・資本など)を投資する",
    page: 304,
    section: 247
  },
  {
    word: "maternal",
    meaning: "母親の",
    page: 304,
    section: 247
  },
  {
    word: "spoil",
    meaning: "を台無しにする",
    page: 304,
    section: 247
  },
  {
    word: "authority",
    meaning: "権威(者)",
    page: 304,
    section: 247
  },
  {
    word: "unique",
    meaning: "独特な",
    page: 304,
    section: 247
  },
  {
    word: "capacity",
    meaning: "能力",
    page: 304,
    section: 247
  },
  {
    word: "reject",
    meaning: "(計画・提案など)を拒絶する",
    page: 306,
    section: 248
  },
  {
    word: "decline",
    meaning: "(申し出・誘いなど)を断る",
    page: 306,
    section: 248
  },
  {
    word: "dismiss",
    meaning: "(考えなど)を退ける",
    page: 306,
    section: 248
  },
  {
    word: "garbage",
    meaning: "ごみ",
    page: 306,
    section: 249
  },
  {
    word: "destruction",
    meaning: "破壊",
    page: 306,
    section: 249
  },
  {
    word: "exploit",
    meaning: "を開発する",
    page: 306,
    section: 249
  },
  {
    word: "chemical",
    meaning: "化学物質",
    page: 306,
    section: 249
  },
  {
    word: "damage",
    meaning: "損害",
    page: 306,
    section: 249
  },
  {
    word: "energy",
    meaning: "エネルギー",
    page: 306,
    section: 249
  },
  {
    word: "fossil",
    meaning: "化石",
    page: 306,
    section: 249
  },
  {
    word: "rescue",
    meaning: "(危険から人)を救助する",
    page: 308,
    section: 250
  },
  {
    word: "assist",
    meaning: "(を)保護する",
    page: 308,
    section: 250
  },
  {
    word: "ensure",
    meaning: "を保証する",
    page: 308,
    section: 250
  },
  {
    word: "consult",
    meaning: "(専門家)に意見を求める",
    page: 308,
    section: 250
  },
  {
    word: "contribute",
    meaning: "(に)貢献する",
    page: 308,
    section: 250
  },
  {
    word: "devote (devote ... to 〜で)",
    meaning: "(時間・努力など)を〜に捧げる",
    page: 308,
    section: 250
  },
  {
    word: "issue",
    meaning: "(刊行物など)を発行する",
    page: 308,
    section: 250
  },
  {
    word: "distribute",
    meaning: "を配る",
    page: 308,
    section: 250
  },
  {
    word: "grant",
    meaning: "を授与する",
    page: 308,
    section: 250
  },
  {
    word: "expand",
    meaning: "拡大(膨張)する",
    page: 308,
    section: 251
  },
  {
    word: "limit",
    meaning: "を制限する",
    page: 308,
    section: 251
  },
  {
    word: "poison",
    meaning: "毒(素)",
    page: 308,
    section: 251
  },
  {
    word: "emission",
    meaning: "排出",
    page: 308,
    section: 251
  },
  {
    word: "assemble",
    meaning: "集まる",
    page: 310,
    section: 252
  },
  {
    word: "combine",
    meaning: "を結合させる",
    page: 310,
    section: 252
  },
  {
    word: "encounter",
    meaning: "(思いがけず)と出会う",
    page: 310,
    section: 252
  },
  {
    word: "accompany",
    meaning: "に同行する",
    page: 310,
    section: 252
  },
  {
    word: "compose",
    meaning: "を構成する",
    page: 310,
    section: 252
  },
  {
    word: "atmosphere",
    meaning: "大気",
    page: 310,
    section: 253
  },
  {
    word: "drought",
    meaning: "干ばつ",
    page: 310,
    section: 253
  },
  {
    word: "cultivate",
    meaning: "を耕す",
    page: 310,
    section: 253
  },
  {
    word: "species",
    meaning: "(生物の)種",
    page: 310,
    section: 253
  },
  {
    word: "starve",
    meaning: "飢え死にする",
    page: 310,
    section: 253
  },
  {
    word: "preserve",
    meaning: "を保存する",
    page: 310,
    section: 253
  },
  {
    word: "ecosystem",
    meaning: "生態系",
    page: 310,
    section: 253
  },
  {
    word: "gaze (gaze at [into, on, upon] ...で)",
    meaning: "...を見つめる",
    page: 312,
    section: 254
  },
  {
    word: "glance",
    meaning: "ちらりと見る",
    page: 312,
    section: 254
  },
  {
    word: "glimpse",
    meaning: "をちらりと見る",
    page: 312,
    section: 254
  },
  {
    word: "environment (the 〜で)",
    meaning: "(自然の)環境",
    page: 312,
    section: 255
  },
  {
    word: "conservation",
    meaning: "保護",
    page: 312,
    section: 255
  },
  {
    word: "electricity",
    meaning: "電気",
    page: 312,
    section: 255
  },
  {
    word: "pollution",
    meaning: "汚染",
    page: 312,
    section: 255
  },
  {
    word: "vehicle",
    meaning: "乗り物",
    page: 312,
    section: 255
  },
  {
    word: "chemistry",
    meaning: "科学",
    page: 312,
    section: 255
  },
  {
    word: "disaster",
    meaning: "災害",
    page: 312,
    section: 255
  },
  {
    word: "crisis",
    meaning: "危機",
    page: 312,
    section: 255
  },
  {
    word: "alternative",
    meaning: "代わりの",
    page: 312,
    section: 255
  },
  {
    word: "cease (cease -ing [to do]で)",
    meaning: "〜するのをやめる",
    page: 314,
    section: 256
  },
  {
    word: "conclude",
    meaning: "と結論づける",
    page: 314,
    section: 256
  },
  {
    word: "vanish",
    meaning: "(突然)姿を消す",
    page: 314,
    section: 256
  },
  {
    word: "bury",
    meaning: "を埋葬する",
    page: 314,
    section: 256
  },
  {
    word: "collapse",
    meaning: "壊れる",
    page: 314,
    section: 256
  },
  {
    word: "abandon",
    meaning: "を捨てる",
    page: 314,
    section: 256
  },
  {
    word: "fade",
    meaning: "色褪せる",
    page: 314,
    section: 256
  },
  {
    word: "advertise",
    meaning: "(を)広告する",
    page: 314,
    section: 257
  },
  {
    word: "commercial",
    meaning: "広告(放送)",
    page: 314,
    section: 257
  },
  {
    word: "product",
    meaning: "製品",
    page: 314,
    section: 257
  },
  {
    word: "purchase",
    meaning: "を購入する",
    page: 314,
    section: 257
  },
  {
    word: "depression",
    meaning: "不況",
    page: 314,
    section: 257
  },
  {
    word: "rate",
    meaning: "率",
    page: 314,
    section: 257
  },
  {
    word: "conceal",
    meaning: "を隠す",
    page: 316,
    section: 258
  },
  {
    word: "exclude",
    meaning: "を除外する",
    page: 316,
    section: 258
  },
  {
    word: "omit",
    meaning: "を省く",
    page: 316,
    section: 258
  },
  {
    word: "overlook",
    meaning: "を見落とす",
    page: 316,
    section: 258
  },
  {
    word: "budget",
    meaning: "予算",
    page: 316,
    section: 259
  },
  {
    word: "proportion",
    meaning: "割合",
    page: 316,
    section: 259
  },
  {
    word: "commerce",
    meaning: "商業",
    page: 316,
    section: 259
  },
  {
    word: "credit",
    meaning: "信用販売",
    page: 316,
    section: 259
  },
  {
    word: "commodity",
    meaning: "商品",
    page: 316,
    section: 259
  },
  {
    word: "disadvantage",
    meaning: "不利",
    page: 316,
    section: 259
  },
  {
    word: "debt",
    meaning: "借金",
    page: 316,
    section: 259
  },
  {
    word: "domestic",
    meaning: "国内の",
    page: 316,
    section: 259
  },
  {
    word: "asset",
    meaning: "資産",
    page: 316,
    section: 259
  },
  {
    word: "compromise",
    meaning: "妥協する",
    page: 318,
    section: 260
  },
  {
    word: "correspond",
    meaning: "一致する",
    page: 318,
    section: 260
  },
  {
    word: "relate",
    meaning: "関係(関連)がある",
    page: 318,
    section: 260
  },
  {
    word: "enterprise",
    meaning: "事業",
    page: 318,
    section: 261
  },
  {
    word: "expense",
    meaning: "費用",
    page: 318,
    section: 261
  },
  {
    word: "fund",
    meaning: "基金",
    page: 318,
    section: 261
  },
  {
    word: "growth",
    meaning: "成長",
    page: 318,
    section: 261
  },
  {
    word: "stock",
    meaning: "在庫(品)",
    page: 318,
    section: 261
  },
  {
    word: "childhood",
    meaning: "幼年(子供)時代",
    page: 320,
    section: 262
  },
  {
    word: "infant",
    meaning: "乳児",
    page: 320,
    section: 262
  },
  {
    word: "prime (the 〜で)",
    meaning: "絶頂期",
    page: 320,
    section: 262
  },
  {
    word: "popularity",
    meaning: "人気",
    page: 320,
    section: 262
  },
  {
    word: "philosophy",
    meaning: "哲学",
    page: 320,
    section: 262
  },
  {
    word: "thought",
    meaning: "考え",
    page: 320,
    section: 262
  },
  {
    word: "aim",
    meaning: "目的",
    page: 320,
    section: 262
  },
  {
    word: "destination",
    meaning: "目的地",
    page: 320,
    section: 262
  },
  {
    word: "motivate",
    meaning: "に動機を与える",
    page: 320,
    section: 262
  },
  {
    word: "undergo",
    meaning: "を経験する",
    page: 320,
    section: 262
  },
  {
    word: "welfare",
    meaning: "幸福",
    page: 320,
    section: 263
  },
  {
    word: "pension",
    meaning: "年金",
    page: 320,
    section: 263
  },
  {
    word: "insurance",
    meaning: "保険",
    page: 320,
    section: 263
  },
  {
    word: "isolation",
    meaning: "孤立",
    page: 320,
    section: 263
  },
  {
    word: "shortage",
    meaning: "不足",
    page: 320,
    section: 263
  },
  {
    word: "ambitious",
    meaning: "野心のある",
    page: 322,
    section: 264
  },
  {
    word: "significant",
    meaning: "意義深い",
    page: 322,
    section: 264
  },
  {
    word: "splendid",
    meaning: "すばらしい",
    page: 322,
    section: 264
  },
  {
    word: "vivid",
    meaning: "鮮明な",
    page: 322,
    section: 264
  },
  {
    word: "vital",
    meaning: "不可欠な",
    page: 322,
    section: 264
  },
  {
    word: "ancestor",
    meaning: "(個人の)祖先",
    page: 322,
    section: 264
  },
  {
    word: "heritage",
    meaning: "遺産",
    page: 322,
    section: 264
  },
  {
    word: "poverty",
    meaning: "貧困",
    page: 322,
    section: 265
  },
  {
    word: "abuse",
    meaning: "虐待",
    page: 322,
    section: 265
  },
  {
    word: "improve",
    meaning: "を向上させる",
    page: 322,
    section: 265
  },
  {
    word: "circumstance",
    meaning: "(周囲の)状況",
    page: 322,
    section: 265
  },
  {
    word: "funeral",
    meaning: "葬式",
    page: 324,
    section: 266
  },
  {
    word: "grave",
    meaning: "墓",
    page: 324,
    section: 266
  },
  {
    word: "cancer",
    meaning: "ガン",
    page: 324,
    section: 266
  },
  {
    word: "suicide",
    meaning: "自殺",
    page: 324,
    section: 266
  },
  {
    word: "rumor",
    meaning: "うわさ",
    page: 324,
    section: 267
  },
  {
    word: "reputation",
    meaning: "評判",
    page: 324,
    section: 267
  },
  {
    word: "fame",
    meaning: "名声",
    page: 324,
    section: 267
  },
  {
    word: "emergency",
    meaning: "緊急時",
    page: 324,
    section: 267
  },
  {
    word: "relief",
    meaning: "安堵",
    page: 324,
    section: 267
  },
  {
    word: "formal",
    meaning: "正式の",
    page: 324,
    section: 267
  },
  {
    word: "involve",
    meaning: "を巻き込む",
    page: 324,
    section: 267
  },
  {
    word: "barrier",
    meaning: "障壁",
    page: 324,
    section: 267
  },
  {
    word: "violation",
    meaning: "違反",
    page: 324,
    section: 267
  },
  {
    word: "endangered",
    meaning: "絶滅の危機にひんした",
    page: 326,
    section: 268
  },
  {
    word: "extinction",
    meaning: "絶滅",
    page: 326,
    section: 268
  },
  {
    word: "discrimination",
    meaning: "差別",
    page: 326,
    section: 268
  },
  {
    word: "disorder",
    meaning: "不調",
    page: 326,
    section: 268
  },
  {
    word: "virus",
    meaning: "ウイルス",
    page: 326,
    section: 268
  },
  {
    word: "ban",
    meaning: "を禁止する",
    page: 326,
    section: 268
  },
  {
    word: "restrict",
    meaning: "を制限する",
    page: 326,
    section: 268
  },
  {
    word: "envious",
    meaning: "をうらやんで",
    page: 326,
    section: 268
  },
  {
    word: "scorn",
    meaning: "軽蔑",
    page: 326,
    section: 268
  },
  {
    word: "remote",
    meaning: "人里離れた",
    page: 326,
    section: 269
  },
  {
    word: "apart",
    meaning: "(距離的に)離れて",
    page: 326,
    section: 269
  },
  {
    word: "aside",
    meaning: "わきへ",
    page: 326,
    section: 269
  },
  {
    word: "forth",
    meaning: "外へ",
    page: 326,
    section: 269
  },
  {
    word: "divorce",
    meaning: "離婚",
    page: 326,
    section: 269
  },
  {
    word: "chief",
    meaning: "最も重要な",
    page: 328,
    section: 270
  },
  {
    word: "fair",
    meaning: "適正な",
    page: 328,
    section: 270
  },
  {
    word: "reliable",
    meaning: "信頼できる",
    page: 328,
    section: 270
  },
  {
    word: "secure",
    meaning: "安定した",
    page: 328,
    section: 270
  },
  {
    word: "consistent",
    meaning: "首尾一貫した",
    page: 328,
    section: 270
  },
  {
    word: "sophisticated",
    meaning: "精巧な",
    page: 328,
    section: 270
  },
  {
    word: "willing",
    meaning: "いとわない",
    page: 328,
    section: 270
  },
  {
    word: "attain",
    meaning: "到達する",
    page: 328,
    section: 270
  },
  {
    word: "incentive",
    meaning: "刺激",
    page: 328,
    section: 270
  },
  {
    word: "historic",
    meaning: "歴史のある",
    page: 328,
    section: 271
  },
  {
    word: "historical",
    meaning: "歴史に関する",
    page: 328,
    section: 271
  },
  {
    word: "historian",
    meaning: "歴史家",
    page: 328,
    section: 271
  },
  {
    word: "anthropologist",
    meaning: "人類学者",
    page: 328,
    section: 271
  },
  {
    word: "root",
    meaning: "根",
    page: 328,
    section: 271
  },
  {
    word: "renew",
    meaning: "更新する",
    page: 330,
    section: 272
  },
  {
    word: "alter",
    meaning: "を変える",
    page: 330,
    section: 272
  },
  {
    word: "transform",
    meaning: "を変形させる",
    page: 330,
    section: 272
  },
  {
    word: "inspire",
    meaning: "を奮起させる",
    page: 330,
    section: 272
  },
  {
    word: "modify",
    meaning: "を修正する",
    page: 330,
    section: 272
  },
  {
    word: "tie",
    meaning: "を結びつける",
    page: 330,
    section: 272
  },
  {
    word: "convert",
    meaning: "を変える",
    page: 330,
    section: 272
  },
  {
    word: "enhance",
    meaning: "を向上させる",
    page: 330,
    section: 272
  },
  {
    word: "reform",
    meaning: "改革",
    page: 330,
    section: 273
  },
  {
    word: "draft",
    meaning: "草案",
    page: 330,
    section: 273
  },
  {
    word: "legitimate",
    meaning: "合法の",
    page: 330,
    section: 273
  },
  {
    word: "valid",
    meaning: "有効な",
    page: 330,
    section: 273
  },
  {
    word: "drastic",
    meaning: "抜本的な",
    page: 330,
    section: 273
  },
  {
    word: "radical",
    meaning: "急進的な",
    page: 330,
    section: 273
  },
  {
    word: "submit",
    meaning: "を提出する",
    page: 332,
    section: 274
  },
  {
    word: "donate",
    meaning: "を寄付する",
    page: 332,
    section: 274
  },
  {
    word: "register",
    meaning: "登録する",
    page: 332,
    section: 274
  },
  {
    word: "sustainable",
    meaning: "持続可能な",
    page: 332,
    section: 275
  },
  {
    word: "quality",
    meaning: "質",
    page: 332,
    section: 275
  },
  {
    word: "inclusive",
    meaning: "包括的な",
    page: 332,
    section: 275
  },
  {
    word: "equality",
    meaning: "平等",
    page: 332,
    section: 275
  },
  {
    word: "empower",
    meaning: "力を与える",
    page: 332,
    section: 275
  },
  {
    word: "gender",
    meaning: "(社会的・文化的役割としての)性(別)",
    page: 332,
    section: 275
  },
  {
    word: "diversity",
    meaning: "多様性",
    page: 332,
    section: 275
  },
  {
    word: "affordable",
    meaning: "(値段が)手頃な",
    page: 334,
    section: 276
  },
  {
    word: "productive",
    meaning: "生産的な",
    page: 334,
    section: 276
  },
  {
    word: "employment",
    meaning: "雇用",
    page: 334,
    section: 276
  },
  {
    word: "foster",
    meaning: "の里親になる",
    page: 334,
    section: 276
  },
  {
    word: "settlement",
    meaning: "解決",
    page: 334,
    section: 276
  },
  {
    word: "consumption",
    meaning: "消費(量)",
    page: 334,
    section: 276
  },
  {
    word: "urgent",
    meaning: "緊急の",
    page: 334,
    section: 276
  },
  {
    word: "combat",
    meaning: "戦闘",
    page: 334,
    section: 276
  },
  {
    word: "climate",
    meaning: "気候",
    page: 334,
    section: 276
  },
  {
    word: "conserve",
    meaning: "を大事に使う",
    page: 334,
    section: 276
  },
  {
    word: "reverse",
    meaning: "を逆にする",
    page: 334,
    section: 276
  },
  {
    word: "effective",
    meaning: "効果的な",
    page: 334,
    section: 276
  },
  {
    word: "accountable",
    meaning: "責任がある",
    page: 334,
    section: 276
  },
  {
    word: "implementation",
    meaning: "履行",
    page: 334,
    section: 276
  },
  {
    word: "boost",
    meaning: "を後押しする",
    page: 336,
    section: 277
  },
  {
    word: "embrace",
    meaning: "を含む",
    page: 336,
    section: 277
  },
  {
    word: "infer",
    meaning: "を推論する",
    page: 336,
    section: 277
  },
  {
    word: "mislead",
    meaning: "を迷わせる",
    page: 336,
    section: 277
  },
  {
    word: "overwhelm",
    meaning: "を圧倒する",
    page: 336,
    section: 277
  },
  {
    word: "retrieve",
    meaning: "を取り戻す",
    page: 336,
    section: 277
  },
  {
    word: "utilize",
    meaning: "を利用する",
    page: 336,
    section: 277
  },
  {
    word: "external",
    meaning: "外部の",
    page: 336,
    section: 278
  },
  {
    word: "neutral",
    meaning: "中立の",
    page: 336,
    section: 278
  },
  {
    word: "relevant",
    meaning: "関連のある",
    page: 336,
    section: 278
  },
  {
    word: "accordingly",
    meaning: "したがって",
    page: 336,
    section: 278
  },
  {
    word: "definitely",
    meaning: "確実に",
    page: 336,
    section: 278
  },
  {
    word: "deliberately",
    meaning: "故意に",
    page: 336,
    section: 278
  },
  {
    word: "virtually",
    meaning: "実質的には",
    page: 336,
    section: 278
  }
];

const sectionNames = {
  1: "天気に関する語",
  2: "前置詞をつけてしまいたくなる他動詞(1)",
  3: "植物に関する語",
  4: "前置詞をつけてしまいたくなる他動詞(2)",
  5: "地理に関する語",
  6: "他動詞と誤りやすい自動詞",
  7: "動物に関する語",
  8: "SVCの文型で用いられる動詞",
  9: "集団・社会に関する語",
  10: "SVOOの文型で用いられる動詞(give型)",
  11: "社会に関する語",
  12: "SVOOの文型で用いられる動詞(buy型)",
  13: "気持ちや感情を表す形容詞",
  14: "SVOOの文型で注意すべき動詞",
  15: "人に関する語",
  16: "SVOOの文型で注意すべき動詞(2)",
  17: "良くないイメージを持つ語",
  18: "SVOCの文型で用いられる動詞",
  19: "旅行に関する語",
  20: "用法や活用が紛らわしい動詞",
  21: "コミュニケーションに関する語",
  22: "原則的に進行形にしない動詞",
  23: "討論・議論に関する語",
  24: "使役動詞",
  25: "思いがけない意味を持つ名詞",
  26: "＜他動詞+目的語+原形不定詞＞の形を取る動詞",
  27: "状況・位置を表す語",
  28: "＜他動詞+目的語+to不定詞＞の形を取る動詞(1)",
  29: "生活に関する語",
  30: "＜他動詞+目的語+to不定詞＞の形を取る動詞(2)",
  31: "建物に関する語",
  32: "動名詞ではなく不定詞を目的語に取る動詞(1)",
  33: "自然・地形に関する語",
  34: "動名詞ではなく不定詞を目的語に取る動詞(2)",
  35: "良いイメージを持つ語",
  36: "不定詞ではなく動名詞を目的語に取る動詞(1)",
  37: "方向・距離などを表す語",
  38: "不定詞ではなく動名詞を目的語に取る動詞(2)",
  39: "重要性を表す語",
  40: "目的語が不定しか同盟歯科で意味の異なる動詞",
  41: "可能性・頻度を表す語",
  42: "思いがけない意味を持つ動詞",
  43: "思いがけない意味を持つ語(1)",
  44: "思いがけない意味を持つ語(2)",
  45: "抑えておきたい頻出熟語・基本動詞を含む熟語make(1)",
  46: "抑えておきたい頻出熟語・基本動詞を含む熟語come(1)",
  47: "抑えておきたい頻出熟語・基本動詞を含む熟語go(1)",
  48: "抑えておきたい頻出熟語・基本動詞を含む熟語give(1)",
  49: "抑えておきたい頻出熟語・基本動詞を含む熟語take(1)",
  50: "抑えておきたい頻出熟語・基本動詞を含む熟語leave(1)",
  51: "抑えておきたい頻出熟語・基本動詞を含む熟語keep(1)",
  52: "抑えておきたい頻出熟語・基本動詞を含む熟語set(1)",
  53: "抑えておきたい頻出熟語・基本動詞を含む熟語have(1)",
  54: "抑えておきたい頻出熟語・基本動詞を含む熟語get(1)",
  55: "良くない状況を表す語",
  56: "＜他動詞+A of B＞の形を取る動詞 (1) [関連のof]",
  57: "会社・職業に関する語",
  58: "＜他動詞+A of B＞の形を取る動詞 (2) [分離のof]",
  59: "生活に関する動詞",
  60: "＜他動詞+A of B＞の形を取る動詞 [禁止のfrom]",
  61: "性格・性質を表す語",
  62: "＜他動詞+A with B＞の形を取る動詞",
  63: "形状・外見などを表す語",
  64: "＜他動詞+A for B＞の形を取る動詞",
  65: "注意すべき形容詞・副詞",
  66: "＜他動詞+A to B＞の形を取る動詞",
  67: "交通・交通機関に関する語",
  68: "「動く」「移動する」ことなどを表す語",
  69: "判断の基準に関する語",
  70: "感情を伝える動詞",
  71: "短い時間を表す語",
  72: "「後述する」ことを表す語",
  73: "文学に関する語",
  74: "知的活動に関する語",
  75: "学問・分析に関する語",
  76: "「人に働きかける」ことを表す語",
  77: "姿・形に関する語",
  78: "提案・要求などを表す動詞",
  79: "歴史・社会に関する語",
  80: "「手を使ってする」ことを表す語",
  81: "価値や状態などの判断を表す語",
  82: "増加・減少などを表す動詞",
  83: "期間・順序などを表す語",
  84: "「発話する」ことを表す動詞",
  85: "状況・状態を表す語",
  86: "貸借・交換を表す動詞",
  87: "都会生活に関する語",
  88: "「思考する」ことなどを表す語",
  89: "生活に関する動詞(1)",
  90: "感情に働きかける他動詞とそこから派生した形容詞(1)",
  91: "生活に関する動詞(2)",
  92: "感情に働きかける他動詞とそこから派生した形容詞(2)",
  93: "発生・宗教を表す語",
  94: "感情に働きかける他動詞とそこから派生した形容詞(3)",
  95: "宗教・精神などに関する語",
  96: "感情に働きかける他動詞とそこから派生した形容詞(4)",
  97: "「人」以外は守護に取らない形容詞",
  98: "感情に働きかける他動詞とそこから派生した形容詞(5)",
  99: "自然に関する語",
  100: "注意すべき名詞",
  101: "抑えておきたい頻出熟語・基本動詞を含む熟語make(2)",
  102: "抑えておきたい頻出熟語・基本動詞を含む熟語help",
  103: "抑えておきたい頻出熟語・基本動詞を含む熟語come(2)",
  104: "抑えておきたい頻出熟語・基本動詞を含む熟語stand",
  105: "抑えておきたい頻出熟語・基本動詞を含む熟語take(2)",
  106: "抑えておきたい頻出熟語・基本動詞を含む熟語bring",
  107: "抑えておきたい頻出熟語・基本動詞を含む熟語keep(2)",
  108: "抑えておきたい頻出熟語・基本動詞を含む熟語turn",
  109: "抑えておきたい頻出熟語・基本動詞を含む熟語get(2)",
  110: "抑えておきたい頻出熟語・基本動詞を含む熟語hold",
  111: "抑えておきたい頻出熟語・基本動詞を含む熟語let",
  112: "抑えておきたい頻出熟語・基本動詞を含む熟語do",
  113: "抑えておきたい頻出熟語・基本動詞を含む熟語call",
  114: "抑えておきたい頻出熟語・基本動詞を含む熟語put",
  115: "科学・技術に関する語",
  116: "ダメージに関する語",
  117: "自然・地質に関する語",
  118: "食料・料理に関する語",
  119: "人・人体や健康に関する語",
  120: "「準否定」を表す副詞",
  121: "政治・社会に関する語",
  122: "約語が紛らわしい動詞",
  123: "挑発・追跡などに関する語",
  124: "人の性格・性質を表す形容詞",
  125: "頻度などを表す語",
  126: "「体を動かす」ことなどを表す語",
  127: "心的態度を表す語",
  128: "ラテン語を起源にもつ語",
  129: "犯罪・戦い・紛争に関する語",
  130: "強い感情を表す語",
  131: "「先頭に立って導く」ことなどを表す語",
  132: "つづりと意味が混乱しやすい形容詞(1)",
  133: "「示す」「引き付ける」ことなどを表す語",
  134: "つづりと意味が混乱しやすい形容詞(2)",
  135: "つづりと意味が混乱しやすい形容詞(3)",
  136: "注意すべき形容詞・副詞",
  137: "類似・相似などを表す語",
  138: "「意見を述べる」ことなどを表す語",
  139: "注意すべき前置詞・副詞",
  140: "「高い/安い」「多い/少ない」を表す語",
  141: "計算に関する語",
  142: "「可能」を表す形容詞",
  143: "人間関係に関する語",
  144: "「口を使ってする」ことを表す語",
  145: "一般性・特殊性を表す語",
  146: "出版・報道などに関する語",
  147: "犯罪・戦いなどに関する動詞",
  148: "人を守護に取るとき注意する形容詞",
  149: "議論・会議に関する語(1)",
  150: "感情を含む動詞",
  151: "議論・会議に関する語(2)",
  152: "「得る」「欠く」「取り去る」ことなどを表す語",
  153: "「目を使ってする」ことを表す語",
  154: "不可算名詞(1)",
  155: "意味が紛らわしい語",
  156: "不可算名詞(2)",
  157: "経済に関する語",
  158: "団体行動に関する語",
  159: "抑えておきたい頻出熟語・基本動詞を含む熟語make(3)",
  160: "抑えておきたい頻出熟語・基本動詞を含む熟語look",
  161: "抑えておきたい頻出熟語・その他の基本動詞を含む熟語(1)",
  162: "抑えておきたい頻出熟語・頻度・回数に関する熟語",
  163: "押さえておきたい頻出熟語・「...するとすぐに」の表現",
  164: "押さえておきたい頻出熟語・等位接続詞を用いた相関表現",
  165: "押さえておきたい頻出熟語・目的を表す接続詞",
  166: "押さえておきたい頻出熟語・nothing/somethingを用いた慣用表現",
  167: "押さえておきたい頻出熟語・不定詞を用いた慣用表現",
  168: "押さえておきたい頻出熟語・否定的な意味を持つ熟語",
  169: "押さえておきたい頻出熟語・分詞を含む慣用表現",
  170: "押さえておきたい頻出熟語・注意すべき助動詞(句)",
  171: "押さえておきたい頻出熟語・動名詞を用いた慣用表現",
  172: "利益・富などを表す語",
  173: "複数形で特別な意味を持つ名詞",
  174: "大きさ・広さなどを表す語",
  175: "料金を表す名詞",
  176: "政治・経済に関する語",
  177: "収入・賃金を表す名詞",
  178: "好ましくないことを表す動詞",
  179: "客に関する名詞",
  180: "「分離/接続」「比較/評価」などを表す動詞",
  181: "仕事を表す名詞",
  182: "輸送・移動に関する語",
  183: "-lyの有無で意味が大きく異なる語(1)",
  184: "注意すべき形容詞",
  185: "-lyの有無で意味が大きく異なる語(2)",
  186: "計算に関する語",
  187: "「移動する」「動かす」ことなどを表す語",
  188: "会社・オフィスに関する語(1)",
  189: "「行う」「維持する」ことなどを表す語",
  190: "会社・オフィスに関する語(2)",
  191: "「話す」「示す」ことなどを表す語",
  192: "宗教に関する語",
  193: "法定に関する語(1)",
  194: "天候・気候に関する語",
  195: "法定に関する語(2)",
  196: "「明らかにする」「現れる」ことを表す動詞",
  197: "医療・健康に関する語",
  198: "「備える」ことを表す動詞",
  199: "生物(学)に関する語",
  200: "「学ぶ」「分析する」ことを表す語(1)",
  201: "人類学に関する語",
  202: "「学ぶ」「分析する」ことを表す語(2)",
  203: "農業に関する語",
  204: "「手を使ってする」ことを表す語(1)",
  205: "政治・政策に関する語(1)",
  206: "「手を使ってする」ことを表す語(2)",
  207: "政治・政策に関する語(2)",
  208: "法的行為を表す動詞",
  209: "化学に関する語",
  210: "政治的行為を表す動詞",
  211: "地理に関する語",
  212: "「反対する」「じゃまする」ことを表す語",
  213: "社会・歴史に関する語",
  214: "注意すべき名詞",
  215: "押さえておきたい頻出熟語・その他の基本動詞を含む熟語(2)",
  216: "押さえておきたい頻出熟語・時を表す慣用表現",
  217: "押さえておきたい頻出熟語・助動詞を用いた慣用表現",
  218: "押さえておきたい頻出熟語・beを使った慣用表現",
  219: "押さえておきたい頻出熟語・比較を用いた慣用表現(1) 原級を用いた表現",
  220: "押さえておきたい頻出熟語・条件・譲歩を表す接続詞",
  221: "押さえておきたい頻出熟語・比較を用いた慣用表現(2) 比較級を用いた表現",
  222: "押さえておきたい頻出熟語・前置詞を含む慣用表現",
  223: "押さえておきたい頻出熟語・比較を用いた慣用表現(3) 比較級を用いた表現",
  224: "押さえておきたい頻出熟語・by以外の前置詞と結びつく受動態の表現",
  225: "押さえておきたい頻出熟語・関係代名詞whatを含む慣用表現",
  226: "押さえておきたい頻出熟語・仮定法を含む慣用表現",
  227: "押さえておきたい頻出熟語・その他の動詞を含む慣用熟語",
  228: "「追う」ことなどを表す語",
  229: "言語論(1)",
  230: "数・量に関する語",
  231: "言語論(2)",
  232: "「頭を使ってする」ことを表す語",
  233: "言語論(3)",
  234: "適応・変異などを表す動詞",
  235: "言語論(4)",
  236: "競争・勝負に関する語",
  237: "教育論(1)",
  238: "「伸びる」「広がる」ことなどを表す語",
  239: "教育論(2)",
  240: "「見下す」「あざむく」ことなどを表す語",
  241: "教育論(3)",
  242: "強い感情などを表す動詞",
  243: "教育論(4)",
  244: "戦争・紛争に関する語",
  245: "教育論(5)",
  246: "忍耐・固執などを表す語",
  247: "教育論(6)",
  248: "拒絶・断りなどを表す語",
  249: "自然・環境論(1)",
  250: "「助ける」「与える」ことなどを表す語",
  251: "自然・環境論(2)",
  252: "「集まる」「伴う」ことなどを表す語",
  253: "自然・環境論(3)",
  254: "「目を使ってする」ことを表す語",
  255: "自然・環境論(4)",
  256: "「終わる」「消える」ことなどを表す語",
  257: "経済に関する語(1)",
  258: "「隠す」「除外する」ことなどを表す語",
  259: "経済に関する語(2)",
  260: "一致・関係を表す語",
  261: "経済に関する語(3)",
  262: "人生・生死に関わる語(1)",
  263: "社会・社会福祉論(1)",
  264: "人生・生死に関わる語(2)",
  265: "社会・社会福祉論(2)",
  266: "人生・生死に関わる語(3)",
  267: "社会・社会福祉論(3)",
  268: "好ましくないイメージを持つ語",
  269: "外れた・離れた様子を表す語",
  270: "好ましいイメージを持つ語",
  271: "歴史・人類学に関する語",
  272: "「変化させる」ことなどを表す語",
  273: "改革などに関する語",
  274: "「提出する」「提供する」ことなどを表す語",
  275: "SDGsに関する語(1)",
  276: "SDGsに関する語(2)",
  277: "その他の重要な動詞",
  278: "その他の重要な形容詞・副詞"
};