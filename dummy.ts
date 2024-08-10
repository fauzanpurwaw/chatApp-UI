import type { ChatInfo, Customer } from "./interface";

export const dummyDropdownData = [
  { name: 'Semua Channel', value: '' },
  { name: 'Channel 1', value: 'Channel 1' },
  { name: 'Channel 2', value: 'Channel 2' },
  { name: 'Channel 3', value: 'Channel 3' },
  { name: 'Channel 4', value: 'Channel 4' },
];

export const dummyCustomers: Customer[] = [
  {
    customerId: 1,
    name: "John Doe",
    phone: "+1234567890",
    type: "Lead",
    pipeline: "Sales Pipeline A",
    stages: "Contacted",
    source: "Website",
    salesOwner: "Alice Smith",
    category: "Retail"
  },
  {
    customerId: 2,
    name: "Jane Smith",
    phone: "+0987654321",
    type: "Opportunity",
    pipeline: "Sales Pipeline B",
    stages: "Negotiation",
    source: "Referral",
    salesOwner: "Bob Johnson",
    category: "Wholesale"
  },
  {
    customerId: 3,
    name: "Michael Brown",
    phone: "+1122334455",
    type: "Customer",
    pipeline: "Sales Pipeline C",
    stages: "Closed Won",
    source: "Email Campaign",
    salesOwner: "Chris Lee",
    category: "Enterprise"
  }
];

export const dummyChatInfos: ChatInfo[] = [
  {
    chatId: 101,
    customerId: 1,
    customerName: "Emily Clark",
    activeSalesId: 201,
    activeSalesName: "David Johnson",
    latestChatDate: "2024-08-09T08:30:00Z",
    conversations: [
      {
        text: "I'm interested in your new product line.",
        sendTime: "2024-08-09T08:00:00Z",
        isUnread: false,
        sentFrom: "Customer"
      },
      {
        text: "Thank you for reaching out! I'd be happy to provide more details.",
        sendTime: "2024-08-09T08:05:00Z",
        isUnread: true,
        sentFrom: "Sales"
      }
    ]
  },
  {
    chatId: 102,
    customerId: 2,
    customerName: "James Wilson",
    activeSalesId: 202,
    activeSalesName: "Sarah Thompson",
    latestChatDate: "2024-08-10T14:00:00Z",
    conversations: [
      {
        text: "Can we discuss pricing options next week?",
        sendTime: "2024-08-10T13:30:00Z",
        isUnread: false,
        sentFrom: "Customer"
      },
      {
        text: "Of course! I'll send you a calendar invite.",
        sendTime: "2024-08-10T13:45:00Z",
        isUnread: true,
        sentFrom: "Sales"
      }
    ]
  },
  {
    chatId: 103,
    customerId: 3,
    customerName: "Sophia Brown",
    activeSalesId: 203,
    activeSalesName: "Michael Lee",
    latestChatDate: "2024-08-11T10:00:00Z",
    conversations: [
      {
        text: "Thank you for the quick response to my inquiry.",
        sendTime: "2024-08-11T09:00:00Z",
        isUnread: false,
        sentFrom: "Customer"
      },
      {
        text: "You're welcome! Let me know if you have any other questions.",
        sendTime: "2024-08-11T09:15:00Z",
        isUnread: false,
        sentFrom: "Sales"
      }
    ]
  },
  {
    chatId: 104,
    customerId: 4,
    customerName: "Oliver Martin",
    activeSalesId: 204,
    activeSalesName: "Emma Davis",
    latestChatDate: "2024-08-12T09:45:00Z",
    conversations: [
      {
        text: "I need assistance with a bulk order.",
        sendTime: "2024-08-12T09:30:00Z",
        isUnread: false,
        sentFrom: "Customer"
      },
      {
        text: "Certainly! Let me gather some information for you.",
        sendTime: "2024-08-12T09:35:00Z",
        isUnread: true,
        sentFrom: "Sales"
      }
    ]
  },
  {
    chatId: 105,
    customerId: 5,
    customerName: "Amelia Taylor",
    activeSalesId: 205,
    activeSalesName: "William Roberts",
    latestChatDate: "2024-08-13T11:15:00Z",
    conversations: [
      {
        text: "Do you offer any discounts for new customers?",
        sendTime: "2024-08-13T10:45:00Z",
        isUnread: false,
        sentFrom: "Customer"
      },
      {
        text: "Yes, we have a special promotion running this month. I'll send you the details.",
        sendTime: "2024-08-13T11:00:00Z",
        isUnread: true,
        sentFrom: "Sales"
      }
    ]
  },
  {
    chatId: 106,
    customerId: 6,
    customerName: "Lucas White",
    activeSalesId: 206,
    activeSalesName: "Sophia Clark",
    latestChatDate: "2024-08-14T14:30:00Z",
    conversations: [
      {
        text: "Can you provide a quote for your services?",
        sendTime: "2024-08-14T14:00:00Z",
        isUnread: false,
        sentFrom: "Customer"
      },
      {
        text: "I'd be happy to! Please provide some details, and I'll prepare a quote.",
        sendTime: "2024-08-14T14:15:00Z",
        isUnread: true,
        sentFrom: "Sales"
      }
    ]
  },
  {
    chatId: 107,
    customerId: 7,
    customerName: "Mia Thompson",
    activeSalesId: 207,
    activeSalesName: "Ethan Harris",
    latestChatDate: "2024-08-15T16:00:00Z",
    conversations: [
      {
        text: "I'm interested in setting up a long-term contract.",
        sendTime: "2024-08-15T15:30:00Z",
        isUnread: false,
        sentFrom: "Customer"
      },
      {
        text: "That's great! Let's schedule a call to discuss the details.",
        sendTime: "2024-08-15T15:45:00Z",
        isUnread: true,
        sentFrom: "Sales"
      }
    ]
  },
  {
    chatId: 108,
    customerId: 8,
    customerName: "Isabella Moore",
    activeSalesId: 208,
    activeSalesName: "James Walker",
    latestChatDate: "2024-08-16T18:20:00Z",
    conversations: [
      {
        text: "Can you help me with a product return?",
        sendTime: "2024-08-16T18:00:00Z",
        isUnread: false,
        sentFrom: "Customer"
      },
      {
        text: "Certainly! I'll guide you through the process.",
        sendTime: "2024-08-16T18:10:00Z",
        isUnread: true,
        sentFrom: "Sales"
      }
    ]
  }
];
