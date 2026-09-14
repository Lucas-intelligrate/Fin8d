# Fin8d Figma Wireframe 指南

> 以 **Figma Wireframe + Prototype** 取代 HTML 高保真 mockup 的視覺定位；  
> 結構與流程對照 `docs/mockup/index.html` 與 `docs/spec/flows/`。

---

## 需要 Figma 帳號嗎？

**需要。** Cursor 的 Figma MCP 必須連到你的 Figma 帳號才能建立／編輯檔案。

| 方案 | 是否可用 | 說明 |
|------|----------|------|
| **Figma Free（Starter）** | ✅ 可以 | 可建立 Design 檔、Prototype、Drafts 資料夾 |
| **Figma Professional / Organization** | ✅ 可以 | 團隊協作、更多檔案與權限 |
| 沒有帳號 | ❌ 不行 | 需至 [figma.com](https://www.figma.com) 免費註冊 |

Free 方案對本專案 wireframe + prototype **足夠**。

---

## Cursor 連接 Figma MCP（必做）

1. 在 Cursor：**Settings → MCP → Figma**
2. 點 **Authenticate / Connect**，瀏覽器登入 Figma 並授權
3. 確認狀態為 **Connected**（不是 `needsAuth`）
4. 回到 Agent，說：「Figma 已認證，請建立 Fin8d wireframe 檔案」

若 Cloud Agent 認證逾時，請在 **本機 Cursor** 完成 MCP 認證後再執行。

---

## 檔案規劃

建議建立 **一個 Design 檔**：

**檔名：** `Fin8d — Wireframes & Prototype`

| Page | 內容 |
|------|------|
| 📋 Cover | 專案說明、版本、連結 spec |
| P1 · 財務核心 | 登入、儀表板、傳票、主檔、報表、關帳 |
| P2 · 帳款收付 | 應收/應付、收付款、票據、銀行 |
| P3 · 業務整合 | 銷售/採購、發票、期末、整合流程 |
| P4 · 進階合規 | 固資、預算、簽核、分析 |
| 🔗 Prototype Map | 各 Phase 主流程一頁總覽（可選） |

詳細 Frame 清單見 [frame-inventory.md](./frame-inventory.md)  
Prototype 連線見 [prototype-flows.md](./prototype-flows.md)

---

## Wireframe 視覺規範（低保真）

- **背景：** `#F8FAFC`
- **Sidebar / 區塊：** 虛線框 `#94A3B8`、填充 `#F1F5F9`
- **文字標籤：** `#64748B`、Inter 12–14px
- **按鈕 placeholder：** 深灰 `#CBD5E1` + 文字 `[ 按鈕名稱 ]`
- **錯誤狀態 Frame：** 名稱後綴 ` / 負向`，加紅色 note
- **不要：** 品牌色、陰影、真實 icon（視覺留給下一階段）

---

## Frame 命名規則

```
{模組} / {畫面} / {狀態}

範例：
AUTH / 登入 / 正向
GL / 傳票登打 / 借貸不平衡
P2-AR / 收款沖銷 / 超額錯誤
```

---

## 與現有文件的對照

| 用途 | 文件 |
|------|------|
| 業務規則（正/反） | `docs/spec/flows/*.md` |
| HTML 可點原型（過渡） | `docs/mockup/` |
| Figma 結構清單 | `docs/figma/frame-inventory.md` |
| Prototype 連線 | `docs/figma/prototype-flows.md` |
| 自動建立腳本 | `docs/figma/scripts/build-phase1-wireframes.js` |

---

## 線上檔案（已建立）

| 項目 | 連結 |
|------|------|
| **Design 檔** | https://www.figma.com/design/dsde3bf7DiYDD49E2DPzI0/Fin8d-%E2%80%94-Wireframes-%26-Prototype |
| **帳號** | lucas.lu@intelligrate.com.tw |
| **Team** | lucas.lu's team (Starter) |

### 已完成的 Phase 1 畫面

- 📋 Cover 說明頁
- AUTH / 登入 / 正向
- AUTH / 儀表板
- GL / 傳票登打 / 正向
- RPT / 試算表
- SYS / 月結關帳

### Prototype 連線（可點擊試流程）

**Starting point：** `AUTH / 登入 / 正向`（P1 頁）

登入 → 儀表板 → 傳票登打 → 試算表 → 關帳

在 Figma 右上角 **Present** 即可試點。

---

## Agent 擴充步驟

1. 依 `frame-inventory.md` 擴充 Phase 2–4 Pages
2. 依 `prototype-flows.md` 補齊連線
3. 執行 `scripts/build-phase1-wireframes.js` 作為 `$fig` 腳本範本

---

## 給 AI 看設計時的最佳做法

1. 分享 Figma 連結並帶 **node-id**：  
   `https://www.figma.com/design/FILE_KEY/...?node-id=123-456`
2. 說明任務：「實作此 Frame」或「檢查與 flows 是否一致」
3. Agent 使用 `get_design_context` 讀取截圖 + 結構

Wireframe 階段請在 Figma **Description** 或 Sticky note 寫業務規則，AI 會讀得更準。
