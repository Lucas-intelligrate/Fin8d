/**
 * Fin8d Phase 1 Wireframe builder — run via Figma MCP `use_figma`
 * skillNames: "figma-use"
 *
 * Creates: Cover page + P1 page with core wireframe frames (1440×900)
 * Style: low-fi gray dashed boxes
 */

const GRAY_BG = hex('#F8FAFC');
const GRAY_FILL = hex('#F1F5F9');
const GRAY_BORDER = hex('#94A3B8');
const GRAY_TEXT = hex('#64748B');
const SIDEBAR_W = 200;
const FRAME_W = 1440;
const FRAME_H = 900;

function wfBox(label, opts = {}) {
  return $fig.autoLayout(
    {
      name: label,
      layoutMode: 'VERTICAL',
      primaryAxisAlignItems: 'CENTER',
      counterAxisAlignItems: 'CENTER',
      width: opts.width || 'FILL',
      height: opts.height,
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 12,
      paddingRight: 12,
      fills: [{ type: 'SOLID', color: GRAY_FILL }],
      strokes: [{ type: 'SOLID', color: GRAY_BORDER }],
      strokeWeight: 1,
      dashPattern: [4, 4],
      cornerRadius: 4,
      layoutSizingHorizontal: opts.layoutSizingHorizontal || 'FILL',
    },
    [
      $fig.text({
        characters: label,
        fontSize: 11,
        fontName: { family: 'Inter', style: 'Regular' },
        fills: [{ type: 'SOLID', color: GRAY_TEXT }],
      }),
    ],
  );
}

function wfButton(label) {
  return $fig.autoLayout(
    {
      name: `[ ${label} ]`,
      layoutMode: 'HORIZONTAL',
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 16,
      paddingRight: 16,
      fills: [{ type: 'SOLID', color: hex('#CBD5E1') }],
      cornerRadius: 4,
    },
    [
      $fig.text({
        characters: label,
        fontSize: 12,
        fontName: { family: 'Inter', style: 'Medium' },
        fills: [{ type: 'SOLID', color: hex('#475569') }],
      }),
    ],
  );
}

function appShell(name, breadcrumb, contentChildren) {
  return $fig.autoLayout(
    {
      name,
      layoutMode: 'NONE',
      width: FRAME_W,
      height: FRAME_H,
      fills: [{ type: 'SOLID', color: GRAY_BG }],
      clipsContent: true,
    },
    [
      // Sidebar
      $fig.autoLayout(
        {
          name: 'Sidebar',
          x: 0,
          y: 0,
          width: SIDEBAR_W,
          height: FRAME_H,
          layoutMode: 'VERTICAL',
          paddingTop: 16,
          paddingLeft: 12,
          paddingRight: 12,
          itemSpacing: 4,
          fills: [{ type: 'SOLID', color: hex('#E2E8F0') }],
        },
        ['儀表板', '傳票列表', '新增傳票', '會計科目', '試算表', '關帳', '設定'].map((item) =>
          wfBox(item, { layoutSizingHorizontal: 'FILL', height: 32 }),
        ),
      ),
      // Topbar
      $fig.autoLayout(
        {
          name: 'Topbar',
          x: SIDEBAR_W,
          y: 0,
          width: FRAME_W - SIDEBAR_W,
          height: 48,
          layoutMode: 'HORIZONTAL',
          paddingLeft: 16,
          paddingRight: 16,
          counterAxisAlignItems: 'CENTER',
          fills: [{ type: 'SOLID', color: hex('#FFFFFF') }],
          strokes: [{ type: 'SOLID', color: hex('#E2E8F0') }],
          strokeWeight: 1,
        },
        [
          $fig.text({
            characters: breadcrumb,
            fontSize: 13,
            fontName: { family: 'Inter', style: 'Regular' },
            fills: [{ type: 'SOLID', color: GRAY_TEXT }],
          }),
        ],
      ),
      // Content
      $fig.autoLayout(
        {
          name: 'Content',
          x: SIDEBAR_W,
          y: 48,
          width: FRAME_W - SIDEBAR_W,
          height: FRAME_H - 48,
          layoutMode: 'VERTICAL',
          paddingTop: 24,
          paddingLeft: 24,
          paddingRight: 24,
          itemSpacing: 16,
        },
        contentChildren,
      ),
    ],
  );
}

// --- Cover page ---
const coverPage = figma.root.children.find((p) => p.name.includes('Cover')) || figma.currentPage;
figma.currentPage = coverPage;
$fig.autoLayout(
  { name: 'Cover / Fin8d Wireframes', layoutMode: 'VERTICAL', x: 0, y: 0, width: 600, itemSpacing: 12, paddingTop: 40, paddingLeft: 40 },
  [
    $fig.text({ characters: 'Fin8d', fontSize: 32, fontName: { family: 'Inter', style: 'Bold' } }),
    $fig.text({ characters: 'Wireframes & Prototype · Phase 1–4', fontSize: 16, fontName: { family: 'Inter', style: 'Regular' }, fills: [{ type: 'SOLID', color: GRAY_TEXT }] }),
    $fig.text({ characters: 'Spec: docs/spec/flows/ · HTML ref: docs/mockup/', fontSize: 12, fontName: { family: 'Inter', style: 'Regular' }, fills: [{ type: 'SOLID', color: GRAY_TEXT }] }),
  ],
);

// --- P1 page ---
let p1Page = figma.root.children.find((p) => p.name.startsWith('P1'));
if (!p1Page) {
  p1Page = figma.createPage();
  p1Page.name = 'P1 · 財務核心';
}
figma.currentPage = p1Page;

const screens = [
  {
    name: 'AUTH / 登入 / 正向',
    builder: () =>
      $fig.autoLayout(
        { name: 'AUTH / 登入 / 正向', layoutMode: 'NONE', width: FRAME_W, height: FRAME_H, fills: [{ type: 'SOLID', color: hex('#E2E8F0') }] },
        [
          $fig.autoLayout(
            { name: 'Login Card', x: 520, y: 280, width: 400, layoutMode: 'VERTICAL', itemSpacing: 12, paddingTop: 32, paddingLeft: 32, paddingRight: 32, paddingBottom: 32, fills: [{ type: 'SOLID', color: hex('#FFFFFF') }], cornerRadius: 8 },
            [
              $fig.text({ characters: 'Fin8d', fontSize: 24, fontName: { family: 'Inter', style: 'Bold' } }),
              wfBox('Email 輸入框', { height: 40 }),
              wfBox('密碼輸入框', { height: 40 }),
              wfButton('登入'),
              $fig.text({ characters: '忘記密碼？', fontSize: 11, fontName: { family: 'Inter', style: 'Regular' }, fills: [{ type: 'SOLID', color: GRAY_TEXT }] }),
            ],
          ),
        ],
      ),
  },
  {
    name: 'AUTH / 儀表板',
    builder: () =>
      appShell('AUTH / 儀表板', '總覽 / 儀表板', [
        $fig.autoLayout({ name: 'KPI Row', layoutMode: 'HORIZONTAL', itemSpacing: 12, layoutSizingHorizontal: 'FILL' }, [
          wfBox('KPI: 待審傳票', { width: 200 }),
          wfBox('KPI: 本月分錄', { width: 200 }),
          wfBox('KPI: 本期損益', { width: 200 }),
          wfBox('KPI: 關帳狀態', { width: 200 }),
        ]),
        wfBox('最近傳票表格', { height: 200 }),
        wfBox('待辦事項', { height: 120 }),
      ]),
  },
  {
    name: 'GL / 傳票登打 / 正向',
    builder: () =>
      appShell('GL / 傳票登打 / 正向', '總帳 / 新增傳票', [
        $fig.autoLayout({ name: 'Form Row', layoutMode: 'HORIZONTAL', itemSpacing: 12 }, [
          wfBox('日期', { width: 140 }),
          wfBox('類型', { width: 120 }),
          wfBox('摘要', { width: 400 }),
        ]),
        wfBox('分錄表格（科目/借方/貸方）', { height: 240 }),
        $fig.autoLayout({ name: 'Actions', layoutMode: 'HORIZONTAL', itemSpacing: 8 }, [
          wfButton('存草稿'),
          wfButton('送審'),
        ]),
      ]),
  },
  {
    name: 'GL / 借貸不平衡',
    builder: () =>
      appShell('GL / 借貸不平衡', '總帳 / 新增傳票', [
        wfBox('⚠ 錯誤：借貸不平衡，差额 1,200', { height: 48 }),
        wfBox('分錄表格', { height: 240 }),
        wfButton('送審（disabled）'),
      ]),
  },
  {
    name: 'RPT / 試算表',
    builder: () =>
      appShell('RPT / 試算表', '報表 / 試算表', [
        $fig.autoLayout({ name: 'Toolbar', layoutMode: 'HORIZONTAL', itemSpacing: 8 }, [
          wfBox('期間選擇', { width: 160 }),
          wfButton('產生報表'),
          wfButton('匯出'),
        ]),
        wfBox('試算表（科目/借方/貸方）', { height: 400 }),
      ]),
  },
  {
    name: 'SYS / 月結關帳',
    builder: () =>
      appShell('SYS / 月結關帳', '系統 / 關帳', [
        wfBox('期間列表', { height: 200 }),
        wfBox('關帳前檢查：試算表平衡 / 無草稿 / 無待審', { height: 120 }),
        wfButton('執行關帳'),
      ]),
  },
];

let x = 0;
const GAP = 80;
screens.forEach((s) => {
  const frame = s.builder();
  frame.x = x;
  frame.y = 0;
  x += FRAME_W + GAP;
});

// Return summary for agent
({
  page: p1Page.name,
  framesCreated: screens.map((s) => s.name),
  nextStep: 'Set Prototype links per docs/figma/prototype-flows.md',
});
