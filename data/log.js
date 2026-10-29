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
