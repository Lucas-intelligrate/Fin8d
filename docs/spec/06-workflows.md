# Fin8d 業務流程

**版本**：1.0

---

## 1. 系統總覽流程

```mermaid
flowchart TB
    subgraph Phase1["Phase 1 — 財務核心"]
        MD[主檔設定] --> GL[傳票登打]
        GL --> APPR[審核]
        APPR --> RPT[報表產出]
        RPT --> CLOSE[月結關帳]
    end

    subgraph Phase2["Phase 2 — 帳款"]
        AR[應收] --> GL
        AP[應付] --> GL
        PAY[收付款] --> GL
    end

    subgraph Phase3["Phase 3 — 業務整合"]
        SALES[銷貨] --> AR
        PURCH[進貨] --> AP
        INV[發票] --> SALES
    end

    Phase3 -.-> Phase2
    Phase2 -.-> Phase1
```

---

## 2. 使用者登入流程

```mermaid
sequenceDiagram
    actor U as 使用者
    participant UI as Web UI
    participant API as API
    participant DB as PostgreSQL

    U->>UI: 輸入 Email / 密碼
    UI->>API: POST /auth/login
    API->>DB: 驗證使用者
    alt 成功
        DB-->>API: user + role
        API-->>UI: JWT + user profile
        UI-->>U: 導向儀表板
    else 失敗
        API-->>UI: 401
        UI-->>U: 顯示錯誤
    end
```

---

## 3. 傳票生命週期

```mermaid
stateDiagram-v2
    [*] --> draft: 新增
    draft --> draft: 編輯
    draft --> pending: 送審
    pending --> draft: 撤回
    pending --> approved: 核准
    pending --> draft: 退回
    approved --> void: 作廢
    draft --> void: 作廢
    void --> [*]
    approved --> [*]
```

### 傳票登打詳細流程

```mermaid
flowchart TD
    A[開始] --> B{選擇傳票類型}
    B --> C[輸入日期與摘要]
    C --> D[新增分錄行]
    D --> E{借貸平衡?}
    E -->|否| F[提示差额]
    F --> D
    E -->|是| G{期間已關帳?}
    G -->|是| H[禁止存檔]
    G -->|否| I[存為草稿]
    I --> J{送審?}
    J -->|是| K[狀態: 待審]
    J -->|否| L[結束]
    K --> M{主管審核}
    M -->|核准| N[狀態: 已核准]
    M -->|退回| I
    N --> L
```

---

## 4. 月結關帳流程

```mermaid
flowchart TD
    A[財務主管進入關帳] --> B[選擇會計期間]
    B --> C{試算表平衡?}
    C -->|否| D[顯示不平衡科目]
    D --> E[修正傳票]
    E --> B
    C -->|是| F{有草稿/待審傳票?}
    F -->|是| G[列出待處理清單]
    G --> E
    F -->|否| H[確認關帳]
    H --> I[期間狀態 → closed]
    I --> J[寫入 audit log]
    J --> K[產出期末報表]
    K --> L[完成]
```

---

## 5. 報表產出流程

```mermaid
flowchart LR
    A[選擇報表類型] --> B[設定期間/截止日]
    B --> C[API 彙總已核准分錄]
    C --> D[依科目類型分類]
    D --> E{報表類型}
    E -->|試算表| F[借貸分列]
    E -->|資負表| G[資產 = 負債 + 權益]
    E -->|損益表| H[收入 - 費用]
    E -->|科目餘額| I[期初+異動=期末]
    F --> J[渲染 UI / 匯出]
    G --> J
    H --> J
    I --> J
```

---

## 6. 主檔初始化流程（新客戶 Onboarding）

```mermaid
flowchart TD
    A[Admin 建立公司] --> B[設定會計年度起始月]
    B --> C[匯入/選用科目範本]
    C --> D[設定本位幣 TWD]
    D --> E[建立會計期間 12 期]
    E --> F[建立使用者與角色]
    F --> G[維護部門/往來/銀行]
    G --> H[可開始登打傳票]
```

---

## 7. Phase 2 預覽 — 應收立帳（參考）

```mermaid
flowchart LR
    INV[開立銷項發票] --> AR[應收憑單]
    AR --> VCH[自動產生傳票]
    RCPT[收款] --> ALLOC[沖銷應收]
    ALLOC --> VCH2[產生收款傳票]
```

Phase 1 不包含，供後續擴展對照。
