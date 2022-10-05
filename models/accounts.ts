export class EAccountType extends EnumMember {
    static readonly CHECKING = new EnumMember(0, 'Checking');
    static readonly SAVINGS = new EnumMember(1, 'Savings');
    static readonly INVESTMENT = new EnumMember(2, 'Investment');
}

export class EInterval extends EnumMember {
    static readonly ONCE = new EnumMember(0, 'Daily');
    static readonly DAILY = new EnumMember(1, 'Daily');
    static readonly WEEKLY = new EnumMember(10, 'Weekly');
    static readonly SECWEEKLY = new EnumMember(21, 'EverySecondWeek');
    static readonly MONTHLY = new EnumMember(20, 'Monthly');
    static readonly QUATERLY = new EnumMember(24, 'Quaterly');
    static readonly HALFYEARLY = new EnumMember(26, 'EverySixMoths');
    static readonly YEARLY = new EnumMember(30, 'Yearly');
}

export class ECostType extends EnumMember {
    static readonly FIXCOSTS = new EnumMember(0, 'FixCosts');
    static readonly VARIABLECOSTS = new EnumMember(1, 'VariableCosts');
}


export class EInOut extends EnumMember {
    static readonly INGOING = new EnumMember(0, 'Ingoing');
    static readonly OUTGOING = new EnumMember(1, 'Outgoing');
}

export interface Person {
    firstName: string;
    lastName?: string;
    birthday?: Date;

}

export interface VBase {
    id: number;
    desciption: string;
    name: string;
}

export interface SubCategory extends VBase{
    parent?: Category;
}

export interface Category extends VBase{
    children?: SubCategory[];
}

export interface TransactionBase extends VBase {
    date: Date;
    client: AccountBase;
    recipient: AccountBase;
    amount: number;
    referenz: string;
    recurring: EInterval;
}

export interface Transaction extends TransactionBase {
    inOut: EInOut;
    costType: ECostType;
    category: Category;
}

export interface AccountBase extends VBase {
    accountType: EAccountType;
    iban: string;
    bic: string;
    accountHolder: Person[];
    transactionHistory: Transaction[];
}
