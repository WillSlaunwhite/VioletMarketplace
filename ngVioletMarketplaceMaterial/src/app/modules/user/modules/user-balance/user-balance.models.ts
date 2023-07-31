export enum CurrencyType {
  VM_BRONZE = 'vm_bronze',
  VM_SILVER = 'vm_silver',
  VM_GOLD = 'vm_gold',
}

export interface UserCurrencyBalanceKey {
  userId: number;
  currencyType: CurrencyType;
}

export interface UserCurrencyBalance {
  id: UserCurrencyBalanceKey;
  balance: number;
}
