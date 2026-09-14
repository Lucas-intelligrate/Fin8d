/**
 * Fin8d Mockup 全域導覽 — 使用 /mockup/ 絕對路徑，避免子目錄相對路徑錯亂
 */
(function () {
  if (!location.pathname.includes('/mockup')) return;

  const M = '/mockup';

  const phases = {
    p1: { label: 'Phase 1 財務核心', home: `${M}/dashboard.html` },
    p2: { label: 'Phase 2 帳款收付', home: `${M}/phase2/ar-invoices-list.html` },
    p3: { label: 'Phase 3 業務整合', home: `${M}/phase3/sales-orders.html` },
    p4: { label: 'Phase 4 進階合規', home: `${M}/phase4/fixed-assets-list.html` },
  };

  function detectPhase() {
    const p = location.pathname;
    if (p.includes('/phase2/')) return 'p2';
    if (p.includes('/phase3/')) return 'p3';
    if (p.includes('/phase4/')) return 'p4';
    return 'p1';
  }

  const current = detectPhase();

  const navItems = {
    p1: [
      { section: '總覽', links: [
        { href: `${M}/dashboard.html`, label: '儀表板' },
      ]},
      { section: '總帳', links: [
        { href: `${M}/vouchers-list.html`, label: '傳票列表' },
        { href: `${M}/voucher-entry.html`, label: '新增傳票' },
      ]},
      { section: '主檔', links: [
        { href: `${M}/chart-of-accounts.html`, label: '會計科目' },
        { href: `${M}/parties.html`, label: '往來對象' },
        { href: `${M}/currencies.html`, label: '幣別匯率' },
        { href: `${M}/bank-accounts.html`, label: '銀行帳戶' },
      ]},
      { section: '報表', links: [
        { href: `${M}/trial-balance.html`, label: '試算表' },
        { href: `${M}/balance-sheet.html`, label: '資產負債表' },
        { href: `${M}/income-statement.html`, label: '損益表' },
      ]},
      { section: '系統', links: [
        { href: `${M}/settings.html`, label: '設定' },
        { href: `${M}/fiscal-close.html`, label: '關帳' },
      ]},
    ],
    p2: [
      { section: '應收', links: [
        { href: `${M}/phase2/ar-invoices-list.html`, label: '應收憑單' },
        { href: `${M}/phase2/receipt-form.html`, label: '收款登錄' },
        { href: `${M}/phase2/ar-aging-report.html`, label: '帳齡分析' },
      ]},
      { section: '應付', links: [
        { href: `${M}/phase2/ap-invoices-list.html`, label: '應付憑單' },
        { href: `${M}/phase2/payment-form.html`, label: '付款登錄' },
        { href: `${M}/phase2/payment-request.html`, label: '請款單' },
      ]},
      { section: '票據/銀行', links: [
        { href: `${M}/phase2/notes-receivable.html`, label: '應收票據' },
        { href: `${M}/phase2/notes-payable.html`, label: '應付票據' },
        { href: `${M}/phase2/bank-batch-payment.html`, label: '批次收付' },
        { href: `${M}/phase2/forex-settlement.html`, label: '匯兌結算' },
      ]},
      { section: 'Phase 1', links: [
        { href: `${M}/vouchers-list.html`, label: '傳票列表' },
        { href: `${M}/dashboard.html`, label: '儀表板' },
      ]},
    ],
    p3: [
      { section: '銷售', links: [
        { href: `${M}/phase3/sales-orders.html`, label: '銷售訂單' },
        { href: `${M}/phase3/sales-delivery.html`, label: '銷貨單' },
        { href: `${M}/phase3/sales-return.html`, label: '銷退/銷折' },
      ]},
      { section: '採購', links: [
        { href: `${M}/phase3/purchase-orders.html`, label: '採購訂單' },
        { href: `${M}/phase3/purchase-receipt.html`, label: '進貨單' },
        { href: `${M}/phase3/purchase-return.html`, label: '進退/進折' },
      ]},
      { section: '發票', links: [
        { href: `${M}/phase3/invoice-tracks.html`, label: '字軌管理' },
        { href: `${M}/phase3/sales-invoice.html`, label: '銷項發票' },
        { href: `${M}/phase3/purchase-invoice.html`, label: '進項發票' },
      ]},
      { section: '期末', links: [
        { href: `${M}/phase3/integration-flow.html`, label: '整合流程圖' },
        { href: `${M}/phase3/period-forex-reval.html`, label: '期末調匯' },
        { href: `${M}/phase3/cogs-close.html`, label: '銷貨成本' },
      ]},
      { section: '帳款', links: [
        { href: `${M}/phase2/ar-invoices-list.html`, label: '應收憑單' },
        { href: `${M}/phase2/ap-invoices-list.html`, label: '應付憑單' },
      ]},
    ],
    p4: [
      { section: '固資', links: [
        { href: `${M}/phase4/fixed-assets-list.html`, label: '資產清冊' },
        { href: `${M}/phase4/depreciation-run.html`, label: '折舊作業' },
        { href: `${M}/phase4/asset-disposal.html`, label: '報廢處分' },
      ]},
      { section: '預算/簽核', links: [
        { href: `${M}/phase4/budget-list.html`, label: '預算執行' },
        { href: `${M}/phase4/approval-inbox.html`, label: '待辦簽核' },
      ]},
      { section: '分析', links: [
        { href: `${M}/phase4/management-dashboard.html`, label: '管理儀表板' },
        { href: `${M}/phase4/cash-flow.html`, label: '現金流量表' },
        { href: `${M}/phase4/financial-ratios.html`, label: '財務比例' },
      ]},
    ],
  };

  // 頂部導覽列
  const bar = document.createElement('div');
  bar.className = 'mockup-global-bar';
  bar.innerHTML = `
    <a class="mockup-bar-brand" href="${M}/">Fin8d Mockup</a>
    <nav class="mockup-bar-phases">
      ${Object.entries(phases).map(([k, v]) =>
        `<a href="${v.home}" class="mockup-bar-phase${k === current ? ' active' : ''}">${v.label}</a>`
      ).join('')}
    </nav>
    <a class="mockup-bar-index" href="${M}/">索引</a>
  `;
  document.body.prepend(bar);

  // 側邊欄注入（有 .sidebar nav 的頁面）
  const sidebarNav = document.querySelector('.sidebar nav, .sidebar-nav, aside.sidebar nav');
  if (sidebarNav && !document.querySelector('.sidebar[data-nav-injected]')) {
    const items = navItems[current] || navItems.p1;
    sidebarNav.innerHTML = items.map(section => `
      <div class="nav-section">${section.section}</div>
      ${section.links.map(l => {
        const active = location.pathname === l.href || location.pathname.endsWith(l.href.replace(M, ''));
        return `<a class="nav-link${active ? ' active' : ''}" href="${l.href}">${l.label}</a>`;
      }).join('')}
    `).join('');
    sidebarNav.closest('.sidebar')?.setAttribute('data-nav-injected', '1');
  }

  // 修正頁內相對連結 → 絕對 /mockup/ 路徑
  function resolveMockupHref(href) {
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:')) return href;
    if (href.startsWith('/mockup/')) return href;
    if (href.startsWith('/')) return href;
    if (!href.endsWith('.html')) return href;

    const path = location.pathname;
    let base = `${M}/`;
    if (path.includes('/phase2/')) base = `${M}/phase2/`;
    else if (path.includes('/phase3/')) base = `${M}/phase3/`;
    else if (path.includes('/phase4/')) base = `${M}/phase4/`;

    if (href.startsWith('../')) {
      const stripped = href.replace(/^(\.\.\/)+/, '');
      return `${M}/${stripped}`;
    }
    if (href.startsWith('phase2/') || href.startsWith('phase3/') || href.startsWith('phase4/')) {
      return `${M}/${href}`;
    }
    if (!href.includes('/')) {
      // same-directory file
      if (path.includes('/phase2/')) return `${M}/phase2/${href}`;
      if (path.includes('/phase3/')) return `${M}/phase3/${href}`;
      if (path.includes('/phase4/')) return `${M}/phase4/${href}`;
      return `${M}/${href}`;
    }
    return href;
  }

  document.querySelectorAll('a[href]').forEach(a => {
    const resolved = resolveMockupHref(a.getAttribute('href'));
    if (resolved !== a.getAttribute('href')) a.setAttribute('href', resolved);
  });

  // 側邊欄品牌連到索引
  document.querySelectorAll('.sidebar-brand').forEach(el => {
    if (!el.querySelector('a')) {
      el.innerHTML = `<a href="${M}/" style="color:inherit;text-decoration:none">${el.innerHTML}</a>`;
    }
  });
})();
