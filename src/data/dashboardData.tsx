import { CalendarX2Icon, Clock8Icon, TriangleAlertIcon, TruckIcon } from "lucide-react";

// Statistics card data
export const StatisticsCardData = [
  {
    icon: <TruckIcon className='size-4' />,
    value: '42',
    title: 'Shipped Orders',
    changePercentage: '+18.2%'
  },
  {
    icon: <TriangleAlertIcon className='size-4' />,
    value: '8',
    title: 'Damaged Returns',
    changePercentage: '-8.7%'
  },
  {
    icon: <CalendarX2Icon className='size-4' />,
    value: '27',
    title: 'Missed Delivery Slots',
    changePercentage: '+4.3%'
  },
  {
    icon: <Clock8Icon className='size-4' />,
    value: '13',
    title: 'Late Deliveries',
    changePercentage: '-2.5%'
  }
]