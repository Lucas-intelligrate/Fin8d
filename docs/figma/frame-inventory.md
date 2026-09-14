# Fin8d Figma Frame 清單

對照 HTML mockup（88 頁）。Figma 建議先建 **核心 Frame + 關鍵負向**，再逐步補齊。

---

## Phase 1 — 財務核心（37）

### AUTH
| Frame | 對照 mockup | 狀態 |
|-------|-------------|------|
| AUTH / 登入 / 正向 | login.html | |
| AUTH / 登入 / 失敗 | login-error.html | 負向 |
| AUTH / 重設密碼 / 正向 | password-reset-request.html | |
| AUTH / 重設密碼 / 失效 | password-reset-error.html | 負向 |
| AUTH / 儀表板 | dashboard.html | |
| AUTH / 權限不足 | access-denied.html | 負向 |
| AUTH / 首次設定 | onboarding.html | |

### MD 主檔
| Frame | 對照 mockup |
|-------|-------------|
| MD / 會計科目表 | chart-of-accounts.html |
| MD / 新增科目 / 正向 | account-form.html |
| MD / 新增科目 / 驗證失敗 | account-form-error.html |
| MD / 幣別匯率 | currencies.html |
| MD / 往來對象 | parties.html |
| MD / 部門 | departments.html |
| MD / 銀行帳戶 | bank-accounts.html |

### GL 傳票
| Frame | 對照 mockup |
|-------|-------------|
| GL / 傳票列表 | vouchers-list.html |
| GL / 傳票登打 / 正向 | voucher-entry.html |
| GL / 傳票詳情 / 草稿 | voucher-detail.html |
| GL / 傳票詳情 / 已核准 | voucher-detail-approved.html |
| GL / 傳票詳情 / 已作廢 | voucher-detail-void.html |
| GL / 送審核准 | voucher-approve.html |
| GL / 核准 / 被阻擋 | voucher-approve-blocked.html |
| GL / 借貸不平衡 | voucher-entry-unbalanced.html |
| GL / 關帳期間 | voucher-entry-closed-period.html |

### RPT 報表
| Frame | 對照 mockup |
|-------|-------------|
| RPT / 試算表 | trial-balance.html |
| RPT / 資產負債表 | balance-sheet.html |
| RPT / 損益表 | income-statement.html |
| RPT / 科目明細帳 | account-ledger.html |
| RPT / 無資料 | report-empty.html |

### SYS 系統
| Frame | 對照 mockup |
|-------|-------------|
| SYS / 設定 | settings.html |
| SYS / 新增使用者 | user-form.html |
| SYS / 月結關帳 | fiscal-close.html |
| SYS / 關帳成功 | fiscal-close-success.html |
| SYS / 稽核日誌 | audit-log.html |
| SYS / 系統錯誤 | error-generic.html |

---

## Phase 2 — 帳款收付（18）

| Frame | 對照 mockup |
|-------|-------------|
| P2-AR / 應收憑單列表 | phase2/ar-invoices-list.html |
| P2-AR / 新增憑單 | phase2/ar-invoice-form.html |
| P2-AR / 憑單詳情 | phase2/ar-invoice-detail.html |
| P2-AR / 收款登錄 | phase2/receipt-form.html |
| P2-AR / 收款沖銷 | phase2/receipt-allocate.html |
| P2-AR / 帳齡分析 | phase2/ar-aging-report.html |
| P2-AR / 超額沖銷 | phase2/ar-overpayment-error.html |
| P2-AP / 應付憑單列表 | phase2/ap-invoices-list.html |
| P2-AP / 新增憑單 | phase2/ap-invoice-form.html |
| P2-AP / 付款登錄 | phase2/payment-form.html |
| P2-AP / 請款單 | phase2/payment-request.html |
| P2-AP / 付款阻擋 | phase2/ap-payment-blocked.html |
| P2-NOTE / 應收票據 | phase2/notes-receivable.html |
| P2-NOTE / 票據兌現 | phase2/notes-cash.html |
| P2-NOTE / 應付票據 | phase2/notes-payable.html |
| P2-BANK / 批次收付 | phase2/bank-batch-payment.html |
| P2-BANK / 匯兌結算 | phase2/forex-settlement.html |

---

## Phase 3 — 業務整合（19）

| Frame | 對照 mockup |
|-------|-------------|
| P3-SAL / 銷售訂單 | phase3/sales-orders.html |
| P3-SAL / 銷貨單 | phase3/sales-delivery.html |
| P3-SAL / 銷退銷折 | phase3/sales-return.html |
| P3-PUR / 採購訂單 | phase3/purchase-orders.html |
| P3-PUR / 進貨單 | phase3/purchase-receipt.html |
| P3-INV / 字軌管理 | phase3/invoice-tracks.html |
| P3-INV / 銷項發票 | phase3/sales-invoice.html |
| P3-INV / 進項發票 | phase3/purchase-invoice.html |
| P3-INV / XML 上傳失敗 | phase3/invoice-upload-error.html |
| P3-END / 期末調匯 | phase3/period-forex-reval.html |
| P3-END / 存貨盤點 | phase3/inventory-count.html |
| P3-END / 銷貨成本 | phase3/cogs-close.html |
| P3 / 整合流程圖 | phase3/integration-flow.html |

---

## Phase 4 — 進階合規（14）

| Frame | 對照 mockup |
|-------|-------------|
| P4-FA / 資產清冊 | phase4/fixed-assets-list.html |
| P4-FA / 折舊作業 | phase4/depreciation-run.html |
| P4-FA / 年度結轉 | phase4/asset-year-end.html |
| P4-BUD / 預算執行 | phase4/budget-list.html |
| P4-BUD / 超支阻擋 | phase4/budget-overrun.html |
| P4-APR / 待辦簽核 | phase4/approval-inbox.html |
| P4-APR / 簽核詳情 | phase4/approval-detail.html |
| P4-APR / 簽核退回 | phase4/approval-rejected.html |
| P4-RPT / 現金流量表 | phase4/cash-flow.html |
| P4-RPT / 財務比例 | phase4/financial-ratios.html |
| P4-RPT / 管理儀表板 | phase4/management-dashboard.html |
