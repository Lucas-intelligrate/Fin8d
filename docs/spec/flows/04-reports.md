# RPT — 報表模組流程

---

## FL-RPT-01 試算表

| Mockup（正） | [trial-balance.html](../../mockup/trial-balance.html) |
| Mockup（反） | [report-empty.html](../../mockup/report-empty.html) |

### 正向

| 步驟 | 動作 | 結果 |
|------|------|------|
| 1 | 選會計期間 | — |
| 2 | 產生報表 | GET `/reports/trial-balance` |
| 3 | — | 僅統計 approved 分錄 |
| 4 | 可選匯出 Excel | GET `...?format=xlsx` |

### 反向

| 編號 | 情境 | 回應 | UI |
|------|------|------|-----|
| N1 | 期間無資料 | 200 空 | 「此期間無交易」 |
| N2 | 借貸不平衡 | 200 + warning flag | 頂部警告「試算表不平衡，請檢查傳票」 |
| N3 | 未選期間 | 400 | 欄位提示 |
| N4 | viewer 以外皆可 | — | — |
| N5 | 匯出逾時 | 504 | 「資料量過大，請縮小期間」 |

---

## FL-RPT-02 資產負債表

| Mockup | [balance-sheet.html](../../mockup/balance-sheet.html) |

### 正向

截止日 `as_of_date`；資產 = 負債 + 權益。

### 反向

| N1 | 不平衡 | warning + 差額列 |
| N2 | 日期早于開帳日 | 422 |

---

## FL-RPT-03 損益表

| Mockup | [income-statement.html](../../mockup/income-statement.html) |

### 正向

期間收入 - 費用 = 本期損益。

### 反向

| N1 | 僅費無收 | 正常顯示負損益 |
| N2 | 跨已關帳+開放期間 | 允許，僅含 approved |

---

## FL-RPT-04 科目餘額明細帳

| Mockup | [account-ledger.html](../../mockup/account-ledger.html) |

### 正向

選明細科目 + 期間 → 逐筆分錄 + 累計餘額。

### 反向

| N1 | 選統制科目 | 422「請選擇明細科目」 |
| N2 | 科目不存在 | 404 |

---

## FL-RPT-05 報表列印 / PDF（Phase 1 選配）

### 反向

| N1 | 瀏覽器阻擋彈窗 | 提示允許彈窗 |

---

## FL-RPT-06 報表權限

### 反向

| N1 | 未登入 | 401 |
| N2 | 無 report:read（Phase 1 viewer 有） | 403 |

---

## FL-RPT-07 關帳後報表鎖定

### 正向

已關帳期間報表可重複產生，數字不變。

### 反向

| N1 | 反關帳後重跑 | 數字可能變動，UI 提示「期間已重新開放」 |

---

## FL-RPT-08 比較期間（Phase 1 選配）

| Mockup | 報表頁並列欄 |

### 反向

| N1 | 比較期間一未關帳 | 警告「含未結帳資料」 |
