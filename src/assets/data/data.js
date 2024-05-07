import { faCommentMedical, faCreditCard, faEye, faHourglassHalf, faMicrophone, faMicrophoneSlash, faNoteSticky, faPaperclip, faPersonChalkboard, faRectangleList, faSheetPlastic, faSquareXmark, faStopwatch, faVirus } from "@fortawesome/free-solid-svg-icons";

export var schemeItems = [
  {
    id: "60-40 Scheme",
    name: '60-40 Scheme',
  },
  {
    id: "70-50 Scheme",
    name: '70-50 Scheme',
  },
  {
    id: "80-60 Scheme",
    name: '80-60 Scheme',
  },
  {
    id: "90-70 Scheme",
    name: '90-70 Scheme',
  },
];
export var LeadStatus = [
  {
    id: "Interested",
    name: 'Interested',
  },
  {
    id: "Not Interested",
    name: 'Not Interested',
  },
  {
    id: "Follow Up",
    name: 'Follow Up',
  },

];
export var AddressProof = [
  {
    id: "Aadhar Card",
    name: 'Aadhar Card',
  },
  {
    id: "Driving License",
    name: 'Driving License',
  },
  {
    id: "Voter ID",
    name: 'Voter ID',
  },

];
export var BankProof = [
  {
    id: "passbook",
    name: 'passbook',
  },
  {
    id: "cancel check",
    name: 'cancel check',
  },
  {
    id: "statement 1st page",
    name: 'statement 1st page',
  },

];
export var RefundReason = [
  {
    id: "Interested",
    name: 'Interested',
  },
  {
    id: "Not Interested",
    name: 'Not Interested',
  },
];
export var UberStatus = [
  {
    id: "Active",
    name: 'Active',
  },
  {
    id: "New to Uber",
    name: 'New to Uber',
  },
  {
    id: "Incomplete UBER profile",
    name: 'Incomplete UBER profile',
  },

];
export var LeadSource = [
  {
    id: "Referral",
    name: 'Referral',
  },
  {
    id: "Campion",
    name: 'Campion',
  },
  {
    id: "Walk-in",
    name: 'Walk-in',
  },
  {
    id: "Uber Center",
    name: 'Uber Center',
  },
  {
    id: "Event",
    name: 'Event',
  },
  {
    id: "Others",
    name: 'Others',
  },


];
export var LeadChannel = [
  {
    id: "OLX",
    name: 'OLX',
  },
  {
    id: "APNA",
    name: 'APNA',
  },
  {
    id: "Work India",
    name: 'Work India',
  },
  {
    id: "Uber App",
    name: 'Uber App',
  },
  {
    id: "Radio",
    name: 'Radio',
  },
  {
    id: "News paper",
    name: 'News paper',
  }, {
    id: "Car Advt",
    name: 'Car Advt',
  }, {
    id: "JobHai",
    name: 'JobHai',
  }, {
    id: "Indeeed",
    name: 'Indeeed',
  }, {
    id: "Facebook",
    name: 'Facebook',
  }, {
    id: "WhatsApp",
    name: 'WhatsApp',
  }, {
    id: "Instagram",
    name: 'Instagram',
  }, {
    id: "YouTube",
    name: 'YouTube',
  }, {
    id: "Telegram",
    name: 'Telegram',
  },

];
export var Status = [
  {
    id: "Driver Cum Owner",
    name: 'Driver Cum Owner',
  },
  {
    id: "Better Competition Scheme",
    name: 'Better Competition Scheme',
  },
  {
    id: "Don’t want to Change",
    name: 'Don’t want to Change',
  },
  {
    id: "Uber Blacklisted/Blocked",
    name: 'Uber Blacklisted/Blocked',
  },
  {
    id: "Ask for different Scheme",
    name: 'Ask for different Scheme',
  },
  {
    id: "Ask for Different Car",
    name: 'Ask for Different Car',
  },
  {
    id: "New Driving License",
    name: 'New Driving License',
  },
  {
    id: "Driver want fixed Salary",
    name: 'Driver want fixed Salary',
  },
  {
    id: "Others",
    name: 'Others',
  },
];

export const LeadsData = []

const firstNames = ['Sam', 'Jane', 'John', 'Tom', 'Bob', 'Alice', 'Emily', 'David', 'Mark', 'James', 'Kate', 'Lily', 'Michael', 'Lauren', 'Mary', 'Richard', 'Sarah', 'Robert', 'Carol']
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson', 'Martinez', 'Anderson', 'Taylor', 'Thomas', 'Hernandez', 'Moore', 'Martin']
const statuses = ['Not Interested', 'Interested', 'Follow Up']

for (let i = 0; i < 200; i++) {
  LeadsData.push({
    name: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
    zl: `ZL${Math.floor(Math.random() * 100000) + 1000}`,
    date: `${Math.floor(Math.random() * 30) + 1}/${Math.floor(Math.random() * 12) + 1}/${2020 + Math.floor(Math.random() * 5)}`,
    time: `${Math.floor(Math.random() * 12) + 1}:${Math.floor(Math.random() * 60)} ${Math.random() > 0.5 ? 'AM' : 'PM'}`,
    status: statuses[Math.floor(Math.random() * statuses.length)]
  })
}
export const LeadsDataOnboard = []

const statusesOnboard = ['Initial Payment', 'Training Completed',
  'Training Pending', 'QC Rejected', 'QC Pending', 'Refund & Rejected',
  'Incomplete Profile', 'Waiting Handover', 'Agreement Pending', 'Handover Completed']

for (let i = 0; i < 200; i++) {
  LeadsDataOnboard.push({
    name: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
    zl: `ZL${Math.floor(Math.random() * 100000) + 1000}`,
    date: `${Math.floor(Math.random() * 30) + 1}/${Math.floor(Math.random() * 12) + 1}/${2020 + Math.floor(Math.random() * 5)}`,
    time: `${Math.floor(Math.random() * 12) + 1}:${Math.floor(Math.random() * 60)} ${Math.random() > 0.5 ? 'AM' : 'PM'}`,
    status: statusesOnboard[Math.floor(Math.random() * statusesOnboard.length)]
  })
}

export const historyData = [
  { id: '1', icon: faMicrophone, color: '#C82026', date: '08/01/2024', agent: 'Sanjay', description: 'Created New Leads' },
  { id: '2', icon: faMicrophone, color: '#C82026', date: '23/01/2024', agent: 'Namita', description: 'Updated Mobile No.' },
  { id: '3', icon: faMicrophoneSlash, color: '#444', date: '28/01/2024', agent: 'Dinesh', description: 'Changed Lead Status' },
  { id: '4', icon: faMicrophoneSlash, color: '#444', date: '12/02/2024', agent: 'Satish', description: 'Updated Driving License No.' },
];
export const paymentData = [
  { id: '1', icon: faPaperclip, color: '#C82026', date: '08/01/2024', amount: '1000', mode: 'Card' },
  { id: '2', icon: faPaperclip, color: '#C82026', date: '23/01/2024', amount: '700', mode: 'UPI' },
  { id: '3', icon: faPaperclip, color: '#C82026', date: '28/01/2024', amount: '2', mode: 'Card' },
  { id: '4', icon: faPaperclip, color: '#C82026', date: '12/02/2024', amount: '44', mode: 'UPI' },
];
export const documentData = [
  { id: '1', icon: faEye, color: '#C82026', date: '08/01/2024', description: 'description', document: 'Drive Photo' },
  { id: '2', icon: faEye, color: '#C82026', date: '08/01/2024', description: 'description', document: 'Aadhar Card' },
  { id: '3', icon: faEye, color: '#C82026', date: '08/01/2024', description: 'description', document: 'PAN Card' },
  { id: '4', icon: faEye, color: '#C82026', date: '08/01/2024', description: 'description', document: 'Driving License' },
  { id: '5', icon: faEye, color: '#C82026', date: '08/01/2024', description: 'description', document: 'Police Clearance Certificate*' },
  { id: '6', icon: faEye, color: '#C82026', date: '08/01/2024', description: 'description', document: 'Court record status' },

];

export const TrainingSlot = [
  { checked: true, start: 6, end: 7 },
  { checked: true, start: 7, end: 8 },
  { checked: false, start: 8, end: 9 },
  { checked: false, start: 9, end: 10 },
  { checked: false, start: 10, end: 11 },
  { checked: false, start: 11, end: 12 },
  { checked: false, start: 12, end: 13 },
  { checked: false, start: 13, end: 14 },
  { checked: false, start: 14, end: 15 },
  { checked: false, start: 15, end: 16 },
  { checked: false, start: 16, end: 17 },
  { checked: false, start: 17, end: 18 },
  { checked: false, start: 18, end: 19 },
];
export const Stages = [
  30, 20, 10, 20]

export const SchemeTableData = [
  { scheme: 'Stage 1', trips: '1st', days: '5', reward: '1,000' },
  { scheme: 'Stage 2', trips: '100', days: '15', reward: '2,000' },
  { scheme: 'Stage 3', trips: '250', days: '30', reward: '2,000' },
]

export const dataRewards = [
  {
    title: "Incentive Slab 1",
    name: "8 (Rs. 5000)",
    progress: "100",
    start: "0",
    end: "8",
    total: "5000",
    color: '#C82026',
    labelTop: 'Handover',
    labelBottom: 'Amount'
  },
  {
    title: "Incentive Slab 2",
    name: '3 (Rs. 1875)',
    progress: "50",
    start: "8",
    end: "12",
    totalStart: "5000",
    total: "5000",
    color: '#C82026',
    labelTop: 'Handover',
    labelBottom: 'Amount',
    barColor: "#FFA200"
  },
  {
    title: "Incentive Slab 3",
    name: '',
    progress: "0",
    start: "12",
    end: "15",
    totalStart: "8000",
    total: "10000",
    color: '#C82026',
    labelTop: 'Handover',
    labelBottom: 'Amount'
  }
]

export const SliderData = [
  {
    title: "HANDOVER OF THIS WEEK",
    number: "132",
    page: "Leads",
    image: require("../../assets/images/c2.png"),
  },
  {
    title: "LEADS OF THIS WEEK",
    number: "510",
    page: "Leads",
    image: require("../../assets/images/c3.png"),
  },
  {
    title: "INITIAL PAYMENT OF THIS WEEK",
    number: "193",
    page: "Leads",
    image: require("../../assets/images/c1.png"),
  },

]

export const PerformanceData = [
  {
    icon: faVirus,
    title: 'Total Leads',
    subTitle: '38 to reach target',
    number: "120"
  },
  {
    icon: faNoteSticky,
    title: 'Today’s Follow Up',
    subTitle: '7 to reach target',
    number: "64"
  },
  {
    icon: faCommentMedical,
    title: 'Interested',
    subTitle: '68 to reach target ',
    number: "94"
  },
  {
    icon: faStopwatch,
    title: 'Over Due ',
    subTitle: '68 to reach target ',
    number: "33"
  },

]

export const onBoardingDashboardData = [
  {
    icon: faCreditCard,
    title: 'Initial Payment ',
    number: "64"
  },
  {
    icon: faPersonChalkboard,
    title: 'Training Pending',
    number: "71"
  },
  {
    icon: faRectangleList,
    title: 'Incomplete Profile',
    number: "45"
  },
  {
    icon: faHourglassHalf,
    title: 'Waiting Handover',
    number: "45"
  },
  {
    icon: faSquareXmark,
    title: 'QC Rejected',
    number: "124"
  },
  {
    icon: faSheetPlastic,
    title: 'QC Pending',
    number: "32"
  },
]