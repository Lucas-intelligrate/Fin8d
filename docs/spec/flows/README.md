# Fin8d 模組流程規格（正向 / 反向）

> 每個功能皆定義 **正向流程（Happy Path）** 與 **反向流程（異常 / 拒絕 / 邊界）**。  
> 流程編號：`FL-{模組}-{序號}`

## 模組索引

| 模組 | 文件 | 流程數 |
|------|------|--------|
| AUTH 認證 | [01-auth.md](./01-auth.md) | 6 |
| MD 主檔 | [02-master-data.md](./02-master-data.md) | 14 |
| GL 總帳/傳票 | [03-voucher-gl.md](./03-voucher-gl.md) | 16 |
| RPT 報表 | [04-reports.md](./04-reports.md) | 8 |
| SYS 系統 | [05-system.md](./05-system.md) | 10 |

## 流程表欄位說明

| 欄位 | 說明 |
|------|------|
| 前置條件 | 執行前必須滿足 |
| 正向步驟 | 成功路徑 |
| 反向情境 | 失敗 / 拒絕 / 邊界與系統回應 |
| 後置狀態 | 成功後資料狀態 |
| Mockup | 對應原型頁面 |

## Mockup 對照

完整原型導覽：[docs/mockup/index.html](../../mockup/index.html)
