# Fin8d API 規格（Phase 1）

**Base URL**：`https://fin8d.intelligrate.com.tw/api/v1`  
**格式**：JSON  
**認證**：Bearer JWT（`Authorization: Bearer <token>`）

---

## 1. 通用約定

### 回應格式

```json
{
  "data": { },
  "meta": { "page": 1, "per_page": 20, "total": 100 }
}
```

### 錯誤格式

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "借貸不平衡",
    "details": [{ "field": "lines", "message": "借方 1000 ≠ 貸方 900" }]
  }
}
```

### HTTP 狀態碼

| 碼 | 用途 |
|----|------|
| 200 | 成功 |
| 201 | 建立成功 |
| 400 | 驗證錯誤 |
| 401 | 未登入 |
| 403 | 無權限 |
| 404 | 不存在 |
| 409 | 衝突（關帳期間、重複編號） |
| 422 | 業務規則違反 |

---

## 2. Auth

### POST /auth/login

```json
// Request
{ "email": "user@example.com", "password": "secret" }

// Response 200
{
  "data": {
    "token": "eyJ...",
    "user": { "id": "uuid", "email": "...", "display_name": "...", "role": "accountant" }
  }
}
```

### POST /auth/logout

需認證。清除 server-side session（若使用）。

### GET /auth/me

回傳當前使用者。

---

## 3. 主檔 — 會計科目

### GET /accounts

Query: `type`, `is_active`, `search`, `parent_id`

### GET /accounts/:id

### POST /accounts

```json
{
  "parent_id": "uuid-or-null",
  "code": "1101",
  "name": "現金",
  "account_type": "asset",
  "is_control": false,
  "is_postable": true
}
```

### PATCH /accounts/:id

### DELETE /accounts/:id

軟刪除（`is_active=false`），有分錄者不可刪。

---

## 4. 主檔 — 其他

| 資源 | 路徑 |
|------|------|
| 幣別 | `/currencies` |
| 匯率 | `/exchange-rates?date=&currency_id=` |
| 部門 | `/departments` |
| 往來對象 | `/parties?type=customer\|vendor` |
| 銀行帳戶 | `/bank-accounts` |
| 傳票類別 | `/voucher-types` |

CRUD 模式同 accounts。

---

## 5. 傳票

### GET /vouchers

Query:

| 參數 | 說明 |
|------|------|
| date_from, date_to | 日期區間 |
| status | draft / pending / approved / void |
| voucher_no | 編號 |
| account_id | 含此科目分錄 |
| q | 摘要搜尋 |
| page, per_page | 分頁 |

### GET /vouchers/:id

含 `lines[]` 完整分錄。

### POST /vouchers

```json
{
  "voucher_type_id": "uuid",
  "voucher_date": "2026-09-13",
  "description": "9月辦公用品",
  "lines": [
    {
      "account_id": "uuid",
      "debit": 1000,
      "credit": 0,
      "description": "文具用品",
      "department_id": null
    },
    {
      "account_id": "uuid",
      "debit": 0,
      "credit": 1000,
      "description": "現金付訖"
    }
  ]
}
```

**驗證**：
- `sum(debit) === sum(credit)`
- 科目須 `is_postable=true`
- 日期須在開放會計期間

### PATCH /vouchers/:id

僅 `draft` 可修改。

### POST /vouchers/:id/submit

草稿 → 待審。

### POST /vouchers/:id/approve

待審 → 核准。需 `finance_manager` 或 `admin`。

### POST /vouchers/:id/reject

```json
{ "reason": "摘要不完整" }
```

### POST /vouchers/:id/void

### POST /vouchers/:id/copy

複製為新草稿，回傳新 voucher。

---

## 6. 報表

### GET /reports/trial-balance

Query: `period_id` 或 `date_from` + `date_to`

```json
{
  "data": {
    "period": { "year": 2026, "period": 9 },
    "lines": [
      {
        "account_code": "1101",
        "account_name": "現金",
        "opening_debit": 0,
        "opening_credit": 0,
        "period_debit": 5000,
        "period_credit": 3000,
        "closing_debit": 2000,
        "closing_credit": 0
      }
    ],
    "totals": { "debit": 100000, "credit": 100000 }
  }
}
```

### GET /reports/balance-sheet

Query: `as_of_date`

### GET /reports/income-statement

Query: `date_from`, `date_to`

### GET /reports/account-ledger

Query: `account_id`, `date_from`, `date_to`

### GET /reports/:type/export

Query: `format=xlsx` — 回傳檔案 stream。

---

## 7. 系統

### GET /fiscal-periods

### POST /fiscal-periods/:id/close

關帳。Body 可含 `{ "confirm": true }`。

**關帳前檢查**：
- 試算表平衡
- 無 draft / pending 傳票

### POST /fiscal-periods/:id/reopen

反關帳。需 admin / finance_manager。

### GET /users / POST /users / PATCH /users/:id

### GET /company / PATCH /company

### GET /audit-logs

Query: `entity_type`, `entity_id`, `date_from`, `date_to`

---

## 8. Webhook（Phase 2 預留）

```
POST /webhooks/voucher.approved
POST /webhooks/period.closed
```

Phase 1 不實作，API 設計預留 event 命名。
