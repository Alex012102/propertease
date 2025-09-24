export interface PortalTypes {
  children?: React.ReactNode;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export interface BarTypes {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}
