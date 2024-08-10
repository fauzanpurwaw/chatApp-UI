export interface Customer {
  customerId: number,
  name: string;
  phone: string;
  type: string;
  pipeline: string;
  stages: string;
  source: string;
  salesOwner: string;
  category: string;
}

interface Conversation {
  text: string;
  sendTime: string;
  isUnread: boolean;
  sentFrom: string;
}

export interface ChatInfo {
  chatId: number;
  customerId: number;
  customerName: string;
  activeSalesId: number;
  activeSalesName: string;
  latestChatDate: string;
  conversations: Conversation[] | any[];
}