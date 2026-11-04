/* 由 scripts/build.mjs 生成，不要手改。改 accounts、data、evidence 后运行 node scripts/build.mjs */
window.CREDIBILITY_LOG = {
  "version": 1,
  "categories": [
    {
      "id": "false_info",
      "label": "虚假信息",
      "plain": "公开说法，和可以对上的公开事实不一致。"
    },
    {
      "id": "contradiction",
      "label": "前后矛盾",
      "plain": "同一个公开账号，前后说法严重对不上。"
    },
    {
      "id": "scam_funnel",
      "label": "诈骗引流",
      "plain": "公开帖把人往可疑的赚钱、投资或私下交易上引。"
    },
    {
      "id": "web3_scam",
      "label": "Web3诈骗引流",
      "plain": "把人往虚拟币、钱包或链上项目的可疑交易上引。"
    },
    {
      "id": "identity_fraud",
      "label": "身份造假",
      "plain": "公开身份和公开材料对不上，例如冒充机构、职业或经历。"
    },
    {
      "id": "plagiarism",
      "label": "系统性抄袭",
      "plain": "反复把别人已经公开的内容当成自己的来发。"
    },
    {
      "id": "verified_rumor",
      "label": "已证实的恶意造谣",
      "plain": "不是猜测。要写明哪份公开材料证实了这一点，以及为什么不是误传。"
    }
  ],
  "statuses": [
    {
      "id": "documented",
      "label": "已整理",
      "plain": "已经按公开帖整理进页面。这不是法院判决。"
    },
    {
      "id": "needs_review",
      "label": "待核对",
      "plain": "先放进来，还要再对一次公开帖。"
    },
    {
      "id": "retracted",
      "label": "已撤回",
      "plain": "这条不再作为有效记录，留在这里是为了不悄悄删掉。"
    },
    {
      "id": "example",
      "label": "示例",
      "plain": "虚构的，只用来看版式。"
    }
  ],
  "availability": [
    {
      "id": "example",
      "label": "示例",
      "plain": "虚构账号，不参与定期核对。"
    },
    {
      "id": "unchecked",
      "label": "尚未核对",
      "plain": "还没有做过定期核对。"
    },
    {
      "id": "active",
      "label": "账号还在",
      "plain": "最近一次状态变化时，这个公开账号名还能打开。"
    },
    {
      "id": "deactivated",
      "label": "已停用",
      "plain": "平台显示已停用，或按记下的用户编号已经找不到。"
    },
    {
      "id": "renamed",
      "label": "已改名",
      "plain": "同一个账号还在，但公开账号名变了。曾用名仍可搜索。"
    },
    {
      "id": "missing",
      "label": "账号名打不开",
      "plain": "这个账号名已经打不开。还不能确定是停用还是改名。"
    }
  ],
  "accounts": [
    {
      "id": "0xkenzolee",
      "handle": "0xkenzolee",
      "x_user_id": "1765049104025935872",
      "avatar_url": "https://pbs.twimg.com/profile_images/2106304163298652160/BcFbqSAY_200x200.jpg",
      "profile_url": "https://x.com/0xkenzolee",
      "overview": "提交人说明这个账号用虚假抽奖骗点赞和转发。2026-10-28 的公开帖抽 iPhone，要求点赞、转发、关注和评论；另一条让 Grok 从评论区抽关注者，承诺 2500 美元。帖子没有证明奖金发了或没发，所以先标待核对。这不是法院判决。",
      "former_handles": [],
      "current_handle": null,
      "display_name": "",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-10-29 公开主页还能打开。没有登录，首页往后的帖和搜索结果看不到。",
      "availability_checked_at": "2026-10-29",
      "availability_lock": false,
      "updated": "2026-10-29",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。头像用的是公开头像地址。没有登录，只能核对公开主页上直接看得到的帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "categories": [
            "false_info"
          ],
          "title": "用抽手机和奖金换互动",
          "summary": "公开帖用 iPhone 抽奖换点赞、转发、关注和评论，另一条承诺从评论区抽一名关注者给 2500 美元。",
          "account_id": "0xkenzolee",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-28-cash-draw",
              "date": "2026-10-28",
              "url": "https://x.com/0xkenzolee/status/2115281147345490048",
              "excerpt": "15 小时后，请从我的评论区里随机选出一位关注者，送出 2500 美元奖金。我会像往常一样提供证明。",
              "why_it_matters": "这条公开帖用奖金把人引去评论，并要求抽中的是关注者。提交人说明这是骗互动。帖子没有附上发放证明。",
              "account_id": "0xkenzolee"
            },
            {
              "id": "2026-10-28-iphone-giveaway",
              "date": "2026-10-28",
              "url": "https://x.com/0xkenzolee/status/2115319198691815454",
              "excerpt": "iPhone 18 Pro Max 抽奖。其中 12 个数字里藏着一部惊喜 iPhone 18 Pro Max。参与方式：点赞本帖、转发、关注，评论你选的数字。",
              "why_it_matters": "同一天另一条公开帖用抽手机换点赞、转发、关注和评论。帖子没有证明奖品已经发出。",
              "account_id": "0xkenzolee"
            }
          ]
        }
      ]
    },
    {
      "id": "0xtraderyi",
      "handle": "0xTraderYi",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "965503592391098368",
      "avatar_url": "https://pbs.twimg.com/profile_images/2051763470392262656/NWB3b3_1_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/0xTraderYi",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开帖用中文抽 iPhone 换点赞、评论和转发，同一条又写把手机送给作者，并写抽中后私信收款码。帖子在近 6 个月内。2026-11-03 公开资料粉丝数约 21529，不超过 100 万。没有登录，这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录，也没有保存收款码。只收录近 6 个月内、帖子自己写明不是作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "0xtraderyi",
          "categories": [
            "false_info",
            "scam_funnel"
          ],
          "title": "抽奖帖写明由粉丝送手机，并私信收款",
          "summary": "公开帖用抽 iPhone 换互动。同一条写粉丝把手机送给作者，还写抽中后私信收款码。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-09-13-iphone-giveaway",
              "account_id": "0xtraderyi",
              "date": "2026-09-13",
              "url": "https://x.com/0xTraderYi/status/2099139243603808273",
              "excerpt": "随机抽 3 个粉丝送我 Iphone Duo。点赞评论转发即可。中奖的我会私信你收款码。",
              "why_it_matters": "这条公开帖不是作者发奖。它写粉丝送手机，并写私下发收款码。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "0xweihan",
      "handle": "0xWEIHAN",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1644868442",
      "avatar_url": "https://pbs.twimg.com/profile_images/2108425653498654721/g6ZzzLsI_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/0xWEIHAN",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 3838，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "0xweihan",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-28-iphone-giveaway",
              "account_id": "0xweihan",
              "date": "2026-10-28",
              "url": "https://x.com/0xWEIHAN/status/2115432084760334631",
              "excerpt": "本次抽 1 台 iPhone Duo。抽到的朋友私信我，我把我的地址给你，用来送我一台。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "10086110x",
      "handle": "10086110x",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1993890209730383873",
      "avatar_url": "https://pbs.twimg.com/profile_images/2078320559524634624/dMAAWAys_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/10086110x",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 42287，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "10086110x",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-28-iphone-giveaway",
              "account_id": "10086110x",
              "date": "2026-10-28",
              "url": "https://x.com/10086110x/status/2115392712618995740",
              "excerpt": "抽 18 个 iPhone 18 Pro Max。抽 18 个粉丝送给我。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "1shenyingheisou",
      "handle": "1shenyingheisou",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1531184234416984064",
      "avatar_url": "https://pbs.twimg.com/profile_images/2083032502961369088/_Cw9Upgm_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/1shenyingheisou",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 8302，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "1shenyingheisou",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-28-iphone-giveaway",
              "account_id": "1shenyingheisou",
              "date": "2026-10-28",
              "url": "https://x.com/1shenyingheisou/status/2115418742641357001",
              "excerpt": "直接抽 5 台 iPhone 18 Pro Max。抽中的粉丝送给我，说不定送给我 iPhone 18 Pro Max 就是你。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "aixparty",
      "handle": "aixparty",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1945999632200265728",
      "avatar_url": "https://pbs.twimg.com/profile_images/2093286996215050240/9anZwQMc_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/aixparty",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开帖用中文抽 iPhone 换点赞、评论和转发，同一条又写把手机送给作者，并写抽中后私信收款码。2026-11-03 公开资料粉丝数约 1766，不超过 100 万。没有登录，这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录，也没有保存收款码。只收录帖子自己写明不是作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "aixparty",
          "categories": [
            "false_info",
            "scam_funnel"
          ],
          "title": "抽奖帖写明由粉丝送手机，并私信收款",
          "summary": "公开帖用抽 iPhone 换互动。同一条写粉丝把手机送给作者，还写抽中后私信收款码。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-09-13-iphone-giveaway",
              "account_id": "aixparty",
              "date": "2026-09-13",
              "url": "https://x.com/aixparty/status/2099079632137994456",
              "excerpt": "随机抽 3 个粉丝送我 Iphone Duo。点赞评论转发即可。中奖的我会私信你收款码。",
              "why_it_matters": "这条公开帖不是作者发奖。它写粉丝送手机，并写私下发收款码。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "alxfman",
      "handle": "Alxfman",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "805896136619859968",
      "avatar_url": "https://pbs.twimg.com/profile_images/2112144748081487872/aIJa4hWM_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/Alxfman",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-04 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-04",
      "availability_lock": false,
      "overview": "公开搜索找到一条过去 48 小时内的中文抽 iPhone 帖。帖子写了抽幸运观众，又写把手机赠送给作者，所以不能把它当成已经发奖。2026-11-04 公开资料粉丝数约 1146，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-04",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录过去 48 小时内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "alxfman",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-11-02-iphone-giveaway",
              "account_id": "alxfman",
              "date": "2026-11-02",
              "url": "https://x.com/Alxfman/status/2117395006436917449",
              "excerpt": "我将从评论区随机抽取 4 位幸运观众，赠送我 1 台全新 iPhone 17 Pro Max。只需在下方评论“我愿意”。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写赠送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "anni22022",
      "handle": "Anni22022",
      "x_user_id": "1499731647172050947",
      "avatar_url": "https://pbs.twimg.com/profile_images/1990449849171656704/8NHE1WQ3_200x200.jpg",
      "profile_url": "https://x.com/Anni22022",
      "overview": "提交人说明这个账号用虚假抽奖骗点赞和转发。2026-10-28 的公开帖写抽 10 台 iPhone Duo，参与要关注、一键三连并评论，又写名额送给作者。帖子没有证明奖品发了或没发，所以先标待核对。这不是法院判决。",
      "former_handles": [],
      "current_handle": null,
      "display_name": "",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-10-29 公开主页还能打开。没有登录，首页往后的帖和搜索结果看不到。",
      "availability_checked_at": "2026-10-29",
      "availability_lock": false,
      "updated": "2026-10-29",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。头像用的是公开头像地址。没有登录，只能核对公开主页上直接看得到的帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "categories": [
            "false_info"
          ],
          "title": "用抽手机换关注和一键三连",
          "summary": "公开帖宣布抽 10 台 iPhone Duo，要求关注、一键三连和评论，并让 Grok 抽取。",
          "account_id": "anni22022",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-28-iphone-giveaway",
              "date": "2026-10-28",
              "url": "https://x.com/Anni22022/status/2115329474049036296",
              "excerpt": "所以我抽10 台 iPhone Duo，颜色随便，2T。参与就三步：关注我，一键三连本帖，评论区留句话。24 小时后让 @grok 来抽。抽10 个名额送给我。",
              "why_it_matters": "这条公开帖用抽手机换关注、点赞、转发和评论，并写名额送给作者。提交人说明这是骗互动。帖子没有证明奖品已经发出。",
              "account_id": "anni22022"
            }
          ]
        }
      ]
    },
    {
      "id": "bitcoin-alpha-x",
      "handle": "BitcoinAlphaX",
      "x_user_id": "1747018449312677888",
      "avatar_url": "https://pbs.twimg.com/profile_images/2113619626353467392/DAg9Sg44_200x200.jpg",
      "profile_url": "https://x.com/BitcoinAlphaX",
      "overview": "提交人说明这个账号用虚假抽奖骗点赞和转发。2026-10-28 有多条公开帖抽 iPhone，要求点赞、转发、评论或关注指定账号。帖子没有证明奖品发了或没发，所以先标待核对。这不是法院判决。",
      "former_handles": [],
      "current_handle": null,
      "display_name": "",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-10-29 公开主页还能打开。没有登录，首页往后的帖和搜索结果看不到。",
      "availability_checked_at": "2026-10-29",
      "availability_lock": false,
      "updated": "2026-10-29",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。头像用的是公开头像地址。没有登录，只能核对公开主页上直接看得到的帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "categories": [
            "false_info"
          ],
          "title": "连续发抽手机帖换互动和关注",
          "summary": "同一天的公开帖用 iPhone 抽奖换点赞、转发、评论，并要求关注别的账号，否则取消资格。",
          "account_id": "bitcoin-alpha-x",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-28-iphone-number-draw",
              "date": "2026-10-28",
              "url": "https://x.com/BitcoinAlphaX/status/2115233907759006177",
              "excerpt": "iPhone 18 Pro Max 抽奖活动。其中 12 个数字将隐藏着 iPhone 18 Pro Max 惊喜大奖。参与方式：点赞这条推文、转发、关注，在评论区留下你选择的数字。",
              "why_it_matters": "这条公开帖用抽手机换点赞、转发、关注和评论。提交人说明这是骗互动。帖子没有证明奖品已经发出。",
              "account_id": "bitcoin-alpha-x"
            },
            {
              "id": "2026-10-28-follow-gate",
              "date": "2026-10-28",
              "url": "https://x.com/BitcoinAlphaX/status/2115432051725705549",
              "excerpt": "pick 20 random people from my replies to win a brand new iPhone 18 pro max. RULES: like this post, comment DONE and you should follow @Null_S0L.",
              "why_it_matters": "同一天另一条公开帖把中奖资格和关注指定账号绑在一起。",
              "account_id": "bitcoin-alpha-x"
            }
          ]
        }
      ]
    },
    {
      "id": "bluce265201",
      "handle": "bluce265201",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1889663932740280322",
      "avatar_url": "https://pbs.twimg.com/profile_images/2110542611685752832/HIR0gB1H_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/bluce265201",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-10-29 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-10-29",
      "availability_lock": false,
      "overview": "公开搜索找到一条中文抽 iPhone 帖。帖子写了发福利或抽手机，又写把名额或手机送给作者，所以不能把它当成已经发奖。2026-10-29 公开资料粉丝数约 1051，不超过 100 万。这不是法院判决。",
      "updated": "2026-10-29",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "bluce265201",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-28-iphone-giveaway",
              "account_id": "bluce265201",
              "date": "2026-10-28",
              "url": "https://x.com/bluce265201/status/2115336136356688172",
              "excerpt": "我会让@grok 来给我抽奖🎟️，保证公平公正公开 不要等别人抽到了，才后悔没有参加，抽10个粉丝送给我，人人都有机会哦",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "bwdfz",
      "handle": "bwdfz",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "2054909558209024000",
      "avatar_url": "https://pbs.twimg.com/profile_images/2112498850498002944/VAT0H8eI_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/bwdfz",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 4612，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "bwdfz",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-29-iphone-giveaway",
              "account_id": "bwdfz",
              "date": "2026-10-29",
              "url": "https://x.com/bwdfz/status/2115790760310387150",
              "excerpt": "直接抽 5 台 iPhone 18 Pro Max。抽中的粉丝送给我。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "candydao-leaf",
      "handle": "CandyDAO_leaf",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1360084437086609409",
      "avatar_url": "https://pbs.twimg.com/profile_images/1968147838719889409/KhkCA-nj_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/CandyDAO_leaf",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 54212，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "candydao-leaf",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-28-iphone-giveaway",
              "account_id": "candydao-leaf",
              "date": "2026-10-28",
              "url": "https://x.com/CandyDAO_leaf/status/2115385282623389981",
              "excerpt": "本次抽 5 台 iPhone Duo 2TB。抽 5 个帅哥美女送给我。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "chinagt1",
      "handle": "chinagt1",
      "x_user_id": "1202603841629409280",
      "avatar_url": "https://pbs.twimg.com/profile_images/2107699115694161920/jbLD-WxV_200x200.jpg",
      "profile_url": "https://x.com/chinagt1",
      "overview": "公开帖用中文写获奖者每人获赠全新 iPhone Duo，要求点赞、评论并关注，24 小时后抽取。截止后的公开主页首页没有写开奖、获奖名单或寄出。没有登录，看不到全部历史，所以先标待核对。2026-10-29 公开资料粉丝数约 6771，不超过 100 万。这不是法院判决。",
      "former_handles": [],
      "current_handle": null,
      "display_name": "",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-10-29 公开主页还能打开。首页后来的帖没有写开奖或寄出。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-10-29",
      "availability_lock": false,
      "updated": "2026-10-29",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。粉丝数不超过 100 万。截止后只看了公开主页首页，没有看到发奖或寄出说明。",
      "behaviors": [
        {
          "id": "unsent-giveaway",
          "account_id": "chinagt1",
          "categories": [
            "false_info"
          ],
          "title": "抽 iPhone 的截止时间已过，首页没有发奖说明",
          "summary": "公开帖承诺获奖者获赠 iPhone Duo。截止后首页能看到的新帖没有开奖或寄出说明。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-26-iphone-promise",
              "account_id": "chinagt1",
              "date": "2026-10-26",
              "url": "https://x.com/chinagt1/status/2114746113937076703",
              "excerpt": "24小时后，请从这条推文的回复中随机选出4名获奖者。获奖者每人将获赠全新 iPhone Duo。参与方法：给这条推文点赞，在评论中回复 DONE，并关注我。",
              "why_it_matters": "这条公开帖说由账号送出 iPhone。2026-10-29 打开主页时，截止后的首页帖没有开奖或寄出说明。看不到全部历史，所以还不能当成判决。"
            }
          ]
        }
      ]
    },
    {
      "id": "cjtong-x",
      "handle": "cjtong_X",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1018518735487885312",
      "avatar_url": "https://pbs.twimg.com/profile_images/2054195498446397440/y_SXIXkf_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/cjtong_X",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-10-29 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-10-29",
      "availability_lock": false,
      "overview": "公开搜索找到一条中文抽 iPhone 帖。帖子写了发福利或抽手机，又写把名额或手机送给作者，所以不能把它当成已经发奖。2026-10-29 公开资料粉丝数约 3604，不超过 100 万。这不是法院判决。",
      "updated": "2026-10-29",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "cjtong-x",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-28-iphone-giveaway",
              "account_id": "cjtong-x",
              "date": "2026-10-28",
              "url": "https://x.com/cjtong_X/status/2115378254487896371",
              "excerpt": "出中奖截图，你才后悔自己没参加！ 5台 iPhone 18 Pro Max，5个幸运名额！抽中的粉丝送给我，说不定送给我iPhone 18 Pro Max就是你！ 🎉🎁",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "coen-feng",
      "handle": "Coen_Feng",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1853721818429038592",
      "avatar_url": "https://pbs.twimg.com/profile_images/2087964855273984000/QQdyzsaO_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/Coen_Feng",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 4893，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "coen-feng",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-26-iphone-giveaway",
              "account_id": "coen-feng",
              "date": "2026-10-26",
              "url": "https://x.com/Coen_Feng/status/2114588804044747198",
              "excerpt": "本次抽 10 台 iPhone Duo。抽 10 个粉丝送给我，人人都有机会。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "coinmmang",
      "handle": "CoinMMang",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1699704502046322688",
      "avatar_url": "https://pbs.twimg.com/profile_images/2010660582555283456/_riyQ4CN_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/CoinMMang",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 6806，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "coinmmang",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-27-iphone-giveaway",
              "account_id": "coinmmang",
              "date": "2026-10-27",
              "url": "https://x.com/CoinMMang/status/2114892802920521930",
              "excerpt": "我将在评论区抽十个朋友，每人送我一台 iPhone Duo。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "creamyhaoscar",
      "handle": "CreaMyHaOsCar",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1490561843261493251",
      "avatar_url": "https://pbs.twimg.com/profile_images/2012092807960526848/B5YerZ4L_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/CreaMyHaOsCar",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-10-29 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-10-29",
      "availability_lock": false,
      "overview": "公开搜索找到一条中文抽 iPhone 帖。帖子写了发福利或抽手机，又写把名额或手机送给作者，所以不能把它当成已经发奖。2026-10-29 公开资料粉丝数约 14499，不超过 100 万。这不是法院判决。",
      "updated": "2026-10-29",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "creamyhaoscar",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-28-iphone-giveaway",
              "account_id": "creamyhaoscar",
              "date": "2026-10-28",
              "url": "https://x.com/CreaMyHaOsCar/status/2115382155094495421",
              "excerpt": "后我会让@grok 来给我抽奖🎟️，保证公平公正公开 不要等别人抽到了，才后悔没有参加，抽1个粉丝送给我，人人都有机会哦",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "cryptoyuxin",
      "handle": "CryptoYuXin",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1129617183720562688",
      "avatar_url": "https://pbs.twimg.com/profile_images/2095191025639911426/0MHTvYLX_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/CryptoYuXin",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开帖用中文抽 iPhone 换点赞、评论和转发，同一条又写把手机送给作者，并写抽中后私信收款码。2026-11-03 公开资料粉丝数约 58056，不超过 100 万。没有登录，这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录，也没有保存收款码。只收录帖子自己写明不是作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "cryptoyuxin",
          "categories": [
            "false_info",
            "scam_funnel"
          ],
          "title": "抽奖帖写明由粉丝送手机，并私信收款",
          "summary": "公开帖用抽 iPhone 换互动。同一条写粉丝把手机送给作者，还写抽中后私信收款码。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-09-14-iphone-giveaway",
              "account_id": "cryptoyuxin",
              "date": "2026-09-14",
              "url": "https://x.com/CryptoYuXin/status/2099355797818151083",
              "excerpt": "随机抽2个粉丝，每人送我一台 iPhone 18 Pro Max。点赞评论转发即可。抽中后我会私信你收款码。",
              "why_it_matters": "这条公开帖不是作者发奖。它写粉丝送手机，并写私下发收款码。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "drbitcoin36",
      "handle": "DRbitcoin36",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1753990410832379904",
      "avatar_url": "https://pbs.twimg.com/profile_images/1871549554279194624/SLDJsDr2_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/DRbitcoin36",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开帖用中文抽 iPhone 换点赞、评论和转发，同一条又写把手机送给作者，并写抽中后私信收款码。帖子在近 6 个月内。2026-11-03 公开资料粉丝数约 34638，不超过 100 万。没有登录，这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录，也没有保存收款码。只收录近 6 个月内、帖子自己写明不是作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "drbitcoin36",
          "categories": [
            "false_info",
            "scam_funnel"
          ],
          "title": "抽奖帖写明由粉丝送手机，并私信收款",
          "summary": "公开帖用抽 iPhone 换互动。同一条写粉丝把手机送给作者，还写抽中后私信收款码。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-09-13-iphone-giveaway",
              "account_id": "drbitcoin36",
              "date": "2026-09-13",
              "url": "https://x.com/DRbitcoin36/status/2099012387764682866",
              "excerpt": "随机抽 3 个粉丝送我 Iphone Duo。点赞评论转发即可。中奖的我会私信你收款码。",
              "why_it_matters": "这条公开帖不是作者发奖。它写粉丝送手机，并写私下发收款码。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "easicoin",
      "handle": "Easicoin_",
      "x_user_id": "3228116757",
      "avatar_url": "https://pbs.twimg.com/profile_images/1998226575259766784/V2dSjIaX_200x200.jpg",
      "profile_url": "https://x.com/Easicoin_",
      "overview": "公开帖用中文抽最新款 iPhone 17 Pro，写明开奖时间是 2026-05-30，并说会通过官方渠道发放。2026-10-29 的公开主页首页没有这条抽奖的开奖或寄出说明。没有登录，看不到全部历史，所以先标待核对。公开资料粉丝数约 2499，不超过 100 万。这不是法院判决。",
      "former_handles": [],
      "current_handle": null,
      "display_name": "",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-10-29 公开主页还能打开。首页后来的帖没有写开奖或寄出。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-10-29",
      "availability_lock": false,
      "updated": "2026-10-29",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。粉丝数不超过 100 万。截止后只看了公开主页首页，没有看到发奖或寄出说明。",
      "behaviors": [
        {
          "id": "unsent-giveaway",
          "account_id": "easicoin",
          "categories": [
            "false_info"
          ],
          "title": "写了开奖日期，首页没有发奖说明",
          "summary": "公开帖承诺抽 iPhone 17 Pro，开奖日写的是 2026-05-30。之后的首页帖没有开奖或寄出说明。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-05-07-iphone-promise",
              "account_id": "easicoin",
              "date": "2026-05-07",
              "url": "https://x.com/Easicoin_/status/2052306960738087223",
              "excerpt": "EasiCoin 苹果手机大抽奖。最新款 iPhone 17 Pro 等你拿回家。1 名幸运用户获赠 iPhone 17 Pro。开奖时间：2026年5月30日。我们将随机抽取中奖幸运儿，并通过平台官方渠道联系发放奖品。",
              "why_it_matters": "这条公开帖说由账号送出 iPhone，并写了已经过去的开奖日。2026-10-29 首页没有看到开奖或寄出说明。看不到全部历史，所以还不能当成判决。"
            }
          ]
        }
      ]
    },
    {
      "id": "fomoooomi",
      "handle": "Fomoooomi",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "3226012167",
      "avatar_url": "https://pbs.twimg.com/profile_images/2098611503389962240/e1idnY5I_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/Fomoooomi",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 5609，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "fomoooomi",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-28-iphone-giveaway",
              "account_id": "fomoooomi",
              "date": "2026-10-28",
              "url": "https://x.com/Fomoooomi/status/2115389753872777234",
              "excerpt": "本次抽 20 台 iPhone Duo 2TB。抽 20 个粉丝送给我。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "fzc8848848",
      "handle": "fzc8848848",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1492552952074338304",
      "avatar_url": "https://pbs.twimg.com/profile_images/2107805736696991745/U86sx2s6_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/fzc8848848",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 6985，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "fzc8848848",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-27-iphone-giveaway",
              "account_id": "fzc8848848",
              "date": "2026-10-27",
              "url": "https://x.com/fzc8848848/status/2114880839687504054",
              "excerpt": "我将在评论区抽十个朋友，每人送我一台 iPhone Duo。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "game-snot",
      "handle": "game_snot",
      "former_handles": [
        "Gamesont8"
      ],
      "current_handle": null,
      "x_user_id": "1987846795687608321",
      "avatar_url": "https://pbs.twimg.com/profile_images/2066978855995547648/tnVqB4dr_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/game_snot",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开帖用中文抽 iPhone 换点赞、评论和转发，同一条又写把手机送给作者，并写抽中后私信收款码。帖子在近 6 个月内。2026-11-03 公开资料粉丝数约 780，不超过 100 万。没有登录，这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录，也没有保存收款码。只收录近 6 个月内、帖子自己写明不是作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "game-snot",
          "categories": [
            "false_info",
            "scam_funnel"
          ],
          "title": "抽奖帖写明由粉丝送手机，并私信收款",
          "summary": "公开帖用抽 iPhone 换互动。同一条写粉丝把手机送给作者，还写抽中后私信收款码。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-09-13-iphone-giveaway",
              "account_id": "game-snot",
              "date": "2026-09-13",
              "url": "https://x.com/game_snot/status/2099109381208158503",
              "excerpt": "随机抽 3 个粉丝送我 Iphone Duo。点赞评论转发即可。中奖的我会私信你收款码。",
              "why_it_matters": "这条公开帖不是作者发奖。它写粉丝送手机，并写私下发收款码。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "gaooofy",
      "handle": "gaooofy",
      "x_user_id": "2027533690532990980",
      "avatar_url": "https://pbs.twimg.com/profile_images/2105095738527260672/SbaSMqlM_200x200.jpg",
      "profile_url": "https://x.com/gaooofy",
      "overview": "提交人把这个账号和虚假抽奖骗互动的账号放在一起。2026-10-27 的公开帖确实要求点赞、评论和转发，但帖子自己写明中奖者可自愿送给作者一台手机，并称为反向玩笑。不能把它写成同一套奖品承诺。先标待核对。这不是法院判决。",
      "former_handles": [],
      "current_handle": null,
      "display_name": "",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-10-29 公开主页还能打开。没有登录，首页往后的帖和搜索结果看不到。",
      "availability_checked_at": "2026-10-29",
      "availability_lock": false,
      "updated": "2026-10-29",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。头像用的是公开头像地址。没有登录，只能核对公开主页上直接看得到的帖。",
      "behaviors": [
        {
          "id": "reverse-joke-giveaway",
          "categories": [
            "false_info"
          ],
          "title": "公开帖写成反向玩笑，不是奖品承诺",
          "summary": "帖子要求点赞、评论“抽我”和转发，同时写明中奖粉丝可自愿送给作者一台 iPhone Duo，并称为反向抽奖。",
          "account_id": "gaooofy",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-27-reverse-joke",
              "date": "2026-10-27",
              "url": "https://x.com/gaooofy/status/2115017175279014084",
              "excerpt": "本次随机抽取 10 位幸运粉丝。参与方式：点赞本帖，评论区留言「抽我」，转发还能增加中奖概率。特别说明：中奖的 10 位幸运粉丝，均可自愿赠送我一台 iPhone Duo。主打一个反向抽奖，别人宠粉，我靠粉丝宠。",
              "why_it_matters": "这条帖要求互动，但自己写成反向玩笑，不是承诺给粉丝发奖。不能和同批奖品承诺帖当成同一件事。",
              "account_id": "gaooofy"
            }
          ]
        }
      ]
    },
    {
      "id": "gnn1948944",
      "handle": "gnn1948944",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1891301719013015552",
      "avatar_url": "https://pbs.twimg.com/profile_images/2109524236310343680/XhASWiMv_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/gnn1948944",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 4643，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "gnn1948944",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-31-iphone-giveaway",
              "account_id": "gnn1948944",
              "date": "2026-10-31",
              "url": "https://x.com/gnn1948944/status/2116503361931645337",
              "excerpt": "我决定在评论区抽三个人，每人送我一台 iPhone 18。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "huzai1221",
      "handle": "Huzai1221",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "2063801375306457088",
      "avatar_url": "https://pbs.twimg.com/profile_images/2063802142151135233/7m0kQbvV_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/Huzai1221",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 2139，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "huzai1221",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-28-iphone-giveaway",
              "account_id": "huzai1221",
              "date": "2026-10-28",
              "url": "https://x.com/Huzai1221/status/2115493698452799721",
              "excerpt": "本次抽 5 台 iPhone 18 Pro。抽 5 个粉丝送给我。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "hyhongyu8",
      "handle": "HYhongyu8",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1630829886876286976",
      "avatar_url": "https://pbs.twimg.com/profile_images/2088582479020199936/Zk-suaz9_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/HYhongyu8",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 30351，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "hyhongyu8",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-28-iphone-giveaway",
              "account_id": "hyhongyu8",
              "date": "2026-10-28",
              "url": "https://x.com/HYhongyu8/status/2115398074348794138",
              "excerpt": "本次抽10台 iPhone Duo 2T。24小时后开奖。抽10个粉丝送我。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "ikai-freedom",
      "handle": "ikai_freedom",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1847211911458504704",
      "avatar_url": "https://pbs.twimg.com/profile_images/2087417550011596800/YtYCjvrp_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/ikai_freedom",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 10724，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "ikai-freedom",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-26-iphone-giveaway",
              "account_id": "ikai-freedom",
              "date": "2026-10-26",
              "url": "https://x.com/ikai_freedom/status/2114629786400420058",
              "excerpt": "本次抽 10 台 iPhone Duo。抽 10 个粉丝送给我，人人都有机会。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "ipzxyo0azd51612",
      "handle": "ipZXyo0AZd51612",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "2027939902642679808",
      "avatar_url": "https://pbs.twimg.com/profile_images/2042905528884695041/hpRXcq2d_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/ipZXyo0AZd51612",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 942，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "ipzxyo0azd51612",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-16-iphone-giveaway",
              "account_id": "ipzxyo0azd51612",
              "date": "2026-10-16",
              "url": "https://x.com/ipZXyo0AZd51612/status/2111005765511344133",
              "excerpt": "我会让 Ai 从评论区随机抽一条评论送我一台 iPhone Duo。中奖的粉丝可以获得我的一句祝福。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "jessica-web3",
      "handle": "Jessica_Web3_",
      "x_user_id": "1924150473151717376",
      "avatar_url": "https://pbs.twimg.com/profile_images/2056325025788248064/Bhc2W1j7_200x200.jpg",
      "profile_url": "https://x.com/Jessica_Web3_",
      "overview": "提交人说明这个账号用虚假抽奖骗点赞和转发。2026-10-29 打开公开主页时，首页能看到的帖里没有抽奖帖。搜索要登录，所以不能说没发过。先按提交人的说明标待核对。这不是法院判决。",
      "former_handles": [],
      "current_handle": null,
      "display_name": "",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-10-29 公开主页还能打开。没有登录，首页往后的帖和搜索结果看不到。",
      "availability_checked_at": "2026-10-29",
      "availability_lock": false,
      "updated": "2026-10-29",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。头像用的是公开头像地址。没有登录，只能核对公开主页上直接看得到的帖。",
      "behaviors": [
        {
          "id": "giveaway-not-visible",
          "categories": [
            "false_info"
          ],
          "title": "提交称有虚假抽奖，首页还没对上帖",
          "summary": "提交人把这个账号列入虚假抽奖骗互动。公开主页首页当时没有看到对应帖。",
          "account_id": "jessica-web3",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-29-homepage",
              "date": "2026-10-29",
              "url": "https://x.com/Jessica_Web3_",
              "excerpt": "公开简介写有内容创作和 Web3 实习日常。首页当时能看到的帖不是抽奖。",
              "why_it_matters": "这只说明核对时首页没有抽奖帖，不是证明没有发过。搜索要登录，更早的帖这次没打开。",
              "account_id": "jessica-web3"
            }
          ]
        }
      ]
    },
    {
      "id": "jianqiao778",
      "handle": "jianqiao778",
      "x_user_id": "1814125151593897984",
      "avatar_url": "https://pbs.twimg.com/profile_images/2112791207801974784/zgwEQ9c__200x200.jpg",
      "profile_url": "https://x.com/jianqiao778",
      "overview": "提交人说明这个账号用虚假抽奖骗点赞和转发。2026-10-28 的公开帖写抽 5 台 iPhone 18 Pro Max，参与要关注、一键三连并评论，又写抽中的粉丝送给作者。帖子没有证明奖品发了或没发，所以先标待核对。这不是法院判决。",
      "former_handles": [],
      "current_handle": null,
      "display_name": "",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-10-29 公开主页还能打开。没有登录，首页往后的帖和搜索结果看不到。",
      "availability_checked_at": "2026-10-29",
      "availability_lock": false,
      "updated": "2026-10-29",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。头像用的是公开头像地址。没有登录，只能核对公开主页上直接看得到的帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "categories": [
            "false_info"
          ],
          "title": "用抽手机换关注和一键三连",
          "summary": "公开帖宣布抽 5 台顶配 iPhone，要求关注、一键三连和评论，并让 Grok 抽取。",
          "account_id": "jianqiao778",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-28-iphone-giveaway",
              "date": "2026-10-28",
              "url": "https://x.com/jianqiao778/status/2115383808908464243",
              "excerpt": "这次直接抽 5台 iPhone 18 Pro Max，颜色任选，顶配 2TB。参与方式：关注我，一键三连本帖，在评论区留下你的祝福。24 小时后，我会邀请 @grok 随机抽取 5位幸运粉丝。抽中的粉丝送给我。",
              "why_it_matters": "这条公开帖用抽手机换关注和一键三连。它自己写了抽中的粉丝送给作者。提交人说明这是骗互动。帖子没有证明奖品已经发出。",
              "account_id": "jianqiao778"
            }
          ]
        }
      ]
    },
    {
      "id": "jimmy-vibecodes",
      "handle": "jimmy_vibecodes",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1808163995725320199",
      "avatar_url": "https://pbs.twimg.com/profile_images/2072348518896087040/DbbNAXK6_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/jimmy_vibecodes",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 4786，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "jimmy-vibecodes",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-25-iphone-giveaway",
              "account_id": "jimmy-vibecodes",
              "date": "2026-10-25",
              "url": "https://x.com/jimmy_vibecodes/status/2114384273998586076",
              "excerpt": "这次抽 12 台 iPhone Duo，抽 12 个送给我自己。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "jimmyyy0066",
      "handle": "jimmyyy0066",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "2079971963058167808",
      "avatar_url": "https://pbs.twimg.com/profile_images/2106651681387917312/97ZLhL3M_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/jimmyyy0066",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-10-29 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-10-29",
      "availability_lock": false,
      "overview": "公开搜索找到一条中文抽 iPhone 帖。帖子写了发福利或抽手机，又写把名额或手机送给作者，所以不能把它当成已经发奖。2026-10-29 公开资料粉丝数约 5392，不超过 100 万。这不是法院判决。",
      "updated": "2026-10-29",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "jimmyyy0066",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-28-iphone-giveaway",
              "account_id": "jimmyyy0066",
              "date": "2026-10-28",
              "url": "https://x.com/jimmyyy0066/status/2115417625505517678",
              "excerpt": "开奖。 简中区博主们一起发福利， 请不要再错过这次机会。 不要等别人抽到了，才来后悔。 抽15个粉丝送给我，人人都有机会。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "jinchenma-ai-underscore",
      "handle": "jinchenma_ai_",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "946356139691712512",
      "avatar_url": null,
      "display_name": "",
      "profile_url": "https://x.com/jinchenma_ai_",
      "status": "needs_review",
      "availability": "deactivated",
      "availability_note": "平台显示这个账号已停用。按账号名查到的平台编号是 946356139691712512。",
      "availability_checked_at": "2026-10-13",
      "availability_lock": false,
      "overview": "提交人确认的套路是冒充大 V，做 Web3 诈骗引流。这个账号名比还在更新的 @jinchenma_ai 多一个结尾下划线，平台编号也不同，不要看成同一个人。2026-10-13 公开接口显示已停用，原来的帖已经打不开，所以先标待核对。这不是法院判决。",
      "updated": "2026-10-13",
      "sources_are_public": true,
      "editor_note": "不要和 @jinchenma_ai 搞混。那个账号还在更新，平台编号是 796179107172257792。这里只记录多一个下划线、已经停用的号。",
      "behaviors": [
        {
          "id": "web3-impersonation",
          "account_id": "jinchenma-ai-underscore",
          "categories": [
            "identity_fraud",
            "web3_scam"
          ],
          "title": "冒充大 V 做 Web3 诈骗引流",
          "summary": "提交人确认这个近似账号冒充大 V，把人往 Web3 诈骗上引。账号已停用，公开帖打不开，暂时摘不到原话。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-13-suspended",
              "account_id": "jinchenma-ai-underscore",
              "date": "2026-10-13",
              "url": "https://x.com/jinchenma_ai_",
              "excerpt": "平台显示这个账号已停用。",
              "why_it_matters": "这是还能打开的公开主页，不是诈骗原帖。原帖已经打不开。账号名只比 @jinchenma_ai 多一个下划线，不要看错人。"
            }
          ]
        }
      ]
    },
    {
      "id": "jiucaicai250131",
      "handle": "jiucaicai250131",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1884981760481751040",
      "avatar_url": "https://pbs.twimg.com/profile_images/1983761143840808960/k6iqSQKm_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/jiucaicai250131",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-10-29 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-10-29",
      "availability_lock": false,
      "overview": "公开搜索找到一条中文抽 iPhone 帖。帖子写了发福利或抽手机，又写把名额或手机送给作者，所以不能把它当成已经发奖。2026-10-29 公开资料粉丝数约 25052，不超过 100 万。这不是法院判决。",
      "updated": "2026-10-29",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "jiucaicai250131",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-28-iphone-giveaway",
              "account_id": "jiucaicai250131",
              "date": "2026-10-28",
              "url": "https://x.com/jiucaicai250131/status/2115442699138650394",
              "excerpt": "以后我会让@grok来给我抽奖🎟️保证公平公正公开 不要等别人抽到了，才后悔没有参加，抽10个粉丝送给我，人人都有机会哦",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "kaishen777",
      "handle": "kaishen777",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "2101193990997442560",
      "avatar_url": "https://pbs.twimg.com/profile_images/2103775618777456640/Bx0AAzba_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/kaishen777",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 7466，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "kaishen777",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-28-iphone-giveaway",
              "account_id": "kaishen777",
              "date": "2026-10-28",
              "url": "https://x.com/kaishen777/status/2115364888331895092",
              "excerpt": "这次直接抽 10 台 iPhone 18 Pro Max。抽中的粉丝送给我。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "kane199903",
      "handle": "kane199903",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "2109354424158363648",
      "avatar_url": "https://pbs.twimg.com/profile_images/2109354870629445632/dcrGR0yB_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/kane199903",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 5483，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "kane199903",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-28-iphone-giveaway",
              "account_id": "kane199903",
              "date": "2026-10-28",
              "url": "https://x.com/kane199903/status/2115442111772529119",
              "excerpt": "这次直接抽 10 台 iPhone 18 Pro Max。抽中的粉丝送给我。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "kevin-he",
      "handle": "KevinHe79196868",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1324747047564681217",
      "avatar_url": "https://pbs.twimg.com/profile_images/2096611771180351488/7vT2uMp3_200x200.jpg",
      "display_name": "暴躁小薯条",
      "profile_url": "https://x.com/KevinHe79196868",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-10-13 公开主页还能打开。",
      "availability_checked_at": "2026-10-13",
      "availability_lock": false,
      "overview": "提交时说明的套路是：先以约炮为由接触，再诱导对方下载带病毒的软件，或让对方代付酒店。目前能对上的公开帖是在找人、把回复引到私信，并反复提到酒店代付。这些帖没有写出软件下载地址，也没有直接写「请帮我付酒店」，所以先标待核对。这不是法院判决。",
      "updated": "2026-10-13",
      "sources_are_public": true,
      "editor_note": "显示名用的是公开昵称，不是真实姓名。带毒软件这一点还没有公开帖可以对上，不能写成已经证实。",
      "behaviors": [
        {
          "id": "solicit-dm",
          "account_id": "kevin-he",
          "categories": [
            "scam_funnel"
          ],
          "title": "公开找人，并把回复引到私信",
          "summary": "公开说要找人见面或找长期，并让对方重新发私信。还写了不会随便加联系方式。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-09-19-looking",
              "account_id": "kevin-he",
              "date": "2026-09-19",
              "url": "https://x.com/KevinHe79196868/status/2101271063040840142",
              "excerpt": "要不然到时候找国庆节去玩的人或者长期的就找不到啦",
              "why_it_matters": "公开在找短期见面或长期联系的人。"
            },
            {
              "id": "2026-10-11-reply-dms",
              "account_id": "kevin-he",
              "date": "2026-10-11",
              "url": "https://x.com/KevinHe79196868/status/2109222266932515037",
              "excerpt": "现在开始回复私信。如果想优先被回复可以重新在给我发一下。",
              "why_it_matters": "把想联系的人引到私信。"
            },
            {
              "id": "2026-10-12-no-casual-contact",
              "account_id": "kevin-he",
              "date": "2026-10-12",
              "url": "https://x.com/KevinHe79196868/status/2109561613250703435",
              "excerpt": "可以重新给我发一下。那种口嗨的就不要给我发消息了。我不会随便加人。",
              "why_it_matters": "继续把联系引回私信，并表示不会随便加别的联系方式。原帖用了联系方式的缩写，这里不照抄。"
            }
          ]
        },
        {
          "id": "hotel-pretext",
          "account_id": "kevin-he",
          "categories": [
            "scam_funnel"
          ],
          "title": "公开把找人和酒店代付绑在一起",
          "summary": "公开找人时反复提到酒店代付。帖子是在说别人被骗，没有直接写出「请你帮我付酒店」，所以这一点还要再对。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-11-hotel-payment",
              "account_id": "kevin-he",
              "date": "2026-10-11",
              "url": "https://x.com/KevinHe79196868/status/2109309175142748254",
              "excerpt": "这个上面还有真男么，都去哪里。是不是都被骗光了，不敢找了。都是被酒店代付骗的吗还是别的。",
              "why_it_matters": "公开找人，同时把酒店代付说成别人被骗的原因。这句话还不能直接证明这个账号在让人代付。"
            },
            {
              "id": "2026-10-12-hotel-payment",
              "account_id": "kevin-he",
              "date": "2026-10-12",
              "url": "https://x.com/KevinHe79196868/status/2109691179000611028",
              "excerpt": "你们这种的活该被酒店代付被骗。很多真心的都被骗了，你们都是怎么被骗的。",
              "why_it_matters": "再次把酒店代付和找人放在一起。原帖还有不适内容，这里只摘和代付有关的句子。"
            }
          ]
        }
      ]
    },
    {
      "id": "leo139999",
      "handle": "Leo139999",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1718734973052542976",
      "avatar_url": "https://pbs.twimg.com/profile_images/2094791078239240193/3KUngyUQ_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/Leo139999",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 2614，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "leo139999",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-26-iphone-giveaway",
              "account_id": "leo139999",
              "date": "2026-10-26",
              "url": "https://x.com/Leo139999/status/2114793165018587558",
              "excerpt": "本次抽10台 iPhone Duo。不要等别人抽到了才后悔没有参加，抽10个粉丝送给我。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "lili-9225",
      "handle": "lili_9225",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1829899075262767104",
      "avatar_url": "https://pbs.twimg.com/profile_images/2113647046192152576/js9atHGs_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/lili_9225",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 5665，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "lili-9225",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-26-iphone-giveaway",
              "account_id": "lili-9225",
              "date": "2026-10-26",
              "url": "https://x.com/lili_9225/status/2114862138854449556",
              "excerpt": "抽 10 位幸运粉丝，每人送我一台 iPhone Duo。保证每台都送到我手里。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "luckywed112",
      "handle": "Luckywed112",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "2007373994417369096",
      "avatar_url": "https://pbs.twimg.com/profile_images/2112221968317698048/NK6nTYU3_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/Luckywed112",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-10-29 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-10-29",
      "availability_lock": false,
      "overview": "公开搜索找到一条中文抽 iPhone 帖。帖子写了发福利或抽手机，又写把名额或手机送给作者，所以不能把它当成已经发奖。2026-10-29 公开资料粉丝数约 10900，不超过 100 万。这不是法院判决。",
      "updated": "2026-10-29",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "luckywed112",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-28-iphone-giveaway",
              "account_id": "luckywed112",
              "date": "2026-10-28",
              "url": "https://x.com/Luckywed112/status/2115418826238247200",
              "excerpt": "本帖“一键三连” 3. 留下评论☎️ 本帖发出72小时后，我联系 @grok 手速快一点，抽5个粉丝送给我，公平公正，无内幕，不骗人。。。。。。。 。。。。。。。。。。。。。。。。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "maoerai",
      "handle": "Maoerai",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "2043207917751463936",
      "avatar_url": "https://pbs.twimg.com/profile_images/2048437383482560512/t_C2O1Cw_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/Maoerai",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 3262，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "maoerai",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-28-iphone-giveaway",
              "account_id": "maoerai",
              "date": "2026-10-28",
              "url": "https://x.com/Maoerai/status/2115504492309569689",
              "excerpt": "直接抽 5 台 iPhone 18 Pro Max。抽中的粉丝送给我。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "miduowa",
      "handle": "Miduowa",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "2108792723826491392",
      "avatar_url": "https://pbs.twimg.com/profile_images/2109484661034631168/piFiho2S_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/Miduowa",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 5648，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "miduowa",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-26-iphone-giveaway",
              "account_id": "miduowa",
              "date": "2026-10-26",
              "url": "https://x.com/Miduowa/status/2114674735187624446",
              "excerpt": "评论区抽 10 个人送我 iPhone Duo。明晚开奖。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "moonquakes-ai",
      "handle": "Moonquakes_ai",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "2063778586021261312",
      "avatar_url": "https://pbs.twimg.com/profile_images/2103524619525423104/Ug4s0D4X_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/Moonquakes_ai",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 9089，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "moonquakes-ai",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-28-iphone-giveaway",
              "account_id": "moonquakes-ai",
              "date": "2026-10-28",
              "url": "https://x.com/Moonquakes_ai/status/2115336396286378002",
              "excerpt": "本次抽10台 iPhone Duo。24小时以后让抽奖。抽10个粉丝送给我，人人都有机会。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "nchang28155",
      "handle": "NChang28155",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1935392922410827778",
      "avatar_url": "https://pbs.twimg.com/profile_images/2101473499017867264/h4v8WE0O_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/NChang28155",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 1152，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "nchang28155",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-29-iphone-giveaway",
              "account_id": "nchang28155",
              "date": "2026-10-29",
              "url": "https://x.com/NChang28155/status/2115634391154380975",
              "excerpt": "本次抽 5 台 iPhone Duo。抽 5 个粉丝送给我，人人都有机会。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "noahvisualsx",
      "handle": "noahvisualsx",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "2095203465526202368",
      "avatar_url": "https://pbs.twimg.com/profile_images/2108652700573569024/lat4pndU_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/noahvisualsx",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-10-29 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-10-29",
      "availability_lock": false,
      "overview": "公开搜索找到一条中文抽 iPhone 帖。帖子写了发福利或抽手机，又写把名额或手机送给作者，所以不能把它当成已经发奖。2026-10-29 公开资料粉丝数约 7269，不超过 100 万。这不是法院判决。",
      "updated": "2026-10-29",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "noahvisualsx",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-28-iphone-giveaway",
              "account_id": "noahvisualsx",
              "date": "2026-10-28",
              "url": "https://x.com/noahvisualsx/status/2115517946068181096",
              "excerpt": "以后我让 @grok 抽奖🎟️ 保证公平公正公开。 不要等别人抽到了，才后悔没参加。 抽 15 个人给我送一台 iPhone Duo 人人都有机会🙂🙂",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "okx-service",
      "handle": "okx_service",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1544173728535396352",
      "avatar_url": "https://pbs.twimg.com/profile_images/1544198537117941760/_UvZRUMh_200x200.jpg",
      "display_name": "OKX官方注册服务",
      "profile_url": "https://x.com/okx_service",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-04 公开主页还能打开。",
      "availability_checked_at": "2026-11-04",
      "availability_lock": false,
      "overview": "公开显示名自称 OKX 官方注册服务，简介把人往不是 okx.com 的注册页上引。官方账号 @okx 和客服 @OKXHelpDesk 是另外的用户编号。主页没有写出索要私钥、验证码或转账。这不是法院判决，先标待核对。",
      "updated": "2026-11-04",
      "sources_are_public": true,
      "editor_note": "简介里的注册链接和邀请码没有写入，避免把人引到可疑页面。公开显示名是机构自称，不是真人姓名。",
      "behaviors": [
        {
          "id": "fake-official-signup",
          "account_id": "okx-service",
          "categories": [
            "identity_fraud",
            "web3_scam"
          ],
          "title": "用官方注册服务的身份把人引去非官方页面",
          "summary": "公开主页自称 OKX 官方注册服务，并承诺注册可领数字货币奖励。链接域名不是交易所自己的 okx.com。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-11-04-profile",
              "account_id": "okx-service",
              "date": "2026-11-04",
              "url": "https://x.com/okx_service",
              "excerpt": "公开显示名：OKX官方注册服务。公开简介称注册 OKX 可领数字货币奖励，链接域名不是 okx.com。",
              "why_it_matters": "这是账号自己的公开主页，不是别人转述。官方交易所主页和客服号是另外的用户编号。主页没有写出索要私钥、验证码或先转账，所以只记录身份和注册引流对不上。"
            }
          ]
        }
      ]
    },
    {
      "id": "owyyzq",
      "handle": "owyyzq",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "2108479218577522688",
      "avatar_url": "https://pbs.twimg.com/profile_images/2108489433423257600/WAe-YwQv_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/owyyzq",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-10-13 公开主页还能打开。",
      "availability_checked_at": "2026-10-13",
      "availability_lock": false,
      "overview": "提交人确认的套路是收门槛费骗人。公开简介只有「🚪30」，现有公开帖没有写出收费金额或付款要求，所以先标待核对。这不是法院判决。",
      "updated": "2026-10-13",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入，避免收进可能的真人姓名。头像用的是公开头像地址。",
      "behaviors": [
        {
          "id": "entry-fee",
          "account_id": "owyyzq",
          "categories": [
            "scam_funnel"
          ],
          "title": "用门槛费把人往私下交易上引",
          "summary": "提交人确认这个账号收门槛费骗人。公开简介没有把收费写完整，公开帖也没有写出付款要求。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-13-profile",
              "account_id": "owyyzq",
              "date": "2026-10-13",
              "url": "https://x.com/owyyzq",
              "excerpt": "公开简介：🚪30",
              "why_it_matters": "这是公开主页上的简介，不是一张写出门槛费的帖。提交人说明这是门槛费。现有公开帖没有写出收费或付款要求。"
            }
          ]
        }
      ]
    },
    {
      "id": "qiaonanwolf",
      "handle": "qiaonanwolf",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1823535227052195840",
      "avatar_url": "https://pbs.twimg.com/profile_images/1932455186825666561/ZHS-QW2f_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/qiaonanwolf",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 4452，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "qiaonanwolf",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-27-iphone-giveaway",
              "account_id": "qiaonanwolf",
              "date": "2026-10-27",
              "url": "https://x.com/qiaonanwolf/status/2114888248166416792",
              "excerpt": "这次我来抽，抽101台 iPhone Duo。101位粉丝，每位粉丝给我买一台 iPhone Duo。中奖的朋友负责下单，我负责晒单。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "qihang-zeng6688",
      "handle": "qihang_zeng6688",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1789757492873789440",
      "avatar_url": "https://pbs.twimg.com/profile_images/2073938920065404928/QZLDvyNS_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/qihang_zeng6688",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 20922，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "qihang-zeng6688",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-09-10-iphone-giveaway",
              "account_id": "qihang-zeng6688",
              "date": "2026-09-10",
              "url": "https://x.com/qihang_zeng6688/status/2097981405334544396",
              "excerpt": "抽个粉丝送我一台 iphone Duo。直接评论区留言，我愿意。24小时后抽奖。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "qiju2030",
      "handle": "qiju2030",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1582643800404787205",
      "avatar_url": "https://pbs.twimg.com/profile_images/1582644285224386560/UterXtG7_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/qiju2030",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 85143，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "qiju2030",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-09-10-iphone-giveaway",
              "account_id": "qiju2030",
              "date": "2026-09-10",
              "url": "https://x.com/qiju2030/status/2098040433851109700",
              "excerpt": "抽个粉丝送我一台 iphone Duo。大家直接评论区留言，我愿意。24小时后抽奖。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "qing-liu60804",
      "handle": "qing_liu60804",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1988418366319865856",
      "avatar_url": "https://pbs.twimg.com/profile_images/2115319521506643968/nXrFiLse_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/qing_liu60804",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 9，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "qing-liu60804",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-26-iphone-giveaway",
              "account_id": "qing-liu60804",
              "date": "2026-10-26",
              "url": "https://x.com/qing_liu60804/status/2114651646932508799",
              "excerpt": "直接抽 20 台顶配。评论区抽 20 个幸运观众赠送给我。要求关注加评论，72 小时后开奖。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "qing2049",
      "handle": "qing2049",
      "x_user_id": "1425611034375507970",
      "avatar_url": "https://pbs.twimg.com/profile_images/2108036159163301888/JTA0uk5N_200x200.jpg",
      "profile_url": "https://x.com/qing2049",
      "overview": "提交人说明这个账号用虚假抽奖骗点赞和转发。2026-10-29 打开公开主页时，首页能看到的帖里没有抽奖帖。搜索要登录，所以不能说没发过。先按提交人的说明标待核对。这不是法院判决。",
      "former_handles": [],
      "current_handle": null,
      "display_name": "",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-10-29 公开主页还能打开。没有登录，首页往后的帖和搜索结果看不到。",
      "availability_checked_at": "2026-10-29",
      "availability_lock": false,
      "updated": "2026-10-29",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。头像用的是公开头像地址。没有登录，只能核对公开主页上直接看得到的帖。",
      "behaviors": [
        {
          "id": "giveaway-not-visible",
          "categories": [
            "false_info"
          ],
          "title": "提交称有虚假抽奖，首页还没对上帖",
          "summary": "提交人把这个账号列入虚假抽奖骗互动。公开主页首页当时没有看到对应帖。",
          "account_id": "qing2049",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-29-homepage",
              "date": "2026-10-29",
              "url": "https://x.com/qing2049",
              "excerpt": "公开简介写 Crypto、Defi、RWA 和 AI。首页当时能看到的帖不是抽奖。",
              "why_it_matters": "这只说明核对时首页没有抽奖帖，不是证明没有发过。搜索要登录，更早的帖这次没打开。",
              "account_id": "qing2049"
            }
          ]
        }
      ]
    },
    {
      "id": "rasonva26",
      "handle": "RasonVA26",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1036933655627628544",
      "avatar_url": "https://pbs.twimg.com/profile_images/1935641143653335040/xs4-MfSY_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/RasonVA26",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 4951，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "rasonva26",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-20-iphone-giveaway",
              "account_id": "rasonva26",
              "date": "2026-10-20",
              "url": "https://x.com/RasonVA26/status/2112451798594437496",
              "excerpt": "庆祝5000粉丝达标，抽奖啦，iPhone Duo。我会从评论区随机抽一位参加者，让他送我一台 iPhone Duo。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "rkiojejdmnd",
      "handle": "rkiojejdmnd",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "2100863057677500418",
      "avatar_url": "https://pbs.twimg.com/profile_images/2103734359664799744/9x_hKdg__200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/rkiojejdmnd",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 2794，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "rkiojejdmnd",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-28-iphone-giveaway",
              "account_id": "rkiojejdmnd",
              "date": "2026-10-28",
              "url": "https://x.com/rkiojejdmnd/status/2115384665104134177",
              "excerpt": "抽取1位幸运粉丝，送我一台 iPhone Duo。评论区留言：我愿意送你一台 iPhone Duo。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "senyics",
      "handle": "senyiCS",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "957876787479891969",
      "avatar_url": "https://pbs.twimg.com/profile_images/2109761048102539264/wNSgfS7O_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/senyiCS",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 8733，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "senyics",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-28-iphone-giveaway",
              "account_id": "senyics",
              "date": "2026-10-28",
              "url": "https://x.com/senyiCS/status/2115407784150028466",
              "excerpt": "本次抽 15 台 iPhone Duo 2TB。抽 15 个幸运鹅送给我。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "shenshou888",
      "handle": "shenshou888",
      "x_user_id": "1535987541232750592",
      "avatar_url": "https://pbs.twimg.com/profile_images/2102133002734366720/n3Jt0V86_200x200.jpg",
      "profile_url": "https://x.com/shenshou888",
      "overview": "提交人说明这个账号用虚假抽奖骗点赞和转发。2026-10-28 的公开帖写发 10 台 iPhone Duo，参与要关注、一键三连并评论，又写有缘人送给作者。帖子没有证明奖品发了或没发，所以先标待核对。这不是法院判决。",
      "former_handles": [],
      "current_handle": null,
      "display_name": "",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-10-29 公开主页还能打开。没有登录，首页往后的帖和搜索结果看不到。",
      "availability_checked_at": "2026-10-29",
      "availability_lock": false,
      "updated": "2026-10-29",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。头像用的是公开头像地址。没有登录，只能核对公开主页上直接看得到的帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "categories": [
            "false_info"
          ],
          "title": "用抽手机换关注和一键三连",
          "summary": "公开帖宣布抽 10 台 iPhone Duo，要求关注、一键三连和评论，并让 Grok 抽奖。",
          "account_id": "shenshou888",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-28-iphone-giveaway",
              "date": "2026-10-28",
              "url": "https://x.com/shenshou888/status/2115397592913998126",
              "excerpt": "那我也发个10台 iPhone Duo 2TB。参与方式：关注我，一键三连本帖，并在评论区回复。以后我让@grok抽奖，保证公平公正公开。抽 10 个有缘人送给我。",
              "why_it_matters": "这条公开帖用抽手机换关注和一键三连，并写有缘人送给作者。提交人说明这是骗互动。帖子没有证明奖品已经发出。",
              "account_id": "shenshou888"
            }
          ]
        }
      ]
    },
    {
      "id": "sir5201314888",
      "handle": "Sir5201314888",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1563580474592661504",
      "avatar_url": "https://pbs.twimg.com/profile_images/1716271292276674560/fp07T0M5_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/Sir5201314888",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 4298，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "sir5201314888",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-26-iphone-giveaway",
              "account_id": "sir5201314888",
              "date": "2026-10-26",
              "url": "https://x.com/Sir5201314888/status/2114587635050312167",
              "excerpt": "这次抽 10 台 iPhone Duo，抽 10 个粉丝送给我。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "sjsmrk8",
      "handle": "sjsmrk8",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "2070896119727759360",
      "avatar_url": "https://pbs.twimg.com/profile_images/2105465159410192384/vmUHAVvm_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/sjsmrk8",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-10-29 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-10-29",
      "availability_lock": false,
      "overview": "公开搜索找到一条中文抽 iPhone 帖。帖子写了发福利或抽手机，又写把名额或手机送给作者，所以不能把它当成已经发奖。2026-10-29 公开资料粉丝数约 6985，不超过 100 万。这不是法院判决。",
      "updated": "2026-10-29",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "sjsmrk8",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-17-iphone-giveaway",
              "account_id": "sjsmrk8",
              "date": "2026-10-17",
              "url": "https://x.com/sjsmrk8/status/2111328892833390759",
              "excerpt": "正式开售！ 参与方式很简单： 关注我 并转发此帖子 评论区留下祝福 我会让Ai从评论区随机抽一条评论送我一台iPhone Duo! 中奖的朋友可以获得我亲自送上的一句祝福哈哈 #抽奖 #iPhoneDuo",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "smark0428",
      "handle": "smark0428",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1727593804851445760",
      "avatar_url": "https://pbs.twimg.com/profile_images/1910942584081428480/FCkJO0yL_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/smark0428",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 3889，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "smark0428",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-26-iphone-giveaway",
              "account_id": "smark0428",
              "date": "2026-10-26",
              "url": "https://x.com/smark0428/status/2114614327273836605",
              "excerpt": "这次抽 12 台 iPhone Duo，抽 12 个粉丝送给我。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "snipersd88",
      "handle": "Snipersd88",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1557794367288803328",
      "avatar_url": "https://pbs.twimg.com/profile_images/2055189873808769024/37E5QYQ-_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/Snipersd88",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 851，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "snipersd88",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-09-11-iphone-giveaway",
              "account_id": "snipersd88",
              "date": "2026-09-11",
              "url": "https://x.com/Snipersd88/status/2098339844338696512",
              "excerpt": "抽奖，评论区里抽到的人送我一台 iPhone Duo。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "solsniper330",
      "handle": "solsniper330",
      "x_user_id": "1845667529043369984",
      "avatar_url": "https://pbs.twimg.com/profile_images/1920432513777881088/9HHEJY8y_200x200.jpg",
      "profile_url": "https://x.com/solsniper330",
      "overview": "提交人说明这个账号用虚假抽奖骗点赞和转发。2026-10-26 的公开帖写抽 12 台 iPhone Duo，参与要点赞并评论“已关注”，又写抽粉丝送给作者。帖子没有证明奖品发了或没发，所以先标待核对。这不是法院判决。",
      "former_handles": [],
      "current_handle": null,
      "display_name": "",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-10-29 公开主页还能打开。没有登录，首页往后的帖和搜索结果看不到。",
      "availability_checked_at": "2026-10-29",
      "availability_lock": false,
      "updated": "2026-10-29",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。头像用的是公开头像地址。没有登录，只能核对公开主页上直接看得到的帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "categories": [
            "false_info"
          ],
          "title": "用抽手机换点赞和评论",
          "summary": "公开帖宣布抽 12 台 iPhone Duo，要求点赞并评论已关注，同时写抽粉丝送给作者。",
          "account_id": "solsniper330",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-26-iphone-giveaway",
              "date": "2026-10-26",
              "url": "https://x.com/solsniper330/status/2114572286284161037",
              "excerpt": "墨墨 的 iPhone Duo 抽奖活动正式开启。这次抽 12 台 iPhone Duo，抽 12 个粉丝送给我。参与方式：点赞此帖，评论区留下「已关注」。明天凌晨 00:00 公布结果。",
              "why_it_matters": "这条公开帖用抽手机换点赞和评论，并写抽粉丝送给作者。提交人说明这是骗互动。帖子没有证明奖品已经发出。",
              "account_id": "solsniper330"
            }
          ]
        }
      ]
    },
    {
      "id": "starcoreron",
      "handle": "starcoreron",
      "x_user_id": "2091467742129930240",
      "avatar_url": "https://pbs.twimg.com/profile_images/2091468481665351680/RjkSlLoa_200x200.jpg",
      "profile_url": "https://x.com/starcoreron",
      "overview": "提交人说明这个账号用虚假抽奖骗点赞和转发。2026-10-27 的公开帖写抽 3 台 xiaomi Duo，参与要关注、一键三连并评论，并让 Grok 抽奖。帖子没有证明奖品发了或没发，所以先标待核对。这不是法院判决。",
      "former_handles": [],
      "current_handle": null,
      "display_name": "",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-10-29 公开主页还能打开。没有登录，首页往后的帖和搜索结果看不到。",
      "availability_checked_at": "2026-10-29",
      "availability_lock": false,
      "updated": "2026-10-29",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。头像用的是公开头像地址。没有登录，只能核对公开主页上直接看得到的帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "categories": [
            "false_info"
          ],
          "title": "用抽手机换关注和一键三连",
          "summary": "公开帖宣布抽 3 台 xiaomi Duo，要求关注、一键三连和评论，并让 Grok 抽奖。",
          "account_id": "starcoreron",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-27-phone-giveaway",
              "date": "2026-10-27",
              "url": "https://x.com/starcoreron/status/2115068742761689167",
              "excerpt": "本次抽 3 台 xiaomi Duo。人人都有机会。参与方式：关注我，一键三连本帖，留下你的评论区。24h以后我会让@grok 来给我抽奖，保证公平公正公开。",
              "why_it_matters": "这条公开帖用抽手机换关注、点赞、转发和评论。提交人说明这是骗互动。帖子没有证明奖品已经发出。",
              "account_id": "starcoreron"
            }
          ]
        }
      ]
    },
    {
      "id": "swordxyj",
      "handle": "SwordXyj",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "2046606211487805442",
      "avatar_url": "https://pbs.twimg.com/profile_images/2047194097459527680/-AJ1bicI_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/SwordXyj",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 10994，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "swordxyj",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-29-iphone-giveaway",
              "account_id": "swordxyj",
              "date": "2026-10-29",
              "url": "https://x.com/SwordXyj/status/2115739284598906966",
              "excerpt": "评论区抽 1 个幸运观众，明天早 8 点送我 iPhone Duo。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "thad-tereda",
      "handle": "Thad_Tereda",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1445723473997799428",
      "avatar_url": "https://pbs.twimg.com/profile_images/2115469519779155968/J00TtPnA_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/Thad_Tereda",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 1427，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "thad-tereda",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-28-iphone-giveaway",
              "account_id": "thad-tereda",
              "date": "2026-10-28",
              "url": "https://x.com/Thad_Tereda/status/2115426792487915547",
              "excerpt": "本次抽 15 台 iPhone Duo 2TB。抽 15 个幸运儿送给我。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "torontoyuelao",
      "handle": "torontoyuelao",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1972353470091980800",
      "avatar_url": "https://pbs.twimg.com/profile_images/1972354033047212032/mh_hWUd7_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/torontoyuelao",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 7369，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "torontoyuelao",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-29-iphone-giveaway",
              "account_id": "torontoyuelao",
              "date": "2026-10-29",
              "url": "https://x.com/torontoyuelao/status/2115615225869140322",
              "excerpt": "那我也抽 5 台 iPhone Duo。抽 5 个粉丝送给我。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "vc0jt",
      "handle": "vc0jt",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "2055941738964152320",
      "avatar_url": "https://pbs.twimg.com/profile_images/2109190715523956736/0B1V0crW_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/vc0jt",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 1353，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "vc0jt",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-26-iphone-giveaway",
              "account_id": "vc0jt",
              "date": "2026-10-26",
              "url": "https://x.com/vc0jt/status/2114674907015459193",
              "excerpt": "我也来抽 iPhone Duo，转发加关注这条推文抽 10 人，一人给我发十台。抽中必须发。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "vip10089",
      "handle": "VIP10089",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "27204072",
      "avatar_url": "https://pbs.twimg.com/profile_images/2117104366201278464/4xA-UG_z_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/VIP10089",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开帖用中文抽 iPhone 换点赞、评论和转发，同一条又写把手机送给作者，并写抽中后私信收款码。帖子在近 6 个月内。2026-11-03 公开资料粉丝数约 8212，不超过 100 万。没有登录，这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录，也没有保存收款码。只收录近 6 个月内、帖子自己写明不是作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "vip10089",
          "categories": [
            "false_info",
            "scam_funnel"
          ],
          "title": "抽奖帖写明由粉丝送手机，并私信收款",
          "summary": "公开帖用抽 iPhone 换互动。同一条写粉丝把手机送给作者，还写抽中后私信收款码。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-09-13-iphone-giveaway",
              "account_id": "vip10089",
              "date": "2026-09-13",
              "url": "https://x.com/VIP10089/status/2099124619051704509",
              "excerpt": "随机抽 3 个粉丝送我 Iphone Duo。点赞评论转发即可。中奖的我会私信你收款码。",
              "why_it_matters": "这条公开帖不是作者发奖。它写粉丝送手机，并写私下发收款码。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "wanluo01",
      "handle": "wanluo01",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1926312130388627458",
      "avatar_url": "https://pbs.twimg.com/profile_images/2084888400566652928/PidPa9M8_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/wanluo01",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 7715，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "wanluo01",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-29-iphone-giveaway",
              "account_id": "wanluo01",
              "date": "2026-10-29",
              "url": "https://x.com/wanluo01/status/2115831272425873508",
              "excerpt": "本次抽 10 台 iPhone Duo。抽 10 个粉丝送给我，人人都有机会。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "web3-huuc",
      "handle": "Web3_HUUC",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1931373600109740032",
      "avatar_url": "https://pbs.twimg.com/profile_images/2110262634142638080/mmjBBHuy_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/Web3_HUUC",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开搜索找到一条近 6 个月内的中文抽 iPhone 帖。帖子写了抽手机，又写把手机送给作者，所以不能把它当成已经发奖。2026-11-03 公开资料粉丝数约 9622，不超过 100 万。这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录近 6 个月内、帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "web3-huuc",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-27-iphone-giveaway",
              "account_id": "web3-huuc",
              "date": "2026-10-27",
              "url": "https://x.com/Web3_HUUC/status/2114884234901106826",
              "excerpt": "本次选 10 个人，给我买 iPhone Duo 送给我。选 10 个粉丝给我买。",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "web3jiucai111",
      "handle": "web3jiucai111",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1395010837505396739",
      "avatar_url": "https://pbs.twimg.com/profile_images/2078710919321059328/kvl6c83h_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/web3jiucai111",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开帖用中文抽 iPhone 换点赞、评论和转发，同一条又写把手机送给作者，并写抽中后私信收款码。帖子在近 6 个月内。2026-11-03 公开资料粉丝数约 86864，不超过 100 万。没有登录，这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录，也没有保存收款码。只收录近 6 个月内、帖子自己写明不是作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "web3jiucai111",
          "categories": [
            "false_info",
            "scam_funnel"
          ],
          "title": "抽奖帖写明由粉丝送手机，并私信收款",
          "summary": "公开帖用抽 iPhone 换互动。同一条写粉丝把手机送给作者，还写抽中后私信收款码。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-09-13-iphone-giveaway",
              "account_id": "web3jiucai111",
              "date": "2026-09-13",
              "url": "https://x.com/web3jiucai111/status/2099101006374351065",
              "excerpt": "随机抽 10 个粉丝送我 Iphone Duo。点赞评论转发即可。中奖的我会私信你收款码。",
              "why_it_matters": "这条公开帖不是作者发奖。它写粉丝送手机，并写私下发收款码。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "xupaopaogm",
      "handle": "xupaopaogm",
      "x_user_id": "1844296703282925568",
      "avatar_url": "https://pbs.twimg.com/profile_images/2087195072202981376/a5vvH7bW_200x200.jpg",
      "profile_url": "https://x.com/xupaopaogm",
      "overview": "提交人说明这个账号用虚假抽奖骗点赞和转发。2026-10-28 的公开帖写抽 10 台 iPhone Duo，参与要关注、一键三连并评论，又写“抽10个粉丝送给我”。帖子没有证明奖品发了或没发，所以先标待核对。这不是法院判决。",
      "former_handles": [],
      "current_handle": null,
      "display_name": "",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-10-29 公开主页还能打开。没有登录，首页往后的帖和搜索结果看不到。",
      "availability_checked_at": "2026-10-29",
      "availability_lock": false,
      "updated": "2026-10-29",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。头像用的是公开头像地址。没有登录，只能核对公开主页上直接看得到的帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "categories": [
            "false_info"
          ],
          "title": "用抽手机换关注、点赞和转发",
          "summary": "公开帖宣布抽 10 台 iPhone Duo，要求关注、一键三连和评论，并让 Grok 抽奖。同一条帖又写抽粉丝送给作者。",
          "account_id": "xupaopaogm",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-28-iphone-giveaway",
              "date": "2026-10-28",
              "url": "https://x.com/xupaopaogm/status/2115297528472342689",
              "excerpt": "本次抽10台iPhone Duo……参与方式：关注我，一键三连本帖。留下你的评论区。24h以后我会让@grok 来给我抽奖……抽10个粉丝送给我。",
              "why_it_matters": "这条公开帖用抽手机换关注、点赞、转发和评论。它自己写了抽粉丝送给作者。提交人说明这是骗互动。帖子没有证明奖品已经发出。",
              "account_id": "xupaopaogm"
            }
          ]
        }
      ]
    },
    {
      "id": "xuxiaoxiao666",
      "handle": "xuxiaoxiao666",
      "x_user_id": "1580838200012001281",
      "avatar_url": "https://pbs.twimg.com/profile_images/2109466936623222785/gcZFQu-6_200x200.jpg",
      "profile_url": "https://x.com/xuxiaoxiao666",
      "overview": "提交人说明这个账号用虚假抽奖骗点赞和转发。2026-10-29 打开公开主页时，首页能看到的帖里没有抽奖帖。搜索要登录，所以不能说没发过。先按提交人的说明标待核对。这不是法院判决。",
      "former_handles": [],
      "current_handle": null,
      "display_name": "",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-10-29 公开主页还能打开。没有登录，首页往后的帖和搜索结果看不到。",
      "availability_checked_at": "2026-10-29",
      "availability_lock": false,
      "updated": "2026-10-29",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。头像用的是公开头像地址。没有登录，只能核对公开主页上直接看得到的帖。",
      "behaviors": [
        {
          "id": "giveaway-not-visible",
          "categories": [
            "false_info"
          ],
          "title": "提交称有虚假抽奖，首页还没对上帖",
          "summary": "提交人把这个账号列入虚假抽奖骗互动。公开主页首页当时没有看到对应帖。",
          "account_id": "xuxiaoxiao666",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-29-homepage",
              "date": "2026-10-29",
              "url": "https://x.com/xuxiaoxiao666",
              "excerpt": "公开简介写全职做 X，并挑战创作者收益。首页当时能看到的帖不是抽奖。",
              "why_it_matters": "这只说明核对时首页没有抽奖帖，不是证明没有发过。搜索要登录，更早的帖这次没打开。",
              "account_id": "xuxiaoxiao666"
            }
          ]
        }
      ]
    },
    {
      "id": "yhomg1",
      "handle": "yhomg1",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1345623428112343040",
      "avatar_url": "https://pbs.twimg.com/profile_images/1985327752703291392/ewxSdEET_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/yhomg1",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-11-03 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-11-03",
      "availability_lock": false,
      "overview": "公开帖用中文抽 iPhone 换点赞、评论和转发，同一条又写把手机送给作者，并写抽中后私信收款码。帖子在近 6 个月内。2026-11-03 公开资料粉丝数约 7082，不超过 100 万。没有登录，这不是法院判决。",
      "updated": "2026-11-03",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录，也没有保存收款码。只收录近 6 个月内、帖子自己写明不是作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "yhomg1",
          "categories": [
            "false_info",
            "scam_funnel"
          ],
          "title": "抽奖帖写明由粉丝送手机，并私信收款",
          "summary": "公开帖用抽 iPhone 换互动。同一条写粉丝把手机送给作者，还写抽中后私信收款码。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-09-13-iphone-giveaway",
              "account_id": "yhomg1",
              "date": "2026-09-13",
              "url": "https://x.com/yhomg1/status/2099046563897041264",
              "excerpt": "随机抽3个粉丝送我 Iphone Duo。点赞评论转发即可。中奖的我会私信你收款码。",
              "why_it_matters": "这条公开帖不是作者发奖。它写粉丝送手机，并写私下发收款码。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "ywuhen",
      "handle": "Ywuhen",
      "former_handles": [
        "Ywuheng"
      ],
      "current_handle": null,
      "x_user_id": "2028726163196276737",
      "avatar_url": "https://pbs.twimg.com/profile_images/2115412519762440192/kFksk3xW_200x200.jpg",
      "display_name": "",
      "profile_url": "https://x.com/Ywuhen",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-10-29 公开搜索时主页资料还能打开。粉丝数不超过 100 万。",
      "availability_checked_at": "2026-10-29",
      "availability_lock": false,
      "overview": "公开搜索时旧账号名 @Ywuheng 已经打不开，同一编号现在是 @Ywuhen。公开搜索找到一条中文抽 iPhone 帖。帖子写了发福利或抽手机，又写把名额或手机送给作者，所以不能把它当成已经发奖。2026-10-29 公开资料粉丝数约 7962，不超过 100 万。这不是法院判决。",
      "updated": "2026-10-29",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。没有登录。只收录帖子自己写明不是由作者发奖、且粉丝不超过 100 万的公开帖。",
      "behaviors": [
        {
          "id": "fake-giveaway",
          "account_id": "ywuhen",
          "categories": [
            "false_info"
          ],
          "title": "中文抽手机帖写明不是作者发奖",
          "summary": "公开帖用抽 iPhone 换互动，同一条帖又写粉丝或中奖者把手机送给作者。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-28-iphone-giveaway",
              "account_id": "ywuhen",
              "date": "2026-10-28",
              "url": "https://x.com/Ywuhen/status/2115414200394875130",
              "excerpt": "出中奖截图，你才后悔自己没参加！ 5台 iPhone 18 Pro Max，5个幸运名额！抽中的粉丝送给我，说不定送给我iPhone 18 Pro Max就是你！ 📷 🎉🎁",
              "why_it_matters": "这条公开帖说抽 iPhone，又写送给作者。公开搜索没有把它当成已发奖的证明。粉丝数不超过 100 万。"
            }
          ]
        }
      ]
    },
    {
      "id": "zhuanbidao",
      "handle": "zhuanbidao",
      "x_user_id": "1726922481141940224",
      "avatar_url": "https://pbs.twimg.com/profile_images/2102745563670392832/pEf7TEY7_200x200.jpg",
      "profile_url": "https://x.com/zhuanbidao",
      "overview": "提交人把这个账号和虚假抽奖骗互动的账号放在一起。首页没有看到手机抽奖帖。2026-10-24 的置顶公开帖是币安推荐注册福利：关注、用链接注册、完成 KYC 后私信，承诺每人 20USDT。推荐码没有抄进记录。先标待核对。这不是法院判决。",
      "former_handles": [],
      "current_handle": null,
      "display_name": "",
      "status": "needs_review",
      "availability": "active",
      "availability_note": "2026-10-29 公开主页还能打开。没有登录，首页往后的帖和搜索结果看不到。",
      "availability_checked_at": "2026-10-29",
      "availability_lock": false,
      "updated": "2026-10-29",
      "sources_are_public": true,
      "editor_note": "公开显示名没有写入。头像用的是公开头像地址。没有登录，只能核对公开主页上直接看得到的帖。",
      "behaviors": [
        {
          "id": "referral-bounty",
          "categories": [
            "web3_scam",
            "scam_funnel"
          ],
          "title": "用关注和币安注册换承诺的 USDT",
          "summary": "置顶公开帖要求关注并用推荐链接注册币安，KYC 后私信，承诺每人 20USDT，还提到股票信息。",
          "account_id": "zhuanbidao",
          "verification": null,
          "evidence": [
            {
              "id": "2026-10-24-binance-bounty",
              "date": "2026-10-24",
              "url": "https://x.com/zhuanbidao/status/2113992595370332561",
              "excerpt": "宠粉福利来啦。关注我的粉丝朋友。使用我的链接注册币安。KYC 以后的粉丝私信我，每人送 20USDT。",
              "why_it_matters": "这不是手机抽奖帖。它把关注、推荐注册和私信换成承诺的 USDT。推荐链接没有抄进记录。提交人把它和虚假抽奖放在一起，公开帖对不上那一套说法。",
              "account_id": "zhuanbidao"
            }
          ]
        }
      ]
    }
  ]
};
