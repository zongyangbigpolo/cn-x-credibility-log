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
      "id": "demo-beta",
      "handle": "demo_beta",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": null,
      "avatar_url": "assets/avatars/demo-beta.svg",
      "display_name": "示例账号乙",
      "profile_url": "https://example.invalid/demo_beta",
      "status": "example",
      "availability": "deactivated",
      "availability_note": "虚构示例：用来展示「已停用」标记，不是真实核对结果。",
      "availability_checked_at": null,
      "availability_lock": true,
      "overview": "虚构示例。这个账号公开冒充机构员工，并用公开帖把人往定金上引。",
      "updated": "2026-09-02",
      "sources_are_public": true,
      "editor_note": "这是虚构示例，用来展示版式，不是真实账号。",
      "behaviors": [
        {
          "id": "identity",
          "account_id": "demo-beta",
          "categories": [
            "identity_fraud"
          ],
          "title": "公开冒充机构员工",
          "summary": "公开帖自称某机构在职员工，但没有公开材料对得上。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-08-01-claimed-staff",
              "account_id": "demo-beta",
              "date": "2026-08-01",
              "url": "https://example.invalid/demo-beta/status/1",
              "excerpt": "「我是某机构在职员工，私信我领内部名额。」",
              "why_it_matters": "公开身份说法出现在这条公开帖里。"
            }
          ]
        },
        {
          "id": "scam",
          "account_id": "demo-beta",
          "categories": [
            "scam_funnel"
          ],
          "title": "用公开帖催人交定金",
          "summary": "公开帖把人往“内部名额”和定金上引。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-08-20-deposit",
              "account_id": "demo-beta",
              "date": "2026-08-20",
              "url": "https://example.invalid/demo-beta/status/2",
              "excerpt": "「名额今天截止，先转定金。」",
              "why_it_matters": "公开帖继续催人去私下交易。"
            }
          ]
        }
      ]
    },
    {
      "id": "demo-gamma",
      "handle": "demo_gamma",
      "former_handles": [
        "demo_gamma"
      ],
      "current_handle": "demo_gamma_new",
      "x_user_id": null,
      "avatar_url": "assets/avatars/demo-gamma.svg",
      "display_name": "示例账号丙",
      "profile_url": "https://example.invalid/demo_gamma_new",
      "status": "example",
      "availability": "renamed",
      "availability_note": "虚构示例：用来展示「已改名」标记，不是真实核对结果。",
      "availability_checked_at": null,
      "availability_lock": true,
      "overview": "虚构示例。这个账号把别人的公开长文说成自己写的，并发过一条后来被公开材料否定的谣言。",
      "updated": "2026-07-30",
      "sources_are_public": true,
      "editor_note": "这是虚构示例，用来展示版式，不是真实账号。",
      "behaviors": [
        {
          "id": "plagiarism",
          "account_id": "demo-gamma",
          "categories": [
            "plagiarism"
          ],
          "title": "把别人的公开长文说成自己写的",
          "summary": "原文早就公开，后来整段被说成原创。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-05-12-original",
              "account_id": "demo-gamma",
              "date": "2026-05-12",
              "url": "https://example.invalid/demo-other/status/3",
              "excerpt": "别人早已公开的长文原段。",
              "why_it_matters": "用来对照，说明原文早就在。"
            },
            {
              "id": "2026-07-01-copied",
              "account_id": "demo-gamma",
              "date": "2026-07-01",
              "url": "https://example.invalid/demo-gamma/status/4",
              "excerpt": "「下面是我自己写的。」后面是同一段文字。",
              "why_it_matters": "公开宣称是原创，但和上面的公开长文相同。"
            }
          ]
        },
        {
          "id": "rumor",
          "account_id": "demo-gamma",
          "categories": [
            "verified_rumor"
          ],
          "title": "公开造谣，随后被公开材料否定",
          "summary": "公开声称某人已经跑路。这是虚构示例，真实记录必须换上真的公开链接。",
          "verification": {
            "url": "https://example.invalid/demo-source/status/9",
            "note": "虚构的公开澄清帖，写明这个说法不成立。真实记录里这里必须换成真的公开链接。"
          },
          "evidence": [
            {
              "id": "2026-07-21-rumor",
              "account_id": "demo-gamma",
              "date": "2026-07-21",
              "url": "https://example.invalid/demo-gamma/status/5",
              "excerpt": "「某人已经跑路。」",
              "why_it_matters": "这是被稍后公开材料否定的说法。真实记录不能只靠转述。"
            }
          ]
        }
      ]
    },
    {
      "id": "demo-alpha",
      "handle": "LeePolo7",
      "former_handles": [],
      "current_handle": null,
      "x_user_id": "1498142087224922115",
      "avatar_url": "assets/avatars/lee-polo7.jpg",
      "display_name": "Polo",
      "profile_url": "https://x.com/LeePolo7",
      "status": "example",
      "availability": "example",
      "availability_note": "应本人要求，用这个公开账号做版式示范，不参与定期核对，也不是不诚信记录。",
      "availability_checked_at": null,
      "availability_lock": true,
      "overview": "版式示范。这里用 @LeePolo7 的公开头像和账号名，展示搜到账号后会看到的总览。下面的行为是占位，不是对这个账号的记录。",
      "updated": "2026-10-12",
      "sources_are_public": true,
      "editor_note": "应本人要求做版式示范。占位文字不是原帖，也不是指控。",
      "behaviors": [
        {
          "id": "contradiction",
          "account_id": "demo-alpha",
          "categories": [
            "false_info",
            "contradiction"
          ],
          "title": "版式：一项不诚信行为会显示在这里",
          "summary": "正式记录才会写具体行为。这里只占位置。",
          "verification": null,
          "evidence": [
            {
              "id": "2026-03-01-denial",
              "account_id": "demo-alpha",
              "date": "2026-03-01",
              "url": "https://example.invalid/demo-alpha/status/1",
              "excerpt": "这里会摘公开原话。示范不摘 @LeePolo7 的帖。",
              "why_it_matters": "这里会说明这条帖为什么被收进来。"
            },
            {
              "id": "2026-06-18-admission",
              "account_id": "demo-alpha",
              "date": "2026-06-18",
              "url": "https://example.invalid/demo-alpha/status/2",
              "excerpt": "第二条证据也显示在时间线里。这句同样是占位。",
              "why_it_matters": "正式记录才会对照前后说法。"
            }
          ]
        }
      ]
    }
  ]
};
