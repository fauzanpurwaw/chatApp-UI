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
    customerPhoneNum: "08122828737",
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
    customerPhoneNum: "08634435345737",
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
    customerPhoneNum: "082443515737",
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
    customerPhoneNum: "08211115737",
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
    customerPhoneNum: "0824444444444",
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
    customerPhoneNum: "08255555555",
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
    customerPhoneNum: "08266666666",
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
    customerPhoneNum: "082777777777",
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
  },
  {
    chatId: 109,
    customerId: 9,
    customerName: "Liam Anderson",
    activeSalesId: 209,
    customerPhoneNum: "08288888888",
    activeSalesName: "Charlotte Evans",
    latestChatDate: "2024-08-17T10:45:00Z",
    conversations: [
      {
        text: "Hi Charlotte, I've been looking through the product catalog and I'm interested in the advanced analytics package. Can you tell me more about its capabilities?",
        sendTime: "2024-08-17T09:00:00Z",
        isUnread: false,
        sentFrom: "Customer"
      },
      {
        text: "Of course, Liam! The advanced analytics package includes real-time data processing, predictive analytics, and customizable dashboards. It's designed to provide deep insights into customer behavior and market trends.",
        sendTime: "2024-08-17T09:15:00Z",
        isUnread: false,
        sentFrom: "Sales"
      },
      {
        text: "That sounds impressive. How does it integrate with our existing CRM system? We need something that can seamlessly pull data without causing disruptions.",
        sendTime: "2024-08-17T09:30:00Z",
        isUnread: false,
        sentFrom: "Customer"
      },
      {
        text: "The integration is smooth and requires minimal setup. Our team will assist with the initial configuration to ensure that the analytics package pulls data directly from your CRM. You won't experience any downtime, and it will enhance your data-driven decision-making process.",
        sendTime: "2024-08-17T09:45:00Z",
        isUnread: true,
        sentFrom: "Sales"
      },
      {
        text: "Great! Can we schedule a demo next week to see it in action?",
        sendTime: "2024-08-17T10:00:00Z",
        isUnread: true,
        sentFrom: "Customer"
      },
      {
        text: "Absolutely, I'll send over a few time slots for you to choose from. Looking forward to showing you the full capabilities of the package.",
        sendTime: "2024-08-17T10:15:00Z",
        isUnread: false,
        sentFrom: "Sales"
      },
      {
        text: "Thanks, Charlotte! I appreciate your help.",
        sendTime: "2024-08-17T10:30:00Z",
        isUnread: false,
        sentFrom: "Customer"
      },
      {
        text: "Anytime, Liam! Talk to you soon.",
        sendTime: "2024-08-17T10:45:00Z",
        isUnread: false,
        sentFrom: "Sales"
      }
    ]
  },
  {
    chatId: 110,
    customerId: 10,
    customerName: "Noah Williams",
    activeSalesId: 210,
    customerPhoneNum: "0812999999",
    activeSalesName: "Olivia Brown",
    latestChatDate: "2024-08-18T12:50:00Z",
    conversations: [
      {
        text: "Hi Olivia, I'm considering upgrading to the premium support plan. What additional benefits does it offer compared to the standard plan?",
        sendTime: "2024-08-18T11:00:00Z",
        isUnread: false,
        sentFrom: "Customer"
      },
      {
        text: "Hello Noah! The premium support plan offers several benefits, including 24/7 support, a dedicated account manager, and faster response times. Additionally, you'll receive priority access to new features and updates.",
        sendTime: "2024-08-18T11:15:00Z",
        isUnread: false,
        sentFrom: "Sales"
      },
      {
        text: "The dedicated account manager sounds appealing. Can you tell me more about how they assist with our needs?",
        sendTime: "2024-08-18T11:30:00Z",
        isUnread: false,
        sentFrom: "Customer"
      },
      {
        text: "Certainly! Your dedicated account manager will work closely with you to understand your business goals and ensure that our solutions align with them. They will also provide regular check-ins, personalized recommendations, and direct support for any issues or queries.",
        sendTime: "2024-08-18T11:45:00Z",
        isUnread: true,
        sentFrom: "Sales"
      },
      {
        text: "That level of support would definitely help us optimize our use of the product. How quickly can we switch to the premium plan if we decide to proceed?",
        sendTime: "2024-08-18T12:00:00Z",
        isUnread: true,
        sentFrom: "Customer"
      },
      {
        text: "You can switch to the premium plan immediately. Once you confirm, we'll make the necessary adjustments, and your dedicated account manager will reach out within the same day to start the onboarding process.",
        sendTime: "2024-08-18T12:15:00Z",
        isUnread: false,
        sentFrom: "Sales"
      },
      {
        text: "Sounds perfect. I'll discuss this with my team and get back to you by the end of the day.",
        sendTime: "2024-08-18T12:30:00Z",
        isUnread: false,
        sentFrom: "Customer"
      },
      {
        text: "Take your time, Noah! I'll be here to assist whenever you're ready.",
        sendTime: "2024-08-18T12:50:00Z",
        isUnread: false,
        sentFrom: "Sales"
      }
    ]
  },
  {
    chatId: 111,
    customerId: 11,
    customerName: "Ava Scott",
    activeSalesId: 211,
    customerPhoneNum: "08129101010",
    activeSalesName: "Benjamin King",
    latestChatDate: "2024-08-19T14:30:00Z",
    conversations: [
      {
        text: "Hi Benjamin, we're planning a major marketing campaign next quarter. How can your product help us track and measure its success?",
        sendTime: "2024-08-19T13:00:00Z",
        isUnread: false,
        sentFrom: "Customer"
      },
      {
        text: "Hi Ava! Our product includes advanced tracking features that allow you to monitor key performance indicators in real-time. You'll be able to track engagement, conversions, and ROI across multiple channels.",
        sendTime: "2024-08-19T13:20:00Z",
        isUnread: false,
        sentFrom: "Sales"
      },
      {
        text: "That sounds useful. Can it integrate with our existing tools, like Google Analytics and HubSpot?",
        sendTime: "2024-08-19T13:45:00Z",
        isUnread: false,
        sentFrom: "Customer"
      },
      {
        text: "Yes, our product integrates seamlessly with both Google Analytics and HubSpot. This ensures that you can continue to use your existing tools while enhancing your data insights with our platform.",
        sendTime: "2024-08-19T14:00:00Z",
        isUnread: true,
        sentFrom: "Sales"
      },
      {
        text: "Excellent. We have a meeting with the marketing team tomorrow. Could you prepare a demo that highlights these features?",
        sendTime: "2024-08-19T14:15:00Z",
        isUnread: true,
        sentFrom: "Customer"
      },
      {
        text: "I'd be happy to! I'll prepare a customized demo that focuses on the tracking and integration features. I'll send you the details shortly.",
        sendTime: "2024-08-19T14:30:00Z",
        isUnread: false,
        sentFrom: "Sales"
      }
    ]
  },
  {
    chatId: 112,
    customerId: 12,
    customerName: "Ella Robinson",
    activeSalesId: 212,
    customerPhoneNum: "081211212121",
    activeSalesName: "Henry White",
    latestChatDate: "2024-08-20T16:00:00Z",
    conversations: [
      {
        text: "Hey Henry, we’re experiencing some issues with the latest update. The new features aren’t functioning as expected. Can you help?",
        sendTime: "2024-08-20T15:00:00Z",
        isUnread: false,
        sentFrom: "Customer"
      },
      {
        text: "Hi Ella, I'm sorry to hear about the issues you're facing. Could you provide more details on the specific features that aren’t working?",
        sendTime: "2024-08-20T15:15:00Z",
        isUnread: false,
        sentFrom: "Sales"
      },
      {
        text: "Sure. The dashboard isn’t loading the real-time data correctly, and the notifications are delayed. We’re seeing data inconsistencies compared to what we used to get before the update.",
        sendTime: "2024-08-20T15:30:00Z",
        isUnread: false,
        sentFrom: "Customer"
      },
      {
        text: "Thank you for the details. I'll escalate this to our tech team immediately and ensure it's prioritized. In the meantime, you can revert to the previous version if the issues are critical to your operations.",
        sendTime: "2024-08-20T15:45:00Z",
        isUnread: true,
        sentFrom: "Sales"
      },
      {
        text: "I appreciate that, but we'd prefer to stay on the latest version if possible. Please keep me updated on the fix.",
        sendTime: "2024-08-20T16:00:00Z",
        isUnread: true,
        sentFrom: "Customer"
      },
      {
        text: "Understood. I'll personally follow up with the tech team and keep you informed. We’ll aim to have a fix rolled out as soon as possible.",
        sendTime: "2024-08-20T16:15:00Z",
        isUnread: false,
        sentFrom: "Sales"
      }
    ]
  },
  {
    chatId: 113,
    customerId: 13,
    customerName: "Mason Wright",
    activeSalesId: 213,
    customerPhoneNum: "0812323232312",
    activeSalesName: "Lucas Martinez",
    latestChatDate: "2024-08-21T17:30:00Z",
    conversations: [
      {
        text: "Hi Lucas, we’re expanding our team and need additional licenses for your software. Can you assist with this?",
        sendTime: "2024-08-21T16:00:00Z",
        isUnread: false,
        sentFrom: "Customer"
      },
      {
        text: "Hi Mason, congratulations on the expansion! I can definitely help with that. How many additional licenses do you need, and when would you like them activated?",
        sendTime: "2024-08-21T16:15:00Z",
        isUnread: false,
        sentFrom: "Sales"
      },
      {
        text: "We’ll need 10 more licenses, and we’d like them activated by the start of next month. Also, can we get a discount since we’re increasing our license count?",
        sendTime: "2024-08-21T16:45:00Z",
        isUnread: false,
        sentFrom: "Customer"
      },
      {
        text: "I’ll work on getting those licenses added to your account and see what I can do about a discount. We value your business, so I’ll make sure you get the best deal possible.",
        sendTime: "2024-08-21T17:00:00Z",
        isUnread: true,
        sentFrom: "Sales"
      },
      {
        text: "Thanks, Lucas. I appreciate it. Let me know once everything is set up.",
        sendTime: "2024-08-21T17:30:00Z",
        isUnread: false,
        sentFrom: "Customer"
      },
      {
        text: "Will do, Mason! I’ll keep you posted.",
        sendTime: "2024-08-21T17:45:00Z",
        isUnread: false,
        sentFrom: "Sales"
      }
    ]
  }
];
