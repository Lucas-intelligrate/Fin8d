# Fin8d 規格文件索引

> Phase 1（財務核心 MVP）完整規格、流程、Wireframe 與 Mockup。

## 文件清單

| 文件 | 說明 |
|------|------|
| [01-product-specification.md](./01-product-specification.md) | 產品定位、目標、範圍、非功能需求 |
| [02-functional-requirements.md](./02-functional-requirements.md) | 功能需求明細（FR）與驗收條件 |
| [03-user-roles-and-permissions.md](./03-user-roles-and-permissions.md) | 角色、權限矩陣 |
| [04-data-model.md](./04-data-model.md) | 資料模型、ER 圖、欄位定義 |
| [05-api-specification.md](./05-api-specification.md) | REST API 規格 |
| [06-workflows.md](./06-workflows.md) | 業務流程圖（Mermaid）概覽 |
| [07-wireframes.md](./07-wireframes.md) | Wireframe 說明與頁面對照 |
| **[flows/](./flows/README.md)** | **各模組正向/反向流程（完整）** |

## Mockup 頁面

靜態 HTML 原型（**37 頁**，含各模組正向／負向狀態），瀏覽器開啟 [index.html](../mockup/index.html) 依模組導覽。

| 模組 | 正向範例 | 負向範例 |
|------|----------|----------|
| AUTH | login, dashboard, onboarding | login-error, access-denied, password-reset-error |
| MD | chart-of-accounts, parties, currencies | account-form-error |
| GL | voucher-entry, voucher-approve, voucher-detail | voucher-entry-unbalanced, voucher-approve-blocked |
| RPT | trial-balance, balance-sheet, income-statement | report-empty |
| SYS | settings, fiscal-close-success, audit-log | fiscal-close（檢查失敗）, error-generic |

完整對照表見 [mockup/index.html](../mockup/index.html) 與 [flows/](./flows/README.md)。

## 相關文件

- [財務系統規劃（Phase 路線圖）](../financial-system-planning.md)
